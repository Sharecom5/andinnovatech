import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import ContactForm from '@/components/sections/ContactForm';
import { CheckCircle2, Code2, ArrowRight, Zap, Target, Gauge, Shield, Users, DollarSign, Rocket } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Offshore Development Partner for Startups in Austin | Save 60% on Dev',
    description: 'Looking for a reliable offshore development partner in Austin? We help Austin startups scale their engineering teams with elite offshore talent managed by US standards. Fixed-price MVP builds.',
};

const austinOffshoreFeatures = [
    {
        icon: Rocket,
        title: 'Rapid MVP Builds',
        desc: 'Go from concept to launch in weeks, not months. Our Austin-aligned offshore teams specialize in high-speed startup execution.',
    },
    {
        icon: DollarSign,
        title: 'Burn Rate Optimization',
        desc: 'Stretch your seed round 3x further. Get 3 senior developers for the price of 1 local hire, without compromising quality.',
    },
    {
        icon: Users,
        title: 'Seamless Integration',
        desc: 'Our offshore teams work in your time zone (Central Time) or with significant overlap, ensuring perfect daily standups.',
    },
];

export default function AustinStartupOffshorePartner() {
    return (
        <div className="overflow-x-hidden bg-white dark:bg-navy text-navy dark:text-white">
            <Hero
                title={<>The Preferred Offshore Partner for <span className="gradient-text">Austin Startups</span></>}
                subtitle="Build Silicon Hills quality at global rates. We provide Austin startup founders with dedicated offshore engineering squads that scale your product faster than ever."
                badgeText="🌵 Austin Tech Partner"
                ctaText="Discuss My Austin Startup"
                ctaHref="/contact"
                showStats={true}
                category="software"
            />

            <section className="section-padding bg-white dark:bg-navy">
                <div className="section-container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <Badge className="mb-6 bg-primary/10 text-primary border-none font-bold uppercase tracking-widest">Austin Founders Choice</Badge>
                            <h2 className="text-4xl md:text-6xl font-extrabold text-navy dark:text-white mb-8 leading-none tracking-tighter">
                                Scale Your Product, <span className="text-primary">Not Your Burn Rate.</span>
                            </h2>

                            <div className="prose prose-lg dark:prose-invert text-grey dark:text-slate-400 mb-12">
                                <p>
                                    Austin is a powerhouse of innovation, but hiring local talent in the "Silicon Hills" and competing with Tesla or Oracle is expensive. For a seed-stage startup, the cost of local engineering can kill your runway before you find product-market fit.
                                </p>
                                <p>
                                    <strong>AnD Innovatech</strong> offers the perfect hybrid model. We provide Austin startups with elite offshore engineering squads—vetted for senior-level skills and perfect English—managed by a model that prioritizes US quality and accountability.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                {[
                                    'Fixed-Price MVP Delivery',
                                    'Central Time Overlap',
                                    'React, Next.js & Node.js Experts',
                                    'IP Protection & NDA Security',
                                    'Dedicated Agile Teams',
                                    'Scale Up/Down Monthly'
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
                                <Button size="lg" className="bg-primary text-white hover:bg-primary-600 px-10 py-7 rounded-full font-black text-lg shadow-glow-primary">
                                    I Need a Dev Team →
                                </Button>
                            </Link>
                        </div>

                        <div className="relative group">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-primary/5 rounded-[4rem] blur-[100px] -z-10 group-hover:bg-primary/15 transition-all duration-1000" />
                            <div className="bg-navy p-12 rounded-[4rem] border border-white/10 shadow-3xl relative overflow-hidden backdrop-blur-3xl">
                                <h3 className="text-3xl font-bold text-white mb-6 leading-tight">Request an Austin Startup Proposal</h3>
                                <p className="text-slate-400 mb-10 text-lg">Send us your pitch deck or PRD. We&apos;ll provide a technical roadmap and a cost-saving dev plan within 48 hours.</p>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-slate-50 dark:bg-navy/80">
                <div className="section-container">
                    <SectionHeading
                        title="Austin Agility, Global Efficiency"
                        subtitle="Why Austin founders trust us to build their most critical technology assets."
                    />
                    <div className="grid md:grid-cols-3 gap-10 mt-16">
                        {austinOffshoreFeatures.map((item, i) => (
                            <div key={i} className="bg-white dark:bg-slate-800 p-12 rounded-[3.5rem] border border-slate-100 dark:border-white/5 shadow-2xl hover:scale-[1.02] transition-all">
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
