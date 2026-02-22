/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://andinnovatech.com',
    generateRobotsTxt: true,
    exclude: ['/api/*'],
    trailingSlash: true,
    transform: async (config, path) => {
        if (path.includes('web-development-')) {
            return {
                loc: path,
                changefreq: 'monthly',
                priority: 0.8,
                lastmod: new Date().toISOString(),
            }
        }
        return {
            loc: path,
            changefreq: config.changefreq,
            priority: config.priority,
            lastmod: new Date().toISOString(),
        }
    },
};
