import Link from 'next/link';
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = [
    {
        title: 'Quick Links',
        links: [
            { name: 'About Us', href: '/about/' },
            { name: 'Portfolio', href: '/portfolio/' },
            { name: 'Pricing & ROI', href: '/pricing/' },
            { name: 'Blog', href: '/blog/' },
            { name: 'Contact Us', href: '/contact/' },
        ],
    },
    {
        title: 'Services',
        links: [
            { name: 'Website Development', href: '/services/website-development/' },
            { name: 'Software Development', href: '/services/software-development/' },
            { name: 'SEO Services', href: '/services/seo-services/' },
            { name: 'Mobile App Development', href: '/services/mobile-app-development/' },
        ],
    },
];

export default function Footer() {
    return (
        <footer className="bg-navy border-t border-white/5 text-white pt-24 pb-12 overflow-hidden relative grid-pattern">
            <div className="absolute bottom-0 left-0 w-full h-[500px] bg-primary/5 rounded-full blur-[150px] -z-10" />

            <div className="section-container relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    {/* Brand Column */}
                    <div className="space-y-8">
                        <Link href="/" className="flex items-center group">
                            <span className="text-3xl font-black tracking-tighter text-white text-glow">
                                AnD <span className="gradient-text">Innovatech</span>
                            </span>
                        </Link>
                        <p className="text-slate-400 text-base leading-relaxed max-w-xs">
                            Architecting the future of digital growth through elite engineering and AI-driven automation systems.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { icon: Linkedin, href: 'https://www.linkedin.com/company/andinnovatech/', color: 'hover:bg-[#0077B5]' },
                                { icon: Mail, href: 'mailto:hello@andinnovatech.com', color: 'hover:bg-primary' }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white transition-all duration-300 ${social.color} hover:scale-110 active:scale-95`}
                                >
                                    <social.icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    {footerLinks.map((section) => (
                        <div key={section.title} className="space-y-8">
                            <h3 className="text-white font-black uppercase tracking-[0.2em] text-xs pb-4 border-b border-white/5">{section.title}</h3>
                            <ul className="space-y-4">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-slate-400 hover:text-primary hover:translate-x-2 flex items-center gap-2 transition-all duration-300 text-sm font-medium group"
                                        >
                                            <div className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Contact Column */}
                    <div className="space-y-8">
                        <h3 className="text-white font-black uppercase tracking-[0.2em] text-xs pb-4 border-b border-white/5">Global Reach</h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <MapPin size={18} />
                                </div>
                                <span className="text-slate-400 text-sm leading-relaxed">Serving partners across the <span className="text-white font-bold">USA, Canada, and India</span>.</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <Mail size={18} />
                                </div>
                                <a href="mailto:hello@andinnovatech.com" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">
                                    hello@andinnovatech.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-bold text-slate-500 uppercase tracking-widest">
                    <p>© {new Date().getFullYear()} AnD Innovatech AI. Built for Scale.</p>
                    <div className="flex flex-wrap justify-center gap-8">
                        <Link href="/sitemap-list/" className="hover:text-primary transition-colors">Global Sitemap</Link>
                        <Link href="/privacy-policy/" className="hover:text-primary transition-colors">Privacy</Link>
                        <Link href="/terms-of-service/" className="hover:text-primary transition-colors">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
