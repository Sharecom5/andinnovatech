import { Metadata } from 'next';
import Image from 'next/image';
import Hero from '@/components/sections/Hero';
import { ExternalLink, Layout, Smartphone, Search, Code2, ArrowRight, Layers, Globe, BarChart, Cloud } from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import SectionHeading from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
    title: 'Our Work: Case Studies in SEO and Software Engineering Success',
    description: 'See real results. From 314% organic traffic growth for local US service businesses to enterprise SaaS builds. Explore our portfolio of successes and book your own story.',
};

const projects = [
    {
        name: 'Ramganga Organization',
        category: 'Non-Profit',
        type: 'Website Development',
        icon: Globe,
        image: '/images/dev_abstract.png',
        description: 'Complete digital transformation for a high-impact non-profit, including automated donation workflows and member portals.',
        result: '100% Mobile Optimized & Secure',
        slug: 'ramganga-organization'
    },
    {
        name: 'ClearCare Health Portal',
        category: 'Healthcare',
        type: 'Medical SaaS',
        icon: Smartphone,
        image: '/images/dev_abstract.png',
        description: 'Custom patient scheduling and telemedicine platform built with React and HIPAA-compliant architecture.',
        result: '4,200+ Appointments Processed',
        slug: 'healthcare-app'
    },
    {
        name: 'GreenLeaf SEO Campaign',
        category: 'Retail',
        type: 'SEO Growth',
        icon: Search,
        image: '/images/portfolio_seo.png',
        description: 'Global organic search dominance strategy targeting high-intent commercial keywords for a US retail brand.',
        result: '314% Organic Traffic Growth',
        slug: 'seo-campaign'
    },
    {
        name: 'Stockwell E-commerce',
        category: 'Retail',
        type: 'Online Store',
        icon: Smartphone,
        image: '/images/dev_abstract.png',
        description: 'Headless e-commerce implementation using Shopify Plus and a custom Next.js frontend for maximum speed.',
        result: '2.5s Faster Load Time',
        slug: 'ecommerce-platform'
    },
    {
        name: 'TalentBridge SaaS',
        category: 'Enterprise',
        type: 'Custom Software',
        icon: Layout,
        image: '/images/portfolio_abstract.png',
        description: 'Full-stack resource management platform with real-time analytics and multi-tenant security layers.',
        result: '85% Efficiency Increase',
        slug: 'crm-system'
    },
    {
        name: 'Manufacturing Cloud',
        category: 'Infrastructure',
        type: 'Cloud Migration',
        icon: Cloud,
        image: '/images/portfolio_abstract.png',
        description: 'Comprehensive AWS migration for a legacy manufacturing backend, reducing technical debt and operational costs.',
        result: '40% Cost Savings on Hosting',
        slug: 'cloud-migration'
    }
];

export default function Portfolio() {
    return (
        <div className="overflow-x-hidden bg-white dark:bg-navy">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@graph': [
                            {
                                '@type': 'CollectionPage',
                                '@id': 'https://www.andinnovatech.com/portfolio/#webpage',
                                url: 'https://www.andinnovatech.com/portfolio/',
                                name: 'AnD Innovatech Portfolio | Case Studies',
                                description: 'Explore our track record of excellence in custom software and SEO.',
                                isPartOf: { '@id': 'https://www.andinnovatech.com/#website' },
                                breadcrumb: { '@id': 'https://www.andinnovatech.com/portfolio/#breadcrumb' }
                            },
                            {
                                '@type': 'BreadcrumbList',
                                '@id': 'https://www.andinnovatech.com/portfolio/#breadcrumb',
                                itemListElement: [
                                    {
                                        '@type': 'ListItem',
                                        position: 1,
                                        item: {
                                            '@id': 'https://www.andinnovatech.com/',
                                            name: 'Home'
                                        }
                                    },
                                    {
                                        '@type': 'ListItem',
                                        position: 2,
                                        item: {
                                            '@id': 'https://www.andinnovatech.com/portfolio/',
                                            name: 'Portfolio'
                                        }
                                    }
                                ]
                            }
                        ]
                    })
                }}
            />
            <Hero
                title={<>Showcasing Our <span className="gradient-text">Digital Craftsmanship</span></>}
                subtitle="From enterprise-grade software to high-conversion websites, we turn complex challenges into seamless digital experiences."
                badgeText="💼 Our Portfolio"
                ctaText="Work with Us"
                showStats={false}
            />

            <section className="section-padding relative">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10" />
                <div className="section-container">
                    <SectionHeading
                        title="Selected Case Studies"
                        subtitle="Explore how we have empowered businesses across 10+ industries with cutting-edge technology."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
                        {projects.map((project) => (
                            <div key={project.name} className="group bg-white dark:bg-slate-800 rounded-[2.5rem] border border-slate-100 dark:border-slate-700/50 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-3 flex flex-col">
                                <div className="relative h-64 overflow-hidden bg-slate-800">
                                    <Image
                                        src={project.image || '/images/portfolio_abstract.png'}
                                        alt={project.name}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent opacity-60" />

                                    <div className="absolute top-6 left-6 flex gap-2">
                                        <Badge className="bg-primary/90 text-white border-none shadow-lg backdrop-blur-md px-4 py-1.5 rounded-full font-bold uppercase tracking-widest text-[10px]">
                                            {project.category}
                                        </Badge>
                                    </div>

                                    <div className="absolute bottom-6 left-8">
                                        <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl flex items-center justify-center text-white border border-white/20 group-hover:border-primary/50 transition-colors shadow-xl">
                                            <project.icon size={28} />
                                        </div>
                                    </div>
                                </div>

                                <div className="p-10 flex-1 flex flex-col">
                                    <div className="mb-4">
                                        <h3 className="text-2xl font-bold text-navy dark:text-white mb-2 group-hover:text-primary transition-colors leading-tight">
                                            {project.name}
                                        </h3>
                                        <span className="text-primary-400 text-xs font-extrabold uppercase tracking-[0.2em]">
                                            {project.type}
                                        </span>
                                    </div>

                                    <p className="text-grey dark:text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                                        {project.description}
                                    </p>

                                    {project.result && (
                                        <div className="mb-8 p-4 rounded-xl bg-primary/5 border border-primary/10">
                                            <div className="text-[10px] text-primary font-black uppercase tracking-widest mb-1">Result</div>
                                            <div className="text-navy dark:text-white font-bold text-sm tracking-tight">{project.result}</div>
                                        </div>
                                    )}

                                    <div className="pt-6 border-t border-slate-50 dark:border-slate-700/50">
                                        <Link href={`/portfolio/${project.slug}`} className="inline-flex items-center gap-2 text-primary font-bold text-sm group/btn group-hover:gap-4 transition-all duration-300">
                                            View Case Study
                                            <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center transform group-hover/btn:rotate-[-45deg] transition-transform">
                                                <ArrowRight size={16} />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Collaborative Section */}
                    <div className="mt-16 md:mt-32 relative rounded-2xl md:rounded-[4rem] overflow-hidden bg-navy p-8 md:p-16 lg:p-24 text-center">
                        <div className="absolute inset-0 bg-gradient-mesh opacity-10" />
                        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-primary/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />

                        <div className="relative z-10 max-w-4xl mx-auto">
                            <Badge className="mb-6 bg-primary/20 text-primary-400 border-none font-bold uppercase tracking-[0.2em]">Partner with Us</Badge>
                            <h2 className="text-3xl md:text-4xl lg:text-6xl font-extrabold text-white mb-6 md:mb-8 tracking-tighter">
                                Let&apos;s Architect Your <span className="gradient-text">Success Story</span>
                            </h2>
                            <p className="text-slate-400 text-xl mb-12 leading-relaxed max-w-2xl mx-auto">
                                We&apos;ve helped market leaders and startups alike to achieve unparalleled growth. Your project could be our next spotlight.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <Link href="/contact">
                                    <Button size="lg" className="bg-primary hover:bg-primary-600 border-none text-white px-12 py-7 rounded-full text-xl shadow-glow-primary font-bold group">
                                        Start a Conversation <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
