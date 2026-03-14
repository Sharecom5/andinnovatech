import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/mdx';
import { usaCities } from '@/lib/usa-cities';
import { usaCitiesSeo } from '@/lib/usa-cities-seo';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Calendar, ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import CityServicePage from '@/components/CityServicePage';
import CitySeoPage from '@/components/CitySeoPage';

import { canadaLocations } from '@/lib/canada-locations';
import { usaLocations } from '@/lib/usa-locations';
import { servicesList } from '@/lib/services';
import CanadaLocalSeoPage from '@/components/CanadaLocalSeoPage';
import UsaGeoLandingPage from '@/components/UsaGeoLandingPage';

// ── CRITICAL: Force proper HTTP 404 for unknown slugs ───────────
// Without this, Next.js serves a 200 for unmatched dynamic routes
// (e.g. random URLs like /testing-for-404-xyz), which hurts SEO/indexing.
export const dynamicParams = false;

interface DynamicPageProps {
    params: { slug: string };
}

// ── SEO metadata title formulas ─────────────────────────────────
const seoTitleFormulas = [
    (name: string, stateCode: string) => `#1 SEO Agency ${name}, ${stateCode}`,
    (name: string, _sc: string, state: string) => `SEO Experts in ${name}, ${state}`,
    (name: string, stateCode: string) => `${name} ${stateCode} SEO Company`,
    (name: string) => `Local SEO Services in ${name}`,
    (name: string) => `${name} Search Engine Optimization`,
    (name: string, stateCode: string) => `Best SEO Agency ${name} ${stateCode}`,
    (name: string) => `${name} SEO & Lead Automation`,
];

export async function generateStaticParams() {
    // Blog posts
    const posts = await getAllPosts();
    const blogParams = posts.map((post) => ({ slug: post.slug }));

    // Web development city pages
    const webDevParams = usaCities.map((city) => ({
        slug: `web-development-${city.slug}`,
    }));

    // SEO services city pages
    const seoParams = usaCitiesSeo.map((city) => ({
        slug: `seo-services-${city.slug}`,
    }));

    // Canadian Geo-landing pages
    const canadaParams: { slug: string }[] = [];
    servicesList.forEach(service => {
        canadaLocations.forEach(loc => {
            canadaParams.push({
                slug: `seo-for-${service.toLowerCase().replace(/\s+/g, '-')}-${loc.slug}`,
            });
        });
    });

    // USA Geo-landing pages
    const usaParams: { slug: string }[] = [];
    servicesList.forEach(service => {
        usaLocations.forEach(loc => {
            usaParams.push({
                slug: `seo-for-${service.toLowerCase().replace(/\s+/g, '-')}-companies-${loc.slug}`,
            });
        });
    });

    return [...blogParams, ...webDevParams, ...seoParams, ...canadaParams, ...usaParams];
}

export async function generateMetadata({ params }: DynamicPageProps): Promise<Metadata> {
    const { slug } = params;
    const lowerSlug = slug.toLowerCase();

    // ── Web Development City Pages ──────────────────────────────
    if (lowerSlug.startsWith('web-development-')) {
        const citySlug = lowerSlug.replace('web-development-', '');
        const city = usaCities.find((c) => c.slug.toLowerCase() === citySlug);
        if (!city) return { title: 'Not Found' };

        const index = usaCities.findIndex(c => c.slug === city.slug);
        const titleFormulas = [
            `Web Development in ${city.name}, ${city.stateCode}`,
            `${city.name}'s Best Web Design Agency`,
            `Custom Web Development ${city.name} ${city.stateCode}`,
            `High-Performance Web Design ${city.name}`,
        ];
        const title = titleFormulas[index % titleFormulas.length];
        const url = `https://www.andinnovatech.com/web-development-${city.slug}/`;
        return {
            title,
            description: `AnD Innovatech delivers enterprise-grade web development in ${city.name}. Custom websites for ${city.industries.slice(0, 2).join(', ')}.`,
            openGraph: {
                title: `${title} | AnD Innovatech`,
                description: `AnD Innovatech delivers web development in ${city.name}.`,
                url,
                images: [{ url: 'https://www.andinnovatech.com/images/dev_abstract.png' }],
            },
            alternates: { canonical: url },
        };
    }

    // ── SEO Services City Pages ─────────────────────────────────
    if (lowerSlug.startsWith('seo-services-')) {
        const citySlug = lowerSlug.replace('seo-services-', '');
        const cityIndex = usaCitiesSeo.findIndex((c) => c.slug.toLowerCase() === citySlug);
        const city = usaCitiesSeo[cityIndex];
        if (!city) return { title: 'Not Found' };

        const titleFn = seoTitleFormulas[cityIndex % seoTitleFormulas.length];
        const title = titleFn(city.name, city.stateCode, city.state);

        const descFormulas = [
            `Expert SEO services for ${city.name} businesses in ${city.topIndustries[0].toLowerCase()} & ${city.topIndustries[1].toLowerCase()}. AnD Innovatech helps ${city.name} brands rank higher and grow organic traffic.`,
            `${city.name} SEO services tailored for ${city.topIndustries[0]} companies. AnD Innovatech delivers real keyword rankings and measurable organic growth for ${city.stateCode} businesses.`,
            `Local SEO services for ${city.name} businesses in ${city.topIndustries[0].toLowerCase()} and beyond. Get found on Google and grow with AnD Innovatech's data-driven strategies.`,
            `AnD Innovatech provides ${city.name}, ${city.stateCode} businesses with proven SEO strategies — specializing in ${city.topIndustries[0]} and ${city.topIndustries[1]}.`,
        ];
        const description = descFormulas[cityIndex % descFormulas.length].slice(0, 160);
        const url = `https://www.andinnovatech.com/seo-services-${city.slug}/`;

        return {
            title,
            description,
            openGraph: {
                title: `${title} | AnD Innovatech`,
                description,
                url,
                type: 'website',
                images: [{ url: 'https://www.andinnovatech.com/images/seo_abstract.png' }],
            },
            alternates: { canonical: url },
        };
    }

    // ── USA Geo-Landing Pages ─────────────────────────────
    if (lowerSlug.startsWith('seo-for-') && lowerSlug.includes('-companies-')) {
        const loc = usaLocations.find(l => lowerSlug.endsWith(l.slug));
        if (loc) {
            const serviceSlug = lowerSlug.replace('seo-for-', '').replace(`-companies-${loc.slug}`, '');
            const service = serviceSlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

            const title = `${service} SEO ${loc.city}, ${loc.stateCode}`;
            const description = `AnD Innovatech offers expert local SEO for ${service} businesses in ${loc.city}, ${loc.state}. Rank on Google & generate more leads. Free audit today!`;

            const url = `https://www.andinnovatech.com/${lowerSlug}/`;
            return {
                title,
                description,
                openGraph: {
                    title: `${title} | AnD Innovatech`,
                    description,
                    url,
                    type: 'website',
                    images: [{ url: 'https://www.andinnovatech.com/images/seo_abstract.png' }],
                },
                alternates: { canonical: url }
            };
        }
    }

    // ── Canadian Geo-Landing Pages ─────────────────────────────
    if (lowerSlug.startsWith('seo-for-')) {
        const loc = canadaLocations.find(l => lowerSlug.endsWith(l.slug));
        if (loc) {
            const serviceSlug = lowerSlug.replace('seo-for-', '').replace(`-${loc.slug}`, '');
            const service = serviceSlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

            const title = `${service} SEO in ${loc.city}, ${loc.province}`;
            const description = `AnD Innovatech offers expert SEO services for ${service} businesses in ${loc.city}, ${loc.province}. Rank higher on Google & get more local customers.`;

            const url = `https://www.andinnovatech.com/${lowerSlug}/`;
            return {
                title,
                description,
                openGraph: {
                    title: `${title} | AnD Innovatech`,
                    description,
                    url,
                    type: 'website',
                    images: [{ url: 'https://www.andinnovatech.com/images/seo_abstract.png' }],
                },
                alternates: {
                    canonical: url
                }
            };
        }
    }

    // ── Blog Posts ──────────────────────────────────────────────
    const post = await getPostBySlug(slug);
    if (!post) return { title: 'Post Not Found' };

    const url = `https://www.andinnovatech.com/${slug}/`;

    // Ensure blog titles are concise for the layout template
    const cleanTitle = post.title.length > 55 ? post.title.substring(0, 52) + '...' : post.title;

    return {
        title: cleanTitle,
        description: post.description,
        openGraph: {
            title: `${cleanTitle} | AnD Innovatech`,
            description: post.description,
            url,
            type: 'article',
            publishedTime: post.date,
            images: [{ url: post.image || 'https://www.andinnovatech.com/images/hero_main_abstract.png' }],
        },
        alternates: {
            canonical: url,
        },
    };
}

export default async function DynamicPage({ params }: DynamicPageProps) {
    const { slug } = params;
    const lowerSlug = slug.toLowerCase();

    // ── Web Development City Pages ──────────────────────────────
    if (lowerSlug.startsWith('web-development-')) {
        const citySlug = lowerSlug.replace('web-development-', '');
        const city = usaCities.find((c) => c.slug.toLowerCase() === citySlug);
        if (!city) notFound();
        return (
            <>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@graph': [
                                {
                                    '@type': 'BreadcrumbList',
                                    '@id': `https://www.andinnovatech.com/${lowerSlug}/#breadcrumb`,
                                    itemListElement: [
                                        { '@type': 'ListItem', position: 1, item: { '@type': 'WebPage', '@id': 'https://www.andinnovatech.com/', name: 'Home' } },
                                        { '@type': 'ListItem', position: 2, item: { '@type': 'WebPage', '@id': 'https://www.andinnovatech.com/services/', name: 'Services' } },
                                        { '@type': 'ListItem', position: 3, item: { '@type': 'WebPage', '@id': `https://www.andinnovatech.com/${lowerSlug}/`, name: `Web Dev in ${city.name}` } }
                                    ]
                                }
                            ]
                        })
                    }}
                />
                <CityServicePage city={city} />
            </>
        );
    }

    // ── SEO Services City Pages ─────────────────────────────────
    if (lowerSlug.startsWith('seo-services-')) {
        const citySlug = lowerSlug.replace('seo-services-', '');
        const cityIndex = usaCitiesSeo.findIndex((c) => c.slug.toLowerCase() === citySlug);
        const city = usaCitiesSeo[cityIndex];
        if (!city) notFound();
        return (
            <>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@graph': [
                                {
                                    '@type': 'BreadcrumbList',
                                    '@id': `https://www.andinnovatech.com/${lowerSlug}/#breadcrumb`,
                                    itemListElement: [
                                        { '@type': 'ListItem', position: 1, item: { '@type': 'WebPage', '@id': 'https://www.andinnovatech.com/', name: 'Home' } },
                                        { '@type': 'ListItem', position: 2, item: { '@type': 'WebPage', '@id': 'https://www.andinnovatech.com/services/', name: 'Services' } },
                                        { '@type': 'ListItem', position: 3, item: { '@type': 'WebPage', '@id': `https://www.andinnovatech.com/${lowerSlug}/`, name: `SEO in ${city.name}` } }
                                    ]
                                }
                            ]
                        })
                    }}
                />
                <CitySeoPage city={city} cityIndex={cityIndex} />
            </>
        );
    }

    // ── USA Geo-Landing Pages ─────────────────────────────
    if (lowerSlug.startsWith('seo-for-') && lowerSlug.includes('-companies-')) {
        const loc = usaLocations.find(l => lowerSlug.endsWith(l.slug));
        if (loc) {
            const serviceSlug = lowerSlug.replace('seo-for-', '').replace(`-companies-${loc.slug}`, '');
            const service = serviceSlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

            return (
                <>
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
                                '@context': 'https://schema.org',
                                '@graph': [
                                    {
                                        '@type': 'BreadcrumbList',
                                        '@id': `https://www.andinnovatech.com/${lowerSlug}/#breadcrumb`,
                                        itemListElement: [
                                            { '@type': 'ListItem', position: 1, item: { '@type': 'WebPage', '@id': 'https://www.andinnovatech.com/', name: 'Home' } },
                                            { '@type': 'ListItem', position: 2, item: { '@type': 'WebPage', '@id': `https://www.andinnovatech.com/${lowerSlug}/`, name: `${service} SEO in ${loc.city}` } }
                                        ]
                                    }
                                ]
                            })
                        }}
                    />
                    <UsaGeoLandingPage
                        country="USA"
                        service={service}
                        city={loc.city}
                        state={loc.state}
                        stateCode={loc.stateCode}
                    />
                </>
            );
        }
    }

    // ── Canadian Geo-Landing Pages ─────────────────────────────
    if (lowerSlug.startsWith('seo-for-')) {
        const loc = canadaLocations.find(l => lowerSlug.endsWith(l.slug));
        if (loc) {
            const serviceSlug = lowerSlug.replace('seo-for-', '').replace(`-${loc.slug}`, '');
            const service = serviceSlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

            return (
                <>
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
                                '@context': 'https://schema.org',
                                '@graph': [
                                    {
                                        '@type': 'BreadcrumbList',
                                        '@id': `https://www.andinnovatech.com/${lowerSlug}/#breadcrumb`,
                                        itemListElement: [
                                            { '@type': 'ListItem', position: 1, item: { '@type': 'WebPage', '@id': 'https://www.andinnovatech.com/', name: 'Home' } },
                                            { '@type': 'ListItem', position: 2, item: { '@type': 'WebPage', '@id': `https://www.andinnovatech.com/${lowerSlug}/`, name: `${service} SEO in ${loc.city}` } }
                                        ]
                                    }
                                ]
                            })
                        }}
                    />
                    <CanadaLocalSeoPage
                        country="Canada"
                        service={service}
                        city={loc.city}
                        province={loc.province}
                        provinceCode={loc.provinceCode}
                    />
                </>
            );
        }
    }

    // ── Blog Posts ──────────────────────────────────────────────
    const post = await getPostBySlug(slug);
    if (!post) notFound();

    return (
        <article className="pt-32 pb-24 bg-white dark:bg-navy text-navy dark:text-white min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@graph': [
                            {
                                '@type': 'BlogPosting',
                                '@id': `https://www.andinnovatech.com/${slug}/#post`,
                                headline: post.title,
                                description: post.description,
                                datePublished: post.date,
                                dateModified: post.date,
                                author: post.author
                                    ? { '@type': 'Person', name: post.author }
                                    : { '@id': 'https://www.andinnovatech.com/#organization' },
                                publisher: { '@id': 'https://www.andinnovatech.com/#organization' },
                                image: post.image || 'https://www.andinnovatech.com/og-image.jpg',
                                mainEntityOfPage: {
                                    '@type': 'WebPage',
                                    '@id': `https://www.andinnovatech.com/${slug}/`
                                }
                            },
                            {
                                '@type': 'BreadcrumbList',
                                '@id': `https://www.andinnovatech.com/${slug}/#breadcrumb`,
                                itemListElement: [
                                    { '@type': 'ListItem', position: 1, item: { '@id': 'https://www.andinnovatech.com/', name: 'Home' } },
                                    { '@type': 'ListItem', position: 2, item: { '@id': 'https://www.andinnovatech.com/blog/', name: 'Blog' } },
                                    { '@type': 'ListItem', position: 3, item: { '@id': `https://www.andinnovatech.com/${slug}/`, name: post.title } }
                                ]
                            }
                        ]
                    })
                }}
            />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link
                    href="/blog/"
                    className="inline-flex items-center text-primary font-bold mb-12 hover:underline group"
                >
                    <ArrowLeft className="h-4 w-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
                    Back to Insights
                </Link>

                <header className="mb-12">
                    <div className="flex items-center text-slate-500 dark:text-slate-400 mb-4">
                        <Calendar className="h-5 w-5 mr-2" />
                        <time dateTime={post.date}>
                            {new Date(post.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}
                        </time>
                        {post.author && (
                            <>
                                <span className="mx-3">•</span>
                                <span className="font-bold text-primary">By {post.author}</span>
                            </>
                        )}
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy dark:text-white leading-[1.1] mb-8 tracking-tighter">
                        {post.title}
                    </h1>
                    <div className="h-2 w-24 bg-primary rounded-full mb-8" />
                </header>

                <div className="prose prose-lg lg:prose-xl max-w-none dark:prose-invert prose-headings:text-navy dark:prose-headings:text-white prose-headings:font-bold prose-p:text-grey dark:prose-p:text-slate-400 prose-a:text-primary prose-strong:text-navy dark:prose-strong:text-white prose-blockquote:border-primary prose-blockquote:bg-slate-50 dark:prose-blockquote:bg-navy/50 p-6 md:p-10 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm mb-16">
                    <MDXRemote source={post.content} />
                </div>

                {/* Related Insights */}
                <div className="mt-16 pt-16 border-t border-slate-100 dark:border-slate-800">
                    <h2 className="text-3xl font-heading font-bold text-navy dark:text-white mb-8">Related Insights</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {(await getAllPosts())
                            .filter(p => p.slug !== slug)
                            .slice(0, 3)
                            .map(relatedPost => (
                                <Link
                                    key={relatedPost.slug}
                                    href={`/${relatedPost.slug}/`}
                                    className="group flex flex-col bg-slate-50 dark:bg-navy/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-primary/50 transition-all shadow-sm hover:shadow-md"
                                >
                                    <h3 className="text-lg font-bold text-navy dark:text-white mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                                        {relatedPost.title}
                                    </h3>
                                    <p className="text-sm text-grey dark:text-slate-400 line-clamp-3 mb-4 flex-grow">
                                        {relatedPost.description}
                                    </p>
                                    <span className="text-primary font-bold text-xs flex items-center gap-1 group-hover:gap-2 transition-all">
                                        Read More <ArrowRight className="h-3 w-3" />
                                    </span>
                                </Link>
                            ))}
                    </div>
                </div>

                <footer className="mt-20 pt-10 border-t border-slate-100 dark:border-slate-800">
                    <div className="bg-navy p-10 md:p-16 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden border border-white/10 shadow-glow-primary">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] opacity-40" />
                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold text-white mb-3">Scale Your Vision</h3>
                            <p className="text-slate-400 text-lg">Discuss your technical requirements with our engineering leads today.</p>
                        </div>
                        <Link
                            href="/contact/"
                            className="bg-primary text-white px-10 py-5 rounded-full font-black text-lg hover:bg-primary-600 transition-all shadow-glow shrink-0 relative z-10"
                        >
                            Build Your Plan →
                        </Link>
                    </div>
                </footer>
            </div>
        </article>
    );
}
