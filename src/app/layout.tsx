import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('@/components/layout/Navbar'), { ssr: true });
const Footer = dynamic(() => import('@/components/layout/Footer'), { ssr: true });
const BackToTop = dynamic(() => import('@/components/ui/BackToTop'), { ssr: false });
const AIChatbot = dynamic(() => import('@/components/AIChatbot'), { ssr: false });
const CookieConsent = dynamic(() => import('@/components/ui/CookieConsent'), { ssr: false });
const LeadMagnet = dynamic(() => import('@/components/LeadMagnet'), { ssr: false });

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'AnD Innovatech | Software & SEO for US Service Businesses',
    template: '%s | AnD Innovatech',
  },
  description: 'Elite software engineering meets #1 SEO rankings. We help US and Canada small businesses scale with custom web builds and AI lead automation. Save 40-60% today.',
  metadataBase: new URL('https://www.andinnovatech.com'),
  alternates: {
    canonical: 'https://www.andinnovatech.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.andinnovatech.com',
    siteName: 'AnD Innovatech',
    title: 'Growth-Focused Software & SEO Agency | AnD Innovatech',
    description: 'Stop losing leads to competitors. Custom web builds, technical SEO, and AI automation for US service companies. Scalable results, zero overhead.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Growth-Focused Software & SEO Agency | AnD Innovatech',
    description: 'Custom web builds, technical SEO, and AI automation for US service companies.',
  },
  verification: {
    google: 'Raoc_zOx3RRFvtK-d-PKnPlTwzUNPpEa1MQZOFyud9U',
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#409191',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  '@id': 'https://www.andinnovatech.com/#organization',
                  name: 'AnD Innovatech',
                  url: 'https://www.andinnovatech.com',
                  logo: 'https://www.andinnovatech.com/logo.png',
                  sameAs: [
                    'https://www.linkedin.com/company/andinnovatech/',
                  ],
                  contactPoint: [
                    {
                      '@type': 'ContactPoint',
                      email: 'hello@andinnovatech.com',
                      contactType: 'customer service',
                    },
                  ],
                  founder: [
                    { '@type': 'Person', name: 'Abhishek Sharma' },
                    { '@type': 'Person', name: 'Ankit Sharma' }
                  ],
                  employee: [
                    { '@type': 'Person', name: 'Sarah Jones', jobTitle: 'Lead Client Success' }
                  ],
                },
                {
                  '@type': 'ProfessionalService',
                  '@id': 'https://www.andinnovatech.com/#service',
                  name: 'AnD Innovatech IT & SEO Services',
                  image: 'https://www.andinnovatech.com/logo.png',
                  url: 'https://www.andinnovatech.com',
                  telephone: '+1 (123) 456-7890',
                  priceRange: '$$$',
                  parentOrganization: { '@id': 'https://www.andinnovatech.com/#organization' },
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'New York',
                    addressRegion: 'NY',
                    addressCountry: 'US',
                  },
                  openingHoursSpecification: {
                    '@type': 'OpeningHoursSpecification',
                    dayOfWeek: [
                      'Monday',
                      'Tuesday',
                      'Wednesday',
                      'Thursday',
                      'Friday'
                    ],
                    opens: '09:00',
                    closes: '18:00'
                  },
                }
              ]
            }),
          }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BackToTop />
        <AIChatbot />
        <LeadMagnet />
        <CookieConsent />
      </body>
    </html>
  );
}
