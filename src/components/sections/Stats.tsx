'use client';

import { motion } from 'framer-motion';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { Award, Globe, Briefcase, SmilePlus } from 'lucide-react';
import { cn } from '@/lib/utils';

const stats = [
    { value: 7, suffix: '+', label: 'Years Experience', icon: <Award size={28} /> },
    { value: 500, suffix: '+', label: 'Projects Completed', icon: <Briefcase size={28} /> },
    { value: 3, suffix: '', label: 'Countries Served', icon: <Globe size={28} /> },
    { value: 98, suffix: '%', label: 'Client Satisfaction', icon: <SmilePlus size={28} /> },
];

export default function Stats() {
    return (
        <section className="relative py-12 md:py-16 bg-white dark:bg-navy overflow-hidden">
            <div className="section-container relative z-10">
                <div className="bg-navy rounded-[2rem] p-6 sm:p-10 md:p-14 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden group">
                    {/* Background Glow */}
                    <div className="absolute -top-32 -right-32 w-80 h-80 bg-primary/20 rounded-full blur-[100px] group-hover:bg-primary/30 transition-colors duration-700" />
                    <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-accent/20 rounded-full blur-[100px] group-hover:bg-accent/30 transition-colors duration-700" />

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 sm:gap-10 relative z-10">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '100px' }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className={cn(
                                    "relative px-2 sm:px-4",
                                    index % 2 !== 1 && "after:absolute after:right-[-4px] after:top-1/4 after:h-1/2 after:w-[1px] after:bg-white/10 sm:after:right-[-20px] md:after:right-[-32px] lg:after:right-[-20px]",
                                    index === 1 && "lg:after:block",
                                    index === 2 && "after:hidden lg:after:block"
                                )}
                            >
                                <AnimatedCounter
                                    value={stat.value}
                                    suffix={stat.suffix}
                                    label={stat.label}
                                    icon={stat.icon}
                                    className="text-white scale-90 sm:scale-100"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
