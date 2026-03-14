import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import ContactForm from '@/components/sections/ContactForm';
import { CheckCircle2, Layout, ArrowRight, Zap, Target, Gauge, Shield, Search, Thermometer, Wind } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Website Development for HVAC Companies in Dallas | Rank #1 Today',
    description: 'Looking for the best HVAC website development in Dallas? We build high-conversion, SEO-optimized sites for DFW HVAC contractors. Fast, mobile-first, and leads-focused.',
    openGraph: {
        title: 'Website Development for HVAC Companies in Dallas',
        description: 'Elite web development for Dallas HVAC services.',
        url: 'https://www.andinnovatech.com/website-development-hvac-dallas/',
        images: [{ url: 'https://www.andinnovatech.com/images/dev_abstract.png' }],
    }
};

const dallasHvacFeatures = [
    {
        icon: Thermometer,
        title: 'Emergency Tap-to-Call',
        desc: 'In Dallas summers, AC repair is urgent. We build sites with high-visibility CTA buttons that capture emergency calls instantly.',
    },
    {
        icon: Gauge,
        title: 'Next-Gen Speed',
        desc: 'Our Dallas HVAC sites load in under 1 second, ensuring customers don\'t bounce to a competitor while waiting for your page to load.',
    },
    {
        icon: Search,
        title: 'DFW Local SEO',
        desc: 'Built-in targeting for Dallas, Fort Worth, Plano, and Frisco. We ensure your business is found when people search for "AC repair near me".',
    },
];

export default function DallasHvacWebDev() {
    return (
        <div className="overflow-x-hidden bg-white dark:bg-navy text-navy dark:text-white">
            <Hero
                title={<>High-Conversion Websites for <span className="gradient-text">HVAC Companies in Dallas</span></>}
                subtitle="Don't lose another lead to a slow website. We build the most advanced HVAC lead-generation platforms in DFW—designed to rank, designed to close."
                badgeText="❄️ Dallas HVAC Experts"
                ctaText="Get My Dallas HVAC Audit"
                ctaHref="/contact"
                showStats={true}
                category="software"
            />

            <section className="section-padding bg-white dark:bg-navy">
                <div className="section-container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="relative order-2 lg:order-1">
                            <div className="bg-navy p-10 md:p-14 rounded-[4rem] border border-white/10 shadow-glow-primary relative overflow-hidden backdrop-blur-3xl">
                                <h3 className="text-3xl font-bold text-white mb-6">HVAC Growth Blueprint</h3>
                                <p className="text-slate-400 mb-10 text-lg">Send us your current site. We&apos;ll provided a free technical audit showing you exactly how we can double your leads in Dallas.</p>
                                <ContactForm />
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <Badge className="mb-6 bg-primary/10 text-primary border-none font-bold uppercase tracking-widest">DFW Market Dominance</Badge>
                            <h2 className="text-4xl md:text-6xl font-extrabold text-navy dark:text-white mb-8 leading-none tracking-tighter">
                                Own the Dallas <span className="text-primary">Service Market.</span>
                            </h2>

                            <div className="prose prose-lg dark:prose-invert text-grey dark:text-slate-400 mb-12">
                                <p>
                                    Dallas is one of the most competitive HVAC markets in the world. To win here, your website needs to be faster, cleaner, and more authoritative than every other contractor in the DFW metroplex.
                                </p>
                                <p>
                                    <strong>AnD Innovatech</strong> engineers "performance websites" for HVAC pros. We don&apos;t use templates. We build custom Next.js architectures that are optimized for Google&apos;s 2026 ranking factors and designed to drive high-ticket installations and emergency repairs.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                {[
                                    'Emergency Calls Optimization',
                                    'Local DFW Schema Markup',
                                    'ServiceTitan/Jobber Sync',
                                    'Google Maps Domination',
                                    'Bulletproof Site Security',
                                    'Stunning Visual Galleries'
                                ].map((item) => (
                                    <div key={item} className="flex items-center space-x-3">
                                        <CheckCircle2 size={16} className="text-primary" />
                                        <span className="text-sm font-bold">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <Link href="/contact">
                                <Button size="lg" className="bg-primary text-white hover:bg-primary-600 px-12 py-8 rounded-full font-black text-xl shadow-glow-primary">
                                    I Want More HVAC Leads →
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-slate-50 dark:bg-navy/80">
                <div className="section-container">
                    <SectionHeading
                        title="Built for Dallas Comfort Pros"
                        subtitle="Our websites are your hardest-working employees, generating leads 24/7/365."
                    />
                    <div className="grid md:grid-cols-3 gap-10 mt-16">
                        {dallasHvacFeatures.map((item, i) => (
                            <div key={i} className="bg-white dark:bg-slate-800 p-12 rounded-[3.5rem] border border-slate-100 dark:border-white/5 shadow-inner hover:shadow-2xl transition-all">
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-8">
                                    <item.icon size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-navy dark:text-white mb-4 tracking-tight leading-tight">{item.title}</h3>
                                <p className="text-grey dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
