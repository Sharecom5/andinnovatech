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
        <section className="section-padding bg-white dark:bg-navy">
            <div className="section-container">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <SectionHeading
                            title="Why Choose Us"
                            subtitle="We combine technical excellence with a deep understanding of your business needs to deliver transformative digital solutions."
                            centered={false}
                        />

                        <p className="text-grey dark:text-slate-400 leading-relaxed mb-8">
                            At AnD Innovatech, we don&apos;t just build technology — we build partnerships.
                            Our team of expert developers, designers, and strategists work together to create
                            solutions that drive real business growth and lasting competitive advantage.
                        </p>

                        <Link href="/about">
                            <Button className="gap-2">
                                Learn More About Us
                                <ArrowRight size={18} />
                            </Button>
                        </Link>

                        {/* Decorative stats card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="mt-10 bg-gradient-primary rounded-2xl p-8 text-white"
                        >
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <div className="text-3xl font-heading font-extrabold mb-1">500+</div>
                                    <div className="text-sm text-blue-100">Projects Delivered</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-heading font-extrabold mb-1">98%</div>
                                    <div className="text-sm text-blue-100">Client Retention</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-heading font-extrabold mb-1">50+</div>
                                    <div className="text-sm text-blue-100">Team Members</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-heading font-extrabold mb-1">24/7</div>
                                    <div className="text-sm text-blue-100">Support Available</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column — Features List */}
                    <div className="space-y-4">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.number}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08, duration: 0.5 }}
                                className="group flex gap-4 p-5 rounded-xl hover:bg-grey-light dark:hover:bg-slate-800/50 transition-colors duration-300"
                            >
                                {/* Number Badge */}
                                <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center text-white font-heading font-bold text-sm group-hover:scale-110 transition-transform duration-300">
                                    {feature.number}
                                </div>

                                <div>
                                    <h4 className="text-lg font-heading font-semibold text-navy dark:text-white mb-1.5 flex items-center gap-2">
                                        {feature.title}
                                        <CheckCircle size={16} className="text-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </h4>
                                    <p className="text-sm text-grey dark:text-slate-400 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
