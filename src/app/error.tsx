'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, RefreshCcw, Home } from 'lucide-react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-white px-4 py-32">
            <div className="max-w-md w-full text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-100 text-red-600 mb-8">
                    <AlertTriangle size={40} />
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Something went wrong!</h1>
                <p className="text-gray-600 mb-10 leading-relaxed">
                    An unexpected error occurred while loading this page. This might be due to a corrupted build cache.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={() => reset()}
                        className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary-700 transition-all shadow-lg"
                    >
                        <RefreshCcw size={18} />
                        Try Again
                    </button>
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 bg-white text-secondary border border-gray-200 px-8 py-3 rounded-full font-bold hover:border-primary hover:text-primary transition-all"
                    >
                        <Home size={18} />
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
