'use client';

import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline' | 'white' | 'ghost' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
    loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', loading, children, disabled, ...props }, ref) => {
        const baseStyles =
            'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed';

        const variants = {
            primary:
                'bg-gradient-primary text-white hover:shadow-glow hover:scale-[1.02] active:scale-[0.98]',
            outline:
                'border-2 border-white text-white hover:bg-white hover:text-navy active:scale-[0.98]',
            white:
                'bg-white text-primary hover:bg-grey-light hover:shadow-card-hover active:scale-[0.98]',
            ghost:
                'text-grey hover:text-primary hover:bg-primary/5 dark:text-slate-400 dark:hover:text-white',
            danger:
                'bg-red-500 text-white hover:bg-red-600 active:scale-[0.98]',
        };

        const sizes = {
            sm: 'px-4 py-2 text-sm gap-1.5',
            md: 'px-6 py-3 text-body gap-2',
            lg: 'px-8 py-4 text-body md:text-body-lg gap-2.5',
        };

        return (
            <button
                ref={ref}
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                disabled={disabled || loading}
                {...props}
            >
                {loading && (
                    <svg
                        className="animate-spin h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                )}
                {children}
            </button>
        );
    }
);

Button.displayName = 'Button';

export default Button;
