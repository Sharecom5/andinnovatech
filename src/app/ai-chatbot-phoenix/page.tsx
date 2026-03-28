import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import ContactForm from '@/components/sections/ContactForm';
import { CheckCircle2, Bot, ArrowRight, Zap, Target, Gauge, Shield, MessageSquare, PhoneCall, Clock, BarChart3, Sun } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Top AI Chatbot Services for Businesses in Phoenix',
    description: 'Looking for a Phoenix AI chatbot partner? We build intelligent, lead-generating chatbots for Phoenix businesses. Automate customer service and book more jobs 24/7.',
        alternates: {
        canonical: 'https://www.andinnovatech.com/ai-chatbot-phoenix/',
    },
    openGraph: {
        title: 'Top AI Chatbot Services for Businesses in Phoenix',
        description: 'Elite AI automation for Phoenix companies.',
        url: 'https://www.andinnovatech.com/ai-chatbot-phoenix/',
        images: [{ url: 'https://www.andinnovatech.com/images/check_ai_automation.png' }],
    }

};

const phoenixAiFeatures = [
    {
        icon: Sun,
        title: 'Always Available (24/7)',
        desc: 'In Phoenix\'s booming service economy, customers want answers now. Our AI chatbots respond instantly, even on weekends and holidays.',
    },
    {
        icon: Bot,
        title: 'Lead Qualification',
        desc: 'Our bots don\'t just talk; they sell. They qualify Phoenix leads, gather essential project details, and push high-value prospects to your CRM.',
    },
    {
        icon: BarChart3,
        title: 'Zero Latency Response',
        desc: 'Eliminate the "speed-to-lead" gap. Every website visitor gets an immediate, personalized engagement that keeps them off your competitor\'s site.',
    },
];

export default function PhoenixBusinessAiChatbot() {
    return (
        <div className="overflow-x-hidden bg-white dark:bg-navy text-navy dark:text-white">
            <Hero
                title={<>Intelligent AI Chatbot Services for <span className="gradient-text">Businesses in Phoenix</span></>}
                subtitle="Stop missing leads when your office is closed. We build custom AI chatbots for Phoenix companies that capture, qualify, and book clients 24/7/365."
                badgeText="🌵 Phoenix AI Leaders"
                ctaText="See a Live Bot Demo"
                ctaHref="/contact"
                showStats={true}
                category="software"
            />

            <section className="section-padding bg-white dark:bg-navy">
                <div className="section-container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="relative order-2 lg:order-1">
                            <div className="absolute -inset-4 bg-primary/20 rounded-[4rem] blur-2xl opacity-40 -z-10" />
                            <div className="bg-navy p-10 md:p-14 rounded-[4rem] border border-white/10 shadow-3xl relative overflow-hidden backdrop-blur-3xl">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-3 rounded-2xl bg-primary/20 text-primary">
                                        <Bot size={28} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">Phoenix Lead Audit</h3>
                                </div>
                                <p className="text-slate-400 mb-8">We&apos;ll audit your current lead response time and build a custom AI chatbot roadmap for your Phoenix business.</p>
                                <ContactForm />
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <Badge className="mb-6 bg-primary/10 text-primary border-none font-bold uppercase tracking-widest">Phoenix Market Growth</Badge>
                            <h2 className="text-4xl md:text-6xl font-extrabold text-navy dark:text-white mb-8 leading-none tracking-tighter">
                                Scale Better with <span className="text-primary">Phone & Chat AI.</span>
                            </h2>

                            <div className="prose prose-lg dark:prose-invert text-grey dark:text-slate-400 mb-12">
                                <p>
                                    Phoenix is one of the fastest-growing metros in the US. If you&apos;re still relying on manual lead intake, you&apos;re falling behind. Your customers are online at midnight, lunch, and early morning—they won&apos;t wait for you to open at 8 AM.
                                </p>
                                <p>
                                    <strong>AnD Innovatech</strong> helps Phoenix businesses dominate their niche by deploying sophisticated, human-like AI chatbots. Our bots are trained on your specific business data, ensuring they provide accurate answers, build trust, and drive high-intent leads directly into your sales pipeline.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                {[
                                    '24/7 Intelligent Lead Capture',
                                    'ServiceTitan & Jobber Sync',
                                    'Multi-Language Phoenix Support',
                                    'Advanced Logic Frameworks',
                                    'Real-Time Lead Notifications',
                                    'Seamless Human Handoff'
                                ].map((item) => (
                                    <div key={item} className="p-4 bg-slate-50 dark:bg-white/5 rounded-2xl flex items-center space-x-3 border border-slate-100 dark:border-white/10">
                                        <Zap size={14} className="text-primary" />
                                        <span className="text-sm font-bold">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <Link href="/contact">
                                <Button size="lg" className="bg-primary text-white hover:bg-primary-600 px-12 py-8 rounded-full font-black text-xl shadow-glow-primary">
                                    I Want More Bookings →
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-slate-50 dark:bg-navy/50">
                <div className="section-container">
                    <SectionHeading
                        title="Phoenix AI That Actually Pruned"
                        subtitle="We engineer solutions that solve real business problems, not just cool tech."
                    />
                    <div className="grid md:grid-cols-3 gap-10 mt-16">
                        {phoenixAiFeatures.map((item, i) => (
                            <div key={i} className="bg-white dark:bg-slate-800 p-12 rounded-[3.5rem] border border-slate-100 dark:border-white/5 hover:translate-y-[-10px] transition-all">
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-8">
                                    <item.icon size={32} />
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
