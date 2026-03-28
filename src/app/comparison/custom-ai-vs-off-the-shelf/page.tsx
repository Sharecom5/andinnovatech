import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import ContactForm from '@/components/sections/ContactForm';
import { CheckCircle2, XCircle, ArrowRight, Zap, Target, Gauge, Shield, Bot, MessageSquare, BarChart3 } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export const dynamic = 'force-static';

export const metadata: Metadata = {
    title: 'Custom AI vs. Off-the-shelf Chatbots | Which Delivers Faster ROI?',
    description: 'Compare high-performance custom AI agents vs. generic off-the-shelf chatbots. Discover why enterprise-grade AI is the secret to scaling small businesses.',
    openGraph: {
        title: 'Custom AI vs. Off-the-shelf Chatbots | Which Delivers Faster ROI?',
        description: 'Elite AI agents deliver significantly higher ROI than generic bots.',
        url: 'https://www.andinnovatech.com/comparison/custom-ai-vs-off-the-shelf/',
        images: [{ url: 'https://www.andinnovatech.com/images/check_ai_automation.png' }],
    },
    alternates: {
        canonical: 'https://www.andinnovatech.com/comparison/custom-ai-vs-off-the-shelf/',
    }
};

const aiComparison = [
    {
        feature: 'Context Understanding',
        shelf: 'Low (Matches Keywords)',
        custom: 'High (Understands Intent)',
        win: 'custom'
    },
    {
        feature: 'Lead Qualification',
        shelf: 'Simple Form Filling',
        custom: 'Strategic Nurturing',
        win: 'custom'
    },
    {
        feature: 'CRM Integration',
        shelf: 'Limited (Zapier required)',
        custom: 'Native & Seamless',
        win: 'custom'
    },
    {
        feature: 'Brand Voice',
        shelf: 'Generic / Robotic',
        custom: 'Brand-Matched Tone',
        win: 'custom'
    },
    {
        feature: 'Multi-Step Actions',
        shelf: 'Cannot Take Actions',
        custom: 'Books Appointments/Quotes',
        win: 'custom'
    },
];

export default function AiComparisonPage() {
    return (
        <div className="overflow-x-hidden bg-white dark:bg-navy text-navy dark:text-white">
            <Hero
                title={<>Custom AI vs. <span className="gradient-text">Off-the-shelf Chatbots</span></>}
                subtitle="Small businesses often settle for basic chatbots that frustrate customers. We build 'AI Agents' that understand your business and act as your 24/7 top salesman."
                badgeText="🤖 The AI Choice"
                ctaText="See a Custom Demo"
                ctaHref="/contact"
                showStats={true}
                category="software"
            />

            <section className="section-padding bg-white dark:bg-navy">
                <div className="section-container">
                    <SectionHeading
                        title="Don&apos;t Annoy Your Leads"
                        subtitle="Most chatbots are just glorified forms. Our AI Agents are trained on your company brain."
                    />

                    <div className="mt-16 overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="border-b border-slate-200 dark:border-white/10">
                                    <th className="py-6 px-4 text-left text-2xl font-bold">Feature</th>
                                    <th className="py-6 px-4 text-center text-2xl font-bold text-grey dark:text-slate-400">$50/mo "Off-the-shelf" Bot</th>
                                    <th className="py-6 px-4 text-center text-2xl font-bold text-primary">AnD Custom AI Agent</th>
                                </tr>
                            </thead>
                            <tbody>
                                {aiComparison.map((row, i) => (
                                    <tr key={i} className="border-b border-slate-100 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                                        <td className="py-8 px-4 font-bold text-lg">{row.feature}</td>
                                        <td className="py-8 px-4 text-center text-grey dark:text-slate-400">
                                            <div className="flex items-center justify-center gap-2">
                                                <XCircle className="text-red-500 shrink-0" size={18} />
                                                {row.shelf}
                                            </div>
                                        </td>
                                        <td className="py-8 px-4 text-center font-black text-xl text-primary">
                                            <div className="flex items-center justify-center gap-2">
                                                <CheckCircle2 className="text-green-500 shrink-0" size={22} />
                                                {row.custom}
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
                        <div className="bg-navy p-10 md:p-14 rounded-[4rem] border border-white/10 shadow-3xl">
                            <h3 className="text-3xl font-bold text-white mb-6">Experience the Difference</h3>
                            <p className="text-slate-400 mb-10">Tell us about your business. We&apos;ll show you a live demo of a bot that actually speaks your language.</p>
                            <ContactForm />
                        </div>
                        <div>
                            <Badge className="mb-6 bg-primary/10 text-primary border-none font-bold uppercase tracking-widest">Intelligence Over Scripts</Badge>
                            <h2 className="text-4xl md:text-6xl font-extrabold text-navy dark:text-white mb-8 leading-none tracking-tighter">
                                Why Custom AI <span className="text-primary">Wins Every Time.</span>
                            </h2>
                            <div className="prose prose-lg dark:prose-invert text-grey dark:text-slate-400 mb-10">
                                <p>
                                    A generic chatbot is like a brochure that occasionally talks back. A custom AI Agent is a team member. It knows your pricing, your service areas, your competitors, and your unique selling points.
                                </p>
                                <p>
                                    When a customer asks a complex question at 2 AM, a custom agent provides a helpful, human-like answer and secures the lead. A generic bot says "We&apos;ll get back to you," and the customer moves to the next search result.
                                </p>
                            </div>
                            <Link href="/contact">
                                <Button size="lg" className="bg-primary text-white px-10 py-6 rounded-full font-black shadow-glow-primary">
                                    Analyze My AI Needs →
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
