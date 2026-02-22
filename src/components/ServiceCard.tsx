import Link from 'next/link';
import { LucideIcon, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
    title: string;
    description: string;
    href: string;
    icon: LucideIcon;
}

export default function ServiceCard({ title, description, href, icon: Icon }: ServiceCardProps) {
    return (
        <div
            className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all hover:-translate-y-1 duration-300"
        >
            <div className="bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <Icon className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {title}
            </h3>
            <p className="text-gray-600 mb-6 line-clamp-3">
                {description}
            </p>
            <Link
                href={href}
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
                Learn More <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
        </div>
    );
}
