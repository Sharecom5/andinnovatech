import { Metadata } from 'next';
import GeoLandingPage from '@/components/GeoLandingPage';

export const metadata: Metadata = {
    title: 'SEO Services for Businesses in the USA',
    description: 'Specialist SEO for US SMBs. We deliver organic search dominance through technical excellence and strategic growth across all 50 states.',
        alternates: {
        canonical: 'https://www.andinnovatech.com/services/seo-services-usa/',
    },
    openGraph: {
        title: 'SEO Services for Businesses in the USA',
        description: 'Elite SEO for the US market.',
        url: 'https://www.andinnovatech.com/services/seo-services-usa/',
        images: [{ url: 'https://www.andinnovatech.com/images/seo_abstract.png' }],
    }

};

export default function SEOServicesUSA() {
    return (
        <GeoLandingPage
            country="USA"
            service="SEO Services"
            h1="SEO Services for Businesses in the USA"
            description="Elevate your search rankings and grow your organic traffic with our data-driven SEO strategies specifically designed for the American market."
            points={[
                'Deep understanding of the US search landscape and consumer behavior.',
                'Expertise in local SEO for multi-state operations and local businesses.',
                'High-quality content strategies targeting US-based audiences.',
                'Proven track record with US clients across diverse industries.',
                'Seamless communication aligned with US time zones (EST, CST, MST, PST).',
                'Transparent reporting and ROI-focused search marketing.',
            ]}
        />
    );
}
