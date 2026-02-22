import Image from 'next/image';
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';

interface BlogCardProps {
    title: string;
    date: string;
    description: string;
    slug: string;
    coverImage?: string;
    category?: string;
}

export default function BlogCard({ title, date, description, slug, coverImage, category }: BlogCardProps) {
    const fallbackImage = 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=600&h=400&auto=format&fit=crop';

    return (
        <article
            className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-2xl transition-all h-full flex flex-col hover:-translate-y-2 duration-500"
        >
            <Link href={`/${slug}/`} className="block overflow-hidden relative h-52">
                <Image
                    src={coverImage || fallbackImage}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-60" />
                {category && (
                    <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-primary/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                            {category}
                        </span>
                    </div>
                )}
            </Link>

            <div className="p-6 md:p-8 flex flex-col h-full">
                <div className="flex items-center text-xs text-slate-400 mb-4">
                    <Calendar className="h-4 w-4 mr-2 text-primary" />
                    {new Date(date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    })}
                </div>
                <h3 className="text-2xl font-bold text-navy dark:text-white mb-4 group-hover:text-primary transition-colors leading-tight">
                    <Link href={`/${slug}/`}>{title}</Link>
                </h3>
                <p className="text-grey dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {description}
                </p>
                <Link
                    href={`/${slug}/`}
                    className="inline-flex items-center text-primary font-bold hover:gap-3 transition-all duration-300 mt-auto"
                >
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </div>
        </article>
    );
}
