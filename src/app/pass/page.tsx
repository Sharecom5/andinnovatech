"use client";

import React from "react";
import { motion } from "framer-motion";
import { QrCode, Zap, Users, Download, ShieldCheck, CheckCircle2, LogIn, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function EventPassLandingPage() {
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-primary-500" />,
      title: "Lightning Fast Setup",
      description: "Create an event URL in seconds and start accepting registrations immediately. No coding required.",
    },
    {
      icon: <QrCode className="w-6 h-6 text-primary-500" />,
      title: "Instant QR Generation",
      description: "Every attendee automatically receives a unique, scannable QR ticket directly on their device.",
    },
    {
      icon: <Users className="w-6 h-6 text-primary-500" />,
      title: "Multi-Tenant Scalability",
      description: "Host multiple events simultaneously with separate data silos and customized domains.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-primary-500" />,
      title: "Secure Verification",
      description: "Scan QR codes at the gate to instantly verify authenticity and prevent ticket duplication.",
    },
    {
      icon: <Download className="w-6 h-6 text-primary-500" />,
      title: "One-Click Exports",
      description: "Download your entire attendee list as a CSV file to import into your CRM easily.",
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "₹7,999",
      period: "1 event",
      description: "Entry-level (easy yes). Perfect for simple digital check-ins.",
      features: [
        "1 Event",
        "Basic QR Pass",
        "No custom domain",
      ],
      cta: "Buy Now",
      highlight: false,
    },
    {
      name: "Pro",
      price: "₹14,999",
      period: "2 events",
      description: "Most Popular choice for regular event organizers.",
      features: [
        "2 Events",
        "Custom domain (subdomain)",
        "WhatsApp integration",
        "Admin dashboard",
      ],
      cta: "Buy Now",
      highlight: true,
    },
    {
      name: "Business",
      price: "₹24,999",
      period: "5 events",
      description: "The sweet spot for scaling event management companies.",
      features: [
        "5 Events",
        "Full branding",
        "Priority support",
        "CSV export",
      ],
      cta: "Buy Now",
      highlight: false,
    },
    {
      name: "Enterprise",
      price: "₹39,999+",
      period: "unlimited",
      description: "Complete solution with unlimited usage and true white-label.",
      features: [
        "Unlimited events",
        "White-label",
        "Custom domain",
        "Self-host License option",
      ],
      cta: "Contact Sales",
      highlight: false,
    },
  ];

  return (
    <div className="min-h-screen bg-navy text-white selection:bg-primary-500 selection:text-white font-sans">
      {/* Background Mesh */}
      <div className="absolute inset-0 z-0 bg-gradient-mesh opacity-50 pointer-events-none"></div>

      {/* Sticky Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/80 backdrop-blur-xl border-b border-white/5 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/pass" className="flex items-center gap-3">
            <div className="bg-primary-500 w-8 h-8 rounded-lg flex items-center justify-center font-black text-sm shadow-glow-primary">E</div>
            <span className="text-xl font-black tracking-tight">EntryFlow</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/admin/login"
              className="flex items-center gap-2 text-grey-400 hover:text-white px-4 py-2 rounded-xl font-bold text-sm transition-all"
            >
              <LogIn className="w-4 h-4" /> Sign In
            </Link>
            <Link
              href="/admin/signup"
              className="bg-primary hover:bg-primary-500 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-glow-primary flex items-center gap-2"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-40 pb-20 px-6 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary-900/50 border border-primary-500/30 text-primary-400 text-sm font-semibold tracking-wide mb-6">
            Introducing EntryFlow
          </span>
          <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight mb-8">
            The Ultimate <span className="text-transparent bg-clip-text bg-gradient-primary">Event Pass</span> System
          </h1>
          <p className="text-lg md:text-xl text-grey-300 mb-10 max-w-2xl mx-auto">
            Streamline your event check-ins with our powerful QR-code based pass generator. Built for speed, security, and exceptional user experience.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/admin/signup"
              className="bg-primary hover:bg-primary-500 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-glow-primary hover:shadow-lg w-full sm:w-auto flex items-center justify-center gap-2"
            >
              Start for Free <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/pass/demo-event"
              className="bg-secondary/50 hover:bg-secondary border border-white/10 text-white px-8 py-4 rounded-xl font-semibold transition-all w-full sm:w-auto"
            >
              Try Live Demo
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="relative z-10 py-20 px-6 bg-black/20 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Everything You Need to Manage Entry</h2>
            <p className="text-grey-400 max-w-2xl mx-auto">
              Our system replaces complex ticketing platforms with a fast, minimalist experience for both organizers and attendees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-secondary/30 border border-white/5 p-8 rounded-2xl hover:bg-secondary/50 transition-colors"
              >
                <div className="bg-primary-900/40 w-14 h-14 rounded-xl flex items-center justify-center mb-6 border border-primary-500/20">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-grey-400 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">Simple, Transparent Pricing</h2>
          <p className="text-grey-400 max-w-2xl mx-auto">
            Choose the plan that fits your execution model. We host it for you, or you run it yourself.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className={`p-1 rounded-3xl ${
                plan.highlight ? "bg-gradient-primary shadow-glow-primary" : "bg-white/10"
              }`}
            >
              <div className="bg-navy rounded-[1.4rem] p-8 h-full flex flex-col relative overflow-hidden">
                {plan.highlight && (
                  <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    MOST POPULAR
                  </div>
                )}
                
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-grey-400 text-sm mb-6 h-10">{plan.description}</p>
                
                <div className="mb-8 border-b border-white/10 pb-8">
                  <span className="text-5xl font-extrabold">{plan.price}</span>
                  <span className="text-grey-400 ml-2">/ {plan.period}</span>
                </div>

                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                      <span className="text-grey-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 rounded-xl font-bold transition-all ${
                    plan.highlight
                      ? "bg-primary hover:bg-primary-400 text-white shadow-lg"
                      : "bg-white/10 hover:bg-white/20 text-white"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center max-w-2xl mx-auto bg-primary-900/20 border border-primary-500/20 p-6 rounded-2xl">
          <p className="text-sm text-grey-300">
            <span className="font-semibold text-white">Agency or Enterprise?</span> We offer white-label reseller panels and custom enterprise licensing. <a href="mailto:contact@andinnovatech.com" className="text-primary-400 hover:text-primary-300 underline">Contact our sales team</a> for volume discounts.
          </p>
        </div>
      </section>
    </div>
  );
}
