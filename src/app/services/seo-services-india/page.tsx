import { Metadata } from 'next';
import GeoLandingPage from '@/components/GeoLandingPage';

export const metadata: Metadata = {
    title: 'SEO Services in India | Grow Your Business Nationally',
    description: 'Leading SEO services for businesses across India. Increase your organic visibility in Mumbai, Delhi, Bangalore, and capture the Indian digital market.',
        alternates: {
        canonical: 'https://www.andinnovatech.com/services/seo-services-india/',
    },
    openGraph: {
        title: 'SEO Services in India | Grow Your Business Nationally',
        description: 'Elite SEO for the Indian market.',
        url: 'https://www.andinnovatech.com/services/seo-services-india/',
        images: [{ url: 'https://www.andinnovatech.com/images/seo_abstract.png' }],
    }

};

export default function SEOServicesIndia() {
    return (
        <GeoLandingPage
            country="India"
            service="SEO Services"
            h1="Leading SEO Services for Businesses in India"
            description="Capture the massive Indian digital market with our advanced SEO strategies that drive organic visibility and high-quality leads."
            points={[
                'Expertise in navigating the diverse and competitive Indian search market.',
                'Local SEO strategies for major Indian hubs like Delhi, Mumbai, and Bangalore.',
                'Scalable SEO solutions for growing Indian startups and established enterprises.',
                'Content strategies that cater to the evolving Indian digital consumer.',
                '24/7 support and local communication for seamless project coordination.',
                'Results-oriented approach focusing on domestic and international visibility.',
            ]}
        />
    );
}
