import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import ContactForm from '@/components/sections/ContactForm';
import { CheckCircle2, Bot, ArrowRight, Zap, MessageSquare, PhoneCall, Clock, BarChart3, Shield } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'AI Automation for Service Businesses in New York | AnD Innovatech',
    description: 'Transform your NYC service business with AI. Automated lead follow-up, AI chatbots, and 24/7 client booking. Save time and close more New York leads instantly.',
};

const nycAiFeatures = [
    {
        icon: Clock,
        title: '24/7 Lead Capture',
        desc: 'New York never sleeps, and neither should your sales team. Our AI captures and qualifies leads at 3 AM while you sleep.',
    },
    {
        icon: Bot,
        title: 'Smart NYC Chatbots',
        desc: 'Advanced AI chatbots that handle New York customer inquiries, quote requests, and appointment scheduling with 95% accuracy.',
    },
    {
        icon: BarChart3,
        title: 'CRM Automation',
        desc: 'Sync every lead directly to your CRM (Jobber, ServiceTitan, or custom) without lifting a finger. Zero manual data entry.',
    },
];

export default function NycServiceAiAutomation() {
    return (
        <div className="overflow-x-hidden bg-white dark:bg-navy text-navy dark:text-white">
            <Hero
                title={<>AI Automation for Service <span className="gradient-text">Businesses in New York</span></>}
                subtitle="Don't let another lead go cold in the city that never sleeps. We build AI-powered growth systems for NYC HVAC, plumbing, and professional services."
                badgeText="🤖 NYC AI Experts"
                ctaText="Book a 15-Min AI Demo"
                ctaHref="/contact"
                showStats={true}
                category="software"
            />

            <section className="section-padding bg-white dark:bg-navy">
                <div className="section-container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="relative">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 rounded-full blur-[120px] -z-10" />
                            <div className="bg-navy p-10 md:p-14 rounded-[3.5rem] border border-white/10 shadow-2xl relative overflow-hidden backdrop-blur-xl">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-3 rounded-2xl bg-primary/20 text-primary">
                                        <Bot size={28} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">AI Automation Calculator</h3>
                                </div>
                                <p className="text-slate-400 mb-8">Tell us about your lead flow and team size. We&apos;ll build a custom AI blueprint for your NYC business.</p>
                                <ContactForm />
                            </div>
                        </div>

                        <div>
                            <Badge className="mb-6 bg-primary/10 text-primary border-none font-bold uppercase tracking-widest">NYC Efficiency Engineering</Badge>
                            <h2 className="text-4xl md:text-6xl font-extrabold text-navy dark:text-white mb-8 leading-none tracking-tighter">
                                Automate or <span className="text-primary">Be Left Behind.</span>
                            </h2>

                            <div className="prose prose-lg dark:prose-invert text-grey dark:text-slate-400 mb-12">
                                <p>
                                    In New York, speed is the only currency that matters. If you don&apos;t respond to a lead within 5 minutes, they&apos;ve already contacted three other competitors.
                                </p>
                                <p>
                                    <strong>AnD Innovatech</strong> helps NYC service companies win by automating the entire sales funnel. Our AI Lead Nurture systems and custom Voice Bots handle the heavy lifting, allowing you to focus on delivering world-class service while the tech does the selling.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                                {[
                                    'Instant AI SMS Response',
                                    '24/7 Intelligent Booking',
                                    'Custom AI Voice Assistants',
                                    'Automated Reviews & Follow-ups',
                                    'NYC Market Specialized AI',
                                    'Seamless Software Integration'
                                ].map((item) => (
                                    <div key={item} className="flex items-center space-x-3 p-4 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-100 dark:border-white/10 group hover:border-primary/50 transition-all">
                                        <Zap size={16} className="text-primary group-hover:scale-125 transition-transform" />
                                        <span className="text-sm font-bold">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <Link href="/contact">
                                <Button size="lg" className="bg-primary text-white hover:bg-primary-600 px-12 py-8 rounded-full font-black text-xl shadow-glow-primary">
                                    I Want to Scale with AI →
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-slate-50 dark:bg-navy/50">
                <div className="section-container">
                    <SectionHeading
                        title="AI Built for the Empire State"
                        subtitle="We engineer solutions that handle the complexity and speed of the New York business landscape."
                    />
                    <div className="grid md:grid-cols-3 gap-10 mt-16">
                        {nycAiFeatures.map((item, i) => (
                            <div key={i} className="bg-white dark:bg-slate-800 p-12 rounded-[3.5rem] border border-slate-100 dark:border-white/5 hover:translate-y-[-10px] transition-all duration-300">
                                <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-8 shadow-inner">
                                    <item.icon size={36} />
                                </div>
                                <h3 className="text-2xl font-bold text-navy dark:text-white mb-4 tracking-tight leading-tight">{item.title}</h3>
                                <p className="text-grey dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
