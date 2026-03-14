import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import ContactForm from '@/components/sections/ContactForm';
import { CheckCircle2, XCircle, ArrowRight, Zap, Target, Gauge, Shield, Layout, Globe, Search } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export const dynamic = 'force-static';

export const metadata: Metadata = {
    title: 'WordPress vs. Next.js for Local Businesses | The 2026 Speed Test',
    description: 'Is your WordPress site killing your local search rankings? Compare WordPress vs Next.js for speed, SEO, and security. Choice for growth-focused SMBs.',
    openGraph: {
        title: 'WordPress vs. Next.js for Local Businesses | The 2026 Speed Test',
        description: 'Next.js delivers instant speeds compared to WordPress.',
        url: 'https://www.andinnovatech.com/comparison/wordpress-vs-nextjs-speed-test/',
        images: [{ url: 'https://www.andinnovatech.com/images/hero_main_abstract.png' }],
    }
};

const techComparison = [
    {
        feature: 'Page Load Speed',
        wp: 'Slow (3-5+ seconds)',
        next: 'Instant (Under 1s)',
        win: 'next'
    },
    {
        feature: 'Core Web Vitals',
        wp: 'Hard to Optimize',
        next: 'Optimized by Default',
        win: 'next'
    },
    {
        feature: 'Security',
        wp: 'Vulnerable (Plugins/Themes)',
        next: 'Stateless & Secure',
        win: 'next'
    },
    {
        feature: 'SEO Control',
        wp: 'Plugin Dependent',
        next: 'Full Technical Control',
        win: 'next'
    },
    {
        feature: 'Development Cost',
        wp: 'Low Initial / High Maint.',
        next: 'Moderate Initial / Zero Maint.',
        win: 'neutral'
    },
];

export default function TechComparisonPage() {
    return (
        <div className="overflow-x-hidden bg-white dark:bg-navy text-navy dark:text-white">
            <Hero
                title={<>WordPress vs. <span className="gradient-text">Next.js for Local Businesses</span></>}
                subtitle="Your website's speed is a direct ranking factor in 2026. Stop fighting plugins and theme bloat. We build high-performance Next.js sites that leave WordPress competitors in the dust."
                badgeText="⚡ Speed Comparison"
                ctaText="Test My Site Speed"
                ctaHref="/contact"
                showStats={true}
                category="software"
            />

            <section className="section-padding bg-white dark:bg-navy">
                <div className="section-container">
                    <SectionHeading
                        title="Speed is Money"
                        subtitle="Every 1-second delay in mobile load time can decrease conversions by 20%. Where does your site stand?"
                    />

                    <div className="mt-16 overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="border-b border-slate-200 dark:border-white/10">
                                    <th className="py-6 px-4 text-left text-2xl font-bold">Performance Metric</th>
                                    <th className="py-6 px-4 text-center text-2xl font-bold text-grey dark:text-slate-400">Typical WordPress Site</th>
                                    <th className="py-6 px-4 text-center text-2xl font-bold text-primary">AnD Next.js Platform</th>
                                </tr>
                            </thead>
                            <tbody>
                                {techComparison.map((row, i) => (
                                    <tr key={i} className="border-b border-slate-100 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                                        <td className="py-8 px-4 font-bold text-lg">{row.feature}</td>
                                        <td className="py-8 px-4 text-center text-grey dark:text-slate-400">
                                            <div className="flex items-center justify-center gap-2">
                                                <XCircle className="text-red-500 shrink-0" size={18} />
                                                {row.wp}
                                            </div>
                                        </td>
                                        <td className="py-8 px-4 text-center font-black text-xl text-primary">
                                            <div className="flex items-center justify-center gap-2">
                                                <CheckCircle2 className="text-green-500 shrink-0" size={22} />
                                                {row.next}
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
                            <h3 className="text-3xl font-bold text-white mb-6">Free Speed Audit</h3>
                            <p className="text-slate-400 mb-10">Send us your URL. We&apos;ll recorded a video showing exactly how much traffic you&apos;re losing due to technical speed issues and how Next.js fixes it.</p>
                            <ContactForm />
                        </div>
                        <div>
                            <Badge className="mb-6 bg-primary/10 text-primary border-none font-bold uppercase tracking-widest">Built for the Modern Web</Badge>
                            <h2 className="text-4xl md:text-6xl font-extrabold text-navy dark:text-white mb-8 leading-none tracking-tighter">
                                Why We Left <span className="text-primary">WordPress Behind.</span>
                            </h2>
                            <div className="prose prose-lg dark:prose-invert text-grey dark:text-slate-400 mb-10">
                                <p>
                                    WordPress was built for blogs in 2003. Next.js was built for the modern, high-speed applications of 2026.
                                </p>
                                <p>
                                    For a local business, "Technical SEO" often comes down to one thing: does the site load instantly on a phone? WordPress sites are weighed down by databases, plugins, and third-party scripts. Next.js sites are static, pre-rendered, and served from the edge (CDN), making them the fastest digital assets on the planet.
                                </p>
                            </div>
                            <Link href="/contact">
                                <Button size="lg" className="bg-primary text-white px-10 py-6 rounded-full font-black shadow-glow-primary">
                                    I Want a Faster Website →
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
