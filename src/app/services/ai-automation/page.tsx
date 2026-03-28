import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import ContactForm from '@/components/sections/ContactForm';
import { CheckCircle2, Bot, MessageSquare, PhoneCall, ArrowRight, Zap, Star } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'AI Automation SaaS for Service Businesses',
    description: 'Transform your service business with AI Chatbots, Voice Agents, and Automation. Perfect for HVAC, Plumbing, Cleaning, and Roofing companies.',
    openGraph: {
        title: 'AI Automation SaaS for Service Businesses',
        description: 'Elite AI automation for local businesses.',
        url: 'https://www.andinnovatech.com/services/ai-automation/',
        images: [{ url: 'https://www.andinnovatech.com/images/check_ai_automation.png' }],
    },
    alternates: {
        canonical: 'https://www.andinnovatech.com/services/ai-automation/',
    }
};

const inclusions = [
    'AI Website Chatbot (Lead Capture)',
    'AI Sales Bot for WhatsApp/SMS',
    'AI Voice Bot (Call Handling)',
    'AI Review Management',
    'AI Lead Follow-up Automation',
    'CRM Dashboard Integration',
];

const highlights = [
    {
        icon: MessageSquare,
        title: 'Instant Lead Capture',
        desc: 'Never miss a website visitor again. Our AI chatbot answers questions and books appointments instantly, 24/7.',
    },
    {
        icon: PhoneCall,
        title: 'Missed Call Text Back',
        desc: 'When you miss a call, our AI instantly sends an SMS to qualify the lead and secure the job.',
    },
    {
        icon: Zap,
        title: 'Automated Follow-ups',
        desc: 'Stop chasing leads. Let AI automatically send polite, high-converting follow-up texts and emails.',
    },
];

const pricingPackages = [
    {
        name: 'Starter',
        price: '$29',
        period: '/month',
        features: ['AI Website Chatbot', 'Lead Capture Widget', 'Basic CRM Dashboard', 'Email Support'],
        popular: false,
    },
    {
        name: 'Growth',
        price: '$79',
        period: '/month',
        features: ['Everything in Starter', 'AI Sales Bot (SMS & WhatsApp)', 'Lead Qualification', 'Booking Automation'],
        popular: true,
    },
    {
        name: 'Pro',
        price: '$199',
        period: '/month',
        features: ['Everything in Growth', 'AI Voice Bot', 'Phone Call Answering', 'AI Review Management', 'Priority Support'],
        popular: false,
    }
];

import RelatedServices from '@/components/sections/RelatedServices';

export default function AIAutomationServices() {
    return (
        <div className="overflow-x-hidden bg-white dark:bg-navy text-navy dark:text-white">
            <Hero
                title={<>AI Growth Platform <span className="gradient-text">for Local Businesses</span></>}
                subtitle="Stop losing leads. Automate your customer service, bookings, and follow-ups with our powerful AI tools designed for Cleaning, HVAC, Plumbing, and Landscaping companies."
                badgeText="🚀 Next-Gen SaaS"
                ctaText="Start Free Trial"
                ctaHref="/contact"
                showStats={true}
                category="software"
            />

            <section className="section-padding bg-white dark:bg-navy">
                <div className="section-container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <Badge className="mb-4 bg-primary/10 text-primary border-none font-bold uppercase tracking-widest">AI Automation</Badge>
                            <h2 className="text-4xl md:text-5xl font-bold text-navy dark:text-white mb-8 leading-tight">
                                Turn Your Website Into a <span className="text-primary">24/7 Sales Agent</span>
                            </h2>
                            <script
                                type="application/ld+json"
                                dangerouslySetInnerHTML={{
                                    __html: JSON.stringify({
                                        '@context': 'https://schema.org',
                                        '@type': 'Service',
                                        name: 'AI Automation SaaS',
                                        serviceType: 'AI Software',
                                        provider: {
                                            '@type': 'Organization',
                                            name: 'AnD Innovatech',
                                        },
                                        description: 'AI-powered chatbots, voice agents, and lead automation for service businesses.',
                                        areaServed: 'US',
                                    }),
                                }}
                            />
                            <div className="prose prose-lg dark:prose-invert text-grey dark:text-slate-400 mb-12">
                                <p>
                                    Many local service businesses lose customers because no one replies instantly on their website or answers the phone fast enough.
                                </p>
                                <p>
                                    Our AI Growth Platform solves this completely. From an AI Chatbot that answers questions and books services, to an AI Voice Agent that handles phone calls like a human—we automate your growth.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                                {inclusions.map((item) => (
                                    <div key={item} className="flex items-center space-x-3 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                                        <span className="text-navy dark:text-slate-300 font-medium text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:sticky lg:top-32 h-fit">
                            <div className="bg-navy p-10 rounded-[3rem] border border-white/10 shadow-glow-primary relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] opacity-40" />
                                <h3 className="text-3xl font-bold text-white mb-4 relative z-10">See The AI In Action</h3>
                                <p className="text-slate-400 mb-10 relative z-10">Contact us today to get a free live demo of how our AI can handle your customer inquiries.</p>
                                <div className="relative z-10">
                                    <ContactForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section inline for the SaaS */}
            <section className="section-padding bg-slate-50 dark:bg-slate-900/50">
                <div className="section-container">
                    <SectionHeading
                        title="Flexible AI Pricing"
                        subtitle="Choose the perfect AI automation package for your service business."
                    />
                    <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
                        {pricingPackages.map((pkg, i) => (
                            <div key={i} className={`bg-white dark:bg-slate-800 p-8 rounded-3xl border ${pkg.popular ? 'border-primary shadow-glow-primary relative' : 'border-slate-100 dark:border-slate-700'}`}>
                                {pkg.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-primary text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                                        Most Popular
                                    </div>
                                )}
                                <h3 className="text-2xl font-bold text-navy dark:text-white mb-2">{pkg.name}</h3>
                                <div className="mb-6">
                                    <span className="text-4xl font-extrabold text-navy dark:text-white">{pkg.price}</span>
                                    <span className="text-grey dark:text-slate-400">{pkg.period}</span>
                                </div>
                                <ul className="space-y-4 mb-8">
                                    {pkg.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-slate-600 dark:text-slate-300 text-sm leading-tight">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Button className={`w-full ${pkg.popular ? 'bg-primary text-white hover:bg-primary-600' : 'bg-slate-100 text-navy hover:bg-slate-200 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600'}`}>
                                    Start Free Trial
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-white dark:bg-navy">
                <div className="section-container">
                    <SectionHeading
                        title="AI Technology Features"
                        subtitle="Built for the modern service business to scale efficiently."
                    />
                    <div className="grid md:grid-cols-3 gap-8 mt-16">
                        {highlights.map((item, i) => (
                            <div key={i} className="bg-slate-50 dark:bg-slate-800/50 p-10 rounded-3xl border border-slate-100 dark:border-slate-700 hover:shadow-2xl transition-all">
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8">
                                    <item.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-navy dark:text-white mb-4">{item.title}</h3>
                                <p className="text-grey dark:text-slate-400 text-sm leading-relaxed mb-6">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-navy relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[100px]" />
                <div className="section-container relative z-10 text-center">
                    <Badge className="mb-4 bg-primary/20 text-primary-400 border-none font-bold tracking-widest uppercase">AI Revolution</Badge>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tighter">
                        Don't Let Another <span className="gradient-text">Lead Go Cold.</span>
                    </h2>
                    <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                        Join the growing number of HVAC, Plumbing, Cleaning, and Roofing companies automating their operations with AI.
                    </p>
                    <Link href="/contact">
                        <Button size="lg" className="bg-primary hover:bg-primary-600 border-none text-white px-12 py-8 rounded-full text-xl shadow-glow">
                            Automate Your Business Today <ArrowRight className="ml-2" />
                        </Button>
                    </Link>
                </div>
            </section>

            <RelatedServices currentService="AI Automation SaaS" />
        </div>
    );
}
