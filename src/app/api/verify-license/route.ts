import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { License } from '@/models/License';

export async function POST(req: NextRequest) {
  try {
    const { key, domain } = await req.json();

    if (!key || !domain) {
      return NextResponse.json({ error: 'Missing key or domain' }, { status: 400 });
    }

    await connectDB();

    const license = await License.findOne({ key, domain });

    if (!license) {
      return NextResponse.json({ valid: false, reason: 'Invalid license key or domain mismatch' });
    }

    if (!license.active) {
      return NextResponse.json({ valid: false, reason: 'License is deactivated' });
    }

    const now = new Date();
    if (license.expiryDate < now) {
      return NextResponse.json({ valid: false, reason: 'License has expired' });
    }

    return NextResponse.json({ 
      valid: true, 
      expiresAt: license.expiryDate,
      message: 'License is valid and active' 
    });

  } catch (error: any) {
    console.error('License verification error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
