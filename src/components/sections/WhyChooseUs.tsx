'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

const features = [
    {
        number: '01',
        title: 'Proven Expertise',
        description: 'Over 7 years of experience delivering successful IT projects across diverse industries.',
    },
    {
        number: '02',
        title: 'Client-Centric Approach',
        description: 'We prioritize understanding your unique needs to deliver tailored solutions that exceed expectations.',
    },
    {
        number: '03',
        title: 'Innovative Solutions',
        description: 'Leveraging cutting-edge technologies and creative thinking to solve complex business challenges.',
    },
    {
        number: '04',
        title: 'Global Reach',
        description: 'Serving clients across USA, India, and Canada with 24/7 support and seamless communication.',
    },
    {
        number: '05',
        title: 'Measurable Results',
        description: 'Data-driven strategies that deliver quantifiable outcomes and demonstrable ROI for your business.',
    },
    {
        number: '06',
        title: 'Dedicated Support',
        description: 'Round-the-clock maintenance and support to ensure your systems run flawlessly at all times.',
    },
];

export default function WhyChooseUs() {
    return (
        <section className="section-padding bg-white dark:bg-navy overflow-hidden relative">
            <div className="absolute top-0 right-0 w-full h-full opacity-30 pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />
            </div>

            <div className="section-container relative z-10">
                <div className="grid lg:grid-cols-12 gap-6">
                    {/* Header Card */}
                    <motion.div
                        className="lg:col-span-8 p-10 md:p-14 rounded-[3rem] bg-navy border border-white/10 flex flex-col justify-center relative overflow-hidden group shadow-2xl"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: '100px' }}
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-colors" />
                        <div className="relative z-10 space-y-8">
                            <SectionHeading
                                title={<span className="text-white">Engineering <span className="text-primary-400">Excellence</span> to Empower Your Vision.</span>}
                                subtitle="At AnD Innovatech, we don't just build software; we build the future of your business through technical mastery and strategic innovation."
                                centered={false}
                            />
                            <div className="flex flex-wrap gap-4 pt-4">
                                <Link href="/contact">
                                    <Button size="lg" className="bg-white text-navy hover:bg-slate-100 border-none rounded-2xl px-12 font-black uppercase tracking-widest text-[11px]">
                                        Start Your Build
                                    </Button>
                                </Link>
                                <Link href="/portfolio">
                                    <Button variant="outline" size="lg" className="rounded-2xl border-white/20 hover:bg-white/5 px-10 font-bold text-[11px]">
                                        View Portfolio
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* Quick Stats Card */}
                    <motion.div
                        className="lg:col-span-4 grid grid-cols-1 gap-6"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '100px' }}
                    >
                        <div className="p-8 rounded-[2.5rem] bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center text-center group hover:bg-white dark:hover:bg-slate-800 transition-all duration-500">
                            <div className="text-5xl font-black text-primary mb-2 tracking-tighter">98%</div>
                            <div className="text-[10px] uppercase font-black tracking-[0.3em] text-slate-400">Client Retention</div>
                        </div>
                        <div className="p-8 rounded-[2.5rem] bg-primary text-white flex flex-col items-center justify-center text-center shadow-xl shadow-primary/20 hover:scale-[1.02] transition-transform">
                            <div className="text-5xl font-black mb-2 tracking-tighter">500+</div>
                            <div className="text-[10px] uppercase font-black tracking-[0.3em] text-white/70">Global Projects</div>
                        </div>
                    </motion.div>

                    {/* Feature Cards Loop */}
                    {features.slice(0, 3).map((feature, i) => (
                        <motion.div
                            key={feature.number}
                            className="lg:col-span-4 p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-primary/50 hover:shadow-2xl transition-all duration-500 group"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '100px' }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                                <CheckCircle size={28} />
                            </div>
                            <h4 className="text-xl font-black text-navy dark:text-white mb-3 tracking-tight">{feature.title}</h4>
                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}

                    <motion.div
                        className="lg:col-span-12 p-1 bg-gradient-to-r from-primary/20 via-primary/40 to-accent/20 rounded-full my-8 hidden lg:block"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                    />
                </div>
            </div>
        </section>
    );
}
