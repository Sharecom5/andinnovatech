"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Plus, Calendar, MapPin, Globe, ExternalLink, 
  Settings, Loader2, Search, ArrowUpRight, PlusCircle,
  LayoutDashboard, LogOut, ChevronRight, Camera
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

export default function MyEventsDashboard() {
  const router = useRouter();
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");
  
  // New Event Form State
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    date: "",
    endDate: "",
    venue: "",
    description: "",
    passSettings: {
      showName: true,
      showDesignation: true,
      showPhone: false,
      showCompany: true,
      customBackgroundUrl: "",
      qrPosition: 40,
      infoPosition: 65
    }
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState("");

  const fetchEvents = async () => {
    try {
      const res = await fetch("/api/admin/events");
      if (res.status === 401) {
        router.push("/admin/login");
        return;
      }
      if (!res.ok) throw new Error("Server error");
      const data = await res.json();
      setEvents(data.events || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file size (max 2MB for base64 storage in MongoDB)
    if (file.size > 2 * 1024 * 1024) {
      alert("Image must be under 2MB. Please compress and try again.");
      return;
    }

    setIsUploading(true);

    // Convert to base64 - this is permanent and doesn't need Cloudinary
    const reader = new FileReader();
    reader.onload = (ev) => {
      const base64Url = ev.target?.result as string;
      setFormData(prev => ({
        ...prev,
        passSettings: { ...prev.passSettings, customBackgroundUrl: base64Url }
      }));
      setIsUploading(false);
    };
    reader.onerror = () => {
      alert("Failed to read image. Please try again.");
      setIsUploading(false);
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Body scroll lock
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [showModal]);

  const handleCreateEvent = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/admin/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to create event");

      setEvents([data.event, ...events]);
      setShowModal(false);
      setFormData({ 
        name: "", 
        slug: "", 
        date: "", 
        endDate: "",
        venue: "", 
        description: "",
        passSettings: {
          showName: true,
          showDesignation: true,
          showPhone: false,
          showCompany: true,
          customBackgroundUrl: "",
          qrPosition: 40,
          infoPosition: 65
        }
      });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const filteredEvents = events.filter(e => 
    e.name.toLowerCase().includes(search.toLowerCase()) || 
    e.slug.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-navy flex items-center justify-center">
        <Loader2 className="w-10 h-10 text-primary-500 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-navy text-white font-sans selection:bg-primary-500/30">
      <div className="absolute inset-0 z-0 bg-gradient-mesh opacity-10 pointer-events-none"></div>

      {/* Navigation Header */}
      <header className="relative z-20 border-b border-white/5 bg-navy/50 backdrop-blur-md px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-primary-500 w-8 h-8 rounded-lg flex items-center justify-center font-bold">E</div>
          <span className="font-heading font-bold text-lg tracking-tight">EntryFlow <span className="text-primary-400">Portal</span></span>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-1 text-xs font-bold text-grey-500 uppercase tracking-widest">
            <LayoutDashboard className="w-3 h-3" /> Dashboard
          </div>
        <button 
            onClick={() => signOut({ callbackUrl: '/admin/login' })}
            className="text-grey-400 hover:text-white transition-colors"
            title="Sign Out"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Welcome & Action Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-bold font-heading mb-2">My Events</h1>
            <p className="text-grey-400">Manage your event registrations and entry flows in one place.</p>
          </div>
          <button 
            onClick={() => setShowModal(true)}
            className="bg-primary hover:bg-primary-500 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-glow-primary transition-all active:scale-95"
          >
            <PlusCircle className="w-5 h-5" /> Create New Event
          </button>
        </div>

        {/* Search & Filter */}
        <div className="relative mb-10">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-grey-500" />
          <input 
            type="text" 
            placeholder="Search by event name or slug..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-secondary/20 border border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-primary-500 transition-all text-grey-200"
          />
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event, i) => (
            <motion.div
              key={event._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -5 }}
              className="bg-secondary/10 border border-white/5 rounded-3xl p-6 group transition-all hover:bg-secondary/20 hover:border-white/10"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="bg-primary-900/40 w-12 h-12 rounded-2xl flex items-center justify-center border border-primary-500/20 text-primary-400 font-bold group-hover:scale-110 transition-transform">
                  {event.name.charAt(0)}
                </div>
                <div className="flex gap-2">
                   <Link 
                    href={`/admin/scan/${event.slug}`}
                    className="p-2 rounded-lg bg-green-500/10 hover:bg-green-500/20 text-green-500 transition-all"
                    title="Scan QR Entry"
                   >
                    <Camera className="w-5 h-5" />
                   </Link>
                   <Link 
                    href={`/admin/${event.slug}`}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-grey-400 hover:text-white transition-all"
                    title="Admin Dashboard"
                   >
                    <Settings className="w-5 h-5" />
                   </Link>
                   <Link 
                    href={`/pass/${event.slug}`}
                    target="_blank"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-grey-400 hover:text-white transition-all"
                    title="View Public Page"
                   >
                    <Globe className="w-5 h-5" />
                   </Link>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4 group-hover:text-primary-400 transition-colors">{event.name}</h3>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-grey-400 text-sm">
                  <Calendar className="w-4 h-4 shrink-0" />
                  <span>{new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-3 text-grey-400 text-sm">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span className="truncate">{event.venue}</span>
                </div>
              </div>

              <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <div className="text-[10px] font-bold uppercase tracking-widest text-grey-600">
                  Slug: <span className="text-primary-500/80">{event.slug}</span>
                </div>
                <Link 
                  href={`/admin/${event.slug}`}
                  className="text-xs font-bold text-white flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  Manage <ChevronRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.div>
          ))}

          {filteredEvents.length === 0 && !loading && (
            <div className="col-span-full py-20 bg-secondary/5 border border-dashed border-white/10 rounded-3xl flex flex-col items-center justify-center text-center">
              <div className="bg-white/5 p-4 rounded-full mb-4">
                <Plus className="w-8 h-8 text-grey-600" />
              </div>
              <h3 className="text-xl font-bold text-grey-400 mb-2">No events found</h3>
              <p className="text-grey-600 max-w-xs mx-auto mb-8">You haven't created any events yet or none match your search criteria.</p>
              <button 
                onClick={() => setShowModal(true)}
                className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full font-bold transition-all"
              >
                Create Your First Event
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Modal Overlay */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative z-10 bg-navy border border-white/10 w-full max-w-xl rounded-3xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden"
            >
              <div className="p-8 border-b border-white/5 shrink-0">
                <h2 className="text-2xl font-bold font-heading">Create New Event</h2>
                <p className="text-grey-400 text-sm">Launch a new entry flow for your next big event.</p>
              </div>

              <form onSubmit={handleCreateEvent} className="p-8 space-y-6 overflow-y-auto custom-scrollbar">
                {error && (
                  <div className="bg-canada-red/10 border border-canada-red/20 text-canada-red text-sm p-4 rounded-xl">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-grey-500 uppercase tracking-widest">Event Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="e.g. Annual Tech Summit" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-secondary/20 border border-white/10 rounded-xl py-3 px-4 outline-none focus:ring-1 focus:ring-primary-500 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-grey-500 uppercase tracking-widest">URL Slug</label>
                    <input 
                      required
                      type="text" 
                      placeholder="e.g. tech-summit" 
                      value={formData.slug}
                      onChange={(e) => setFormData({...formData, slug: e.target.value.toLowerCase().replace(/\s+/g, '-')})}
                      className="w-full bg-secondary/20 border border-white/10 rounded-xl py-3 px-4 outline-none focus:ring-1 focus:ring-primary-500 transition-all font-mono text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-grey-500 uppercase tracking-widest">Start Date</label>
                    <input 
                      required
                      type="date" 
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      className="w-full bg-secondary/20 border border-white/10 rounded-xl py-3 px-4 outline-none focus:ring-1 focus:ring-primary-500 transition-all font-sans"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-grey-500 uppercase tracking-widest">End Date (Optional)</label>
                    <input 
                      type="date" 
                      value={formData.endDate}
                      onChange={(e) => setFormData({...formData, endDate: e.target.value})}
                      className="w-full bg-secondary/20 border border-white/10 rounded-xl py-3 px-4 outline-none focus:ring-1 focus:ring-primary-500 transition-all font-sans"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-grey-500 uppercase tracking-widest">Venue</label>
                  <input 
                    required
                    type="text" 
                    placeholder="e.g. Grand Plaza, NYC" 
                    value={formData.venue}
                    onChange={(e) => setFormData({...formData, venue: e.target.value})}
                    className="w-full bg-secondary/20 border border-white/10 rounded-xl py-3 px-4 outline-none focus:ring-1 focus:ring-primary-500 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-grey-500 uppercase tracking-widest">Brief Description</label>
                  <textarea 
                    placeholder="Tell your attendees what this event is about..." 
                    rows={3}
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    className="w-full bg-secondary/20 border border-white/10 rounded-xl py-3 px-4 outline-none focus:ring-1 focus:ring-primary-500 transition-all resize-none"
                  />
                </div>

                <div className="space-y-4 py-4 border-t border-white/5 mt-4">
                  <h3 className="text-xs font-bold text-primary-500 uppercase tracking-widest">Pass Customization</h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        checked={formData.passSettings.showName}
                        onChange={(e) => setFormData({...formData, passSettings: {...formData.passSettings, showName: e.target.checked}})}
                        className="w-4 h-4 rounded border-white/10 bg-secondary/20 text-primary-500 focus:ring-0"
                      />
                      <span className="text-sm text-grey-400 group-hover:text-white transition-colors">Show Name</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        checked={formData.passSettings.showDesignation}
                        onChange={(e) => setFormData({...formData, passSettings: {...formData.passSettings, showDesignation: e.target.checked}})}
                        className="w-4 h-4 rounded border-white/10 bg-secondary/20 text-primary-500 focus:ring-0"
                      />
                      <span className="text-sm text-grey-400 group-hover:text-white transition-colors">Show Designation</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        checked={formData.passSettings.showPhone}
                        onChange={(e) => setFormData({...formData, passSettings: {...formData.passSettings, showPhone: e.target.checked}})}
                        className="w-4 h-4 rounded border-white/10 bg-secondary/20 text-primary-500 focus:ring-0"
                      />
                      <span className="text-sm text-grey-400 group-hover:text-white transition-colors">Show Mobile</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        checked={formData.passSettings.showCompany}
                        onChange={(e) => setFormData({...formData, passSettings: {...formData.passSettings, showCompany: e.target.checked}})}
                        className="w-4 h-4 rounded border-white/10 bg-secondary/20 text-primary-500 focus:ring-0"
                      />
                      <span className="text-sm text-grey-400 group-hover:text-white transition-colors">Show Company</span>
                    </label>
                  </div>

                  <div className="space-y-2 pt-2">
                    <label className="text-xs font-bold text-grey-500 uppercase tracking-widest leading-none">Custom Background Design</label>
                    <div className="flex gap-2">
                      <input 
                        type="text" 
                        placeholder="Image URL or Upload Below" 
                        value={formData.passSettings.customBackgroundUrl}
                        onChange={(e) => setFormData({...formData, passSettings: {...formData.passSettings, customBackgroundUrl: e.target.value}})}
                        className="flex-1 bg-secondary/20 border border-white/10 rounded-xl py-3 px-4 outline-none focus:ring-1 focus:ring-primary-500 transition-all text-sm"
                      />
                      <label className="bg-white/5 border border-white/10 hover:bg-white/10 p-3 rounded-xl cursor-pointer transition-all flex items-center justify-center">
                         {isUploading ? <Loader2 className="w-5 h-5 animate-spin text-primary-500" /> : <Camera className="w-5 h-5 text-grey-400" />}
                         <input 
                          type="file" 
                          className="hidden" 
                          accept="image/*"
                          onChange={handleFileUpload}
                          disabled={isUploading}
                         />
                      </label>
                    </div>
                    <div className="space-y-4 pt-2">
                      <div className="flex justify-between items-center">
                        <label className="text-xs font-bold text-primary-500 uppercase tracking-widest leading-none">Layout Preview</label>
                        {!formData.passSettings.customBackgroundUrl && <span className="text-[9px] text-grey-500">Preview with sample background</span>}
                      </div>

                      <div className="relative w-full aspect-[2/3] max-w-[180px] mx-auto rounded-xl overflow-hidden border-2 border-white/10 bg-secondary/20 shadow-2xl">
                        {/* Background */}
                        <img 
                          src={formData.passSettings.customBackgroundUrl || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400"} 
                          alt="Preview" 
                          className={`w-full h-full object-cover ${!formData.passSettings.customBackgroundUrl ? 'opacity-20 grayscale' : ''}`} 
                        />
                          
                          {/* Virtual QR */}
                          <div 
                            className="absolute left-1/2 -translate-x-1/2 bg-white/90 p-1 rounded-lg border border-white/20 shadow-lg pointer-events-none"
                            style={{ top: `${formData.passSettings.qrPosition}%` }}
                          >
                             <div className="w-12 h-12 bg-navy/20 flex items-center justify-center opacity-40">
                               <div className="w-8 h-8 border-2 border-navy border-dashed" />
                             </div>
                             <p className="text-[6px] text-center font-bold text-navy mt-1">QR CODE</p>
                          </div>

                          {/* Virtual Info */}
                          <div 
                            className="absolute left-1/2 -translate-x-1/2 w-full text-center px-2 pointer-events-none transition-all"
                            style={{ top: `${formData.passSettings.infoPosition}%` }}
                          >
                             <div className="bg-navy/80 backdrop-blur-sm p-1 rounded border border-white/10">
                               <p className="text-[8px] font-bold text-white leading-tight">YOUR NAME</p>
                               <p className="text-[6px] text-primary-400 font-bold uppercase tracking-tighter">Designation</p>
                             </div>
                          </div>

                          <div className="absolute bottom-2 left-0 w-full text-center">
                             <p className="text-[5px] text-white/40 uppercase tracking-[0.2em]">Live Preview</p>
                          </div>
                        </div>
                        <p className="text-[10px] text-center text-grey-500">Fine-tune the height sliders below to position elements.</p>
                      </div>
                    <p className="text-[10px] text-grey-600">Pro tip: Upload an A4 (210x297) design for a professional vertical look.</p>
                  </div>

                  <div className="grid grid-cols-2 gap-6 pt-2">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                         <label className="text-xs font-bold text-grey-500 uppercase tracking-widest">QR Height</label>
                         <span className="text-[10px] text-primary-500 font-bold">{formData.passSettings.qrPosition}%</span>
                      </div>
                      <input 
                        type="range" min="5" max="90" step="1"
                        value={formData.passSettings.qrPosition}
                        onChange={(e) => setFormData({...formData, passSettings: {...formData.passSettings, qrPosition: parseInt(e.target.value)}})}
                        className="w-full accent-primary-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                         <label className="text-xs font-bold text-grey-500 uppercase tracking-widest">Info Height</label>
                         <span className="text-[10px] text-primary-500 font-bold">{formData.passSettings.infoPosition}%</span>
                      </div>
                      <input 
                        type="range" min="5" max="90" step="1"
                        value={formData.passSettings.infoPosition}
                        onChange={(e) => setFormData({...formData, passSettings: {...formData.passSettings, infoPosition: parseInt(e.target.value)}})}
                        className="w-full accent-primary-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <button 
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="flex-1 py-4 rounded-xl font-bold text-grey-400 hover:bg-white/5 transition-all"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-[2] bg-primary hover:bg-primary-500 text-white py-4 rounded-xl font-bold shadow-glow-primary transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : "Publish Event"}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
