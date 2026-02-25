'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
    title: string | React.ReactNode;
    subtitle?: string | React.ReactNode;
    centered?: boolean;
    light?: boolean;
    className?: string;
}

export default function SectionHeading({
    title,
    subtitle,
    centered = true,
    light = false,
    className,
}: SectionHeadingProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '100px' }}
            transition={{ duration: 0.5 }}
            className={cn(
                'mb-12 md:mb-16',
                centered && 'text-center',
                className
            )}
        >
            <h2
                className={cn(
                    'text-3xl md:text-h2 font-heading font-bold mb-4',
                    light ? 'text-white' : 'text-navy dark:text-white'
                )}
            >
                {title}
            </h2>

            {/* Gradient underline */}
            <div
                className={cn(
                    'h-1 w-16 rounded-full bg-gradient-primary mb-6',
                    centered && 'mx-auto'
                )}
            />

            {subtitle && (
                <p
                    className={cn(
                        'text-body-lg max-w-2xl',
                        centered && 'mx-auto',
                        light ? 'text-slate-300' : 'text-grey dark:text-slate-400'
                    )}
                >
                    {subtitle}
                </p>
            )}
        </motion.div>
    );
}
