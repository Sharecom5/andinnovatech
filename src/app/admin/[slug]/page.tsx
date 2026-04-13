"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Users, Search, Download, CheckCircle, Clock, 
  UserCheck, ShieldAlert, PlusCircle, X,
  Building2, Briefcase, Mail, Phone, User,
  Loader2, RefreshCcw, ChevronRight, LogOut, Ticket
} from "lucide-react";

export default function AdminDashboard() {
  const { slug } = useParams();
  const router = useRouter();
  
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [refreshing, setRefreshing] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [adding, setAdding] = useState(false);
  const [successPassId, setSuccessPassId] = useState<string | null>(null);
  const [newAttendee, setNewAttendee] = useState({
    name: "", email: "", phone: "", company: "", designation: ""
  });

  const fetchData = async () => {
    try {
      const res = await fetch(`/api/admin/${slug}`);
      if (!res.ok) throw new Error("Could not fetch admin data");
      const d = await res.json();
      setData(d);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    if (slug) fetchData();
  }, [slug]);

  const handleAddAttendee = async (e: React.FormEvent) => {
    e.preventDefault();
    setAdding(true);
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...newAttendee, eventSlug: slug })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to add attendee");
      
      setSuccessPassId(data.passId);
      setNewAttendee({ name: "", email: "", phone: "", company: "", designation: "" });
      fetchData(); // Refresh list
    } catch (err: any) {
      alert(err.message);
    } finally {
      setAdding(false);
    }
  };

  const handleExport = () => {
    if (!data?.attendees) return;
    
    const headers = ["PassID", "Name", "Email", "Phone", "Company", "PassType", "Status", "EnteredAt"];
    const rows = data.attendees.map((a: any) => [
      a.passId,
      a.name,
      a.email,
      a.phone,
      a.company || "",
      a.passType,
      a.status,
      a.enteredAt || ""
    ]);

    const csvContent = "data:text/csv;charset=utf-8," 
      + [headers.join(","), ...rows.map((r: any) => r.join(","))].join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${slug}_attendees.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredAttendees = data?.attendees?.filter((a: any) => {
    const matchesSearch = a.name.toLowerCase().includes(search.toLowerCase()) || 
                          a.email.toLowerCase().includes(search.toLowerCase()) ||
                          a.passId.toLowerCase().includes(search.toLowerCase());
    
    if (filter === "all") return matchesSearch;
    if (filter === "entered") return matchesSearch && a.status === "entered";
    if (filter === "pending") return matchesSearch && a.status === "registered";
    return matchesSearch;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-navy flex items-center justify-center">
        <Loader2 className="w-10 h-10 text-primary-500 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-navy text-white font-sans text-sm">
      <div className="absolute inset-0 z-0 bg-gradient-mesh opacity-10 pointer-events-none"></div>

      {/* Sidebar (Simple Desktop Navigation) */}
      <aside className="fixed left-0 top-0 bottom-0 w-64 bg-secondary/10 border-r border-white/5 hidden lg:flex flex-col p-6 z-20">
         <div className="flex items-center gap-3 mb-10 px-2">
            <div className="bg-primary-500 w-8 h-8 rounded-lg flex items-center justify-center font-bold">E</div>
            <span className="font-heading font-bold text-lg tracking-tight">EntryFlow <span className="text-primary-400">Admin</span></span>
         </div>

         <nav className="space-y-1">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/10 text-primary-400 font-semibold transition-all">
               <Users className="w-4 h-4" /> Attendees
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-grey-400 hover:bg-white/5 transition-all">
               <RefreshCcw className="w-4 h-4" /> Activity Log
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-grey-400 hover:bg-white/5 transition-all">
               <ShieldAlert className="w-4 h-4" /> License Stats
            </button>
         </nav>

         <div className="mt-auto">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-canada-red hover:bg-canada-red/10 transition-all">
               <LogOut className="w-4 h-4" /> Logout
            </button>
         </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64 p-6 lg:p-10 relative z-10">
         {/* Top Header */}
         <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
            <div>
               <h1 className="text-3xl font-bold font-heading mb-1">{data?.event?.name}</h1>
               <p className="text-grey-400 flex items-center gap-2">
                 Attendee Management Dashboard <ChevronRight className="w-4 h-4 opacity-30" /> Overview
               </p>
            </div>
            <div className="flex items-center gap-3">
               <button 
                onClick={() => { setRefreshing(true); fetchData(); }}
                disabled={refreshing}
                className="bg-white/5 hover:bg-white/10 p-3 rounded-xl border border-white/5 transition-all"
               >
                  <RefreshCcw className={`w-5 h-5 ${refreshing ? 'animate-spin' : ''}`} />
               </button>
               <button 
                 onClick={() => setShowAddModal(true)}
                 className="bg-primary hover:bg-primary-500 text-white px-5 py-3 rounded-xl font-bold flex items-center gap-2 shadow-glow-primary transition-all"
               >
                  <PlusCircle className="w-4 h-4" /> New Pass
               </button>
               <button 
                 onClick={handleExport}
                 className="bg-white/5 hover:bg-white/10 text-white px-5 py-3 rounded-xl font-bold flex items-center gap-2 border border-white/5 transition-all"
               >
                  <Download className="w-4 h-4" /> Export CSV
               </button>
            </div>
         </div>

         {/* Stats Grid */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-secondary/20 border border-white/10 p-6 rounded-2xl">
               <div className="flex justify-between items-start mb-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                     <Users className="w-6 h-6 text-primary-400" />
                  </div>
                  <span className="text-xs font-bold text-grey-500 uppercase tracking-widest text-right">Total Registrations</span>
               </div>
               <p className="text-4xl font-bold">{data?.stats?.total || 0}</p>
            </div>
            <div className="bg-secondary/20 border border-white/10 p-6 rounded-2xl">
               <div className="flex justify-between items-start mb-4">
                  <div className="bg-green-500/10 p-3 rounded-xl">
                     <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <span className="text-xs font-bold text-grey-500 uppercase tracking-widest text-right">Gate Checks</span>
               </div>
               <p className="text-4xl font-bold">{data?.stats?.entered || 0}</p>
            </div>
            <div className="bg-secondary/20 border border-white/10 p-6 rounded-2xl">
               <div className="flex justify-between items-start mb-4">
                  <div className="bg-yellow-500/10 p-3 rounded-xl">
                     <Clock className="w-6 h-6 text-yellow-500" />
                  </div>
                  <span className="text-xs font-bold text-grey-500 uppercase tracking-widest text-right">Pending Entry</span>
               </div>
               <p className="text-4xl font-bold">{data?.stats?.pending || 0}</p>
            </div>
         </div>

         {/* Filter & Search Bar */}
         <div className="bg-black/20 border border-white/5 p-4 rounded-2xl mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="relative w-full md:w-96">
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-grey-500" />
               <input 
                 type="text" 
                 placeholder="Search by name, email or pass ID..." 
                 value={search}
                 onChange={(e) => setSearch(e.target.value)}
                 className="w-full bg-navy border border-white/10 rounded-xl py-3 pl-10 pr-4 outline-none focus:ring-1 focus:ring-primary-500 transition-all text-grey-300"
               />
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto">
               <div className="bg-navy border border-white/10 rounded-xl p-1 flex items-center w-full md:w-auto">
                  <button 
                    onClick={() => setFilter("all")}
                    className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${filter === 'all' ? 'bg-primary text-white' : 'text-grey-500 hover:text-white'}`}
                  >
                    All
                  </button>
                  <button 
                    onClick={() => setFilter("entered")}
                    className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${filter === 'entered' ? 'bg-green-500 text-white text-opacity-90 font-bold' : 'text-grey-500 hover:text-white'}`}
                  >
                    Entered
                  </button>
                  <button 
                    onClick={() => setFilter("pending")}
                    className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${filter === 'pending' ? 'bg-yellow-500 text-navy font-bold' : 'text-grey-500 hover:text-white'}`}
                  >
                    Pending
                  </button>
               </div>
            </div>
         </div>

         {/* Table Section */}
         <div className="bg-secondary/10 border border-white/5 rounded-3xl overflow-hidden">
            <div className="overflow-x-auto">
               <table className="w-full text-left">
                  <thead>
                     <tr className="bg-white/5 text-[10px] uppercase tracking-widest text-grey-500 font-bold">
                        <th className="px-6 py-4">Attendee Info</th>
                        <th className="px-6 py-4">Contact Details</th>
                        <th className="px-6 py-4">Pass ID</th>
                        <th className="px-6 py-4">Type</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4 text-right">Actions</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                     <AnimatePresence>
                        {filteredAttendees?.map((attendee: any, i: number) => (
                           <motion.tr 
                             key={attendee._id}
                             initial={{ opacity: 0 }}
                             animate={{ opacity: 1 }}
                             transition={{ delay: i * 0.05 }}
                             className="hover:bg-white/[0.02] transition-colors"
                           >
                              <td className="px-6 py-5">
                                 <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary-900/30 flex items-center justify-center text-primary-400 font-bold border border-primary-500/20">
                                       {attendee.name.charAt(0)}
                                    </div>
                                    <div>
                                       <p className="font-bold text-white text-base leading-none mb-1">{attendee.name}</p>
                                       <p className="text-grey-500 text-xs">{attendee.company || "No Company"}</p>
                                    </div>
                                 </div>
                              </td>
                              <td className="px-6 py-5">
                                 <p className="text-grey-300 font-medium">{attendee.email}</p>
                                 <p className="text-grey-500 text-xs">{attendee.phone}</p>
                              </td>
                              <td className="px-6 py-5">
                                 <code className="text-primary-400 font-mono text-xs tracking-tighter bg-primary/5 px-2 py-1 rounded-md border border-primary-500/10">
                                    {attendee.passId}
                                 </code>
                              </td>
                              <td className="px-6 py-5">
                                 <span className="text-[10px] font-bold uppercase tracking-wide text-grey-400 border border-white/10 px-2 py-1 rounded-lg">
                                    {attendee.passType}
                                 </span>
                              </td>
                              <td className="px-6 py-5">
                                 <div className={`flex items-center gap-2 text-[10px] font-bold uppercase ${attendee.status === 'entered' ? 'text-green-500' : 'text-yellow-500'}`}>
                                    <div className={`w-1.5 h-1.5 rounded-full ${attendee.status === 'entered' ? 'bg-green-500' : 'bg-yellow-500 animate-pulse'}`}></div>
                                    {attendee.status === 'entered' ? 'Checked-In' : 'Pending'}
                                 </div>
                              </td>
                              <td className="px-6 py-5 text-right">
                                 <button 
                                   onClick={() => router.push(`/pass/${slug}/${attendee.passId}`)}
                                   className="bg-primary/10 hover:bg-primary/20 text-primary-400 text-xs font-bold px-4 py-2 rounded-lg border border-primary-500/20 transition-all flex items-center gap-2 ml-auto"
                                 >
                                    <Ticket className="w-3.5 h-3.5" /> View Pass
                                 </button>
                              </td>
                           </motion.tr>
                        ))}
                     </AnimatePresence>
                     {filteredAttendees?.length === 0 && (
                        <tr>
                           <td colSpan={6} className="px-6 py-20 text-center text-grey-500">
                              No attendees found matching your filters.
                           </td>
                        </tr>
                     )}
                  </tbody>
               </table>
            </div>
         </div>

         {/* License / Footer Info */}
         <div className="mt-10 pt-10 border-t border-white/5 text-center px-6">
            <p className="text-xs text-grey-600 uppercase tracking-widest font-bold">
               EntryFlow Premium Instance • Active License • 
               <span className="text-primary-500 ml-1">v1.2.0 Stable Build</span>
            </p>
         </div>
      </main>

      {/* Add Attendee Modal */}
      <AnimatePresence>
        {showAddModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowAddModal(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative z-10 bg-navy border border-white/10 w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="p-8 border-b border-white/5 flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-bold">{successPassId ? "Pass Generated!" : "Manual Pass Generation"}</h2>
                  <p className="text-grey-500 text-xs mt-1">
                    {successPassId ? "The attendee has been registered successfully." : "Add an attendee and generate their QR pass instantly."}
                  </p>
                </div>
                <button 
                  onClick={() => { setShowAddModal(false); setSuccessPassId(null); }} 
                  className="text-grey-500 hover:text-white p-2"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {successPassId ? (
                <div className="p-8 space-y-6 text-center">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto border-2 border-green-500/20">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-grey-400 text-sm">Unique Pass ID issued:</p>
                    <code className="text-2xl font-mono font-bold text-primary-400 bg-primary/10 px-4 py-2 rounded-xl border border-primary-500/20 drop-shadow-glow">
                      {successPassId}
                    </code>
                  </div>
                  <div className="flex flex-col gap-3 pt-4">
                    <button 
                      onClick={() => window.open(`/pass/${slug}/${successPassId}`, '_blank')}
                      className="bg-primary hover:bg-primary-500 text-white py-4 rounded-xl font-bold transition-all shadow-glow-primary flex items-center justify-center gap-2"
                    >
                      <Ticket className="w-5 h-5" /> Open & Download Pass
                    </button>
                    <button 
                      onClick={() => { setShowAddModal(false); setSuccessPassId(null); }}
                      className="text-grey-500 hover:text-white text-xs font-bold uppercase tracking-widest pt-2"
                    >
                      Back to Dashboard
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleAddAttendee} className="p-8 space-y-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-grey-500 uppercase tracking-widest pl-1">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-grey-500" />
                      <input 
                        required
                        type="text" 
                        placeholder="e.g. John Doe" 
                        value={newAttendee.name}
                        onChange={(e) => setNewAttendee({...newAttendee, name: e.target.value})}
                        className="w-full bg-secondary/20 border border-white/10 rounded-xl py-3 pl-10 pr-4 outline-none focus:ring-1 focus:ring-primary-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-grey-500 uppercase tracking-widest pl-1">Email</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-grey-500" />
                        <input 
                          required
                          type="email" 
                          placeholder="john@example.com" 
                          value={newAttendee.email}
                          onChange={(e) => setNewAttendee({...newAttendee, email: e.target.value})}
                          className="w-full bg-secondary/20 border border-white/10 rounded-xl py-3 pl-10 pr-4 outline-none focus:ring-1 focus:ring-primary-500 text-xs"
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-grey-500 uppercase tracking-widest pl-1">Phone</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-grey-500" />
                        <input 
                          required
                          type="tel" 
                          placeholder="+91..." 
                          value={newAttendee.phone}
                          onChange={(e) => setNewAttendee({...newAttendee, phone: e.target.value})}
                          className="w-full bg-secondary/20 border border-white/10 rounded-xl py-3 pl-10 pr-4 outline-none focus:ring-1 focus:ring-primary-500 text-xs"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-grey-500 uppercase tracking-widest pl-1">Company</label>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-grey-500" />
                        <input 
                          type="text" 
                          placeholder="Organization" 
                          value={newAttendee.company}
                          onChange={(e) => setNewAttendee({...newAttendee, company: e.target.value})}
                          className="w-full bg-secondary/20 border border-white/10 rounded-xl py-3 pl-10 pr-4 outline-none focus:ring-1 focus:ring-primary-500 text-xs"
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-grey-500 uppercase tracking-widest pl-1">Designation</label>
                      <div className="relative">
                        <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-grey-500" />
                        <input 
                          type="text" 
                          placeholder="Position" 
                          value={newAttendee.designation}
                          onChange={(e) => setNewAttendee({...newAttendee, designation: e.target.value})}
                          className="w-full bg-secondary/20 border border-white/10 rounded-xl py-3 pl-10 pr-4 outline-none focus:ring-1 focus:ring-primary-500 text-xs"
                        />
                      </div>
                    </div>
                  </div>

                  <button 
                    type="submit"
                    disabled={adding}
                    className="w-full bg-primary hover:bg-primary-500 text-white py-4 rounded-xl font-bold transition-all shadow-glow-primary flex items-center justify-center gap-2 mt-4"
                  >
                    {adding ? <Loader2 className="w-5 h-5 animate-spin" /> : "Generate & Add Attendee"}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
