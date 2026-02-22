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
            {
                source: '/blog/:slug/',
                destination: '/:slug/',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
