'use client';

import { motion } from 'framer-motion';
import Hero from '@/components/sections/Hero';
import ContactForm from '@/components/sections/ContactForm';
import { CheckCircle2, Globe, Clock, Shield, ArrowRight, HelpCircle, Star, Quote, Search, BarChart3, MapPin, Target, Zap, TrendingUp, Users, Award, ChevronDown, Settings, PenTool, Link as LinkIcon } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface CanadaLocalSeoPageProps {
    country: string;
    service: string;
    city: string;
    province: string;
    provinceCode: string;
}

export default function CanadaLocalSeoPage({ country, service, city, province, provinceCode }: CanadaLocalSeoPageProps) {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const scrollToForm = () => {
        const form = document.getElementById('contact-form');
        form?.scrollIntoView({ behavior: 'smooth' });
    };

    const faqs = [
        {
            q: `How much does SEO cost for a ${service} company in ${city}?`,
            a: `SEO pricing for ${service} businesses in ${city} typically varies based on the competitiveness of your local market. We offer tailored packages designed to provide maximum ROI, focusing on high-intent keywords that drive actual calls and bookings. Most clients see a significant return on investment within the first 6 months.`
        },
        {
            q: `How long does SEO take to show results for ${service} businesses?`,
            a: `While some technical improvements show immediate results, sustainable SEO growth usually takes 3 to 6 months. For ${service} companies in ${city}, we often see initial ranking boosts in the first 90 days as we optimize your Google Business Profile and local citations.`
        },
        {
            q: `Why does my ${service} business in ${city} need local SEO?`,
            a: `97% of Canadians search online for local services. If your ${service} business isn't appearing in the "Local Map Pack" or top organic results when someone in ${city} searches for your expertise, you're losing revenue to competitors who are already investing in their digital presence.`
        },
        {
            q: `What makes Andinnovatech different from other SEO agencies in Canada?`,
            a: `Unlike generic agencies, we specialize in local SEO for service-based industries. We understand the specific search behavior of Canadians and the regional market dynamics of ${province}. Our strategy is data-driven, transparent, and focused on leads, not just vanity metrics.`
        },
        {
            q: `Do you optimize Google Business Profile for ${service} companies?`,
            a: `Yes, Google Business Profile (GBP) optimization is a core part of our strategy. For ${service} businesses in ${city}, a well-optimized GBP is often the fastest way to get your phone ringing.`
        }
    ];

    return (
        <div className="overflow-x-hidden font-sans">
            {/* 1. HERO SECTION */}
            <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 bg-canada-navy overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <div className="absolute top-1/4 -left-20 w-80 h-80 bg-canada-red/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-canada-gold/10 rounded-full blur-[120px]" />

                <div className="section-container relative z-10">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Badge className="bg-canada-red/10 text-canada-red border-canada-red/20 mb-6 font-bold tracking-widest uppercase">
                                🇨🇦 Local SEO Experts {provinceCode}
                            </Badge>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
                                SEO Services for <span className="text-canada-gold">{service}</span> Companies in {city}, {province}
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed max-w-3xl">
                                Helping {service} businesses in {city} get found on Google & generate more customers every single month through expert local SEO strategies.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-16">
                                <Button
                                    onClick={scrollToForm}
                                    className="bg-canada-red hover:bg-canada-red/90 text-white border-none h-16 px-10 rounded-2xl text-lg font-black uppercase tracking-wider shadow-2xl shadow-canada-red/20 transition-all hover:scale-105"
                                >
                                    Get Free SEO Audit
                                </Button>
                                <div className="flex flex-col justify-center">
                                    <div className="flex -space-x-2 mb-2">
                                        {[1, 2, 3, 4].map(i => (
                                            <div key={i} className="w-10 h-10 rounded-full border-2 border-canada-navy bg-slate-700 flex items-center justify-center text-xs font-bold text-white overflow-hidden">
                                                <img src={`https://i.pravatar.cc/100?u=${i}`} alt="Client" />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="text-sm text-slate-400 font-medium">Trusted by 200+ Canadian Businesses</div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-white/10">
                                {[
                                    { label: 'Google Partner', icon: Globe },
                                    { label: '200+ Clients', icon: Users },
                                    { label: '10+ Years Exp.', icon: Clock },
                                    { label: 'Canada Focused', icon: Target }
                                ].map((badge, i) => (
                                    <div key={i} className="flex items-center gap-3 text-white/70">
                                        <badge.icon size={20} className="text-canada-gold" />
                                        <span className="text-xs font-bold uppercase tracking-widest">{badge.label}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. PAIN POINT SECTION */}
            <section className="section-padding bg-white">
                <div className="section-container text-center mb-20 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-black text-canada-navy tracking-tight">
                        Struggling to Get Customers in {city}?
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
                        In a city as competitive as {city}, being on the second page of Google is the same as being invisible. Local {service} businesses are losing thousands in potential revenue every month because customers can't find them when they search.
                    </p>
                </div>

                <div className="section-container">
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Your competitors are ranking above you",
                                desc: "Your direct competitors in " + city + " are already snatching up customers who should be yours, simply because they rank higher."
                            },
                            {
                                title: "Your Maps Profile is invisible",
                                desc: "Most local searches happen in the 'Map Pack'. If you're not in the top 3, you're missing 70% of the local traffic in " + province + "."
                            },
                            {
                                title: "You're not getting calls",
                                desc: "Traffic is vanity, but calls are revenue. Our focus is on ranking you for keywords that actually make your phone ring."
                            }
                        ].map((card, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:border-canada-red/20 hover:shadow-2xl transition-all duration-500 group"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-canada-red/5 flex items-center justify-center text-canada-red mb-6 group-hover:bg-canada-red group-hover:text-white transition-all">
                                    <Shield size={32} />
                                </div>
                                <h3 className="text-2xl font-black text-canada-navy mb-4 leading-tight">{card.title}</h3>
                                <p className="text-slate-500 leading-relaxed">{card.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. OUR SERVICES GRID */}
            <section className="section-padding bg-canada-navy relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-canada-gold rounded-full blur-[120px]" />
                </div>

                <div className="section-container relative z-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 text-white">
                        <div className="max-w-2xl space-y-4">
                            <Badge className="bg-canada-gold/20 text-canada-gold border-canada-gold/20">Dominate Local Search</Badge>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tight">Our SEO Services for {service} in {city}</h2>
                        </div>
                        <Button
                            onClick={scrollToForm}
                            variant="outline"
                            className="border-white/20 text-white hover:bg-white/5 h-14 px-8 rounded-xl font-bold uppercase tracking-widest text-xs"
                        >
                            Book My Audit
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: 'Google Business Profile', desc: 'Optimize your maps presence for ' + city + ' searches.', icon: MapPin },
                            { title: 'Local SEO for ' + city, desc: 'Hyper-local targeting for your specific service areas.', icon: Target },
                            { title: 'On-Page SEO', desc: 'Optimizing titles, headers, and content for Google Canada.', icon: Settings },
                            { title: 'Technical Audit', desc: 'Full scan for site speed, mobile errors, and indexing.', icon: Zap },
                            { title: 'Reputation Management', desc: 'Strategic review gathering to build local trust.', icon: Star },
                            { title: 'Citation Building', desc: 'Entries in YellowPages.ca and local Canadian directories.', icon: LinkIcon },
                            { title: 'Industry Content', desc: 'Expert articles written for the ' + service + ' industry.', icon: PenTool },
                            { title: 'Link Building', desc: 'High-authority Canadian backlinks to boost your domain.', icon: TrendingUp }
                        ].map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-canada-gold/30 hover:bg-white/10 transition-all group"
                            >
                                <div className="text-canada-gold mb-6 group-hover:scale-110 transition-transform">
                                    <service.icon size={32} />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-2">{service.title}</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. WHY NEED SEO + STATS */}
            <section className="section-padding bg-slate-50">
                <div className="section-container">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8">
                            <h2 className="text-4xl md:text-5xl font-black text-canada-navy leading-tight">
                                Why <span className="text-canada-red">{service}</span> Businesses in {city} Need SEO
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Consumers in {province} aren't looking at newspaper ads or flyers anymore. When they have a problem—whether it's a leaky pipe, a dirty car, or needing a website—they turn to Google. If you're not there, you don't exist in their world.
                            </p>

                            <div className="grid grid-cols-1 gap-4">
                                {[
                                    { stat: '97%', label: 'Of Canadians search online for local services' },
                                    { stat: '46%', label: 'Of all Google searches have local intent' },
                                    { stat: '78%', label: 'Of local mobile searches result in a purchase' }
                                ].map((box, i) => (
                                    <div key={i} className="flex items-center gap-6 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
                                        <div className="text-4xl font-black text-canada-red tracking-tighter w-24 shrink-0">{box.stat}</div>
                                        <div className="text-slate-600 font-bold leading-tight">{box.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-canada-navy rounded-[3rem] rotate-3 translate-x-4 shadow-2xl overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
                                    alt="SEO Dashboard"
                                    className="w-full h-full object-cover opacity-60 mix-blend-overlay"
                                />
                            </div>
                            <div className="relative bg-white p-8 rounded-[3rem] shadow-2xl space-y-6">
                                <div className="space-y-2">
                                    <div className="h-6 w-1/3 bg-slate-100 rounded-lg animate-pulse" />
                                    <div className="h-10 w-full bg-slate-50 rounded-xl" />
                                </div>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-end">
                                        <div className="h-4 w-20 bg-slate-100 rounded" />
                                        <div className="text-canada-red font-black text-2xl">+352%</div>
                                    </div>
                                    <div className="h-32 w-full bg-gradient-to-t from-canada-red/10 to-transparent border-b-2 border-canada-red" />
                                </div>
                                <div className="flex justify-between pt-4 border-t border-slate-100">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center text-green-600">
                                            <TrendingUp size={16} />
                                        </div>
                                        <span className="text-xs font-bold text-slate-400">Keyword Growth</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-canada-gold" />
                                        <span className="text-xs font-bold text-slate-600">Active Campaign</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. WHY CHOOSE US (USP) */}
            <section className="section-padding bg-canada-navy text-white text-center">
                <div className="section-container mb-20 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight">Why Choose Andinnovatech?</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">We don't just "do SEO"—we engineer growth for Canadian service businesses.</p>
                </div>

                <div className="section-container">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: service + ' Expert', desc: 'Deep industry knowledge specifically for your service niche.' },
                            { title: 'Canada Focused', desc: 'Regional strategies tailored for ' + province + ' market dynamics.' },
                            { title: 'Transparent Results', desc: 'No smoke and mirrors. You get full monthly ranking reports.' },
                            { title: 'Personal Manager', desc: 'A dedicated account lead who actually picks up the phone.' }
                        ].map((usp, i) => (
                            <div key={i} className="p-10 rounded-[2.5rem] bg-white text-canada-navy shadow-glow transition-all hover:-translate-y-2">
                                <div className="w-12 h-12 bg-canada-gold rounded-xl flex items-center justify-center text-white mx-auto mb-6">
                                    <Award size={24} />
                                </div>
                                <h3 className="text-xl font-black mb-3">{usp.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{usp.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. OUR SEO PROCESS */}
            <section className="section-padding bg-white overflow-hidden">
                <div className="section-container text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-black text-canada-navy underline decoration-canada-red decoration-8 underline-offset-[12px]">Our 5-Step SEO Success Blueprint</h2>
                </div>

                <div className="section-container max-w-5xl">
                    <div className="grid gap-12">
                        {[
                            { step: '01', title: 'Free Detailed Audit', desc: 'We analyze your site, your competitors in ' + city + ', and your current market gaps.' },
                            { step: '02', title: 'Custom ' + city + ' Strategy', desc: 'We build a tailored roadmap focused on the specific search behavior of your local customers.' },
                            { step: '03', title: 'Strategic Implementation', desc: 'Our team handles all the technical and content heavy lifting to make your site Google-friendly.' },
                            { step: '04', title: 'Track & Rank', desc: 'We monitor keyword performance and GBP visibility daily to stay ahead of your competitors.' },
                            { step: '05', title: 'Monthly Report & Scale', desc: 'Detailed walkthroughs of the work done and the growth achieved. Then we scale the success.' }
                        ].map((s, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex flex-col md:flex-row items-center gap-10 group"
                            >
                                <div className="w-24 h-24 shrink-0 rounded-full border-4 border-canada-red flex items-center justify-center text-4xl font-black text-canada-navy group-hover:bg-canada-red group-hover:text-white transition-all duration-500">
                                    {s.step}
                                </div>
                                <div className="flex-1 text-center md:text-left">
                                    <h4 className="text-2xl font-black text-canada-navy mb-2">{s.title}</h4>
                                    <p className="text-slate-500 text-lg">{s.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. RESULTS BANNER */}
            <section className="py-20 bg-canada-red text-white">
                <div className="section-container">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                        {[
                            { val: '200+', label: 'Happy Clients' },
                            { val: '1000+', label: 'Keywords Ranked' },
                            { val: '98%', label: 'Retention Rate' },
                            { val: '7+', label: 'Years Experience' }
                        ].map((stat, i) => (
                            <div key={i} className="space-y-2">
                                <div className="text-5xl md:text-6xl font-black tracking-tighter">{stat.val}</div>
                                <div className="text-xs font-black uppercase tracking-[0.3em] opacity-80">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. TESTIMONIALS */}
            <section className="section-padding bg-slate-50">
                <div className="section-container text-center mb-20 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-black text-canada-navy">Trusted by Your Neighbors in {city}</h2>
                    <p className="text-slate-500">Real results for local businesses on the ground in {province}.</p>
                </div>

                <div className="section-container">
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: 'Robert Sinclair', biz: 'Sinclair ' + service, text: 'Andinnovatech transformed our business in ' + city + '. Within 4 months, my phone was ringing off the hook with new clients from Google.' },
                            { name: 'Sarah Miller', biz: 'City Wide ' + service, text: 'The best investment we made this year in ' + province + '. They actually understand how local people search for ' + service + '.' },
                            { name: 'David Thompson', biz: 'The ' + service + ' Co.', text: 'Clear reports, no jargon, and real rankings. Our ' + city + ' office has never been busier since we started our SEO campaign.' }
                        ].map((t, i) => (
                            <div key={i} className="p-10 rounded-3xl bg-white shadow-xl border border-slate-100 flex flex-col justify-between">
                                <div className="space-y-6">
                                    <div className="text-canada-gold flex gap-1">
                                        {[1, 2, 3, 4, 5].map(s => <Star key={s} size={18} fill="currentColor" />)}
                                    </div>
                                    <p className="text-slate-600 italic leading-relaxed font-serif text-lg">"{t.text}"</p>
                                </div>
                                <div className="mt-8 flex items-center gap-4 border-t border-slate-100 pt-6">
                                    <div className="w-12 h-12 rounded-full bg-canada-navy flex items-center justify-center text-white font-black">{t.name[0]}</div>
                                    <div>
                                        <div className="font-bold text-canada-navy">{t.name}</div>
                                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{t.biz}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9. FAQ SECTION */}
            <section className="section-padding bg-canada-navy text-white">
                <div className="section-container">
                    <div className="grid lg:grid-cols-2 gap-20">
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-none">Frequently Asked <span className="text-canada-gold underline underline-offset-8">Questions</span></h2>
                            <p className="text-slate-400 text-lg max-w-md">Everything you need to know about SEO for your {service} company in {city}.</p>
                            <Button
                                onClick={scrollToForm}
                                className="bg-canada-red text-white h-14 px-8 rounded-xl font-bold uppercase tracking-widest text-xs border-none"
                            >
                                Contact Our Experts
                            </Button>
                        </div>

                        <div className="space-y-4">
                            {faqs.map((faq, i) => (
                                <div key={i} className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm">
                                    <button
                                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                        className="w-full p-6 text-left flex items-center justify-between group"
                                    >
                                        <span className="font-bold pr-6">{faq.q}</span>
                                        <ChevronDown className={cn("shrink-0 transition-transform duration-300 text-canada-gold", openFaq === i && "rotate-180")} />
                                    </button>
                                    <div className={cn("px-6 overflow-hidden transition-all duration-300 max-h-0", openFaq === i && "pb-6 max-h-96")}>
                                        <p className="text-slate-400 leading-relaxed pt-2 border-t border-white/5">{faq.a}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 10. LEAD GENERATION FORM */}
            <section id="contact-form" className="section-padding bg-slate-50 relative">
                <div className="absolute top-0 left-0 w-full h-24 bg-white clip-diagonal hidden md:block" />

                <div className="section-container relative z-10">
                    <div className="max-w-6xl mx-auto bg-white rounded-[3rem] shadow-3xl overflow-hidden border border-slate-100 flex flex-col lg:flex-row">
                        <div className="lg:w-2/5 bg-canada-navy p-12 lg:p-16 text-white space-y-10">
                            <Badge className="bg-white/10 text-white border-white/20 uppercase tracking-[0.2em] text-[10px] font-black">Free Consultation</Badge>
                            <h2 className="text-4xl font-black leading-tight">Get My Free {service} SEO Audit</h2>
                            <p className="text-slate-400 leading-relaxed">
                                Let us show you exactly where you're losing customers to your competitors in {city}. No sales pitch, just real data.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 text-sm font-bold">
                                    <CheckCircle2 className="text-canada-gold" size={20} />
                                    <span>Detailed Keyword Ranking Report</span>
                                </div>
                                <div className="flex items-center gap-4 text-sm font-bold">
                                    <CheckCircle2 className="text-canada-gold" size={20} />
                                    <span>Technical SEO Performance Score</span>
                                </div>
                                <div className="flex items-center gap-4 text-sm font-bold">
                                    <CheckCircle2 className="text-canada-gold" size={20} />
                                    <span>Local Competitor Analysis</span>
                                </div>
                            </div>
                            <div className="pt-10 border-t border-white/10 italic text-slate-500 text-sm italic">
                                * We serve all of {province}, Canada including {city} and surrounding areas.
                            </div>
                        </div>

                        <div className="lg:w-3/5 p-12 lg:p-16">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
