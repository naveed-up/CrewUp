import React from "react";
import { Search, Plus, ShieldCheck, FileSearch, Users, TrendingUp } from "lucide-react";

interface HeroProps {
  onFindSubcontractors: () => void;
  onPostProject: () => void;
}

export default function Hero({ onFindSubcontractors, onPostProject }: HeroProps) {
  return (
    <section className="relative bg-white pt-8 pb-16 lg:pb-24 font-sans overflow-hidden">
      {/* Background Graphic elements */}
      <div className="absolute top-0 right-0 -z-10 h-full w-full max-w-7xl">
        <div className="absolute -right-20 top-0 h-[600px] w-[600px] rounded-full bg-blue-50/50 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-8">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left max-w-xl">
            <h1 className="font-display text-4xl sm:text-6xl lg:text-[72px] font-black leading-tight tracking-tight text-slate-900">
              Build Better.
              <span className="block mt-2 text-blue-600">Together.</span>
            </h1>
            <p className="mt-6 text-base sm:text-xl text-slate-600 leading-relaxed">
              CrewUp is the marketplace for general contractors to find trusted subcontractors and build stronger teams.
            </p>
            
            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                onClick={onFindSubcontractors}
                className="flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 sm:py-4.5 rounded-xl text-sm sm:text-[16px] shadow-lg shadow-blue-500/15 hover:shadow-blue-500/25 active:scale-[0.99] transition-all duration-150"
              >
                <Search className="h-4 sm:h-5 w-4 sm:w-5" />
                Find Subcontractors
              </button>
              <button
                onClick={onPostProject}
                className="flex items-center justify-center gap-2.5 border-2 border-blue-600 hover:bg-blue-50/50 text-blue-600 font-bold px-8 py-4 sm:py-4.5 rounded-xl text-sm sm:text-[16px] active:scale-[0.99] transition-all duration-150"
              >
                <Plus className="h-4 sm:h-5 w-4 sm:w-5 stroke-[2.5]" />
                Post a Project
              </button>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-6 relative h-[250px] sm:h-[450px] lg:h-[580px] w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
            {/* Image using high quality construction workers looking at tablet */}
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1200')` }} />
            
            {/* Radial overlay to match screenshot's high-fidelity fading effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-transparent hidden lg:block" />
            
            {/* Ambient decorative badge */}
            <div className="absolute top-6 right-6 bg-slate-900/90 backdrop-blur-md text-white rounded-full px-5 py-2.5 text-xs font-semibold tracking-wide uppercase flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Verified Local Subcontractors
            </div>
          </div>

        </div>

        {/* Feature Cards overlap/lower panel */}
        <div className="mt-16 sm:mt-24 bg-white border border-slate-100 rounded-2xl sm:rounded-3xl shadow-xl shadow-slate-100/60 p-6 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 lg:divide-x divide-slate-100">
            
            {/* Card 1 */}
            <div className="flex flex-col items-start pt-6 md:pt-0 lg:px-4 first:pl-0">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-4.5">
                <ShieldCheck className="h-6 w-6 stroke-[2]" />
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900">Find Trusted Pros</h3>
              <p className="mt-2 text-[14px] text-slate-500 leading-relaxed font-sans">
                Connect with verified subcontractors you can count on.
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-start pt-6 md:pt-0 lg:px-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-4.5">
                <FileSearch className="h-6 w-6 stroke-[2]" />
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900">Post & Find Work</h3>
              <p className="mt-2 text-[14px] text-slate-500 leading-relaxed font-sans">
                Post projects or find opportunities that match your skills.
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-start pt-6 md:pt-0 lg:px-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-4.5">
                <Users className="h-6 w-6 stroke-[2]" />
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900">Build Relationships</h3>
              <p className="mt-2 text-[14px] text-slate-500 leading-relaxed font-sans">
                Network, communicate, and build long-term partnerships.
              </p>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col items-start pt-6 md:pt-0 lg:px-4 last:pr-0">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-4.5">
                <TrendingUp className="h-6 w-6 stroke-[2]" />
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900">Grow Your Business</h3>
              <p className="mt-2 text-[14px] text-slate-500 leading-relaxed font-sans">
                Win more jobs and scale your business with CrewUp.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
