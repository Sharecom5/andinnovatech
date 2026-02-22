import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function NotFound() {
    return (
        <section className="min-h-screen flex items-center justify-center bg-grey-light dark:bg-navy px-4">
            <div className="text-center max-w-lg">
                {/* 404 Big Text */}
                <div className="relative mb-8">
                    <h1 className="text-[10rem] md:text-[14rem] font-heading font-extrabold leading-none gradient-text select-none">
                        404
                    </h1>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-grey-light dark:to-navy" />
                </div>

                <h2 className="text-2xl md:text-h2 font-heading font-bold text-navy dark:text-white mb-4 -mt-12 relative z-10">
                    Page Not Found
                </h2>
                <p className="text-grey dark:text-slate-400 mb-8">
                    Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
                    Let&apos;s get you back on track.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="/">
                        <Button className="gap-2">
                            <Home size={18} />
                            Go Home
                        </Button>
                    </Link>
                    <Link href="/contact">
                        <Button variant="outline" className="gap-2">
                            <ArrowLeft size={18} />
                            Contact Support
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
