import React from "react";
import { Star, Users, Handshake, HardHat } from "lucide-react";

export default function SocialRatingSection() {
  return (
    <section className="bg-white py-12 border-t border-b border-slate-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category tag */}
        <div className="text-center mb-8">
          <span className="text-[12px] font-black text-blue-600 uppercase tracking-widest font-display">
            Trusted By Construction Professionals
          </span>
        </div>

        {/* Info row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center text-center items-center">
          
          {/* Item 1: Average Rating with Stars */}
          <div className="flex flex-col items-center">
            <span className="font-display text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-none">
              4.9/5
            </span>
            <span className="block text-xs font-semibold text-slate-500 mt-2">
              Average Rating
            </span>
            {/* Stars row */}
            <div className="flex items-center gap-0.5 mt-2 text-amber-400">
              <Star className="h-4 w-4 fill-amber-400 stroke-amber-400" />
              <Star className="h-4 w-4 fill-amber-400 stroke-amber-400" />
              <Star className="h-4 w-4 fill-amber-400 stroke-amber-400" />
              <Star className="h-4 w-4 fill-amber-400 stroke-amber-400" />
              {/* Half-filled last star visual representation */}
              <div className="relative">
                <Star className="h-4 w-4 text-slate-200 fill-slate-200" />
                <div className="absolute top-0 left-0 overflow-hidden w-1/2">
                  <Star className="h-4 w-4 fill-amber-400 stroke-amber-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Item 2: Active Members */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-blue-50 text-blue-600 mb-2">
              <Users className="h-5 w-5" />
            </div>
            <span className="font-display text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-none">
              5,000+
            </span>
            <span className="block text-xs font-semibold text-slate-500 mt-1">
              Active Members
            </span>
          </div>

          {/* Item 3: Connections Made */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-blue-50 text-blue-600 mb-2">
              <Handshake className="h-5 w-5" />
            </div>
            <span className="font-display text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-none">
              10,000+
            </span>
            <span className="block text-xs font-semibold text-slate-500 mt-1">
              Connections Made
            </span>
          </div>

          {/* Item 4: Construction Trades */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-blue-50 text-blue-600 mb-2">
              <HardHat className="h-5 w-5" />
            </div>
            <span className="font-display text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-none">
              50+
            </span>
            <span className="block text-xs font-semibold text-slate-500 mt-1">
              Construction Trades
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
