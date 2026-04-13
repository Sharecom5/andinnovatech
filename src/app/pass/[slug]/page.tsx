"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Ticket, User, Mail, Phone, Building2, Send, Loader2, AlertCircle, MapPin, Briefcase } from "lucide-react";

export default function RegistrationPage() {
  const { slug } = useParams();
  const router = useRouter();
  const [event, setEvent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    address: "",
    designation: "",
  });

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await fetch(`/api/events/${slug}`);
        if (!res.ok) throw new Error("Event not found");
        const data = await res.json();
        setEvent(data.event);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchEvent();
  }, [slug]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, eventSlug: slug }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Registration failed");

      // Redirect to pass page
      router.push(`/pass/${slug}/${data.passId}`);
    } catch (err: any) {
      setError(err.message);
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-navy flex items-center justify-center">
        <Loader2 className="w-10 h-10 text-primary-500 animate-spin" />
      </div>
    );
  }

  const settings = event?.passSettings || {
    showName: true,
    showDesignation: true,
    showPhone: true,
    showCompany: true
  };

  // Always show the form, use default event name if fetch failed
  const displayEventName = event?.name || "Event Registration";

  return (
    <div className="min-h-screen bg-navy text-white font-sans relative overflow-hidden">
      {/* Background Mesh */}
      <div className="absolute inset-0 z-0 bg-gradient-mesh opacity-30 pointer-events-none"></div>

      <div className="relative z-10 max-w-xl mx-auto pt-20 pb-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-secondary/20 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl"
        >
          <div className="text-center mb-10">
            <div className="bg-primary-900/40 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-primary-500/20 shadow-glow-primary">
              <Ticket className="w-10 h-10 text-primary-500" />
            </div>
            <h1 className="text-3xl font-bold font-heading mb-2">{displayEventName}</h1>
            <p className="text-grey-400 text-sm">Please fill out the details to generate your unique QR pass.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-canada-red/10 border border-canada-red/20 p-4 rounded-xl flex items-center gap-3 text-canada-red text-sm"
                >
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  {error}
                </motion.div>
              )}
            </AnimatePresence>

            {settings.showCompany && (
              <div>
                <label className="block text-xs font-semibold text-grey-400 uppercase tracking-wider mb-2 px-1">Company Name</label>
                <div className="relative">
                  <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-grey-500" />
                  <input
                    type="text"
                    required={settings.showCompany}
                    placeholder="Your Company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-black/20 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary-500 outline-none transition-all placeholder:text-grey-600"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-grey-400 uppercase tracking-wider mb-2 px-1">Address</label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-grey-500" />
                <input
                  type="text"
                  required
                  placeholder="Office Address"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full bg-black/20 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary-500 outline-none transition-all placeholder:text-grey-600"
                />
              </div>
            </div>

            <div className={`grid grid-cols-1 ${settings.showDesignation ? 'md:grid-cols-2' : ''} gap-5`}>
              <div>
                <label className="block text-xs font-semibold text-grey-400 uppercase tracking-wider mb-2 px-1">Contact Person</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-grey-500" />
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-black/20 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary-500 outline-none transition-all placeholder:text-grey-600"
                  />
                </div>
              </div>
              {settings.showDesignation && (
                <div>
                  <label className="block text-xs font-semibold text-grey-400 uppercase tracking-wider mb-2 px-1">Designation</label>
                  <div className="relative">
                    <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-grey-500" />
                    <input
                      type="text"
                      required={settings.showDesignation}
                      placeholder="Manager / Director"
                      value={formData.designation}
                      onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                      className="w-full bg-black/20 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary-500 outline-none transition-all placeholder:text-grey-600"
                    />
                  </div>
                </div>
              )}
            </div>

            <div className={`grid grid-cols-1 ${settings.showPhone ? 'md:grid-cols-2' : ''} gap-5`}>
              {settings.showPhone && (
                <div>
                  <label className="block text-xs font-semibold text-grey-400 uppercase tracking-wider mb-2 px-1">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-grey-500" />
                    <input
                      type="tel"
                      required={settings.showPhone}
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-black/20 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary-500 outline-none transition-all placeholder:text-grey-600"
                    />
                  </div>
                </div>
              )}
              <div>
                <label className="block text-xs font-semibold text-grey-400 uppercase tracking-wider mb-2 px-1">Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-grey-500" />
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-black/20 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary-500 outline-none transition-all placeholder:text-grey-600"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-primary hover:bg-primary-500 text-white py-5 rounded-xl font-bold transition-all shadow-glow-primary active:scale-[0.98] flex items-center justify-center gap-2 mt-4"
            >
              {submitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Generating Pass...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Get My Unique Pass
                </>
              )}
            </button>

            <p className="text-[10px] text-center text-grey-500 uppercase tracking-widest pt-4">
              Secure Registration Powered by EntryFlow
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
