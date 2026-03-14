import { Metadata } from 'next';
import GeoLandingPage from '@/components/GeoLandingPage';

export const metadata: Metadata = {
    title: 'Software Development for US Companies',
    description: 'Scalable software engineering for US startups. Custom ERP and SaaS solutions designed for the American market.',
    openGraph: {
        title: 'Software Development for US Companies',
        description: 'Elite software engineering for US enterprises.',
        url: 'https://www.andinnovatech.com/services/software-development-usa/',
        images: [{ url: 'https://www.andinnovatech.com/images/dev_abstract.png' }],
    }
};

export default function SoftwareDevUSA() {
    return (
        <GeoLandingPage
            country="USA"
            service="Software Development"
            h1="Custom Software Development for US Companies"
            description="Accelerate your innovation with our expert software engineering services tailored for the speed and quality required by the US market."
            points={[
                'Full-stack development expertise using modern technologies favored in the US.',
                'Agile methodologies ensuring transparent progress and rapid iteration.',
                'High caliber of engineering talent with experience on US-scale projects.',
                'Seamless communication and synchronization with US business hours.',
                'Adherence to strict data privacy and security standards relevant to the US.',
                'Cost-efficient offshore advantage without compromising on quality or speed.',
            ]}
        />
    );
}
