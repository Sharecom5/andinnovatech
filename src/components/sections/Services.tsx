import { motion } from 'framer-motion';
import Link from 'next/link';
import { Globe, Server, Code2, TrendingUp, Cloud, Lightbulb, ArrowRight, Bot } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { cn } from '@/lib/utils';

// Fallback services data (used when WordPress API is unavailable)
const fallbackServices = [
    {
        icon: Globe,
        title: 'Website Development',
        description: 'Custom, responsive websites built with modern technologies that convert visitors into customers.',
        slug: 'website-development',
    },
    {
        icon: Bot,
        title: 'AI Automation SaaS',
        description: 'AI-powered chatbots, voice agents, and lead automation tailored for local service businesses.',
        slug: 'ai-automation',
    },
    {
        icon: Code2,
        title: 'Software Development',
        description: 'Tailored software solutions designed to solve your unique business challenges and drive growth.',
        slug: 'software-development',
    },
    {
        icon: TrendingUp,
        title: 'SEO Services',
        description: 'Data-driven SEO strategies that improve your search rankings and drive organic traffic.',
        slug: 'seo-services',
    },
    {
        icon: Cloud,
        title: 'Cloud Computing',
        description: 'Scalable cloud solutions that reduce costs and improve your business agility and performance.',
        slug: 'cloud-computing',
    },
    {
        icon: Globe,
        title: 'Mobile App Development',
        description: 'High-performance mobile applications for iOS and Android tailored to your business needs.',
        slug: 'mobile-app-development',
    },
    {
        icon: Lightbulb,
        title: 'IT Consulting',
        description: 'Expert technology consulting to help you make informed decisions and achieve digital transformation.',
        slug: 'it-consulting',
    },
];

export default function Services() {
    return (
        <section className="section-padding bg-grey-light dark:bg-navy/80 overflow-hidden relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -z-10" />

            <div className="section-container relative z-10">
                <SectionHeading
                    title={<>Elite <span className="gradient-text">Digital Services</span></>}
                    subtitle="Empowering your business with expert IT and AI-driven excellence"
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {fallbackServices.map((service, index) => (
                        <motion.div
                            key={service.slug + service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link href={`/services/${service.slug}`}>
                                <div
                                    className={cn(
                                        'group relative bg-white dark:bg-slate-800 rounded-3xl p-8',
                                        'border border-slate-100 dark:border-slate-700/50',
                                        'shadow-xl hover:shadow-primary/10',
                                        'transition-all duration-500 hover:-translate-y-2',
                                        'ai-card-glow overflow-hidden'
                                    )}
                                >
                                    {/* Icon Decoration */}
                                    <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />

                                    {/* Icon */}
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-glow-primary">
                                        <service.icon size={30} className="text-white" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-heading font-bold text-navy dark:text-white mb-4 tracking-tight">
                                        {service.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-grey dark:text-slate-400 text-sm leading-relaxed mb-6">
                                        {service.description}
                                    </p>

                                    {/* Learn More Link */}
                                    <span className="inline-flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-4 transition-all duration-300">
                                        Explore Solution
                                        <ArrowRight size={18} />
                                    </span>

                                    <div className="scan-line !h-[1px] opacity-0 group-hover:opacity-10" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
