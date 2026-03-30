import { connectDB } from '@/lib/mongodb'
import { Visitor } from '@/models/Visitor'
import { CheckCircle2, XCircle, ShieldCheck, Calendar, MapPin, Building, User } from 'lucide-react'
import Link from 'next/link'

export default async function VerifyPage({ params }: { params: { passId: string } }) {
  const { passId } = params
  
  await connectDB()
  const visitor = await Visitor.findOne({ passId }).lean()

  if (!visitor) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-center">
        <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mb-6 border border-red-500/30">
          <XCircle className="w-10 h-10 text-red-500" />
        </div>
        <h1 className="text-2xl font-black text-white mb-2 uppercase tracking-tighter">Pass Not Found</h1>
        <p className="text-slate-400 max-w-xs mb-8">This pass ID does not exist in our secure database. Please contact event support.</p>
        <Link href="/entryflow" className="px-6 py-3 bg-slate-900 text-white rounded-xl font-bold border border-white/10 hover:bg-slate-800 transition-all">
          Back to Home
        </Link>
      </div>
    )
  }

  const isEntered = visitor.status === 'entered'

  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-blue-500/30 overflow-hidden relative">
      {/* Premium Background Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] -z-10 -translate-x-1/3 translate-y-1/4" />

      <div className="max-w-md mx-auto pt-12 pb-20 px-6 relative z-10">
        
        {/* Branding */}
        <div className="flex flex-col items-center mb-10 text-center">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center shadow-xl shadow-blue-900/40 mb-4">
            <ShieldCheck className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-white font-extrabold text-xl tracking-tight">EntryFlow <span className="text-blue-400">Verify</span></h2>
          <p className="text-slate-500 text-[10px] uppercase tracking-[0.2em] mt-1 font-bold">Secure Verification Protocol</p>
        </div>

        {/* Status Card */}
        <div className="bg-white/5 backdrop-blur-2xl rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl relative">
          {/* Top Progress Bar */}
          <div className="h-1.5 w-full bg-blue-600/20">
            <div className="h-full bg-blue-500 w-full animate-pulse"></div>
          </div>

          <div className="p-8 flex flex-col items-center text-center">
            {/* Status Icon */}
            <div className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center mb-6 shadow-inner ring-8 ring-emerald-500/10 relative">
               <CheckCircle2 className="w-12 h-12 text-white" />
               <div className="absolute -inset-2 rounded-full border border-emerald-500/20 animate-ping"></div>
            </div>

            <h1 className="text-3xl font-black text-white tracking-tighter uppercase mb-2">Verified Access</h1>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-widest mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
              Authentic Pass
            </div>

            {/* Details Grid */}
            <div className="w-full space-y-4">
              <div className="bg-white/5 rounded-2xl p-5 border border-white/5 text-left transition-all hover:bg-white/10">
                <div className="flex items-center gap-3 mb-4 border-b border-white/5 pb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                    <User className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Attendee</p>
                    <p className="text-lg font-bold text-white leading-none mt-1">{visitor.name}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-400">
                      <Building className="w-3.5 h-3.5" />
                      <span className="text-xs font-medium">Company</span>
                    </div>
                    <span className="text-xs font-bold text-white uppercase tracking-wider">{visitor.company || 'Private'}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-400">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span className="text-xs font-medium">Pass Type</span>
                    </div>
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-[9px] font-black tracking-widest uppercase shadow-lg shadow-blue-600/20">
                      {visitor.passType}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-400">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-xs font-medium">Entry Status</span>
                    </div>
                    <span className={`text-[10px] font-black uppercase tracking-widest ${isEntered ? 'text-amber-400' : 'text-emerald-400'}`}>
                      {isEntered ? 'Checked In' : 'Not Yet Entered'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Event Info */}
              <div className="bg-blue-600/10 rounded-2xl p-5 border border-blue-500/20 text-left">
                <div className="flex items-center gap-3">
                  <div className="flex-1">
                    <p className="text-[10px] text-blue-400 font-bold uppercase tracking-widest mb-1">Event Registry</p>
                    <p className="text-sm font-bold text-white line-clamp-1">{visitor.eventName || 'Tech Summit 2025'}</p>
                    <div className="flex items-center gap-4 mt-3">
                      <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-bold">
                        <Calendar className="w-3 h-3 text-blue-400" />
                        {visitor.eventDate}
                      </div>
                      <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-bold">
                        <MapPin className="w-3 h-3 text-blue-400" />
                        {visitor.eventVenue || 'Main Hall'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Security ID */}
            <div className="mt-8 pt-8 border-t border-white/5 w-full">
              <p className="text-[9px] text-slate-500 font-bold uppercase tracking-[0.3em] mb-2">Unique Security Token</p>
              <p className="text-[10px] text-blue-200 font-mono tracking-widest bg-white/5 py-2 px-4 rounded-lg inline-block">{passId}</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-12 text-center text-[10px] text-slate-600 font-bold uppercase tracking-[0.2em]">
          Powered by EntryFlow Security Protocol &middot; Version 2.0
        </p>
      </div>
    </div>
  )
}
