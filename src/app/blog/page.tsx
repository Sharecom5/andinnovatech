import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import BlogCard from '@/components/BlogCard';
import { getAllPosts } from '@/lib/mdx';
import SectionHeading from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
    title: 'Insights & Technical Strategy Blog | AnD Innovatech',
    description: 'Expert perspectives on software engineering, results-driven SEO, and digital transformation. Stay ahead of the curve with our weekly industry insights.',
};

export default async function BlogPage() {
    const posts = await getAllPosts();

    return (
        <div className="overflow-x-hidden">
            <Hero
                title={<>Decoding the <span className="gradient-text">Future of Technology</span></>}
                subtitle="Exploring the frontiers of innovation, digital growth, and software excellence. Join us for weekly insights from our experts."
                badgeText="📰 Tech Insights"
                ctaText="Read Latest"
                showStats={false}
            />

            <section className="section-padding bg-white dark:bg-navy">
                <div className="section-container">
                    <SectionHeading
                        title="Latest Articles"
                        subtitle="Expert perspectives on software engineering, SEO strategy, and digital transformation."
                    />

                    {posts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                            {posts.map((post) => (
                                <BlogCard
                                    key={post.slug}
                                    {...post}
                                // Spread the post and if images/category are missing, BlogCard handles it
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-24 bg-slate-50 dark:bg-slate-800/50 rounded-[3rem] border border-dashed border-slate-200 dark:border-slate-700 mt-16">
                            <div className="text-6xl mb-6">✍️</div>
                            <h3 className="text-2xl font-bold text-navy dark:text-white mb-4">Insights coming soon</h3>
                            <p className="text-grey dark:text-slate-400 max-w-sm mx-auto">Our experts are currently crafting high-value content for you. Check back shortly!</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
