import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import ContactForm from '@/components/sections/ContactForm';
import { CheckCircle2, Layout, ArrowRight, Zap, Target, Gauge, Shield, Users, MapPin, Globe, DollarSign } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Affordable Web Development for Small Businesses in Atlanta | Save 50%',
    description: 'Looking for affordable web development in Atlanta? We build high-performance, lead-generating websites for Atlanta small businesses. Fixed-price custom Next.js sites.',
    openGraph: {
        title: 'Affordable Web Development for Small Businesses in Atlanta',
        description: 'Elite web development for Atlanta small businesses.',
        url: 'https://www.andinnovatech.com/affordable-web-development-atlanta/',
        images: [{ url: 'https://www.andinnovatech.com/images/dev_abstract.png' }],
    }
};

const atlantaFeatures = [
    {
        icon: DollarSign,
        title: 'Fixed Monthly Plans',
        desc: 'Premium web development shouldn\'t break the bank. We offer affordable, fixed-price monthly plans designed for Atlanta small business budgets.',
    },
    {
        icon: Target,
        title: 'Atlanta SEO Ready',
        desc: 'Every site we build is optimized to rank in the Atlanta metro area. We build-in local schema so you\'re found by customers in your zip code.',
    },
    {
        icon: Gauge,
        title: 'Mobile-First Performance',
        desc: 'Most of your Atlanta customers search on their phones. Our sites are engineered for ultra-fast mobile performance and easy tap-to-call conversions.',
    },
];

export default function AtlantaSmallBusinessWebDev() {
    return (
        <div className="overflow-x-hidden bg-white dark:bg-navy text-navy dark:text-white">
            <Hero
                title={<>Affordable Web Development for <span className="gradient-text">Small Businesses in Atlanta</span></>}
                subtitle="Build a world-class digital presence without the corporate price tag. We help Atlanta's most ambitious small businesses outrank the noise with fast, custom-engineered websites."
                badgeText="🍑 Atlanta's High-Growth Partner"
                ctaText="Get My Atlanta Web Quote"
                ctaHref="/contact"
                showStats={true}
                category="software"
            />

            <section className="section-padding bg-white dark:bg-navy">
                <div className="section-container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <Badge className="mb-6 bg-primary/10 text-primary border-none font-bold uppercase tracking-widest">Atlanta Market Dominance</Badge>
                            <h2 className="text-4xl md:text-6xl font-extrabold text-navy dark:text-white mb-8 leading-none tracking-tighter">
                                Professional Tech, <span className="text-primary">Atlanta Prices.</span>
                            </h2>

                            <div className="prose prose-lg dark:prose-invert text-grey dark:text-slate-400 mb-12">
                                <p>
                                    Atlanta is a city of entrepreneurs. Whether you&apos;re a creative in Midtown or a service pro in Marietta, your website is your most valuable salesman. If it&apos;s slow, hard to use, or invisible on Google, you&apos;re handing leads to your competitors.
                                </p>
                                <p>
                                    <strong>AnD Innovatech</strong> brings elite-level Next.js engineering to Atlanta small businesses at a price points that actually make sense. We focus on ROI: high-speed performance, aggressive local SEO, and conversion-optimized designs that turn Atlanta visitors into loyal customers.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                {[
                                    'Custom High-Speed Next.js',
                                    'Mobile-First Design',
                                    'Integrated Local SEO',
                                    'Fixed-Price Monthly Billing',
                                    'Secure 24/7 Hosting',
                                    'Priority Technical Support'
                                ].map((item) => (
                                    <div key={item} className="flex items-center space-x-3 p-3 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-100 dark:border-white/10 group hover:border-primary/50 transition-all">
                                        <div className="p-1 rounded-full bg-primary/10 text-primary">
                                            <CheckCircle2 size={12} />
                                        </div>
                                        <span className="text-sm font-bold">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <Link href="/contact">
                                <Button size="lg" className="bg-primary text-white hover:bg-primary-600 px-12 py-8 rounded-full font-black text-xl shadow-glow-primary">
                                    Start My Atlanta Growth →
                                </Button>
                            </Link>
                        </div>

                        <div className="relative group">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-primary/5 rounded-[4rem] blur-[100px] -z-10" />
                            <div className="bg-navy p-12 rounded-[4rem] border border-white/10 shadow-3xl relative overflow-hidden backdrop-blur-3xl">
                                <h3 className="text-3xl font-bold text-white mb-6 leading-tight">Request an Atlanta Web Audit</h3>
                                <p className="text-slate-400 mb-10 text-lg">Send us your URL and business goals. We&apos;ll provided a free technical roadmap to help you dominate the Atlanta market.</p>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-slate-50 dark:bg-navy/80">
                <div className="section-container">
                    <SectionHeading
                        title="Engineering Success for Atlanta SMBs"
                        subtitle="Strategic technology designed to give your business an unfair advantage in the A-Town."
                    />
                    <div className="grid md:grid-cols-3 gap-10 mt-16">
                        {atlantaFeatures.map((item, i) => (
                            <div key={i} className="bg-white dark:bg-slate-800 p-12 rounded-[3.5rem] border border-slate-100 dark:border-white/5 hover:translate-y-[-10px] transition-all">
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
