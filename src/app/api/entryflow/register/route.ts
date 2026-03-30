import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import { Visitor } from '@/models/Visitor'
import { generatePassId } from '@/lib/server-utils'
import { generateQRCodeBase64 } from '@/lib/qrcode'
import { uploadToCloudinary } from '@/lib/cloudinary'
import { sendPassEmail } from '@/lib/resend'

// Simple in-memory rate limiter (per IP, max 5 per hour)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()

function checkRateLimit(ip: string): boolean {
  const now  = Date.now()
  const data = rateLimitMap.get(ip)
  if (!data || now > data.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 60 * 60 * 1000 })
    return true
  }
  if (data.count >= 5) return false
  data.count++
  return true
}

export async function POST(req: NextRequest) {
  // Rate limit
  const ip = req.headers.get('x-forwarded-for') || 'unknown'
  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: 'Too many registrations from your network. Try again later.' },
      { status: 429 }
    )
  }

  const body = await req.json()
  const { name, email, phone, company, passType, designation } = body

  // Validate
  if (!name || !email || !phone) {
    return NextResponse.json({ error: 'Name, email and phone are required.' }, { status: 400 })
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 })
  }

  await connectDB()

  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://www.andinnovatech.com'

  // Duplicate check: assign the same pass if they already registered
  const existing = await Visitor.findOne({ email: email.toLowerCase() })
  if (existing) {
    const verificationUrl = `${appUrl}/entryflow/verify/${existing.passId}`
    const qrDataUrl = await generateQRCodeBase64(verificationUrl)
    return NextResponse.json({
      success: true,
      passId: existing.passId,
      message: 'Welcome back! Here is your saved entry pass.',
      qrCodeUrl: existing.qrCodeUrl || qrDataUrl,
      designation: existing.designation,
      isExisting: true,
      visitor: {
        name: existing.name,
        email: existing.email,
        passId: existing.passId,
        passType: existing.passType,
        company: existing.company,
        eventName: existing.eventName,
        status: existing.status,
        qrCode: existing.qrCodeUrl || qrDataUrl
      }
    })
  }

  const eventName  = process.env.NEXT_PUBLIC_EVENT_NAME  || 'Event'
  const eventDate  = process.env.NEXT_PUBLIC_EVENT_DATE  || ''
  const eventVenue = process.env.NEXT_PUBLIC_EVENT_VENUE || ''

  const passId = generatePassId()
  const verificationUrl = `${appUrl}/entryflow/verify/${passId}`

  // Generate QR code
  const qrBase64 = await generateQRCodeBase64(verificationUrl)

  // Upload QR to Cloudinary
  let qrCodeUrl = ''
  try {
    qrCodeUrl = await uploadToCloudinary(qrBase64, 'event-passes/qr', passId)
  } catch { /* non-fatal */ }

  // Save visitor
  const visitor = await Visitor.create({
    passId, name, email: email.toLowerCase(), phone,
    company: company || '',
    passType: passType || 'Visitor',
    designation: designation || passType || 'Visitor',
    status: 'registered',
    qrCodeUrl,
    eventName, eventDate, eventVenue,
  })

  // Send email (non-blocking)
  sendPassEmail({
    to: email, visitorName: name, passId,
    passType: passType || 'Visitor',
    eventName, eventDate, eventVenue,
    qrCodeBase64: qrBase64,
    passImageUrl: qrCodeUrl,
  }).catch(console.error)

  // Send to Google Sheets if Webhook is configured
  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          passId: visitor.passId,
          name: visitor.name,
          email: visitor.email,
          phone: visitor.phone,
          company: visitor.company,
          passType: visitor.passType,
          designation: visitor.designation,
          eventName: visitor.eventName,
          status: visitor.status,
          date: new Date().toISOString()
        })
      })
      console.log(`[Google Sheets] Pushed ${visitor.email}`)
    } catch (err) {
      console.error('[Google Sheets] Webhook error:', err)
    }
  }

  return NextResponse.json({
    success: true,
    passId: visitor.passId,
    message: `EntryFlow Pass Sent to ${email}`,
    qrCodeUrl: visitor.qrCodeUrl || qrBase64,
    designation: visitor.designation,
    visitor: {
      name: visitor.name,
      email: visitor.email,
      passId: visitor.passId,
      passType: visitor.passType,
      company: visitor.company,
      eventName: visitor.eventName,
      status: visitor.status,
      qrCode: visitor.qrCodeUrl || qrBase64
    }
  })
}
