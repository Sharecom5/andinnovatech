import Link from 'next/link';
import { CheckCircle, Clock, DollarSign } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

const features = [
    {
        number: '01',
        icon: DollarSign,
        title: '40–60% Less Than US Agencies',
        description: 'Get the same quality output — developers, designers, SEO strategists — without paying for US overhead, downtown offices, or 4-person account teams.',
    },
    {
        number: '02',
        icon: Clock,
        title: 'Dedicated Team. Real Accountability.',
        description: 'One project manager, weekly video updates, Slack access during your work hours. We don\'t disappear after the contract is signed.',
    },
    {
        number: '03',
        icon: CheckCircle,
        title: '90 Days Post-Launch Support. Included.',
        description: 'Every project includes 90 days of free post-delivery support. If something breaks after launch, we fix it — same day, no extra invoice.',
    },
];

export default function WhyChooseUs() {
    return (
        <section className="section-padding bg-white dark:bg-navy overflow-hidden relative">
            <div className="absolute top-0 right-0 w-full h-full opacity-30 pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />
            </div>

            <div className="section-container relative z-10">
                <div className="grid lg:grid-cols-12 gap-6">
                    {/* Header Card */}
                    <div className="lg:col-span-8 p-10 md:p-14 rounded-[3rem] bg-navy border border-white/10 flex flex-col justify-center relative overflow-hidden group shadow-2xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-colors" />
                        <div className="relative z-10 space-y-8">
                            <SectionHeading
                                title={<span className="text-white">Why US Companies Choose Us Over a <span className="text-primary-400">Local Agency or Upwork Freelancer</span></span>}
                                subtitle="We've delivered 500+ projects for SMBs across the US, Canada, and India since 2017. Here's what makes us different from the alternatives."
                                centered={false}
                            />
                            <div className="flex flex-wrap gap-4 pt-4">
                                <Link href="/contact-us/">
                                    <Button size="lg" className="bg-white text-navy hover:bg-slate-100 border-none rounded-2xl px-12 font-black uppercase tracking-widest text-[11px]">
                                        Start Your Project
                                    </Button>
                                </Link>
                                <Link href="/our-portfolio/">
                                    <Button variant="outline" size="lg" className="rounded-2xl border-white/20 hover:bg-white/5 px-10 font-bold text-[11px]">
                                        View Our Work
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Quick Stats Card */}
                    <div className="lg:col-span-4 grid grid-cols-1 gap-6">
                        <div className="p-8 rounded-[2.5rem] bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center text-center group hover:bg-white dark:hover:bg-slate-800 transition-all duration-500">
                            <div className="text-5xl font-black text-primary mb-2 tracking-tighter">98%</div>
                            <div className="text-[10px] uppercase font-black tracking-[0.3em] text-slate-400">Client Retention Rate</div>
                        </div>
                        <div className="p-8 rounded-[2.5rem] bg-primary text-white flex flex-col items-center justify-center text-center shadow-xl shadow-primary/20 hover:scale-[1.02] transition-transform">
                            <div className="text-5xl font-black mb-2 tracking-tighter">500+</div>
                            <div className="text-[10px] uppercase font-black tracking-[0.3em] text-white/70">Projects Delivered</div>
                        </div>
                    </div>

                    {/* Feature Cards */}
                    {features.map((feature) => (
                        <div
                            key={feature.number}
                            className="lg:col-span-4 p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-primary/50 hover:shadow-2xl transition-all duration-500 group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                                <feature.icon size={28} />
                            </div>
                            <h4 className="text-xl font-black text-navy dark:text-white mb-3 tracking-tight">{feature.title}</h4>
                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                        </div>
                    ))}

                    <div className="lg:col-span-12 p-1 bg-gradient-to-r from-primary/20 via-primary/40 to-accent/20 rounded-full my-8 hidden lg:block" />
                </div>
            </div>
        </section>
    );
}
