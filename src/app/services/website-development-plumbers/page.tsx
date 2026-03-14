import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import ContactForm from '@/components/sections/ContactForm';
import { CheckCircle2, Layout, ArrowRight, Zap, Target, Gauge, Shield, Search, Droplets } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import RelatedServices from '@/components/sections/RelatedServices';

export const metadata: Metadata = {
    title: 'Website Development for Plumbers | SEO-Ready Plumbing Sites',
    description: 'Custom web design and development for plumbing companies. High-conversion mobile-first websites integrated with Jobber and ServiceTitan.',
    openGraph: {
        title: 'Website Development for Plumbers | SEO-Ready Plumbing Sites',
        description: 'Elite web development for plumbing contractors.',
        url: 'https://www.andinnovatech.com/services/website-development-plumbers/',
        images: [{ url: 'https://www.andinnovatech.com/images/dev_abstract.png' }],
    }
};

const plumberWebBenefits = [
    {
        icon: Droplets,
        title: 'Emergency Tap-to-Call',
        desc: 'When a pipe bursts, customers don\'t read. They click. We place high-visibility call buttons at every scroll point to maximize lead flow.',
    },
    {
        icon: Shield,
        title: 'Trust & Credibility',
        desc: 'Built-in sections for live Google reviews, BBB ratings, and licensing info to build instant neighborly trust.',
    },
    {
        icon: Layout,
        title: 'Mobile-First UI',
        desc: '90% of plumbing searches happen on a phone. Our sites are engineered to be the fastest mobile experiences in your city.',
    },
];

const checklistItems = [
    'Next.js Speed (Under 1s)',
    'Jobber/ServiceTitan Sync',
    'Local SEO Geo-Pages Included',
    'High-Visibility CTA Placement',
    'Secure Patient/Customer Portals',
    'Enterprise-Grade Security',
];

export default function PlumberWebDevPage() {
    return (
        <div className="overflow-x-hidden bg-white dark:bg-navy text-navy dark:text-white">
            <Hero
                title={<>High-Conversion Websites for <span className="gradient-text">Plumbing Professionals</span></>}
                subtitle="Don&apos;t settle for a generic template that doesn&apos;t rank. We build SEO-driven growth platforms specifically for plumbing and drain companies."
                badgeText="💧 Built for Plumbers"
                ctaText="See Plumbing Case Studies"
                ctaHref="/portfolio"
                showStats={true}
                category="software"
            />

            <section className="section-padding bg-white dark:bg-navy">
                <div className="section-container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <Badge className="mb-6 bg-primary/10 text-primary border-none font-bold uppercase tracking-[0.2em]">Plumbing Web Solutions</Badge>
                            <h2 className="text-4xl md:text-6xl font-extrabold text-navy dark:text-white mb-8 leading-none tracking-tighter">
                                Capture Every <span className="text-primary">Emergency Lead</span>
                            </h2>

                            <script
                                type="application/ld+json"
                                dangerouslySetInnerHTML={{
                                    __html: JSON.stringify({
                                        '@context': 'https://schema.org',
                                        '@type': 'Service',
                                        name: 'Website Development for Plumbers',
                                        serviceType: 'Web Development',
                                        provider: {
                                            '@type': 'Organization',
                                            name: 'AnD Innovatech',
                                            url: 'https://www.andinnovatech.com',
                                        },
                                        description: 'Custom high-performance web development for plumbing contractors. Optimized for local SEO and lead conversion.',
                                        areaServed: 'US',
                                        category: 'Plumbing Marketing'
                                    }),
                                }}
                            />

                            <div className="prose prose-lg dark:prose-invert text-grey dark:text-slate-400 mb-12 leading-relaxed">
                                <p>
                                    A plumbing website isn&apos;t a brochure—it&apos;s a lead generator. When a homeowner has a drain backup at 11 PM, they want to find a plumber, see that they&apos;re trustworthy, and hit "call" within 10 seconds.
                                </p>
                                <p>
                                    <strong>AnD Innovatech</strong> engineers high-intensity websites for plumbing pros. We focus on the core "speed-to-trust" metrics that convert casual searchers into loyal, high-ticket plumbing clients.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                                {checklistItems.map((item) => (
                                    <div key={item} className="p-4 bg-slate-50 dark:bg-white/5 rounded-2xl flex items-center space-x-3 border border-slate-100 dark:border-white/10 group hover:border-primary/30 transition-all">
                                        <CheckCircle2 className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                                        <span className="text-sm font-bold text-navy dark:text-slate-300">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <Link href="/contact">
                                <Button size="lg" className="bg-primary text-white hover:bg-primary-600 px-12 py-8 rounded-full font-black text-xl shadow-glow-primary">
                                    Book My Strategy Call →
                                </Button>
                            </Link>
                        </div>

                        <div className="relative">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[100px] -z-10" />
                            <div className="bg-navy p-10 md:p-14 rounded-[4rem] border border-white/10 shadow-2xl relative overflow-hidden group">
                                <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] group-hover:bg-primary/20 transition-all duration-700" />
                                <h3 className="text-3xl font-bold text-white mb-6">Request Your Free Audit</h3>
                                <p className="text-slate-400 mb-10 leading-relaxed">Find out why your current site isn&apos;t ranking. We&apos;ll provide a technical analysis and a clear path to ranking on page 1.</p>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-slate-50 dark:bg-navy/50">
                <div className="section-container">
                    <SectionHeading
                        title="Winning in the Map Pack & Beyond"
                        subtitle="Our plumbing websites are built with organic search dominance as the foundation."
                    />
                    <div className="grid md:grid-cols-3 gap-10 mt-16">
                        {plumberWebBenefits.map((item, i) => (
                            <div key={i} className="bg-white dark:bg-slate-800 p-12 rounded-[3.5rem] border border-slate-100 dark:border-slate-700 hover:shadow-glow-primary transition-all group">
                                <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-8 group-hover:bg-primary group-hover:text-white transition-all shadow-inner">
                                    <item.icon size={36} />
                                </div>
                                <h3 className="text-2xl font-bold text-navy dark:text-white mb-4 tracking-tight leading-tight">{item.title}</h3>
                                <p className="text-grey dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <RelatedServices currentService="Web Dev for Plumbers" />
        </div>
    );
}
