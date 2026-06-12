import React from "react";
import { Search, Users, ShieldAlert, Heart, Copyright } from "lucide-react";

interface FooterCTAProps {
  onFindWork: () => void;
  onFindContractors: () => void;
}

export default function FooterCTA({ onFindWork, onFindContractors }: FooterCTAProps) {
  return (
    <footer className="bg-slate-900 text-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Curved Glowing Callout CTA Box */}
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 sm:p-12 shadow-xl shadow-blue-600/10 mb-16">
          {/* Subtle scaffold style vector shapes behind text */}
          <div className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-15" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800')" }} />
          <div className="absolute top-[-20%] right-[-10%] h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-[-20%] left-[-10%] h-80 w-80 rounded-full bg-blue-900/40 blur-3xl" />

          {/* Core Content Flex Layout */}
          <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-8 text-left">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[40px] font-black tracking-tight text-white leading-tight">
                Ready To Build<br className="hidden sm:inline" /> Better Together?
              </h2>
              <p className="mt-4 text-sm sm:text-base text-blue-50 max-w-xl font-medium leading-relaxed">
                Join contractors and subcontractors using CrewUp to grow their businesses and complete more projects.
              </p>
            </div>

            {/* Action pill buttons */}
            <div className="flex flex-wrap gap-4 shrink-0">
              <button
                onClick={onFindWork}
                className="bg-white hover:bg-slate-50 text-blue-600 font-bold px-7 py-4.5 rounded-full text-sm inline-flex items-center gap-2.5 shadow-lg active:scale-[0.98] transition-all cursor-pointer"
              >
                <Search className="h-4.5 w-4.5" />
                Find Work
              </button>
              <button
                onClick={onFindContractors}
                className="border-2 border-white/80 hover:bg-white/15 text-white font-bold px-7 py-4.5 rounded-full text-sm inline-flex items-center gap-2.5 active:scale-[0.98] transition-all cursor-pointer"
              >
                <Users className="h-4.5 w-4.5" />
                Find Contractors
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom Links Group */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-t border-slate-800 pt-12 text-slate-400">
          
          {/* Logo & Info column */}
          <div className="md:col-span-4 text-left">
            <div className="flex items-center gap-2.5 mb-5 cursor-pointer">
              <div className="h-8 w-8 rounded bg-blue-600 text-white flex items-center justify-center font-bold text-sm">C</div>
              <span className="font-display text-xl font-black text-white tracking-tight">CREW<span className="text-blue-500">UP</span></span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-xs">
              The premier online network for general contractors, handymen, and subcontractors seeking to scale building projects.
            </p>
            <div className="flex gap-4 mt-5">
              {/* Fake aesthetic social mock icons */}
              {["tw", "fb", "ln", "yt"].map((soc) => (
                <span key={soc} className="h-8 w-8 rounded-full bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center text-xs font-bold uppercase transition-colors cursor-pointer select-none">
                  {soc}
                </span>
              ))}
            </div>
          </div>

          {/* Links lists columns */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8 text-left text-xs">
            <div>
              <h4 className="font-display font-bold text-slate-200 uppercase tracking-widest text-[11px] mb-4">Construction Trades</h4>
              <ul className="flex flex-col gap-2.5">
                <li><a href="#how" className="hover:text-white transition-colors">Electrical Contractors</a></li>
                <li><a href="#how" className="hover:text-white transition-colors">Plumbing Subcontractors</a></li>
                <li><a href="#how" className="hover:text-white transition-colors">Commercial Roofing</a></li>
                <li><a href="#how" className="hover:text-white transition-colors">Masonry & Concrete</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold text-slate-200 uppercase tracking-widest text-[11px] mb-4">Resources</h4>
              <ul className="flex flex-col gap-2.5">
                <li><a href="#rates" className="hover:text-white transition-colors">Labor Estimates</a></li>
                <li><a href="#contracts" className="hover:text-white transition-colors">Project Agreements</a></li>
                <li><a href="#blog" className="hover:text-white transition-colors">Industry Blog</a></li>
                <li><a href="#help" className="hover:text-white transition-colors">Support center</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold text-slate-200 uppercase tracking-widest text-[11px] mb-4">Legal Framework</h4>
              <ul className="flex flex-col gap-2.5">
                <li><a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#terms" className="hover:text-white transition-colors">Terms of service</a></li>
                <li><a href="#licensing" className="hover:text-white transition-colors">Licensing guidelines</a></li>
                <li><a href="#insurance" className="hover:text-white transition-colors">Subcontractor Insurance</a></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Legal bottom row */}
        <div className="border-t border-slate-800 mt-12 pt-6 text-center text-[11px] text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="flex items-center gap-1">
            <Copyright className="h-3 w-3" /> 2026 CrewUp Technologies Inc. All rights reserved.
          </p>
          <p className="flex items-center gap-1 font-medium">
            Developed with professional precision in coordination with construction trade standards.
          </p>
        </div>

      </div>
    </footer>
  );
}
