'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Mail,
    Phone,
    MapPin,
    Linkedin,
    Facebook,
    Twitter,
    Instagram,
    ArrowUpRight,
    Heart,
    Loader2,
    CheckCircle2,
} from 'lucide-react';

const footerLinks = {
    services: [
        { label: 'Website Development', href: '/services/website-development' },
        { label: 'Software Development', href: '/services/software-development' },
        { label: 'SEO Services', href: '/services/seo-services' },
        { label: 'IT Solutions', href: '/services/it-consulting' },
        { label: 'Cloud Computing', href: '/services/cloud-computing' },
        { label: 'IT Consulting', href: '/services/it-consulting' },
    ],
    company: [
        { label: 'About Us', href: '/about' },
        { label: 'Portfolio', href: '/portfolio' },
        { label: 'Blog', href: '/blog' },
        { label: 'Contact', href: '/contact' },
        { label: 'Careers', href: '/contact' },
    ],
    support: [
        { label: 'Privacy Policy', href: '/privacy-policy' },
        { label: 'Terms of Service', href: '/terms-of-service' },
        { label: 'Cookie Policy', href: '/contact' },
        { label: 'FAQ', href: '/contact' },
    ],
};

const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/company/andinnovatech', label: 'LinkedIn' },
    { icon: Facebook, href: 'https://facebook.com/andinnovatech', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/andinnovatech', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/andinnovatech', label: 'Instagram' },
];

function NewsletterForm() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus('loading');
        try {
            const res = await fetch('/api/newsletter/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            if (res.ok) {
                setStatus('success');
                setEmail('');
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }

        setTimeout(() => setStatus('idle'), 5000);
    };

    return (
        <div className="w-full">
            {status === 'success' ? (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-3 text-primary-400 bg-primary/10 p-4 rounded-2xl border border-primary/20 transition-all"
                >
                    <CheckCircle2 size={20} />
                    <span className="text-sm font-bold">You're on the list!</span>
                </motion.div>
            ) : (
                <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
                    <div className="w-full">
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your work email"
                            className="w-full px-6 py-4 bg-slate-800/60 border border-white/10 rounded-2xl text-white placeholder:text-slate-500 focus:bg-slate-800 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all duration-300"
                            disabled={status === 'loading'}
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-primary-600 text-white font-black shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-3 group"
                    >
                        {status === 'loading' ? (
                            <Loader2 size={20} className="animate-spin" />
                        ) : (
                            <>
                                <span className="uppercase tracking-widest text-xs font-black">Subscribe Now</span>
                                <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </>
                        )}
                    </button>
                    {status === 'error' && (
                        <p className="text-red-400 text-xs mt-2 text-center font-bold">
                            Submission failed. Please try again.
                        </p>
                    )}
                </form>
            )}
        </div>
    );
}

export default function Footer() {
    return (
        <footer className="bg-navy text-slate-300 overflow-hidden relative border-t border-white/5">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
            <div className="absolute top-1/2 -right-24 w-72 h-72 bg-accent/5 rounded-full blur-[100px]" />

            {/* Main Footer Content */}
            <div className="section-container pt-20 pb-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
                    {/* Brand Column */}
                    <div className="lg:col-span-4 space-y-8">
                        <div>
                            <Link href="/" className="inline-block group">
                                <span className="text-3xl font-heading font-black tracking-tighter text-white transition-colors duration-300">
                                    AnD<span className="text-primary group-hover:text-primary-400 transition-colors"> Innovatech</span>
                                </span>
                            </Link>
                            <p className="mt-6 text-slate-400 text-base leading-relaxed max-w-sm">
                                Engineering the future with premium IT solutions, search dominance, and conversion-first digital experiences across the globe.
                            </p>
                        </div>

                        {/* Social Links */}
                        <div className="space-y-4">
                            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500">Connect with us</h4>
                            <div className="flex flex-wrap gap-3">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-11 h-11 rounded-xl bg-slate-800/80 border border-slate-700/50 flex items-center justify-center hover:bg-primary hover:border-primary hover:-translate-y-1 hover:shadow-glow-primary transition-all duration-300 text-slate-300 hover:text-white"
                                        aria-label={social.label}
                                    >
                                        <social.icon size={20} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Quick Links Column */}
                    <div className="lg:col-span-2 space-y-6">
                        <h4 className="text-white font-heading font-bold text-lg">Services</h4>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-slate-400 hover:text-primary-400 transition-colors inline-block"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* About Column */}
                    <div className="lg:col-span-2 space-y-6">
                        <h4 className="text-white font-heading font-bold text-lg">Platform</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-slate-400 hover:text-primary-400 transition-colors inline-block"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                            {footerLinks.support.slice(0, 2).map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-slate-400 hover:text-primary-400 transition-colors inline-block"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter Column */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="p-6 md:p-8 rounded-3xl bg-slate-800/40 border border-white/5 backdrop-blur-sm relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />

                            <h4 className="text-white font-heading font-bold text-xl mb-3">Newsletter</h4>
                            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                                Join 5,000+ businesses getting our weekly growth insights and IT updates.
                            </p>

                            <NewsletterForm />
                        </div>

                        {/* Contact Quick Link */}
                        <div className="flex items-center gap-4 p-4 rounded-3xl border border-white/5 bg-slate-800/20">
                            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                <Mail size={24} />
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Direct Contact</p>
                                <a href="mailto:hello@andinnovatech.com" className="text-sm font-bold text-white hover:text-primary transition-colors">
                                    hello@andinnovatech.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/5 relative z-10">
                <div className="section-container py-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-sm text-slate-500 font-medium">
                        <p>© {new Date().getFullYear()} AnD Innovatech.</p>
                        <div className="hidden md:block w-1 h-1 rounded-full bg-slate-700" />
                        <p className="flex items-center gap-1.5">
                            Crafted with <Heart size={14} className="text-red-500 fill-red-500" /> for the Global Web
                        </p>
                    </div>

                    <div className="flex items-center gap-8 text-sm text-slate-500 font-medium">
                        <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
                        <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms</Link>
                        <a href="#top" className="p-2 rounded-lg bg-slate-800/50 hover:bg-primary hover:text-white transition-all">
                            <ArrowUpRight size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
