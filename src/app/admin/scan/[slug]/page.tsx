"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Html5QrcodeScanner } from "html5-qrcode";
import { 
  ShieldCheck, AlertCircle, CheckCircle2, 
  XCircle, Loader2, ArrowLeft, Camera,
  RefreshCw
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScanVerificationPage() {
  const { slug } = useParams();
  const router = useRouter();
  
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [isScanning, setIsScanning] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "reader",
      { 
        fps: 10, 
        qrbox: { width: 250, height: 250 },
        aspectRatio: 1.0
      },
      /* verbose= */ false
    );

    const onScanSuccess = async (decodedText: string) => {
      // Handle both URL and the new Text Block format
      let passId = "";
      
      if (decodedText.includes('/')) {
        // Handle URL format: https://domain.com/pass/verify/[passId]
        // Remove trailing slash if present then pop the last segment
        const cleanUrl = decodedText.endsWith('/') ? decodedText.slice(0, -1) : decodedText;
        passId = cleanUrl.split('/').pop() || "";
      } else if (decodedText.includes('ID:')) {
        // Handle legacy/manual format
        const match = decodedText.match(/ID:\s*([\w-]+)/);
        passId = match ? match[1] : "";
      } else {
        passId = decodedText;
      }
      
      if (passId) {
        scanner.pause();
        setIsScanning(false);
        handleVerification(passId);
      }
    };

    const onScanFailure = (error: any) => {
      // console.warn(`Code scan error = ${error}`);
    };

    scanner.render(onScanSuccess, onScanFailure);

    return () => {
      scanner.clear().catch(error => {
        console.error("Failed to clear html5QrcodeScanner. ", error);
      });
    };
  }, [slug]);

  const handleVerification = async (passId: string) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/pass/${passId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ eventSlug: slug })
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Verification failed");
      }

      setResult(data.visitor);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const resetScanner = () => {
    setResult(null);
    setError(null);
    setIsScanning(true);
    window.location.reload(); // Quickest way to restart the library properly
  };

  return (
    <div className="min-h-screen bg-navy text-white font-sans flex flex-col items-center justify-center p-6 pb-20">
      <div className="absolute inset-0 z-0 bg-gradient-mesh opacity-20 pointer-events-none"></div>

      {/* Header */}
      <div className="relative z-10 w-full max-w-md flex items-center justify-between mb-8">
        <button onClick={() => router.back()} className="p-2 hover:bg-white/5 rounded-full transition-all">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div className="text-center">
          <h1 className="text-xl font-bold font-heading">Gate Verification</h1>
          <p className="text-xs text-grey-500 uppercase tracking-widest">{slug}</p>
        </div>
        <div className="w-10"></div>
      </div>

      {/* Scanner Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 w-full max-w-sm bg-secondary/20 backdrop-blur-xl border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl"
      >
        {isScanning ? (
           <div className="p-6">
              <div id="reader" className="overflow-hidden rounded-3xl border-2 border-white/5"></div>
              <div className="mt-6 text-center">
                <div className="flex items-center justify-center gap-2 text-primary-400 font-bold mb-1">
                  <Camera className="w-4 h-4" />
                  Scanner Active
                </div>
                <p className="text-xs text-grey-500">Center the QR code in the frame to verify entry.</p>
              </div>
           </div>
        ) : (
          <div className="p-10 text-center">
            {loading ? (
              <div className="py-12 flex flex-col items-center">
                <Loader2 className="w-16 h-16 text-primary-500 animate-spin mb-6" />
                <h2 className="text-xl font-bold">Verifying Pass...</h2>
              </div>
            ) : result ? (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-6"
              >
                <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-green-500/30">
                  <CheckCircle2 className="w-12 h-12 text-green-500" />
                </div>
                <h2 className="text-3xl font-bold text-green-500 mb-2 font-heading uppercase tracking-tight">Access Granted</h2>
                <p className="text-grey-400 text-sm mb-8 italic">Attendee successfully checked-in</p>
                
                <div className="bg-black/30 border border-white/5 rounded-2xl p-6 text-left mb-8 space-y-4">
                  <div>
                    <p className="text-[10px] text-grey-500 uppercase font-bold tracking-widest leading-none mb-1">Name</p>
                    <p className="text-lg font-bold">{result.name}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-[10px] text-grey-500 uppercase font-bold tracking-widest leading-none mb-1">Pass ID</p>
                      <p className="font-mono text-primary-400 font-bold">{result.passId}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-grey-500 uppercase font-bold tracking-widest leading-none mb-1">Type</p>
                      <p className="font-bold">{result.passType}</p>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={resetScanner}
                  className="w-full bg-primary hover:bg-primary-500 text-white font-bold py-4 rounded-2xl shadow-glow-primary transition-all flex items-center justify-center gap-2"
                >
                  <RefreshCw className="w-5 h-5" />
                  Scan Next
                </button>
              </motion.div>
            ) : error ? (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-6"
              >
                <div className="w-24 h-24 bg-canada-red/20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-canada-red/30">
                  <XCircle className="w-12 h-12 text-canada-red" />
                </div>
                <h2 className="text-3xl font-bold text-canada-red mb-2 font-heading uppercase tracking-tight">Access Denied</h2>
                <p className="text-grey-400 text-sm mb-8">{error}</p>
                
                <button 
                  onClick={resetScanner}
                  className="w-full bg-white/10 hover:bg-white/20 text-white font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-2"
                >
                  <RefreshCw className="w-5 h-5" />
                  Try Again
                </button>
              </motion.div>
            ) : null}
          </div>
        )}
      </motion.div>

      {/* Stats Quick Look */}
      <div className="mt-12 w-full max-w-sm grid grid-cols-2 gap-4 relative z-10 px-4">
         <div className="bg-secondary/10 border border-white/5 p-4 rounded-2xl text-center">
            <p className="text-[10px] text-grey-500 uppercase font-bold tracking-widest mb-1">Gate Mode</p>
            <p className="text-primary-400 font-bold">Entry Only</p>
         </div>
         <div className="bg-secondary/10 border border-white/5 p-4 rounded-2xl text-center">
            <p className="text-[10px] text-grey-500 uppercase font-bold tracking-widest mb-1">Connection</p>
            <p className="text-green-500 font-bold flex items-center justify-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
              Live
            </p>
         </div>
      </div>
    </div>
  );
}
