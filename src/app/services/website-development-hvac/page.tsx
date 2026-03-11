import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import ContactForm from '@/components/sections/ContactForm';
import { CheckCircle2, Layout, ArrowRight, Zap, Target, Gauge, Shield, Search } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import RelatedServices from '@/components/sections/RelatedServices';

export const metadata: Metadata = {
    title: 'Website Development for HVAC Companies | High-Conversion Designs',
    description: 'We build high-performance, SEO-optimized websites for HVAC contractors. Custom Next.js builds that load in <1s and convert more emergency calls into booked jobs.',
};

const hvacWebBenefits = [
    {
        icon: Gauge,
        title: 'Lightning Speed',
        desc: 'In 2026, speed is a ranking factor. Our websites load in under 1 second, ensuring customers don\'t bounce before the page loads.',
    },
    {
        icon: Target,
        title: 'Conversion Optimized',
        desc: 'Every design includes "Tap-to-Call" buttons, clear trust signals, and easy booking forms that double your conversion rate.',
    },
    {
        icon: Search,
        title: 'Built-in Local SEO',
        desc: 'Advanced schema markup and local landing page architecture are built into the core, not added as a plugin.',
    },
];

const checklistItems = [
    'Ultra-Fast Next.js Frontend',
    'Emergency "Tap-to-Call" Design',
    'Custom HVAC Service Pages',
    'ServiceTitan/Jobber Integration',
    'Google Business Profile Sync',
    'Secure SSL & 24/7 Hosting',
];

export default function HvacWebDevPage() {
    return (
        <div className="overflow-x-hidden bg-white dark:bg-navy text-navy dark:text-white">
            <Hero
                title={<>High-Performance Websites for <span className="gradient-text">HVAC Contractors</span></>}
                subtitle="Most HVAC websites look like they were built in 2010. We build the modern lead machines of 2026—designed to rank #1 and close the sale before the customer calls anyone else."
                badgeText="🔥 ROI-Focused Web Design"
                ctaText="View HVAC Case Studies"
                ctaHref="/portfolio"
                showStats={true}
                category="software"
            />

            <section className="section-padding bg-white dark:bg-navy">
                <div className="section-container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <Badge className="mb-4 bg-primary/10 text-primary border-none font-bold uppercase tracking-widest">Industry-Leading Tech</Badge>
                            <h2 className="text-4xl md:text-6xl font-extrabold text-navy dark:text-white mb-8 leading-none tracking-tighter">
                                More Calls. <span className="text-primary">More Bookings.</span> More Growth.
                            </h2>

                            <script
                                type="application/ld+json"
                                dangerouslySetInnerHTML={{
                                    __html: JSON.stringify({
                                        '@context': 'https://schema.org',
                                        '@type': 'Service',
                                        name: 'Website Development for HVAC Companies',
                                        serviceType: 'Web Development',
                                        provider: {
                                            '@type': 'Organization',
                                            name: 'AnD Innovatech',
                                            url: 'https://www.andinnovatech.com',
                                        },
                                        description: 'Custom high-performance web development for heating and cooling contractors. Features Next.js tech and local SEO optimization.',
                                        areaServed: 'US',
                                        category: 'HVAC Marketing'
                                    }),
                                }}
                            />

                            <div className="prose prose-lg dark:prose-invert text-grey dark:text-slate-400 mb-12">
                                <p>
                                    Homeowners shopping for emergency furnace repair or AC installs have zero patience for a slow website. If your site takes 3 seconds to load on their mobile phone, you lose the lead.
                                </p>
                                <p>
                                    At **AnD Innovatech**, we utilize senior engineering talent to build "Static Site" architectures. Unlike basic WordPress sites, ours are unhackable, infinitely scalable, and designed by conversion experts who understand the HVAC customer journey.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                                {checklistItems.map((item) => (
                                    <div key={item} className="flex items-center space-x-3 bg-slate-50 dark:bg-white/5 p-4 rounded-xl border border-slate-100 dark:border-white/10">
                                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                                        <span className="text-navy dark:text-slate-200 font-bold text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <Link href="/contact">
                                <Button size="lg" className="bg-primary text-white hover:bg-primary-600 px-10 py-6 rounded-full font-black">
                                    Get My HVAC Website Quote →
                                </Button>
                            </Link>
                        </div>

                        <div className="lg:sticky lg:top-32 h-fit">
                            <div className="bg-navy p-10 md:p-14 rounded-[3.5rem] border border-white/10 shadow-glow-primary relative overflow-hidden backdrop-blur-xl">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] opacity-40 -z-10" />
                                <h3 className="text-3xl font-bold text-white mb-6">Start Your Transformation</h3>
                                <p className="text-slate-400 mb-10 leading-relaxed">Tell us about your current site and goals. We&apos;ll provide a free technical audit and a fixed-price project scope.</p>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-slate-50 dark:bg-navy/50">
                <div className="section-container">
                    <SectionHeading
                        title="Engineering for Mechanical Pros"
                        subtitle="A great HVAC website is more than just a gallery; it\'s your company\'s most valuable salesman."
                    />
                    <div className="grid md:grid-cols-3 gap-8 mt-16">
                        {hvacWebBenefits.map((item, i) => (
                            <div key={i} className="bg-white dark:bg-slate-800 p-12 rounded-[3.5rem] border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-2xl transition-all group">
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-8 group-hover:bg-primary group-hover:text-white transition-all">
                                    <item.icon size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-navy dark:text-white mb-4 tracking-tight leading-tight">{item.title}</h3>
                                <p className="text-grey dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <RelatedServices currentService="Web Dev for HVAC" />
        </div>
    );
}
