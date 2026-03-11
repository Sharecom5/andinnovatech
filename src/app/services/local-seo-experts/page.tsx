import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import ContactForm from '@/components/sections/ContactForm';
import { CheckCircle2, Search, MapPin, BarChart3, Globe, Zap, Target, Star } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import RelatedServices from '@/components/sections/RelatedServices';

export const metadata: Metadata = {
    title: 'Local SEO Services for Service Businesses | Rank #1 on Google Maps',
    description: 'Dominate your local market. We provide ROI-focused SEO for HVAC, Plumbers, and Cleaning companies. Guaranteed rank improvements and lead growth. Free SEO audit.',
};

const seoBenefits = [
    {
        icon: MapPin,
        title: 'Map Pack Dominance',
        desc: 'We optimize your Google Business Profile to show up in the "Top 3" map results where 70% of local clicks happen.',
    },
    {
        icon: Target,
        title: 'High-Intent Keywords',
        desc: 'We target "emergency repair" and "service near me" keywords that put you in front of customers ready to buy right now.',
    },
    {
        icon: BarChart3,
        title: 'Transparent ROI Tracking',
        desc: 'No "fluff" reports. We track calls, form fills, and actual revenue generated from your SEO campaign.',
    },
];

const checklistItems = [
    'Google Business Profile Optimization',
    'Local Citation Building (NAP)',
    'On-Page Technical SEO',
    'Localized Content Strategy',
    'Review Generation Automation',
    'Monthly Performance Dashboards',
];

export default function LocalSeoServicePage() {
    return (
        <div className="overflow-x-hidden bg-white dark:bg-navy text-navy dark:text-white">
            <Hero
                title={<>Local SEO That Drives <span className="gradient-text">Actual Bookings</span></>}
                subtitle="Stop paying for 'traffic' that doesn't convert. We help local US service companies dominate Google Maps and outrank big corporate competitors for the most profitable keywords."
                badgeText="📍 Local SEO Experts"
                ctaText="Get My Free SEO Audit"
                ctaHref="/contact"
                showStats={true}
                category="seo"
            />

            <section className="section-padding bg-white dark:bg-navy">
                <div className="section-container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="bg-navy p-10 md:p-14 rounded-[3.5rem] border border-white/10 shadow-glow-primary relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-full h-full bg-primary/5 -z-10 group-hover:bg-primary/10 transition-all duration-700" />
                                <h3 className="text-3xl font-bold text-white mb-6">Claim Your #1 Spot</h3>
                                <p className="text-slate-400 mb-10 text-lg">Send us your website URL and target city. We&apos;ll recorded a 5-minute video audit showing exactly how to outrank your competitors.</p>
                                <ContactForm />
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <Badge className="mb-4 bg-primary/10 text-primary border-none font-bold uppercase tracking-widest">Growth Focused SEO</Badge>
                            <h2 className="text-4xl md:text-6xl font-extrabold text-navy dark:text-white mb-8 leading-none tracking-tighter">
                                Rank Higher. <span className="text-primary">Get More Calls.</span>
                            </h2>

                            <script
                                type="application/ld+json"
                                dangerouslySetInnerHTML={{
                                    __html: JSON.stringify({
                                        '@context': 'https://schema.org',
                                        '@type': 'Service',
                                        name: 'Local SEO for Service Businesses',
                                        serviceType: 'SEO',
                                        provider: {
                                            '@type': 'Organization',
                                            name: 'AnD Innovatech',
                                            url: 'https://www.andinnovatech.com',
                                        },
                                        description: 'Localized SEO strategies for HVAC, plumbing, and restoration companies. Includes Google Maps optimization and citation building.',
                                        areaServed: 'US',
                                        category: 'Digital Marketing'
                                    }),
                                }}
                            />

                            <div className="prose prose-lg dark:prose-invert text-grey dark:text-slate-400 mb-12">
                                <p>
                                    SEO for a local plumber or electrician is completely different from SEO for a national brand. You don't need "global traffic"—you need neighbors in your specific zip codes searching for help <strong>right now</strong>.
                                </p>
                                <p>
                                    At **AnD Innovatech**, we skip the fluff. We focus on the "Local Pack" and hyper-local service pages that capture people in the moment of need. Our E-E-A-T optimized approach ensures Google trusts your business as the authoritative local choice.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                                {checklistItems.map((item) => (
                                    <div key={item} className="flex items-start space-x-3">
                                        <div className="p-1 rounded-full bg-primary/20 text-primary">
                                            <CheckCircle2 size={16} />
                                        </div>
                                        <span className="text-sm font-bold text-navy dark:text-slate-300">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <Link href="/contact">
                                <Button size="lg" className="bg-primary text-white hover:bg-primary-600 px-12 py-8 rounded-full font-black text-xl shadow-glow">
                                    Analyze My Rankings →
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-slate-50 dark:bg-navy/50">
                <div className="section-container">
                    <SectionHeading
                        title="Technical SEO Meets Local Hustle"
                        subtitle="We combine senior engineering with aggressive local marketing to give you an unfair advantage."
                    />
                    <div className="grid md:grid-cols-3 gap-10 mt-16">
                        {seoBenefits.map((item, i) => (
                            <div key={i} className="bg-white dark:bg-slate-800/10 backdrop-blur-sm p-12 rounded-[3.5rem] border border-slate-100 dark:border-white/5 hover:translate-y-[-10px] transition-all">
                                <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-8 shadow-inner">
                                    <item.icon size={36} />
                                </div>
                                <h3 className="text-2xl font-bold text-navy dark:text-white mb-4 tracking-tight leading-tight">{item.title}</h3>
                                <p className="text-grey dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <RelatedServices currentService="Local SEO Experts" />
        </div>
    );
}
