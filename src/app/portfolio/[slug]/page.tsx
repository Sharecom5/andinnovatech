import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Hero from '@/components/sections/Hero';
import ContactForm from '@/components/sections/ContactForm';
import {
    CheckCircle2,
    ArrowLeft,
    Globe,
    Smartphone,
    Layers,
    BarChart,
    Cpu,
    ShieldCheck,
    Zap,
    ExternalLink,
    Code2,
    Palette,
    Rocket,
    Layout,
    Search
} from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import SectionHeading from '@/components/ui/SectionHeading';

interface ProjectDetail {
    slug: string;
    title: string;
    category: string;
    client: string;
    duration: string;
    year: string;
    role: string;
    image: string;
    description: string;
    challenge: string;
    solution: string;
    results: string[];
    techStack: string[];
    features: string[];
}

const projectsData: Record<string, ProjectDetail> = {
    'ecommerce-platform': {
        slug: 'ecommerce-platform',
        title: 'E-Commerce Platform Redesign',
        category: 'Web Development',
        client: 'Global Retail Corp',
        duration: '4 Months',
        year: '2023',
        role: 'Full-stack Development & UI/UX',
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1200&h=800&auto=format&fit=crop',
        description: 'A complete overhaul of an aging e-commerce site into a high-performance, mobile-first shopping experience.',
        challenge: 'The client faced high bounce rates and low mobile conversion due to slow loading times and an outdated checkout process. They needed a system that could handle high seasonal traffic while maintaining sub-second performance.',
        solution: 'We rebuilt the entire frontend using Next.js with Server Side Rendering for optimal SEO and performance. We implemented a headless commerce architecture using Shopify as the backend, connected via GraphQL.',
        results: [
            '45% Increase in mobile conversion rate',
            '60% Faster page load times',
            '30% Increase in average order value',
            'Zero downtime during peak shopping events'
        ],
        techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Shopify API', 'Vercel'],
        features: [
            'Dynamic product filtering',
            'One-click checkout process',
            'AI-powered product recommendations',
            'Multilingual and multi-currency support'
        ]
    },
    'healthcare-app': {
        slug: 'healthcare-app',
        title: 'Healthcare Management System',
        category: 'Software',
        client: 'MedTech Solutions',
        duration: '6 Months',
        year: '2024',
        role: 'System Architecture & Backend',
        image: 'https://images.unsplash.com/photo-1576091160550-217359f4ecf8?q=80&w=1200&h=800&auto=format&fit=crop',
        description: 'Secure, HIPAA-compliant patient management platform for multi-specialty clinics.',
        challenge: 'Managing patient records across multiple locations was prone to errors and data fragmentation. The client needed a centralized, secure system that enabled real-time collaboration among doctors.',
        solution: 'Developed a robust SaaS platform using a microservices architecture. Implemented end-to-end encryption for all patient data and a real-time notification system for critical updates.',
        results: [
            '99.99% System uptime achieved',
            'Redundant data entry reduced by 85%',
            'Patient scheduling efficiency improved by 40%',
            'Full HIPAA compliance audit passed'
        ],
        techStack: ['Node.js', 'React', 'PostgreSQL', 'AWS', 'Redis', 'Docker'],
        features: [
            'Patient Electronic Health Records (EHR)',
            'Real-time appointment scheduling',
            'Integrated billing and insurance claims',
            'Secure doctor-patient messaging'
        ]
    },
    'seo-campaign': {
        slug: 'seo-campaign',
        title: 'SEO Strategy for TechStartup',
        category: 'SEO',
        client: 'TechInnovate Ltd',
        duration: 'Ongoing',
        year: '2023-2024',
        role: 'SEO & Content Strategy',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&h=800&auto=format&fit=crop',
        description: 'Multi-region SEO campaign that increased organic traffic by 300% within 12 months.',
        challenge: 'A promising tech startup was struggling to get visibility in highly competitive search terms dominated by established giants. They lacked a cohesive content strategy and had several technical SEO inhibitors.',
        solution: 'We performed a deep technical audit followed by a massive content restructuring. We focused on high-intent long-tail keywords and a strategic backlink building campaign targeting industry authorities.',
        results: [
            '300% Growth in organic traffic',
            'Top 3 rankings for 50+ high-value keywords',
            '150% Increase in organic lead generation',
            'Successful expansion into 3 new regional markets'
        ],
        techStack: ['Ahrefs', 'SEMrush', 'Google Search Console', 'Screaming Frog', 'ContentCloud'],
        features: [
            'Technical SEO optimization',
            'Content gap analysis',
            'Competitor intelligence reporting',
            'E-E-A-T focused content production'
        ]
    },
    'crm-system': {
        slug: 'crm-system',
        title: 'Custom CRM Solution',
        category: 'Software',
        client: 'RetailHub Inc',
        duration: '5 Months',
        year: '2023',
        role: 'Full-stack Development',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&h=800&auto=format&fit=crop',
        description: 'Centralized customer relationship management system tailored for high-volume retail operations.',
        challenge: 'The client was using fragmented spreadsheet-based systems that resulted in poor customer data visibility and missed sales opportunities.',
        solution: 'Built a specialized CRM with automated lead scoring and integrated email marketing modules.',
        results: [
            '25% Increase in sales team productivity',
            '40% Better lead conversion rate',
            'Unified view of 50,000+ customers',
            'Automated follow-ups reduced response time by 70%'
        ],
        techStack: ['Vue.js', 'Laravel', 'MySQL', 'Inertia.js'],
        features: ['Automated Lead Scoring', 'Email Marketing Integration', 'Sales Pipeline Visualizer', 'Granular Access Control']
    },
    'cloud-migration': {
        slug: 'cloud-migration',
        title: 'Enterprise Cloud Migration',
        category: 'IT Solutions',
        client: 'Financial Data Group',
        duration: '8 Months',
        year: '2022',
        role: 'DevOps & Infrastructure',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&h=800&auto=format&fit=crop',
        description: 'Strategic migration of legacy on-premise infrastructure to a modern, scalable cloud environment.',
        challenge: 'Aging hardware and high maintenance costs were hindering the client\'s ability to innovate. They needed a zero-downtime migration of mission-critical databases.',
        solution: 'Implemented a phased migration strategy using AWS Database Migration Service and Kubernetes for application orchestration.',
        results: [
            '50% Reduction in infrastructure costs',
            'Zero data loss during migration',
            'Improved disaster recovery RTO by 90%',
            'Enhanced security with automated compliance monitoring'
        ],
        techStack: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD'],
        features: ['Auto-scaling Application Clusters', 'Zero-Downtime Deployment Pipeline', 'Multi-AZ Database Failover', 'Real-time Cost Monitoring']
    },
    'mobile-banking': {
        slug: 'mobile-banking',
        title: 'Mobile Banking Application',
        category: 'Software',
        client: 'NeoBank Finance',
        duration: '7 Months',
        year: '2023',
        role: 'Mobile Development (iOS/Android)',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&h=800&auto=format&fit=crop',
        description: 'Highly secure and intuitive mobile banking app for the next generation of digital-first users.',
        challenge: 'Building trust in a mobile-only environment required exceptional security and a frictionless user experience.',
        solution: 'Utilized React Native for cross-platform efficiency with biometric authentication and real-time transaction tracking.',
        results: [
            '4.8 Star rating on App Store',
            '100k+ Active users in first 3 months',
            'Average session duration increased by 35%',
            'Customer support load reduced by 45% via in-app help'
        ],
        techStack: ['React Native', 'Firebase', 'Stripe API', 'Redux', 'Biometrics'],
        features: ['Biometric Login (FaceID/TouchID)', 'Real-time Budget Tracking', 'Instant P2P Payments', '256-bit AES Data Encryption']
    },
    'ramganga-organization': {
        slug: 'ramganga-organization',
        title: 'Ramganga Organization Platform',
        category: 'Non-Profit',
        client: 'Ramganga NGO',
        duration: '3 Months',
        year: '2022',
        role: 'Web Development',
        image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&h=800&auto=format&fit=crop',
        description: 'Digital hub for a community-focused non-profit facilitating donations and volunteer management.',
        challenge: 'The NGO lacked a way to efficiently collect donations online and manage their growing volunteer base.',
        solution: 'Created a centralized portal with integrated payment gateways and a volunteer management dashboard.',
        results: ['200% Increase in online donations', 'Unified database for 500+ volunteers', 'Automated tax receipt generation'],
        techStack: ['WordPress', 'PHP', 'Razorpay', 'Elementor'],
        features: ['Seamless Donation Portal', 'Volunteer Signup & Management', 'Impact Documentation Blog', 'Event Calendar']
    },
    'sevya-artisan': {
        slug: 'sevya-artisan',
        title: 'Sevya Artisan E-commerce',
        category: 'E-commerce',
        client: 'Sevya Collective',
        duration: '4 Months',
        year: '2023',
        role: 'Shopify Development',
        image: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?q=80&w=1200&h=800&auto=format&fit=crop',
        description: 'Global storefront for traditional fair-trade artisans.',
        challenge: 'Connecting rural artisans with a global market required a sophisticated but easy-to-manage storefront.',
        solution: 'Implemented a custom Shopify theme with storytelling elements to highlight artisan backgrounds.',
        results: ['Successful export to 15+ countries', '50% Growth in annual revenue', 'Direct impact on 200+ artisan lives'],
        techStack: ['Shopify', 'Liquid', 'JavaScript', 'CSS3'],
        features: ['Artisan Storytelling Templates', 'Wholesale B2B Portal', 'Global Shipping Integration', 'Social Impact Tracker']
    },
    'kdb-school': {
        slug: 'kdb-school',
        title: 'KDB School Management System',
        category: 'Education',
        client: 'KDB Public School',
        duration: '6 Months',
        year: '2023',
        role: 'Full-stack Development',
        image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&h=800&auto=format&fit=crop',
        description: 'Comprehensive ERP for automated school management and student engagement.',
        challenge: 'Manual attendance and grade tracking were inefficient and prone to errors.',
        solution: 'Built a multi-user portal for admins, teachers, and parents with automated notification systems.',
        results: ['100% Digital shift in attendance tracking', '90% Positive parent feedback', 'Reduced administrative workload by 40%'],
        techStack: ['Node.js', 'React', 'MongoDB', 'Socket.io'],
        features: ['Real-time Parent-Teacher Messaging', 'Automated Attendance Reports', 'Online Report Card Generation', 'Fee Management Portal']
    },
    'renewable-mirror': {
        slug: 'renewable-mirror',
        title: 'Renewable Mirror News Portal',
        category: 'Energy',
        client: 'Mirror Media Group',
        duration: '3 Months',
        year: '2022',
        role: 'Web Development & SEO',
        image: 'https://images.unsplash.com/photo-1466611653911-95282fc3656b?q=80&w=1200&h=800&auto=format&fit=crop',
        description: 'Niche news portal delivering high-authority content on renewable energy.',
        challenge: 'The client needed a platform capable of handling high daily traffic while maintaining excellent SEO rankings.',
        solution: 'Built a high-performance publishing platform with deep-nested categorization and advanced search.',
        results: ['500k+ Monthly active users', 'Domain Authority increased from 10 to 45', 'Featured in Top 5 industry news portals'],
        techStack: ['Next.js', 'WordPress (Headless)', 'Apollo GraphQL', 'S3'],
        features: ['Advanced Search & Filtering', 'Integrated Ad-Management', 'Social Media Auto-Publishing', 'Custom Data Visualizations']
    },
    'taction-soft': {
        slug: 'taction-soft',
        title: 'Taction Soft Corporate Presence',
        category: 'SaaS',
        client: 'Taction Solutions',
        duration: '3 Months',
        year: '2023',
        role: 'Enterprise Web Development',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&h=800&auto=format&fit=crop',
        description: 'Corporate branding and lead generation platform for an enterprise software firm.',
        challenge: 'A global IT firm needed a website that reflected their technical maturity and high-level consulting services.',
        solution: 'Designed a minimal yet premium identity with focus on case studies and service-specific landing pages.',
        results: ['3x Increase in qualified enterprise leads', 'Average session time improved by 200%', 'Mobile accessibility score of 100/100'],
        techStack: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'Sanity.io'],
        features: ['Interactive Service Modules', 'Dynamic Case Study Grid', 'Seamless Careers Portal', 'Strategic CTA Placement']
    },
    'investor-key': {
        slug: 'investor-key',
        title: 'Investor Key FinTech Portal',
        category: 'Finance',
        client: 'Investor Key Group',
        duration: '5 Months',
        year: '2023',
        role: 'Full-stack Development',
        image: 'https://images.unsplash.com/photo-1611974714851-eb6051612413?q=80&w=1200&h=800&auto=format&fit=crop',
        description: 'Advanced financial data platform providing real-time market insights.',
        challenge: 'Processing and visualizing complex real-time market data without lag.',
        solution: 'Utilized high-performance charting libraries and a WebSocket-based data streaming architecture.',
        results: ['Real-time processing of 1,000+ data points/sec', 'User base growth of 40% month-over-month', 'Highly praised for clean data visualization'],
        techStack: ['Next.js', 'Go (Backend)', 'Redis', 'Charts.js', 'WebSockets'],
        features: ['Real-time Ticker Integration', 'Personalized Portfolio Dashboard', 'AI-Market Sentiment Analysis', 'Automated Financial Alerts']
    },
    'sg-lifestyle': {
        slug: 'sg-lifestyle',
        title: 'SG Lifestyle Branding Site',
        category: 'Retail',
        client: 'SG Retail Group',
        duration: '3 Months',
        year: '2023',
        role: 'Creative Web Development',
        image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1200&h=800&auto=format&fit=crop',
        description: 'Lifestyle branding site focusing on sensory digital experiences.',
        challenge: 'The brand needed an online presence that mirrored their physical luxury retail experience.',
        solution: 'Developed a high-visual-impact site using heavy-weight typography and immersive video background.',
        results: ['20% Increase in boutique footfall via site', 'High engagement on visual lookbooks', 'Successful online launch of 4 new collections'],
        techStack: ['Gatsby', 'Contentful', 'GSAP Animations', 'Vercel'],
        features: ['Immersive Lookbooks', 'Interactive Brand History', 'Store Locator with Real-time Inventory', 'Social Media Integration']
    },
    'etes-events': {
        slug: 'etes-events',
        title: 'ETES Events Management Site',
        category: 'Events',
        client: 'ETES Exhibition Group',
        duration: '4 Months',
        year: '2022',
        role: 'Web Development',
        image: 'https://images.unsplash.com/photo-1505373676834-393297a701d3?q=80&w=1200&h=800&auto=format&fit=crop',
        description: 'Industrial-scale event management and exhibition booking platform.',
        challenge: 'Managing complex booth layouts and vendor registrations for large-scale international exhibitions.',
        solution: 'Created an interactive floor-plan selector and automated vendor onboarding workflow.',
        results: ['100% Digital vendor registration', 'Reduced booking errors by 60%', 'Facilitated 5+ international expos/year'],
        techStack: ['Laravel', 'React', 'MySQL', 'DigitalOcean'],
        features: ['Interactive Exhibition Floor-plans', 'Automated Vendor Dashboard', 'Multi-currency Payment Support', 'On-site Check-in Integration']
    },
    'construction-mirror': {
        slug: 'construction-mirror',
        title: 'Construction Mirror B2B Portal',
        category: 'B2B',
        client: 'HeavyLink Construction',
        duration: '6 Months',
        year: '2023',
        role: 'Enterprise Web Development',
        image: 'https://images.unsplash.com/photo-1503387762-592dee58c460?q=80&w=1200&h=800&auto=format&fit=crop',
        description: 'B2B marketplace for construction materials and heavy equipment.',
        challenge: 'The industry lacked a unified digital marketplace for material procurement and equipment rental.',
        solution: 'Built a robust marketplace with verified sellers and integrated quote-management system.',
        results: ['1,000+ Verified sellers onboarded', 'Average quote turnaround time reduced by 50%', 'Transaction volume of $1M+ in first 6 months'],
        techStack: ['Node.js', 'NestJS', 'PostgreSQL', 'AWS Cloudfront'],
        features: ['Verified Vendor Badge System', 'Real-time Quote Management', 'Equipment Rental Calendar', 'B2B Logistics Integration']
    }
};

export async function generateStaticParams() {
    return Object.keys(projectsData).map((slug) => ({
        slug,
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const project = projectsData[params.slug];
    if (!project) return { title: 'Project Not Found' };

    return {
        title: `${project.title} | Portfolio | AnD Innovatech`,
        description: project.description,
    };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
    const project = projectsData[params.slug];

    if (!project) {
        notFound();
    }

    const getHeroCategory = (cat: string) => {
        const lower = cat.toLowerCase();
        if (lower.includes('ecommerce') || lower.includes('retail')) return 'ecommerce';
        if (lower.includes('software') || lower.includes('saas') || lower.includes('app') || lower.includes('it') || lower.includes('education')) return 'software';
        if (lower.includes('seo') || lower.includes('campaign') || lower.includes('strategy')) return 'seo';
        return 'default';
    };

    return (
        <main className="overflow-hidden bg-white dark:bg-navy">
            {/* Project Hero using Central Hero Component */}
            <Hero
                title={project.title}
                subtitle={project.description}
                badgeText={project.category}
                ctaText="Discuss This Solution"
                category={getHeroCategory(project.category)}
                showStats={false}
            />

            {/* Project Quick Info Overlay Style */}
            <div className="relative z-30 -mt-24 mb-20">
                <div className="section-container">
                    <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-2xl rounded-[2.5rem] border border-white/20 dark:border-slate-700/50 p-8 md:p-12 shadow-2xl">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div>
                                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">Client</p>
                                <p className="text-navy dark:text-white font-bold">{project.client}</p>
                            </div>
                            <div>
                                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">Year</p>
                                <p className="text-navy dark:text-white font-bold">{project.year}</p>
                            </div>
                            <div>
                                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">Duration</p>
                                <p className="text-navy dark:text-white font-bold">{project.duration}</p>
                            </div>
                            <div>
                                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">Role</p>
                                <p className="text-navy dark:text-white font-bold">{project.role}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Project Image */}
            <section className="relative -mt-16 z-20">
                <div className="section-container">
                    <div className="rounded-[3rem] overflow-hidden shadow-2xl border border-white/10">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full aspect-[21/9] object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Project Content */}
            <section className="section-padding">
                <div className="section-container">
                    <div className="grid lg:grid-cols-3 gap-20">
                        {/* Main Description */}
                        <div className="lg:col-span-2 space-y-16">
                            <div>
                                <h2 className="text-3xl font-bold text-navy dark:text-white mb-6 flex items-center gap-3">
                                    <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <Layers size={20} />
                                    </span>
                                    The Challenge
                                </h2>
                                <p className="text-grey dark:text-slate-400 text-lg leading-relaxed">
                                    {project.challenge}
                                </p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-navy dark:text-white mb-6 flex items-center gap-3">
                                    <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <Zap size={20} />
                                    </span>
                                    Our Solution
                                </h2>
                                <p className="text-grey dark:text-slate-400 text-lg leading-relaxed">
                                    {project.solution}
                                </p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-navy dark:text-white mb-10">Key Features</h2>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    {project.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50">
                                            <div className="mt-1 w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 shrink-0">
                                                <CheckCircle2 size={14} />
                                            </div>
                                            <span className="font-semibold text-navy dark:text-slate-200">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar: Tech Stack & Results */}
                        <div className="space-y-12">
                            <div className="bg-white dark:bg-slate-800 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-700/50 shadow-xl">
                                <h3 className="text-xl font-bold text-navy dark:text-white mb-6">Technologies Used</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 text-xs font-bold uppercase tracking-wider border border-slate-100 dark:border-slate-800"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-primary p-10 rounded-[2.5rem] text-white shadow-glow-primary">
                                <h3 className="text-xl font-bold mb-8">Key Outcomes</h3>
                                <ul className="space-y-6">
                                    {project.results.map((result, idx) => (
                                        <li key={idx} className="flex items-start gap-4">
                                            <div className="mt-1 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-white shrink-0">
                                                <Rocket size={14} />
                                            </div>
                                            <span className="font-bold leading-tight">{result}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="p-8 border border-dashed border-slate-200 dark:border-slate-700 rounded-[2.5rem] text-center">
                                <p className="text-grey dark:text-slate-400 mb-6 font-medium">Have a similar requirement?</p>
                                <Link href="/contact" className="w-full">
                                    <Button className="w-full">Start Your Project</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom Contact Section */}
            <section className="section-padding bg-slate-50 dark:bg-slate-900/50">
                <div className="section-container">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <SectionHeading
                                title="Let's Build Something Great"
                                subtitle="Inspired by this project? Our team is ready to deliver similar results for your business goals."
                                centered={false}
                            />
                            <div className="grid sm:grid-cols-2 gap-8 mt-12">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                        <Cpu size={24} />
                                    </div>
                                    <span className="font-bold dark:text-white">Modern Tech</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500">
                                        <ShieldCheck size={24} />
                                    </div>
                                    <span className="font-bold dark:text-white">Secure Architecture</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-8 md:p-12 rounded-[3rem] shadow-2xl border border-slate-100 dark:border-slate-700">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
