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
    default: 'AnD Innovatech | Strategic IT & SEO Agency for US SMBs',
    template: '%s | AnD Innovatech',
  },
  description: 'AnD Innovatech is a results-driven IT agency specializing in custom software, high-performance web development, and ROI-focused SEO campaigns for US-based businesses. Save 40-60% vs. local firms.',
  metadataBase: new URL('https://andinnovatech.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://andinnovatech.com',
    siteName: 'AnD Innovatech',
    title: 'AnD Innovatech | Strategic IT & SEO Agency for US SMBs',
    description: 'Empowering US businesses with innovative IT solutions and growth-focused SEO strategy. Real accountability. Proven results.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AnD Innovatech | Strategic IT & SEO Agency for US SMBs',
    description: 'Empowering US businesses with innovative IT solutions and growth-focused SEO strategy.',
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
