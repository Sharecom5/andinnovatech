import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { Event } from '@/models/Event';
import { getServerSession } from "next-auth/next";

export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession() as any;
    
    // DEV MOCK: Use a static organizer ID if not logged in
    const organizerId = session?.user?.id || "657a1234567890abcdef1234"; 

    await connectDB();
    
    const events = await Event.find({ organizerId }).sort({ createdAt: -1 });
    
    return NextResponse.json({ success: true, events });
  } catch (error: any) {
    console.error('List events error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession() as any;
    
    // DEV MOCK: Use a static organizer ID if not logged in
    const organizerId = session?.user?.id || "657a1234567890abcdef1234";

    const { 
      name, slug, date, venue, description, passSettings, endDate 
    } = await req.json();

    if (!name || !slug || !date || !venue) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    await connectDB();

    // Check if slug is unique
    const existing = await Event.findOne({ slug });
    if (existing) {
      return NextResponse.json({ error: 'Slug already in use' }, { status: 400 });
    }

    const newEvent = await Event.create({
      organizerId,
      name,
      slug: slug.toLowerCase().replace(/\s+/g, '-'),
      date,
      endDate,
      venue,
      description,
      registrationOpen: true,
      passTypes: ['Visitor', 'VIP', 'Speaker'],
      passSettings: passSettings || {
        showName: true,
        showDesignation: true,
        showPhone: false,
        showCompany: true
      }
    });

    return NextResponse.json({ success: true, event: newEvent });
  } catch (error: any) {
    console.error('Create event error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
