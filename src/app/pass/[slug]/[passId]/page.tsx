"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { QrCode, CheckCircle2, User, Building2, MapPin, Calendar, Loader2, AlertCircle, Download, CheckCircle, Smartphone } from "lucide-react";
import QRCode from "qrcode";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

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
        // eventSettings is now the full event object; extract passSettings so all
        // settings.customBackgroundUrl / settings.qrPosition refs keep working.
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
      const canvas = await html2canvas(element, {
        scale: 3, // High quality
        useCORS: true,
        backgroundColor: "#000B1A" // Match navy background
      });
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`EntryFlow_Pass_${passId}.pdf`);
    } catch (err) {
      console.error("PDF generation error:", err);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setDownloading(false);
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
        <AlertCircle className="w-16 h-16 text-canada-red mb-4" />
        <h1 className="text-2xl font-bold mb-2">Invalid Pass</h1>
        <p className="text-grey-400 mb-6">This event pass could not be found or has been revoked.</p>
        <button 
          onClick={() => router.push(`/pass/${slug}`)}
          className="bg-primary px-6 py-3 rounded-xl font-semibold"
        >
          Register New Pass
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-navy text-white font-sans relative overflow-hidden flex flex-col items-center justify-center py-10 px-6">
      {/* Background Mesh */}
      <div className="absolute inset-0 z-0 bg-gradient-mesh opacity-20 pointer-events-none"></div>

      <motion.div
        id="pass-card"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`relative z-10 w-full max-w-md bg-secondary/20 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden ${settings?.customBackgroundUrl ? 'aspect-[1/1.4]' : ''}`}
        style={settings?.customBackgroundUrl ? {
          backgroundImage: `url(${settings.customBackgroundUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          border: 'none'
        } : {}}
      >
        {/* Overlay if there is a background image to ensure readability */}
        {settings?.customBackgroundUrl && <div className="absolute inset-0 bg-black/20 z-0"></div>}

        {/* Header Ribbon - Only show if no custom background */}
        {!settings?.customBackgroundUrl && (
          <div className={`py-3 text-center text-xs font-bold uppercase tracking-[0.2em] bg-white text-navy bg-opacity-90 relative z-10`}>
            {visitor.eventName || 'Digital Entry Pass'}
          </div>
        )}

        <div className={`p-8 md:p-10 flex flex-col items-center relative z-10 ${settings?.customBackgroundUrl ? 'h-full min-h-[550px]' : ''}`}>
          
          {/* Main Pass Content - Only show logo/header if no background */}
          {!settings?.customBackgroundUrl && (
            <div className="text-center mb-8">
              <h1 className="text-3xl font-extrabold font-heading mb-1 tracking-tight">{visitor.eventName || 'Event Pass'}</h1>
              <p className="text-primary-400 font-bold text-xs uppercase tracking-[0.3em]">
                {visitor.status === 'entered' ? '✅ Check-In Verified' : '🎟️ Active Ticket'}
              </p>
            </div>
          )}

          {/* QR Code - Absoluted if background present */}
          <div 
            className={`bg-white p-4 rounded-3xl border-4 ${visitor.status === 'entered' ? 'border-green-500 shadow-lg shadow-green-500/20' : 'border-primary-500 shadow-glow'} transition-all ${settings?.customBackgroundUrl ? 'absolute' : 'mb-8'}`}
            style={settings?.customBackgroundUrl ? {
              top: `${settings.qrPosition || 40}%`,
              left: '50%',
              transform: 'translate(-50%, -50%)',
              padding: '12px'
            } : {}}
          >
            <img 
              src={visitor.qrCodeUrl} 
              alt="Scan me" 
              className={`${settings?.customBackgroundUrl ? 'w-32 h-32 md:w-40 md:h-40' : 'w-48 h-48 md:w-56 md:h-56'} mix-blend-multiply`}
            />
          </div>

          {/* User Details - Absoluted if background present */}
          <div 
            className={`text-center space-y-2 ${settings?.customBackgroundUrl ? 'absolute' : 'mb-10'}`}
            style={settings?.customBackgroundUrl ? {
              top: `${settings.infoPosition || 65}%`,
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100%'
            } : {}}
          >
            <h2 className="text-2xl font-bold drop-shadow-lg">{visitor.name}</h2>
            {(!settings || settings.showDesignation) && visitor.designation && (
              <p className="text-primary-400 font-black text-xs uppercase tracking-widest drop-shadow-md">{visitor.designation}</p>
            )}
            {settings?.customBackgroundUrl && (
              <p className="text-white/60 font-mono text-[10px] tracking-widest mt-2">{visitor.passId}</p>
            )}
          </div>

          {/* Action Button - Moved to bottom for custom designs */}
          <div className={`${settings?.customBackgroundUrl ? 'mt-auto' : 'w-full'}`}>
            {visitor.status !== 'entered' ? (
              <button
                onClick={markAsUsed}
                disabled={updating}
                className="w-full bg-primary hover:bg-primary-500 text-white font-black py-5 rounded-2xl shadow-glow-primary transition-all flex flex-col items-center justify-center gap-1"
              >
                {updating ? <Loader2 className="w-6 h-6 animate-spin" /> : <span className="text-lg">TAP TO CHECK-IN</span>}
                <span className="text-[10px] opacity-70 tracking-widest font-bold">ONLY TAP WHEN AT ENTRANCE</span>
              </button>
            ) : (
              <div className="w-full bg-green-500 text-navy font-black py-5 rounded-2xl flex flex-col items-center justify-center border-b-4 border-green-700">
                <span className="text-lg">ENTRY VERIFIED</span>
                <span className="text-[10px] opacity-70 tracking-widest font-bold uppercase">
                  Authorized at {visitor.enteredAt ? new Date(visitor.enteredAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) : 'Just Now'}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Simplified Footer Details */}
        {!settings?.customBackgroundUrl && (
          <div className="px-8 pb-10 grid grid-cols-2 gap-4 border-t border-white/5 pt-6 bg-black/10">
            <div className="text-left">
               <p className="text-[9px] text-grey-500 uppercase font-bold tracking-widest">Venue</p>
               <p className="text-xs font-bold truncate">{visitor.eventVenue}</p>
            </div>
            <div className="text-right">
               <p className="text-[9px] text-grey-500 uppercase font-bold tracking-widest">Event Period</p>
               <p className="text-xs font-bold">
                 {new Date(visitor.eventDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                 {settings?.endDate && ` - ${new Date(settings.endDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`}
               </p>
            </div>
          </div>
        )}
      </motion.div>

      {/* Utilities */}
      <div className="mt-10 flex flex-wrap justify-center gap-6">
         <button 
          onClick={downloadPass}
          disabled={downloading}
          className="flex items-center gap-2 text-grey-400 hover:text-white transition-colors text-sm font-bold"
         >
            {downloading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />} 
            SAVE PASS
         </button>
         <button className="flex items-center gap-2 text-grey-400 hover:text-white transition-colors text-sm font-bold">
            <Smartphone className="w-4 h-4" /> ADD TO WALLET
         </button>
      </div>

      <p className="mt-8 text-[10px] text-grey-600 uppercase tracking-widest font-bold">
        Verified Digital Pass • EntryFlow Protocol 
      </p>
    </div>
  );
}
