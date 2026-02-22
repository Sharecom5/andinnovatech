'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone, X } from 'lucide-react';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import type { NavLink } from '@/lib/types';

interface MobileMenuProps {
    links: NavLink[];
    currentPath: string;
    onClose: () => void;
}

export default function MobileMenu({ links, currentPath, onClose }: MobileMenuProps) {
    return (
        <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-[60] lg:hidden"
        >
            {/* Overlay */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Menu Panel */}
            <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', duration: 0.3 }}
                className="absolute right-0 top-0 bottom-0 w-80 bg-white dark:bg-navy shadow-2xl"
            >
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b border-slate-100 dark:border-slate-800">
                        <span className="text-xl font-heading font-bold gradient-text">
                            AnD Innovatech
                        </span>
                        <button
                            onClick={onClose}
                            className="p-2 rounded-lg hover:bg-grey-light dark:hover:bg-slate-800 text-grey"
                            aria-label="Close menu"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex-1 py-6 px-4">
                        <ul className="space-y-1">
                            {links.map((link, index) => (
                                <motion.li
                                    key={link.href}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={onClose}
                                        className={cn(
                                            'block px-4 py-3 rounded-xl text-lg font-medium transition-colors duration-200',
                                            currentPath === link.href
                                                ? 'text-primary bg-primary/5 dark:bg-primary/10'
                                                : 'text-navy dark:text-slate-300 hover:text-primary hover:bg-grey-light dark:hover:bg-slate-800'
                                        )}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </nav>

                    {/* CTA */}
                    <div className="p-6 border-t border-slate-100 dark:border-slate-800">
                        <Link href="/contact" onClick={onClose}>
                            <Button className="w-full gap-2">
                                <Phone size={18} />
                                Get Free Consultation
                            </Button>
                        </Link>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
