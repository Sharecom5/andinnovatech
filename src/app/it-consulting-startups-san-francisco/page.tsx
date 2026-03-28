import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import ContactForm from '@/components/sections/ContactForm';
import { CheckCircle2, Shield, ArrowRight, Zap, Target, Gauge, Cpu, Users, Rocket, BarChart3 } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Expert IT Consulting for Startups in San Francisco',
    description: 'Scale your SF startup with elite engineering and technical strategy. We provide fractional CTO services and agile development for Bay Area founders.',
        alternates: {
        canonical: 'https://www.andinnovatech.com/it-consulting-startups-san-francisco/',
    },
    openGraph: {
        title: 'Expert IT Consulting for Startups in San Francisco',
        description: 'Elite technical advisory for SF startups.',
        url: 'https://www.andinnovatech.com/it-consulting-startups-san-francisco/',
        images: [{ url: 'https://www.andinnovatech.com/images/hero_main_abstract.png' }],
    }

};

const sfItFeatures = [
    {
        icon: Rocket,
        title: 'Scalable Architecture',
        desc: 'Don\'t let your success break your code. We help SF startups build architectures that scale from seed to Series C and beyond.',
    },
    {
        icon: Shield,
        title: 'Security & Compliance',
        desc: 'Built-in security audits, SOC2 readiness, and encryption standards that meet the highest Silicon Valley expectations.',
    },
    {
        icon: BarChart3,
        title: 'Burn Rate Optimization',
        desc: 'We audit your tech stack to eliminate technical debt and redundant SaaS costs, redirecting funds to actual product growth.',
    },
];

export default function SfStartupItConsulting() {
    return (
        <div className="overflow-x-hidden bg-white dark:bg-navy text-navy dark:text-white">
            <Hero
                title={<>Strategic IT Consulting for <span className="gradient-text">San Francisco Startups</span></>}
                subtitle="Build Silicon Valley technology without the Silicon Valley price tag. We help SF founders solve complex engineering challenges and optimize their tech roadmap for growth."
                badgeText="🌉 SF Startup Experts"
                ctaText="Book a Strategy Session"
                ctaHref="/contact"
                showStats={true}
                category="software"
            />

            <section className="section-padding bg-white dark:bg-navy">
                <div className="section-container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <Badge className="mb-6 bg-primary/10 text-primary border-none font-bold uppercase tracking-widest">Built for the Bay Area</Badge>
                            <h2 className="text-4xl md:text-6xl font-extrabold text-navy dark:text-white mb-8 leading-none tracking-tighter">
                                Senior Tech Strategy, <span className="text-primary">Fractional Cost.</span>
                            </h2>

                            <div className="prose prose-lg dark:prose-invert text-grey dark:text-slate-400 mb-12">
                                <p>
                                    Founding a startup in San Francisco is a race against time and burn rate. You need senior-level technical leadership, but you don&apos;t always need a $300k/year in-house CTO during your first few stages.
                                </p>
                                <p>
                                    <strong>AnD Innovatech</strong> provides San Francisco startups with elite-level IT consulting and fractional CTO services. We help you make the right technology choices today so you don&apos;t have to rebuild everything tomorrow. From cloud infrastructure audit to hiring your first engineering squad, we are your strategic tech partner in the Bay.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                {[
                                    'Architectural Design & Review',
                                    'Cloud Infrastructure (AWS/GCP)',
                                    'Cybersecurity & SOC2 Audit',
                                    'Fractional CTO Leadership',
                                    'Engineering Team Scaling',
                                    'DevOps & CI/CD Pipelines'
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
                                    I Need a Tech Audit →
                                </Button>
                            </Link>
                        </div>

                        <div className="relative">
                            <div className="bg-navy p-10 md:p-14 rounded-[4rem] border border-white/10 shadow-3xl relative overflow-hidden backdrop-blur-3xl">
                                <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[120px] -z-10" />
                                <h3 className="text-3xl font-bold text-white mb-6">Request a Tech Strategy Call</h3>
                                <p className="text-slate-400 mb-10 text-lg">Send us a brief overview of your product and current technical roadblocks. We&apos;ll provided a high-level roadmap and project scope.</p>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-slate-50 dark:bg-navy/80">
                <div className="section-container">
                    <SectionHeading
                        title="Engineering for SF Innovators"
                        subtitle="Strategic IT solutions that empower your startup to ship faster and scale further."
                    />
                    <div className="grid md:grid-cols-3 gap-10 mt-16">
                        {sfItFeatures.map((item, i) => (
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
