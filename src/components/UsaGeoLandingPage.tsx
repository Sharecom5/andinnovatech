'use client';

import { motion } from 'framer-motion';
import {
    CheckCircle2, Globe, Clock, Shield, ArrowRight, Star,
    Search, BarChart3, MapPin, Target, Zap, TrendingUp, Users,
    Award, ChevronDown, Settings, PenTool, Link as LinkIcon, MessageSquare, Phone
} from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import ContactForm from '@/components/sections/ContactForm';
import Link from 'next/link';

interface UsaGeoLandingPageProps {
    service: string;
    city: string;
    state: string;
    stateCode: string;
    country: string;
}

export default function UsaGeoLandingPage({ service, city, state, stateCode, country }: UsaGeoLandingPageProps) {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const scrollToForm = () => {
        const form = document.getElementById('audit-form');
        form?.scrollIntoView({ behavior: 'smooth' });
    };

    const faqs = [
        {
            q: `How long does SEO take for a ${service} business in ${city}?`,
            a: `Most ${service} businesses in ${city} start seeing measurable results within 60–90 days. Full results typically show in 4–6 months depending on competition in the ${state} market.`
        },
        {
            q: `Do you offer local SEO specifically for ${city}?`,
            a: `Yes. Every strategy we build is 100% customized for ${city}'s local market, competitors, and search behavior.`
        },
        {
            q: `Will you optimize my Google Business Profile?`,
            a: `Absolutely. GBP optimization is a core part of every local SEO campaign we run for ${service} businesses.`
        },
        {
            q: `How is Andinnovatech different from other SEO agencies?`,
            a: `We specialize in local SEO for service-based businesses. We don't use generic templates — every campaign is built around your specific city, industry, and goals.`
        },
        {
            q: `Do I need to sign a long-term contract?`,
            a: `We believe in earning your business every month. Contact us to discuss flexible engagement options that work for you.`
        }
    ];

    const industries = [
        'Cleaning', 'Car Wash', 'Auto Repair', 'Plumbing', 'HVAC', 'Roofing',
        'Landscaping', 'Electrician', 'Dental', 'Chiropractic', 'Law Firm',
        'Real Estate', 'Restaurant', 'Salon & Spa', 'IT Support', 'Daycare',
        'Accounting', 'Mortgage Broker', 'Pet Grooming', 'Gym & Fitness'
    ];

    return (
        <div className="bg-white selection:bg-brand-blue/30 overflow-x-hidden">
            {/* STICKY HEADER CTA is handled by global header, but user wants a sticky header with CTA */}
            {/* For this specific landing page, we'll assume the global header works but we can add a page-specific floating CTA if needed */}

            {/* 2. HERO SECTION */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-brand-navy overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-blue/20 rounded-full blur-[120px]" />
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-orange/10 rounded-full blur-[120px]" />

                <div className="section-container relative z-10 flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl"
                    >
                        <Badge className="bg-brand-blue/10 text-brand-blue border-brand-blue/20 mb-6 py-2 px-6 rounded-full font-bold uppercase tracking-widest text-xs">
                            📍 Local SEO Experts in {city}, {stateCode}
                        </Badge>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
                            SEO Services for <span className="text-brand-blue">{service}</span> Companies in {city}, {state}
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto">
                            Helping {service} Businesses in {city} Get Found on Google, Get More Calls & Grow Faster — Without Paid Ads.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
                            <Button
                                onClick={scrollToForm}
                                className="bg-brand-blue hover:bg-brand-blue/90 text-white border-none h-16 px-12 rounded-2xl text-lg font-black uppercase tracking-wider shadow-2xl shadow-brand-blue/20 transition-all hover:scale-105"
                            >
                                Get My Free SEO Audit →
                            </Button>
                            <button
                                onClick={() => {
                                    const el = document.getElementById('problem');
                                    el?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="text-white font-bold flex items-center gap-2 group hover:text-brand-blue transition-colors"
                            >
                                See How It Works <ArrowRight className="rotate-90 group-hover:translate-y-1 transition-transform" />
                            </button>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-8 border-t border-white/10">
                            {[
                                { label: '200+ Clients Served', icon: Users },
                                { label: '1000+ Keywords Ranked', icon: TrendingUp },
                                { label: 'Google Certified', icon: Globe },
                                { label: '10+ Years Experience', icon: Award }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-white/60">
                                    <CheckCircle2 size={18} className="text-brand-blue" />
                                    <span className="text-xs font-bold uppercase tracking-widest text-left leading-tight">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 3. PROBLEM SECTION */}
            <section id="problem" className="section-padding bg-white">
                <div className="section-container">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-black text-brand-navy mb-6">
                            Is Your {service} Business Invisible on Google?
                        </h2>
                        <p className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
                            Most {service} businesses in {city} are losing customers to competitors simply because they can't be found online.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Your competitors rank above you on Google",
                                desc: "Your direct competitors in " + city + " are already snatching up customers who should be yours, simply because they rank higher.",
                                icon: Target
                            },
                            {
                                title: "Your Google Business Profile is unoptimized",
                                desc: "If you're not in the 'Map Pack' for " + service + " in " + city + ", you're missing out on 70% of potential calls.",
                                icon: MapPin
                            },
                            {
                                title: "You're getting zero calls from local searches",
                                desc: "Having a website isn't enough. Our focus is on making sure your site actually generates revenue for your " + service + " business.",
                                icon: Phone
                            }
                        ].map((card, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '100px' }}
                                transition={{ delay: i * 0.1 }}
                                className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:border-brand-blue/20 hover:shadow-2xl transition-all duration-500 group"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-brand-blue/5 flex items-center justify-center text-brand-blue mb-8 group-hover:bg-brand-blue group-hover:text-white transition-all">
                                    <card.icon size={32} />
                                </div>
                                <h3 className="text-2xl font-black text-brand-navy mb-4 leading-tight">{card.title}</h3>
                                <p className="text-slate-500 leading-relaxed">{card.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 text-center text-xl font-bold text-brand-navy">
                        Andinnovatech fixes all of this — with a custom SEO strategy built specifically for <span className="text-brand-blue">{service}</span> businesses in <span className="text-brand-blue">{city}</span>.
                    </div>
                </div>
            </section>

            {/* 4. OUR SERVICES GRID */}
            <section className="section-padding bg-brand-navy relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
                <div className="section-container relative z-10">
                    <div className="text-center mb-20 text-white">
                        <Badge className="bg-brand-orange/20 text-brand-orange border-brand-orange/20 mb-4">Complete SEO Dominance</Badge>
                        <h2 className="text-4xl md:text-5xl font-black lg:text-6xl tracking-tight">Our SEO Services for {service} in {city}</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: 'Local SEO for ' + city, desc: 'Dominating local search results for service intent.', icon: Target },
                            { title: 'GBP Optimization', desc: 'Maximizing your visibility in the Google Map Pack.', icon: MapPin },
                            { title: 'On-Page SEO & Content', desc: 'Premium content written for ' + city + ' customers.', icon: Settings },
                            { title: 'Technical SEO Audit', desc: 'Fixing underlying issues that kill your rankings.', icon: Zap },
                            { title: 'Link Building & Citations', desc: 'Building authority with high-quality local links.', icon: LinkIcon },
                            { title: 'Reputation Management', desc: 'Helping you get more 5-star reviews on autopilot.', icon: Star },
                            { title: 'Keyword Research', desc: 'Targeting terms that actually lead to ' + service + ' bookings.', icon: Search },
                            { title: 'Monthly Reporting', desc: '100% transparent data showing your ROI.', icon: BarChart3 }
                        ].map((s, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: '100px' }}
                                transition={{ delay: i * 0.05 }}
                                className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-brand-blue/50 hover:bg-white/10 transition-all group"
                            >
                                <div className="text-brand-blue mb-6 group-hover:scale-110 group-hover:text-brand-orange transition-all duration-300">
                                    <s.icon size={32} />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-2">{s.title}</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. WHY NEED SEO + STATS */}
            <section className="section-padding bg-slate-50">
                <div className="section-container">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8">
                            <h2 className="text-4xl md:text-5xl font-black text-brand-navy leading-tight">
                                Why <span className="text-brand-blue">{service}</span> Businesses in {city} Need SEO Right Now
                            </h2>
                            <p className="text-lg text-slate-500 leading-relaxed">
                                Digital competition in {city} and {state} is accelerating. Being visible when a customer searches for your expertise is no longer an option—it&apos;s a necessity to survive and thrive.
                            </p>

                            <div className="grid grid-cols-1 gap-4">
                                {[
                                    { stat: '97%', label: 'Of consumers search online before hiring a local service' },
                                    { stat: '46%', label: 'Of all Google searches have local intent' },
                                    { stat: '76%', label: 'Of people who search local visit or call within 24 hours' }
                                ].map((box, i) => (
                                    <div key={i} className="flex items-center gap-6 p-6 rounded-2xl bg-white border border-slate-200/50 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="text-4xl font-black text-brand-orange tracking-tighter w-24 shrink-0">{box.stat}</div>
                                        <div className="text-slate-600 font-bold leading-tight">{box.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-brand-navy rounded-[3.5rem] rotate-3 translate-x-4 shadow-2xl overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1551288049-bbbda50a5f4e?q=80&w=1000&auto=format&fit=crop"
                                    alt="Analytics Growth"
                                    className="w-full h-full object-cover opacity-60 mix-blend-overlay"
                                />
                            </div>
                            <div className="relative bg-white p-10 rounded-[3.5rem] shadow-2xl border border-slate-100">
                                <div className="space-y-6">
                                    <div className="flex justify-between items-center bg-slate-50 p-6 rounded-2xl">
                                        <div className="space-y-1">
                                            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Organic Leads</div>
                                            <div className="text-3xl font-black text-brand-navy">+248%</div>
                                        </div>
                                        <div className="w-14 h-14 bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-blue">
                                            <TrendingUp size={28} />
                                        </div>
                                    </div>
                                    <div className="h-64 w-full bg-slate-50 rounded-3xl relative overflow-hidden p-6">
                                        <div className="absolute bottom-0 left-0 w-full h-3/4 flex items-end px-4 gap-2">
                                            {[40, 65, 45, 80, 55, 90, 100].map((h, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ height: 0 }}
                                                    whileInView={{ height: h + '%' }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: i * 0.1, duration: 1 }}
                                                    className="flex-1 bg-brand-blue rounded-t-lg"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Real Growth for Our {service} Partners</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. WHY CHOOSE US (USP) */}
            <section className="section-padding bg-white">
                <div className="section-container text-center mb-20 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-black text-brand-navy">Why Choose Andinnovatech?</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">We don&apos;t just &ldquo;do SEO&rdquo;—we engineer growth for service businesses.</p>
                </div>

                <div className="section-container">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: service + ' Industry Expert', desc: 'We understand how ' + service + ' customers search and what drives them to call.', icon: Award },
                            { title: 'Hyper-Local ' + city + ' Strategy', desc: 'No cookie-cutter plans. Every strategy is built around ' + city + '\'s market and your exact competitors.', icon: MapPin },
                            { title: 'Full Transparency', desc: 'You get clear monthly reports showing exactly what we did and what results it delivered.', icon: BarChart3 },
                            { title: 'Dedicated Manager', desc: 'One point of contact who knows your ' + service + ' business inside out.', icon: Users }
                        ].map((usp, i) => (
                            <div key={i} className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                                <div className="w-16 h-16 bg-brand-blue/10 text-brand-blue rounded-2xl flex items-center justify-center mb-8">
                                    <usp.icon size={28} />
                                </div>
                                <h3 className="text-xl font-black text-brand-navy mb-4">{usp.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{usp.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. OUR SIMPLE 5-STEP PROCESS */}
            <section className="section-padding bg-brand-navy relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-5" />
                <div className="section-container relative z-10">
                    <div className="text-center mb-20">
                        <Badge className="bg-brand-blue/20 text-brand-blue border-brand-blue/20 mb-4">Our Success Blueprint</Badge>
                        <h2 className="text-4xl md:text-5xl font-black text-white">Our Simple 5-Step Process</h2>
                    </div>

                    <div className="relative">
                        <div className="absolute top-1/2 left-0 w-full h-1 bg-white/10 hidden lg:block -translate-y-1/2" />
                        <div className="grid lg:grid-cols-5 gap-12 relative">
                            {[
                                { step: '01', title: 'Free SEO Audit', desc: 'Analysis of your ' + service + ' website and competition.' },
                                { step: '02', title: 'Custom Strategy', desc: 'Built specifically for the ' + city + ' market.' },
                                { step: '03', title: 'Implementation', desc: 'Expert on-page and technical fixes starting day one.' },
                                { step: '04', title: 'Authority Growth', desc: 'Citations, backlinks, and GBP optimization.' },
                                { step: '05', title: 'Recurring ROI', desc: 'Monthly reporting and continuous keyword scaling.' }
                            ].map((s, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '100px' }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex flex-col items-center text-center group"
                                >
                                    <div className="w-16 h-16 rounded-full bg-brand-blue text-white flex items-center justify-center text-xl font-black mb-6 relative z-10 group-hover:scale-110 group-hover:bg-brand-orange transition-all ring-8 ring-brand-navy">
                                        {s.step}
                                    </div>
                                    <h4 className="text-lg font-bold text-white mb-3 group-hover:text-brand-orange transition-colors">{s.title}</h4>
                                    <p className="text-slate-400 text-xs leading-relaxed">{s.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. RESULTS COUNTER BANNER */}
            <section className="py-24 bg-brand-navy border-t border-white/10">
                <div className="section-container">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                        {[
                            { val: '200+', label: 'Happy Clients' },
                            { val: '1,000+', label: 'Keywords on Page 1' },
                            { val: '98%', label: 'Client Retention Rate' },
                            { val: '10+', label: 'Years of Experience' }
                        ].map((stat, i) => (
                            <div key={i} className="space-y-2">
                                <div className="text-5xl md:text-6xl font-black text-brand-orange tracking-tighter">{stat.val}</div>
                                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9. INDUSTRIES WE ALSO SERVE */}
            <section className="py-20 bg-slate-50 border-y border-slate-200/50 overflow-hidden">
                <div className="section-container text-center mb-10">
                    <span className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">Industries We Also Serve in {city}</span>
                </div>
                <div className="flex flex-wrap justify-center gap-3 px-4 max-w-6xl mx-auto">
                    {industries.map((ind, i) => (
                        <div key={i} className="px-5 py-2.5 rounded-full bg-white border border-slate-200 text-slate-500 font-bold text-xs hover:border-brand-blue hover:text-brand-blue transition-all cursor-default">
                            {ind}
                        </div>
                    ))}
                </div>
            </section>

            {/* 10. TESTIMONIALS */}
            <section className="section-padding bg-white">
                <div className="section-container">
                    <div className="text-center mb-20 space-y-4">
                        <h2 className="text-4xl md:text-5xl font-black text-brand-navy">Trusted by Your Neighbors in {city}</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">Hear from other local business owners who dominated search with Andinnovatech.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: 'Robert Sinclair', biz: 'Owner, ' + service + ' Co. in ' + city, text: 'Andinnovatech helped us get to the top of Google in ' + city + ' within a few months. Our phone hasn\'t stopped ringing!' },
                            { name: 'Sarah Miller', biz: service + ' Business Owner, ' + city, text: 'We tried other agencies before but nobody understood our local market like Andinnovatech did.' },
                            { name: 'David Thompson', biz: service + ' Company, ' + state, text: 'Professional, transparent, and results-driven. Best SEO investment we\'ve made for our ' + service + ' business.' }
                        ].map((t, i) => (
                            <div key={i} className="p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl flex flex-col justify-between hover:shadow-2xl transition-all h-full">
                                <div className="space-y-6">
                                    <div className="flex text-brand-orange">
                                        {[1, 2, 3, 4, 5].map(s => <Star key={s} size={18} fill="currentColor" />)}
                                    </div>
                                    <p className="text-slate-600 italic leading-relaxed text-lg">&ldquo;{t.text}&rdquo;</p>
                                </div>
                                <div className="mt-10 flex items-center gap-4 border-t border-slate-100 pt-8">
                                    <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue text-xl font-black">
                                        {t.name[0]}
                                    </div>
                                    <div>
                                        <div className="font-black text-brand-navy leading-none mb-1">{t.name}</div>
                                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t.biz}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 11. FAQ SECTION */}
            <section className="section-padding bg-slate-50">
                <div className="section-container">
                    <div className="grid lg:grid-cols-2 gap-20 items-start">
                        <div className="sticky top-32 space-y-6">
                            <h2 className="text-4xl md:text-6xl font-black text-brand-navy leading-none">Frequently Asked <span className="text-brand-blue">Questions</span></h2>
                            <p className="text-slate-500 text-lg">Everything you need to know about dominating search in {city}, {stateCode}.</p>
                            <Button
                                onClick={scrollToForm}
                                className="bg-brand-orange text-white h-14 px-10 rounded-xl font-bold uppercase tracking-widest text-xs border-none shadow-xl shadow-brand-orange/20"
                            >
                                Get a Free Audit
                            </Button>
                        </div>

                        <div className="space-y-4">
                            {faqs.map((faq, i) => (
                                <div key={i} className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                    <button
                                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                        className="w-full p-8 text-left flex items-center justify-between group"
                                    >
                                        <span className="font-black text-brand-navy pr-6 leading-tight group-hover:text-brand-blue transition-colors">{faq.q}</span>
                                        <ChevronDown className={cn("shrink-0 transition-transform duration-300 text-brand-blue", openFaq === i && "rotate-180")} />
                                    </button>
                                    <div className={cn("px-8 overflow-hidden transition-all duration-300 max-h-0", openFaq === i && "pb-8 max-h-96")}>
                                        <div className="pt-6 border-t border-slate-100 text-slate-500 leading-relaxed italic">
                                            {faq.a}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 12. LEAD GENERATION SECTION */}
            <section id="audit-form" className="section-padding bg-brand-navy relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full bg-[url('/grid.svg')] opacity-10 pointer-events-none" />
                <div className="absolute -top-48 -right-48 w-[400px] h-[400px] bg-brand-blue rounded-full blur-[150px] opacity-20" />
                <div className="absolute -bottom-48 -left-48 w-[400px] h-[400px] bg-brand-orange rounded-full blur-[150px] opacity-10" />

                <div className="section-container relative z-10">
                    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row bg-white rounded-[4rem] shadow-glow overflow-hidden border border-white/10">
                        <div className="lg:w-2/5 bg-brand-navy/90 backdrop-blur-md p-12 lg:p-20 text-white flex flex-col justify-center">
                            <Badge className="bg-brand-orange text-white border-none mb-6 w-fit py-1.5 px-4 font-black">Limited Offer</Badge>
                            <h2 className="text-4xl lg:text-5xl font-black mb-8 leading-tight text-white">Get Your FREE {city} SEO Audit</h2>
                            <p className="text-slate-300 text-lg mb-12 leading-relaxed opacity-90">
                                We&apos;ll analyze your {service} website, review your Google Business Profile, and show you exactly what&apos;s holding you back from ranking in {city}. 100% free, delivered within 24 hours.
                            </p>

                            <div className="space-y-6">
                                {[
                                    'Detailed Keyword Ranking Report',
                                    'Technical SEO Performance Score',
                                    'Local Competitor Analysis'
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 text-white font-bold group">
                                        <div className="w-6 h-6 rounded-full bg-brand-blue/20 flex items-center justify-center group-hover:bg-brand-blue group-hover:scale-110 transition-all">
                                            <CheckCircle2 size={16} className="text-brand-blue group-hover:text-white" />
                                        </div>
                                        <span className="text-sm tracking-wide">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:w-3/5 p-12 lg:p-20 bg-white">
                            <ContactForm />
                            <p className="mt-8 text-center text-xs text-slate-400 flex items-center justify-center gap-2 font-bold tracking-widest uppercase">
                                <Shield size={14} className="text-green-500" />
                                Your information is 100% private. We never spam.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FLOATING WHATSAPP BUTTON */}
            <a
                href={`https://wa.me/1234567890?text=Hi, I want a free SEO audit for my ${service} business in ${city}`}
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all z-50 group overflow-hidden"
            >
                <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 rounded-full transition-transform duration-300" />
                <MessageSquare size={32} />
            </a>
        </div>
    );
}
