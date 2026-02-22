'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Globe, Server, Code2, TrendingUp, Cloud, Lightbulb, ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { cn } from '@/lib/utils';

// Fallback services data (used when WordPress API is unavailable)
const fallbackServices = [
    {
        icon: Globe,
        title: 'Website Development',
        description: 'Custom, responsive websites built with modern technologies that convert visitors into customers.',
        slug: 'website-development',
    },
    {
        icon: Server,
        title: 'IT Solutions',
        description: 'Comprehensive IT infrastructure solutions to streamline your business operations and boost efficiency.',
        slug: 'it-consulting',
    },
    {
        icon: Code2,
        title: 'Software Development',
        description: 'Tailored software solutions designed to solve your unique business challenges and drive growth.',
        slug: 'software-development',
    },
    {
        icon: TrendingUp,
        title: 'SEO Services',
        description: 'Data-driven SEO strategies that improve your search rankings and drive organic traffic.',
        slug: 'seo-services',
    },
    {
        icon: Cloud,
        title: 'Cloud Computing',
        description: 'Scalable cloud solutions that reduce costs and improve your business agility and performance.',
        slug: 'cloud-computing',
    },
    {
        icon: Lightbulb,
        title: 'IT Consulting',
        description: 'Expert technology consulting to help you make informed decisions and achieve digital transformation.',
        slug: 'it-consulting',
    },
];

export default function Services() {
    return (
        <section className="section-padding bg-grey-light dark:bg-slate-900/50">
            <div className="section-container">
                <SectionHeading
                    title="Our Services"
                    subtitle="Empowering your business with expert IT and SEO excellence"
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {fallbackServices.map((service, index) => (
                        <motion.div
                            key={service.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-30px' }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <Link href={`/services/${service.slug}`}>
                                <div
                                    className={cn(
                                        'group relative bg-white dark:bg-slate-800 rounded-xl p-6 lg:p-8',
                                        'border border-slate-100 dark:border-slate-700',
                                        'shadow-card hover:shadow-card-hover',
                                        'transition-all duration-300 hover:-translate-y-1',
                                        'hover:border-l-4 hover:border-l-primary'
                                    )}
                                >
                                    {/* Icon */}
                                    <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                                        <service.icon size={28} className="text-white" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-h4 font-heading font-semibold text-navy dark:text-white mb-3">
                                        {service.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-grey dark:text-slate-400 text-sm leading-relaxed mb-4">
                                        {service.description}
                                    </p>

                                    {/* Learn More Link */}
                                    <span className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                                        Learn More
                                        <ArrowRight size={16} />
                                    </span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
