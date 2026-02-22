import { Metadata } from 'next';
import GeoLandingPage from '@/components/GeoLandingPage';

export const metadata: Metadata = {
    title: 'Software Development for US Companies | AndInnovatech',
    description: 'Scalable custom software development for businesses in the USA. We provide high-quality engineering and seamless communication for US-based projects.',
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
