import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import FindWorkSection from "./components/FindWorkSection";
import FindContractorsSection from "./components/FindContractorsSection";
import PricingSection from "./components/PricingSection";
import SocialRatingSection from "./components/SocialRatingSection";
import FooterCTA from "./components/FooterCTA";
import DashboardView from "./components/DashboardView";

export default function App() {
  const [view, setView] = useState<"landing" | "dashboard">("landing");
  const [modal, setModal] = useState<"login" | "signup" | "checkout" | null>(null);
  
  // Checkout detail tracking
  const [selectedPlan, setSelectedPlan] = useState({ name: "Pro", price: "29" });
  
  // Custom mock values
  const [checkoutEmail, setCheckoutEmail] = useState("");
  const [checkoutCompanyName, setCheckoutCompanyName] = useState("");
  const [checkoutCard, setCheckoutCard] = useState("");

  const handleNavigate = (sectionId: string) => {
    if (view !== "landing") {
      setView("landing");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleSelectPlan = (planName: string, price: string) => {
    setSelectedPlan({ name: planName, price: price });
    setModal("checkout");
  };

  const handleCompleteCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setModal(null);
    setView("dashboard");
  };

  return (
    <div className="bg-white min-h-screen selection:bg-blue-600 selection:text-white">
      
      {view === "landing" ? (
        <>
          {/* Top Banner indicating Interactive mode */}
          <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 text-center font-semibold font-mono flex items-center justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Interactive Demo: Click any trade to filter. Press <strong>Log In</strong> or <strong>Sign Up</strong> to view the detailed app dashboard mockup!</span>
          </div>

          <Header 
            onLogin={() => setModal("login")}
            onOpenSignUp={() => setModal("signup")}
            onNavigate={handleNavigate}
            onViewDashboard={() => setView("dashboard")}
          />

          <main>
            {/* Hero Section */}
            <Hero 
              onFindSubcontractors={() => handleNavigate("find-contractors")} 
              onPostProject={() => setModal("signup")} 
            />

            {/* How CrewUp Works Section (including Mockup Dashboard rendering) */}
            <HowItWorks 
              onLogin={() => setModal("login")} 
              onPostProject={() => setModal("signup")} 
            />

            {/* Find Work section (full dark navy banner) */}
            <FindWorkSection 
              onBrowseJobs={() => setView("dashboard")} 
            />

            {/* Find Qualified Subcontractors section (12 Grid item) */}
            <FindContractorsSection 
              onFindContractors={() => handleNavigate("contractor-explorer")} 
            />

            {/* Pricing Section standard cards */}
            <PricingSection 
              onSelectPlan={handleSelectPlan} 
            />

            {/* Trust badge social proof indicators */}
            <SocialRatingSection />

            {/* Curved blue CTA callout and standard footer */}
            <FooterCTA 
              onFindWork={() => setView("dashboard")} 
              onFindContractors={() => handleNavigate("find-contractors")} 
            />
          </main>
        </>
      ) : (
        <DashboardView onLogout={() => setView("landing")} />
      )}

      {/* LOGIN MODAL OVERLAY */}
      {modal === "login" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-910 bg-slate-900/65 backdrop-blur-xs p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-sm w-full shadow-2xl border border-slate-100 text-left animate-in zoom-in-95 duration-150">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded bg-blue-600 text-white flex items-center justify-center font-bold">C</div>
              <span className="font-display text-lg font-black text-slate-900">CREW<span className="text-blue-600">UP</span></span>
            </div>
            <h3 className="font-display font-extrabold text-xl text-slate-950">Welcome Back!</h3>
            <p className="text-xs text-slate-500 mt-1">Access your subcontractor network details immediately.</p>

            <form onSubmit={(e) => { e.preventDefault(); setModal(null); setView("dashboard"); }} className="mt-6 flex flex-col gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Business Email</label>
                <input 
                  type="email" 
                  required 
                  placeholder="name@company.com"
                  className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500 rounded-xl px-4 py-3 text-xs text-slate-800 placeholder-slate-400 focus:outline-hidden transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-sans">Security Password</label>
                <input 
                  type="password" 
                  required 
                  placeholder="••••••••••••"
                  className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500 rounded-xl px-4 py-3 text-xs text-slate-800 placeholder-slate-400 focus:outline-hidden transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-3.5 rounded-xl text-center shadow-lg shadow-blue-500/15 active:scale-[0.98] transition-all cursor-pointer mt-2"
              >
                Log In &amp; Open Dashboard Mock
              </button>
            </form>

            <div className="mt-4 pt-4 border-t border-slate-100 text-center">
              <button 
                onClick={() => setModal("signup")} 
                className="text-xs text-blue-650 text-blue-650 hover:underline font-bold"
              >
                Don't have an account? Sign up here
              </button>
            </div>
            <button 
              onClick={() => setModal(null)} 
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-650 hover:text-slate-700 text-sm font-bold"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* SIGNUP MODAL OVERLAY */}
      {modal === "signup" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/65 backdrop-blur-xs p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-100 text-left animate-in zoom-in-95 duration-150">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded bg-blue-600 text-white flex items-center justify-center font-bold">C</div>
              <span className="font-display text-lg font-black text-slate-900">CREW<span className="text-blue-600">UP</span></span>
            </div>
            <h3 className="font-display font-extrabold text-xl text-slate-950 font-sans">Join CrewUp Network</h3>
            <p className="text-xs text-slate-500 mt-1">Become part of the fastest growing local contractor pool.</p>

            <form onSubmit={(e) => { e.preventDefault(); setModal(null); setView("dashboard"); }} className="mt-6 flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">First Name</label>
                  <input type="text" required placeholder="John" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-800" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Company Name</label>
                  <input type="text" required placeholder="Vance GC" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-800" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-sans">General Trade / Operation Role</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-800">
                  <option>General Contractor / Commercial Developer</option>
                  <option>Subcontractor (Electrical, Plumbing, Drywall)</option>
                  <option>Independent Handyman / Residential Builder</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Company Email</label>
                <input type="email" required placeholder="john@vance.com" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-800" />
              </div>

              <div className="flex items-start gap-2 pt-2">
                <input type="checkbox" required className="mt-1 h-3.5 w-3.5 text-blue-600 border-slate-200 rounded shrink-0 cursor-pointer" />
                <p className="text-[10px] leading-relaxed text-slate-500 font-medium font-sans">
                  By clicking, I agree to CrewUp license standards, verification of trade credentials, and general terms.
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-3.5 rounded-xl text-center shadow-lg active:scale-[0.98] transition-all cursor-pointer mt-2"
              >
                Register &amp; Open Dashboard Console
              </button>
            </form>

            <div className="mt-4 pt-4 border-t border-slate-100 text-center">
              <button 
                onClick={() => setModal("login")} 
                className="text-xs text-blue-650 hover:underline font-bold"
              >
                Already have an account? Log in instead
              </button>
            </div>
            <button 
              onClick={() => setModal(null)} 
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 text-sm font-bold"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* CHECKOUT SIMULATED MODAL OVERLAY */}
      {modal === "checkout" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/65 backdrop-blur-xs p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-100 text-left relative animate-in zoom-in-95 duration-150">
            <h3 className="font-display font-extrabold text-2xl text-slate-950">Complete Upgrading</h3>
            <p className="text-xs text-slate-500 mt-1">
              You are upgrading your account to the <span className="font-bold text-blue-600">{selectedPlan.name} Plan</span> ($ {selectedPlan.price} / month).
            </p>

            <form onSubmit={handleCompleteCheckout} className="mt-6 flex flex-col gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Business email for invoices</label>
                <input
                  type="email"
                  required
                  value={checkoutEmail}
                  onChange={(e) => setCheckoutEmail(e.target.value)}
                  placeholder="billing@gcenterprises.com"
                  className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500 rounded-xl px-4 py-3 text-xs text-slate-800 placeholder-slate-400 focus:outline-hidden transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Corporate Company Name</label>
                <input
                  type="text"
                  required
                  value={checkoutCompanyName}
                  onChange={(e) => setCheckoutCompanyName(e.target.value)}
                  placeholder="Jenkins General Contracting Inc."
                  className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500 rounded-xl px-4 py-3 text-xs text-slate-800 placeholder-slate-400 focus:outline-hidden transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Mock Credit Card Number</label>
                <input
                  type="text"
                  required
                  maxLength={19}
                  value={checkoutCard}
                  onChange={(e) => setCheckoutCard(e.target.value)}
                  placeholder="4111 2222 3333 4444"
                  className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500 rounded-xl px-4 py-3 text-xs text-slate-800 placeholder-slate-400 focus:outline-hidden transition-all"
                />
              </div>

              <div className="border border-emerald-100 bg-emerald-50 rounded-xl p-3 flex gap-2.5">
                <span className="text-emerald-500 text-sm">✓</span>
                <p className="text-[10px] leading-relaxed text-emerald-800 font-semibold font-sans">
                  Includes 30-day money back guarantee with 100% security encryption. No actual charge will happen.
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-4 rounded-xl text-center shadow-lg active:scale-[0.98] transition-all cursor-pointer mt-1"
              >
                Confirm Upgrade to {selectedPlan.name}
              </button>
            </form>

            <button 
              onClick={() => setModal(null)} 
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 text-sm font-bold"
            >
              ✕
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
