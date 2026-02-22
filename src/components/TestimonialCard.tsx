import { Quote } from 'lucide-react';

interface TestimonialCardProps {
    quote: string;
    author: string;
    position: string;
}

export default function TestimonialCard({ quote, author, position }: TestimonialCardProps) {
    return (
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full">
            <div className="text-blue-200 mb-6">
                <Quote className="h-10 w-10 fill-current" />
            </div>
            <p className="text-gray-700 italic mb-8 flex-grow leading-relaxed">
                "{quote}"
            </p>
            <div className="border-t border-gray-50 pt-6">
                <h4 className="text-lg font-bold text-gray-900">{author}</h4>
                <p className="text-gray-500 text-sm">{position}</p>
            </div>
        </div>
    );
}
