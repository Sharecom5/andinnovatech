import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { Event } from '@/models/Event';
import { Visitor } from '@/models/Visitor';
import { Organizer } from '@/models/Organizer';
import { sendPassEmail } from '@/lib/resend';
import QRCode from 'qrcode';
import crypto from 'crypto';

const FREE_PASS_LIMIT = 10;

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, company, address, designation, passType, eventSlug } = await req.json();

    if (!name || !email || !eventSlug) {
      return NextResponse.json({ error: 'Missing required fields (name, email, eventSlug)' }, { status: 400 });
    }

    await connectDB();

    // Find the event
    let event = await Event.findOne({ slug: eventSlug });

    // Auto-create demo event if not exists (for demo-event slug only)
    if (!event && eventSlug === 'demo-event') {
      event = await Event.create({
        name: 'Demo Event',
        slug: 'demo-event',
        venue: 'Virtual/Local Venue',
        date: '2026-12-31'
      });
    }

    if (!event) {
      return NextResponse.json({ error: 'Event not found.' }, { status: 404 });
    }

    // ─── Freemium Gate ────────────────────────────────────────────────
    if (event.organizerId) {
      const organizer = await Organizer.findById(event.organizerId);
      
      if (organizer && organizer.plan === 'free') {
        // Count total passes ever generated across ALL of this organizer's events
        const allEventIds = await Event.find({ organizerId: event.organizerId }).select('_id');
        const eventIdList = allEventIds.map((e: any) => e._id);
        const totalPasses = await Visitor.countDocuments({ eventId: { $in: eventIdList } });

        if (totalPasses >= FREE_PASS_LIMIT) {
          return NextResponse.json({
            error: 'PLAN_LIMIT_REACHED',
            message: `Free plan limit of ${FREE_PASS_LIMIT} passes reached. The event organizer needs to upgrade to continue accepting registrations.`,
            totalPasses,
            limit: FREE_PASS_LIMIT,
          }, { status: 402 });
        }
      }
    }
    // ─────────────────────────────────────────────────────────────────

    // Check if already registered for this event
    const existing = await Visitor.findOne({ email: email.toLowerCase(), eventId: event._id });
    if (existing) {
      return NextResponse.json({
        success: true,
        message: 'Already registered',
        passId: existing.passId
      });
    }

    // Generate unique passId: EVENTPREFIX-XXXXXX
    let passId = "";
    let isUnique = false;
    const prefix = (event.name || "EVT").substring(0, 3).toUpperCase();

    while (!isUnique) {
      const uniquePart = crypto.randomBytes(3).toString('hex').toUpperCase();
      passId = `${prefix}-${uniquePart}`;
      const existingPass = await Visitor.findOne({ passId });
      if (!existingPass) isUnique = true;
    }

    // Generate QR code with full verification URL
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://www.andinnovatech.com';
    const verificationUrl = `${baseUrl}/pass/verify/${passId}`;
    const qrCodeDataUri = await QRCode.toDataURL(verificationUrl);

    // Create new Visitor
    const newVisitor = new Visitor({
      passId, name, email: email.toLowerCase(), phone, company, address, designation,
      passType: passType || 'Visitor',
      status: 'registered',
      qrCodeUrl: qrCodeDataUri,
      eventId: event._id,
      eventName: event.name,
      eventDate: event.date,
      eventVenue: event.venue,
    });

    await newVisitor.save();

    // Send automated pass email via Resend
    try {
      await sendPassEmail({
        to: email.toLowerCase(),
        visitorName: name,
        passId,
        passType: passType || 'Visitor',
        eventName: event.name,
        eventDate: event.date,
        eventVenue: event.venue,
        qrCodeBase64: qrCodeDataUri
      });
    } catch (emailErr) {
      console.error('Failed to send pass email:', emailErr);
    }

    return NextResponse.json({
      success: true,
      passId,
      qrCodeUrl: qrCodeDataUri,
      message: 'Registration successful'
    });

  } catch (error: any) {
    console.error('Registration error:', error.message);
    return NextResponse.json({ error: 'Internal Server Error', details: error.message }, { status: 500 });
  }
}
