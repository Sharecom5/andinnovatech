import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import ContactForm from '@/components/sections/ContactForm';
import { CheckCircle2, Users, Lightbulb, TrendingUp, Cpu, FileText, MessageSquare, ArrowRight, Shield } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Strategic IT Consulting Services | AnD Innovatech',
    description: 'Expert IT consulting services by AnD Innovatech. We help businesses align their technology with their goals for sustainable growth and efficiency.',
};

const inclusions = [
    'Digital Transformation Roadmap',
    'Technology Needs Assessment',
    'Enterprise Software Strategy',
    'IT Infrastructure Optimization',
    'Cybersecurity Strategy',
    'Agile Project Management',
];

const pillars = [
    {
        icon: Lightbulb,
        title: 'Tech Strategy',
        desc: 'Aligning your technology investments with core business objectives for long-term ROI.',
    },
    {
        icon: Shield,
        title: 'Risk & Security',
        desc: 'Identifying vulnerabilities and implementing robust security frameworks for business continuity.',
    },
    {
        icon: TrendingUp,
        title: 'Scale & Growth',
        desc: 'Future-proofing your infrastructure to handle growth without operational bottlenecks.',
    },
];

export default function ITConsulting() {
    return (
        <main className="overflow-hidden bg-white dark:bg-navy">
            <Hero
                title={<>Strategic <span className="gradient-text">IT Consulting</span> & Advisory</>}
                subtitle="We bridge the gap between business vision and technical execution. Our consultants help you navigate the complex digital landscape with precision."
                badgeText="💡 Expert Technical Guidance"
                ctaText="Book a Strategy Session"
                ctaHref="/contact"
                showStats={true}
            />

            <section className="section-padding bg-white dark:bg-navy">
                <div className="section-container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <Badge className="mb-4 bg-primary/10 text-primary border-none font-bold uppercase tracking-widest">Business Advisory</Badge>
                            <h2 className="text-4xl md:text-5xl font-bold text-navy dark:text-white mb-8 leading-tight">
                                Transform Your Tech Into a <span className="text-primary">Growth Catalyst</span>
                            </h2>
                            <div className="prose prose-lg dark:prose-invert text-grey dark:text-slate-400 mb-12">
                                <p>
                                    Technology should be an enabler, not a bottleneck. At AnD Innovatech, our consulting methodology is built on the synthesis of deep technical expertise and sharp business acumen.
                                </p>
                                <p>
                                    We don't just provide recommendations; we provide a blueprint for excellence. From optimizing legacy systems to architecting cloud-native solutions, we ensure your IT spend delivers measurable business value.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                                {inclusions.map((item) => (
                                    <div key={item} className="flex items-center space-x-3 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                                        <span className="text-navy dark:text-slate-300 font-medium text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-10 items-center pt-8 border-t border-slate-100 dark:border-slate-800">
                                <div>
                                    <div className="text-3xl font-bold text-navy dark:text-white">10+</div>
                                    <div className="text-xs text-grey uppercase tracking-widest font-bold">Industries Served</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-navy dark:text-white">35%</div>
                                    <div className="text-xs text-grey uppercase tracking-widest font-bold">Avg. IT Cost Savings</div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:sticky lg:top-32 h-fit">
                            <div className="bg-navy p-10 rounded-[3rem] border border-white/10 shadow-glow-primary relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] opacity-40" />
                                <h3 className="text-3xl font-bold text-white mb-4 relative z-10">Consult with Experts</h3>
                                <p className="text-slate-400 mb-10 relative z-10">Speak with a senior consultant today. Let's audit your technical roadmap.</p>
                                <div className="relative z-10">
                                    <ContactForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-slate-50 dark:bg-slate-900/50">
                <div className="section-container">
                    <SectionHeading
                        title="Core Consulting Pillars"
                        subtitle="Strategic guidance across the entire technology lifecycle."
                    />
                    <div className="grid md:grid-cols-3 gap-8 mt-16">
                        {pillars.map((pillar, i) => (
                            <div key={i} className="bg-white dark:bg-slate-800 p-10 rounded-3xl border border-slate-100 dark:border-slate-700 hover:shadow-2xl transition-all">
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8">
                                    <pillar.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-navy dark:text-white mb-4">{pillar.title}</h3>
                                <p className="text-grey dark:text-slate-400 text-sm leading-relaxed mb-6">{pillar.desc}</p>
                                <Link href="/contact" className="flex items-center gap-2 text-primary font-bold text-sm">
                                    Get Insghts <ArrowRight size={16} />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-navy relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[100px]" />
                <div className="section-container relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <Badge className="mb-4 bg-primary/20 text-primary-400 border-none uppercase font-bold tracking-widest">Digital Transformation</Badge>
                        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tighter">
                            Future-Proof Your <span className="gradient-text">Business Infrastructure</span>
                        </h2>
                        <p className="text-slate-400 text-xl mb-12 leading-relaxed">
                            Don't let outdated technology hold back your growth. Partner with consultants who understand the intersection of business and innovation.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link href="/contact">
                                <Button size="lg" className="bg-primary hover:bg-primary-600 border-none text-white px-10 py-7 rounded-full text-xl shadow-glow">
                                    Book Your Audit <ArrowRight className="ml-2" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
