import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import ContactForm from '@/components/sections/ContactForm';
import { CheckCircle2, XCircle, ArrowRight, Zap, Target, Gauge, Shield, Users, DollarSign, BarChart3 } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'AnD Innovatech vs. Local US Agencies | The ROI Comparison',
    description: 'Compare the cost and quality of AnD Innovatech vs. traditional US software agencies. Discover how we deliver Silicon Valley engineering at 60% lower costs.',
};

const comparisonData = [
    {
        feature: 'Senior Developer Rate',
        usa: '$150 - $250 / hr',
        and: '$45 - $75 / hr',
        win: 'and'
    },
    {
        feature: 'Technical Stack',
        usa: 'Varies (Often Legacy)',
        and: 'Modern (Next.js/Node)',
        win: 'and'
    },
    {
        feature: 'Project Management',
        usa: 'US-Based',
        and: 'US-Managed Strategy',
        win: 'neutral'
    },
    {
        feature: 'MVP Speed-to-Market',
        usa: '3 - 6 Months',
        and: '4 - 8 Weeks',
        win: 'and'
    },
    {
        feature: 'Ongoing Maintenance',
        usa: 'Expensive Retainers',
        and: 'Affordable Growth Plans',
        win: 'and'
    },
];

export default function AgencyComparisonPage() {
    return (
        <div className="overflow-x-hidden bg-white dark:bg-navy text-navy dark:text-white">
            <Hero
                title={<>AnD Innovatech vs. <span className="gradient-text">Traditional US Agencies</span></>}
                subtitle="The old model of high-priced local agencies is broken. We provide the same elite engineering quality at a fraction of the cost, managed by a US-based strategic team."
                badgeText="📊 ROI Comparison"
                ctaText="Get a Direct Quote"
                ctaHref="/contact"
                showStats={true}
                category="software"
            />

            <section className="section-padding bg-white dark:bg-navy">
                <div className="section-container">
                    <SectionHeading
                        title="Why Pay for the Zip Code?"
                        subtitle="You're paying for their high-rise office rent. Stop subsidizing overhead and start paying for actual code."
                    />

                    <div className="mt-16 overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="border-b border-slate-200 dark:border-white/10">
                                    <th className="py-6 px-4 text-left text-2xl font-bold">Metric</th>
                                    <th className="py-6 px-4 text-center text-2xl font-bold text-grey dark:text-slate-400">Typical US Agency</th>
                                    <th className="py-6 px-4 text-center text-2xl font-bold text-primary">AnD Innovatech</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonData.map((row, i) => (
                                    <tr key={i} className="border-b border-slate-100 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                                        <td className="py-8 px-4 font-bold text-lg">{row.feature}</td>
                                        <td className="py-8 px-4 text-center text-grey dark:text-slate-400 italic">
                                            <div className="flex items-center justify-center gap-2">
                                                <XCircle className="text-red-500 shrink-0" size={18} />
                                                {row.usa}
                                            </div>
                                        </td>
                                        <td className="py-8 px-4 text-center font-black text-xl text-primary">
                                            <div className="flex items-center justify-center gap-2">
                                                <CheckCircle2 className="text-green-500 shrink-0" size={22} />
                                                {row.and}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-slate-50 dark:bg-navy/80">
                <div className="section-container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <Badge className="mb-6 bg-primary/10 text-primary border-none font-bold uppercase tracking-widest">The "Innova" Secret</Badge>
                            <h2 className="text-4xl md:text-6xl font-extrabold text-navy dark:text-white mb-8 leading-none tracking-tighter">
                                Senior Talent. <span className="text-primary">Global Price.</span>
                            </h2>
                            <div className="prose prose-lg dark:prose-invert text-grey dark:text-slate-400 mb-10">
                                <p>
                                    Traditional agencies spend 40% of their revenue on office space and account managers who don&apos;t write code. We spend 90% of our revenue on senior engineering talent.
                                </p>
                                <p>
                                    Our model allows US startups and SMBs to compete with enterprise giants because they can afford to build at the same scale without the venture-capital-level burn rate.
                                </p>
                            </div>
                            <Link href="/contact">
                                <Button size="lg" className="bg-primary text-white px-10 py-6 rounded-full font-black shadow-glow-primary">
                                    Calculate My Potential Savings →
                                </Button>
                            </Link>
                        </div>
                        <div className="bg-navy p-10 md:p-14 rounded-[4rem] border border-white/10 shadow-3xl">
                            <h3 className="text-3xl font-bold text-white mb-6">Request a Direct Quote</h3>
                            <p className="text-slate-400 mb-10">Tell us about your project or your current agency bill. We&apos;ll show you exactly how we can deliver more for less.</p>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
