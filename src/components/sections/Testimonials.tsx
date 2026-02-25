import { Star, Quote } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import type { Testimonial } from '@/lib/types';

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: 'David Kowalski',
        location: 'Chicago, IL — GreenLeaf HVAC Solutions',
        quote: 'We were paying $8,500/month to a local Chicago agency for SEO and barely moving the needle. AnD Innovatech took over in March, and by June we were ranking on page 1 for 14 of our target keywords. Organic leads went from 12/month to 67/month. The communication is better than agencies we\'ve worked with here in the US.',
        rating: 5,
        initials: 'DK',
    },
    {
        id: 2,
        name: 'Sandra Nguyen',
        location: 'Austin, TX — ClearCare Health',
        quote: 'We needed a custom patient scheduling portal built fast — our previous dev team fell through 3 weeks before launch. AnD Innovatech jumped in, understood the requirements quickly, and delivered in 5 weeks. The portal has processed over 4,200 appointments since launch with zero downtime. Highly accountable team.',
        rating: 5,
        initials: 'SN',
    },
    {
        id: 3,
        name: 'Marcus Reid',
        location: 'Atlanta, GA — Stockwell Supply Co.',
        quote: 'I was skeptical about hiring offshore. But AnD Innovatech sent weekly Loom video updates, responded to Slack within 2 hours during my work hours, and delivered our e-commerce site 4 days ahead of schedule. Our conversion rate jumped from 1.2% to 3.7% after launch. I\'ve since referred two other founders.',
        rating: 5,
        initials: 'MR',
    },
    {
        id: 4,
        name: 'Priya Mehta',
        location: 'San Francisco, CA — TalentBridge HR',
        quote: 'We run a SaaS startup and needed a full redesign plus a React Native app. Got quotes from US freelancers in the $45,000–$60,000 range. AnD Innovatech delivered both for $18,000 — and the quality was honestly better. They flagged UX issues we hadn\'t even thought of. They feel like a genuine part of our team.',
        rating: 5,
        initials: 'PM',
    },
];

export default function Testimonials() {
    return (
        <section className="section-padding bg-gradient-to-br from-primary-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 overflow-hidden">
            <div className="section-container">
                <SectionHeading
                    title="What Our US Clients Say"
                    subtitle="Real results from real businesses — not generic reviews. These are the outcomes that matter."
                />

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="group bg-white dark:bg-slate-800 rounded-2xl p-6 lg:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-slate-100 dark:border-slate-700 relative"
                        >
                            {/* Quote icon */}
                            <Quote
                                size={40}
                                className="absolute top-6 right-6 text-primary/10 dark:text-primary/5"
                            />

                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                    <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="text-grey dark:text-slate-300 leading-relaxed mb-6 relative z-10">
                                &ldquo;{testimonial.quote}&rdquo;
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                {/* Avatar initials */}
                                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-heading font-bold text-sm shrink-0">
                                    {testimonial.initials}
                                </div>
                                <div>
                                    <h4 className="font-heading font-semibold text-navy dark:text-white">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-sm text-grey dark:text-slate-400">
                                        {testimonial.location}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
