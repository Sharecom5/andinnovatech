import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
    return NextResponse.json({ message: 'Contact API is active' });
}

export async function POST(request: Request) {
    try {
        const { name, email, phone, service, budget, message } = await request.json();
        console.log('📬 NEW FORM SUBMISSION:', { name, email, service });

        if (!name || !email || !message) {
            console.log('⚠️ MISSING FIELDS:', { name: !!name, email: !!email, message: !!message });
            return NextResponse.json(
                { error: 'Missing required fields (Name, Email, or Message)' },
                { status: 400 }
            );
        }

        // Development Fallback: If no API key is set, log to console and return success
        if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 'your_key_here') {
            console.log('📝 [DEV MODE] API Key not set or default. Logging to console only.');
            console.log('LEAD DATA:', { name, email, phone, service, budget, message });
            return NextResponse.json({
                success: true,
                message: 'Lead captured in development mode (API Key missing)'
            });
        }

        const targetEmail = process.env.CONTACT_EMAIL || 'hello@andinnovatech.com';

        // 1. Send detailed notification to Admin
        console.log(`📤 ATTEMPTING ADMIN EMAIL TO: ${targetEmail}`);
        const adminEmail = await resend.emails.send({
            from: 'AnD Innovatech <hello@andinnovatech.com>',
            to: [targetEmail],
            replyTo: email,
            subject: `🚀 New Lead: ${name} - ${service}`,
            html: `
                <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9fafb; padding: 40px; border-radius: 20px;">
                    <h2 style="color: #1a252b; font-size: 24px; border-bottom: 2px solid #409191; padding-bottom: 10px; margin-bottom: 20px;">New Project Inquiry</h2>
                    <div style="background-color: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
                        <p style="margin: 0 0 10px 0;"><strong>Customer Name:</strong> ${name}</p>
                        <p style="margin: 0 0 10px 0;"><strong>Email Address:</strong> <a href="mailto:${email}" style="color: #409191;">${email}</a></p>
                        <p style="margin: 0 0 10px 0;"><strong>Phone Number:</strong> ${phone || 'Not provided'}</p>
                        <p style="margin: 0 0 20px 0;"><strong>Requested Service:</strong> <span style="background-color: #40919120; color: #409191; padding: 4px 10px; border-radius: 100px; font-weight: bold; font-size: 13px;">${service}</span></p>
                        <p style="margin: 0 0 10px 0;"><strong>Budget Range:</strong> ${budget || 'Not specified'}</p>
                        
                        <div style="margin-top: 25px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                            <p style="font-weight: bold; color: #1a252b; margin-bottom: 10px;">Project Description:</p>
                            <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; color: #4b5563; line-height: 1.6; font-style: italic;">
                                "${message}"
                            </div>
                        </div>
                    </div>
                </div>
            `,
        });

        if (adminEmail.error) {
            console.error('❌ RESEND ADMIN ERROR:', adminEmail.error);
            return NextResponse.json({ 
                error: 'Email delivery failed', 
                details: adminEmail.error.message,
                code: adminEmail.error.name 
            }, { status: 500 });
        }

        console.log('✅ ADMIN EMAIL SUCCESS:', adminEmail.data?.id);

        // 2. Send professional confirmation to Customer
        console.log(`📤 ATTEMPTING CUSTOMER EMAIL TO: ${email}`);
        const customerEmail = await resend.emails.send({
            from: 'AnD Innovatech <hello@andinnovatech.com>',
            to: [email],
            subject: `Thank you for contacting AnD Innovatech, ${name.split(' ')[0]}!`,
            html: `
                <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 16px; overflow: hidden;">
                    <div style="background-color: #1a252b; padding: 40px; text-align: center;">
                        <h1 style="color: #ffffff; margin: 0; font-size: 28px;">Request Received</h1>
                    </div>
                    <div style="padding: 40px; color: #374151;">
                        <p style="font-size: 18px; margin-top: 0;">Hi ${name},</p>
                        <p style="line-height: 1.6;">Thank you for reaching out to **AnD Innovatech**. We've received your inquiry regarding <strong>${service}</strong> and our strategy team is already reviewing your details.</p>
                        <p style="line-height: 1.6;">One of our consultants will contact you within the next 24 hours.</p>
                        <p style="margin-top: 40px; border-top: 1px solid #e5e7eb; padding-top: 20px; font-size: 14px; color: #6b7280;">
                            Best Regards,<br>
                            <strong>The AnD Innovatech Team</strong><br>
                            <a href="https://www.andinnovatech.com" style="color: #409191; text-decoration: none;">www.andinnovatech.com</a>
                        </p>
                    </div>
                </div>
            `,
        });

        if (customerEmail.error) {
            console.warn('⚠️ CUSTOMER EMAIL FAILED (but Admin was sent):', customerEmail.error.message);
        } else {
            console.log('✅ CUSTOMER EMAIL SUCCESS:', customerEmail.data?.id);
        }

        return NextResponse.json({ 
            success: true, 
            message: 'Inquiry received successfully',
            adminId: adminEmail.data?.id 
        });
    } catch (error: any) {
        console.error('❌ CONTACT API CRITICAL ERROR:', error);
        return NextResponse.json(
            { error: 'Internal server error', details: error?.message || 'Unknown' },
            { status: 500 }
        );
    }
}
