import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import ContactForm from '@/components/sections/ContactForm';
import { CheckCircle2, Smartphone, Apple, PlayCircle, Zap, ShieldCheck, Cpu, Layers, SmartphoneCharging, ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Mobile App Development | Android & iOS | AnD Innovatech',
    description: 'Custom mobile app development services by AnD Innovatech. We build native and cross-platform mobile apps for iOS and Android with exceptional UX.',
};

const inclusions = [
    'Native iOS (Swift/SwiftUI) Apps',
    'Native Android (Kotlin/Jetpack Compose)',
    'Cross-Platform (React Native/Flutter)',
    'Custom Mobile App UI/UX Design',
    'Enterprise Mobile Strategy',
    'Post-Launch Support & Maintenance',
];

const capabilities = [
    {
        icon: Apple,
        title: 'iOS Development',
        desc: 'Stunning, high-performance applications built specifically for the Apple ecosystem.',
    },
    {
        icon: PlayCircle,
        title: 'Android Development',
        desc: 'Robust and scalable Android apps designed for the diverse global device market.',
    },
    {
        icon: Layers,
        title: 'Cross-Platform',
        desc: 'Single codebase solutions via Flutter or React Native for faster time-to-market.',
    },
];

export default function MobileAppDevelopment() {
    return (
        <main className="overflow-hidden bg-white dark:bg-navy">
            <Hero
                title={<>High-Performance <span className="gradient-text">Mobile Applications</span></>}
                subtitle="We build seamless iOS and Android experiences that engage users and drive business growth. From concept to App Store launch, we've got you covered."
                badgeText="📱 Mobile-First Excellence"
                ctaText="Discuss Your App Idea"
                ctaHref="/contact"
                showStats={true}
                category="software"
            />

            <section className="section-padding bg-white dark:bg-navy">
                <div className="section-container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <Badge className="mb-4 bg-primary/10 text-primary border-none font-bold uppercase tracking-widest">App Engineering</Badge>
                            <h2 className="text-4xl md:text-5xl font-bold text-navy dark:text-white mb-8 leading-tight">
                                Bring Your Vision to <span className="text-primary">Fingertips</span>
                            </h2>
                            <div className="prose prose-lg dark:prose-invert text-grey dark:text-slate-400 mb-12">
                                <p>
                                    In a mobile-first world, your app is often the primary touchpoint for your customers. At AnD Innovatech, we don't just build apps; we build platforms that solve problems and delight users.
                                </p>
                                <p>
                                    Our multidisciplinary team combines technical mastery with creative design to ensure your app is not only functional but also a leaderboard contender. We handle everything from complex integrations to pixel-perfect UI.
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

                            <div className="flex flex-wrap gap-6 items-center pt-8 border-t border-slate-100 dark:border-slate-800">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-navy dark:text-white">99.9%</div>
                                    <div className="text-xs text-grey uppercase tracking-widest font-bold">App Uptime</div>
                                </div>
                                <div className="w-px h-10 bg-slate-200 dark:bg-slate-700 hidden sm:block" />
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-navy dark:text-white">4.8/5</div>
                                    <div className="text-xs text-grey uppercase tracking-widest font-bold">Avg. Store Rating</div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:sticky lg:top-32 h-fit">
                            <div className="bg-navy p-10 rounded-[3rem] border border-white/10 shadow-glow-primary relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] opacity-40" />
                                <h3 className="text-3xl font-bold text-white mb-4 relative z-10">Start Your App Project</h3>
                                <p className="text-slate-400 mb-10 relative z-10">Consult with our mobile architects today. Free estimation and roadmap.</p>
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
                        title="Specialized Mobile Expertise"
                        subtitle="We leverage the right technology for the right solution."
                    />
                    <div className="grid md:grid-cols-3 gap-8 mt-16">
                        {capabilities.map((cap, i) => (
                            <div key={i} className="bg-white dark:bg-slate-800 p-10 rounded-3xl border border-slate-100 dark:border-slate-700 hover:shadow-2xl transition-all">
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8">
                                    <cap.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-navy dark:text-white mb-4">{cap.title}</h3>
                                <p className="text-grey dark:text-slate-400 text-sm leading-relaxed mb-6">{cap.desc}</p>
                                <div className="flex items-center gap-2 text-primary font-bold text-sm">
                                    Learn More <ArrowRight size={16} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-navy relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[100px]" />
                <div className="section-container relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <Badge className="mb-4 bg-primary/20 text-primary-400 border-none">Ready to Launch?</Badge>
                        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tighter">
                            Your Journey to the <span className="gradient-text">App Store</span> Starts Here
                        </h2>
                        <p className="text-slate-400 text-xl mb-12 leading-relaxed">
                            Join dozens of successful businesses that have scaled through our mobile solutions. We don't just build apps; we build successful products.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link href="/contact">
                                <Button size="lg" className="bg-primary hover:bg-primary-600 border-none text-white px-10 py-7 rounded-full text-xl shadow-glow">
                                    Get Started Now <ArrowRight className="ml-2" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
