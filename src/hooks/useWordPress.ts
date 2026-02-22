'use client';

import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook for client-side WordPress data fetching
 * Used for admin dashboard and dynamic content loading
 */
export function useWordPress<T>(
    fetchFn: () => Promise<{ data: T | null; error: string | null }>,
    immediate = true
) {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(immediate);

    const execute = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const result = await fetchFn();
            if (result.error) {
                setError(result.error);
            } else {
                setData(result.data);
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
            setLoading(false);
        }
    }, [fetchFn]);

    useEffect(() => {
        if (immediate) {
            execute();
        }
    }, [execute, immediate]);

    return { data, error, loading, refetch: execute, setData };
}

/**
 * Hook for managing auth token from cookies
 */
export function useAuthToken() {
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        // Read token from cookie on mount
        const cookies = document.cookie.split(';');
        const tokenCookie = cookies.find((c) => c.trim().startsWith('wp_token='));
        if (tokenCookie) {
            setToken(tokenCookie.split('=')[1]);
        }
    }, []);

    const saveToken = useCallback((newToken: string) => {
        // Store in httpOnly-like cookie (max-age 24h)
        document.cookie = `wp_token=${newToken}; path=/; max-age=86400; SameSite=Strict`;
        setToken(newToken);
    }, []);

    const clearToken = useCallback(() => {
        document.cookie = 'wp_token=; path=/; max-age=0';
        setToken(null);
    }, []);

    return { token, saveToken, clearToken };
}

/**
 * Hook for scroll-based effects (e.g., navbar background)
 */
export function useScrollPosition() {
    const [scrollY, setScrollY] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return { scrollY, isScrolled };
}
