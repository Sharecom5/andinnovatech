'use client';

import Link from 'next/link';
import { useState } from 'react';
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
        { label: 'IT Solutions', href: '/services/it-solutions' },
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

    if (status === 'success') {
        return (
            <div className="flex items-center gap-2 text-green-400 bg-green-400/10 p-3 rounded-xl border border-green-400/20 mb-8 animate-in fade-in zoom-in duration-300">
                <CheckCircle2 size={18} />
                <span className="text-sm font-medium">Subscribed successfully!</span>
            </div>
        );
    }

    return (
        <form className="flex flex-col gap-2 mb-8" onSubmit={handleSubmit}>
            <div className="flex gap-2">
                <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    className="flex-1 px-4 py-2.5 rounded-full bg-slate-800 border border-slate-700 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    disabled={status === 'loading'}
                />
                <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="px-5 py-2.5 rounded-full bg-gradient-primary text-white text-sm font-semibold hover:shadow-glow transition-all duration-300 disabled:opacity-50 flex items-center gap-2"
                >
                    {status === 'loading' ? <Loader2 size={16} className="animate-spin" /> : 'Subscribe'}
                </button>
            </div>
            {status === 'error' && (
                <p className="text-red-400 text-xs mt-1 ml-4">Something went wrong. Please try again.</p>
            )}
        </form>
    );
}

export default function Footer() {
    return (
        <footer className="bg-navy text-slate-300">
            {/* Main Footer */}
            <div className="section-container section-padding">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="inline-block mb-4">
                            <span className="text-2xl font-heading font-extrabold gradient-text">
                                AnD Innovatech
                            </span>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            Empowering businesses with cutting-edge IT solutions, stunning websites,
                            and powerful SEO strategies that drive real growth across USA, India & Canada.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3">
                            <a
                                href="mailto:andinnovatech@gmail.com"
                                className="flex items-center gap-3 text-sm hover:text-primary-400 transition-colors"
                            >
                                <Mail size={16} className="text-primary-400" />
                                andinnovatech@gmail.com
                            </a>
                            <a
                                href="tel:+1234567890"
                                className="flex items-center gap-3 text-sm hover:text-primary-400 transition-colors"
                            >
                                <Phone size={16} className="text-primary-400" />
                                +1 (234) 567-890
                            </a>
                            <div className="flex items-start gap-3 text-sm">
                                <MapPin size={16} className="text-primary-400 mt-0.5 shrink-0" />
                                <span>Global presence in USA, India & Canada</span>
                            </div>
                        </div>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h4 className="text-white font-heading font-semibold text-lg mb-5">Our Services</h4>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm hover:text-primary-400 transition-colors inline-flex items-center gap-1 group"
                                    >
                                        {link.label}
                                        <ArrowUpRight
                                            size={12}
                                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                                        />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="text-white font-heading font-semibold text-lg mb-5">Company</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm hover:text-primary-400 transition-colors inline-flex items-center gap-1 group"
                                    >
                                        {link.label}
                                        <ArrowUpRight
                                            size={12}
                                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                                        />
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <h4 className="text-white font-heading font-semibold text-lg mt-8 mb-5">Legal</h4>
                        <ul className="space-y-3">
                            {footerLinks.support.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm hover:text-primary-400 transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter + Social */}
                    <div>
                        <h4 className="text-white font-heading font-semibold text-lg mb-5">Stay Updated</h4>
                        <p className="text-sm text-slate-400 mb-4">
                            Subscribe to our newsletter for the latest insights and updates.
                        </p>

                        {/* Newsletter Form */}
                        <NewsletterForm />

                        {/* Social Links */}
                        <h4 className="text-white font-heading font-semibold text-lg mb-4">Follow Us</h4>
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-gradient-primary hover:scale-110 transition-all duration-300"
                                    aria-label={social.label}
                                >
                                    <social.icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-800">
                <div className="section-container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-slate-500">
                        © {new Date().getFullYear()} AnD Innovatech. All rights reserved.
                    </p>
                    <p className="text-sm text-slate-500 flex items-center gap-1">
                        Made with <Heart size={14} className="text-red-500 fill-red-500" /> in India
                    </p>
                </div>
            </div>
        </footer>
    );
}
