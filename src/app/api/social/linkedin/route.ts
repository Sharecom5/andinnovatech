import { NextResponse } from 'next/server';
import { postToLinkedIn } from '@/lib/linkedin';

export async function POST(req: Request) {
    try {
        const { text, accessToken } = await req.json();

        if (!text || !accessToken) {
            return NextResponse.json(
                { error: 'Missing content or access token' },
                { status: 400 }
            );
        }

        const result = await postToLinkedIn(accessToken, text);

        return NextResponse.json({
            success: true,
            data: result
        });
    } catch (error: any) {
        console.error('LinkedIn Post Error:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to post to LinkedIn' },
            { status: 500 }
        );
    }
}
