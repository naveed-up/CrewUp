import React from "react";
import { CheckCircle2, Search } from "lucide-react";

interface FindWorkSectionProps {
  onBrowseJobs: () => void;
}

export default function FindWorkSection({ onBrowseJobs }: FindWorkSectionProps) {
  const bullets = [
    { text: "Search by trade", id: "t1" },
    { text: "Search by location", id: "t2" },
    { text: "Direct contractor messaging", id: "t3" },
    { text: "Company profiles", id: "t4" },
    { text: "Project alerts", id: "t5" },
    { text: "Mobile friendly", id: "t6" }
  ];

  return (
    <section id="find-work" className="bg-slate-950 font-sans py-16 sm:py-20 text-white overflow-hidden relative">
      {/* Absolute decorative gradient highlights */}
      <div className="absolute top-0 left-0 -z-0 h-full w-full">
        <div className="absolute left-[30%] top-[-20%] h-[500px] w-[500px] rounded-full bg-blue-900/15 blur-3xl" />
        <div className="absolute right-[-10%] bottom-[-20%] h-[500px] w-[500px] rounded-full bg-blue-800/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Worker holding blueprint image with elegant frames */}
          <div className="lg:col-span-5 h-[350px] sm:h-[450px] lg:h-[500px] relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl group">
            {/* Foreman/engineer holding blueprint on-site */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1000')` }} 
            />
            {/* Visual ambient filter */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 bg-slate-950/70 backdrop-blur-md p-4 rounded-xl border border-white/10">
              <p className="text-xs text-blue-400 font-bold uppercase tracking-wider">Active Project</p>
              <h4 className="font-display font-black text-sm text-white mt-1 leading-tight">Downtown Office Build — Phase 2</h4>
              <p className="text-[11px] text-slate-300 mt-0.5">Electrical & HVAC contracts open for bid</p>
            </div>
          </div>

          {/* Right Column: Text and checklists */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <span className="text-sm font-bold text-blue-400 uppercase tracking-widest font-display">
              Find Work
            </span>
            <h2 className="mt-2 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Find Your Next Opportunity
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-xl">
              Browse construction projects from contractors actively hiring skilled trades. Search, review terms, and secure partnerships directly.
            </p>

            {/* Bullets grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 max-w-lg">
              {bullets.map((bullet) => (
                <div key={bullet.id} className="flex items-center gap-3">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500/10 text-blue-400 border border-blue-400/20 flex items-center justify-center">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <span className="text-base font-semibold text-slate-200">
                    {bullet.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Browse jobs action */}
            <div className="mt-10">
              <button
                onClick={onBrowseJobs}
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl text-[15px] shadow-lg shadow-blue-500/20 active:scale-[0.98] transition-all hover:translate-y-[-1px] duration-150"
              >
                <Search className="h-4 w-4" />
                Browse Jobs
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
