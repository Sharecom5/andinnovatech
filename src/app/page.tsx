import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import Clients from '@/components/sections/Clients';
import Services from '@/components/sections/Services';
import Stats from '@/components/sections/Stats';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import PortfolioPreview from '@/components/sections/PortfolioPreview';
import Testimonials from '@/components/sections/Testimonials';
import ContactFormSection from '@/components/sections/ContactForm';
import BlogPreview from '@/components/sections/BlogPreview';

export const metadata: Metadata = {
  title: 'AnD Innovatech | IT & SEO Excellence in USA, Canada, India',
  description: 'Empowering Your Business with IT & SEO Excellence. Custom software, stunning websites, and powerful SEO strategies.',
};

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <Hero
        imageSrc="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop"
      />

      {/* Trusted By Logos */}
      <Clients />

      {/* Stats Quick View */}
      <Stats />

      {/* Main Services Section */}
      <Services />

      {/* High-Impact Portfolio Showcase */}
      <PortfolioPreview />

      {/* Why Choose Us - Authority Builder */}
      <WhyChooseUs />

      {/* Insights & Blog */}
      <BlogPreview />

      {/* Social Proof */}
      <Testimonials />

      {/* Final Conversion Point */}
      <section className="bg-slate-50 dark:bg-navy py-24" id="contact">
        <div className="section-container">
          <ContactFormSection />
        </div>
      </section>
    </div>
  );
}
