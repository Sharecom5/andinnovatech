import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle, Clock, DollarSign, ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

const features = [
    {
        number: '01',
        icon: DollarSign,
        title: '40–60% Cost Efficiency',
        description: 'Elite technical talent without the heavy US overhead. Scale your engineering team faster with high-performance delivery.',
    },
    {
        number: '02',
        icon: Clock,
        title: 'Real-Time Accountability',
        description: 'Weekly video syncs, dedicated Slack access, and 24/7 project tracking. We integrate seamlessly into your workflow.',
    },
    {
        number: '03',
        icon: CheckCircle,
        title: 'Military-Grade Support',
        description: '90 days of dedicated post-launch support included as standard. We architect for stability and long-term scalability.',
    },
];

export default function WhyChooseUs() {
    return (
        <section className="section-padding bg-white dark:bg-navy overflow-hidden relative grid-pattern">
            <div className="absolute top-0 right-0 w-full h-full opacity-30 pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '3s' }} />
            </div>

            <div className="section-container relative z-10">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* Header Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-8 p-10 md:p-16 rounded-[3rem] bg-slate-900 border border-white/10 flex flex-col justify-center relative overflow-hidden group shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
                    >
                        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 rounded-full blur-[100px] group-hover:bg-primary/30 transition-all duration-700" />
                        <div className="scan-line !opacity-20" />

                        <div className="relative z-10 space-y-8 text-left">
                            <SectionHeading
                                title={<span className="text-white">Why US Companies Scale with <span className="gradient-text">AnD Innovatech</span></span>}
                                subtitle="Since 2017, we've bridged the gap between elite engineering and strategic growth for 500+ US businesses."
                                centered={false}
                                light
                                className="mb-0"
                            />
                            <div className="flex flex-wrap gap-5 pt-4">
                                <Link href="/contact">
                                    <Button size="lg" className="bg-primary hover:bg-primary-600 text-white border-none rounded-2xl px-12 font-bold shadow-glow-primary group">
                                        Partner with Experts <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                                <Link href="/portfolio">
                                    <Button variant="outline" size="lg" className="rounded-2xl border-white/20 text-white hover:bg-white/5 px-10 font-bold">
                                        Case Studies
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* Quick Stats Card */}
                    <div className="lg:col-span-4 grid grid-cols-1 gap-6">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-10 rounded-[2.5rem] bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center text-center group hover:shadow-2xl transition-all duration-500 ai-card-glow"
                        >
                            <div className="text-6xl font-black gradient-text mb-2 tracking-tighter text-glow">98%</div>
                            <div className="text-[10px] uppercase font-black tracking-[0.4em] text-slate-400">Client Retention</div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="p-10 rounded-[2.5rem] bg-gradient-primary text-white flex flex-col items-center justify-center text-center shadow-[0_20px_40px_rgba(64,145,145,0.3)] hover:scale-[1.05] transition-transform duration-500 overflow-hidden relative"
                        >
                            <div className="absolute inset-0 bg-white/10 grid-pattern opacity-20" />
                            <div className="relative z-10">
                                <div className="text-6xl font-black mb-2 tracking-tighter">500+</div>
                                <div className="text-[10px] uppercase font-black tracking-[0.4em] text-white/80">Success Stories</div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Feature Cards */}
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: (index + 2) * 0.1 }}
                            className="lg:col-span-4 p-10 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/50 hover:border-primary/50 hover:shadow-2xl transition-all duration-500 group ai-card-glow"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform duration-500 shadow-glow-primary">
                                <feature.icon size={30} />
                            </div>
                            <h4 className="text-2xl font-bold text-navy dark:text-white mb-4 tracking-tight">{feature.title}</h4>
                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
