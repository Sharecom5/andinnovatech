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
import PricingPreview from '@/components/sections/PricingPreview';
import AiAutomationSaaS from '@/components/sections/AiAutomationSaaS';

export const metadata: Metadata = {
  title: 'ROI-Driven Software & SEO for US Home Services | AnD Innovatech',
  description: 'Stop losing leads to competitors. We build high-performance websites, #1 SEO rankings, and AI-powered booking systems for US service companies. Save 40-60% vs local agencies. Get a free audit!',
};

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-white dark:bg-navy text-navy dark:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'AnD Innovatech',
            url: 'https://www.andinnovatech.com',
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://www.andinnovatech.com/blog/?q={search_term_string}',
              'query-input': 'required name=search_term_string',
            },
          }),
        }}
      />
      {/* Hero Section */}
      <Hero
        title={<>Strategic <span className="gradient-text">Software Development</span>, ROI-Focused SEO & <span className="gradient-text">AI Automation</span></>}
        subtitle="We build high-performance digital products and AI Growth Platforms for local service businesses and US Startups. Automate leads, bookings, and customer support 24/7."
        imageSrc="/images/hero_main_abstract.png"
        showStats={false}
      />

      {/* Trusted By Logos */}
      <Clients />

      {/* Stats Quick View */}
      <Stats />

      {/* AI Automation SaaS */}
      <AiAutomationSaaS />

      {/* Main Services Section */}
      <Services />

      {/* Pricing - Conversational Friction Reducer */}
      <PricingPreview />

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
