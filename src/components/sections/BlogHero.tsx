'use client';

import { motion } from 'framer-motion';
import { Newspaper, ArrowDown, Sparkles, TrendingUp, Search, Globe } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import Link from 'next/link';

interface BlogHeroProps {
    title: React.ReactNode;
    subtitle: string;
    badgeText?: string;
}

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
};

export default function BlogHero({
    title,
    subtitle,
    badgeText = "📰 Technical Insights"
}: BlogHeroProps) {
    return (
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-white dark:bg-navy overflow-hidden">
            {/* Subtle editorial background */}
            <div className="absolute top-0 right-0 w-[40%] h-full bg-slate-50 dark:bg-slate-900/40 -skew-x-12 translate-x-1/2" />
            
            <div className="section-container relative z-10">
                <div className="max-w-4xl">
                    {/* Breadcrumbs */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-2 mb-8 text-xs font-bold uppercase tracking-widest text-slate-400"
                    >
                        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                        <span className="w-1 h-1 rounded-full bg-slate-200 dark:bg-slate-700" />
                        <span className="text-primary">{badgeText || "Insights"}</span>
                    </motion.div>
    
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-navy dark:text-white leading-[1.05] tracking-tight mb-8"
                    >
                        {title}
                    </motion.h1>
    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col md:flex-row md:items-center gap-8"
                    >
                        <div className="h-0.5 w-12 bg-primary shrink-0" />
                        <p className="text-lg md:text-xl text-grey dark:text-slate-400 leading-relaxed max-w-2xl">
                            {subtitle}
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Subtle Floating Elements */}
            <div className="absolute top-1/4 right-[10%] opacity-20 dark:opacity-10 pointer-events-none">
                <Newspaper size={300} strokeWidth={0.5} className="text-primary rotate-12" />
            </div>
        </section>
    );
}
