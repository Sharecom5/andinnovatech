import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import ContactForm from '@/components/sections/ContactForm';
import { CheckCircle2, Bot, MessageSquare, PhoneCall, ArrowRight, Zap, Droplets, Calendar, Wrench } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import RelatedServices from '@/components/sections/RelatedServices';

export const metadata: Metadata = {
    title: 'AI Chatbot for Plumbers | Stop Losing Emergency Leads',
    description: 'Transform your plumbing business with an AI chatbot that answers emergency leak calls, schedules drain cleanings, and qualifies leads 24/7. Built for plumbing pros.',
    openGraph: {
        title: 'AI Chatbot for Plumbers | Stop Losing Emergency Leads',
        description: 'Elite AI automation for plumbing companies.',
        url: 'https://www.andinnovatech.com/services/ai-chatbot-plumbers/',
        images: [{ url: 'https://www.andinnovatech.com/images/check_ai_automation.png' }],
    }
};

const plumbingBenefits = [
    {
        icon: Droplets,
        title: 'Emergency Leak Dispatch',
        desc: 'Our AI identifies burst pipes or major leaks and escalates them immediately to your on-call plumbers.',
    },
    {
        icon: Calendar,
        title: 'Instant Scheduling',
        desc: 'Integration with Jobber, Housecall Pro, and ServiceTitan allows customers to book drain cleanings without a phone call.',
    },
    {
        icon: Wrench,
        title: 'Work Order Qualification',
        desc: 'The chatbot asks for the location of the leak, type of pipe, and urgency before sending the lead to your CRM.',
    },
];

const checklistItems = [
    '24/7 Emergency Plumbing Support',
    'Automated Drain Cleaning Bookings',
    'ServiceTitan & Jobber Integration',
    'SMS & WhatsApp Lead Capture',
    'Instant Plumbing Quote Prep',
    'Customized for Commercial & Residential',
];

export default function PlumbersAiChatbotPage() {
    return (
        <div className="overflow-x-hidden bg-white dark:bg-navy text-navy dark:text-white">
            <Hero
                title={<>AI Chatbot Solutions for <span className="gradient-text">Plumbing Professionals</span></>}
                subtitle="Stop losing emergency repair calls to competitors while you're under a sink. Our AI chatbot handles bookings, qualifies leaks, and answers customer questions 24/7."
                badgeText="🚰 Optimized for Plumbers"
                ctaText="Get Your Plumbing AI Demo"
                ctaHref="/contact"
                showStats={false}
                category="software"
            />

            <section className="section-padding bg-white dark:bg-navy">
                <div className="section-container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <Badge className="mb-4 bg-primary/10 text-primary border-none font-bold uppercase tracking-widest">Plumbing Automation</Badge>
                            <h2 className="text-4xl md:text-5xl font-bold text-navy dark:text-white mb-8 leading-[1.1] tracking-tighter">
                                Never Let an <span className="text-primary">Emergency Lead</span> Slip Away
                            </h2>

                            <script
                                type="application/ld+json"
                                dangerouslySetInnerHTML={{
                                    __html: JSON.stringify({
                                        '@context': 'https://schema.org',
                                        '@type': 'Service',
                                        name: 'AI Chatbot for Plumbers',
                                        serviceType: 'AI Automation',
                                        provider: {
                                            '@type': 'Organization',
                                            name: 'AnD Innovatech',
                                            url: 'https://www.andinnovatech.com',
                                        },
                                        description: 'Specialized AI chatbot for plumbing companies. Automates leak emergency capture and appointment scheduling.',
                                        areaServed: 'US',
                                        category: 'Plumbing Technology'
                                    }),
                                }}
                            />

                            <div className="prose prose-lg dark:prose-invert text-grey dark:text-slate-400 mb-12 max-w-none">
                                <p>
                                    In plumbing, the company that answers the phone first gets the emergency leak job. But when you&apos;re in the middle of a repiping project, you can&apos;t always pick up.
                                </p>
                                <p>
                                    <strong>AnD AI for Plumbers</strong> acts as your virtual dispatcher. It identifies the urgency (burst pipe vs. leaky faucet), gathers photos or details, and secures the booking before the customer calls the next plumber on Google.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                                {checklistItems.map((item) => (
                                    <div key={item} className="flex items-center space-x-3 bg-slate-50 dark:bg-white/5 p-4 rounded-2xl border border-slate-100 dark:border-white/10">
                                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                                        <span className="text-navy dark:text-slate-200 font-semibold text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <Link href="/contact">
                                <Button size="lg" className="bg-primary text-white hover:bg-primary-600 shadow-glow">
                                    Build My Plumbing Assistant →
                                </Button>
                            </Link>
                        </div>

                        <div className="relative">
                            <div className="bg-navy p-8 md:p-12 rounded-[3.5rem] border border-white/10 shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] opacity-40 group-hover:bg-primary/30 transition-all duration-700" />
                                <h3 className="text-3xl font-bold text-white mb-6">Plumbing-Specific Logic</h3>
                                <p className="text-slate-400 mb-10 leading-relaxed">Unlike generic bots, our system knows the difference between a minor drip and a slab leak emergency, ensuring high-value jobs are prioritized.</p>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-slate-50 dark:bg-navy/50">
                <div className="section-container">
                    <SectionHeading
                        title="Built for High-Production Plumbers"
                        subtitle="Why leading residential and commercial plumbing firms trust AnD AI."
                    />
                    <div className="grid md:grid-cols-3 gap-8 mt-16 text-center">
                        {plumbingBenefits.map((item, i) => (
                            <div key={i} className="bg-white dark:bg-slate-800/50 p-12 rounded-[3rem] border border-slate-100 dark:border-slate-700 hover:shadow-2xl hover:-translate-y-2 transition-all">
                                <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-8 shadow-inner">
                                    <item.icon size={36} />
                                </div>
                                <h3 className="text-2xl font-bold text-navy dark:text-white mb-4 tracking-tight">{item.title}</h3>
                                <p className="text-grey dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-navy relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-mesh opacity-5" />
                <div className="section-container relative z-10 text-center">
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tighter">
                        Ready to <span className="gradient-text">Automate Your Bookings?</span>
                    </h2>
                    <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                        Join the plumbing companies that never let a midnight leak call go unanswered.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link href="/contact">
                            <Button size="lg" className="bg-primary hover:bg-primary-600 border-none text-white px-12 py-8 rounded-full text-xl shadow-glow-primary">
                                Launch My Chatbot
                            </Button>
                        </Link>
                        <Link href="/pricing">
                            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-12 py-8 rounded-full text-xl backdrop-blur-sm">
                                View Packages
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <RelatedServices currentService="AI Chatbot for Plumbers" />
        </div>
    );
}
