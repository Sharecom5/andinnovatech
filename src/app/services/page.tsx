import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import { CheckCircle2, ArrowRight, Lightbulb, PenTool, BarChart } from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
    title: 'Expert IT & SEO Services for US SMBs | AnD Innovatech',
    description: 'Explore our ROI-focused services including custom software engineering, high-performance web development, ROI-driven SEO, and scalable cloud solutions for US startups and SMBs.',
};

export default function ServicesPage() {
    return (
        <div className="overflow-x-hidden bg-white dark:bg-navy text-navy dark:text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@graph': [
                            {
                                '@type': 'Service',
                                '@id': 'https://www.andinnovatech.com/services/#service',
                                name: 'AnD Innovatech IT & SEO Services',
                                provider: { '@id': 'https://www.andinnovatech.com/#organization' },
                                description: 'Comprehensive IT services including web development, software engineering, and SEO.',
                                hasOfferCatalog: {
                                    '@type': 'OfferCatalog',
                                    name: 'IT Services',
                                    itemListElement: [
                                        {
                                            '@type': 'Offer',
                                            itemOffered: {
                                                '@type': 'Service',
                                                name: 'Web Development'
                                            }
                                        },
                                        {
                                            '@type': 'Offer',
                                            itemOffered: {
                                                '@type': 'Service',
                                                name: 'Custom Software'
                                            }
                                        },
                                        {
                                            '@type': 'Offer',
                                            itemOffered: {
                                                '@type': 'Service',
                                                name: 'SEO & Digital Marketing'
                                            }
                                        }
                                    ]
                                }
                            },
                            {
                                '@type': 'BreadcrumbList',
                                '@id': 'https://www.andinnovatech.com/services/#breadcrumb',
                                itemListElement: [
                                    {
                                        '@type': 'ListItem',
                                        position: 1,
                                        item: {
                                            '@id': 'https://www.andinnovatech.com/',
                                            name: 'Home'
                                        }
                                    },
                                    {
                                        '@type': 'ListItem',
                                        position: 2,
                                        item: {
                                            '@id': 'https://www.andinnovatech.com/services/',
                                            name: 'Services'
                                        }
                                    }
                                ]
                            }
                        ]
                    })
                }}
            />
            <Hero
                title={<>Scaling Your Business with <span className="gradient-text">Expert IT Services</span></>}
                subtitle="We offer a diverse portfolio of services designed to address every aspect of your digital presence and operational efficiency."
                badgeText="🛠️ Comprehensive Solutions"
                ctaText="View Service Details"
                showStats={false}
                category="consulting"
            />

            {/* Main Services Grid (Reusing the premium section) */}
            <Services />

            {/* Strategy / Process Section */}
            <section className="section-padding bg-navy relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
                <div className="section-container relative z-10">
                    <SectionHeading
                        title="Our Strategic Approach"
                        subtitle="How we turn complex challenges into competitive advantages"
                        light
                    />

                    <div className="grid md:grid-cols-3 gap-8 mt-16">
                        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary-400 mb-6">
                                <Lightbulb size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Discovery & Strategy</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">We begin by diving deep into your business model, identifying gaps, and crafting a technical roadmap tailored for ROI.</p>
                        </div>
                        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent mb-6">
                                <PenTool size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Design & Build</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">Our agile teams develop scalable architectures and stunning interfaces that prioritize performance and user engagement.</p>
                        </div>
                        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                            <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 mb-6">
                                <BarChart size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Optimization & Scale</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">Post-launch, we utilize data-driven SEO and cloud scaling to ensure your platform grows alongside your customer base.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Methodology Context */}
            <section className="section-padding bg-white dark:bg-navy">
                <div className="section-container">
                    <div className="bg-slate-50 dark:bg-slate-800/50 rounded-3xl p-8 md:p-16 border border-slate-100 dark:border-slate-700">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl font-bold text-navy dark:text-white mb-6">Global Standard Delivery</h2>
                                <p className="text-grey dark:text-slate-400 text-lg mb-8 leading-relaxed">
                                    Every project at AnD Innovatech follows a proven methodology designed to ensure quality, transparency, and timely delivery.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        'In-depth requirement analysis and planning',
                                        'Agile development and regular progress updates',
                                        'Rigorous quality assurance and functional testing',
                                        'Seamless deployment and 24/7 post-launch support',
                                    ].map((item) => (
                                        <li key={item} className="flex items-center space-x-3">
                                            <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                                            <span className="text-slate-700 dark:text-slate-300 font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-gradient-primary p-10 rounded-2xl text-white text-center">
                                <h3 className="text-2xl font-bold mb-6">Need a Custom Solution?</h3>
                                <p className="text-blue-100 mb-8 max-w-sm mx-auto">
                                    Every business has unique challenges. We provide tailored packages that align perfectly with your specific growth objectives and budget.
                                </p>
                                <Link href="/contact">
                                    <Button size="lg" className="bg-white text-primary hover:bg-slate-100 border-none shadow-xl">
                                        Request Custom Quote <ArrowRight className="ml-2" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Global Reach Section */}
            <section className="py-20 bg-slate-50 dark:bg-navy/50 border-t border-slate-100 dark:border-slate-800">
                <div className="section-container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-navy dark:text-white mb-4">Serving Markets Globally</h2>
                        <p className="text-grey dark:text-slate-400 max-w-2xl mx-auto">
                            Our expertise knows no borders. Explore our specialized services tailored for major business hubs across the globe.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <span className="text-2xl">🇺🇸</span> USA Market
                            </h3>
                            <ul className="space-y-4">
                                <li>
                                    <Link href="/services/seo-services-usa/" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors flex items-center justify-between group">
                                        SEO Services USA <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/software-development-usa/" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors flex items-center justify-between group">
                                        Software Dev USA <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/sitemap-list/" className="text-sm text-primary font-semibold hover:underline">Explore 50+ US Cities →</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <span className="text-2xl">🇨🇦</span> Canada Market
                            </h3>
                            <ul className="space-y-4">
                                <li>
                                    <Link href="/services/seo-services-canada/" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors flex items-center justify-between group">
                                        SEO Services Canada <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/website-development-canada/" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors flex items-center justify-between group">
                                        Web Dev Canada <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/sitemap-list/" className="text-sm text-primary font-semibold hover:underline">View Canadian Locations →</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <span className="text-2xl">🇮🇳</span> India Operations
                            </h3>
                            <ul className="space-y-4">
                                <li>
                                    <Link href="/services/seo-services-india/" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors flex items-center justify-between group">
                                        SEO Services India <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/mobile-app-development-india/" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors flex items-center justify-between group">
                                        App Development India <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact/" className="text-sm text-primary font-semibold hover:underline">Offshore Partnerships →</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
