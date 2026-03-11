import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import ContactForm from '@/components/sections/ContactForm';
import { CheckCircle2, Zap, ArrowRight, MessageSquare, Clock, BarChart3, Database } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import RelatedServices from '@/components/sections/RelatedServices';

export const metadata: Metadata = {
    title: 'AI Lead Follow-up Automation | Close More Service Leads Fast',
    description: 'Don\'t let another lead go cold. Our AI Lead Growth platform ensures 5-minute response times, automated SMS nurturing, and seamless CRM syncing for local businesses.',
};

const automationBenefits = [
    {
        icon: Clock,
        title: 'The 5-Minute Rule',
        desc: 'Leads are 21x more likely to convert if contacted within 5 minutes. Our AI ensures every lead gets a personal SMS reply instantly.',
    },
    {
        icon: Database,
        title: 'Multi-Channel Nurturing',
        desc: 'We follow up across SMS, Email, and WhatsApp until the lead either books a service or tells us to stop.',
    },
    {
        icon: BarChart3,
        title: 'Lead ROI Tracking',
        desc: 'See exactly which leads closed and which ones are still in the pipeline with our integrated growth dashboard.',
    },
];

const checklistItems = [
    'Instant SMS Lead Response',
    'Automated Email Nurture Flows',
    'WhatsApp Business Automation',
    'Cold Lead Re-engagement',
    'Real-time CRM Sync (Jobber/Titan)',
    'AI Appointment Reminders',
];

export default function LeadAutomationPage() {
    return (
        <div className="overflow-x-hidden bg-white dark:bg-navy text-navy dark:text-white">
            <Hero
                title={<>AI Lead Follow-up & <span className="gradient-text">Growth Automation</span></>}
                subtitle="Stop burning your marketing budget. We help local service businesses recapture the 60% of leads that usually go cold due to slow follow-ups."
                badgeText="⚡ Speed to Lead"
                ctaText="Start Scaling Now"
                ctaHref="/contact"
                showStats={true}
                category="software"
            />

            <section className="section-padding bg-white dark:bg-navy">
                <div className="section-container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <Badge className="mb-4 bg-primary/10 text-primary border-none font-bold uppercase tracking-widest">Growth Engineering</Badge>
                            <h2 className="text-4xl md:text-5xl font-bold text-navy dark:text-white mb-8 leading-tight tracking-tighter">
                                A Human-Like Follow-up <span className="text-primary">Without the Human Price Tag</span>
                            </h2>

                            <script
                                type="application/ld+json"
                                dangerouslySetInnerHTML={{
                                    __html: JSON.stringify({
                                        '@context': 'https://schema.org',
                                        '@type': 'Service',
                                        name: 'AI Lead Follow-up Automation',
                                        serviceType: 'Marketing Automation',
                                        provider: {
                                            '@type': 'Organization',
                                            name: 'AnD Innovatech',
                                            url: 'https://www.andinnovatech.com',
                                        },
                                        description: 'AI-driven lead nurturing and follow-up automation for HVAC, plumbing, and restoration companies. Specializes in speed-to-lead.',
                                        areaServed: 'US',
                                        category: 'Sales Automation'
                                    }),
                                }}
                            />

                            <div className="prose prose-lg dark:prose-invert text-grey dark:text-slate-400 mb-12">
                                <p>
                                    You spend thousands on Google Ads and SEO to get people to your site. But if you don't call them back within minutes, they've already called your competitor.
                                </p>
                                <p>
                                    <strong>AnD AI Lead Follow-up</strong> is the "secret sauce" for high-growth service companies. Our AI acts like a 24/7 sales assistant, engaging leads immediately via SMS, qualifying their needs, and ensuring they stay "warm" until you can give them a quote.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                                {checklistItems.map((item) => (
                                    <div key={item} className="flex items-center space-x-3 bg-slate-50 dark:bg-white/5 p-4 rounded-xl border border-slate-100 dark:border-white/10">
                                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                                        <span className="text-navy dark:text-slate-200 font-bold text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <Link href="/contact">
                                <Button size="lg" className="bg-primary text-white hover:bg-primary-600 px-10 py-6 rounded-full font-black">
                                    I Want More Bookings →
                                </Button>
                            </Link>
                        </div>

                        <div className="relative group">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 rounded-full blur-[120px] -z-10 group-hover:bg-primary/20 transition-all duration-700" />
                            <div className="bg-navy p-10 md:p-14 rounded-[4rem] border border-white/10 shadow-glow-primary relative overflow-hidden backdrop-blur-xl">
                                <div className="flex items-center gap-4 mb-10">
                                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary-400">
                                        <Zap size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">Lead Capture Demo</h3>
                                </div>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-slate-50 dark:bg-navy/80">
                <div className="section-container">
                    <SectionHeading
                        title="The Compound Interest of Lead Follow-up"
                        subtitle="Improving your response time from 1 hour to 5 minutes can triple your booked revenue without spending an extra dime on ads."
                    />
                    <div className="grid md:grid-cols-3 gap-8 mt-16">
                        {automationBenefits.map((item, i) => (
                            <div key={i} className="bg-white dark:bg-slate-800 p-12 rounded-[3rem] border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-2xl transition-all">
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-8">
                                    <item.icon size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-navy dark:text-white mb-4 tracking-tight">{item.title}</h3>
                                <p className="text-grey dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <RelatedServices currentService="AI Lead Automation" />
        </div>
    );
}
