import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import ContactForm from '@/components/sections/ContactForm';
import { CheckCircle2, MessageSquare, ArrowRight, Zap, Sparkles, Home, Clock, DollarSign } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import RelatedServices from '@/components/sections/RelatedServices';

export const metadata: Metadata = {
    title: 'AI Chatbot for Cleaning | Automate Quotes & Booking',
    description: 'Transform your cleaning business with an AI chatbot that provides instant estimates, schedules recurring cleans, and handles customer support 24/7.',
        alternates: {
        canonical: 'https://www.andinnovatech.com/services/ai-chatbot-cleaning/',
    },
    openGraph: {
        title: 'AI Chatbot for Cleaning | Automate Quotes & Booking',
        description: 'Elite AI automation for cleaning businesses.',
        url: 'https://www.andinnovatech.com/services/ai-chatbot-cleaning/',
        images: [{ url: 'https://www.andinnovatech.com/images/check_ai_automation.png' }],
    }

};

const cleaningBenefits = [
    {
        icon: Sparkles,
        title: 'Instant Quote Calculator',
        desc: 'Our AI asks about square footage, number of rooms, and cleaning frequency to provide a ballpark estimate instantly.',
    },
    {
        icon: Clock,
        title: 'Automated Scheduling',
        desc: 'Integration with Launch27 and ZenMaid allows customers to book one-time or recurring service directly from the chat.',
    },
    {
        icon: DollarSign,
        title: 'Up-Sell Features',
        desc: 'The backend logic automatically suggests add-ons like window cleaning or deep cleaning for every booking.',
    },
];

const featuresList = [
    '24/7 Residential & Commercial Quotes',
    'Recurring Service Scheduling',
    'Square Footage & Bedroom Estimator',
    'Launch27 & ZenMaid Friendly',
    'Automated Multi-Channel Follow-up',
    'Multilingual Support (English/Spanish)',
];

export default function CleaningAiChatbotPage() {
    return (
        <div className="overflow-x-hidden bg-white dark:bg-navy text-navy dark:text-white">
            <Hero
                title={<>AI Growth Assistant for <span className="gradient-text">Cleaning Companies</span></>}
                subtitle="Book more cleans while you're in the field. Our specialized AI chatbot provides instant quotes, qualifies commercial contracts, and schedules residential jobs on autopilot."
                badgeText="✨ Precision for Cleaning"
                ctaText="See My Cleaning AI"
                ctaHref="/contact"
                showStats={false}
                category="software"
            />

            <section className="section-padding bg-white dark:bg-navy">
                <div className="section-container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="bg-navy p-10 md:p-14 rounded-[4rem] border border-white/10 shadow-glow-primary relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-[120px] -z-10" />
                                <h3 className="text-3xl font-bold text-white mb-6">Scale Your Bookings</h3>
                                <p className="text-slate-400 mb-10 text-lg">Don&apos;t wait for your office manager to get back in. Give your customers the instant satisfaction of a booked clean.</p>
                                <ContactForm />
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <Badge className="mb-4 bg-primary/10 text-primary border-none font-bold uppercase tracking-[0.2em]">Cleaning Automation</Badge>
                            <h2 className="text-4xl md:text-5xl font-bold text-navy dark:text-white mb-8 leading-tight tracking-tighter">
                                Win the Race for <span className="text-primary">Instant Quotes</span>
                            </h2>

                            <script
                                type="application/ld+json"
                                dangerouslySetInnerHTML={{
                                    __html: JSON.stringify({
                                        '@context': 'https://schema.org',
                                        '@type': 'Service',
                                        name: 'AI Chatbot for Cleaning Businesses',
                                        serviceType: 'AI Booking Software',
                                        provider: {
                                            '@type': 'Organization',
                                            name: 'AnD Innovatech',
                                            url: 'https://www.andinnovatech.com',
                                        },
                                        description: 'AI-powered chatbot for residential and commercial cleaning companies. Handles quoting and scheduling automation.',
                                        areaServed: 'US',
                                        category: 'Cleaning Business Tech'
                                    }),
                                }}
                            />

                            <div className="prose prose-lg dark:prose-invert text-grey dark:text-slate-400 mb-12">
                                <p>
                                    Modern homeowners expect instant communication. If they have to wait 2 hours for a callback, they&apos;ve already moved on to the next cleaning company on Google.
                                </p>
                                <p>
                                    <strong>AnD AI for Cleaning</strong> bridges the gap. It asks the right questions: *"Is this a deep clean?"*, *"Do you have pets?"*, *"How many bedrooms?"* and provides a quote immediately, capturing the lead before the competition even sees the email.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                                {featuresList.map((item) => (
                                    <div key={item} className="flex items-center space-x-3 bg-slate-50 dark:bg-white/5 p-4 rounded-2xl border border-slate-100 dark:border-white/10 group hover:border-primary/50 transition-colors">
                                        <div className="w-2 h-2 rounded-full bg-primary" />
                                        <span className="text-navy dark:text-slate-300 font-bold text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <Link href="/contact">
                                <Button size="lg" className="bg-primary text-white hover:bg-primary-600 px-10 py-6 rounded-full font-black tracking-tight">
                                    Start My Free Trial →
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-slate-50 dark:bg-navy relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 rounded-full blur-[150px] -z-10" />
                <div className="section-container">
                    <SectionHeading
                        title="Specialized for Cleaning Workflows"
                        subtitle="We built our AI to understand the specific complexities of house cleaning and commercial janitorial sales."
                    />
                    <div className="grid md:grid-cols-3 gap-8 mt-16">
                        {cleaningBenefits.map((item, i) => (
                            <div key={i} className="bg-white dark:bg-slate-800 p-12 rounded-[3.5rem] border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-glow-primary transition-all group">
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all">
                                    <item.icon size={30} />
                                </div>
                                <h3 className="text-2xl font-bold text-navy dark:text-white mb-4 tracking-tight">{item.title}</h3>
                                <p className="text-grey dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <RelatedServices currentService="AI Chatbot for Cleaning" />
        </div>
    );
}
