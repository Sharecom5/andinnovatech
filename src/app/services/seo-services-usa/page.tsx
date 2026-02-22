import { Metadata } from 'next';
import GeoLandingPage from '@/components/GeoLandingPage';

export const metadata: Metadata = {
    title: 'SEO Services for Businesses in the USA | AndInnovatech',
    description: 'Top-rated SEO services for US-based companies. Drive organic growth, improve search rankings, and dominate the USA market with our expert SEO strategies.',
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
