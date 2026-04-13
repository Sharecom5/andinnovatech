"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { CheckCircle2, User, Building2, MapPin, Calendar, Loader2, AlertCircle, Download, Smartphone, QrCode, ArrowLeft } from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Link from "next/link";

export default function PassPage() {
  const { slug, passId } = useParams();
  const router = useRouter();
  const [visitor, setVisitor] = useState<any>(null);
  const [settings, setSettings] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [updating, setUpdating] = useState(false);
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    const fetchPass = async () => {
      try {
        const res = await fetch(`/api/pass/${passId}`);
        if (!res.ok) throw new Error("Pass not found");
        const data = await res.json();
        setVisitor(data.visitor);
        const ev = data.eventSettings;
        setSettings(ev ? { ...ev.passSettings, endDate: ev.endDate } : null);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    if (passId) fetchPass();
  }, [passId]);

  const markAsUsed = async () => {
    setUpdating(true);
    try {
      const res = await fetch(`/api/pass/${passId}`, { method: "POST" });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to update status");
      setVisitor({ ...visitor, status: "entered" });
    } catch (err: any) {
      alert(err.message);
    } finally {
      setUpdating(false);
    }
  };

  const downloadPass = async () => {
    const element = document.getElementById("pass-card");
    if (!element) return;
    setDownloading(true);
    try {
      const canvas = await html2canvas(element, { scale: 3, useCORS: true, backgroundColor: "#ffffff" });
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`EntryFlow_Pass_${passId}.pdf`);
    } catch (err) {
      alert("Failed to generate PDF.");
    } finally {
      setDownloading(false);
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
        <AlertCircle className="w-16 h-16 text-red-500 mb-4" />
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Invalid Pass</h1>
        <p className="text-slate-500 mb-6">This event pass could not be found or has been revoked.</p>
        <button onClick={() => router.push(`/pass/${slug}`)} className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold">
          Register New Pass
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 font-sans relative">
      {/* Header */}
      <div className="bg-white border-b border-slate-100 px-6 py-4">
        <Link href="/pass" className="flex items-center gap-3">
          <div className="bg-blue-600 w-8 h-8 rounded-lg flex items-center justify-center font-black text-white text-sm">E</div>
          <span className="font-black text-slate-900">Entry<span className="text-blue-600">Flow</span></span>
        </Link>
      </div>

      <div className="flex flex-col items-center py-12 px-6">
        <motion.div
          id="pass-card"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Pass Header Ribbon */}
          <div className="bg-blue-600 py-4 text-center">
            <p className="text-[11px] font-black uppercase tracking-[0.3em] text-blue-200">EntryFlow Digital Pass</p>
            <p className="text-white font-black text-xl mt-1">{visitor.eventName || "Event Pass"}</p>
          </div>

          <div className="p-8 flex flex-col items-center">
            {/* Status Badge */}
            <div className={`mb-6 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest ${visitor.status === 'entered' ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-blue-50 text-blue-700 border border-blue-200'}`}>
              {visitor.status === "entered" ? "✅ Checked In" : "🎟️ Active Pass"}
            </div>

            {/* QR Code */}
            <div className={`bg-white p-4 rounded-2xl border-4 ${visitor.status === 'entered' ? 'border-green-500 shadow-lg shadow-green-200' : 'border-blue-500 shadow-lg shadow-blue-200'} mb-6`}>
              <img src={visitor.qrCodeUrl} alt="QR Code" className="w-48 h-48 md:w-56 md:h-56" />
            </div>

            {/* Attendee Info */}
            <div className="text-center mb-8">
              <h2 className="text-2xl font-black text-slate-900 mb-1">{visitor.name}</h2>
              {visitor.designation && (
                <p className="text-blue-600 font-bold text-sm uppercase tracking-widest">{visitor.designation}</p>
              )}
              {visitor.company && (
                <p className="text-slate-500 text-sm mt-1">{visitor.company}</p>
              )}
            </div>

            {/* Check-in Button */}
            {visitor.status !== "entered" ? (
              <button
                onClick={markAsUsed}
                disabled={updating}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4 rounded-2xl shadow-lg transition-all flex flex-col items-center gap-1 active:scale-[0.98]"
              >
                {updating ? <Loader2 className="w-6 h-6 animate-spin" /> : <span className="text-lg">TAP TO CHECK-IN</span>}
                <span className="text-[10px] opacity-70 tracking-widest font-bold">ONLY TAP WHEN AT ENTRANCE</span>
              </button>
            ) : (
              <div className="w-full bg-green-600 text-white font-black py-4 rounded-2xl flex flex-col items-center border-b-4 border-green-800">
                <span className="text-lg">ENTRY VERIFIED</span>
                <span className="text-[10px] opacity-80 tracking-widest font-bold uppercase">
                  Authorized at {visitor.enteredAt ? new Date(visitor.enteredAt).toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'}) : 'Just Now'}
                </span>
              </div>
            )}
          </div>

          {/* Footer Details */}
          <div className="px-8 pb-8 grid grid-cols-2 gap-4 border-t border-slate-100 pt-6 bg-slate-50">
            <div>
              <p className="text-[9px] text-slate-400 uppercase font-bold tracking-widest">Venue</p>
              <p className="text-sm font-bold text-slate-800 truncate">{visitor.eventVenue}</p>
            </div>
            <div className="text-right">
              <p className="text-[9px] text-slate-400 uppercase font-bold tracking-widest">Pass ID</p>
              <p className="text-sm font-mono font-bold text-blue-600">{visitor.passId}</p>
            </div>
          </div>
        </motion.div>

        {/* Utility Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          <button
            onClick={downloadPass}
            disabled={downloading}
            className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors text-sm font-bold"
          >
            {downloading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
            SAVE PASS
          </button>
          <Link
            href="/pass/recover"
            className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors text-sm font-bold"
          >
            <Smartphone className="w-4 h-4" /> RECOVER PASS
          </Link>
        </div>

        <p className="mt-8 text-[10px] text-slate-400 uppercase tracking-widest font-bold">
          Verified Digital Pass • EntryFlow Protocol
        </p>
      </div>
    </div>
  );
}
