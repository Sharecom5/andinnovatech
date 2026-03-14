import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import ContactForm from '@/components/sections/ContactForm';
import { CheckCircle2, Search, ArrowRight, Zap, Target, Gauge, Shield, MapPin, Star, BarChart3, Camera } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'SEO Agency Los Angeles | Top-Rated Results',
    description: 'Looking for a Los Angeles SEO agency that delivers? We help LA local businesses dominate search results, rank on Google Maps, and grow revenue. Free SEO audit for LA businesses.',
    openGraph: {
        title: 'SEO Agency Los Angeles | Top-Rated Results',
        description: 'Elite SEO for Los Angeles businesses.',
        url: 'https://www.andinnovatech.com/seo-agency-los-angeles/',
        images: [{ url: 'https://www.andinnovatech.com/images/seo_abstract.png' }],
    }
};

const laSeoFeatures = [
    {
        icon: Camera,
        title: 'LA Visual SEO',
        desc: 'In a city that lives on aesthetics, we optimize your visual content (images & video) to rank in Google Search and Discover.',
    },
    {
        icon: MapPin,
        title: 'Hyper-Local Targeting',
        desc: 'From Santa Monica to Pasadena, we target the specific neighborhoods where your customers live and work.',
    },
    {
        icon: Star,
        title: 'Review Dominance',
        desc: 'We help you automate review generation to build the social proof needed to win in the competitive LA market.',
    },
];

export default function LosAngelesLocalBusinessSeo() {
    return (
        <div className="overflow-x-hidden bg-white dark:bg-navy text-navy dark:text-white">
            <Hero
                title={<>#1 SEO Agency for <span className="gradient-text">Local Businesses in Los Angeles</span></>}
                subtitle="Stop getting buried by corporate giants. We help LA's best local businesses outrank the competition and own their neighborhood search results."
                badgeText="🌴 LA's SEO Authority"
                ctaText="Get My Free LA SEO Audit"
                ctaHref="/contact"
                showStats={true}
                category="seo"
            />

            <section className="section-padding bg-white dark:bg-navy">
                <div className="section-container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <Badge className="mb-6 bg-primary/10 text-primary border-none font-bold uppercase tracking-widest">Los Angeles SEO Growth</Badge>
                            <h2 className="text-4xl md:text-6xl font-extrabold text-navy dark:text-white mb-8 leading-none tracking-tighter">
                                Dominate the <span className="text-primary">LA Search Scene.</span>
                            </h2>

                            <div className="prose prose-lg dark:prose-invert text-grey dark:text-slate-400 mb-12">
                                <p>
                                    Los Angeles is the most competitive digital market in the West. If you&apos;re not on the first page of Google, your business practically doesn&apos;t exist to the 4 million people living here.
                                </p>
                                <p>
                                    At **AnD Innovatech**, we don&apos;t just "do SEO"—we engineer search dominance. We focus on the high-intent keywords that LA consumers use: "near me," "best rated," and industry-specific emergency terms. Our data-driven approach ensures your local business isn&apos;t just a face in the crowd, but a leader in your niche.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                {[
                                    'LA Local Pack Dominance',
                                    'Google Maps Optimization',
                                    'Social Proof & Review Growth',
                                    'Neighborhood Geo-Targeting',
                                    'High-Performance Content',
                                    'Transparent ROI Tracking'
                                ].map((item) => (
                                    <div key={item} className="flex items-center space-x-3">
                                        <CheckCircle2 size={16} className="text-primary" />
                                        <span className="text-sm font-bold">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <Link href="/contact">
                                <Button size="lg" className="bg-primary text-white hover:bg-primary-600 px-12 py-8 rounded-full font-black text-xl shadow-glow-primary">
                                    Analyze My LA Rankings →
                                </Button>
                            </Link>
                        </div>

                        <div className="relative">
                            <div className="bg-navy p-10 md:p-14 rounded-[4rem] border border-white/10 shadow-glow-primary relative overflow-hidden backdrop-blur-3xl">
                                <h3 className="text-3xl font-bold text-white mb-6">Claim Your LA Rankings</h3>
                                <p className="text-slate-400 mb-10 text-lg">Send us your URL and your top 3 competitors in Los Angeles. We&apos;ll build a custom roadmap to overtake them.</p>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-slate-50 dark:bg-navy/50">
                <div className="section-container">
                    <SectionHeading
                        title="LA SEO Engineered for ROI"
                        subtitle="We skip the vanity metrics and focus on the traffic that leads to closed sales."
                    />
                    <div className="grid md:grid-cols-3 gap-10 mt-16">
                        {laSeoFeatures.map((item, i) => (
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
