"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle2, XCircle, Loader2, UserCheck, Calendar, MapPin } from "lucide-react";
import Link from "next/link";

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
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
      </div>
    );
  }

  if (error || !visitor) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center">
        <div className="bg-red-50 border border-red-200 p-10 rounded-3xl max-w-sm w-full shadow-xl">
          <XCircle className="w-20 h-20 text-red-500 mb-6 mx-auto" />
          <h1 className="text-3xl font-black text-red-600 mb-2 uppercase">Invalid Pass</h1>
          <p className="text-slate-500 mb-8">This QR code does not link to a valid EntryFlow pass.</p>
          <Link href="/pass" className="w-full block bg-slate-100 hover:bg-slate-200 text-slate-800 py-4 rounded-2xl font-bold transition-all text-center">
            Go to Landing Page
          </Link>
        </div>
      </div>
    );
  }

  const isEntered = visitor.status === "entered";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 font-sans flex flex-col items-center py-20 px-6">
      {/* Header */}
      <div className="bg-white border-b border-slate-100 fixed top-0 left-0 right-0 px-6 py-4 flex items-center gap-3 z-10">
        <div className="bg-blue-600 w-8 h-8 rounded-lg flex items-center justify-center font-black text-white text-sm">E</div>
        <span className="font-black text-slate-900">Entry<span className="text-blue-600">Flow</span> <span className="font-normal text-slate-400 text-sm">· Verification</span></span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md mt-16"
      >
        {/* Status Header */}
        <div className={`py-5 text-center rounded-t-3xl border border-b-0 ${isEntered ? 'bg-green-50 border-green-200' : 'bg-white border-slate-200'}`}>
          <p className={`text-[10px] font-black uppercase tracking-[0.3em] ${isEntered ? 'text-green-600' : 'text-blue-600'}`}>
            {isEntered ? "Verification Confirmed" : "Security Checkpoint"}
          </p>
        </div>

        {/* Main Card */}
        <div className={`bg-white border border-t-0 ${isEntered ? 'border-green-200' : 'border-slate-200'} p-10 rounded-b-3xl shadow-xl`}>
          {/* Icon */}
          <div className={`w-28 h-28 rounded-full flex items-center justify-center mx-auto mb-6 border-4 ${isEntered ? 'bg-green-50 border-green-400 shadow-green-200 shadow-lg' : 'bg-blue-50 border-blue-400 shadow-blue-200 shadow-lg'}`}>
            {isEntered ? <CheckCircle2 className="w-14 h-14 text-green-600" /> : <ShieldCheck className="w-14 h-14 text-blue-600" />}
          </div>

          <div className="text-center mb-8">
            <h1 className={`text-4xl font-black tracking-tight mb-1 ${isEntered ? 'text-green-600' : 'text-slate-900'}`}>
              {isEntered ? "ACCESS GRANTED" : "PENDING ENTRY"}
            </h1>
            <p className="text-slate-400 text-sm">Attendee Official Verification</p>
          </div>

          {/* Info Block */}
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 space-y-5 mb-8">
            <div>
              <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest mb-1">Attendee Name</p>
              <p className="text-xl font-bold text-slate-900">{visitor.name}</p>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200">
              <div>
                <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest mb-1">Company</p>
                <p className="text-sm font-bold text-slate-700">{visitor.company || "—"}</p>
              </div>
              <div>
                <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest mb-1">Pass ID</p>
                <p className="font-mono text-blue-600 font-bold text-sm">{visitor.passId}</p>
              </div>
            </div>
          </div>

          {/* Action */}
          {!isEntered ? (
            <button
              onClick={handleManualCheckIn}
              disabled={verifying}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-5 rounded-2xl shadow-lg transition-all flex flex-col items-center gap-1 active:scale-[0.98]"
            >
              {verifying ? <Loader2 className="w-8 h-8 animate-spin" /> : (
                <>
                  <UserCheck className="w-7 h-7 mb-1" />
                  <span className="text-lg">CONFIRM ENTRY</span>
                  <span className="text-[10px] opacity-70 tracking-widest font-bold">STAFF USE ONLY</span>
                </>
              )}
            </button>
          ) : (
            <div className="w-full bg-green-600 text-white font-black py-5 rounded-2xl flex flex-col items-center border-b-4 border-green-800">
              <span className="text-lg">ENTRY VERIFIED</span>
              <span className="text-[10px] font-bold uppercase mt-1">
                {visitor.enteredAt ? new Date(visitor.enteredAt).toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'}) : 'Just Now'}
              </span>
            </div>
          )}
        </div>

        <p className="mt-8 text-center text-[10px] text-slate-400 uppercase tracking-[0.2em] font-bold">
          EntryFlow Protocol • Secure Chain Verification
        </p>
      </motion.div>
    </div>
  );
}
