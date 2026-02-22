// ============================================
// WordPress REST API Utility Functions
// AnD Innovatech — Headless WordPress Integration
// ============================================
// All fetch calls use Next.js ISR with revalidate: 60
// Error handling with typed responses
// ============================================

import type {
    WPPost,
    WPPortfolio,
    WPService,
    WPMessage,
    ContactFormData,
    PostData,
    PortfolioData,
    APIResponse,
    AuthResponse,
} from './types';

const WP_API = process.env.WORDPRESS_API_URL || 'https://your-wp-site.com/wp-json';

// ============================================
// BLOG POSTS
// ============================================

/** Fetch all blog posts with pagination */
export async function getAllPosts(
    page = 1,
    perPage = 10
): Promise<APIResponse<WPPost[]>> {
    try {
        const res = await fetch(
            `${WP_API}/wp/v2/posts?_embed&page=${page}&per_page=${perPage}&orderby=date&order=desc`,
            { next: { revalidate: 60 } }
        );

        if (!res.ok) {
            return { data: null, error: `Failed to fetch posts: ${res.status}` };
        }

        const data: WPPost[] = await res.json();
        const total = parseInt(res.headers.get('X-WP-Total') || '0', 10);
        const totalPages = parseInt(res.headers.get('X-WP-TotalPages') || '0', 10);

        return { data, error: null, total, totalPages };
    } catch (error) {
        console.error('Error fetching posts:', error);
        return { data: null, error: 'Failed to fetch posts' };
    }
}

/** Fetch a single blog post by slug */
export async function getPostBySlug(slug: string): Promise<APIResponse<WPPost>> {
    try {
        const res = await fetch(
            `${WP_API}/wp/v2/posts?slug=${slug}&_embed`,
            { next: { revalidate: 60 } }
        );

        if (!res.ok) {
            return { data: null, error: `Failed to fetch post: ${res.status}` };
        }

        const data: WPPost[] = await res.json();
        if (data.length === 0) {
            return { data: null, error: 'Post not found' };
        }

        return { data: data[0], error: null };
    } catch (error) {
        console.error('Error fetching post:', error);
        return { data: null, error: 'Failed to fetch post' };
    }
}

/** Fetch posts by category ID */
export async function getPostsByCategory(
    categoryId: number,
    page = 1,
    perPage = 10
): Promise<APIResponse<WPPost[]>> {
    try {
        const res = await fetch(
            `${WP_API}/wp/v2/posts?_embed&categories=${categoryId}&page=${page}&per_page=${perPage}`,
            { next: { revalidate: 60 } }
        );

        if (!res.ok) {
            return { data: null, error: `Failed to fetch posts: ${res.status}` };
        }

        const data: WPPost[] = await res.json();
        return { data, error: null };
    } catch (error) {
        console.error('Error fetching posts by category:', error);
        return { data: null, error: 'Failed to fetch posts' };
    }
}

/** Create a new blog post (requires JWT auth) */
export async function createPost(
    postData: PostData,
    token: string
): Promise<APIResponse<WPPost>> {
    try {
        const res = await fetch(`${WP_API}/wp/v2/posts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(postData),
        });

        if (!res.ok) {
            return { data: null, error: `Failed to create post: ${res.status}` };
        }

        const data: WPPost = await res.json();
        return { data, error: null };
    } catch (error) {
        console.error('Error creating post:', error);
        return { data: null, error: 'Failed to create post' };
    }
}

/** Update an existing blog post (requires JWT auth) */
export async function updatePost(
    id: number,
    postData: PostData,
    token: string
): Promise<APIResponse<WPPost>> {
    try {
        const res = await fetch(`${WP_API}/wp/v2/posts/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(postData),
        });

        if (!res.ok) {
            return { data: null, error: `Failed to update post: ${res.status}` };
        }

        const data: WPPost = await res.json();
        return { data, error: null };
    } catch (error) {
        console.error('Error updating post:', error);
        return { data: null, error: 'Failed to update post' };
    }
}

/** Delete a blog post (requires JWT auth) */
export async function deletePost(
    id: number,
    token: string
): Promise<APIResponse<{ deleted: boolean }>> {
    try {
        const res = await fetch(`${WP_API}/wp/v2/posts/${id}?force=true`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (!res.ok) {
            return { data: null, error: `Failed to delete post: ${res.status}` };
        }

        return { data: { deleted: true }, error: null };
    } catch (error) {
        console.error('Error deleting post:', error);
        return { data: null, error: 'Failed to delete post' };
    }
}

// ============================================
// PORTFOLIO ITEMS (Custom Post Type)
// ============================================

/** Fetch all portfolio items */
export async function getAllPortfolioItems(): Promise<APIResponse<WPPortfolio[]>> {
    try {
        const res = await fetch(
            `${WP_API}/wp/v2/portfolio?_embed&per_page=100`,
            { next: { revalidate: 60 } }
        );

        if (!res.ok) {
            return { data: null, error: `Failed to fetch portfolio: ${res.status}` };
        }

        const data: WPPortfolio[] = await res.json();
        return { data, error: null };
    } catch (error) {
        console.error('Error fetching portfolio:', error);
        return { data: null, error: 'Failed to fetch portfolio items' };
    }
}

/** Fetch a single portfolio item by slug */
export async function getPortfolioBySlug(slug: string): Promise<APIResponse<WPPortfolio>> {
    try {
        const res = await fetch(
            `${WP_API}/wp/v2/portfolio?slug=${slug}&_embed`,
            { next: { revalidate: 60 } }
        );

        if (!res.ok) {
            return { data: null, error: `Failed to fetch portfolio item: ${res.status}` };
        }

        const data: WPPortfolio[] = await res.json();
        if (data.length === 0) {
            return { data: null, error: 'Portfolio item not found' };
        }

        return { data: data[0], error: null };
    } catch (error) {
        console.error('Error fetching portfolio item:', error);
        return { data: null, error: 'Failed to fetch portfolio item' };
    }
}

/** Create a new portfolio item (requires JWT auth) */
export async function createPortfolioItem(
    portfolioData: PortfolioData,
    token: string
): Promise<APIResponse<WPPortfolio>> {
    try {
        const res = await fetch(`${WP_API}/wp/v2/portfolio`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(portfolioData),
        });

        if (!res.ok) {
            return { data: null, error: `Failed to create portfolio item: ${res.status}` };
        }

        const data: WPPortfolio = await res.json();
        return { data, error: null };
    } catch (error) {
        console.error('Error creating portfolio item:', error);
        return { data: null, error: 'Failed to create portfolio item' };
    }
}

/** Update an existing portfolio item (requires JWT auth) */
export async function updatePortfolioItem(
    id: number,
    portfolioData: PortfolioData,
    token: string
): Promise<APIResponse<WPPortfolio>> {
    try {
        const res = await fetch(`${WP_API}/wp/v2/portfolio/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(portfolioData),
        });

        if (!res.ok) {
            return { data: null, error: `Failed to update portfolio item: ${res.status}` };
        }

        const data: WPPortfolio = await res.json();
        return { data, error: null };
    } catch (error) {
        console.error('Error updating portfolio item:', error);
        return { data: null, error: 'Failed to update portfolio item' };
    }
}

/** Delete a portfolio item (requires JWT auth) */
export async function deletePortfolioItem(
    id: number,
    token: string
): Promise<APIResponse<{ deleted: boolean }>> {
    try {
        const res = await fetch(`${WP_API}/wp/v2/portfolio/${id}?force=true`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (!res.ok) {
            return { data: null, error: `Failed to delete portfolio item: ${res.status}` };
        }

        return { data: { deleted: true }, error: null };
    } catch (error) {
        console.error('Error deleting portfolio item:', error);
        return { data: null, error: 'Failed to delete portfolio item' };
    }
}

// ============================================
// SERVICES (Custom Post Type)
// ============================================

/** Fetch all services */
export async function getAllServices(): Promise<APIResponse<WPService[]>> {
    try {
        const res = await fetch(
            `${WP_API}/wp/v2/services?_embed&per_page=100`,
            { next: { revalidate: 60 } }
        );

        if (!res.ok) {
            return { data: null, error: `Failed to fetch services: ${res.status}` };
        }

        const data: WPService[] = await res.json();
        return { data, error: null };
    } catch (error) {
        console.error('Error fetching services:', error);
        return { data: null, error: 'Failed to fetch services' };
    }
}

/** Fetch a single service by slug */
export async function getServiceBySlug(slug: string): Promise<APIResponse<WPService>> {
    try {
        const res = await fetch(
            `${WP_API}/wp/v2/services?slug=${slug}&_embed`,
            { next: { revalidate: 60 } }
        );

        if (!res.ok) {
            return { data: null, error: `Failed to fetch service: ${res.status}` };
        }

        const data: WPService[] = await res.json();
        if (data.length === 0) {
            return { data: null, error: 'Service not found' };
        }

        return { data: data[0], error: null };
    } catch (error) {
        console.error('Error fetching service:', error);
        return { data: null, error: 'Failed to fetch service' };
    }
}

// ============================================
// CONTACT FORM
// ============================================

/** Submit contact form data to WordPress custom REST endpoint */
export async function submitContactForm(
    formData: ContactFormData
): Promise<APIResponse<{ success: boolean; message: string }>> {
    try {
        const res = await fetch(`${WP_API}/custom/v1/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (!res.ok) {
            return { data: null, error: `Failed to submit form: ${res.status}` };
        }

        const data = await res.json();
        return { data: { success: true, message: data.message || 'Form submitted successfully' }, error: null };
    } catch (error) {
        console.error('Error submitting contact form:', error);
        return { data: null, error: 'Failed to submit form. Please try again later.' };
    }
}

// ============================================
// MESSAGES (Contact Form Submissions - Admin)
// ============================================

/** Fetch all contact form messages (requires JWT auth) */
export async function getAllMessages(token: string): Promise<APIResponse<WPMessage[]>> {
    try {
        const res = await fetch(
            `${WP_API}/wp/v2/messages?per_page=100&orderby=date&order=desc`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        if (!res.ok) {
            return { data: null, error: `Failed to fetch messages: ${res.status}` };
        }

        const data: WPMessage[] = await res.json();
        return { data, error: null };
    } catch (error) {
        console.error('Error fetching messages:', error);
        return { data: null, error: 'Failed to fetch messages' };
    }
}

/** Delete a message (requires JWT auth) */
export async function deleteMessage(
    id: number,
    token: string
): Promise<APIResponse<{ deleted: boolean }>> {
    try {
        const res = await fetch(`${WP_API}/wp/v2/messages/${id}?force=true`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (!res.ok) {
            return { data: null, error: `Failed to delete message: ${res.status}` };
        }

        return { data: { deleted: true }, error: null };
    } catch (error) {
        console.error('Error deleting message:', error);
        return { data: null, error: 'Failed to delete message' };
    }
}

// ============================================
// CATEGORIES
// ============================================

/** Fetch all categories */
export async function getAllCategories(): Promise<APIResponse<{ id: number; name: string; slug: string; count: number }[]>> {
    try {
        const res = await fetch(
            `${WP_API}/wp/v2/categories?per_page=100`,
            { next: { revalidate: 60 } }
        );

        if (!res.ok) {
            return { data: null, error: `Failed to fetch categories: ${res.status}` };
        }

        const data = await res.json();
        return { data, error: null };
    } catch (error) {
        console.error('Error fetching categories:', error);
        return { data: null, error: 'Failed to fetch categories' };
    }
}

// ============================================
// AUTHENTICATION (JWT)
// ============================================

/** Login to WordPress via JWT Authentication */
export async function loginToWordPress(
    username: string,
    password: string
): Promise<APIResponse<AuthResponse>> {
    try {
        const res = await fetch(`${WP_API}/jwt-auth/v1/token`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (!res.ok) {
            const errorData = await res.json();
            return { data: null, error: errorData.message || 'Authentication failed' };
        }

        const data: AuthResponse = await res.json();
        return { data, error: null };
    } catch (error) {
        console.error('Error logging in:', error);
        return { data: null, error: 'Login failed. Please try again.' };
    }
}

/** Validate an existing JWT token */
export async function validateToken(token: string): Promise<boolean> {
    try {
        const res = await fetch(`${WP_API}/jwt-auth/v1/token/validate`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return res.ok;
    } catch {
        return false;
    }
}
