import { cn } from '@/lib/utils';

interface BadgeProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline' | 'dark';
    size?: 'sm' | 'md';
    className?: string;
}

export default function Badge({
    children,
    variant = 'primary',
    size = 'sm',
    className,
}: BadgeProps) {
    const variants = {
        primary: 'bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-300',
        secondary: 'bg-accent/10 text-accent dark:bg-accent/20',
        outline: 'border border-primary/30 text-primary dark:border-primary/40 dark:text-primary-300',
        dark: 'bg-navy text-white dark:bg-slate-700',
    };

    const sizes = {
        sm: 'px-3 py-1 text-xs',
        md: 'px-4 py-1.5 text-sm',
    };

    return (
        <span
            className={cn(
                'inline-flex items-center gap-1.5 rounded-full font-medium',
                variants[variant],
                sizes[size],
                className
            )}
        >
            {children}
        </span>
    );
}
