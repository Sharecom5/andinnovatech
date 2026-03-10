'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Bot, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import Button from './ui/Button';

export default function LeadMagnet() {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        // Show the magnet after a short delay
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate submission
        setIsSubmitted(true);
        setTimeout(() => {
            setIsOpen(false);
            setIsVisible(false);
        }, 5000);
    };

    return (
        <>
            <AnimatePresence>
                {isVisible && !isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, y: 100 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.5, y: 100 }}
                        className="fixed bottom-8 right-8 z-[60]"
                    >
                        <button
                            onClick={() => setIsOpen(true)}
                            className="group relative flex items-center gap-3 bg-gradient-primary p-4 rounded-full shadow-glow-primary hover:scale-105 transition-all text-white"
                        >
                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center animate-pulse">
                                <Bot size={24} />
                            </div>
                            <span className="font-bold text-sm pr-2">Free AI Growth Audit</span>
                            <div className="absolute -top-2 -right-2 bg-accent text-white w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold border-2 border-white dark:border-navy">
                                1
                            </div>
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[70] flex items-center justify-center p-6 bg-navy/60 backdrop-blur-md">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="bg-white dark:bg-slate-900 w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/10"
                        >
                            <div className="relative p-8 md:p-12">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="absolute top-6 right-6 p-2 text-slate-400 hover:text-navy dark:hover:text-white transition-colors"
                                >
                                    <X size={24} />
                                </button>

                                {!isSubmitted ? (
                                    <>
                                        <div className="flex items-center gap-3 text-primary mb-6">
                                            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                                                <Sparkles size={28} />
                                            </div>
                                            <span className="font-black uppercase tracking-widest text-xs">Limited Offer</span>
                                        </div>

                                        <h2 className="text-3xl md:text-4xl font-heading font-black text-navy dark:text-white mb-4 leading-tight">
                                            Get Your <span className="gradient-text">Free AI Growth Audit</span>
                                        </h2>
                                        <p className="text-grey dark:text-slate-400 mb-8">
                                            We'll analyze your current website and business processes to find exactly where AI can save you 20+ hours a week and double your leads.
                                        </p>

                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            <div className="space-y-2">
                                                <input
                                                    type="text"
                                                    required
                                                    placeholder="Your Company Website"
                                                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-navy dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <input
                                                    type="email"
                                                    required
                                                    placeholder="Work Email Address"
                                                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-navy dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                                                />
                                            </div>
                                            <Button type="submit" size="lg" className="w-full mt-4 h-16 rounded-2xl text-lg shadow-glow-primary group">
                                                Send My Free Audit <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                            </Button>
                                        </form>
                                        <p className="text-center text-[10px] text-slate-400 mt-6 uppercase tracking-[0.2em] font-bold">
                                            No Credit Card Required • Instant Confirmation
                                        </p>
                                    </>
                                ) : (
                                    <div className="text-center py-8">
                                        <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 mx-auto mb-6">
                                            <CheckCircle2 size={48} />
                                        </div>
                                        <h2 className="text-3xl font-heading font-black text-navy dark:text-white mb-4">
                                            Audit Request Received!
                                        </h2>
                                        <p className="text-grey dark:text-slate-400 mb-8">
                                            Our technical team is now analyzing your site. Check your inbox for your personalized growth report within 24 hours.
                                        </p>
                                        <Button onClick={() => setIsOpen(false)} className="w-full h-16 rounded-2xl text-lg">
                                            Awesome, thanks!
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
