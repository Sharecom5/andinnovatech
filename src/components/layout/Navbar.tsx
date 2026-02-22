'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollPosition } from '@/hooks/useWordPress';
import Button from '@/components/ui/Button';
import MobileMenu from './MobileMenu';
import { cn } from '@/lib/utils';
import type { NavLink } from '@/lib/types';

const navLinks: NavLink[] = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About Us', href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact Us', href: '/contact' },
];

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { isScrolled } = useScrollPosition();
    const pathname = usePathname();

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={cn(
                    'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                    isScrolled
                        ? 'bg-white/90 dark:bg-navy/90 backdrop-blur-lg shadow-nav'
                        : 'bg-transparent'
                )}
            >
                <nav className="section-container">
                    <div className="flex items-center justify-between h-20">
                        <Link href="/" className="flex flex-col group">
                            <span className="text-2xl font-heading font-extrabold flex items-center gap-1">
                                <span className="text-primary-400">AnD</span>
                                <span className={cn(
                                    "transition-colors duration-300",
                                    isScrolled ? "text-navy dark:text-white" : "text-white"
                                )}>
                                    Innovatech
                                </span>
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={cn(
                                        'px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300',
                                        pathname === link.href
                                            ? 'text-primary bg-primary/10'
                                            : isScrolled
                                                ? 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary'
                                                : 'text-white/80 hover:text-white hover:bg-white/10'
                                    )}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* Right side: theme toggle + CTA + mobile menu */}
                        <div className="flex items-center gap-3">
                            {/* CTA Button (desktop) */}
                            <Link href="/contact" className="hidden md:block">
                                <Button size="sm" className="gap-2 bg-primary hover:bg-primary-600 text-white border-none shadow-glow">
                                    <Phone size={16} />
                                    Get a Quote
                                </Button>
                            </Link>

                            {/* Mobile menu button */}
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className={cn(
                                    'lg:hidden p-2 rounded-lg transition-all duration-300',
                                    isScrolled
                                        ? 'text-navy dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                                        : 'text-white hover:bg-white/10'
                                )}
                                aria-label="Toggle mobile menu"
                            >
                                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </nav>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <MobileMenu
                        links={navLinks}
                        currentPath={pathname}
                        onClose={() => setIsMobileMenuOpen(false)}
                    />
                )}
            </AnimatePresence>
        </>
    );
}
