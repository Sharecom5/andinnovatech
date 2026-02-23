'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Hero from '@/components/sections/Hero';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import ContactForm from '@/components/sections/ContactForm';

interface GeoLandingPageProps {
    country: string;
    service: string;
    h1: string;
    description: string;
    points: string[];
}

export default function GeoLandingPage({ country, service, h1, description, points }: GeoLandingPageProps) {
    return (
        <main className="overflow-hidden">
            {/* Hero Section */}
            <Hero
                title={h1}
                subtitle={description}
                badgeText={country}
                ctaText="Start Your Project"
                showStats={false}
            />

            {/* Key Benefits Section */}
            <section className="section-padding bg-white dark:bg-navy">
                <div className="section-container">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <SectionHeading
                                title={`Why Choose Our ${service} in ${country}`}
                                subtitle={`We deliver tailored solutions that meet the specific demands of the ${country} market.`}
                                centered={false}
                            />
                            <div className="space-y-4 mt-8">
                                {points.map((point, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className="mt-1 bg-primary/10 p-1 rounded-full text-primary shrink-0">
                                            <CheckCircle2 size={18} />
                                        </div>
                                        <p className="text-grey dark:text-slate-400 font-medium">{point}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-10">
                                <Button
                                    onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="rounded-full px-8 py-4 h-auto text-lg"
                                >
                                    Get a Free Consultation <ArrowRight className="ml-2" />
                                </Button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="aspect-square bg-gradient-primary rounded-[3rem] rotate-3 absolute inset-0 opacity-10" />
                            <div className="aspect-square bg-slate-100 dark:bg-slate-800 rounded-[3rem] overflow-hidden relative z-10 p-8 flex items-center justify-center">
                                <div className="text-center space-y-6">
                                    <div className="text-6xl font-black text-primary">200+</div>
                                    <div className="text-sm uppercase tracking-[0.3em] font-bold text-slate-500">Successful Builds</div>
                                    <div className="h-px w-20 bg-slate-200 dark:bg-slate-700 mx-auto" />
                                    <div className="text-slate-500 dark:text-slate-400 italic">"Delivering Excellence Across {country}"</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section id="contact-form" className="section-padding bg-slate-50 dark:bg-slate-900/50">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <SectionHeading
                            title="Ready to Scale Your Business?"
                            subtitle={`Contact us today to discuss your ${service} needs in ${country}. Our experts are ready to help.`}
                        />
                        <div className="bg-white dark:bg-navy p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-slate-800">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
