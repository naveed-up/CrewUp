import React, { useState } from "react";
import { 
  Zap, Wrench, Wind, Home, Shield, Grid, FileText, Paintbrush, 
  Layers, Hammer, Sprout, LayoutGrid, Users, Check, Star, ExternalLink, MapPin 
} from "lucide-react";
import { mockContractors } from "../data";
import { Contractor } from "../types";

interface FindContractorsSectionProps {
  onFindContractors: () => void;
  onSelectContractor?: (contractor: Contractor) => void;
}

export default function FindContractorsSection({ onFindContractors, onSelectContractor }: FindContractorsSectionProps) {
  const [selectedTrade, setSelectedTrade] = useState<string | null>(null);
  const [contactingContractor, setContactingContractor] = useState<Contractor | null>(null);
  const [contactSuccess, setContactSuccess] = useState(false);
  const [messageText, setMessageText] = useState("");

  const trades = [
    { name: "Electrical", icon: <Zap className="h-8 w-8 text-blue-600 stroke-[1.5]" /> },
    { name: "Plumbing", icon: <Wrench className="h-8 w-8 text-blue-600 stroke-[1.5]" /> },
    { name: "HVAC", icon: <Wind className="h-8 w-8 text-blue-600 stroke-[1.5]" /> },
    { name: "Roofing", icon: <Home className="h-8 w-8 text-blue-600 stroke-[1.5]" /> },
    { name: "Concrete", icon: <Shield className="h-8 w-8 text-blue-600 stroke-[1.5]" /> },
    { name: "Framing", icon: <Grid className="h-8 w-8 text-blue-600 stroke-[1.5]" /> },
    { name: "Drywall", icon: <FileText className="h-8 w-8 text-blue-600 stroke-[1.5]" /> },
    { name: "Painting", icon: <Paintbrush className="h-8 w-8 text-blue-600 stroke-[1.5]" /> },
    { name: "Flooring", icon: <Layers className="h-8 w-8 text-blue-600 stroke-[1.5]" /> },
    { name: "Excavation", icon: <Hammer className="h-8 w-8 text-blue-600 stroke-[1.5]" /> },
    { name: "Landscaping", icon: <Sprout className="h-8 w-8 text-blue-600 stroke-[1.5]" /> },
    { name: "Masonry", icon: <LayoutGrid className="h-8 w-8 text-blue-600 stroke-[1.5]" /> }
  ];

  const filteredContractors = mockContractors.filter(c => !selectedTrade || c.trade === selectedTrade);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSuccess(true);
    setTimeout(() => {
      setContactSuccess(false);
      setContactingContractor(null);
      setMessageText("");
    }, 2800);
  };

  return (
    <section id="find-contractors" className="bg-white py-16 lg:py-24 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper Title Cluster */}
        <div className="text-left mb-12">
          <span className="text-sm font-bold text-blue-600 uppercase tracking-widest font-display">
            Find Contractors
          </span>
          <h2 className="mt-2 font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Find Qualified Subcontractors Fast
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl font-sans">
            Search trusted professionals across dozens of construction trades.
          </p>
        </div>

        {/* Layout Grid Split: Grid & Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left/Middle Column: Interactive 12 Trades Grid */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {trades.map((tr) => (
                <div
                  key={tr.name}
                  onClick={() => setSelectedTrade(selectedTrade === tr.name ? null : tr.name)}
                  className={`border rounded-2xl p-5 text-center flex flex-col items-center justify-center gap-3 cursor-pointer transition-all duration-200 select-none ${
                    selectedTrade === tr.name
                      ? "border-blue-600 bg-blue-50/40 shadow-md shadow-blue-500/5 ring-1 ring-blue-500"
                      : "border-slate-100 bg-white hover:border-slate-300 hover:shadow-lg hover:shadow-slate-100/40"
                  }`}
                >
                  <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-blue-50 transition-colors">
                    {tr.icon}
                  </div>
                  <span className="font-display font-extrabold text-[15px] text-slate-800">
                    {tr.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Direct CTA under grid */}
            <div className="flex flex-wrap items-center gap-4 mt-2">
              <button
                onClick={onFindContractors}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl text-[15px] shadow-lg shadow-blue-500/10 active:scale-[0.98] transition-all"
              >
                Find Contractors
              </button>
              {selectedTrade && (
                <button
                  onClick={() => setSelectedTrade(null)}
                  className="border border-slate-200 hover:bg-slate-50 text-slate-600 font-bold px-6 py-4 rounded-xl text-[14px] transition-colors"
                >
                  Clear Selection Filter
                </button>
              )}
            </div>
          </div>

          {/* Right Column: Workers looking at tablet Image */}
          <div className="lg:col-span-5 h-[380px] sm:h-[480px] lg:h-[550px] relative rounded-3xl overflow-hidden shadow-2xl">
            {/* Direct equivalent representation to workers photo */}
            <div 
              className="absolute inset-0 bg-cover bg-center" 
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1200')` }} 
            />
            {/* Visual overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
            <div className="absolute top-6 left-6 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider rounded-lg px-4 py-2">
              Local Partnerships
            </div>
          </div>

        </div>

        {/* Dynamic Interactive Contractors Panel listing matching pros */}
        <div id="contractor-explorer" className="mt-16 bg-slate-50 border border-slate-100 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 border-b border-slate-200/60 pb-5">
            <div>
              <h3 className="font-display font-bold text-xl text-slate-900 flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-600" />
                Available Subcontractors {selectedTrade ? `for ${selectedTrade}` : ""}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">Contact, negotiate terms or request site estimates directly</p>
            </div>
            <span className="text-xs font-bold bg-white text-slate-700 px-3 py-1.5 rounded-lg shadow-xs border border-slate-200/60">
              Showing {filteredContractors.length} qualified pros
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredContractors.map((c) => (
              <div 
                key={c.id} 
                className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top contractor details */}
                  <div className="flex justify-between items-start gap-3">
                    <img 
                      src={c.avatarUrl} 
                      alt={c.name} 
                      className="h-12 w-12 rounded-full object-cover border-2 border-slate-100" 
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="font-display font-bold text-slate-900 truncate block text-[15px]">{c.name}</span>
                        {c.verified && (
                          <span className="bg-blue-50 text-blue-600 text-[9px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded border border-blue-100 flex-shrink-0">
                            Verified
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] font-semibold text-slate-500 block truncate">{c.companyName}</span>
                      <span className="inline-block mt-1 bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-[10px] font-bold">
                        {c.trade}
                      </span>
                    </div>
                  </div>

                  {/* Rating & Location & Experience row */}
                  <div className="grid grid-cols-3 gap-1 border-y border-slate-100/80 my-4 py-2 text-center">
                    <div>
                      <span className="text-[10px] text-slate-400 block font-medium">Rating</span>
                      <span className="font-bold text-xs text-slate-800 flex items-center justify-center gap-0.5 mt-0.5">
                        <Star className="h-3.5 w-3.5 text-amber-500 fill-amber-500" /> {c.rating}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block font-medium">Experience</span>
                      <span className="font-bold text-xs text-slate-800 block mt-0.5">{c.experience}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block font-medium">Location</span>
                      <span className="font-bold text-xs text-slate-800 block truncate mt-0.5">{c.location}</span>
                    </div>
                  </div>

                  {/* Portfolio samples list */}
                  <div className="mb-4">
                    <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Example Past Work</span>
                    <ul className="mt-1 flex flex-col gap-1">
                      {c.portfolio.map((p, idx) => (
                        <li key={idx} className="text-xs text-slate-600 flex items-center gap-1.5 font-medium truncate">
                          <Check className="h-3.5 w-3.5 text-blue-600 shrink-0" /> {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action Button */}
                <button
                  type="button"
                  onClick={() => setContactingContractor(c)}
                  className="w-full bg-blue-50/50 hover:bg-blue-600 text-blue-600 hover:text-white border border-blue-100 hover:border-blue-600 font-bold py-2.5 rounded-xl text-xs transition-all flex items-center justify-center gap-1 cursor-pointer"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  Request Estimate Bid
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Interactive Message Contact Modal */}
      {contactingContractor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative border border-slate-100 animate-in zoom-in-95 duration-150">
            <h3 className="font-display font-extrabold text-2xl text-slate-900">
              Request Estimate Quote
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Contacting <span className="font-bold text-blue-600">{contactingContractor.name}</span> from <span className="font-medium text-slate-800">{contactingContractor.companyName}</span>
            </p>

            {contactSuccess ? (
              <div className="mt-6 py-8 text-center flex flex-col items-center">
                <div className="h-14 w-14 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center border border-emerald-100 check-animation mb-4">
                  <Check className="h-7 w-7 stroke-[3]" />
                </div>
                <h4 className="font-display font-extrabold text-lg text-slate-900">Request Sent Successfully!</h4>
                <p className="text-xs text-slate-500 mt-1 max-w-sm">
                  We've successfully forwarded your contact details and message to Marcus. They will get back to you inside 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="mt-6">
                <div className="flex flex-col gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Project Trade Scope</label>
                    <input 
                      type="text" 
                      readOnly 
                      value={`${contactingContractor.trade} Subcontracting Contract`}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-600 font-semibold focus:outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Trade Details / Bid message</label>
                    <textarea
                      required
                      rows={4}
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                      placeholder="Hi! I need commercial electrical panel installation for a 3-unit office project in Denver. Can you provide price rate sheets?"
                      className="w-full bg-white border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl px-4 py-3 text-xs text-slate-800 placeholder-slate-400 focus:outline-hidden transition-all"
                    />
                  </div>

                  <div className="border border-amber-100 bg-amber-50 rounded-xl p-3 flex gap-2.5">
                    <span className="text-amber-500 text-sm">💡</span>
                    <p className="text-[10px] leading-relaxed text-amber-800 font-medium">
                      All communications are encrypted and contract secure. Proceeding sends your business email and profile details.
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-3 border-t border-slate-100 pt-5">
                  <button
                    type="button"
                    onClick={() => setContactingContractor(null)}
                    className="font-bold text-slate-500 hover:text-slate-800 text-xs px-4 py-3"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-6 py-3.5 rounded-xl shadow-lg shadow-blue-500/10 active:scale-[0.98] transition-all"
                  >
                    Submit Bid Request
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
