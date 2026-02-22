'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface HeroProps {
    title: string;
    subtitle: string;
    ctaText?: string;
    ctaHref?: string;
    className?: string;
}

export default function Hero({
    title,
    subtitle,
    ctaText = 'Get Started Today',
    ctaHref = '/contact-us/',
    className = '',
}: HeroProps) {
    return (
        <section className={`relative min-h-[70vh] flex items-center pt-20 overflow-hidden bg-white ${className}`}>
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl opacity-50" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
                <div className="max-w-3xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-6xl font-extrabold tracking-tight text-secondary mb-6"
                    >
                        {title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed"
                    >
                        {subtitle}
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-wrap gap-4"
                    >
                        <Link
                            href={ctaHref}
                            className="bg-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-700 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
                        >
                            {ctaText}
                        </Link>
                        <Link
                            href="/services/"
                            className="bg-white text-secondary border-2 border-gray-100 px-8 py-4 rounded-full font-semibold text-lg hover:border-primary hover:text-primary transition-all"
                        >
                            Learn More
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
