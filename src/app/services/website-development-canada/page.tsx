import { Metadata } from 'next';
import GeoLandingPage from '@/components/GeoLandingPage';

export const metadata: Metadata = {
    title: 'Website Development for Canadian Businesses | AndInnovatech',
    description: 'Professional website development services for companies across Canada. We build responsive, high-performing websites optimized for the Canadian market.',
};

export default function WebsiteDevCanada() {
    return (
        <GeoLandingPage
            country="Canada"
            service="Website Development"
            h1="Professional Website Development for Canadian Businesses"
            description="Create a stunning digital presence with our high-performance website development services built for Canadian enterprises and startups."
            points={[
                'Modern, responsive designs that appeal to the Canadian market aesthetic.',
                'Optimization for speed and accessibility across all Canadian provinces.',
                'E-commerce solutions tailored for Canadian payment and shipping providers.',
                'Strategic collaboration with full communication overlap in all Canada time zones.',
                'SEO-integrated development to ensure visibility in Google.ca search results.',
                'Dedicated support and maintenance for long-term website performance.',
            ]}
        />
    );
}
