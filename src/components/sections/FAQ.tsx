import SectionHeading from '@/components/ui/SectionHeading';

const faqs = [
    {
        q: 'Is it safe to hire an offshore development team for my US business?',
        a: 'Yes, when you partner with a registered, transparent agency like AnD Innovatech. We use military-grade encryption, secure IP protocols, and legal NDAs to protect your data. Unlike generic freelancers, we are a structured agency with a physical presence and proven track record with US SMBs since 2017.',
    },
    {
        q: 'How much does an offshore web development agency cost compared to a US firm?',
        a: 'Typically, US businesses save 40–60% by partnering with us. For example, a project that might cost $45,000–$60,000 in the US is often delivered by our team for $18,000–$25,000 with the exact same technical quality and faster delivery times.',
    },
    {
        q: 'How is working with an India-based team different from hiring locally?',
        a: 'The work quality isn\'t different — the cost is. Our developers and SEO strategists hold the same certifications and use the same tools as US-based agencies. The main difference: you\'re not paying for US overhead. You get a dedicated, experienced team at roughly 40–60% of what a comparable US agency would charge. The tradeoff is timezone, which we solve by overlapping with US business hours from 9am–2pm ET daily and responding to all messages within 4 hours.',
    },
    {
        q: 'How do you handle communication and project updates?',
        a: 'Every project gets a dedicated project manager who is your single point of contact. We communicate via Slack (or whatever tool you prefer), send weekly progress reports, and schedule bi-weekly video calls. You\'ll never have to chase us for an update — we send them proactively. Most clients tell us our communication is better than agencies they\'ve worked with here in the US.',
    },
    {
        q: 'What if I\'m not happy with the work?',
        a: 'Every project includes a clearly defined scope, milestone-based delivery, and revision rounds built into the timeline. If something isn\'t right, we fix it — no argument, no extra charge. For ongoing work, you can cancel with 30 days\' notice. We also include 90 days of post-launch support on all website and software projects, at no additional cost.',
    },
    {
        q: 'What\'s your typical project timeline for a new website or app?',
        a: 'A standard business website takes 3–5 weeks. A custom web app or e-commerce platform typically takes 8–14 weeks. SEO results are measurable within 90 days, with significant improvements in 4–6 months. We only offer fixed-price quotes — no hourly billing surprises. We\'ll send a detailed quote within 48 hours of your inquiry.',
    },
];

export default function FAQ() {
    return (
        <section className="section-padding bg-white dark:bg-slate-900 overflow-hidden">
            <div className="section-container max-w-4xl">
                <SectionHeading
                    title="Common Questions from US Business Owners"
                    subtitle="Straight answers to the questions skeptical buyers ask us most often about working with an offshore team."
                />

                <div className="space-y-4">
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
                                '@context': 'https://schema.org',
                                '@type': 'FAQPage',
                                mainEntity: faqs.map((faq) => ({
                                    '@type': 'Question',
                                    name: faq.q,
                                    acceptedAnswer: {
                                        '@type': 'Answer',
                                        text: faq.a,
                                    },
                                })),
                            }),
                        }}
                    />
                    {faqs.map((faq, i) => (
                        <details
                            key={i}
                            className="group border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden open:border-primary/40 transition-all duration-300"
                        >
                            <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer font-heading font-semibold text-navy dark:text-white text-base md:text-lg list-none hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <span>{faq.q}</span>
                                <span className="text-primary text-2xl shrink-0 transition-transform duration-300 group-open:rotate-45">+</span>
                            </summary>
                            <div className="px-6 pb-6 pt-0 text-grey dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-700/50 text-sm md:text-base">
                                {faq.a}
                            </div>
                        </details>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <p className="text-slate-500 dark:text-slate-400 mb-4 text-sm">Still have questions? Talk to a real person — no bots, no call centers.</p>
                    <a
                        href="/contact/"
                        className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-full hover:bg-primary/90 transition-colors shadow-lg"
                    >
                        Book a Free 30-Min Call →
                    </a>
                </div>
            </div>
        </section>
    );
}
