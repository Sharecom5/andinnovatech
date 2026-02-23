import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import { Target, Eye, Zap, Puzzle, Heart, Globe, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';

export const metadata: Metadata = {
    title: 'About Us | AnD Innovatech',
    description: 'Learn about AnD Innovatech - a global IT solutions provider dedicated to empowering businesses with innovative technology and SEO excellence.',
};

const differences = [
    {
        title: 'Deep Domain Expertise',
        description: 'Our specialists bring decades of combined experience in complex software architecture and advanced SEO algorithms.',
        icon: Cpu,
    },
    {
        title: 'Client-Centric Philosophy',
        description: 'We don\'t just deliver services; we build long-term partnerships focused on your unique business evolution.',
        icon: Heart,
    },
    {
        title: 'Agile Innovation',
        description: 'Utilizing cutting-edge frameworks and AI-driven strategies to keep your business ahead of the curve.',
        icon: Zap,
    },
    {
        title: 'Military-Grade Security',
        description: 'Data integrity and security are woven into every line of code we write and every server we manage.',
        icon: ShieldCheck,
    },
    {
        title: 'Transparent Collaboration',
        description: 'Real-time project tracking and clear communication channels ensure you are always in the loop.',
        icon: Puzzle,
    },
    {
        title: 'Global Delivery Network',
        description: 'Serving clients across USA, Canada, and India with a 24/7 follow-the-sun development model.',
        icon: Globe,
    },
];

export default function AboutUs() {
    return (
        <div className="overflow-x-hidden bg-white dark:bg-navy">
            <Hero
                title={<>Pioneering the <span className="gradient-text">Future of Digital</span> Solutions</>}
                subtitle="Since 2017, AnD Innovatech has been at the forefront of technological transformation, helping brands navigate the complexities of the modern web."
                badgeText="🚀 Established 2017"
                ctaText="Read Our Story"
                showStats={false}
            />

            {/* Who We Are Section */}
            <section className="section-padding relative overflow-hidden">
                <div className="absolute top-0 left-0 w-[30rem] h-[30rem] bg-primary/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
                <div className="section-container">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="relative">
                            <div className="relative group aspect-[10/7] overflow-hidden rounded-[3rem]">
                                <Image
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"
                                    alt="Technical team collaborating"
                                    fill
                                    className="object-cover relative z-10 grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-all duration-700 z-20" />
                            </div>

                            <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-accent/20 rounded-full blur-[100px] -z-10" />

                            <div className="absolute -top-12 -left-12 bg-navy p-10 rounded-[2rem] shadow-glow-primary z-30 hidden xl:block border border-white/10">
                                <div className="text-primary-400 font-extrabold text-5xl mb-2 tracking-tighter">7+ Years</div>
                                <div className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Technical Excellence</div>
                            </div>
                        </div>

                        <div className="space-y-10">
                            <div>
                                <Badge className="mb-6 bg-primary/10 text-primary border-none font-bold uppercase tracking-[0.2em]">Our Heritage</Badge>
                                <h1 className="text-4xl md:text-6xl font-extrabold text-navy dark:text-white leading-none tracking-tighter mb-8">
                                    Engineering Success in a <span className="text-primary">Digital World</span>
                                </h1>
                            </div>
                            <p className="text-grey dark:text-slate-400 text-xl leading-relaxed">
                                AnD Innovatech was founded on a simple principle: technology should enable growth, not limit it. We synthesize deep engineering expertise with innovative SEO strategies to deliver platforms that dominate search results and delight users.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-12 pt-8">
                                <div className="p-8 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-slate-100 dark:border-slate-700/50">
                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                                        <Target size={28} />
                                    </div>
                                    <h3 className="text-xl font-bold text-navy dark:text-white mb-3 tracking-tight">Our Mission</h3>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">To architect innovative digital infrastructures that empower enterprises to achieve sustainable global scale.</p>
                                </div>
                                <div className="p-8 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-slate-100 dark:border-slate-700/50">
                                    <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                                        <Eye size={28} />
                                    </div>
                                    <h3 className="text-xl font-bold text-navy dark:text-white mb-3 tracking-tight">Our Vision</h3>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">To be the catalyst for the next generation of digital breakthroughs and market-leading brands.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Performance Stats */}
            <Stats />

            {/* Core Values / Differences */}
            <section className="section-padding bg-slate-50 dark:bg-slate-900/50 relative">
                <div className="section-container">
                    <SectionHeading
                        title="The AnD Innovatech Advantage"
                        subtitle="We combine high-performance engineering with growth-focused intelligence."
                    />

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                        {differences.map((item, index) => (
                            <div key={item.title} className="group bg-white dark:bg-slate-800 p-10 rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-slate-700/50 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-2">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform shadow-lg">
                                    <item.icon size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-navy dark:text-white mb-4 tracking-tight leading-tight">{item.title}</h3>
                                <p className="text-grey dark:text-slate-400 leading-relaxed text-sm">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="section-padding bg-navy relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-mesh opacity-10" />
                <div className="section-container relative z-10 text-center">
                    <Badge className="mb-6 bg-primary/20 text-primary-400 border-none font-bold uppercase tracking-[0.2em]">Start Your Chapter</Badge>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tighter">
                        Ready to Build the <span className="gradient-text">Extraordinary?</span>
                    </h2>
                    <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                        Join the hundreds of brands that have transformed their technical footprint through our strategic partnership model.
                    </p>
                    <Link href="/contact">
                        <Button size="lg" className="px-12 py-8 bg-primary hover:bg-primary-600 border-none text-white text-xl font-bold rounded-full shadow-glow-primary group">
                            Consult with Experts <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
