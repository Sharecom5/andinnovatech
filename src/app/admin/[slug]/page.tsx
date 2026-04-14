"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Users, Search, Download, CheckCircle, Clock, 
  UserCheck, ShieldAlert, PlusCircle, X,
  Building2, Briefcase, Mail, Phone, User,
  Loader2, RefreshCcw, ChevronRight, LogOut, Ticket, Lock, Globe, Copy
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
  const [activeTab, setActiveTab] = useState("attendees");
  const [newAttendee, setNewAttendee] = useState({
    name: "", email: "", phone: "", company: "", designation: ""
  });
  const [copied, setCopied] = useState(false);

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

  const handleCopyLink = () => {
    const url = `${window.location.origin}/pass/${slug}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
      + [headers.join(","), ...rows.map((r: any) => parseCsvString(r.join(",")))].join("\n");
      
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${slug}_attendees.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  const parseCsvString = (str: string) => {
      // Just a quick wrapper, rows mapped should already be strings
      return str;
  }

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
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans text-sm">

      {/* Sidebar (Simple Desktop Navigation) */}
      <aside className="fixed left-0 top-0 bottom-0 w-64 bg-white border-r border-slate-200 hidden lg:flex flex-col p-6 z-20 shadow-sm">
         <div className="flex items-center gap-3 mb-10 px-2 cursor-pointer" onClick={() => router.push('/admin/dashboard')}>
            <div className="bg-blue-600 w-8 h-8 rounded-lg flex items-center justify-center font-black text-white">E</div>
            <span className="font-black text-lg tracking-tight">Entry<span className="text-blue-600">Flow</span></span>
         </div>

         <nav className="space-y-1">
            <button 
               onClick={() => setActiveTab("attendees")}
               className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${activeTab === 'attendees' ? 'bg-blue-50 text-blue-700' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`}
            >
               <Users className="w-4 h-4" /> Attendees
            </button>
            <button 
               onClick={() => setActiveTab("activity")}
               className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${activeTab === 'activity' ? 'bg-blue-50 text-blue-700' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`}
            >
               <RefreshCcw className="w-4 h-4" /> Activity Log
            </button>
            <button 
               onClick={() => setActiveTab("stats")}
               className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${activeTab === 'stats' ? 'bg-blue-50 text-blue-700' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`}
            >
               <ShieldAlert className="w-4 h-4" /> License Stats
            </button>
         </nav>

         <div className="mt-auto">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 hover:text-red-700 font-bold transition-all">
               <LogOut className="w-4 h-4" /> Logout
            </button>
         </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64 p-6 lg:p-10 relative z-10">
         {/* Top Header */}
         <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
            <div>
               <h1 className="text-3xl font-black mb-1 text-slate-900">{data?.event?.name || 'Loading...'}</h1>
               <p className="text-slate-500 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider">
                 Attendee Management Dashboard <ChevronRight className="w-3.5 h-3.5 opacity-40" /> Overview
               </p>
               {data?.event && (
                 <div className="mt-4 flex flex-col md:flex-row md:items-center gap-3">
                   <div className="flex items-center gap-2 bg-blue-50 w-max px-3 py-1.5 rounded-xl border border-blue-100">
                      <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest flex items-center gap-1.5">
                        <Lock className="w-3 h-3" /> Gate Scanner PIN:
                      </span>
                      <code className="text-sm font-mono font-black text-slate-900 tracking-wider">
                        {data.event.checkinPin || '1234'}
                      </code>
                   </div>

                   <div className="flex items-center gap-2 bg-slate-50 w-max pr-1.5 pl-3 py-1.5 rounded-xl border border-slate-200">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                        <Globe className="w-3 h-3" /> Public Registration Link:
                      </span>
                      <a href={`/pass/${slug}`} target="_blank" rel="noreferrer" className="text-sm font-mono font-bold text-blue-600 hover:text-blue-700 hover:underline tracking-tight ml-1 mr-2">
                         /{slug}
                      </a>
                      <button 
                        onClick={handleCopyLink} 
                        className={`p-1.5 rounded-lg transition-all border ${copied ? 'bg-green-100 border-green-200 text-green-700 scale-105' : 'bg-white border-slate-200 text-slate-400 hover:bg-slate-100 hover:text-slate-700'}`}
                        title="Copy Public Link"
                      >
                         {copied ? <CheckCircle className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                   </div>
                 </div>
               )}
            </div>
            <div className="flex items-center gap-3">
               <button 
                onClick={() => { setRefreshing(true); fetchData(); }}
                disabled={refreshing}
                className="bg-white hover:bg-slate-50 p-3 rounded-xl border border-slate-200 transition-all text-slate-600 shadow-sm"
               >
                  <RefreshCcw className={`w-5 h-5 ${refreshing ? 'animate-spin' : ''}`} />
               </button>
               <button 
                 onClick={() => setShowAddModal(true)}
                 className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all"
               >
                  <PlusCircle className="w-4 h-4" /> New Pass
               </button>
               <button 
                 onClick={handleExport}
                 className="bg-white hover:bg-slate-50 text-slate-700 px-5 py-3 rounded-xl font-bold flex items-center gap-2 border border-slate-200 shadow-sm transition-all"
               >
                  <Download className="w-4 h-4" /> Export CSV
               </button>
            </div>
         </div>

         {/* Stats Grid */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
               <div className="flex justify-between items-start mb-4">
                  <div className="bg-blue-50 p-3 rounded-xl border border-blue-100">
                     <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-right">Total Registrations</span>
               </div>
               <p className="text-4xl font-black text-slate-900">{data?.stats?.total || 0}</p>
            </div>
            <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
               <div className="flex justify-between items-start mb-4">
                  <div className="bg-green-50 p-3 rounded-xl border border-green-100">
                     <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-right">Gate Checks</span>
               </div>
               <p className="text-4xl font-black text-slate-900">{data?.stats?.entered || 0}</p>
            </div>
            <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
               <div className="flex justify-between items-start mb-4">
                  <div className="bg-orange-50 p-3 rounded-xl border border-orange-100">
                     <Clock className="w-6 h-6 text-orange-500" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-right">Pending Entry</span>
               </div>
               <p className="text-4xl font-black text-slate-900">{data?.stats?.pending || 0}</p>
            </div>
         </div>

         {/* Tab Content */}
         {activeTab === 'attendees' && (
           <>
             {/* Filter & Search Bar */}
             <div className="bg-white border border-slate-200 p-4 rounded-2xl mb-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">
                <div className="relative w-full md:w-96">
                   <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                   <input 
                     type="text" 
                     placeholder="Search by name, email or pass ID..." 
                     value={search}
                     onChange={(e) => setSearch(e.target.value)}
                     className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-10 pr-4 outline-none focus:ring-2 focus:ring-blue-500 transition-all text-slate-900"
                   />
                </div>
                <div className="flex items-center gap-2 w-full md:w-auto">
                   <div className="bg-slate-50 border border-slate-200 rounded-xl p-1 flex items-center w-full md:w-auto">
                      <button 
                        onClick={() => setFilter("all")}
                        className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${filter === 'all' ? 'bg-white shadow-sm text-slate-900 border border-slate-200' : 'text-slate-500 hover:text-slate-700'}`}
                      >
                        All
                      </button>
                      <button 
                        onClick={() => setFilter("entered")}
                        className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${filter === 'entered' ? 'bg-green-100 text-green-700 shadow-sm border border-green-200' : 'text-slate-500 hover:text-slate-700'}`}
                      >
                        Entered
                      </button>
                      <button 
                        onClick={() => setFilter("pending")}
                        className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${filter === 'pending' ? 'bg-orange-100 text-orange-700 shadow-sm border border-orange-200' : 'text-slate-500 hover:text-slate-700'}`}
                      >
                        Pending
                      </button>
                   </div>
                </div>
             </div>

             {/* Table Section */}
             <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                   <table className="w-full text-left">
                      <thead>
                         <tr className="bg-slate-50 border-b border-slate-200 text-[10px] uppercase tracking-widest text-slate-500 font-bold">
                            <th className="px-6 py-4">Attendee Info</th>
                            <th className="px-6 py-4">Contact Details</th>
                            <th className="px-6 py-4">Pass ID</th>
                            <th className="px-6 py-4">Type</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                         </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                         <AnimatePresence>
                            {filteredAttendees?.map((attendee: any, i: number) => (
                               <motion.tr 
                                 key={attendee._id}
                                 initial={{ opacity: 0 }}
                                 animate={{ opacity: 1 }}
                                 transition={{ delay: i * 0.05 }}
                                 className="hover:bg-slate-50 transition-colors group"
                               >
                                  <td className="px-6 py-5">
                                     <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 font-black border border-blue-100 group-hover:scale-105 transition-transform">
                                           {attendee.name.charAt(0)}
                                        </div>
                                        <div>
                                           <p className="font-bold text-slate-900 text-base leading-none mb-1">{attendee.name}</p>
                                           <p className="text-slate-500 text-xs font-medium">{attendee.company || "No Company"}</p>
                                        </div>
                                     </div>
                                  </td>
                                  <td className="px-6 py-5">
                                     <p className="text-slate-700 font-medium">{attendee.email}</p>
                                     <p className="text-slate-500 text-xs mt-0.5">{attendee.phone}</p>
                                  </td>
                                  <td className="px-6 py-5">
                                     <code className="text-blue-600 font-mono text-xs font-bold tracking-tight bg-blue-50 px-2 py-1 rounded-md border border-blue-100">
                                        {attendee.passId}
                                     </code>
                                  </td>
                                  <td className="px-6 py-5">
                                     <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 border border-slate-200 bg-slate-50 px-2.5 py-1 rounded-lg">
                                        {attendee.passType}
                                     </span>
                                  </td>
                                  <td className="px-6 py-5">
                                     <div className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-lg inline-flex ${attendee.status === 'entered' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-orange-50 text-orange-700 border border-orange-200'}`}>
                                        <div className={`w-1.5 h-1.5 rounded-full ${attendee.status === 'entered' ? 'bg-green-500' : 'bg-orange-500 animate-pulse'}`}></div>
                                        {attendee.status === 'entered' ? 'Checked-In' : 'Pending'}
                                     </div>
                                  </td>
                                  <td className="px-6 py-5 text-right">
                                     <button 
                                       onClick={() => window.open(`/pass/${slug}/${attendee.passId}`, '_blank')}
                                       className="bg-white hover:bg-slate-50 text-slate-600 hover:text-blue-600 text-xs font-bold px-4 py-2 rounded-xl border border-slate-200 transition-all flex items-center gap-2 ml-auto shadow-sm"
                                     >
                                        <Ticket className="w-3.5 h-3.5" /> View Pass
                                     </button>
                                  </td>
                               </motion.tr>
                            ))}
                         </AnimatePresence>
                         {filteredAttendees?.length === 0 && (
                            <tr>
                               <td colSpan={6} className="px-6 py-20 text-center text-slate-500 bg-slate-50/50">
                                  <div className="flex flex-col items-center justify-center">
                                    <Search className="w-8 h-8 text-slate-300 mb-3" />
                                    <span className="font-medium text-slate-500">No attendees found matching your search.</span>
                                  </div>
                               </td>
                            </tr>
                         )}
                      </tbody>
                   </table>
                </div>
             </div>
           </>
         )}

         {activeTab === 'activity' && (
           <div className="bg-white border border-slate-200 p-16 text-center rounded-3xl shadow-sm flex flex-col items-center justify-center">
              <RefreshCcw className="w-16 h-16 text-slate-200 mb-6" />
              <h2 className="text-2xl font-black text-slate-900 mb-3">Live Activity Feed</h2>
              <p className="text-slate-500 max-w-sm font-medium">Real-time scan logs, entry denials, and gate activity will go live in an upcoming Pro update.</p>
              <div className="mt-8 px-4 py-2 bg-blue-50 border border-blue-100 text-blue-700 font-bold text-xs rounded-lg uppercase tracking-widest">
                Coming Soon
              </div>
           </div>
         )}

         {activeTab === 'stats' && (
           <div className="bg-white border border-slate-200 p-16 text-center rounded-3xl shadow-sm flex flex-col items-center justify-center">
              <ShieldAlert className="w-16 h-16 text-slate-200 mb-6" />
              <h2 className="text-2xl font-black text-slate-900 mb-3">License & Telemetry</h2>
              <p className="text-slate-500 max-w-sm font-medium">Detailed usage limits, active license tracking, and event telemetry dashboard are currently in development.</p>
              <div className="mt-8 px-4 py-2 bg-blue-50 border border-blue-100 text-blue-700 font-bold text-xs rounded-lg uppercase tracking-widest">
                Coming Soon
              </div>
           </div>
         )}
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
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              className="relative z-10 bg-white border border-slate-200 w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="p-8 pb-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                <div>
                  <h2 className="text-xl font-black text-slate-900">{successPassId ? "Pass Generated!" : "Manual Pass Generation"}</h2>
                  <p className="text-slate-500 text-xs font-medium mt-1">
                    {successPassId ? "The attendee has been registered successfully." : "Add an attendee manually from the admin panel."}
                  </p>
                </div>
                <button 
                  onClick={() => { setShowAddModal(false); setSuccessPassId(null); }} 
                  className="bg-white hover:bg-slate-100 text-slate-500 p-2 rounded-xl transition-all border border-slate-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {successPassId ? (
                <div className="p-8 space-y-6 text-center">
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto border-4 border-green-100 shadow-inner">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-slate-500 font-bold text-sm">Unique Pass ID issued:</p>
                    <code className="text-2xl font-mono font-black text-blue-600 bg-blue-50 px-4 py-2 rounded-xl border border-blue-100 inline-block shadow-sm">
                      {successPassId}
                    </code>
                  </div>
                  <div className="flex flex-col gap-3 pt-4">
                    <button 
                      onClick={() => window.open(`/pass/${slug}/${successPassId}`, '_blank')}
                      className="bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-black transition-all shadow-lg flex items-center justify-center gap-2"
                    >
                      <Ticket className="w-5 h-5" /> Open & Download Pass
                    </button>
                    <button 
                      onClick={() => { setShowAddModal(false); setSuccessPassId(null); }}
                      className="text-slate-500 hover:text-slate-800 text-xs font-bold uppercase tracking-widest pt-2 transition-colors"
                    >
                      Back to Dashboard
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleAddAttendee} className="p-8 space-y-5">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest pl-1">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input 
                        required
                        type="text" 
                        placeholder="e.g. John Doe" 
                        value={newAttendee.name}
                        onChange={(e) => setNewAttendee({...newAttendee, name: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 pl-11 pr-4 outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium text-slate-900 text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest pl-1">Email</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input 
                          required
                          type="email" 
                          placeholder="john@example.com" 
                          value={newAttendee.email}
                          onChange={(e) => setNewAttendee({...newAttendee, email: e.target.value})}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 pl-11 pr-4 outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium text-slate-900 text-sm"
                        />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest pl-1">Phone</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input 
                          required
                          type="tel" 
                          placeholder="+91..." 
                          value={newAttendee.phone}
                          onChange={(e) => setNewAttendee({...newAttendee, phone: e.target.value})}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 pl-11 pr-4 outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium text-slate-900 text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest pl-1">Company</label>
                      <div className="relative">
                        <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input 
                          type="text" 
                          placeholder="Organization" 
                          value={newAttendee.company}
                          onChange={(e) => setNewAttendee({...newAttendee, company: e.target.value})}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 pl-11 pr-4 outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium text-slate-900 text-sm"
                        />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest pl-1">Designation</label>
                      <div className="relative">
                        <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input 
                          type="text" 
                          placeholder="Position" 
                          value={newAttendee.designation}
                          onChange={(e) => setNewAttendee({...newAttendee, designation: e.target.value})}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 pl-11 pr-4 outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium text-slate-900 text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  <button 
                    type="submit"
                    disabled={adding}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-black transition-all shadow-lg flex items-center justify-center gap-2 mt-2 disabled:opacity-70 disabled:hover:scale-100 active:scale-95"
                  >
                    {adding ? <Loader2 className="w-6 h-6 animate-spin" /> : "Generate & Add Attendee"}
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
