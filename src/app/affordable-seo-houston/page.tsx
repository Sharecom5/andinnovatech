import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import ContactForm from '@/components/sections/ContactForm';
import { CheckCircle2, Search, ArrowRight, Zap, Target, Gauge, Shield, MapPin, Star, BarChart3 } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Affordable SEO Services for Small Businesses in Houston | Rank #1',
    description: 'Looking for affordable SEO in Houston? We help Houston small businesses dominate Google and get more leads without the corporate price tag. Free SEO audit.',
        alternates: {
        canonical: 'https://www.andinnovatech.com/affordable-seo-houston/',
    },
    openGraph: {
        title: 'Affordable SEO Services for Small Businesses in Houston',
        description: 'Elite SEO for Houston small businesses.',
        url: 'https://www.andinnovatech.com/affordable-seo-houston/',
        images: [{ url: 'https://www.andinnovatech.com/images/seo_abstract.png' }],
    }

};

const houstonFeatures = [
    {
        icon: MapPin,
        title: 'Houston Map Pack',
        desc: 'Optimized GMB profile management to ensure your Houston business shows up when people search for services "near me".',
    },
    {
        icon: Target,
        title: 'Conversion Focused',
        desc: 'We don\'t just chase traffic; we chase leads. We target high-intent Houston keywords that put money in your pocket.',
    },
    {
        icon: BarChart3,
        title: 'Fixed Monthly Plans',
        desc: 'Elite SEO shouldn\'t cost $5k/mo. We offer affordable, fixed-price plans designed for Houston small business budgets.',
    },
];

export default function HoustonSmallBusinessSeo() {
    return (
        <div className="overflow-x-hidden bg-white dark:bg-navy text-navy dark:text-white">
            <Hero
                title={<>Affordable SEO Services for <span className="gradient-text">Small Businesses in Houston</span></>}
                subtitle="Rank on Page 1 of Google and dominate your local Houston market. Proven results for HVAC, plumbers, lawyers, and retail. No long-term contracts."
                badgeText="🚀 Houston SEO Experts"
                ctaText="Free Houston SEO Audit"
                ctaHref="/contact"
                showStats={true}
                category="seo"
            />

            <section className="section-padding bg-white dark:bg-navy">
                <div className="section-container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <Badge className="mb-6 bg-primary/10 text-primary border-none font-bold uppercase tracking-widest">Houston Growth Partners</Badge>
                            <h2 className="text-4xl md:text-6xl font-extrabold text-navy dark:text-white mb-8 leading-none tracking-tighter">
                                More Leads for Your <span className="text-primary">Houston Business.</span>
                            </h2>

                            <div className="prose prose-lg dark:prose-invert text-grey dark:text-slate-400 mb-12">
                                <p>
                                    Houston is a massive, diverse city. To win here, you need more than just "SEO"—you need a localized strategy that targets the right neighborhoods in H-Town.
                                </p>
                                <p>
                                    <strong>AnD Innovatech</strong> provides Houston small businesses with the same elite SEO techniques used by Fortune 500 companies, but at a price you can actually afford. We focus on transparent results: higher rankings, more clicks, and more customers calling your phone.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                {[
                                    'Houston Local Pack Rankings',
                                    'High-Intent Keyword Targeting',
                                    'Technical SEO & Speed Fixes',
                                    'Local Citation Building',
                                    'Monthly Transparency Reports',
                                    'No Hidden Setup Fees'
                                ].map((item) => (
                                    <div key={item} className="flex items-center space-x-3">
                                        <div className="p-1 rounded-full bg-primary/10 text-primary">
                                            <CheckCircle2 size={14} />
                                        </div>
                                        <span className="text-sm font-bold">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <Link href="/contact">
                                <Button size="lg" className="bg-primary text-white hover:bg-primary-600 px-12 py-8 rounded-full font-black text-xl">
                                    Analyze My Houston Site →
                                </Button>
                            </Link>
                        </div>

                        <div className="relative">
                            <div className="bg-navy p-10 md:p-14 rounded-[4rem] border border-white/10 shadow-glow-primary relative overflow-hidden backdrop-blur-3xl">
                                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -z-10" />
                                <h3 className="text-3xl font-bold text-white mb-6">Start Your Rank Climb</h3>
                                <p className="text-slate-400 mb-10 text-lg">Send us your URL. We&apos;ll show you exactly why your Houston competitors are outranking you and how we can fix it.</p>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-slate-50 dark:bg-navy/80">
                <div className="section-container">
                    <SectionHeading
                        title="Houston SEO That Actually Works"
                        subtitle="We skip the vanity metrics and focus on the data that grows your bank account."
                    />
                    <div className="grid md:grid-cols-3 gap-10 mt-16">
                        {houstonFeatures.map((item, i) => (
                            <div key={i} className="bg-white dark:bg-slate-800 p-12 rounded-[3.5rem] border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-2xl transition-all group">
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-8 group-hover:scale-110 transition-transform">
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
