import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import ContactForm from '@/components/sections/ContactForm';
import { CheckCircle2, PhoneIncoming, ArrowRight, Zap, Shield, Home, Mic, Bot } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import RelatedServices from '@/components/sections/RelatedServices';

export const metadata: Metadata = {
    title: 'AI Voice Bot for Roofing | Never Miss Storm Leads',
    description: 'Specialized AI Voice Agent for Roofers. Handle emergency storm damage calls, book inspections, and qualify insurance claims automatically—24/7/365.',
        alternates: {
        canonical: 'https://www.andinnovatech.com/services/ai-voice-bot-roofing/',
    },
    openGraph: {
        title: 'AI Voice Bot for Roofing | Never Miss Storm Leads',
        description: 'Elite AI voice automation for roofing contractors.',
        url: 'https://www.andinnovatech.com/services/ai-voice-bot-roofing/',
        images: [{ url: 'https://www.andinnovatech.com/images/check_ai_automation.png' }],
    }

};

const roofingBenefits = [
    {
        icon: Mic,
        title: 'Human-Like Conversations',
        desc: 'Our AI voice bots use advanced LLMs to speak naturally with homeowners, understanding roofing terminology and urgency.',
    },
    {
        icon: Shield,
        title: 'Insurance Claim Filter',
        desc: 'The bot can ask initial qualifying questions about the age of the roof and the type of damage for insurance readiness.',
    },
    {
        icon: Bot,
        title: 'Instant CRM Entry',
        desc: 'Every call is transcribed and saved directly into Jobber or AccuLynx so you can follow up with a professional quote.',
    },
];

const featuresList = [
    '24/7 Phone Call Answering',
    'Automatic Storm Damage Triage',
    'Free Inspection Booking',
    'Human-to-AI Call Handoff',
    'Multilingual Capability',
    'Jobber & AccuLynx Integration',
];

export default function RoofingAiVoiceBotPage() {
    return (
        <div className="overflow-x-hidden bg-white dark:bg-navy text-navy dark:text-white">
            <Hero
                title={<>AI Voice Receptionist for <span className="gradient-text">Roofing Contractors</span></>}
                subtitle="Your next storm damage lead shouldn't go to voicemail. Our AI Voice Bot answers every call, qualifies the homeowner, and books inspections on your calendar instantly."
                badgeText="🏠 Built for Roofing"
                ctaText="Listen to a Demo Call"
                ctaHref="/contact"
                showStats={false}
                category="software"
            />

            <section className="section-padding bg-white dark:bg-navy">
                <div className="section-container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <Badge className="mb-6 bg-primary/10 text-primary border-none font-bold uppercase tracking-[0.2em]">Roofing Automation</Badge>
                            <h2 className="text-4xl md:text-6xl font-extrabold text-navy dark:text-white mb-8 leading-none tracking-tighter">
                                The AI That <span className="text-primary">Closes Roofing Leads</span> While You Sleep
                            </h2>

                            <script
                                type="application/ld+json"
                                dangerouslySetInnerHTML={{
                                    __html: JSON.stringify({
                                        '@context': 'https://schema.org',
                                        '@type': 'Service',
                                        name: 'AI Voice Bot for Roofing Companies',
                                        serviceType: 'AI Phone Automation',
                                        provider: {
                                            '@type': 'Organization',
                                            name: 'AnD Innovatech',
                                            url: 'https://www.andinnovatech.com',
                                        },
                                        description: 'AI-powered voice receptionist for roofing contractors. Specialized in storm damage triage and inspection booking.',
                                        areaServed: 'US',
                                        category: 'Roofing Technology'
                                    }),
                                }}
                            />

                            <div className="prose prose-lg dark:prose-invert text-grey dark:text-slate-400 mb-12 leading-relaxed">
                                <p>
                                    After a big storm, your phone rings non-stop. If you miss those calls, you lose thousands in revenue. But you can&apos;t be on the phone and on the roof at the same time.
                                </p>
                                <p>
                                    <strong>AnD AI Voice for Roofers</strong> is your new 24/7 receptionist. It doesn&apos;t just take messages; it has a conversation. It asks about leak locations, roof age, and insurance status, then books an inspection on your calendar. It&apos;s the ultimate fail-safe for storm chasers and local roofers alike.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                                {featuresList.map((item) => (
                                    <div key={item} className="flex items-start space-x-4">
                                        <div className="p-1 rounded-full bg-green-500/10 text-green-500">
                                            <CheckCircle2 size={18} />
                                        </div>
                                        <span className="text-navy dark:text-slate-200 font-bold text-sm leading-tight">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <Link href="/contact">
                                <Button size="lg" className="bg-primary text-white hover:bg-primary-600 px-12 py-8 rounded-full font-black text-lg shadow-glow-primary">
                                    Claim Your ROI Audit →
                                </Button>
                            </Link>
                        </div>

                        <div className="relative">
                            <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl -z-10" />
                            <div className="bg-slate-900 p-12 rounded-[4rem] border border-white/5 shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-primary/10 to-transparent" />
                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary-400 animate-pulse">
                                            <Mic size={24} />
                                        </div>
                                        <div className="text-white font-bold tracking-tight">AI Agent Listening...</div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-6">Request a Voice Demo</h3>
                                    <p className="text-slate-400 mb-8">See how our roofing-specialized AI handles a simulated storm damage call. We&apos;ll set up a custom instance for your business.</p>
                                    <ContactForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-slate-50 dark:bg-navy">
                <div className="section-container">
                    <SectionHeading
                        title="Engineered for High-Ticket Roofing"
                        subtitle="We don&apos;t just build bots; we build growth systems for the roofing industry."
                    />
                    <div className="grid md:grid-cols-3 gap-10 mt-16">
                        {roofingBenefits.map((item, i) => (
                            <div key={i} className="bg-white dark:bg-slate-800/50 p-12 rounded-[3.5rem] border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-2xl transition-all">
                                <div className="w-20 h-20 rounded-3xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mx-auto mb-8">
                                    <item.icon size={40} />
                                </div>
                                <h3 className="text-2xl font-bold text-navy dark:text-white mb-4">{item.title}</h3>
                                <p className="text-grey dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <RelatedServices currentService="AI Voice Bot for Roofing" />
        </div>
    );
}
