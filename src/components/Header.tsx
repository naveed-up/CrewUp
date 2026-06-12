import React, { useState } from "react";
import { ChevronDown, Menu, X, LogIn } from "lucide-react";

interface HeaderProps {
  onLogin: () => void;
  onNavigate: (sectionId: string) => void;
  currentTab?: string;
  onViewDashboard: () => void;
  onOpenSignUp: () => void;
}

export default function Header({ onLogin, onNavigate, onViewDashboard, onOpenSignUp }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  const navItems = [
    { label: "How It Works", id: "how-it-works" },
    { label: "Find Work", id: "find-work" },
    { label: "Find Contractors", id: "find-contractors" },
    { label: "Pricing", id: "pricing" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-100 shadow-sm/5 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate("hero")}>
            <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white font-extrabold shadow-md shadow-blue-500/20">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 8.5L12 4.5L20 8.5V15.5L12 19.5L4 15.5V8.5Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 4.5V19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 15.5L12 11.5L20 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="flex items-baseline">
              <span className="font-display text-2xl font-black tracking-tight text-slate-900">CREW</span>
              <span className="font-display text-2xl font-black tracking-tight text-blue-600">UP</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="text-[15px] font-medium text-slate-600 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </button>
            ))}

            {/* Resources Dropdown */}
            <div className="relative">
              <button
                onClick={() => setResourcesOpen(!resourcesOpen)}
                onBlur={() => setTimeout(() => setResourcesOpen(false), 200)}
                className="flex items-center gap-1 text-[15px] font-medium text-slate-600 hover:text-blue-600 transition-colors"
              >
                Resources
                <ChevronDown className={`h-4 w-4 transition-transform ${resourcesOpen ? "rotate-180" : ""}`} />
              </button>

              {resourcesOpen && (
                <div className="absolute top-full left-0 mt-2 w-52 rounded-xl border border-slate-100 bg-white p-2 shadow-xl animate-in fade-in slide-in-from-top-3 duration-200">
                  <a href="#blog" className="block rounded-lg px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600">
                    Blog & Articles
                  </a>
                  <a href="#rates" className="block rounded-lg px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600">
                    Construction Labor Rates
                  </a>
                  <a href="#templates" className="block rounded-lg px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600">
                    Project Contract Templates
                  </a>
                  <div className="h-px bg-slate-100 my-1" />
                  <button 
                    onClick={onViewDashboard}
                    className="w-full text-left rounded-lg px-4 py-2.5 text-sm font-medium text-blue-600 hover:bg-blue-50/50"
                  >
                    Interactive Demo
                  </button>
                </div>
              )}
            </div>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onLogin}
              className="flex items-center gap-1 text-[15px] font-semibold text-slate-700 hover:text-blue-600 px-4 py-2 transition-colors"
            >
              Log In
            </button>
            <button
              onClick={onOpenSignUp}
              className="text-[14px] font-bold text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 active:scale-[0.98] transition-all"
            >
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden rounded-lg p-2 text-slate-600 hover:bg-slate-50 hover:text-blue-600"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 py-6 shadow-inner animate-in slide-in-from-top-5 duration-150">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className="text-left py-2 text-base font-semibold text-slate-700 hover:text-blue-600"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                onViewDashboard();
                setMobileMenuOpen(false);
              }}
              className="text-left py-2 text-base font-semibold text-blue-600"
            >
              Interactive Demo Applet
            </button>
            <div className="h-px bg-slate-100 my-2" />
            <div className="flex items-center gap-4 pt-2">
              <button
                onClick={() => {
                  onLogin();
                  setMobileMenuOpen(false);
                }}
                className="flex-1 text-center font-bold text-slate-700 border border-slate-200 rounded-xl py-3 hover:bg-slate-50 transition-colors"
              >
                Log In
              </button>
              <button
                onClick={() => {
                  onOpenSignUp();
                  setMobileMenuOpen(false);
                }}
                className="flex-1 text-center font-bold text-white bg-blue-600 rounded-xl py-3 hover:bg-blue-700 shadow-md shadow-blue-500/10 transition-colors"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
