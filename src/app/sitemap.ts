import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/mdx';
import { usaCities } from '@/lib/usa-cities';
import { usaCitiesSeo } from '@/lib/usa-cities-seo';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://andinnovatech.com';

    // Static pages
    const staticPages = [
        '',
        '/about/',
        '/services/',
        '/portfolio/',
        '/blog/',
        '/contact/',
        '/privacy-policy/',
        '/terms-of-service/',
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
        'cloud-computing',
        'it-consulting',
        'mobile-app-development',
        'mobile-app-development-india',
        'seo-services-usa',
        'seo-services-india',
        'seo-services-canada',
        'software-development-usa',
        'website-development-canada',
    ].map((service) => ({
        url: `${baseUrl}/services/${service}/`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
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
        lastModified: new Date(post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    // Web Development City Pages
    const webDevCityPages = usaCities.map((city) => ({
        url: `${baseUrl}/web-development-${city.slug}/`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    // SEO Services City Pages
    const seoCityPages = usaCitiesSeo.map((city) => ({
        url: `${baseUrl}/seo-services-${city.slug}/`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    return [
        ...staticPages,
        ...services,
        ...portfolioPages,
        ...blogPages,
        ...webDevCityPages,
        ...seoCityPages,
    ];
}
