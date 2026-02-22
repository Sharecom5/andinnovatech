import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BackToTop from '@/components/ui/BackToTop';
import AIChatbot from '@/components/AIChatbot';
import CookieConsent from '@/components/ui/CookieConsent';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'AndInnovatech | Empowering Your Business with IT & SEO Excellence',
    template: '%s | AndInnovatech',
  },
  description: 'Global IT company specializing in website development, custom software, and results-driven SEO services for USA, Canada, and India.',
  metadataBase: new URL('https://andinnovatech.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://andinnovatech.com',
    siteName: 'AndInnovatech',
    title: 'AndInnovatech | Empowering Business with IT & SEO',
    description: 'Empowering Your Business with IT & SEO Excellence.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AndInnovatech | Empowering Business with IT & SEO',
    description: 'Empowering Your Business with IT & SEO Excellence.',
  },
  verification: {
    google: 'Raoc_zOx3RRFvtK-d-PKnPlTwzUNPpEa1MQZOFyud9U',
  },
};

export const viewport: Viewport = {
  themeColor: '#409191',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BackToTop />
        <AIChatbot />
        <CookieConsent />
      </body>
    </html>
  );
}
