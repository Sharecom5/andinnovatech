import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import ContactForm from '@/components/sections/ContactForm';
import { CheckCircle2, Layout, ArrowRight, Zap, Leaf, Camera, MapPin, Calendar } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import RelatedServices from '@/components/sections/RelatedServices';

export const metadata: Metadata = {
    title: 'Website Development for Landscaping Companies | Stunning Design & SEO',
    description: 'Specialized web design for landscapers. Show off your portfolio with stunning galleries, rank for local landscaping keywords, and book more hardscape projects.',
    openGraph: {
        title: 'Website Development for Landscaping Companies | Stunning Design & SEO',
        description: 'Elite web development for landscaping contractors.',
        url: 'https://www.andinnovatech.com/services/website-development-landscaping/',
        images: [{ url: 'https://www.andinnovatech.com/images/dev_abstract.png' }],
    }
};

const landscaperWebBenefits = [
    {
        icon: Camera,
        title: 'Visual Portfolio Bliss',
        desc: 'High-speed image galleries that showcase your hardscape and maintenance work without slowing down your site load times.',
    },
    {
        icon: MapPin,
        title: 'Service Area Targeting',
        desc: 'Built-in SEO for specific neighborhoods and suburbs, ensuring you rank where your most profitable jobs are located.',
    },
    {
        icon: Leaf,
        title: 'Seasonal Conversion',
        desc: 'Dynamic banners that rotate based on the season—from spring mulching to winter snow removal.',
    },
];

const checklistItems = [
    'Stunning Before/After Galleries',
    'Neighborhood-Specific SEO',
    'Mobile-Ready Request Forms',
    'Google Business Profile Integration',
    'Lightning Fast Next.js Tech',
    'Custom High-Ticket Project Pages',
];

export default function LandscapingWebDevPage() {
    return (
        <div className="overflow-x-hidden bg-white dark:bg-navy text-navy dark:text-white">
            <Hero
                title={<>Premium Websites for <span className="gradient-text">Landscaping Contractors</span></>}
                subtitle="Your work is beautiful—your website should be too. We build high-conversion websites for landscapers that turn 'just looking' into 'get a quote'."
                badgeText="🌿 Optimized for Landscaping"
                ctaText="Start Your Landscape Design"
                ctaHref="/contact"
                showStats={true}
                category="software"
            />

            <section className="section-padding bg-white dark:bg-navy">
                <div className="section-container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <Badge className="mb-6 bg-green-500/10 text-green-600 dark:text-green-400 border-none font-bold uppercase tracking-[0.2em]">Landscaping Growth</Badge>
                            <h2 className="text-4xl md:text-6xl font-extrabold text-navy dark:text-white mb-8 leading-none tracking-tighter">
                                Showcase Your <span className="text-primary">Outdoor Masterpieces</span>
                            </h2>

                            <script
                                type="application/ld+json"
                                dangerouslySetInnerHTML={{
                                    __html: JSON.stringify({
                                        '@context': 'https://schema.org',
                                        '@type': 'Service',
                                        name: 'Website Development for Landscaping Companies',
                                        serviceType: 'Web Development',
                                        provider: {
                                            '@type': 'Organization',
                                            name: 'AnD Innovatech',
                                            url: 'https://www.andinnovatech.com',
                                        },
                                        description: 'Custom high-performance web development for landscaping and hardscaping contractors. Focused on visual portfolios and local SEO.',
                                        areaServed: 'US',
                                        category: 'Landscaping Marketing'
                                    }),
                                }}
                            />

                            <div className="prose prose-lg dark:prose-invert text-grey dark:text-slate-400 mb-12 leading-relaxed">
                                <p>
                                    In landscaping, people buy with their eyes. A generic, slow website with low-quality photos will kill your high-ticket hardscaping sales.
                                </p>
                                <p>
                                    <strong>AnD Innovatech</strong> specializes in building high-definition, lightning-fast websites for landscaping pros. We combine elite-level engineering with high-end design to ensure your portfolio looks as good online as it does in person. Plus, our built-in SEO ensures you're found for "Landscaping near me" exactly when it counts.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                                {checklistItems.map((item) => (
                                    <div key={item} className="p-4 bg-slate-50 dark:bg-white/5 rounded-2xl flex items-center space-x-3 border border-slate-100 dark:border-white/10">
                                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                            <CheckCircle2 size={16} />
                                        </div>
                                        <span className="text-sm font-bold text-navy dark:text-slate-300">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <Link href="/contact">
                                <Button size="lg" className="bg-primary text-white hover:bg-primary-600 px-12 py-8 rounded-full font-black text-xl shadow-glow">
                                    I Want a Custom Quote →
                                </Button>
                            </Link>
                        </div>

                        <div className="relative">
                            <div className="bg-navy p-10 md:p-14 rounded-[4rem] border border-white/10 shadow-glow-primary relative overflow-hidden backdrop-blur-3xl">
                                <div className="absolute top-0 right-0 w-full h-full bg-green-500/5 -z-10" />
                                <h3 className="text-3xl font-bold text-white mb-6">Let&apos;s Build Your Brand</h3>
                                <p className="text-slate-400 mb-10 text-lg">Send us a brief description of your services and service areas. We&apos;ll build a custom plan to help you dominate your local market.</p>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-slate-50 dark:bg-navy/80">
                <div className="section-container">
                    <SectionHeading
                        title="Seasons Change. Your Leads Shouldn&apos;t."
                        subtitle="Built with the flexibility to scale your message through spring planting, summer maintenance, and fall cleanups."
                    />
                    <div className="grid md:grid-cols-3 gap-10 mt-16">
                        {landscaperWebBenefits.map((item, i) => (
                            <div key={i} className="bg-white dark:bg-slate-800 p-12 rounded-[3.5rem] border border-slate-100 dark:border-white/5 hover:scale-105 transition-all duration-500">
                                <div className="w-20 h-20 rounded-3xl bg-green-500/10 flex items-center justify-center text-green-600 dark:text-green-400 mx-auto mb-8 shadow-inner">
                                    <item.icon size={36} />
                                </div>
                                <h3 className="text-2xl font-bold text-navy dark:text-white mb-4 tracking-tight leading-tight">{item.title}</h3>
                                <p className="text-grey dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <RelatedServices currentService="Web Dev for Landscaping" />
        </div>
    );
}
