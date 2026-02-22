import Link from 'next/link';
import Hero from '@/components/sections/Hero';
import {
    MapPin, Settings, FileText, Link as LinkIcon, PenTool,
    Star, ShoppingCart, BarChart2, CheckCircle, ChevronRight,
    ArrowRight, Phone, TrendingUp, Users, Award, Clock,
    Search, Target, Zap
} from 'lucide-react';
import Image from 'next/image';
import type { CitySEO } from '@/lib/city-seo-types';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import SectionHeading from '@/components/ui/SectionHeading';

interface CitySeoPageProps {
    city: CitySEO;
    cityIndex: number;
}

// ── Helper: H1 formulas ─────────────────────────────────────────
function getH1(city: CitySEO, idx: number): string {
    const enterprise = [
        `SEO Services That Move the Needle for ${city.name} Businesses`,
        `Dominate ${city.name} Search Results with AndInnovatech`,
        `${city.name} SEO Agency Built for Competitive Markets`,
        `${city.name}'s Trusted SEO Partner for ${city.topIndustries[0]} & Beyond`,
        `SEO Services That Win in ${city.name}'s Demanding Market`,
    ];
    const startup = [
        `Data-Driven SEO for ${city.name}'s Tech Ecosystem`,
        `SEO Services That Scale with Your ${city.name} Startup`,
        `Grow Organic Traffic for Your ${city.name} Business`,
        `${city.name} SEO Built for Founders Who Measure Everything`,
        `Rank Faster, Grow Smarter — ${city.name} SEO by AndInnovatech`,
    ];
    const tourism = [
        `Get Found First — SEO Services for ${city.name} Businesses`,
        `${city.name} SEO That Fills Your Tables and Your Calendar`,
        `SEO Services for ${city.name}'s Hospitality & Entertainment Scene`,
        `Be Discovered by Every Visitor Searching in ${city.name}`,
    ];
    const emerging = [
        `Be the First in ${city.name} to Rank on Page One`,
        `SEO Services That Give ${city.name} Businesses a Head Start`,
        `Professional SEO Now Available for ${city.name} Businesses`,
        `${city.name}'s Low SEO Competition Won't Last — Act Now`,
    ];
    if (city.avgBusinessSize === 'startup') return startup[idx % startup.length];
    if (city.avgBusinessSize === 'enterprise') return enterprise[idx % enterprise.length];
    const tourismCities = ['las-vegas', 'orlando', 'miami', 'new-orleans', 'san-antonio', 'honolulu', 'memphis', 'quebec-city', 'jaipur'];
    if (tourismCities.includes(city.slug)) return tourism[idx % tourism.length];
    if (['SMB', 'mixed'].includes(city.avgBusinessSize)) return emerging[idx % emerging.length];
    return enterprise[idx % enterprise.length];
}

// ── Helper: Subheading ──────────────────────────────────────────
function getSubheading(city: CitySEO, idx: number): string {
    const formulas = [
        `${city.name} is known for ${city.knownFor} — and businesses here need an SEO strategy that matches the ambition of this market. Whether you work in ${city.topIndustries[0]} or ${city.topIndustries[1]}, AndInnovatech builds search strategies that drive real, measurable growth.`,
        `With a thriving economy built on ${city.knownFor}, ${city.name} businesses face fierce online competition. Our SEO services are purpose-built for the ${city.topIndustries[0]} and ${city.topIndustries[1]} sectors that define this market.`,
        `Whether you run a ${city.topIndustries[0]} firm or a ${city.topIndustries[1]} business, ${city.name}'s competitive market demands SEO that goes beyond basics. AndInnovatech delivers search strategies built for the ${city.region} market.`,
        `${city.name}'s ${city.businessScene} calls for an SEO agency that understands your industry inside out. From ${city.topIndustries[0]} to ${city.topIndustries[2] || city.topIndustries[1]}, we've driven organic growth across the sectors that power this city.`,
    ];
    return formulas[idx % formulas.length];
}

// ── Helper: Section 2 body ──────────────────────────────────────
function getChallengeBody(city: CitySEO, _idx: number): JSX.Element {
    const isEnterprise = city.avgBusinessSize === 'enterprise';
    const isStartup = city.avgBusinessSize === 'startup';
    const tourismCities = ['las-vegas', 'orlando', 'miami', 'new-orleans', 'san-antonio', 'honolulu', 'quebec-city', 'jaipur'];
    const isTourism = tourismCities.includes(city.slug);

    if (isEnterprise) {
        return (
            <>
                <p className="mb-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                    {city.seoChallenge}. {city.name}&apos;s {city.businessScene} means that organic search is anything but a level playing field — established players with years of SEO investment dominate the first page, while newer competitors and growing SMBs fight for scraps. If your {city.name} business isn&apos;t actively investing in SEO, the gap between you and your competitors widens every single week.
                </p>
                <p className="mb-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                    What separates {city.name} businesses in {city.topIndustries[0]} and {city.topIndustries[1]} from their competitors online often comes down to a single factor: content authority. {city.searchBehavior}. That means surface-level keyword stuffing and generic agency deliverables don&apos;t move the needle here. {city.name}&apos;s buyers expect depth, credibility, and proof — and so do the algorithms that rank your site.
                </p>
                <p className="mb-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                    Here&apos;s what most {city.name} businesses overlook: {city.contentOpportunity}. While your competitors compete for the same obvious head terms, there are hundreds of underserved, high-intent queries that {city.name}&apos;s {city.topIndustries[0]} and {city.topIndustries[2] || city.topIndustries[1]} buyers are searching for right now — without finding a satisfying answer. A well-executed content strategy captures those searches and routes them directly to your pipeline.
                </p>
                <p className="mb-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                    {city.uniqueFact}. This context matters for your SEO strategy — it shapes which keywords are worth targeting, which content formats perform best, and which local signals Google prioritizes in the {city.name} market. {city.googleMapsPriority}. Our team works within {city.timezone} so reporting and communication happen on your schedule.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {city.callToAction}. AndInnovatech brings 7+ years of SEO experience to {city.name} businesses ready to take organic search seriously. We don&apos;t sell promises — we build ranking systems that compound over time. Book your free audit today and find out exactly where your {city.name} competitors are outranking you.
                </p>
            </>
        );
    }

    if (isStartup) {
        return (
            <>
                <p className="mb-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                    {city.name}&apos;s tech ecosystem moves fast — and so does its SEO competition. {city.seoChallenge}. For every well-funded startup that enters the market, another round of keyword competition begins, pushing organic rankings further out of reach for companies that aren&apos;t actively building their search presence.
                </p>
                <p className="mb-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                    {city.searchBehavior}. This isn&apos;t a market where vague deliverables survive — {city.name} founders expect keyword-level attribution, organic traffic dashboards, and clear month-over-month progress reports. AndInnovatech was built for exactly this kind of accountability, because we believe SEO should be as measurable as any other marketing channel.
                </p>
                <p className="mb-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                    {city.contentOpportunity}. For {city.name}&apos;s {city.topIndustries[0]} and {city.topIndustries[1]} companies, this represents a genuine competitive window — one that closes as the market matures. {city.uniqueFact}. Many {city.name} businesses are pouring budget into paid ads while letting this organic channel go unclaimed.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {city.callToAction}. Our team operates in alignment with {city.timezone} to keep your campaigns moving at startup pace. Google Maps rankings are {city.googleMapsPriority.toLowerCase()} — and we factor that into every local SEO plan we build for {city.name} businesses.
                </p>
            </>
        );
    }

    if (isTourism) {
        return (
            <>
                <p className="mb-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                    If you run a business in {city.name}&apos;s {city.topIndustries[0]} or {city.topIndustries[1]} sector, you already know what drives revenue here. {city.seoChallenge}. The businesses that win are the ones who show up at the top of Google when visitors search — and they&apos;re not winning by accident.
                </p>
                <p className="mb-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                    Google Maps visibility in {city.name} is {city.googleMapsPriority.toLowerCase()}. That means your Google Business Profile, local citations, and review signals aren&apos;t optional extras — they&apos;re the foundation of your visibility strategy. {city.searchBehavior}. If your business doesn&apos;t appear in the local pack, you&apos;re invisible to the customers who matter most.
                </p>
                <p className="mb-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                    {city.uniqueFact}. {city.contentOpportunity}. Many {city.name} businesses focus exclusively on paid ads during peak season, leaving organic rankings wide open for competitors who invest in SEO during the off-season and reap the rewards year-round.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {city.callToAction}. Our {city.name} SEO strategies account for seasonal search patterns, local pack rankings, and the content types that convert visitors into customers. We operate on {city.timezone}, keeping your campaign active when your audience is searching.
                </p>
            </>
        );
    }

    // Tier-2 / emerging
    return (
        <>
            <p className="mb-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                {city.name} represents something rare in the US digital landscape right now: a market where quality SEO can still earn first-page rankings without a seven-figure budget. {city.seoChallenge}. The businesses that invest in SEO today in {city.name} will hold those rankings for years — because once you&apos;re there, maintaining is far easier than the climb.
            </p>
            <p className="mb-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                {city.contentOpportunity}. For {city.name}&apos;s {city.topIndustries[0]} and {city.topIndustries[1]} businesses, this means a first-mover SEO strategy can lock in dominant rankings before competitors even realize what they&apos;re missing. {city.uniqueFact}. {city.searchBehavior}.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {city.callToAction}. Google Maps rankings in {city.name} are {city.googleMapsPriority.toLowerCase()} — a critical factor our local SEO strategies prioritize from day one. Our team works on {city.timezone}, so your campaigns move forward without timezone friction.
            </p>
        </>
    );
}

// ── Helper: Process intro ───────────────────────────────────────
function getProcessIntro(city: CitySEO, idx: number): string {
    const formulas = [
        `For ${city.name} businesses, we start with a deep competitive audit before touching a single page.`,
        `${city.name}'s market demands a precision SEO process — here's exactly how we walk you through it.`,
        `Our ${city.name} SEO campaigns follow a proven 5-step system built for the ${city.region} market.`,
        `Every ${city.name} SEO engagement starts with understanding your market before making a single change.`,
        `We don't guess when building SEO for ${city.name} businesses — here's our structured process.`,
    ];
    return formulas[idx % formulas.length];
}

// ── Helper: Trust intro ─────────────────────────────────────────
function getTrustIntro(city: CitySEO, idx: number): string {
    const formulas = [
        `${city.name} businesses need an SEO partner who understands the realities of this market — not one who applies a cookie-cutter playbook.`,
        `Choosing an SEO agency in ${city.name} means finding a team that knows your industry, your competition, and your customer.`,
        `What makes AndInnovatech different for ${city.name} businesses isn't our promises — it's our process and our accountability.`,
        `${city.name}'s ${city.businessScene} demands an SEO partner with proven systems, not vague deliverables.`,
    ];
    return formulas[idx % formulas.length];
}

// ── Helper: Final CTA ────────────────────────────────────────────
function getFinalCTA(city: CitySEO, idx: number): string {
    if (city.avgBusinessSize === 'enterprise') {
        return idx % 2 === 0
            ? `Your ${city.name} competitors are investing in SEO right now. Are you?`
            : `Ready to own ${city.name}'s organic search results?`;
    }
    if (city.avgBusinessSize === 'startup') {
        return idx % 2 === 0
            ? `Every day without SEO is organic traffic your ${city.name} competitors are collecting.`
            : `${city.name}'s tech scene is moving fast — don't let your SEO fall behind.`;
    }
    const tourismCities = ['las-vegas', 'orlando', 'miami', 'new-orleans', 'san-antonio', 'honolulu', 'quebec-city', 'jaipur'];
    if (tourismCities.includes(city.slug)) {
        return `${city.name} visitors search before they arrive. Make sure they find your business first.`;
    }
    return `${city.name}'s SEO window is open right now — it won't stay this easy to rank forever.`;
}

// ── Helper: Testimonial ──────────────────────────────────────────
const testimonials = [
    {
        quote: "The team at AndInnovatech delivered exceptional SEO results. Our organic traffic tripled in 8 months and we're now ranking for over 50 competitive keywords in our market.",
        author: "Jennifer Smith",
        role: "CEO, New York Digital Agency",
    },
    {
        quote: "AndInnovatech's SEO strategy transformed our online presence. They understood our industry, communicated transparently, and delivered measurable rankings we can see in our analytics.",
        author: "Anil Kumar",
        role: "Founder, Mumbai Tech Solutions",
    },
    {
        quote: "AndInnovatech helped us dominate local search results and significantly grow organic leads. Their reporting is excellent and their team genuinely understands our business goals.",
        author: "Michael Thompson",
        role: "Marketing Director, Toronto Growth Co.",
    },
];

// ── Helper: FAQ ──────────────────────────────────────────────────
function getFaqs(city: CitySEO, idx: number) {
    const isEnterprise = city.avgBusinessSize === 'enterprise';
    const isStartup = city.avgBusinessSize === 'startup';
    const tourismCities = ['las-vegas', 'orlando', 'miami', 'new-orleans', 'san-antonio', 'honolulu', 'quebec-city', 'jaipur'];
    const isTourism = tourismCities.includes(city.slug);
    const ind0 = city.topIndustries[0];

    const pool = [
        {
            q: `How much do SEO services cost for a ${city.name} business?`,
            a: `SEO pricing for ${city.name} businesses varies based on market competitiveness and the scope of your campaign. Most ${city.name} SMBs see strong results starting from mid-tier monthly retainers, while enterprise campaigns in competitive industries like ${ind0} require more investment. We offer a free audit so you get a custom quote based on your specific situation — not a generic price list.`,
        },
        {
            q: `How long does SEO take to show results in ${city.name}?`,
            a: `Most ${city.name} businesses begin seeing measurable keyword improvement within 3-4 months, with significant traffic growth by month 6. ${city.name}'s ${city.businessScene} means timelines vary by industry — ${ind0} businesses in highly competitive niches may take longer to break through. We provide monthly reporting from day one so you can track progress transparently throughout your campaign.`,
        },
        {
            q: `How competitive is SEO in ${city.name}, ${city.stateCode}?`,
            a: `${city.seoChallenge}. That said, competition creates opportunity — where competitors have weak content or technical issues, AndInnovatech can identify and capture those gaps. Our free ${city.name} SEO audit maps exactly which keywords are winnable so you invest in rankings you can realistically achieve.`,
        },
        {
            q: `Do you offer SEO for ${ind0} businesses in ${city.name}?`,
            a: `Yes — ${ind0} is one of ${city.name}'s core industries and one we have direct experience serving. Our ${city.name} SEO strategies account for the specific search behavior, content standards, and compliance requirements of the ${ind0} sector. We&apos;ll tailor your keyword strategy to the exact terms your ${ind0} clients are searching for.`,
        },
        {
            q: `What is local SEO and why does my ${city.name} business need it?`,
            a: `Local SEO optimizes your online presence so ${city.name} customers find you when searching for your services nearby. This includes Google Business Profile optimization, local citation building, and neighborhood-level keyword targeting. In ${city.name}&apos;s market, where ${city.googleMapsPriority.toLowerCase()}, local SEO is often the fastest path to visible results for SMBs.`,
        },
        {
            q: `How do I rank higher on Google Maps in ${city.name}?`,
            a: `Ranking on Google Maps in ${city.name} requires optimizing your Google Business Profile, building consistent local citations, generating authentic customer reviews, and targeting neighborhood-specific keywords. Our ${city.name} local SEO packages include all of these elements. ${city.googleMapsPriority} — and we treat it as such.`,
        },
        {
            q: `Why choose AndInnovatech over a ${city.name}-based SEO agency?`,
            a: `AndInnovatech brings 7+ years of SEO experience across multiple US markets including ${city.name}. We offer transparent monthly reporting, no long-term lock-in contracts, and dedicated account managers — something many local ${city.name} agencies can't match. Our strategies are built on data, not guesswork, and you'll see exactly what we're doing and why at every stage of your campaign.`,
        },
        {
            q: `What kind of content works best for SEO in ${city.name}?`,
            a: `${city.contentOpportunity}. For most ${city.name} businesses, a mix of service pages optimized for local intent, industry-specific blog content that answers real buyer questions, and location-specific landing pages drives the strongest organic results. We map your content strategy to real search demand in the ${city.name} market before writing a single word.`,
        },
        {
            q: `Does my ${city.name} business website need technical SEO?`,
            a: `Yes — technical SEO is the foundation that determines how effectively all your other SEO efforts perform. Many ${city.name} websites have crawl errors, slow load times, or indexing issues that silently prevent rankings from improving. Our free SEO audit identifies all technical issues on your site and prioritizes them by their impact on your ${city.name} search visibility.`,
        },
        {
            q: `How do I measure SEO ROI for my ${city.name} business?`,
            a: `We track SEO ROI for ${city.name} businesses through keyword ranking movement, organic traffic growth, and most importantly, conversion events — form submissions, calls, and purchases directly attributed to organic search. Every monthly report maps these metrics to your business goals so you can evaluate ROI in terms that matter to your ${city.name} business, not just impressions.`,
        },
    ];

    // Vary which 5 questions appear per city type (by idx)
    if (isEnterprise) {
        return [pool[0], pool[2], pool[3], pool[6], pool[7]];
    }
    if (isStartup) {
        return [pool[1], pool[3], pool[7], pool[8], pool[9]];
    }
    if (isTourism) {
        return [pool[0], pool[1], pool[5], pool[4], pool[6]];
    }
    // Tier-2
    return [pool[0], pool[1], pool[4], pool[9], pool[6]];
}

// ═══════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════
export default function CitySeoPage({ city, cityIndex }: CitySeoPageProps) {
    const idx = cityIndex;
    const h1 = getH1(city, idx);
    const subheading = getSubheading(city, idx);
    const testimonial = testimonials[idx % 3];
    const faqs = getFaqs(city, idx);

    const services = [
        {
            icon: <MapPin className="w-6 h-6" />,
            title: `Local SEO & Google Maps`,
            desc: `We optimize your ${city.name} business for local pack rankings and Google Maps visibility. ${city.googleMapsPriority} — our local SEO strategies put you in front of ${city.name} customers at the exact moment they're searching.`,
        },
        {
            icon: <Settings className="w-6 h-6" />,
            title: 'Technical SEO Audit',
            desc: `A technically sound website is the foundation of every successful SEO campaign in ${city.name}. We audit crawlability, Core Web Vitals, indexing, and site architecture to remove every barrier between your site and higher rankings.`,
        },
        {
            icon: <FileText className="w-6 h-6" />,
            title: 'On-Page SEO Optimization',
            desc: `Every page on your ${city.name} website is an opportunity to rank for a targeted keyword. We optimize titles, meta descriptions, headers, content, and internal linking structures to maximize each page's search potential.`,
        },
        {
            icon: <LinkIcon className="w-6 h-6" />,
            title: 'Link Building & Off-Page SEO',
            desc: `Authority signals from quality external sites tell Google your ${city.name} business is trustworthy. We build editorial backlinks, local citations, and digital PR placements that strengthen your domain authority over time.`,
        },
        {
            icon: <PenTool className="w-6 h-6" />,
            title: 'Content Strategy & Creation',
            desc: `${city.contentOpportunity}. Our content team creates keyword-targeted, industry-specific articles and landing pages that capture ${city.name} search demand and convert organic visitors into qualified leads.`,
        },
        {
            icon: <Star className="w-6 h-6" />,
            title: 'Google Business Profile Optimization',
            desc: `Your Google Business Profile is your single most powerful local ranking tool in ${city.name}. We optimize every element — categories, attributes, photos, Q&A, and review strategy — to maximize your local pack visibility.`,
        },
        {
            icon: <ShoppingCart className="w-6 h-6" />,
            title: 'E-Commerce SEO',
            desc: `For ${city.name} e-commerce businesses, product page SEO, category optimization, and structured data markup are the difference between being found and being invisible. We drive organic product discovery that compounds month after month.`,
        },
        {
            icon: <BarChart2 className="w-6 h-6" />,
            title: 'SEO Reporting & Analytics',
            desc: `Every ${city.name} SEO campaign we run includes transparent monthly reporting — keyword rankings, organic traffic, conversion attribution, and competitive benchmarking so you always know exactly what your investment is delivering.`,
        },
    ];

    const processSteps = [
        { num: '01', title: 'Free SEO Audit & Analysis', desc: 'We audit your current rankings, technical health, content gaps, and competitor positions in the ' + city.name + ' market at no cost.' },
        { num: '02', title: 'Keyword Research & Strategy', desc: 'We identify the highest-opportunity keywords your ' + city.name + ' target customers are actually researching for — not just high-volume terms.' },
        { num: '03', title: 'On-Page & Technical Fixes', desc: 'We implement on-page optimizations and technical repairs that remove barriers between your site and first-page rankings.' },
        { num: '04', title: 'Link Building & Content Publishing', desc: 'We build editorial backlinks and publish optimized content that earns Google\'s trust and pushes your ' + city.name + ' rankings upward.' },
        { num: '05', title: 'Monthly Reporting & Refinement', desc: 'We deliver detailed monthly reports and continuously refine your campaign based on what the data tells us is working in ' + city.name + '.' },
    ];

    const trustPoints = [
        { icon: <Award className="w-5 h-5" />, title: '7+ Years SEO Experience', desc: 'Across local, national, and competitive markets' },
        { icon: <Users className="w-5 h-5" />, title: '100+ Projects Delivered', desc: 'In multiple industries and US markets' },
        { icon: <BarChart2 className="w-5 h-5" />, title: 'Transparent Monthly Reporting', desc: 'Full visibility into every metric that matters' },
        { icon: <CheckCircle className="w-5 h-5" />, title: 'No Long-Term Lock-in', desc: 'Month-to-month flexibility — we earn your stay' },
        { icon: <Target className="w-5 h-5" />, title: 'Data-Driven Keyword Strategy', desc: 'Every decision backed by real search data' },
        { icon: <Phone className="w-5 h-5" />, title: 'Dedicated Account Manager', desc: 'One point of contact who knows your campaign' },
    ];

    const stats = [
        { icon: <TrendingUp className="w-6 h-6" />, value: '85%', label: 'of Target Keywords in Top 3' },
        { icon: <Zap className="w-6 h-6" />, value: '3x', label: 'Average Organic Traffic Increase' },
        { icon: <Search className="w-6 h-6" />, value: '100+', label: 'Businesses Ranked on Page One' },
    ];

    return (
        <main className="overflow-hidden bg-white dark:bg-navy">
            {/* ── SECTION 1: HERO ── */}
            {/* ── SECTION 1: HERO ── */}
            <Hero
                title={
                    <>{h1.split(' ').map((word, i) => (
                        i % 3 === 2 ? <span key={i} className="gradient-text">{word} </span> : word + ' '
                    ))}</>
                }
                subtitle={subheading}
                badgeText={`📍 ${city.name}, ${city.stateCode}`}
                ctaText="Get Free SEO Audit"
                category="seo"
                showStats={false}
            />

            {/* ── SECTION 2: SEO CHALLENGE ── */}
            <section className="section-padding bg-white dark:bg-navy">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <SectionHeading
                            title={`The SEO Landscape in ${city.name}`}
                            subtitle="Navigating local competition and search behavior."
                            centered={false}
                        />
                        <div className="prose prose-lg dark:prose-invert text-grey dark:text-slate-400 mt-10">
                            {getChallengeBody(city, idx)}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SECTION 3: SERVICES ── */}
            <section className="section-padding bg-slate-50 dark:bg-slate-900/50">
                <div className="section-container">
                    <SectionHeading
                        title={`Our SEO Services in ${city.name}`}
                        subtitle={`Every service below is adapted for ${city.name}'s market realities.`}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                        {services.map((s) => (
                            <div key={s.title} className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                                <div className="text-primary mb-6 p-3 bg-primary/10 rounded-xl w-fit">{s.icon}</div>
                                <h3 className="text-navy dark:text-white font-bold mb-4">{s.title}</h3>
                                <p className="text-grey dark:text-slate-400 text-xs leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SECTION 4: PROCESS ── */}
            <section className="section-padding bg-navy relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[100px]" />
                <div className="section-container relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <SectionHeading
                            title="Our SEO Process"
                            subtitle={getProcessIntro(city, idx)}
                            light
                            centered={false}
                        />
                        <div className="space-y-6 mt-16">
                            {processSteps.map((step) => (
                                <div key={step.num} className="flex items-start gap-8 bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 group hover:bg-white/10 transition-colors">
                                    <div className="text-4xl font-extrabold text-primary-400/20 group-hover:text-primary-400 transition-colors shrink-0">{step.num}</div>
                                    <div>
                                        <h3 className="text-white text-xl font-bold mb-3">{step.title}</h3>
                                        <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SECTION 5: INDUSTRIES ── */}
            <section className="section-padding bg-white dark:bg-navy">
                <div className="section-container">
                    <SectionHeading
                        title={`Industries We Serve in ${city.name}`}
                        subtitle="Specialized SEO strategies for the sectors that power your city."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                        {city.topIndustries.map((industry) => (
                            <div key={industry} className="bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 rounded-3xl p-10 hover:shadow-xl transition-all">
                                <h3 className="text-primary font-extrabold text-2xl mb-4 italic tracking-tight">{industry}</h3>
                                <p className="text-grey dark:text-slate-400 leading-relaxed">
                                    {city.name}&apos;s {industry.toLowerCase()} sector has distinct search patterns and content requirements that generic SEO misses. We build keyword strategies and content plans specific to how {industry.toLowerCase()} buyers in {city.name} search and make decisions.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SECTION 6: WHY CHOOSE ── */}
            <section className="section-padding bg-slate-50 dark:bg-slate-900/50">
                <div className="section-container">
                    <SectionHeading
                        title={`Why Choose AnD Innovatech for ${city.name} SEO`}
                        subtitle={getTrustIntro(city, idx)}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                        {trustPoints.map((p) => (
                            <div key={p.title} className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl p-8 shadow-sm">
                                <div className="text-primary mb-5">{p.icon}</div>
                                <h3 className="text-navy dark:text-white font-bold mb-2">{p.title}</h3>
                                <p className="text-grey dark:text-slate-400 text-sm">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SECTION 7: RESULTS ── */}
            <div className="section-padding bg-navy relative">
                <div className="section-container relative z-10">
                    <SectionHeading
                        title="Proven Results"
                        subtitle="Measurable growth delivered to our partners."
                        light
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                        {stats.map((s) => (
                            <div key={s.label} className="bg-white/5 border border-white/10 rounded-3xl p-10 text-center hover:bg-white/10 transition-all">
                                <div className="text-primary-400 flex justify-center mb-4">{s.icon}</div>
                                <div className="text-5xl font-extrabold text-white mb-3">{s.value}</div>
                                <div className="text-slate-400 text-sm font-medium uppercase tracking-widest">{s.label}</div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 bg-white/5 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-10 md:p-14 max-w-4xl mx-auto shadow-2xl">
                        <p className="text-xl md:text-2xl text-slate-200 italic mb-8 leading-relaxed font-serif">&ldquo;{testimonial.quote}&rdquo;</p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                                {testimonial.author.charAt(0)}
                            </div>
                            <div>
                                <div className="text-white font-bold">{testimonial.author}</div>
                                <div className="text-primary-400 text-sm">{testimonial.role}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── SECTION 8: FAQ ── */}
            <section className="section-padding bg-white dark:bg-navy">
                <div className="section-container">
                    <SectionHeading
                        title={`SEO Questions from ${city.name} Businesses`}
                        subtitle="Answers to common questions about our SEO services."
                    />
                    <div className="space-y-4 mt-16">
                        {faqs.map((faq) => (
                            <details key={faq.q} className="group bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 rounded-2xl overflow-hidden">
                                <summary className="flex items-center justify-between p-6 cursor-pointer list-none gap-4">
                                    <span className="text-navy dark:text-white font-medium text-sm md:text-base leading-relaxed">{faq.q}</span>
                                    <ChevronRight className="w-4 h-4 text-grey dark:text-slate-400 shrink-0 group-open:rotate-90 transition-transform" />
                                </summary>
                                <div className="px-6 pb-6">
                                    <p className="text-grey dark:text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SECTION 9: INTERNAL LINKS ── */}
            <section className="py-12 px-4 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800">
                <div className="section-container">
                    <p className="text-grey dark:text-slate-500 text-sm mb-4 font-bold">More Local Services:</p>
                    <div className="flex flex-wrap gap-3 mb-8">
                        <Link
                            href={`/seo-services-${city.nearbyCitySlug}`}
                            className="text-primary hover:text-primary-600 text-sm font-bold border border-primary/20 rounded-full px-5 py-2 transition-all hover:bg-primary/5"
                        >
                            SEO in {city.nearbyCity}
                        </Link>
                    </div>
                    <div className="flex flex-wrap gap-8 text-sm font-semibold">
                        <Link href={`/web-development-${city.slug}`} className="text-grey dark:text-slate-400 hover:text-primary transition-colors">
                            → Web Dev in {city.name}
                        </Link>
                        <Link href="/services/seo-services" className="text-grey dark:text-slate-400 hover:text-primary transition-colors">
                            → All SEO Services
                        </Link>
                        <Link href="/contact" className="text-grey dark:text-slate-400 hover:text-primary transition-colors">
                            → Get in Touch
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── SECTION 10: FINAL CTA ── */}
            <section className="py-24 px-4 bg-gradient-to-r from-primary to-primary-600 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-10" />
                <div className="section-container relative z-10 text-center">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                        {getFinalCTA(city, idx)}
                    </h2>
                    <p className="text-primary-100 text-xl mb-12 max-w-2xl mx-auto">No commitment. No contracts. Just results that scale your business.</p>
                    <Link href="/contact">
                        <Button size="lg" className="bg-white text-primary hover:bg-primary-50 px-12 py-7 rounded-full font-bold text-xl shadow-2xl transition-transform hover:scale-105">
                            Start Free Audit Now <ArrowRight className="ml-2" />
                        </Button>
                    </Link>
                </div>
            </section>
        </main>
    );
}
