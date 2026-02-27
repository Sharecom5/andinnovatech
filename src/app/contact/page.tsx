import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import ContactForm from '@/components/sections/ContactForm';
import { Mail, Linkedin, Phone, MapPin, Clock } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
    title: 'Contact Us | AnD Innovatech — Full-Service IT & SEO Partner',
    description: 'Reach out to AnD Innovatech for a free strategy call. Our expert team is ready to discuss your custom software, website, or SEO project.',
};

export default function ContactUs() {
    return (
        <div className="overflow-x-hidden">
            <Hero
                title={<>Let&apos;s Talk About Your <span className="gradient-text">Project</span></>}
                subtitle="Fill out the form below or reach out via email. We reply to all inquiries from US businesses within 4 business hours."
                badgeText="📩 Contact Us"
                ctaText="Book a Free Call"
                showStats={false}
            />

            <section className="section-padding bg-white dark:bg-navy">
                <div className="section-container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        {/* Contact Info */}
                        <div className="space-y-12">
                            <div>
                                <SectionHeading
                                    title="Get a Fixed-Price Quote"
                                    subtitle="Our team is dedicated to providing high-impact IT solutions and SEO excellence for US-based companies."
                                    centered={false}
                                />
                            </div>

                            <div className="grid sm:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                    <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700">
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                                            <Mail size={24} />
                                        </div>
                                        <h3 className="text-lg font-bold text-navy dark:text-white mb-2">Email Us</h3>
                                        <a href="mailto:hello@andinnovatech.com" className="text-primary hover:underline text-sm font-medium">
                                            hello@andinnovatech.com
                                        </a>
                                        <p className="text-xs text-grey dark:text-slate-400 mt-2">Response within 4 business hours (Mon-Fri, 9am–6pm ET).</p>
                                    </div>

                                    <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700">
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                                            <MapPin size={24} />
                                        </div>
                                        <h3 className="text-lg font-bold text-navy dark:text-white mb-2">Global Presence</h3>
                                        <p className="text-grey dark:text-slate-400 text-sm">Serving USA, Canada, India, and European markets.</p>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700">
                                        <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-600 mb-4">
                                            <Linkedin size={24} />
                                        </div>
                                        <h3 className="text-lg font-bold text-navy dark:text-white mb-2">LinkedIn</h3>
                                        <a
                                            href="https://linkedin.com/company/andinnovatech/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary hover:underline text-sm font-medium"
                                        >
                                            Connect with us →
                                        </a>
                                    </div>

                                    <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700">
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                                            <Clock size={24} />
                                        </div>
                                        <h3 className="text-lg font-bold text-navy dark:text-white mb-2">Business Hours</h3>
                                        <p className="text-grey dark:text-slate-400 text-sm">Mon - Fri: 9:00 AM - 6:00 PM</p>
                                        <p className="text-xs text-primary-400 font-bold mt-1">Flexible slots available.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Visual quote or decoration */}
                            <div className="p-8 bg-gradient-mesh rounded-3xl text-white relative overflow-hidden group">
                                <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/50 transition-colors" />
                                <div className="relative z-10">
                                    <p className="text-lg font-medium italic mb-4">&quot;The best way to predict the future is to invent it. Let&apos;s build yours together.&quot;</p>
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-px bg-white/50" />
                                        <span className="text-xs uppercase tracking-widest font-bold">Innovation Team</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form Column */}
                        <div className="bg-slate-50 dark:bg-slate-800/80 p-8 md:p-12 rounded-[2.5rem] border border-slate-100 dark:border-slate-700 shadow-2xl relative">
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10" />
                            <h3 className="text-2xl font-bold text-navy dark:text-white mb-8">Ready to start? Send a brief.</h3>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
