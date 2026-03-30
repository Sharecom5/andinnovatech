/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
            },
            {
                protocol: 'https',
                hostname: '**.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: '**.pexels.com',
            },
        ],
    },
    trailingSlash: true,
    async redirects() {
        return [
            // ── Canonical: force all non-www to www ──────────────────────
            {
                source: '/:path*',
                has: [{ type: 'host', value: 'andinnovatech.com' }],
                destination: 'https://www.andinnovatech.com/:path*',
                permanent: true,
            },
            {
                source: '/our-blog/',
                destination: '/blog/',
                permanent: true,
            },
            // ── Legacy URL redirects ──────────────────────────────────────
            {
                source: '/event-pass/:path*',
                destination: '/entryflow/:path*',
                permanent: true,
            },
            {
                source: '/api/event-pass/:path*',
                destination: '/api/entryflow/:path*',
                permanent: true,
            },
            {
                source: '/blog/:slug/',
                destination: '/:slug/',
                permanent: true,
            },
            {
                source: '/about-us/',
                destination: '/about/',
                permanent: true,
            },
            {
                source: '/contact-us/',
                destination: '/contact/',
                permanent: true,
            },
            {
                source: '/services-list/',
                destination: '/services/',
                permanent: true,
            },
        ];
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
