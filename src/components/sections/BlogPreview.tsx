'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

// Fallback blog posts (used when WordPress API is unavailable)
const fallbackPosts = [
    {
        id: 1,
        slug: 'top-web-development-trends-2024',
        title: 'Top Web Development Trends to Watch in 2024',
        excerpt: 'Explore the latest trends shaping the future of web development, from AI-powered tools to serverless architectures and edge computing.',
        category: 'Web Development',
        date: '2024-01-15',
        readTime: '5 min read',
        image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=600&h=400&auto=format&fit=crop',
    },
    {
        id: 2,
        slug: 'seo-strategies-small-businesses',
        title: 'Essential SEO Strategies for Small Businesses',
        excerpt: 'Learn practical SEO techniques that can help small businesses improve their search rankings and attract more organic traffic.',
        category: 'SEO',
        date: '2024-01-10',
        readTime: '7 min read',
        image: 'https://images.unsplash.com/photo-1571721795195-a2ca2d3170ad?q=80&w=600&h=400&auto=format&fit=crop',
    },
    {
        id: 3,
        slug: 'cloud-computing-benefits',
        title: 'Why Cloud Computing Is Essential for Modern Business',
        excerpt: 'Discover how cloud computing can transform your business operations, reduce costs, and improve scalability.',
        category: 'Cloud',
        date: '2024-01-05',
        readTime: '6 min read',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&h=400&auto=format&fit=crop',
    },
];

export default function BlogPreview() {
    return (
        <section className="section-padding bg-slate-50 dark:bg-navy">
            <div className="section-container">
                <SectionHeading
                    title="Latest Insights"
                    subtitle="Stay ahead with expert insights, tips, and industry trends from our team"
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
                    {fallbackPosts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-30px' }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <Link href={`/blog/${post.slug}`}>
                                <article className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-700 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                                    {/* Image Container */}
                                    <div className="relative h-52 overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />

                                        {/* Category badge */}
                                        <div className="absolute top-4 left-4">
                                            <Badge className="bg-primary/90 text-white border-none backdrop-blur-md">
                                                {post.category}
                                            </Badge>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-5 lg:p-6 flex-1 flex flex-col">
                                        {/* Meta info */}
                                        <div className="flex items-center gap-4 text-xs text-grey dark:text-slate-400 mb-3">
                                            <span className="flex items-center gap-1">
                                                <Calendar size={12} />
                                                {new Date(post.date).toLocaleDateString('en-US', {
                                                    month: 'short',
                                                    day: 'numeric',
                                                    year: 'numeric',
                                                })}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock size={12} />
                                                {post.readTime}
                                            </span>
                                        </div>

                                        <h3 className="text-lg font-heading font-semibold text-navy dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-primary-400 transition-colors line-clamp-2">
                                            {post.title}
                                        </h3>

                                        <p className="text-sm text-grey dark:text-slate-400 leading-relaxed mb-4 flex-1 line-clamp-3">
                                            {post.excerpt}
                                        </p>

                                        <span className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm group-hover:gap-3 transition-all duration-300 mt-auto">
                                            Read More
                                            <ArrowRight size={16} />
                                        </span>
                                    </div>
                                </article>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center">
                    <Link href="/blog">
                        <Button className="gap-2">
                            Visit Our Blog
                            <ArrowRight size={18} />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
