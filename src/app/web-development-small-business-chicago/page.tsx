import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import ContactForm from '@/components/sections/ContactForm';
import { CheckCircle2, Layout, ArrowRight, Zap, Target, Gauge, Shield, Users, MapPin, Search } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Chicago Small Business Web Development',
    description: 'Looking for a Chicago web development agency? We build stunning, high-performance websites for Chicago small businesses. Optimized for speed and local SEO. Get a free quote today.',
    openGraph: {
        title: 'Chicago Small Business Web Development',
        description: 'Premium web design for Chicago businesses.',
        url: 'https://www.andinnovatech.com/web-development-small-business-chicago/',
        images: [{ url: 'https://www.andinnovatech.com/images/dev_abstract.png' }],
    }
};

const chicagoFeatures = [
    {
        icon: Search,
        title: 'Local SEO Integration',
        desc: 'We don\'t just build sites; we build Chicago lead machines. Every site includes local schema and area-targeting built-in.',
    },
    {
        icon: Gauge,
        title: 'High Performance',
        desc: 'Our Next.js architecture ensures your Chicago business site loads instantly, even on mobile, for maximum customer retention.',
    },
    {
        icon: Shield,
        title: 'Trusted Local Partner',
        desc: 'We understand the Chicago business scene—from the Loop to the suburbs. We build sites that resonate with local customers.',
    },
];

export default function ChicagoSmallBusinessWebDev() {
    return (
        <div className="overflow-x-hidden bg-white dark:bg-navy text-navy dark:text-white">
            <Hero
                title={<>#1 Web Development Agency for <span className="gradient-text">Small Businesses in Chicago</span></>}
                subtitle="High-performance websites designed specifically for Chicago's competitive market. From local retail to professional services, we build the tech that grows your business."
                badgeText="🏙️ Chicago's Choice"
                ctaText="Get My Chicago Web Audit"
                ctaHref="/contact"
                showStats={true}
                category="software"
            />

            <section className="section-padding bg-white dark:bg-navy">
                <div className="section-container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-primary/20 rounded-[4rem] blur-2xl group-hover:bg-primary/30 transition-all duration-700" />
                            <div className="relative bg-navy p-12 rounded-[3.5rem] border border-white/10 shadow-3xl">
                                <h3 className="text-3xl font-bold text-white mb-8">Ready to Dominate Chicago?</h3>
                                <ContactForm />
                            </div>
                        </div>

                        <div>
                            <Badge className="mb-6 bg-primary/10 text-primary border-none font-bold uppercase tracking-widest">Built for the Windy City</Badge>
                            <h2 className="text-4xl md:text-6xl font-extrabold text-navy dark:text-white mb-8 leading-none tracking-tighter">
                                Stand Out in the <span className="text-primary">Chicago Metro.</span>
                            </h2>

                            <div className="prose prose-lg dark:prose-invert text-grey dark:text-slate-400 mb-12">
                                <p>
                                    Chicago is a competitive market. Whether you&apos;re a boutique in River North or a contractor in Naperville, your website is your digital storefront. If it&apos;s slow, outdated, or hard to find on Google, you&apos;re losing money every day.
                                </p>
                                <p>
                                    <strong>AnD Innovatech</strong> specializes in helping Chicago small businesses outrank corporate giants. Our senior engineers build websites that aren&apos;t just pretty—they are engineered to rank, load in under a second, and convert visitors into loyal clients.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                {[
                                    'Chicago-Specific Local SEO',
                                    'Mobile-First "Speed" Design',
                                    'Custom Lead Tracking',
                                    'Local Google Maps Sync',
                                    'Fast Next.js Frontend',
                                    'Secure 24/7 Hosting'
                                ].map((item) => (
                                    <div key={item} className="flex items-center space-x-3">
                                        <CheckCircle2 size={16} className="text-primary" />
                                        <span className="text-sm font-bold">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <Link href="/contact">
                                <Button size="lg" className="bg-primary text-white hover:bg-primary-600 px-12 py-8 rounded-full font-black text-xl shadow-glow-primary">
                                    Start My Project →
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-slate-50 dark:bg-navy/50">
                <div className="section-container">
                    <SectionHeading
                        title="Engineering Success for Chicago SMBs"
                        subtitle="We combine local market knowledge with elite-level software engineering."
                    />
                    <div className="grid md:grid-cols-3 gap-10 mt-16">
                        {chicagoFeatures.map((item, i) => (
                            <div key={i} className="bg-white dark:bg-slate-800 p-12 rounded-[3.5rem] border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-2xl transition-all">
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
