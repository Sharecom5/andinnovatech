import { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/lib/mdx';
import { usaCities } from '@/lib/usa-cities';
import { usaCitiesSeo } from '@/lib/usa-cities-seo';
import { canadaLocations } from '@/lib/canada-locations';
import { usaLocations } from '@/lib/usa-locations';
import { servicesList } from '@/lib/services';

export const metadata: Metadata = {
    title: 'Sitemap | All Pages & Services',
    description: 'A complete list of all pages and services provided by AnD Innovatech across the USA, Canada, and India. Explore our local SEO and web development landing pages.',
};

export default async function SitemapPage() {
    const posts = await getAllPosts();

    const sections = [
        {
            title: 'Core Pages',
            links: [
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about/' },
                { name: 'Services', href: '/services/' },
                { name: 'Portfolio', href: '/portfolio/' },
                { name: 'Pricing & ROI', href: '/pricing/' },
                { name: 'Blog', href: '/blog/' },
                { name: 'Contact Us', href: '/contact/' },
                { name: 'Privacy Policy', href: '/privacy-policy/' },
                { name: 'Terms of Service', href: '/terms-of-service/' },
            ],
        },
        {
            title: 'Our Services',
            links: [
                { name: 'Website Development', href: '/services/website-development/' },
                { name: 'Software Development', href: '/services/software-development/' },
                { name: 'SEO Services', href: '/services/seo-services/' },
                { name: 'Cloud Computing', href: '/services/cloud-computing/' },
                { name: 'IT Consulting', href: '/services/it-consulting/' },
                { name: 'Mobile App Development', href: '/services/mobile-app-development/' },
                { name: 'Mobile App Development India', href: '/services/mobile-app-development-india/' },
                { name: 'SEO Services USA', href: '/services/seo-services-usa/' },
                { name: 'SEO Services India', href: '/services/seo-services-india/' },
                { name: 'SEO Services Canada', href: '/services/seo-services-canada/' },
                { name: 'Software Development USA', href: '/services/software-development-usa/' },
                { name: 'Website Development Canada', href: '/services/website-development-canada/' },
            ],
        },
        {
            title: 'Portfolio Projects',
            links: [
                { name: 'E-commerce Platform', href: '/portfolio/ecommerce-platform/' },
                { name: 'Healthcare App', href: '/portfolio/healthcare-app/' },
                { name: 'Mobile Banking', href: '/portfolio/mobile-banking/' },
                { name: 'CRM System', href: '/portfolio/crm-system/' },
                { name: 'Cloud Migration', href: '/portfolio/cloud-migration/' },
                { name: 'SEO Campaign', href: '/portfolio/seo-campaign/' },
                { name: 'Etes Events', href: '/portfolio/etes-events/' },
                { name: 'Taction Soft', href: '/portfolio/taction-soft/' },
                { name: 'Sevya Artisan', href: '/portfolio/sevya-artisan/' },
                { name: 'SG Lifestyle', href: '/portfolio/sg-lifestyle/' },
                { name: 'Investor Key', href: '/portfolio/investor-key/' },
                { name: 'KDB School', href: '/portfolio/kdb-school/' },
                { name: 'Ramganga Organization', href: '/portfolio/ramganga-organization/' },
                { name: 'Construction Mirror', href: '/portfolio/construction-mirror/' },
                { name: 'Renewable Mirror', href: '/portfolio/renewable-mirror/' },
            ],
        },
        {
            title: 'Blog Articles',
            links: posts.map(post => ({ name: post.title, href: `/${post.slug}/` })),
        },
    ];

    return (
        <main className="pt-32 pb-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Website Sitemap</h1>
                    <p className="text-gray-600">Discover all the pages, services, and local solutions provided by AnD Innovatech.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {sections.map(section => (
                        <div key={section.title} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <h2 className="text-xl font-bold text-gray-900 mb-6 border-b pb-2">{section.title}</h2>
                            <ul className="space-y-3">
                                {section.links.map(link => (section.title === 'Blog Articles' ? (
                                    <li key={link.href}>
                                        <Link href={link.href} className="text-gray-600 hover:text-blue-600 transition-colors text-sm line-clamp-1">
                                            {link.name}
                                        </Link>
                                    </li>
                                ) : (
                                    <li key={link.href}>
                                        <Link href={link.href} className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                                            {link.name}
                                        </Link>
                                    </li>
                                )))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="space-y-12">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Local SEO & City Pages</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                <h3 className="font-bold mb-4 text-blue-600">USA Web Development</h3>
                                <ul className="space-y-2 grid grid-cols-1">
                                    {usaCities.slice(0, 15).map(city => (
                                        <li key={city.slug}>
                                            <Link href={`/web-development-${city.slug}/`} className="text-gray-600 hover:text-blue-600">
                                                {city.name} Web Development
                                            </Link>
                                        </li>
                                    ))}
                                    <li><span className="text-gray-400">...and {usaCities.length - 15} more cities</span></li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                <h3 className="font-bold mb-4 text-blue-600">USA SEO Services</h3>
                                <ul className="space-y-2 grid grid-cols-1">
                                    {usaCitiesSeo.slice(0, 15).map(city => (
                                        <li key={city.slug}>
                                            <Link href={`/seo-services-${city.slug}/`} className="text-gray-600 hover:text-blue-600">
                                                {city.name} SEO Agency
                                            </Link>
                                        </li>
                                    ))}
                                    <li><span className="text-gray-400">...and {usaCitiesSeo.length - 15} more cities</span></li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                <h3 className="font-bold mb-4 text-blue-600">Canadian Geo-Landing</h3>
                                <ul className="space-y-2 grid grid-cols-1">
                                    {canadaLocations.slice(0, 15).map(loc => (
                                        <li key={loc.slug}>
                                            <Link href={`/seo-for-${servicesList[0].toLowerCase()}-${loc.slug}/`} className="text-gray-600 hover:text-blue-600">
                                                SEO for {servicesList[0]} in {loc.city}
                                            </Link>
                                        </li>
                                    ))}
                                    <li><span className="text-gray-400">...and many more locations</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="text-center bg-blue-600 text-white p-12 rounded-3xl mt-12">
                        <h2 className="text-3xl font-bold mb-4">Don't See Your Location?</h2>
                        <p className="mb-8 max-w-2xl mx-auto opacity-90">We provide services globally. Contact us today for a custom quote or to learn how we can help your business grow regardless of where you are located.</p>
                        <Link href="/contact/" className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-all">
                            Talk to Us Today
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
