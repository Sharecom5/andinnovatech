import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to merge Tailwind CSS classes with clsx
 * Handles conditional classes and resolves Tailwind conflicts
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/**
 * Format a date string into a readable format
 */
export function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}

/**
 * Strip HTML tags from a string
 */
export function stripHtml(html: string): string {
    return html.replace(/<[^>]*>/g, '').trim();
}

/**
 * Truncate text to a certain number of characters
 */
export function truncateText(text: string, maxLength: number): string {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + '...';
}

/**
 * Get featured image URL from WP embedded data
 */
export function getFeaturedImageUrl(
    embedded?: { 'wp:featuredmedia'?: { source_url: string }[] }
): string {
    return embedded?.['wp:featuredmedia']?.[0]?.source_url || '/placeholder.jpg';
}

/**
 * Get featured image alt from WP embedded data
 */
export function getFeaturedImageAlt(
    embedded?: { 'wp:featuredmedia'?: { alt_text: string }[] }
): string {
    return embedded?.['wp:featuredmedia']?.[0]?.alt_text || '';
}

export const PASS_COLORS: Record<string, { bg: string; text: string; label: string }> = {
  Visitor:   { bg: '#F3F4F6', text: '#374151', label: 'VISITOR' },
  Speaker:   { bg: '#DBEAFE', text: '#1E40AF', label: 'SPEAKER' },
  VIP:       { bg: '#FEF3C7', text: '#92400E', label: 'VIP' },
  Press:     { bg: '#EDE9FE', text: '#5B21B6', label: 'PRESS' },
  Exhibitor: { bg: '#D1FAE5', text: '#065F46', label: 'EXHIBITOR' },
}

