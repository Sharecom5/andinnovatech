'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';
import Button from './Button';

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user already accepted cookies
        const consent = localStorage.getItem('cookie_consent');
        if (!consent) {
            // Show after a short delay
            const timer = setTimeout(() => setIsVisible(true), 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookie_consent', 'accepted');
        setIsVisible(false);
    };

    const declineCookies = () => {
        localStorage.setItem('cookie_consent', 'declined');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: 'spring', damping: 20 }}
                    className="fixed bottom-0 left-0 right-0 z-50 p-4"
                >
                    <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-700 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <div className="flex items-start gap-3 flex-1">
                            <Cookie size={24} className="text-primary shrink-0 mt-0.5" />
                            <div>
                                <h4 className="font-heading font-semibold text-navy dark:text-white mb-1">
                                    Cookie Notice
                                </h4>
                                <p className="text-sm text-grey dark:text-slate-400">
                                    We use cookies to enhance your browsing experience and analyze site traffic.
                                    By clicking &quot;Accept&quot;, you consent to our use of cookies.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 shrink-0">
                            <button
                                onClick={declineCookies}
                                className="px-4 py-2 text-sm font-medium text-grey hover:text-navy dark:hover:text-white transition-colors"
                            >
                                Decline
                            </button>
                            <Button size="sm" onClick={acceptCookies}>
                                Accept
                            </Button>
                        </div>

                        <button
                            onClick={declineCookies}
                            className="absolute top-3 right-3 text-grey hover:text-navy dark:hover:text-white sm:hidden"
                            aria-label="Close"
                        >
                            <X size={18} />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
