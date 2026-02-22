import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        if (!email) {
            return NextResponse.json(
                { error: 'Email is required' },
                { status: 400 }
            );
        }

        // Development Fallback: If no API key is set, log to console and return success
        if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 'your_key_here') {
            console.log('📧 [DEV MODE] New Newsletter Subscriber:', { email });
            return NextResponse.json({
                success: true,
                message: 'Subscriber captured in development mode (console logged)'
            });
        }

        // 1. Send notification to admin
        const adminEmail = await resend.emails.send({
            from: 'AnD Innovatech <hello@andinnovatech.com>',
            to: ['hello@andinnovatech.com'],
            subject: `🔔 New Subscriber: ${email}`,
            html: `
                <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f0fdf4; padding: 40px; border-radius: 16px;">
                    <h2 style="color: #065f46; font-size: 20px; margin-bottom: 20px;">New Website Subscriber</h2>
                    <div style="background-color: white; padding: 25px; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
                        <p style="margin: 0; color: #374151;">A new user has joined the mailing list:</p>
                        <p style="font-size: 18px; color: #059669; font-weight: bold; margin: 15px 0;">${email}</p>
                        <p style="font-size: 12px; color: #6b7280; margin: 0;">Date: ${new Date().toLocaleString()}</p>
                    </div>
                </div>
            `,
        });

        // 2. Send Welcome email to subscriber
        await resend.emails.send({
            from: 'AnD Innovatech <hello@andinnovatech.com>',
            to: [email],
            subject: 'Welcome to AnD Innovatech! 👋',
            html: `
                <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 16px; overflow: hidden;">
                    <div style="background: linear-gradient(135deg, #1a252b 0%, #409191 100%); padding: 60px 40px; text-align: center;">
                        <h1 style="color: #ffffff; margin: 0; font-size: 32px; font-weight: 800;">Welcome to the Inner Circle</h1>
                    </div>
                    <div style="padding: 40px; color: #374151; line-height: 1.6;">
                        <p style="font-size: 18px; margin-top: 0;">Thanks for subscribing!</p>
                        <p>You're now on the list to receive the latest updates on digital innovation, SEO strategies, and tech insights from the **AnD Innovatech** team.</p>
                        
                        <div style="margin: 30px 0; padding: 25px; background-color: #f0fdfa; border-radius: 12px; border: 1px solid #ccfbf1;">
                            <p style="margin: 0; color: #0f766e; font-weight: 600;">What to expect:</p>
                            <ul style="margin: 10px 0 0 0; padding-left: 20px; color: #134e4a;">
                                <li>Early access to case studies</li>
                                <li>Wep app & Software development tips</li>
                                <li>Local SEO growth hacks</li>
                            </ul>
                        </div>

                        <p>Have a project in mind? We'd love to help you build something extraordinary.</p>
                        
                        <a href="https://andinnovatech.com/contact" style="display: inline-block; background-color: #409191; color: #ffffff; padding: 14px 30px; border-radius: 100px; text-decoration: none; font-weight: bold; margin-top: 10px;">Get a Free Audit</a>
                        
                        <p style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 14px; color: #9ca3af; text-align: center;">
                            © ${new Date().getFullYear()} AnD Innovatech. All rights reserved.<br>
                            If you didn't mean to subscribe, you can safely ignore this email.
                        </p>
                    </div>
                </div>
            `,
        });

        if (adminEmail.error) {
            console.error('Resend error:', adminEmail.error);
            return NextResponse.json({ error: adminEmail.error.message }, { status: 400 });
        }

        return NextResponse.json({ success: true, data: adminEmail.data });
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
