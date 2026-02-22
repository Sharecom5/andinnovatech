'use client';

import Link from 'next/link';
import { USACity } from '@/lib/usa-cities';
import {
    Globe, ShoppingCart, Smartphone, Search, Code, Settings,
    CheckCircle2, ArrowRight, HelpCircle, Cpu, Zap, Users,
    ShieldCheck, BarChart3, Target
} from 'lucide-react';
import { motion } from 'framer-motion';
import Hero from '@/components/sections/Hero';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import ContactForm from '@/components/sections/ContactForm';

interface CityServicePageProps {
    city: USACity;
}

export default function CityServicePage({ city }: CityServicePageProps) {
    const cityIndex = city.name.length + city.stateCode.charCodeAt(0);

    const getHeroH1 = () => {
        const formulas = [
            `Web Development Services Trusted by ${city.name} Businesses`,
            `Building Digital Experiences for ${city.name} Brands`,
            `${city.name}'s Partner for High-Performance Web Development`,
            `Custom Web Development Solutions in ${city.name}, ${city.stateCode}`,
            `Elevate Your ${city.name} Business with Expert Web Development`,
            `${city.name} Website Development Services | Innovation at Scale`,
            `Driving Growth for ${city.name} Companies via Custom Web Solutions`,
            `Premier Web Development Agency Serving the ${city.name} Market`
        ];
        return formulas[cityIndex % formulas.length];
    };

    const h1Text = getHeroH1();
    const [first, ...rest] = h1Text.split(' ');
    const formattedH1 = (
        <>{first} <span className="gradient-text">{rest.join(' ')}</span></>
    );

    const getHeroSubheading = () => {
        const industryList = city.industries.join(', ');
        return `We empower businesses across ${city.name}, ${city.stateCode} with cutting-edge digital solutions tailored for the local market. From ${city.knownFor} to emerging startups, our team builds high-performance tools for sectors like ${industryList}.`;
    };

    const getFAQ = () => {
        const questions = [
            `How much does web development cost for a ${city.name} business?`,
            `Do you work with ${city.industries[0]} companies in ${city.name}?`,
            `Can you build websites for ${city.name}-based startups?`,
            `What is the timeline for a web project in ${city.name}?`,
            `How do you handle SEO for ${city.name} local search?`,
            `Why should I choose AndInnovatech over other ${city.name} agencies?`,
            `Do you provide maintenance for ${city.name} businesses?`,
            `Is your ${city.name} team experienced in mobile-first design?`,
            `How do you ensure the security of ${city.stateCode} business websites?`,
            `Can you help with local marketing in ${city.name} besides web dev?`
        ];

        const cityQuestions = [];
        for (let i = 0; i < 6; i++) {
            cityQuestions.push({
                q: questions[(cityIndex + i) % questions.length],
                a: `As a premier provider in ${city.name}, we offer tailored solutions starting with a deep discovery phase. We have extensive experience in ${city.industries[i % city.industries.length]} and focus on delivering high-performance, SEO-ready sites typically within 4-12 weeks, depending on the complexity of your ${city.stateCode} project requirements. Our approach to ${city.localKeyword} ensures you get maximum visibility.`
            });
        }
        return cityQuestions;
    };

    const services = [
        { title: 'Custom Website Development', icon: Code },
        { title: 'E-Commerce Development', icon: ShoppingCart },
        { title: 'Mobile-Responsive Design', icon: Smartphone },
        { title: 'SEO-Optimized Development', icon: Search },
        { title: 'Web App Development', icon: Globe },
        { title: 'Website Maintenance & Support', icon: Settings },
    ];

    const stats = [
        { val: '100+', label: 'Projects Delivered', icon: BarChart3 },
        { val: '50+', label: 'Happy Clients', icon: Users },
        { val: '7+', label: 'Years Experience', icon: ShieldCheck },
        { val: '99%', label: 'Uptime Guarantee', icon: Globe }
    ];

    return (
        <main className="overflow-hidden bg-white dark:bg-navy">
            {/* Hero Section */}
            <Hero
                title={formattedH1}
                subtitle={getHeroSubheading()}
                badgeText={`📍 ${city.name}, ${city.stateCode}`}
                ctaText="Get Free Consultation"
                ctaHref="/contact"
                showStats={false}
            />

            {/* Strategic Advantages */}
            <section className="section-padding bg-white dark:bg-navy">
                <div className="section-container">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <Badge className="mb-4 bg-primary/10 text-primary border-none font-bold uppercase tracking-widest">Market Insight</Badge>
                            <h2 className="text-4xl md:text-5xl font-bold text-navy dark:text-white mb-8">
                                Excellence for {city.name}'s <span className="text-primary">Business Climate</span>
                            </h2>
                            <div className="prose prose-lg dark:prose-invert text-grey dark:text-slate-400 space-y-6">
                                <p>
                                    In the competitive business landscape of <strong>${city.name}, ${city.state}</strong>, having a strong digital presence is no longer optional—it is a critical requirement for survival and growth.
                                </p>
                                <p>
                                    As a {city.techHub ? 'prominent tech hub' : 'rapidly growing economic center'} within the ${city.region}, ${city.name} demands a level of technical excellence that generic website templates simply cannot provide. At AndInnovatech, we specialize in high-performance, custom web development services that help local brands stand out.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6 mt-12">
                                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700">
                                    <Target className="text-primary mb-4" size={24} />
                                    <h4 className="font-bold text-navy dark:text-white mb-2">Search Dominance</h4>
                                    <p className="text-sm text-grey dark:text-slate-400">Optimized for {city.localKeyword} to capture local intent.</p>
                                </div>
                                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700">
                                    <Cpu className="text-primary mb-4" size={24} />
                                    <h4 className="font-bold text-navy dark:text-white mb-2">Technical Prowess</h4>
                                    <p className="text-sm text-grey dark:text-slate-400">Built with Next.js 14 for superior Core Web Vitals.</p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:sticky lg:top-32 h-fit">
                            <div className="bg-navy p-10 rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl opacity-50" />
                                <h3 className="text-2xl font-bold text-white mb-2 relative z-10">Start Your Build</h3>
                                <p className="text-slate-400 text-sm mb-8 relative z-10">Get a custom proposal within 24 hours.</p>
                                <div className="relative z-10">
                                    <ContactForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section-padding bg-slate-50 dark:bg-slate-900/50">
                <div className="section-container">
                    <SectionHeading
                        title={`Full-Stack Solutions for ${city.name}`}
                        subtitle={`We handle the complexities of the ${city.techHub ? 'advanced' : 'evolving'} ${city.name} market.`}
                    />
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                        {services.map((s, i) => (
                            <div key={i} className="bg-white dark:bg-slate-800 p-10 rounded-3xl border border-slate-100 dark:border-slate-700 hover:shadow-2xl hover:-translate-y-1 transition-all">
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8">
                                    <s.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-navy dark:text-white mb-4">{s.title}</h3>
                                <p className="text-grey dark:text-slate-400 text-sm leading-relaxed mb-8">
                                    Tailored web solutions for the {city.knownFor} sector in {city.name}, combining aesthetics with powerful logic.
                                </p>
                                <Link href="/contact" className="text-sm font-bold text-primary flex items-center gap-2 group">
                                    Discuss Project <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Dark Section */}
            <section className="section-padding bg-navy relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')]" />
                </div>
                <div className="section-container relative z-10">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div>
                            <Badge className="mb-4 bg-primary/20 text-primary-400 border-none">Industry Experts</Badge>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Serving {city.name}'s Core Sectors</h2>
                            <p className="text-slate-300 text-lg mb-12 opacity-80 leading-relaxed">
                                Our multidisciplinary team is experienced in the specific regulatory and commercial requirements of {city.stateCode}'s major industries.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {city.industries.map((ind, i) => (
                                    <div key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10 group hover:bg-white/10 transition-all">
                                        <div className="w-2 h-2 rounded-full bg-primary shadow-glow" />
                                        <span className="font-bold text-white group-hover:translate-x-1 transition-transform">{ind}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            {stats.map((stat, i) => (
                                <div key={i} className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
                                    <stat.icon className="text-primary-400 mb-6" size={32} />
                                    <div className="text-4xl font-extrabold text-white mb-2">{stat.val}</div>
                                    <div className="text-primary-400 font-bold uppercase tracking-widest text-[10px]">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="section-padding bg-white dark:bg-navy">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <SectionHeading
                            title="Expert Support & Advice"
                            subtitle={`Questions from our partners in ${city.name}.`}
                        />
                        <div className="space-y-6 mt-16">
                            {getFAQ().map((faq, i) => (
                                <div key={i} className="bg-slate-50 dark:bg-slate-800/50 p-10 rounded-3xl border border-slate-100 dark:border-slate-700 transition-all">
                                    <h4 className="text-xl font-bold text-navy dark:text-white mb-6 flex items-start gap-4">
                                        <HelpCircle className="text-primary shrink-0 mt-1" size={24} />
                                        {faq.q}
                                    </h4>
                                    <p className="text-grey dark:text-slate-400 leading-relaxed pl-10">
                                        {faq.a}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="section-padding bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
                <div className="section-container text-center">
                    <h2 className="text-4xl md:text-6xl font-extrabold text-navy dark:text-white mb-8 tracking-tighter">
                        Ready to lead in <span className="gradient-text">{city.name}</span>?
                    </h2>
                    <p className="text-lg text-grey dark:text-slate-400 mb-12 max-w-2xl mx-auto">
                        The digital transformation of <strong>{city.name}</strong> is happening now. Let's build your future today.
                    </p>
                    <Link href="/contact">
                        <Button size="lg" className="px-12 py-7 rounded-full text-xl font-bold shadow-glow bg-primary hover:bg-primary-600 text-white border-none">
                            Build My Website <ArrowRight className="ml-2" />
                        </Button>
                    </Link>
                </div>
            </section>
        </main>
    );
}
