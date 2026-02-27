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
import CTA from '@/components/sections/CTA';
import FAQ from '@/components/sections/FAQ';

export const metadata: Metadata = {
  title: 'Top-Rated Software & Web Development Agency | AnD Innovatech',
  description: 'AnD Innovatech delivers high-performance custom software, modern website development, and data-driven SEO for US startups and SMBs. Transparent communication, US timezone hours, and proven ROI-focused results.',
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

      {/* Social Proof */}
      <Testimonials />

      {/* FAQ - Objection Handler */}
      <FAQ />

      {/* Final Conversion Point - CTA */}
      <CTA />

      {/* Insights & Blog */}
      <BlogPreview />

      {/* Contact Form */}
      <section className="bg-slate-50 dark:bg-navy py-24 overflow-hidden" id="contact">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy dark:text-white mb-4">
              Let&apos;s Talk About Your Project
            </h2>
            <p className="text-grey dark:text-slate-400">
              Fill out the form below and tell us what you&apos;re working on. We&apos;ll reply with next steps, estimated timeline, and ballpark pricing — within 4 business hours.
            </p>
          </div>
          <ContactFormSection />
        </div>
      </section>
    </div>
  );
}
