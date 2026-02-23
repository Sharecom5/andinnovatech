import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import ContactForm from '@/components/sections/ContactForm';
import { CheckCircle2, Cloud, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Cloud Computing Services | AWS, Azure, GCP | AnD Innovatech',
    description: 'Scalable cloud computing solutions by AnD Innovatech. We offer cloud migration, management, and optimization services on AWS, Azure, and Google Cloud.',
};

const inclusions = [
    'Cloud Migration & Strategy',
    'AWS, Azure, & GCP Management',
    'Infrastructure as Code (IaC)',
    'Serverless Architecture Design',
    '24/7 Monitoring & DevOps',
    'Cloud Cost Optimization',
];

const pillars = [
    {
        icon: Cloud,
        title: 'Native Cloud Apps',
        desc: 'Building scalable, resilient applications designed specifically for modern cloud environments.',
    },
    {
        icon: ShieldCheck,
        title: 'Cloud Security',
        desc: 'Implementing multi-layer encryption and identity access management for total data protection.',
    },
    {
        icon: Zap,
        title: 'Infrastructure Automation',
        desc: 'Streamlining deployments through CI/CD pipelines and automated scaling protocols.',
    },
];

export default function CloudComputing() {
    return (
        <div className="overflow-x-hidden bg-white dark:bg-navy">
            <Hero
                title={<>Future-Ready <span className="gradient-text">Cloud Computing</span> Solutions</>}
                subtitle="Modernize your infrastructure with scalable, secure, and cost-effective cloud architectures. We migrate, manage, and optimize your digital workspace."
                badgeText="☁️ Enterprise Cloud Excellence"
                ctaText="Start Cloud Migration"
                showStats={true}
                category="cloud"
            />

            <section className="section-padding bg-white dark:bg-navy">
                <div className="section-container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <Badge className="mb-4 bg-primary/10 text-primary border-none font-bold uppercase tracking-widest">Digital Infrastructure</Badge>
                            <h2 className="text-4xl md:text-5xl font-bold text-navy dark:text-white mb-8 leading-tight">
                                Scalability Without <span className="text-primary">Operational Friction</span>
                            </h2>
                            <div className="prose prose-lg dark:prose-invert text-grey dark:text-slate-400 mb-12">
                                <p>
                                    The cloud is more than just storage; it's the engine of digital transformation. At AnD Innovatech, we help businesses harness AWS, Azure, and Google Cloud to drive agility and innovation.
                                </p>
                                <p>
                                    Our architects don't just "lift and shift"—we re-platform and re-architect your systems to be truly cloud-native, ensuring you only pay for what you use while achieving 99.99% availability.
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
                                    <div className="text-3xl font-bold text-navy dark:text-white">AWS/Azure</div>
                                    <div className="text-xs text-grey uppercase tracking-widest font-bold">Certified Partners</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-navy dark:text-white">99.9%</div>
                                    <div className="text-xs text-grey uppercase tracking-widest font-bold">Guaranteed Uptime</div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:sticky lg:top-32 h-fit">
                            <div className="bg-navy p-10 rounded-[3rem] border border-white/10 shadow-glow-primary relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] opacity-40" />
                                <h3 className="text-3xl font-bold text-white mb-4 relative z-10">Launch Your Cloud</h3>
                                <p className="text-slate-400 mb-10 relative z-10">Get a custom cloud architecture audit and migration roadmap today.</p>
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
                        title="Cloud Excellence Pillars"
                        subtitle="Standardizing performance across multi-cloud environments."
                    />
                    <div className="grid md:grid-cols-3 gap-8 mt-16">
                        {pillars.map((pillar, i) => (
                            <div key={i} className="bg-white dark:bg-slate-800 p-10 rounded-3xl border border-slate-100 dark:border-slate-700 hover:shadow-2xl transition-all">
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8">
                                    <pillar.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-navy dark:text-white mb-4">{pillar.title}</h3>
                                <p className="text-grey dark:text-slate-400 text-sm leading-relaxed mb-6">{pillar.desc}</p>
                                <Link href="/contact" className="flex items-center gap-2 text-primary font-bold text-sm">
                                    Optimize Now <ArrowRight size={16} />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-navy relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[100px]" />
                <div className="section-container relative z-10 text-center">
                    <Badge className="mb-4 bg-primary/20 text-primary-400 border-none font-bold tracking-widest uppercase">Scalable Infrastructure</Badge>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tighter">
                        Empower Your Enterprise with <span className="gradient-text">Cloud Agility</span>
                    </h2>
                    <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                        High-performance cloud solutions that grow with your business. Secure, cost-effective, and fully managed.
                    </p>
                    <Link href="/contact">
                        <Button size="lg" className="bg-primary hover:bg-primary-600 border-none text-white px-12 py-8 rounded-full text-xl shadow-glow">
                            Request Cloud Audit <ArrowRight className="ml-2" />
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
