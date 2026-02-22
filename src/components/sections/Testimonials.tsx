'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import type { Testimonial } from '@/lib/types';

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: 'Jennifer Smith',
        location: 'New York, USA',
        quote: 'AnD Innovatech transformed our online presence completely. Their web development and SEO expertise helped us increase our organic traffic by 300% in just 6 months. Truly exceptional work!',
        rating: 5,
        initials: 'JS',
    },
    {
        id: 2,
        name: 'Anil Kumar',
        location: 'Bangalore, India',
        quote: 'The custom software solution they built for our logistics company has streamlined our entire operation. Professional team, excellent communication, and delivered on time. Highly recommended!',
        rating: 5,
        initials: 'AK',
    },
    {
        id: 3,
        name: 'Michael Thompson',
        location: 'Toronto, Canada',
        quote: 'Working with AnD Innovatech on our cloud migration was a game-changer. They handled everything professionally and our infrastructure costs dropped by 40% while improving performance.',
        rating: 5,
        initials: 'MT',
    },
    {
        id: 4,
        name: 'Sarah Williams',
        location: 'Chicago, USA',
        quote: 'Their IT consulting services helped us make the right technology decisions for our startup. The team is knowledgeable, responsive, and genuinely cares about your success. Five stars!',
        rating: 5,
        initials: 'SW',
    },
];

export default function Testimonials() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section
            ref={ref}
            className="section-padding bg-gradient-to-br from-primary-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 overflow-hidden"
        >
            <div className="section-container">
                <SectionHeading
                    title="What Our Clients Say"
                    subtitle="Don't just take our word for it — hear from businesses we've helped succeed"
                />

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.15, duration: 0.5 }}
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
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
