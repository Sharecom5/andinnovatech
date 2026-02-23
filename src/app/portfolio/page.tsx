import { Metadata } from 'next';
import Image from 'next/image';
import Hero from '@/components/sections/Hero';
import { ExternalLink, Layout, Smartphone, Search, Code2, ArrowRight, Layers, Globe, BarChart } from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import SectionHeading from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
    title: 'Our Portfolio | AnD Innovatech',
    description: 'Explore our successful projects across web development, software engineering, and SEO. See how we have helped businesses grow and innovate.',
};

const projects = [
    {
        name: 'Ramganga Organization',
        category: 'Non-Profit',
        type: 'Website Development',
        icon: Globe,
        image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&h=500&auto=format&fit=crop',
        description: 'A comprehensive digital platform for a non-profit organization focused on social impact and community service.',
        slug: 'ramganga-organization'
    },
    {
        name: 'Sevya Artisan',
        category: 'E-commerce',
        type: 'Online Store',
        icon: Smartphone,
        image: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?q=80&w=800&h=500&auto=format&fit=crop',
        description: 'A beautiful e-commerce experience for fair-trade artisan products, connecting traditional crafts with global markets.',
        slug: 'sevya-artisan'
    },
    {
        name: 'KDB School',
        category: 'Education',
        type: 'Educational Portal',
        icon: Layers,
        image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&h=500&auto=format&fit=crop',
        description: 'A dynamic school management system and portal designed for seamless interaction between students, parents, and teachers.',
        slug: 'kdb-school'
    },
    {
        name: 'Renewable Mirror',
        category: 'Energy',
        type: 'News Portal',
        icon: Search,
        image: 'https://images.unsplash.com/photo-1466611653911-95282fc3656b?q=80&w=800&h=500&auto=format&fit=crop',
        description: 'A data-intensive news and information portal dedicated to renewable energy and sustainable development.',
        slug: 'renewable-mirror'
    },
    {
        name: 'ETES Events',
        category: 'Events',
        type: 'Management Tool',
        icon: Layout,
        image: 'https://images.unsplash.com/photo-1505373676834-393297a701d3?q=80&w=800&h=500&auto=format&fit=crop',
        description: 'An interactive website for event planning and exhibition services, showcasing complex event structures and bookings.',
        slug: 'etes-events'
    },
    {
        name: 'Construction Mirror',
        category: 'B2B',
        type: 'B2B Portal',
        icon: BarChart,
        image: 'https://images.unsplash.com/photo-1503387762-592dee58c460?q=80&w=800&h=500&auto=format&fit=crop',
        description: 'A professional B2B platform for the construction industry, featuring material listing and project showcase.',
        slug: 'construction-mirror'
    },
    {
        name: 'Taction Soft',
        category: 'SaaS',
        type: 'Corporate Site',
        icon: Code2,
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&h=500&auto=format&fit=crop',
        description: 'A modern corporate website for a software services company, highlighting their technical expertise and service offerings.',
        slug: 'taction-soft'
    },
    {
        name: 'Investor Key',
        category: 'Finance',
        type: 'FinTech App',
        icon: Smartphone,
        image: 'https://images.unsplash.com/photo-1611974714851-eb6051612413?q=80&w=800&h=500&auto=format&fit=crop',
        description: 'A user-friendly financial portal providing insights and tools for investors to track markets and manage portfolios.',
        slug: 'investor-key'
    },
    {
        name: 'SG Lifestyle',
        category: 'Retail',
        type: 'Branding Site',
        icon: Layout,
        image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=800&h=500&auto=format&fit=crop',
        description: 'An elegant lifestyle brand website focusing on high-end consumer products and luxury storytelling.',
        slug: 'sg-lifestyle'
    }
];

export default function Portfolio() {
    return (
        <div className="overflow-x-hidden bg-white dark:bg-navy">
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
                                        src={project.image || 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&h=500&auto=format&fit=crop'}
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

                                    <p className="text-grey dark:text-slate-400 text-sm leading-relaxed mb-8 flex-1">
                                        {project.description}
                                    </p>

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
