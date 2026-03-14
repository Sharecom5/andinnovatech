import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/mdx';
import { canadaLocations } from '@/lib/canada-locations';
import { usaLocations } from '@/lib/usa-locations';
import { servicesList } from '@/lib/services';
import { usaCities } from '@/lib/usa-cities';
import { usaCitiesSeo } from '@/lib/usa-cities-seo';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.andinnovatech.com';

    // Static pages
    const staticPages = [
        '',
        '/about/',
        '/services/',
        '/portfolio/',
        '/blog/',
        '/contact/',
        '/pricing/',
        '/privacy-policy/',
        '/terms-of-service/',
        '/sitemap-list/',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 1.0,
    }));

    // Services pages
    const services = [
        'website-development',
        'software-development',
        'seo-services',
        'ai-automation',
        'cloud-computing',
        'it-consulting',
        'mobile-app-development',
        'mobile-app-development-india',
        'seo-services-usa',
        'seo-services-india',
        'seo-services-canada',
        'software-development-usa',
        'website-development-canada',
        'ai-lead-automation',
        'website-development-hvac',
        'website-development-plumbers',
        'website-development-landscaping',
        'ai-chatbot-hvac',
        'ai-chatbot-cleaning',
        'ai-chatbot-plumbers',
        'ai-voice-bot-roofing',
        'local-seo-experts',
        'offshore-development-startups',
    ].map((service) => ({
        url: `${baseUrl}/services/${service}/`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    // Specific High-Intent Location Landing Pages
    const locationLandingPages = [
        'web-development-small-business-chicago',
        'affordable-seo-houston',
        'ai-automation-new-york',
        'offshore-partner-austin',
        'website-development-hvac-dallas',
        'seo-agency-los-angeles',
        'web-development-small-business-miami',
        'it-consulting-startups-san-francisco',
        'ai-chatbot-phoenix',
        'affordable-web-development-atlanta',
    ].map((slug) => ({
        url: `${baseUrl}/${slug}/`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    // Comparison Pages
    const comparisonPages = [
        'agency-comparison',
        'custom-ai-vs-off-the-shelf',
        'fixed-price-vs-hourly-development',
        'wordpress-vs-nextjs-speed-test',
    ].map((slug) => ({
        url: `${baseUrl}/comparison/${slug}/`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    // Portfolio projects
    const portfolioPages = [
        'ecommerce-platform',
        'healthcare-app',
        'mobile-banking',
        'crm-system',
        'cloud-migration',
        'seo-campaign',
        'etes-events',
        'taction-soft',
        'sevya-artisan',
        'sg-lifestyle',
        'investor-key',
        'kdb-school',
        'ramganga-organization',
        'construction-mirror',
        'renewable-mirror',
        'seo-optimization-los-angeles',
        'website-development-nyc',
        'branding-chicago-startup',
    ].map((project) => ({
        url: `${baseUrl}/portfolio/${project}/`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    // Blog posts
    const posts = await getAllPosts();
    const blogPages = posts.map((post) => ({
        url: `${baseUrl}/${post.slug}/`,
        lastModified: new Date(post.date || new Date()),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    // Web Development City Pages
    const webDevCityPages = (usaCities || []).map((city) => ({
        url: `${baseUrl}/web-development-${city.slug}/`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    // SEO Services City Pages
    const seoCityPages = (usaCitiesSeo || []).map((city) => ({
        url: `${baseUrl}/seo-services-${city.slug}/`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    // Canadian Geo-landing pages
    const canadaPages: MetadataRoute.Sitemap = [];
    servicesList.forEach(service => {
        canadaLocations.forEach(loc => {
            canadaPages.push({
                url: `${baseUrl}/seo-for-${service.toLowerCase().replace(/\s+/g, '-')}-${loc.slug}/`,
                lastModified: new Date(),
                changeFrequency: 'monthly' as const,
                priority: 0.6,
            });
        });
    });

    // USA Geo-landing pages
    const usaGeoPages: MetadataRoute.Sitemap = [];
    servicesList.forEach(service => {
        usaLocations.forEach(loc => {
            usaGeoPages.push({
                url: `${baseUrl}/seo-for-${service.toLowerCase().replace(/\s+/g, '-')}-companies-${loc.slug}/`,
                lastModified: new Date(),
                changeFrequency: 'monthly' as const,
                priority: 0.6,
            });
        });
    });

    return [
        ...staticPages,
        ...services,
        ...locationLandingPages,
        ...comparisonPages,
        ...portfolioPages,
        ...blogPages,
        ...webDevCityPages,
        ...seoCityPages,
        ...canadaPages,
        ...usaGeoPages,
    ];
}
