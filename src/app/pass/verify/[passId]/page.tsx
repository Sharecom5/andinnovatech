"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, AlertCircle, CheckCircle2, 
  XCircle, Loader2, ArrowLeft, User, 
  Building2, Calendar, MapPin, UserCheck 
} from "lucide-react";

export default function PublicVerificationPage() {
  const { passId } = useParams();
  const router = useRouter();
  
  const [visitor, setVisitor] = useState<any>(null);
  const [event, setEvent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [verifying, setVerifying] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPassData = async () => {
      try {
        const res = await fetch(`/api/pass/${passId}`);
        if (!res.ok) throw new Error("Pass not found or invalid");
        const data = await res.json();
        setVisitor(data.visitor);
        setEvent(data.eventSettings);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (passId) fetchPassData();
  }, [passId]);

  const handleManualCheckIn = async () => {
    setVerifying(true);
    try {
      const res = await fetch(`/api/pass/${passId}`, { 
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ eventSlug: event?.slug })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Check-in failed");
      setVisitor(data.visitor);
    } catch (err: any) {
      alert(err.message);
    } finally {
      setVerifying(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-navy flex items-center justify-center">
        <Loader2 className="w-10 h-10 text-primary-500 animate-spin" />
      </div>
    );
  }

  if (error || !visitor) {
    return (
      <div className="min-h-screen bg-navy flex flex-col items-center justify-center p-6 text-center text-white">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           className="bg-secondary/20 backdrop-blur-3xl border border-white/10 p-10 rounded-[2.5rem] shadow-2xl max-w-sm w-full"
        >
          <XCircle className="w-20 h-20 text-canada-red mb-6 mx-auto" />
          <h1 className="text-3xl font-bold font-heading mb-2 uppercase tracking-tight text-canada-red">Invalid Pass</h1>
          <p className="text-grey-400 mb-8">This QR code does not point to a valid EntryFlow pass.</p>
          <button 
            onClick={() => router.push("/pass")}
            className="w-full bg-white/10 hover:bg-white/20 text-white py-4 rounded-2xl font-bold transition-all"
          >
            Go to Landing Page
          </button>
        </motion.div>
      </div>
    );
  }

  const isEntered = visitor.status === 'entered';

  return (
    <div className="min-h-screen bg-navy text-white font-sans relative overflow-hidden flex flex-col items-center py-20 px-6">
      <div className="absolute inset-0 z-0 bg-gradient-mesh opacity-20 pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Header Ribbon */}
        <div className={`py-4 text-center rounded-t-[2.5rem] border-x border-t border-white/10 backdrop-blur-md ${isEntered ? 'bg-green-600/20' : 'bg-primary-600/20'}`}>
           <p className={`text-[10px] font-black uppercase tracking-[0.3em] ${isEntered ? 'text-green-400' : 'text-primary-400'}`}>
             {isEntered ? 'Verification Confirmed' : 'Security Checkpoint'}
           </p>
        </div>

        {/* Main Card */}
        <div className="bg-secondary/20 backdrop-blur-3xl border-x border-b border-white/10 p-10 rounded-b-[2.5rem] shadow-2xl overflow-hidden relative">
          
          <div className="text-center mb-10">
            <div className={`w-28 h-28 rounded-full flex items-center justify-center mx-auto mb-6 border-4 shadow-2xl transition-all ${isEntered ? 'bg-green-500/10 border-green-500/50 shadow-green-500/20' : 'bg-primary-500/10 border-primary-500/50 shadow-primary-500/20'}`}>
              {isEntered ? (
                <CheckCircle2 className="w-16 h-16 text-green-500" />
              ) : (
                <ShieldCheck className="w-16 h-16 text-primary-500" />
              )}
            </div>
            <h1 className={`text-4xl font-extrabold font-heading mb-1 tracking-tight ${isEntered ? 'text-green-500' : 'text-white'}`}>
              {isEntered ? 'ACCESS GRANTED' : 'PENDING ENTRY'}
            </h1>
            <p className="text-grey-400 text-sm font-medium tracking-tight">Attendee Official Verification</p>
          </div>

          {/* Attendee Info Block */}
          <div className="bg-black/30 border border-white/5 rounded-3xl p-8 space-y-6 mb-10">
            <div>
              <p className="text-[10px] text-grey-500 uppercase font-black tracking-widest leading-none mb-2">Attendee Name</p>
              <div className="flex items-center gap-3">
                 <User className="w-5 h-5 text-primary-400" />
                 <p className="text-xl font-bold">{visitor.name}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 pt-4 border-t border-white/5">
              <div>
                <p className="text-[10px] text-grey-500 uppercase font-black tracking-widest leading-none mb-2">Company / Organization</p>
                <div className="flex items-center gap-3">
                   <Building2 className="w-4 h-4 text-grey-400" />
                   <p className="text-sm font-bold">{visitor.company || 'Not Specified'}</p>
                </div>
              </div>
              <div>
                <p className="text-[10px] text-grey-500 uppercase font-black tracking-widest leading-none mb-2">Pass Identification</p>
                <div className="flex items-center gap-3">
                   <p className="font-mono text-primary-400 font-bold bg-primary-400/10 px-2 py-0.5 rounded text-xs">{visitor.passId}</p>
                   <span className="text-[10px] bg-white/5 px-2 py-0.5 rounded text-grey-400 font-bold">{visitor.passType.toUpperCase()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Button */}
          {!isEntered ? (
            <button
              onClick={handleManualCheckIn}
              disabled={verifying}
              className="w-full bg-primary hover:bg-primary-500 text-white font-black py-6 rounded-2xl shadow-glow-primary transition-all flex flex-col items-center justify-center gap-1 active:scale-[0.98]"
            >
              {verifying ? (
                <Loader2 className="w-8 h-8 animate-spin" />
              ) : (
                <>
                  <UserCheck className="w-7 h-7 mb-1" />
                  <span className="text-lg">CONFIRM ENTRY</span>
                  <span className="text-[10px] opacity-70 tracking-widest font-bold">STAFF USE ONLY</span>
                </>
              )}
            </button>
          ) : (
            <div className="w-full bg-green-500/10 border-2 border-green-500 text-green-500 font-black py-6 rounded-2xl flex flex-col items-center justify-center">
              <span className="text-lg">ENTRY VERIFIED</span>
              <span className="text-[10px] opacity-100 tracking-widest font-bold uppercase mt-1 px-3 py-0.5 bg-green-500 text-navy rounded">
                Scanned at {visitor.enteredAt ? new Date(visitor.enteredAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) : 'Just Now'}
              </span>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="mt-8 text-center space-y-4">
           <div className="flex items-center justify-center gap-8 text-grey-500 text-[10px] font-bold tracking-widest uppercase">
              <div className="flex items-center gap-1">
                 <Calendar className="w-3 h-3" /> {new Date(visitor.eventDate).toLocaleDateString()}
              </div>
              <div className="flex items-center gap-1">
                 <MapPin className="w-3 h-3" /> Gate Area
              </div>
           </div>
           <p className="text-[10px] text-grey-600 uppercase tracking-[0.2em] font-bold">
              EntryFlow Protocol &bull; Secure Chain Verification
           </p>
        </div>
      </motion.div>
    </div>
  );
}
