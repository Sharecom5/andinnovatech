'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const contactSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email address'),
    phone: z.string().optional(),
    service: z.string().min(1, 'Please select a service'),
    budget: z.string().optional(),
    message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const services = [
    'Website Development',
    'Software Development',
    'SEO Services',
    'IT Solutions',
    'Cloud Computing',
    'IT Consulting',
];

const budgetRanges = [
    'Under $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000+',
];

export default function ContactForm() {
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormValues) => {
        setErrorMessage('');
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: data.name,
                    email: data.email,
                    phone: data.phone || '',
                    service: data.service,
                    budget: data.budget || '',
                    message: data.message,
                }),
            });

            const result = await response.json();

            if (!response.ok) {
                console.error('Submission failed. Status:', response.status, response.statusText);
                console.error('Response body:', result);
                setSubmitStatus('error');
                setErrorMessage(result.error || 'Failed to send message');
            } else {
                setSubmitStatus('success');
                reset();
            }
        } catch (_err) {
            setSubmitStatus('error');
            setErrorMessage('An unexpected error occurred');
        }

        // Reset status after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
    };

    const inputStyles = cn(
        'w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600',
        'bg-white dark:bg-slate-800 text-navy dark:text-white',
        'placeholder:text-slate-400 dark:placeholder:text-slate-500',
        'focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary',
        'transition-all duration-200'
    );

    if (submitStatus === 'success') {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
            >
                <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-heading font-bold text-navy dark:text-white mb-2">
                    Message Sent!
                </h3>
                <p className="text-grey dark:text-slate-400">
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {submitStatus === 'error' && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400"
                >
                    <AlertCircle size={20} />
                    <span className="text-sm">{errorMessage || 'Failed to send message. Please try again later.'}</span>
                </motion.div>
            )}

            {/* Name & Email Row */}
            <div className="grid md:grid-cols-2 gap-5">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-navy dark:text-white mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        className={cn(inputStyles, errors.name && 'border-red-500 focus:ring-red-500/50')}
                        {...register('name')}
                    />
                    {errors.name && (
                        <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-navy dark:text-white mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="hello@andinnovatech.com"
                        className={cn(inputStyles, errors.email && 'border-red-500 focus:ring-red-500/50')}
                        {...register('email')}
                    />
                    {errors.email && (
                        <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                    )}
                </div>
            </div>

            {/* Phone & Service Row */}
            <div className="grid md:grid-cols-2 gap-5">
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-navy dark:text-white mb-1.5">
                        Phone Number
                    </label>
                    <input
                        id="phone"
                        type="tel"
                        placeholder="+1 (234) 567-890"
                        className={inputStyles}
                        {...register('phone')}
                    />
                </div>

                <div>
                    <label htmlFor="service" className="block text-sm font-medium text-navy dark:text-white mb-1.5">
                        Service Interested In <span className="text-red-500">*</span>
                    </label>
                    <select
                        id="service"
                        className={cn(inputStyles, errors.service && 'border-red-500 focus:ring-red-500/50')}
                        {...register('service')}
                    >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                            <option key={service} value={service}>
                                {service}
                            </option>
                        ))}
                    </select>
                    {errors.service && (
                        <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>
                    )}
                </div>
            </div>

            {/* Budget Range */}
            <div>
                <label htmlFor="budget" className="block text-sm font-medium text-navy dark:text-white mb-1.5">
                    Budget Range
                </label>
                <select id="budget" className={inputStyles} {...register('budget')}>
                    <option value="">Select budget range</option>
                    {budgetRanges.map((range) => (
                        <option key={range} value={range}>
                            {range}
                        </option>
                    ))}
                </select>
            </div>

            {/* Message */}
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-navy dark:text-white mb-1.5">
                    Project Description <span className="text-red-500">*</span>
                </label>
                <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us about your project..."
                    className={cn(inputStyles, 'resize-none', errors.message && 'border-red-500 focus:ring-red-500/50')}
                    {...register('message')}
                />
                {errors.message && (
                    <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                )}
            </div>

            {/* Submit Button */}
            <Button
                type="submit"
                size="lg"
                loading={isSubmitting}
                className="w-full gap-2"
            >
                <Send size={18} />
                Send Message
            </Button>
        </form>
    );
}
