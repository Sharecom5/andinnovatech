import Link from 'next/link';
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = [
    {
        title: 'Quick Links',
        links: [
            { name: 'About Us', href: '/about-us/' },
            { name: 'Our Portfolio', href: '/our-portfolio/' },
            { name: 'Our Blog', href: '/our-blog/' },
            { name: 'Contact Us', href: '/contact-us/' },
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
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center group">
                            <span className="text-2xl font-bold tracking-tight text-white">
                                AnD <span className="font-light text-primary">Innovatech</span>
                            </span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Empowering businesses worldwide with cutting-edge IT solutions, custom software, and results-driven SEO strategies.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://www.linkedin.com/company/andinnovatech/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a
                                href="mailto:hello@andinnovatech.com"
                                className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors"
                                aria-label="Email"
                            >
                                <Mail className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Links Columns */}
                    {footerLinks.map((section) => (
                        <div key={section.title} className="space-y-6">
                            <h3 className="text-lg font-semibold border-b border-gray-800 pb-2">{section.title}</h3>
                            <ul className="space-y-4">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-400 hover:text-white transition-colors text-sm"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Contact Column */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold border-b border-gray-800 pb-2">Contact Info</h3>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex items-start space-x-3">
                                <MapPin className="h-5 w-5 text-blue-500 shrink-0" />
                                <span>Global presence serving USA, Canada, and India.</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="h-5 w-5 text-blue-500 shrink-0" />
                                <a href="mailto:hello@andinnovatech.com" className="hover:text-white transition-colors">
                                    hello@andinnovatech.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} AndInnovatech. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy-policy/" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms-of-service/" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
