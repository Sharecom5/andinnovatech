'use client';

import { motion } from 'framer-motion';
import {
    ArrowRight,
    ExternalLink,
    Star,
    Globe,
    Briefcase,
    SmilePlus,
    ShoppingCart,
    Search,
    TrendingUp,
    Layout,
    ShieldCheck,
} from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

const trustBadges = [
    { icon: Star, label: '7+ Years', sublabel: 'of Excellence' },
    { icon: Globe, label: '3 Countries', sublabel: 'Served' },
    { icon: Briefcase, label: '500+', sublabel: 'Projects' },
    { icon: SmilePlus, label: '98%', sublabel: 'Satisfaction' },
];

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
};

interface HeroProps {
    title?: React.ReactNode;
    subtitle?: string;
    badgeText?: string;
    ctaText?: string;
    ctaHref?: string;
    showStats?: boolean;
    rightContent?: React.ReactNode;
    category?: 'ecommerce' | 'software' | 'seo' | 'marketing' | 'it' | 'default';
}

function EcommerceMockup() {
    return (
        <div className="relative group">
            <div className="animate-float bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                        <ShoppingCart size={24} />
                    </div>
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                        <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="h-4 w-3/4 bg-white/20 rounded-full" />
                    <div className="h-4 w-1/2 bg-white/10 rounded-full" />
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <div className="aspect-square bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center">
                            <Layout size={32} className="text-white/20" />
                        </div>
                        <div className="aspect-square bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center">
                            <Layout size={32} className="text-white/20" />
                        </div>
                    </div>
                </div>
            </div>
            <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-10 -right-10 bg-primary p-6 rounded-2xl shadow-glow"
            >
                <div className="text-white font-bold text-2xl">+450%</div>
                <div className="text-primary-100 text-xs uppercase tracking-wider font-bold">Sales Growth</div>
            </motion.div>
        </div>
    );
}

function SoftwareMockup() {
    return (
        <div className="relative">
            <div className="animate-float bg-slate-900 border border-slate-700/50 rounded-2xl overflow-hidden shadow-2xl">
                <div className="bg-slate-800/50 px-4 py-2 flex items-center gap-2 border-b border-slate-700/50">
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                    </div>
                    <div className="text-[10px] text-slate-500 font-mono ml-2">AppService.tsx</div>
                </div>
                <div className="p-6 font-mono text-sm space-y-3">
                    <div className="flex gap-4">
                        <span className="text-blue-400">export</span>
                        <span className="text-purple-400">function</span>
                        <span className="text-yellow-400">ScaleBusiness()</span>
                        <span className="text-slate-400">{`{`}</span>
                    </div>
                    <div className="pl-6 text-slate-400">
                        <span className="text-blue-400">const</span> results = <span className="text-purple-400">await</span> optimize();
                    </div>
                    <div className="pl-6 text-green-400">{"// Deploying to production..."}</div>
                    <div className="pl-6 text-blue-400">return <span className="text-slate-300">growth;</span></div>
                    <div className="text-slate-400">{`}`}</div>
                </div>
            </div>
            <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 bg-accent p-4 rounded-xl shadow-lg border border-white/10"
            >
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white">
                        <ShieldCheck size={20} />
                    </div>
                    <div>
                        <div className="text-white font-bold text-sm">Security</div>
                        <div className="text-white/60 text-[10px]">Fully Encrypted</div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

function SEOMockup() {
    return (
        <div className="relative group">
            <div className="animate-float-slow bg-white/5 backdrop-blur-sm rounded-[2rem] border border-white/10 p-10 shadow-2xl">
                <div className="flex items-center gap-4 mb-10">
                    <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center text-green-400">
                        <Search size={28} />
                    </div>
                    <div>
                        <div className="text-white font-bold text-xl">SEO Rankings</div>
                        <div className="text-slate-400 text-sm">Global visibility audit</div>
                    </div>
                </div>
                <div className="space-y-6">
                    {[
                        { label: 'Organic Traffic', value: '12.4k', growth: '+124%' },
                        { label: 'Keyword Rankings', value: '852', growth: '+42%' },
                        { label: 'Domain Authority', value: '64', growth: '+12' },
                    ].map((item, i) => (
                        <motion.div
                            key={item.label}
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.8 + i * 0.1 }}
                            className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5"
                        >
                            <span className="text-slate-300 font-medium">{item.label}</span>
                            <div className="text-right">
                                <div className="text-white font-bold">{item.value}</div>
                                <div className="text-green-400 text-[10px] font-bold">{item.growth}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-8 -right-4 bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-700"
            >
                <TrendingUp size={32} className="text-primary mb-2" />
                <div className="text-navy dark:text-white font-black text-xl">Top 1</div>
                <div className="text-slate-400 text-[10px] uppercase font-bold">Google Ranking</div>
            </motion.div>
        </div>
    );
}

function DefaultMockup() {
    return (
        <div className="relative">
            {/* Main dashboard card */}
            <div className="animate-float bg-slate-800/60 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6 shadow-2xl">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h3 className="text-white font-heading font-semibold text-lg">Analytics Dashboard</h3>
                        <p className="text-slate-400 text-sm">Real-time performance</p>
                    </div>
                    <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                    {[
                        { label: 'Visitors', value: '12.5K', change: '+24%' },
                        { label: 'Conversions', value: '842', change: '+18%' },
                        { label: 'Revenue', value: '$48.2K', change: '+32%' },
                    ].map((stat) => (
                        <div
                            key={stat.label}
                            className="bg-slate-700/40 rounded-xl p-3"
                        >
                            <p className="text-slate-400 text-xs mb-1">{stat.label}</p>
                            <p className="text-white font-bold">{stat.value}</p>
                            <p className="text-green-400 text-xs">{stat.change}</p>
                        </div>
                    ))}
                </div>

                {/* Fake chart bars */}
                <div className="flex items-end gap-2 h-32">
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, i) => (
                        <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: `${height}%` }}
                            transition={{ delay: 0.8 + i * 0.05, duration: 0.5 }}
                            className="flex-1 rounded-t-md bg-gradient-to-t from-primary to-accent opacity-80"
                        />
                    ))}
                </div>
            </div>

            {/* Floating mini card — top right */}
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -right-6 bg-white dark:bg-slate-700 rounded-xl shadow-lg p-4 border border-slate-100 dark:border-slate-600"
            >
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                        <span className="text-green-600 text-sm font-bold">↑</span>
                    </div>
                    <div>
                        <p className="text-xs text-grey dark:text-slate-400">Growth</p>
                        <p className="text-navy dark:text-white font-bold">+127%</p>
                    </div>
                </div>
            </motion.div>

            {/* Floating mini card — bottom left */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-700 rounded-xl shadow-lg p-4 border border-slate-100 dark:border-slate-700"
            >
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Star size={16} className="text-primary" />
                    </div>
                    <div>
                        <p className="text-xs text-grey dark:text-slate-400">Rating</p>
                        <p className="text-navy dark:text-white font-bold">4.9/5.0</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default function Hero({
    title = <>Empowering Your Business with <span className="gradient-text">IT & SEO Excellence</span></>,
    subtitle = "Custom software, stunning websites, and powerful SEO strategies that drive real growth for businesses across USA, India & Canada.",
    badgeText = "🚀 7+ Years of Excellence",
    ctaText = "Get Free Consultation",
    ctaHref = "/contact",
    showStats = true,
    rightContent,
    category = 'default'
}: HeroProps) {
    const renderMockup = () => {
        if (rightContent) return rightContent;

        switch (category) {
            case 'ecommerce':
                return <EcommerceMockup />;
            case 'software':
                return <SoftwareMockup />;
            case 'seo':
            case 'marketing':
                return <SEOMockup />;
            default:
                return <DefaultMockup />;
        }
    };

    return (
        <section className="relative min-h-screen flex items-center bg-navy overflow-hidden">
            {/* Animated gradient mesh background */}
            <div className="absolute inset-0 bg-gradient-mesh opacity-60" />

            {/* Animated gradient orbs */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/15 rounded-full blur-[150px] animate-pulse-slow" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[200px]" />

            <div className="section-container relative z-10 py-32">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div>
                        <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
                            <Badge variant="outline" size="md" className="border-primary-400/40 text-primary-300 mb-6 font-bold">
                                {badgeText}
                            </Badge>
                        </motion.div>

                        <motion.h1
                            {...fadeInUp}
                            transition={{ delay: 0.2 }}
                            className="text-4xl md:text-5xl lg:text-display font-heading font-extrabold text-white leading-tight mb-6"
                        >
                            {title}
                        </motion.h1>

                        <motion.p
                            {...fadeInUp}
                            transition={{ delay: 0.3 }}
                            className="text-lg text-slate-300 leading-relaxed mb-8 max-w-xl"
                        >
                            {subtitle}
                        </motion.p>

                        <motion.div
                            {...fadeInUp}
                            transition={{ delay: 0.4 }}
                            className="flex flex-wrap gap-4 mb-12"
                        >
                            <Link href={ctaHref}>
                                <Button size="lg" className="gap-2 bg-primary hover:bg-primary-600 text-white shadow-glow border-none">
                                    {ctaText}
                                    <ArrowRight size={20} />
                                </Button>
                            </Link>
                            <Link href="/portfolio">
                                <Button variant="outline" size="lg" className="gap-2 text-white border-white/20 hover:bg-white/5 font-bold">
                                    View Our Work
                                    <ExternalLink size={18} />
                                </Button>
                            </Link>
                        </motion.div>

                        {/* Trust Badges */}
                        {showStats && (
                            <motion.div
                                {...fadeInUp}
                                transition={{ delay: 0.5 }}
                                className="grid grid-cols-2 md:grid-cols-4 gap-4"
                            >
                                {trustBadges.map((badge) => (
                                    <div
                                        key={badge.label}
                                        className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/10"
                                    >
                                        <badge.icon size={20} className="text-primary-400 shrink-0" />
                                        <div>
                                            <div className="text-white font-bold text-sm">{badge.label}</div>
                                            <div className="text-slate-400 text-xs">{badge.sublabel}</div>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        )}
                    </div>

                    {/* Right Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="hidden lg:block"
                    >
                        {renderMockup()}
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-slate-500 text-[10px] uppercase tracking-widest font-bold">Scroll to Explore</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent" />
            </motion.div>

            {/* Bottom Diagonal Cut */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-white dark:bg-slate-900 clip-diagonal" />
        </section>
    );
}

