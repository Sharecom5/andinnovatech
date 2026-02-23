import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import ContactForm from '@/components/sections/ContactForm';
import { CheckCircle2, Zap, ShieldCheck, Smartphone } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Website Development Services | AnD Innovatech',
    description: 'Custom website development services by AnD Innovatech. We create high-performance, responsive, and SEO-friendly websites for businesses worldwide.',
};

const inclusions = [
    'Custom UI/UX Design Tailored to Your Brand',
    'Fully Responsive & Mobile-Optimized Layouts',
    'Search Engine Optimization (SEO) Basics',
    'Fast Loading Speeds & Performance Optimization',
    'Secure & Scalable Backend Architecture',
    'Content Management System (CMS) Integration',
];

export default function WebsiteDevelopment() {
    return (
        <div className="overflow-x-hidden">
            <Hero
                title={<>High-Performance <span className="gradient-text">Website Development</span></>}
                subtitle="We build digital experiences that engage and convert. Our websites are engineered for speed, security, and measurable business growth."
                badgeText="🌐 Web Excellence"
                ctaText="Discuss Your Site"
                showStats={false}
                category="website"
            />

            <section className="section-padding bg-white dark:bg-navy">
                <div className="section-container">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div className="space-y-10">
                            <div>
                                <Badge className="mb-4 bg-primary/10 text-primary border-none font-bold italic">Transforming Ideas into Reality</Badge>
                                <h1 className="text-4xl md:text-5xl font-bold text-navy dark:text-white leading-tight">
                                    Engineering Websites for the <span className="text-primary">Modern Web</span>
                                </h1>
                            </div>

                            <div className="prose prose-lg dark:prose-invert text-grey dark:text-slate-400 space-y-6">
                                <p>
                                    In today&apos;s digital-first economy, your website is your most powerful asset. At AnD Innovatech, we combine cutting-edge technology with strategic design to create platforms that aren&apos;t just beautiful—they&apos;re productive.
                                </p>
                                <p>
                                    Whether you need a high-converting landing page, a complex e-commerce engine, or a robust corporate portal, our team utilizes modern frameworks like **React, Next.js, and Node.js** to deliver unparalleled performance.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4">
                                {inclusions.map((item) => (
                                    <div key={item} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700">
                                        <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:sticky lg:top-32 h-fit">
                            <div className="bg-navy p-10 rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
                                <h3 className="text-2xl font-bold text-white mb-2 relative z-10">Get a Custom Quote</h3>
                                <p className="text-slate-400 text-sm mb-8 relative z-10">Tell us about your project and we&apos;ll get back to you with a roadmap.</p>
                                <div className="relative z-10">
                                    <ContactForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Row */}
            <section className="section-padding bg-slate-50 dark:bg-slate-900/50">
                <div className="section-container">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div className="p-10 bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all">
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
                                <Zap size={32} />
                            </div>
                            <h4 className="text-xl font-bold text-navy dark:text-white mb-4">Blazing Fast</h4>
                            <p className="text-grey dark:text-slate-400 text-sm leading-relaxed">Latency is the enemy of conversion. We optimize every millisecond for peak performance.</p>
                        </div>
                        <div className="p-10 bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all">
                            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mx-auto mb-6">
                                <ShieldCheck size={32} />
                            </div>
                            <h4 className="text-xl font-bold text-navy dark:text-white mb-4">Enterprise Security</h4>
                            <p className="text-grey dark:text-slate-400 text-sm leading-relaxed">From SSL to advanced firewall configurations, we keep your business and data safe.</p>
                        </div>
                        <div className="p-10 bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all">
                            <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 mx-auto mb-6">
                                <Smartphone size={32} />
                            </div>
                            <h4 className="text-xl font-bold text-navy dark:text-white mb-4">Responsive First</h4>
                            <p className="text-grey dark:text-slate-400 text-sm leading-relaxed">Seamless experiences across mobile, tablet, and desktop is our baseline requirement.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
