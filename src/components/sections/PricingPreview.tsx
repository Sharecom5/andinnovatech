import Link from 'next/link';
import { BadgeCheck, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function PricingPreview() {
    return (
        <section className="section-padding bg-navy relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-mesh opacity-10" />
            <div className="section-container relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary-400 text-xs font-bold uppercase tracking-widest mb-6 border border-primary/30">
                            <BadgeCheck size={14} /> Global Delivery Model
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 tracking-tighter leading-tight">
                            Save 40-60% vs. <br />
                            <span className="gradient-text">Local US Agencies</span>
                        </h2>
                        <p className="text-slate-400 text-xl mb-10 leading-relaxed max-w-xl">
                            Stop paying for expensive New York or SF office rent. You only pay for high-end engineering. Same tech stack, same quality, half the cost.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6">
                            <Link href="/pricing">
                                <Button size="lg" className="bg-primary hover:bg-primary-600 border-none text-white px-10 py-7 rounded-full text-lg shadow-glow-primary font-bold">
                                    Compare Our Rates <ArrowRight className="ml-2" />
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {[
                            { label: 'Websites', price: '$5k - $15k', save: 'Save $10k+' },
                            { label: 'Custom Apps', price: '$20k - $50k', save: 'Save $30k+' },
                            { label: 'SEO Campaign', price: '$2.5k/mo', save: 'Save 40%' },
                            { label: 'Cloud Audit', price: '$0.00', save: 'Free First' }
                        ].map((item, i) => (
                            <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all group">
                                <div className="text-primary-400 font-black text-xs uppercase tracking-[0.2em] mb-4">{item.label}</div>
                                <div className="text-white text-2xl font-bold mb-2">{item.price}</div>
                                <div className="text-green-400 text-sm font-bold flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> {item.save}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
