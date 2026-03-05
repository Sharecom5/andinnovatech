import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import ContactForm from '@/components/sections/ContactForm';
import { CheckCircle2, DollarSign, Zap, ShieldCheck } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Transparent Pricing & ROI | Custom Software & SEO Costs | AnD Innovatech',
    description: 'Get clear, fixed-price quotes for your next IT project. Average savings of 40-60% compared to US-based agencies with identical technical quality and support.',
};

const tiers = [
    {
        name: 'MVP & Startup Launch',
        price: 'Starts at $15k',
        features: [
            'Full Custom UI/UX Design',
            'React/Next.js Architecture',
            'Core Functional Features',
            '90-Day Post-Launch Support'
        ],
        cta: 'Quote My MVP'
    },
    {
        name: 'Enterprise Software',
        price: 'Starts at $35k',
        features: [
            'Scalable Microservices',
            'Complex Data Integrations',
            'Military-Grade Security',
            'Dedicated Full-Time Team'
        ],
        cta: 'Discuss Enterprise'
    },
    {
        name: 'SEO & Growth Engine',
        price: 'Starts at $2.5k/mo',
        features: [
            'Technical SEO Dominance',
            'Content Authority Building',
            'High-Quality Backlinks',
            'ROI-Based Reporting'
        ],
        cta: 'Scale My Traffic'
    }
];

export default function PricingPage() {
    return (
        <div className="overflow-x-hidden bg-white dark:bg-navy">
            <Hero
                title={<>Transparent Pricing. <span className="gradient-text">Zero Surprises.</span></>}
                subtitle="High-end engineering doesn't have to break the bank. We provide enterprise-level quality at offshore efficiency rates — saving you 40-60% vs. local US agencies."
                badgeText="💰 Better ROI for US SMBs"
                ctaText="Get a Custom Quote"
                showStats={true}
                category="it"
            />

            <section className="section-padding bg-white dark:bg-navy">
                <div className="section-container">
                    <SectionHeading
                        title="Fixed-Price Project Tiers"
                        subtitle="We don't do hourly billing guesswork. You get a clear budget and fixed scope from Day 1."
                    />

                    <div className="grid md:grid-cols-3 gap-8 mt-16">
                        {tiers.map((tier, i) => (
                            <div key={i} className="p-10 rounded-[3rem] bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 flex flex-col hover:border-primary/50 transition-all group">
                                <h3 className="text-2xl font-bold text-navy dark:text-white mb-2">{tier.name}</h3>
                                <div className="text-3xl font-black text-primary mb-8">{tier.price}</div>
                                <ul className="space-y-4 mb-10 flex-1">
                                    {tier.features.map(f => (
                                        <li key={f} className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                                            <CheckCircle2 size={18} className="text-primary shrink-0" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/contact">
                                    <Button className="w-full bg-navy dark:bg-primary border-none text-white py-6 rounded-2xl font-bold group-hover:scale-[1.02] transition-transform">
                                        {tier.cta}
                                    </Button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-slate-50 dark:bg-slate-900/50">
                <div className="section-container">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <Badge className="mb-4 bg-primary/10 text-primary border-none">The Savings Math</Badge>
                            <h2 className="text-4xl font-bold text-navy dark:text-white mb-6">Why We Cost 50% Less Than <span className="text-primary">Your Local Agency</span></h2>
                            <p className="text-slate-500 dark:text-slate-400 mb-8 text-lg leading-relaxed">
                                You aren&apos;t paying for our New York office rent, expensive sales reps, or massive overhead. You are paying for senior engineers and strategists. We operate a lean, high-efficiency global model that passes every cent of savings directly to you.
                            </p>
                            <div className="space-y-4">
                                {[
                                    { label: 'Identical Tech Stack (Next.js, AWS, etc.)', val: 'YES' },
                                    { label: 'US Timezone Overlap Support', val: 'YES' },
                                    { label: 'Senior-Only Development Team', val: 'YES' },
                                    { label: 'Price-Gouging Markups', val: 'NO' }
                                ].map((item, i) => (
                                    <div key={i} className="flex justify-between p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                                        <span className="font-bold text-navy dark:text-white">{item.label}</span>
                                        <span className={item.val === 'YES' ? 'text-primary font-black' : 'text-red-400 font-black'}>{item.val}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-navy p-10 rounded-[3rem] shadow-2xl">
                            <h3 className="text-2xl font-bold text-white mb-4">Request a Ballpark Quote</h3>
                            <p className="text-slate-400 mb-8">Send us your project brief and we&apos;ll get back to you with a rough estimate in 4 hours.</p>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
