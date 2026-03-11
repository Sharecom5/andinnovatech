import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import ContactForm from '@/components/sections/ContactForm';
import { CheckCircle2, Layout, ArrowRight, Zap, Target, Gauge, Shield, Users, MapPin, Globe, Sun } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Web Development for Small Businesses in Miami | AnD Innovatech',
    description: 'Looking for a Miami web development agency? We build stunning, high-performance websites for Miami small businesses. Optimized for speed and local SEO. Get a free quote today.',
};

const miamiFeatures = [
    {
        icon: Globe,
        title: 'Bilingual Reach',
        desc: 'Miami is a global city. We can build SEO-optimized bilingual sites (English/Spanish) to help you capture the entire Miami market.',
    },
    {
        icon: Sun,
        title: 'Premium Visual Design',
        desc: 'In Miami, brand image is everything. We design high-end, premium interfaces that reflect the energy and style of your city.',
    },
    {
        icon: Gauge,
        title: 'Ultra-Fast Performance',
        desc: 'Mobile users in Miami are impatient. Our Next.js architecture ensures your site loads in under 1 second on any device.',
    },
];

export default function MiamiSmallBusinessWebDev() {
    return (
        <div className="overflow-x-hidden bg-white dark:bg-navy text-navy dark:text-white">
            <Hero
                title={<>High-Performance Web Development for <span className="gradient-text">Small Businesses in Miami</span></>}
                subtitle="Stunning design meets elite engineering. We help Miami's most ambitious small businesses outrank the noise and close more sales with better technology."
                badgeText="🌴 Miami's Digital Partner"
                ctaText="Get My Miami Web Quote"
                ctaHref="/contact"
                showStats={true}
                category="software"
            />

            <section className="section-padding bg-white dark:bg-navy">
                <div className="section-container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="relative group">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 rounded-full blur-[120px] -z-10" />
                            <div className="bg-navy p-10 md:p-14 rounded-[3.5rem] border border-white/10 shadow-2xl relative overflow-hidden backdrop-blur-3xl">
                                <h3 className="text-3xl font-bold text-white mb-6 leading-tight">Request a Miami Web Blueprint</h3>
                                <p className="text-slate-400 mb-10 text-lg">Send us your business goals and current URL. We&apos;ll provided a free technical roadmap to help you dominate the 305.</p>
                                <ContactForm />
                            </div>
                        </div>

                        <div>
                            <Badge className="mb-6 bg-primary/10 text-primary border-none font-bold uppercase tracking-widest">Miami Tech Excellence</Badge>
                            <h2 className="text-4xl md:text-6xl font-extrabold text-navy dark:text-white mb-8 leading-none tracking-tighter">
                                Build for the <span className="text-primary">Miami Market.</span>
                            </h2>

                            <div className="prose prose-lg dark:prose-invert text-grey dark:text-slate-400 mb-12">
                                <p>
                                    Miami isn&apos;t just a city; it&apos;s a global brand. To succeed here, your website needs to reflect that same premium energy. If your digital presence looks like a template from 2015, you&apos;re losing clients to competitors who understand the power of high-end design.
                                </p>
                                <p>
                                    <strong>AnD Innovatech</strong> brings senior engineering talent to Miami&apos;s small business community. We build websites that are unhackable, infinitely scalable, and designed by experts who understand the unique search behavior of the Florida market.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                {[
                                    'Custom Premium UI/UX',
                                    'Bilingual SEO (English/Spanish)',
                                    'Lightning-Fast Next.js Tech',
                                    'Local Miami Search Schema',
                                    'High-Security Hosting',
                                    'Lead-Generating Call-to-Actions'
                                ].map((item) => (
                                    <div key={item} className="flex items-center space-x-3 p-3 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-100 dark:border-white/10">
                                        <CheckCircle2 size={14} className="text-primary" />
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
                        title="Engineering for Miami Entrepreneurs"
                        subtitle="Strategic technology designed to give your business an unfair advantage in the 305."
                    />
                    <div className="grid md:grid-cols-3 gap-10 mt-16">
                        {miamiFeatures.map((item, i) => (
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
