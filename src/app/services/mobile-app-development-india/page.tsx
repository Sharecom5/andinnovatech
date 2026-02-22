import { Metadata } from 'next';
import GeoLandingPage from '@/components/GeoLandingPage';

export const metadata: Metadata = {
    title: 'Mobile App Development in India | iOS & Android App Experts',
    description: 'Top-tier mobile app development for the Indian market. We build engaging, high-performance apps for startups and enterprises across India.',
};

export default function MobileAppDevIndia() {
    return (
        <GeoLandingPage
            country="India"
            service="Mobile App Development"
            h1="Mobile App Development Experts in India"
            description="Engage the massive Indian mobile audience with intuitive, high-performance apps designed for the unique requirements of the Indian market."
            points={[
                'Expertise in building lightweight, data-efficient apps for the Indian mobile user.',
                'Support for diverse regional languages and localized user experiences.',
                'High-quality iOS and Android development using React Native and Flutter.',
                'Local market insights to drive app engagement and user retention in India.',
                'Rapid development cycles and transparent project management.',
                'End-to-end services from design to deployment on App Store and Play Store.',
            ]}
        />
    );
}
