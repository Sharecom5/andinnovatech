'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Send, Loader2, CheckCircle2 } from 'lucide-react';

const formSchema = z.object({
    name: z.string().min(2, 'Name is required'),
    email: z.string().email('Invalid email address'),
    phone: z.string().min(10, 'Valid phone number is required'),
    service: z.string().min(1, 'Please select a service'),
    budget: z.string().optional(),
    message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        setError(null);
        try {
            const response = await fetch('/api/contact/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!response.ok) throw new Error('Failed to send message');

            setSuccess(true);
            reset();
        } catch (err) {
            setError('Something went wrong. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (success) {
        return (
            <div className="bg-white p-8 rounded-2xl shadow-xl text-center space-y-6 animate-in fade-in zoom-in duration-300">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full text-green-600 mb-4">
                    <CheckCircle2 className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Message Sent!</h3>
                <p className="text-gray-600">
                    Thank you for reaching out. We have received your message and will get back to you within 24 hours.
                </p>
                <button
                    onClick={() => setSuccess(false)}
                    className="text-primary font-semibold hover:underline"
                >
                    Send another message
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Full Name</label>
                    <input
                        {...register('name')}
                        placeholder="John Doe"
                        className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-primary outline-none transition-all`}
                    />
                    {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Email Address</label>
                    <input
                        {...register('email')}
                        placeholder="john@example.com"
                        className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-primary outline-none transition-all`}
                    />
                    {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Phone Number</label>
                    <input
                        {...register('phone')}
                        placeholder="+1 (555) 000-0000"
                        className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-primary outline-none transition-all`}
                    />
                    {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Service Needed</label>
                    <select
                        {...register('service')}
                        className={`w-full px-4 py-3 rounded-xl border ${errors.service ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-primary outline-none transition-all bg-white`}
                    >
                        <option value="">Select a service</option>
                        <option value="web-dev">Website Development</option>
                        <option value="software-dev">Software Development</option>
                        <option value="seo">SEO Services</option>
                        <option value="mobile-app">Mobile App Development</option>
                        <option value="cloud">Cloud Computing</option>
                        <option value="consulting">IT Consulting</option>
                    </select>
                    {errors.service && <p className="text-red-500 text-xs">{errors.service.message}</p>}
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Budget Range</label>
                <select
                    {...register('budget')}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none transition-all bg-white"
                >
                    <option value="">Select budget range</option>
                    <option value="Under $5,000">Under $5,000</option>
                    <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                    <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                    <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                    <option value="$50,000+">$50,000+</option>
                </select>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Message</label>
                <textarea
                    {...register('message')}
                    rows={4}
                    placeholder="Tell us about your project..."
                    className={`w-full px-4 py-3 rounded-xl border ${errors.message ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-primary outline-none transition-all resize-none`}
                />
                {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-primary-700 disabled:bg-primary/50 transition-all shadow-lg hover:shadow-xl"
            >
                {isSubmitting ? (
                    <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        <span>Sending...</span>
                    </>
                ) : (
                    <>
                        <Send className="h-5 w-5" />
                        <span>Send Message</span>
                    </>
                )}
            </button>
        </form>
    );
}
