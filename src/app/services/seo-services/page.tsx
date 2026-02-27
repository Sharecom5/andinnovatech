import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import ContactForm from '@/components/sections/ContactForm';
import { CheckCircle2, Search, BarChart, Zap, ArrowRight, Target } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Data-Driven SEO Performance & Growth | AnD Innovatech',
    description: 'Specialist SEO agency for US SMBs. We deliver organic search dominance through technical excellence, strategic keyword targeting, and high-authority link building.',
};

const inclusions = [
    'Technical SEO Audits',
    'Keyword Research & Strategy',
    'On-Page Optimization',
    'High-Authority Link Building',
    'Local SEO & GMB Management',
    'Content Marketing Strategy',
];

const highlights = [
    {
        icon: Target,
        title: 'Precision Targeting',
        desc: 'Identifying high-intent keywords that drive actual conversions, not just vanity metrics.',
    },
    {
        icon: BarChart,
        title: 'Measurable ROI',
        desc: 'Transparent reporting that maps organic growth directly to your business revenue.',
    },
    {
        icon: Zap,
        title: 'Technical Dominance',
        desc: 'Ensuring your site architecture is lightning fast and fully crawler-friendly.',
    },
];

export default function SEOServices() {
    return (
        <div className="overflow-x-hidden bg-white dark:bg-navy">
            <Hero
                title={<>Data-Driven <span className="gradient-text">SEO Performance</span></>}
                subtitle="Dominate search results and capture high-intent traffic with our proven SEO methodologies. We turn organic search into your most powerful lead generator."
                badgeText="📈 Real Results, Real Growth"
                ctaText="Get Free SEO Audit"
                ctaHref="/contact"
                showStats={true}
                category="seo"
            />

            <section className="section-padding bg-white dark:bg-navy">
                <div className="section-container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <Badge className="mb-4 bg-primary/10 text-primary border-none font-bold uppercase tracking-widest">Growth Marketing</Badge>
                            <h2 className="text-4xl md:text-5xl font-bold text-navy dark:text-white mb-8 leading-tight">
                                Own Your <span className="text-primary">First Page</span> Rankings
                            </h2>
                            <div className="prose prose-lg dark:prose-invert text-grey dark:text-slate-400 mb-12">
                                <p>
                                    In the digital age, if you're not on the first page, you're invisible. At AnD Innovatech, we go beyond basic optimization. We build holistic search strategies that combine technical excellence with authoritative content.
                                </p>
                                <p>
                                    Our SEO experts stay ahead of algorithm updates to ensure your traffic is not only sustained but compounds over time. We focus on "Total Search Dominance"—capturing local pack, featured snippets, and top organic spots.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                                {inclusions.map((item) => (
                                    <div key={item} className="flex items-center space-x-3 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                                        <span className="text-navy dark:text-slate-300 font-medium text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-10 items-center pt-8 border-t border-slate-100 dark:border-slate-800">
                                <div>
                                    <div className="text-3xl font-bold text-navy dark:text-white">3x</div>
                                    <div className="text-xs text-grey uppercase tracking-widest font-bold">Avg. Traffic Increase</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-navy dark:text-white">100+</div>
                                    <div className="text-xs text-grey uppercase tracking-widest font-bold">First Page Keywords</div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:sticky lg:top-32 h-fit">
                            <div className="bg-navy p-10 rounded-[3rem] border border-white/10 shadow-glow-primary relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] opacity-40" />
                                <h3 className="text-3xl font-bold text-white mb-4 relative z-10">Get Your Free Audit</h3>
                                <p className="text-slate-400 mb-10 relative z-10">Find out where your competitors are outranking you. We'll show you the gaps.</p>
                                <div className="relative z-10">
                                    <ContactForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-slate-50 dark:bg-slate-900/50">
                <div className="section-container">
                    <SectionHeading
                        title="Our SEO Methodology"
                        subtitle="Strategic growth powered by data and industry-leading tools."
                    />
                    <div className="grid md:grid-cols-3 gap-8 mt-16">
                        {highlights.map((item, i) => (
                            <div key={i} className="bg-white dark:bg-slate-800 p-10 rounded-3xl border border-slate-100 dark:border-slate-700 hover:shadow-2xl transition-all">
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8">
                                    <item.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-navy dark:text-white mb-4">{item.title}</h3>
                                <p className="text-grey dark:text-slate-400 text-sm leading-relaxed mb-6">{item.desc}</p>
                                <Link href="/contact" className="flex items-center gap-2 text-primary font-bold text-sm">
                                    Start Ranking <ArrowRight size={16} />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-navy relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[100px]" />
                <div className="section-container relative z-10 text-center">
                    <Badge className="mb-4 bg-primary/20 text-primary-400 border-none font-bold tracking-widest uppercase">Organic Acceleration</Badge>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tighter">
                        Stop Guessing. <span className="gradient-text">Start Growing.</span>
                    </h2>
                    <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                        SEO is an investment that pays dividends. Join the ranks of businesses that have built sustainable growth through our organic strategies.
                    </p>
                    <Link href="/contact">
                        <Button size="lg" className="bg-primary hover:bg-primary-600 border-none text-white px-12 py-8 rounded-full text-xl shadow-glow">
                            Request Strategy Draft <ArrowRight className="ml-2" />
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
