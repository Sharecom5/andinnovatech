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
        <section className="section-padding bg-slate-50 dark:bg-navy overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2 pointer-events-none" />

            <div className="section-container relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Left Column */}
                    <div className="space-y-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <SectionHeading
                                title={<>Why Choose <span className="text-primary">AnD Innovatech</span></>}
                                subtitle="We merge technical mastery with your business vision to create digital powerhouses."
                                centered={false}
                            />

                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
                                At AnD Innovatech, we don&apos;t just code; we engineer success. Our collaborative DNA ensures that every pixel and every line of code serves a strategic business purpose.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { val: '500+', label: 'Successful Projects' },
                                { val: '98%', label: 'Client Satisfaction' },
                                { val: '7+', label: 'Years of Excellence' },
                                { val: '24/7', label: 'Dedicated Support' }
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + i * 0.1 }}
                                    className="p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm"
                                >
                                    <div className="text-2xl font-black text-navy dark:text-white mb-1 tracking-tight">{stat.val}</div>
                                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                        >
                            <Link href="/contact">
                                <Button size="lg" className="rounded-2xl px-10 gap-3 group">
                                    Start Your Project
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right Column — Features List */}
                    <div className="grid gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.number}
                                initial={{ opacity: 0, x: 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="group relative p-7 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                                    <span className="text-8xl font-black italic tracking-tighter">{feature.number}</span>
                                </div>

                                <div className="relative z-10 flex gap-6">
                                    <div className="shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-600 flex items-center justify-center text-white shadow-lg group-hover:rotate-6 transition-transform">
                                        <CheckCircle size={28} />
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-xl font-heading font-black text-navy dark:text-white tracking-tight">
                                            {feature.title}
                                        </h4>
                                        <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
