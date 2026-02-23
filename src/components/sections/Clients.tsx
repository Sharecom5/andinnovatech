'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Zap, CloudLightning, Activity, Globe } from 'lucide-react';

const clients = [
    { name: 'TechFlow', icon: ShieldCheck },
    { name: 'Nexus IT', icon: Cpu },
    { name: 'Velocity', icon: Zap },
    { name: 'CloudPeak', icon: CloudLightning },
    { name: 'Pulse', icon: Activity },
    { name: 'GlobalNet', icon: Globe },
];

export default function Clients() {
    return (
        <section className="py-20 bg-white dark:bg-navy border-y border-slate-100 dark:border-slate-900 overflow-hidden relative">
            <div className="section-container relative z-10">
                <div className="text-center mb-12">
                    <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500 mb-2">
                        Trusted by Forward-Thinking Companies
                    </h3>
                    <div className="w-12 h-0.5 bg-primary/30 mx-auto rounded-full" />
                </div>

                <div className="flex flex-wrap items-center justify-center gap-10 md:gap-20">
                    {clients.map((client, index) => (
                        <motion.div
                            key={client.name}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            className="flex items-center gap-3 group cursor-default grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                        >
                            <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/30 group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-500">
                                <client.icon size={28} className="text-slate-600 dark:text-slate-400 group-hover:text-primary transition-colors" />
                            </div>
                            <span className="text-2xl font-heading font-black tracking-tighter text-slate-600 dark:text-slate-400 group-hover:text-navy dark:group-hover:text-white transition-colors">
                                {client.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] pointer-events-none bg-[radial-gradient(#409191_1px,transparent_1px)] [background-size:24px_24px]" />
        </section>
    );
}
