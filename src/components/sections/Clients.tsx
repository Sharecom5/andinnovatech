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
        <section className="py-12 bg-white dark:bg-navy border-y border-slate-100 dark:border-slate-800">
            <div className="section-container">
                <div className="flex flex-wrap items-center justify-center gap-6 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    {clients.map((client, index) => (
                        <motion.div
                            key={client.name}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-2 group cursor-pointer"
                        >
                            <client.icon size={24} className="text-slate-400 group-hover:text-primary transition-colors" />
                            <span className="text-xl font-heading font-bold text-slate-400 group-hover:text-navy dark:group-hover:text-white transition-colors">
                                {client.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
