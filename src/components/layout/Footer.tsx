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
            <div className="w-full max-w-md">
                <form className="block space-y-4" onSubmit={handleSubmit}>
                    <div className="relative">
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="name@company.com"
                            className="block w-full h-14 px-6 bg-navy border border-white/10 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                            disabled={status === 'loading'}
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="block w-full h-14 bg-white text-navy font-bold rounded-xl hover:bg-slate-100 active:scale-[0.98] transition-all shadow-lg flex items-center justify-center gap-2 group"
                    >
                        {status === 'loading' ? (
                            <Loader2 size={20} className="animate-spin" />
                        ) : (
                            <>
                                <span className="uppercase tracking-widest text-[11px] font-black">Join Our Network</span>
                                <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </>
                        )}
                    </button>
                    {status === 'error' && (
                        <p className="text-red-400 text-[10px] text-center uppercase tracking-widest font-black">
                            Error Submitting. Try again.
                        </p>
                    )}
                </form>
            </div>
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
