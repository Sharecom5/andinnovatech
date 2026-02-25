'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedCounterProps {
    value: number;
    suffix?: string;
    label: string;
    icon?: React.ReactNode;
    duration?: number;
    className?: string;
}

export default function AnimatedCounter({
    value,
    suffix = '',
    label,
    icon,
    duration = 2,
    className,
}: AnimatedCounterProps) {
    const [count, setCount] = useState(value); // Start at final value to prevent "0+" on mobile
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '200px' });
    const hasAnimated = useRef(false);

    useEffect(() => {
        if (!isInView || hasAnimated.current) return;
        hasAnimated.current = true;

        setCount(0); // Reset to 0 when in view, then animate up
        let startTime: number;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * value));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [isInView, value, duration]);

    return (
        <motion.div
            ref={ref}
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={cn('text-center', className)}
        >
            {icon && <div className="mb-3 text-primary">{icon}</div>}
            <div className="text-4xl md:text-5xl font-heading font-extrabold gradient-text mb-2">
                {count}
                {suffix}
            </div>
            <p className="text-grey dark:text-slate-400 font-medium">{label}</p>
        </motion.div>
    );
}
