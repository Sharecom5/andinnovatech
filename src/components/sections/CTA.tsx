import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function CTA() {
    return (
        <section className="relative section-padding overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-primary" />

            {/* Animated orbs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-white/5 rounded-full blur-[100px]" />

            {/* Pattern overlay */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
            />

            <div className="section-container relative z-10 text-center">
                <p className="text-sm font-bold uppercase tracking-widest text-white/60 mb-4">No commitment. Real advice.</p>
                <h2 className="text-3xl md:text-4xl lg:text-h2 font-heading font-bold text-white mb-4">
                    Get a Fixed-Price Proposal in 48 Hours
                </h2>
                <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-3">
                    Tell us what you need. We&apos;ll send a detailed scope, timeline, and flat-rate price — no hourly billing surprises, no sales pressure.
                </p>
                <p className="text-sm text-white/50 mb-10">
                    Available Mon–Fri, 9am–6pm ET &nbsp;·&nbsp; Reply within 4 business hours &nbsp;·&nbsp; English-fluent team
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="/contact-us/" className="w-full sm:w-auto">
                        <Button variant="white" size="lg" className="w-full sm:w-auto gap-2 font-bold">
                            Book a Free 30-Min Strategy Call
                            <ArrowRight size={20} />
                        </Button>
                    </Link>
                    <Link href="/contact-us/" className="w-full sm:w-auto">
                        <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2 border-white/30 text-white hover:bg-white/10">
                            <Phone size={18} />
                            Start With a Free Website Audit
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
