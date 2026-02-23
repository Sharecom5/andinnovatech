'use client';

import { motion } from 'framer-motion';
import Hero from '@/components/sections/Hero';
import ContactForm from '@/components/sections/ContactForm';
import { CheckCircle2, Globe, Clock, Shield, ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Link from 'next/link';

interface GeoLandingPageProps {
    country: string;
    service: string;
    h1: string;
    description: string;
    points: string[];
}

export default function GeoLandingPage({ country, service, h1, description, points }: GeoLandingPageProps) {
    const features = [
        {
            icon: Clock,
            title: 'Timezone Alignment',
            text: `We offer significant timezone overlap for businesses in ${country}, ensuring seamless communication and real-time collaboration.`,
            color: 'text-blue-500',
            bg: 'bg-blue-500/10'
        },
        {
            icon: Globe,
            title: 'Global Standards',
            text: `Our team understands the ${country} market dynamics and follows international best practices in ${service}.`,
            color: 'text-primary',
            bg: 'bg-primary/10'
        },
        {
            icon: Shield,
            title: 'Reliability',
            text: `Trusted by clients worldwide for over 7 years, we deliver consistent results and dedicated support.`,
            color: 'text-accent',
            bg: 'bg-accent/10'
        },
    ];

    const [first, ...rest] = h1.split(' ');
    const formattedH1 = (
        <>{first} <span className="gradient-text">{rest.join(' ')}</span></>
    );

    return (
        <main className="overflow-x-hidden bg-white dark:bg-navy">
            <Hero
                title={formattedH1}
                subtitle={description}
                badgeText={`🌍 Global Partner: ${country}`}
                ctaText={`Contact ${country} Support`}
                ctaHref="/contact"
                showStats={false}
            />

            <section className="section-padding bg-white dark:bg-navy">
                <div className="section-container">
                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">
                        <div className="space-y-12">
                            <div>
                                <Badge className="mb-4 bg-primary/10 text-primary border-none font-bold uppercase tracking-widest">Global Partnership</Badge>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy dark:text-white leading-tight">
                                    Collaborate with <span className="text-primary">Confidence</span> in {country}
                                </h2>
                            </div>

                            <div className="space-y-8">
                                {points.map((point, index) => (
                                    <div key={index} className="flex items-start gap-5 group">
                                        <div className="mt-1 bg-primary/10 p-2 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                            <CheckCircle2 size={24} />
                                        </div>
                                        <p className="text-grey dark:text-slate-400 text-lg leading-relaxed">{point}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="grid sm:grid-cols-3 gap-6 pt-12 border-t border-slate-100 dark:border-slate-800">
                                {features.map((feature, index) => (
                                    <div key={index} className="space-y-4">
                                        <div className={`w-12 h-12 rounded-2xl ${feature.bg} ${feature.color} flex items-center justify-center`}>
                                            <feature.icon size={24} />
                                        </div>
                                        <h4 className="font-bold text-navy dark:text-white">{feature.title}</h4>
                                        <p className="text-sm text-grey dark:text-slate-400 leading-relaxed">{feature.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:sticky lg:top-32 h-fit mt-10 lg:mt-0">
                            <div className="bg-navy p-6 md:p-10 rounded-[2.5rem] border border-white/10 shadow-glow-primary relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] opacity-40" />
                                <h3 className="text-3xl font-bold text-white mb-4 relative z-10">Start Your Global Build</h3>
                                <p className="text-slate-400 mb-10 relative z-10">Get a custom technical proposal and roadmap for the {country} market.</p>
                                <div className="relative z-10">
                                    <ContactForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom Section */}
            <section className="py-20 bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
                <div className="section-container text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy dark:text-white mb-8 tracking-tighter">
                        Leading <span className="text-primary">{service}</span> Partner for {country}
                    </h2>
                    <Link href="/portfolio">
                        <Button variant="outline" size="lg" className="px-10 py-6 border-primary/30 text-primary hover:bg-primary/5 rounded-full font-bold">
                            View {service} Portfolio <ArrowRight className="ml-2" />
                        </Button>
                    </Link>
                </div>
            </section>
        </main>
    );
}
