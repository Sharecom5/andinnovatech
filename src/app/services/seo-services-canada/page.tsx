import { Metadata } from 'next';
import GeoLandingPage from '@/components/GeoLandingPage';

export const metadata: Metadata = {
    title: 'SEO Services for Businesses in Canada | AndInnovatech',
    description: 'Expert SEO services tailored for the Canadian market. Improve your rankings on Google.ca and grow your business in Toronto, Vancouver, and beyond.',
};

export default function SEOServicesCanada() {
    return (
        <GeoLandingPage
            country="Canada"
            service="SEO Services"
            h1="SEO Services for Businesses in Canada"
            description="Drive more Canadian traffic and leads with our specialized SEO services built for the unique competitive landscape of the Canadian market."
            points={[
                'Specialized optimization for Google.ca to dominate local searches.',
                'Expertise in Canadian market dynamics and regional search intent.',
                'Content strategies that resonate with Canadian consumers and businesses.',
                'Proven results for clients in Toronto, Vancouver, Montreal, and Calgary.',
                'Full communication overlap with Canadian business hours.',
                'Cost-effective SEO solutions delivering high value for Canadian SMEs.',
            ]}
        />
    );
}
