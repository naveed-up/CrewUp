import React, { useState } from "react";
import { Check, ArrowRight } from "lucide-react";

interface PricingSectionProps {
  onSelectPlan: (planName: string, price: string) => void;
}

export default function PricingSection({ onSelectPlan }: PricingSectionProps) {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annually">("monthly");

  const plans = [
    {
      name: "Starter",
      badge: "FREE ENTRY",
      price: "0",
      period: "forever",
      description: "For individuals exploring CrewUp.",
      features: [
        "Basic Profile",
        "Browse Opportunities",
        "Limited Messages",
        "Community Access"
      ],
      ctaText: "Get Started",
      highlighted: false
    },
    {
      name: "Pro",
      badge: "MOST POPULAR",
      price: billingPeriod === "monthly" ? "29" : "22",
      period: "mo",
      description: "For active subcontractors and contractors.",
      features: [
        "Unlimited Searches",
        "Unlimited Messaging",
        "Project Alerts",
        "Featured Profile",
        "Save Contractors"
      ],
      ctaText: "Start Pro Plan",
      highlighted: true
    },
    {
      name: "Business",
      badge: "BEST VALUE",
      price: billingPeriod === "monthly" ? "99" : "79",
      period: "mo",
      description: "For growing construction companies.",
      features: [
        "Unlimited Projects",
        "Team Accounts",
        "Featured Listings",
        "Advanced Search",
        "Priority Support"
      ],
      ctaText: "Start Business Plan",
      highlighted: false
    }
  ];

  return (
    <section id="pricing" className="bg-slate-50 py-16 lg:py-24 font-sans border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Group */}
        <div className="text-center mb-12">
          <span className="text-sm font-bold text-blue-600 uppercase tracking-widest font-display">
            Pricing
          </span>
          <h2 className="mt-2 font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Simple Pricing For Construction Professionals
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-500 max-w-xl mx-auto font-sans">
            No hidden fees. Upgrade when you're ready. Complete trial available.
          </p>

          {/* Billing Switcher (Bonus modern touch) */}
          <div className="mt-6 flex items-center justify-center gap-2">
            <span className={`text-xs font-semibold ${billingPeriod === "monthly" ? "text-slate-950" : "text-slate-400"}`}>Monthly billing</span>
            <button
              onClick={() => setBillingPeriod(billingPeriod === "monthly" ? "annually" : "monthly")}
              className="relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-slate-200 transition-colors duration-200 ease-in-out focus:outline-hidden"
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                  billingPeriod === "annually" ? "translate-x-5 bg-blue-600" : "translate-x-0"
                }`}
              />
            </button>
            <span className={`text-xs font-semibold ${billingPeriod === "annually" ? "text-slate-950" : "text-slate-400"} flex items-center gap-1.5`}>
              Annually (Save 20%)
              <span className="bg-emerald-100 text-emerald-800 text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full">Save</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                p.highlighted
                  ? "bg-white border-2 border-blue-600 shadow-2xl shadow-blue-500/5 translate-y-[-4px] md:translate-y-[-8px]"
                  : "bg-white border border-slate-100 shadow-xl shadow-slate-100/50"
              }`}
            >
              {/* Ribbon Header standard */}
              {p.highlighted && (
                <div className="absolute top-0 left-1/3 right-1/3 transform -translate-y-1/2 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest text-center py-1.5 rounded-full shadow-md">
                  {p.badge}
                </div>
              )}

              <div>
                {/* Header text */}
                <div className="flex justify-between items-center mb-6">
                  <span className={`font-display text-xs font-black uppercase tracking-wider ${p.highlighted ? "text-blue-600" : "text-slate-400"}`}>
                    {p.name}
                  </span>
                  {!p.highlighted && (
                    <span className="text-[9px] font-bold bg-slate-100 text-slate-500 px-2.5 py-1 rounded-full">{p.badge}</span>
                  )}
                </div>

                {/* Price Label */}
                <div className="flex items-baseline mb-6 text-slate-900">
                  <span className="font-display text-4xl sm:text-5xl font-black tracking-tight">$</span>
                  <span className="font-display text-5xl sm:text-6xl font-black tracking-tight">{p.price}</span>
                  <span className="text-slate-400 font-medium ml-1.5 text-base">/{p.period}</span>
                </div>

                <p className="text-xs font-medium text-slate-500 mb-8">{p.description}</p>

                {/* Features Divider */}
                <div className="h-px bg-slate-100 my-6" />

                {/* Features List */}
                <ul className="flex flex-col gap-4 mb-8">
                  {p.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 border border-blue-100.5">
                        <Check className="h-3 w-3 stroke-[2.5]" />
                      </div>
                      <span className="text-sm font-semibold text-slate-700 leading-tight">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action standard CTAs */}
              <div>
                <button
                  type="button"
                  onClick={() => onSelectPlan(p.name, p.price)}
                  className={`w-full font-bold text-[14px] py-4 rounded-xl active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    p.highlighted
                      ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/15"
                      : "bg-white border-2 border-blue-600 hover:bg-blue-50/50 text-blue-600"
                  }`}
                >
                  {p.ctaText}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
