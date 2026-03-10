import React from 'react';
import Link from 'next/link';
import { Bot, MessageSquare, PhoneCall, Star, RefreshCcw, ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

const features = [
    {
        icon: MessageSquare,
        title: 'AI Website Chatbot',
        description: 'An AI chatbot that answers customer questions instantly on your website and books services. Never lose a lead again.',
        color: 'text-blue-500',
        bgColor: 'bg-blue-500/10'
    },
    {
        icon: Bot,
        title: 'AI Sales Bot for SMS/WhatsApp',
        description: 'Automatically reply and convert leads via SMS and WhatsApp. Qualify leads and automate bookings 24/7.',
        color: 'text-green-500',
        bgColor: 'bg-green-500/10'
    },
    {
        icon: PhoneCall,
        title: 'AI Voice Bot',
        description: 'A human-like AI voice agent to answer calls, answer questions, collect booking details, and schedule jobs securely.',
        color: 'text-purple-500',
        bgColor: 'bg-purple-500/10'
    },
    {
        icon: Star,
        title: 'AI Review Management',
        description: 'Automatically ask customers for reviews, auto-reply to Google/Yelp reviews using AI, and build an incredible reputation.',
        color: 'text-yellow-500',
        bgColor: 'bg-yellow-500/10'
    },
    {
        icon: RefreshCcw,
        title: 'AI Lead Follow-up Automation',
        description: 'Stop losing leads! Automatically send follow-up SMS and emails with AI-crafted sales messages to close the deal.',
        color: 'text-rose-500',
        bgColor: 'bg-rose-500/10'
    }
];

export default function AiAutomationSaaS() {
    return (
        <section className="section-padding bg-slate-50 dark:bg-slate-900 overflow-hidden relative" id="ai-automation">
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
            <div className="section-container relative z-10">
                <SectionHeading
                    title={<>AI Automation <span className="gradient-text">for Service Businesses</span></>}
                    subtitle="Turn your website into an automated sales machine. Perfect for Cleaning, HVAC, Plumbers, Landscaping, and Roofing companies."
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all group">
                            <div className={`w-14 h-14 rounded-xl ${feature.bgColor} ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <feature.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold font-heading text-navy dark:text-white mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 flex-grow">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                    <div className="bg-gradient-primary rounded-2xl p-8 shadow-sm flex flex-col justify-center items-center text-center text-white">
                        <h3 className="text-2xl font-bold font-heading mb-4">
                            CRM Dashboard & Lead Automation
                        </h3>
                        <p className="text-white/90 leading-relaxed mb-8">
                            Get complete visibility over your leads, conversations, and bookings in one powerful AI-driven dashboard.
                        </p>
                        <Link href="/services/ai-automation">
                            <Button className="bg-white text-primary hover:bg-slate-50 w-full group">
                                Start Free Trial <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
