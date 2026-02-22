import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Protect admin dashboard routes (but not the login page)
    if (pathname.startsWith('/admin/dashboard')) {
        const token = request.cookies.get('wp_token')?.value;

        if (!token) {
            const loginUrl = new URL('/admin', request.url);
            loginUrl.searchParams.set('redirect', pathname);
            return NextResponse.redirect(loginUrl);
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/admin/dashboard/:path*'],
};
