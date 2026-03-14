import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import ContactForm from '@/components/sections/ContactForm';
import { CheckCircle2, XCircle, ArrowRight, Zap, Target, Gauge, Shield, DollarSign, Clock, Layout } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export const dynamic = 'force-static';

export const metadata: Metadata = {
    title: 'Fixed-Price vs. Hourly Development | Why Startups Choose Predictability',
    description: 'Stop the hourly billing nightmare. Discover why fixed-price development cycles are the safest and most efficient way for US startups to build MVPs.',
    openGraph: {
        title: 'Fixed-Price vs. Hourly Development | Why Startups Choose Predictability',
        description: 'Predictable milestone-based pricing for startups and SMBs.',
        url: 'https://www.andinnovatech.com/comparison/fixed-price-vs-hourly-development/',
        images: [{ url: 'https://www.andinnovatech.com/images/hero_main_abstract.png' }],
    }
};

const pricingComparison = [
    {
        feature: 'Cost Certainty',
        hourly: 'Unpredictable (Burn Rate)',
        fixed: '100% Guaranteed',
        win: 'fixed'
    },
    {
        feature: 'Dev Incentive',
        hourly: 'To Work More Hours',
        fixed: 'To Deliver Quality Faster',
        win: 'fixed'
    },
    {
        feature: 'Project Scope',
        hourly: 'Vague / "Agile" Drift',
        fixed: 'Clearly Defined & Met',
        win: 'fixed'
    },
    {
        feature: 'Risk Ownership',
        hourly: 'Founder Carries All Risk',
        fixed: 'Agency Carries Delivery Risk',
        win: 'fixed'
    },
    {
        feature: 'Invoicing',
        hourly: 'Complex Time-Logs',
        fixed: 'Milestone Based',
        win: 'fixed'
    },
];

export default function PricingComparisonPage() {
    return (
        <div className="overflow-x-hidden bg-white dark:bg-navy text-navy dark:text-white">
            <Hero
                title={<>Fixed-Price vs. <span className="gradient-text">Hourly Development</span></>}
                subtitle="Startups shouldn't have to worry about how many minutes a developer spent on a bug. We offer fixed-price milestone delivery so you can plan your runway with 100% confidence."
                badgeText="💰 Smart Budgeting"
                ctaText="Get a Fixed-Price Quote"
                ctaHref="/contact"
                showStats={true}
                category="software"
            />

            <section className="section-padding bg-white dark:bg-navy">
                <div className="section-container">
                    <SectionHeading
                        title="Kill the Hourly Invoice"
                        subtitle="We believe in output, not hours. Our milestone-based pricing aligns our success with yours."
                    />

                    <div className="mt-16 overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="border-b border-slate-200 dark:border-white/10">
                                    <th className="py-6 px-4 text-left text-2xl font-bold">Concept</th>
                                    <th className="py-6 px-4 text-center text-2xl font-bold text-grey dark:text-slate-400">Traditional Hourly Billing</th>
                                    <th className="py-6 px-4 text-center text-2xl font-bold text-primary">AnD Fixed-Price Milestones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pricingComparison.map((row, i) => (
                                    <tr key={i} className="border-b border-slate-100 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                                        <td className="py-8 px-4 font-bold text-lg">{row.feature}</td>
                                        <td className="py-8 px-4 text-center text-grey dark:text-slate-400">
                                            <div className="flex items-center justify-center gap-2">
                                                <XCircle className="text-red-500 shrink-0" size={18} />
                                                {row.hourly}
                                            </div>
                                        </td>
                                        <td className="py-8 px-4 text-center font-black text-xl text-primary">
                                            <div className="flex items-center justify-center gap-2">
                                                <CheckCircle2 className="text-green-500 shrink-0" size={22} />
                                                {row.fixed}
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
                            <Badge className="mb-6 bg-primary/10 text-primary border-none font-bold uppercase tracking-widest">Alignment over billable hours</Badge>
                            <h2 className="text-4xl md:text-6xl font-extrabold text-navy dark:text-white mb-8 leading-none tracking-tighter">
                                Budget for <span className="text-primary">Results.</span>
                            </h2>
                            <div className="prose prose-lg dark:prose-invert text-grey dark:text-slate-400 mb-10">
                                <p>
                                    When you hire an agency hourly, you are incentivizing them to work more hours. Every bug fixed and every meeting held is an additional cost to you. This creates a misalignment of goals.
                                </p>
                                <p>
                                    At **AnD Innovatech**, we quote by the milestone. If a feature takes us longer than expected, that&apos;s on us. This forces our engineering team to be efficient, focused, and dedicated to delivering a bug-free product on time.
                                </p>
                            </div>
                            <Link href="/contact">
                                <Button size="lg" className="bg-primary text-white px-10 py-6 rounded-full font-black shadow-glow-primary">
                                    I Want Predictable Pricing →
                                </Button>
                            </Link>
                        </div>
                        <div className="bg-navy p-10 md:p-14 rounded-[4rem] border border-white/10 shadow-3xl">
                            <h3 className="text-3xl font-bold text-white mb-6">Stop the Bleeding</h3>
                            <p className="text-slate-400 mb-10">Send us your project brief. We&apos;ll provided a comprehensive, fixed-price quote with clear timeframes and deliverables.</p>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
