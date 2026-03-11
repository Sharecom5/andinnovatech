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
        slug: 'seo-campaign',
        title: 'GreenLeaf SEO Campaign',
        category: 'SEO',
        techStack: ['Analytics', 'Content Strategy', 'Link Building'],
        result: '314% Organic Growth',
        image: '/images/portfolio_seo.png',
    },
    {
        id: 2,
        slug: 'ecommerce-platform',
        title: 'Stockwell E-commerce Platform',
        category: 'Web Dev',
        techStack: ['Next.js', 'Shopify Plus', 'Tailwind'],
        result: '2.5s Faster Load Time',
        image: '/images/dev_abstract.png',
    },
    {
        id: 3,
        slug: 'healthcare-app',
        title: 'ClearCare Health Portal',
        category: 'Software',
        techStack: ['React', 'HIPAA compliant', 'AWS'],
        result: '4.2k+ Appointments',
        image: '/images/portfolio_abstract.png',
    }
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
                    {fallbackPortfolio.map((item) => (
                        <Link key={item.id} href={`/portfolio/${item.slug}`} aria-label={`View details for ${item.title}`}>
                            <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2">
                                {/* Image Container */}
                                <div className="relative h-60 overflow-hidden bg-slate-800">
                                    <Image
                                        src={item.image || '/images/portfolio_abstract.png'}
                                        alt={item.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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

                                    {item.result && (
                                        <div className="mb-6 p-3 rounded-xl bg-primary/10 border border-primary/20">
                                            <div className="text-[9px] text-primary font-black uppercase tracking-widest leading-none mb-1">Impact</div>
                                            <div className="text-white font-bold text-xs">{item.result}</div>
                                        </div>
                                    )}

                                    <div className="flex items-center gap-2 text-primary font-bold text-sm">
                                        Explore Details <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="text-center">
                    <Link href="/portfolio">
                        <Button variant="primary" size="lg" className="px-10 md:px-12 py-5 md:py-7 rounded-full text-lg md:text-xl shadow-glow-primary group">
                            View All Projects
                            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
