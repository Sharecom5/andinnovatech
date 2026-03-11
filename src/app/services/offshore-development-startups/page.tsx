import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import ContactForm from '@/components/sections/ContactForm';
import { CheckCircle2, Code2, ArrowRight, Zap, Target, Gauge, Shield, Users, DollarSign } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import RelatedServices from '@/components/sections/RelatedServices';

export const metadata: Metadata = {
    title: 'Affordable Offshore Web Development for US Startups | Save 60%',
    description: 'Get senior-level engineering at offshore rates. We help US startups build MVPs, scalable SaaS platforms, and enterprise websites with a focus on speed, quality, and cost.',
};

const offshoreBenefits = [
    {
        icon: DollarSign,
        title: '60% Cost Reduction',
        desc: 'Access senior full-stack engineers for a fraction of the cost of a local US agency, without sacrificing code quality or communication.',
    },
    {
        icon: Users,
        title: 'Dedicated Squads',
        desc: 'We don\'t just assign hours; we assign a dedicated team that learns your product, culture, and long-term vision.',
    },
    {
        icon: Shield,
        title: 'US-Managed Strategy',
        desc: 'Our strategy and project management teams are US-based or US-trained, ensuring perfect alignment with your business goals.',
    },
];

const checklistItems = [
    'Senior Full-Stack Engineers',
    'MVP Development in 4-6 Weeks',
    'Scalable SaaS Architecture',
    'Perfect English Communication',
    'Fixed-Price or Monthly Retainers',
    'IP Protection & NDA Compliance',
];

export default function OffshoreDevStartupsPage() {
    return (
        <div className="overflow-x-hidden bg-white dark:bg-navy text-navy dark:text-white">
            <Hero
                title={<>Silicon Valley Quality at <span className="gradient-text">Offshore Rates</span></>}
                subtitle="Stop overpaying for engineering. We provide US startups with elite offshore development teams that build faster, scale further, and cost 60% less than local agencies."
                badgeText="🚢 Global Talent Hub"
                ctaText="Get a Fixed Quote"
                ctaHref="/contact"
                showStats={true}
                category="software"
            />

            <section className="section-padding bg-white dark:bg-navy">
                <div className="section-container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <Badge className="mb-4 bg-primary/10 text-primary border-none font-bold uppercase tracking-widest">Startup Engineering</Badge>
                            <h2 className="text-4xl md:text-6xl font-extrabold text-navy dark:text-white mb-8 leading-none tracking-tighter">
                                Scale Better. <span className="text-primary">Spend Smarter.</span>
                            </h2>

                            <script
                                type="application/ld+json"
                                dangerouslySetInnerHTML={{
                                    __html: JSON.stringify({
                                        '@context': 'https://schema.org',
                                        '@type': 'Service',
                                        name: 'Offshore Web Development for Startups',
                                        serviceType: 'Software Development',
                                        provider: {
                                            '@type': 'Organization',
                                            name: 'AnD Innovatech',
                                            url: 'https://www.andinnovatech.com',
                                        },
                                        description: 'High-quality offshore software development for US-based startups. Focused on MVP builds and SaaS scaling.',
                                        areaServed: 'Worldwide',
                                        category: 'Information Technology'
                                    }),
                                }}
                            />

                            <div className="prose prose-lg dark:prose-invert text-grey dark:text-slate-400 mb-12">
                                <p>
                                    Founding a startup is expensive. Most founders burn through their seed round just hiring 1-2 local developers.
                                </p>
                                <p>
                                    **AnD Innovatech** provides a better way. We've spent 7+ years building a global delivery model that gives US startups access to the top 1% of offshore engineering talent. Whether you need a React/Next.js MVP or a complex Node.js backend, we deliver enterprise-grade code that doesn't break the bank.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                                {checklistItems.map((item) => (
                                    <div key={item} className="flex items-center space-x-3 bg-slate-50 dark:bg-white/5 p-4 rounded-xl border border-slate-100 dark:border-white/10 group hover:border-primary transition-all">
                                        <Code2 size={18} className="text-primary" />
                                        <span className="text-navy dark:text-slate-200 font-bold text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <Link href="/contact">
                                <Button size="lg" className="bg-primary text-white hover:bg-primary-600 px-10 py-6 rounded-full font-black">
                                    Compare My Dev Costs →
                                </Button>
                            </Link>
                        </div>

                        <div className="lg:sticky lg:top-32 h-fit">
                            <div className="bg-navy p-10 md:p-14 rounded-[4rem] border border-white/10 shadow-glow-primary relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[120px] -z-10" />
                                <h3 className="text-3xl font-bold text-white mb-6">Request Your Team Profile</h3>
                                <p className="text-slate-400 mb-10 text-lg">Send us your job description or project brief. We&apos;ll provide a curated list of engineer profiles and a cost-saving estimate within 24 hours.</p>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-slate-50 dark:bg-navy/80">
                <div className="section-container">
                    <SectionHeading
                        title="The Offshore Advantage Done Right"
                        subtitle="Quality shouldn&apos;t be a trade-off for cost. We manage every line of code with US-grade standards."
                    />
                    <div className="grid md:grid-cols-3 gap-10 mt-16">
                        {offshoreBenefits.map((item, i) => (
                            <div key={i} className="bg-white dark:bg-slate-800 p-12 rounded-[4rem] border border-slate-100 dark:border-white/5 shadow-inner hover:shadow-2xl transition-all">
                                <div className="w-20 h-20 rounded-3xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mx-auto mb-8 transition-transform group-hover:rotate-12">
                                    <item.icon size={40} />
                                </div>
                                <h3 className="text-2xl font-bold text-navy dark:text-white mb-4 tracking-tight leading-tight">{item.title}</h3>
                                <p className="text-grey dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <RelatedServices currentService="Offshore Dev for Startups" />
        </div>
    );
}
