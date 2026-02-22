import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/mdx';
import { usaCities } from '@/lib/usa-cities';
import { usaCitiesSeo } from '@/lib/usa-cities-seo';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Calendar, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import CityServicePage from '@/components/CityServicePage';
import CitySeoPage from '@/components/CitySeoPage';

interface DynamicPageProps {
    params: { slug: string };
}

// ── SEO metadata title formulas ─────────────────────────────────
const seoTitleFormulas = [
    (name: string, stateCode: string, _s: string) => `SEO Services in ${name}, ${stateCode} | AndInnovatech`,
    (name: string, _sc: string, state: string) => `SEO Agency ${name}, ${state} | AndInnovatech`,
    (name: string, _sc: string, _s: string) => `${name} SEO Company | AndInnovatech`,
    (name: string, _sc: string, _s: string) => `Local SEO Services ${name} | AndInnovatech`,
    (name: string, _sc: string, _s: string) => `${name} Search Engine Optimization | AndInnovatech`,
    (name: string, stateCode: string, _s: string) => `SEO Services ${name} ${stateCode} | AndInnovatech`,
    (name: string, _sc: string, _s: string) => `${name} SEO Experts | AndInnovatech`,
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

    return [...blogParams, ...webDevParams, ...seoParams];
}

export async function generateMetadata({ params }: DynamicPageProps): Promise<Metadata> {
    const { slug } = params;
    const lowerSlug = slug.toLowerCase();

    // ── Web Development City Pages ──────────────────────────────
    if (lowerSlug.startsWith('web-development-')) {
        const citySlug = lowerSlug.replace('web-development-', '');
        const city = usaCities.find((c) => c.slug.toLowerCase() === citySlug);
        if (!city) return { title: 'Not Found' };

        const index = city.name.length;
        const titleFormulas = [
            `Web Development Services in ${city.name} | AndInnovatech`,
            `Web Development Company ${city.name} ${city.stateCode} | AndInnovatech`,
            `${city.name} Web Development Agency | AndInnovatech`,
            `Custom Web Development ${city.name} | AndInnovatech`,
        ];
        return {
            title: titleFormulas[index % titleFormulas.length],
            description: `AndInnovatech delivers enterprise-grade web development in ${city.name}. Custom websites for ${city.industries.slice(0, 2).join(', ')}.`,
            alternates: { canonical: `https://andinnovatech.com/web-development-${city.slug}/` },
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
            `Expert SEO services for ${city.name} businesses in ${city.topIndustries[0].toLowerCase()} & ${city.topIndustries[1].toLowerCase()}. AndInnovatech helps ${city.name} brands rank higher and grow organic traffic.`,
            `${city.name} SEO services tailored for ${city.topIndustries[0]} companies. AndInnovatech delivers real keyword rankings and measurable organic growth for ${city.stateCode} businesses.`,
            `Local SEO services for ${city.name} businesses in ${city.topIndustries[0].toLowerCase()} and beyond. Get found on Google and grow with AndInnovatech's data-driven strategies.`,
            `AndInnovatech provides ${city.name}, ${city.stateCode} businesses with proven SEO strategies — specializing in ${city.topIndustries[0]} and ${city.topIndustries[1]}.`,
        ];
        const description = descFormulas[cityIndex % descFormulas.length].slice(0, 160);
        const url = `https://andinnovatech.com/seo-services-${city.slug}/`;

        return {
            title,
            description,
            openGraph: { title, description, url, type: 'website' },
            alternates: { canonical: url },
        };
    }

    // ── Blog Posts ──────────────────────────────────────────────
    const post = await getPostBySlug(slug);
    if (!post) return { title: 'Post Not Found' };

    return {
        title: post.title,
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description,
            type: 'article',
            publishedTime: post.date,
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
        return <CityServicePage city={city} />;
    }

    // ── SEO Services City Pages ─────────────────────────────────
    if (lowerSlug.startsWith('seo-services-')) {
        const citySlug = lowerSlug.replace('seo-services-', '');
        const cityIndex = usaCitiesSeo.findIndex((c) => c.slug.toLowerCase() === citySlug);
        const city = usaCitiesSeo[cityIndex];
        if (!city) notFound();
        return <CitySeoPage city={city} cityIndex={cityIndex} />;
    }

    // ── Blog Posts ──────────────────────────────────────────────
    const post = await getPostBySlug(slug);
    if (!post) notFound();

    return (
        <article className="pt-32 pb-24 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link
                    href="/our-blog/"
                    className="inline-flex items-center text-blue-600 font-semibold mb-12 hover:underline group"
                >
                    <ArrowLeft className="h-4 w-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
                    Back to Blog
                </Link>

                <header className="mb-12">
                    <div className="flex items-center text-gray-500 mb-4">
                        <Calendar className="h-5 w-5 mr-2" />
                        <time dateTime={post.date}>
                            {new Date(post.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}
                        </time>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-8">
                        {post.title}
                    </h1>
                    <div className="h-1 w-24 bg-blue-600 rounded-full" />
                </header>

                <div className="prose prose-lg max-w-none prose-blue prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-600 prose-a:text-blue-600">
                    <MDXRemote source={post.content} />
                </div>

                <footer className="mt-16 pt-8 border-t border-gray-100">
                    <div className="bg-blue-50 p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Want to learn more?</h3>
                            <p className="text-gray-600">Discover how our expertise can help your business innovate and grow.</p>
                        </div>
                        <Link
                            href="/contact-us/"
                            className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-all shadow-md shrink-0"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </footer>
            </div>
        </article>
    );
}
