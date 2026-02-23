import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import ContactForm from '@/components/sections/ContactForm';
import { CheckCircle2, Code2, Database, Layers, Rocket, Shield, HardDrive, Cpu, Settings2 } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Custom Software Development Services | AnD Innovatech',
    description: 'Custom software development services by AnD Innovatech. We build scalable, high-performance applications tailored to your business needs.',
};

const inclusions = [
    'Custom Enterprise Software Solutions',
    'API Development and Integration',
    'SaaS Product Development',
    'Legacy System Modernization',
    'Database Design and Optimization',
    'Quality Assurance and Testing',
];

export default function SoftwareDevelopment() {
    return (
        <div className="overflow-x-hidden">
            <Hero
                title={<>Custom <span className="gradient-text">Software Engineering</span></>}
                subtitle="Transforming complex business challenges into seamless digital solutions. We build scalable, secure, and future-ready enterprise applications."
                badgeText="⚙️ Engineering Excellence"
                ctaText="Discuss Architecture"
                showStats={false}
                category="software"
            />

            <section className="section-padding bg-white dark:bg-navy">
                <div className="section-container">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div className="space-y-10">
                            <div>
                                <Badge className="mb-4 bg-accent/10 text-accent border-none font-bold italic">Bespoke Enterprise Solutions</Badge>
                                <h1 className="text-4xl md:text-5xl font-bold text-navy dark:text-white leading-tight">
                                    Powering Innovation through <span className="text-accent">Robust Code</span>
                                </h1>
                            </div>

                            <div className="prose prose-lg dark:prose-invert text-grey dark:text-slate-400 space-y-6">
                                <p>
                                    At AnD Innovatech, we turn vision into variable-ready reality. Our custom software development services are designed to help you automate operations, enhance productivity, and gain a decisive edge in your market.
                                </p>
                                <p>
                                    We follow a full-cycle development approach—from deep requirement analysis and technical architecture to rapid prototyping and deployment. Our engineers are specialists in **Microservices, Cloud-Native development, and high-load systems**.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4">
                                {inclusions.map((item) => (
                                    <div key={item} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700">
                                        <CheckCircle2 size={18} className="text-primary shrink-0" />
                                        <span className="text-sm font-medium text-navy dark:text-slate-300">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:sticky lg:top-32 h-fit">
                            <div className="bg-navy p-10 rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-accent/20 rounded-full blur-3xl opacity-50" />
                                <h3 className="text-2xl font-bold text-white mb-2 relative z-10">Start Your Build</h3>
                                <p className="text-slate-400 text-sm mb-8 relative z-10">Send us your technical requirements and our leads will review them.</p>
                                <div className="relative z-10">
                                    <ContactForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Capabilities */}
            <section className="section-padding bg-slate-50 dark:bg-slate-900/50">
                <div className="section-container">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-10 bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all">
                            <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6">
                                <Cpu size={32} />
                            </div>
                            <h4 className="text-xl font-bold text-navy dark:text-white mb-4">Scalable Architecture</h4>
                            <p className="text-grey dark:text-slate-400 text-sm leading-relaxed">Built with the future in mind. Our systems handle user growth and data horizontal scaling with zero friction.</p>
                        </div>
                        <div className="p-10 bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all">
                            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                                <HardDrive size={32} />
                            </div>
                            <h4 className="text-xl font-bold text-navy dark:text-white mb-4">Database Mastery</h4>
                            <p className="text-grey dark:text-slate-400 text-sm leading-relaxed">Optimized schemas and query performance for both SQL and NoSQL ecosystems to ensure data integrity.</p>
                        </div>
                        <div className="p-10 bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all">
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                                <Settings2 size={32} />
                            </div>
                            <h4 className="text-xl font-bold text-navy dark:text-white mb-4">Integration Hub</h4>
                            <p className="text-grey dark:text-slate-400 text-sm leading-relaxed">Seamlessly connecting your new software with existing CRMs, ERPs, and 3rd-party APIs.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
