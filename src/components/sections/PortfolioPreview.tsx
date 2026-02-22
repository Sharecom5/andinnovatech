'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

// Fallback portfolio data (used when WordPress API is unavailable)
const fallbackPortfolio = [
    {
        id: 1,
        slug: 'ecommerce-platform',
        title: 'E-Commerce Platform Redesign',
        category: 'Web Development',
        techStack: ['React', 'Node.js', 'MongoDB'],
        image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=800&h=500&auto=format&fit=crop',
    },
    {
        id: 2,
        slug: 'healthcare-app',
        title: 'Healthcare Management System',
        category: 'Software',
        techStack: ['Next.js', 'PostgreSQL', 'AWS'],
        image: 'https://images.unsplash.com/photo-1504813184591-01592fd03cfd?q=80&w=800&h=500&auto=format&fit=crop',
    },
    {
        id: 3,
        slug: 'seo-campaign',
        title: 'SEO Campaign — TechStartup',
        category: 'SEO',
        techStack: ['Analytics', 'Content Strategy', 'Link Building'],
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&h=500&auto=format&fit=crop',
    },
    {
        id: 4,
        slug: 'crm-system',
        title: 'Custom CRM Solution',
        category: 'Software',
        techStack: ['Vue.js', 'Laravel', 'MySQL'],
        image: 'https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=800&h=500&auto=format&fit=crop',
    },
    {
        id: 5,
        slug: 'cloud-migration',
        title: 'Enterprise Cloud Migration',
        category: 'IT Solutions',
        techStack: ['AWS', 'Docker', 'Kubernetes'],
        image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&h=500&auto=format&fit=crop',
    },
    {
        id: 6,
        slug: 'mobile-banking',
        title: 'Mobile Banking Application',
        category: 'Software',
        techStack: ['React Native', 'Firebase', 'Stripe'],
        image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=800&h=500&auto=format&fit=crop',
    },
];

export default function PortfolioPreview() {
    return (
        <section className="section-padding bg-navy relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />

            <div className="section-container relative z-10">
                <SectionHeading
                    title="Our Recent Work"
                    subtitle="Explore some of our latest projects that showcase our expertise and commitment to excellence"
                    light
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
                    {fallbackPortfolio.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-30px' }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <Link href={`/portfolio/${item.slug}`}>
                                <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2">
                                    {/* Image Container */}
                                    <div className="relative h-60 overflow-hidden bg-slate-800">
                                        <Image
                                            src={item.image || 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&h=500&auto=format&fit=crop'}
                                            alt={item.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent opacity-60" />

                                        {/* Category badge */}
                                        <div className="absolute top-4 left-4">
                                            <Badge className="bg-primary text-white border-none shadow-glow-primary">
                                                {item.category}
                                            </Badge>
                                        </div>

                                        {/* Hover overlay */}
                                        <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px] flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                                            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-primary transform scale-50 group-hover:scale-100 transition-transform duration-300">
                                                <ExternalLink size={24} />
                                            </div>
                                            <span className="text-white text-sm font-bold mt-3 uppercase tracking-widest shadow-lg">View Project</span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-7">
                                        <h3 className="text-xl font-heading font-bold text-white mb-4 group-hover:text-primary transition-colors">
                                            {item.title}
                                        </h3>

                                        {/* Tech stack tags */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {item.techStack.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-md bg-white/5 text-slate-400 border border-white/5"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex items-center gap-2 text-primary font-bold text-sm">
                                            Explore Details <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center">
                    <Link href="/portfolio">
                        <Button variant="primary" size="lg" className="px-12 py-7 rounded-full text-xl shadow-glow-primary group">
                            View All Projects
                            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
