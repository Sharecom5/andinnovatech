import { Metadata } from 'next';
import GeoLandingPage from '@/components/GeoLandingPage';

export const metadata: Metadata = {
    title: 'SEO Services for Businesses in Canada',
    description: 'Specialist SEO for Canadian SMBs. We deliver organic search dominance through technical excellence and strategic growth.',
        alternates: {
        canonical: 'https://www.andinnovatech.com/services/seo-services-canada/',
    },
    openGraph: {
        title: 'SEO Services for Businesses in Canada',
        description: 'Elite SEO for Canadian market growth.',
        url: 'https://www.andinnovatech.com/services/seo-services-canada/',
        images: [{ url: 'https://www.andinnovatech.com/images/seo_abstract.png' }],
    }

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
