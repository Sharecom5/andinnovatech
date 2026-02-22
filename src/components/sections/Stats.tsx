'use client';

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
        <section className="relative py-12 bg-white dark:bg-navy overflow-hidden">
            <div className="section-container relative z-10">
                <div className="bg-navy rounded-3xl p-8 md:p-12 border border-white/5 shadow-2xl relative overflow-hidden">
                    {/* Background Glow */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent/20 rounded-full blur-[100px]" />

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                        {stats.map((stat, index) => (
                            <div key={stat.label} className={cn(
                                "relative",
                                index !== stats.length - 1 && "lg:after:content-[''] lg:after:absolute lg:after:right-[-16px] lg:after:top-1/4 lg:after:h-1/2 lg:after:w-[1px] lg:after:bg-white/10"
                            )}>
                                <AnimatedCounter
                                    value={stat.value}
                                    suffix={stat.suffix}
                                    label={stat.label}
                                    icon={stat.icon}
                                    className="text-white"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
