import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { Event } from '@/models/Event';

export async function GET(req: NextRequest, { params }: { params: { slug: string } }) {
  try {
    const { slug } = params;
    await connectDB();

    const event = await Event.findOne({ slug });
    if (!event) {
      // Fallback for easy demo
      return NextResponse.json({ 
        success: true, 
        event: { 
          name: 'Demo Event', 
          slug: slug || 'demo', 
          venue: 'Virtual/Local Venue', 
          date: '2026-12-31' 
        } 
      });
    }

    return NextResponse.json({ success: true, event });
  } catch (error: any) {
    console.error('Fetch event error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
