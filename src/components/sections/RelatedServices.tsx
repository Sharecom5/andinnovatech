import Link from 'next/link';
import { ArrowRight, Globe, Code2, Search, Smartphone, Cpu, Cloud } from 'lucide-react';

const allServices = [
    { name: 'Website Development', href: '/services/website-development/', icon: Globe },
    { name: 'Software Development', href: '/services/software-development/', icon: Code2 },
    { name: 'SEO Services', href: '/services/seo-services/', icon: Search },
    { name: 'Mobile App Development', href: '/services/mobile-app-development/', icon: Smartphone },
    { name: 'Cloud Computing', href: '/services/cloud-computing/', icon: Cloud },
    { name: 'IT Consulting', href: '/services/it-consulting/', icon: Cpu },
];

interface RelatedServicesProps {
    currentService: string;
}

export default function RelatedServices({ currentService }: RelatedServicesProps) {
    const related = allServices.filter(s => s.name !== currentService).slice(0, 3);

    return (
        <section className="section-padding bg-slate-50 dark:bg-navy/50">
            <div className="section-container">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl font-bold text-navy dark:text-white mb-4 tracking-tight">Expand Your <span className="text-primary">Digital Footprint</span></h2>
                        <p className="text-slate-500 dark:text-slate-400 max-w-xl text-lg">Our services are designed to work together to create a unified, high-performance technical infrastructure for your business.</p>
                    </div>
                    <Link href="/services" className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all shrink-0 mb-2">
                        View All Services <ArrowRight size={20} />
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {related.map((service) => (
                        <Link key={service.href} href={service.href} className="group flex items-center p-8 bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 hover:shadow-2xl transition-all duration-500">
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all mr-6 shrink-0">
                                <service.icon size={24} />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-navy dark:text-white text-lg group-hover:text-primary transition-colors">{service.name}</h3>
                                <div className="text-xs text-slate-400 uppercase tracking-widest font-bold mt-1">Learn More →</div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
