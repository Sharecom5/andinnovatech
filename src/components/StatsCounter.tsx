'use client';

import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

interface StatsCounterProps {
    value: number;
    suffix?: string;
    label: string;
}

export default function StatsCounter({ value, suffix = '', label }: StatsCounterProps) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = value;
            const duration = 2000;
            const increment = end / (duration / 16);

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 16);

            return () => clearInterval(timer);
        }
    }, [isInView, value]);

    return (
        <div ref={ref} className="text-center">
            <div className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-2">
                {count}{suffix}
            </div>
            <div className="text-gray-600 font-medium uppercase tracking-wider text-sm">
                {label}
            </div>
        </div>
    );
}
