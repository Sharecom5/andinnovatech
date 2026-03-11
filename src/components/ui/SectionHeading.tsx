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
            transition={{ duration: 0.6 }}
            className={cn(
                'mb-12 md:mb-16',
                centered && 'text-center',
                className
            )}
        >
            <h2
                className={cn(
                    'text-3xl md:text-5xl lg:text-7xl font-heading font-black mb-6 tracking-tighter leading-none text-glow',
                    light ? 'text-white' : 'text-navy dark:text-white'
                )}
            >
                {title}
            </h2>

            {/* AI Decoration */}
            <div className={cn('flex items-center gap-4 mb-8', centered && 'justify-center')}>
                <div className="h-[1px] w-12 bg-primary/30" />
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-glow-primary" />
                <div className="h-[1px] w-12 bg-primary/30" />
            </div>

            {subtitle && (
                <p
                    className={cn(
                        'text-lg md:text-2xl font-medium leading-relaxed max-w-4xl mx-auto',
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
