import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import { Visitor } from '@/models/Visitor'
import { sendOTPEmail } from '@/lib/resend'
import QRCode from 'qrcode'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { action, contact, otp } = body

    if (!contact) {
      return NextResponse.json({ error: 'Email or Phone is required' }, { status: 400 })
    }

    await connectDB()
    const visitor = await Visitor.findOne({ 
      $or: [
        { email: contact.toLowerCase().trim() },
        { phone: contact.trim() }
      ]
    })

    if (!visitor) {
      return NextResponse.json({ error: 'No ticket found for this contact detail' }, { status: 404 })
    }

    if (action === 'get_pass') {
      // Generate the real QR string immediately for the frontend
      const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://www.andinnovatech.com'
      const verificationUrl = `${appUrl}/entryflow/verify/${visitor.passId}`
      const qrDataUrl = await QRCode.toDataURL(verificationUrl, { margin: 1 })

      return NextResponse.json({
        success: true,
        visitor: {
          name: visitor.name,
          email: visitor.email,
          passId: visitor.passId,
          passType: visitor.passType,
          company: visitor.company,
          eventName: visitor.eventName || 'Event',
          status: visitor.status,
          qrCode: qrDataUrl
        }
      })
    }

    return NextResponse.json({ error: 'Invalid action specified' }, { status: 400 })

  } catch (err: any) {
    console.error("Pass Recovery Error", err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

