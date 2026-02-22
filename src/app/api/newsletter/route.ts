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

        // Send notification to admin
        const { data, error } = await resend.emails.send({
            from: 'AnD Innovatech <onboarding@resend.dev>',
            to: ['andinnovatech@gmail.com'],
            subject: `New Newsletter Subscriber: ${email}`,
            html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
            <h2 style="color: #0f172a; border-bottom: 2px solid #10b981; padding-bottom: 10px;">New Newsletter Subscription</h2>
            <div style="margin-top: 20px;">
                <p>A new user has subscribed to the AnD Innovatech newsletter.</p>
                <p><strong>Email Address:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>Subscribed On:</strong> ${new Date().toLocaleString()}</p>
            </div>
            <p style="margin-top: 30px; font-size: 12px; color: #64748b;">
                Sent from AnD Innovatech website newsletter form.
            </p>
        </div>
      `,
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json({ error: error.message }, { status: 400 });
        }

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
