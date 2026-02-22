'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
    glass?: boolean;
    dark?: boolean;
    padding?: 'none' | 'sm' | 'md' | 'lg';
    onClick?: () => void;
}

export default function Card({
    children,
    className,
    hover = true,
    glass = false,
    dark = false,
    padding = 'md',
    onClick,
}: CardProps) {
    const paddingStyles = {
        none: '',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
    };

    return (
        <motion.div
            whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
            transition={{ duration: 0.3 }}
            onClick={onClick}
            className={cn(
                'rounded-xl transition-all duration-300',
                paddingStyles[padding],
                glass && 'glass',
                dark
                    ? 'bg-slate-800/50 border border-slate-700/50 text-white'
                    : 'bg-white dark:bg-slate-800 shadow-card hover:shadow-card-hover border border-slate-100 dark:border-slate-700',
                onClick && 'cursor-pointer',
                className
            )}
        >
            {children}
        </motion.div>
    );
}
