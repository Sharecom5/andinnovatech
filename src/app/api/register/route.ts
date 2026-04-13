import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { Event } from '@/models/Event';
import { Visitor } from '@/models/Visitor';
import { sendPassEmail } from '@/lib/resend';
import QRCode from 'qrcode';
import crypto from 'crypto';

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, company, address, designation, passType, eventSlug } = await req.json();

    if (!name || !email || !eventSlug) {
      return NextResponse.json({ error: 'Missing required fields (name, email, eventSlug)' }, { status: 400 });
    }

    await connectDB();

    // Find the event
    let event = await Event.findOne({ slug: eventSlug });
    
    // Auto-create demo event if not exists, for ease of use
    if (!event) {
      event = await Event.create({
        name: 'Demo Event',
        slug: eventSlug || 'demo',
        venue: 'Virtual/Local Venue',
        date: '2026-12-31'
      });
    }

    // Check if already registered for this event (allowing duplicate name if same email)
    const existing = await Visitor.findOne({ email: email.toLowerCase(), eventId: event._id });
    if (existing) {
       // Return existing pass instead of error
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
      passId,
      name,
      email: email.toLowerCase(),
      phone,
      company,
      address,
      designation,
      passType: passType || 'Visitor',
      status: 'registered',
      qrCodeUrl: qrCodeDataUri,
      eventId: event._id,
      eventName: event.name,
      eventDate: event.date,
      eventVenue: event.venue,
    });

    console.log('Attempting to save visitor:', newVisitor.passId);
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
      console.log('Email sent successfully to:', email);
    } catch (emailErr) {
      console.error('Failed to send pass email:', emailErr);
      // We don't fail the registration if email fails, but we log it
    }

    return NextResponse.json({
      success: true,
      passId,
      qrCodeUrl: qrCodeDataUri,
      message: 'Registration successful'
    });

  } catch (error: any) {
    console.error('Registration error details:', {
      message: error.message,
      stack: error.stack,
      errors: error.errors // This captures Mongoose validation errors
    });
    return NextResponse.json({ 
      error: 'Internal Server Error', 
      details: error.message 
    }, { status: 500 });
  }
}
