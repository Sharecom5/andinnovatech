"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, Mail, Ticket, Loader2, ArrowRight, 
  MapPin, Calendar, CheckCircle2, AlertCircle 
} from "lucide-react";
import Link from "next/link";

export default function PassRecoveryPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any[] | null>(null);
  const [error, setError] = useState("");

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResults(null);

    try {
      const res = await fetch(`/api/pass/recover?email=${encodeURIComponent(email)}`);
      const data = await res.json();
      
      if (!res.ok) throw new Error(data.error || "Failed to find passes");
      
      setResults(data.passes);
      if (data.passes.length === 0) {
        setError("No active passes found for this email address.");
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-navy text-white font-sans selection:bg-primary-500/30">
      <div className="absolute inset-0 z-0 bg-gradient-mesh opacity-20 pointer-events-none"></div>

      <main className="relative z-10 max-w-2xl mx-auto px-6 pt-32 pb-20">
        <div className="text-center mb-12">
           <div className="bg-primary-500/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-primary-500/20 shadow-glow-primary">
              <Search className="w-10 h-10 text-primary-500" />
           </div>
           <h1 className="text-4xl font-bold font-heading mb-4 tracking-tight">Recover Your Pass</h1>
           <p className="text-grey-400 text-lg">Enter the email you used during registration to access your digital entry passes.</p>
        </div>

        {/* Search Form */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-secondary/20 backdrop-blur-3xl border border-white/10 p-8 rounded-[2.5rem] shadow-2xl mb-12"
        >
          <form onSubmit={handleSearch} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-grey-500 uppercase tracking-widest px-1">Registration Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-grey-600" />
                <input 
                  required
                  type="email" 
                  placeholder="name@example.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value.toLowerCase())}
                  className="w-full bg-black/30 border border-white/10 rounded-xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-primary-500 transition-all font-medium text-white"
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-primary hover:bg-primary-500 text-white font-bold py-5 rounded-2xl shadow-glow-primary transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
            >
              {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : <>Find My Passes <ArrowRight className="w-5 h-5" /></>}
            </button>
          </form>
        </motion.div>

        {/* Results Area */}
        <AnimatePresence mode="wait">
          {error && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-canada-red/10 border border-canada-red/20 text-canada-red p-6 rounded-2xl flex items-center gap-4"
            >
              <AlertCircle className="w-6 h-6 shrink-0" />
              <p className="font-medium text-sm">{error}</p>
            </motion.div>
          )}

          {results && results.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <p className="text-xs font-bold text-grey-500 uppercase tracking-widest mb-4 px-1">Found {results.length} Passes</p>
              {results.map((pass, i) => (
                <Link 
                  key={pass.passId}
                  href={`/pass/${pass.eventSlug || 'event'}/${pass.passId}`}
                  className="block bg-secondary/10 hover:bg-secondary/20 border border-white/5 hover:border-white/10 p-6 rounded-3xl transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-5">
                       <div className="bg-primary-500/10 w-14 h-14 rounded-2xl flex items-center justify-center border border-primary-500/20 text-primary-500 font-bold group-hover:scale-110 transition-transform">
                          <Ticket className="w-6 h-6" />
                       </div>
                       <div>
                          <h3 className="text-xl font-bold mb-1 tracking-tight">{pass.eventName || 'Official Event'}</h3>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                             <div className="flex items-center gap-1.5 text-xs text-grey-500 font-medium">
                                <Calendar className="w-3.5 h-3.5" />
                                {new Date(pass.eventDate).toLocaleDateString([], {month: 'short', day: 'numeric', year: 'numeric'})}
                             </div>
                             <div className="flex items-center gap-1.5 text-xs text-grey-500 font-medium max-w-[150px] truncate">
                                <MapPin className="w-3.5 h-3.5" />
                                {pass.eventVenue}
                             </div>
                          </div>
                       </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                       <div className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded ${pass.status === 'entered' ? 'bg-green-500/20 text-green-500' : 'bg-primary-500/20 text-primary-500'}`}>
                          {pass.status === 'entered' ? 'Used' : 'Active'}
                       </div>
                       <div className="font-mono text-[10px] text-grey-600 font-bold tracking-widest">{pass.passId}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <p className="mt-20 text-center text-[10px] text-grey-600 uppercase tracking-[0.3em] font-bold">
          EntryFlow Secure Pass Recovery
        </p>
      </main>
    </div>
  );
}
