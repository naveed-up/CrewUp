import React, { useState } from "react";
import { 
  Folder, MessageSquare, Heart, User, Settings, Bell, 
  MapPin, Plus, UserPlus, ClipboardList, HardHat, Globe 
} from "lucide-react";
import { mockProjects } from "../data";

interface HowItWorksProps {
  onLogin: () => void;
  onPostProject: () => void;
}

export default function HowItWorks({ onLogin, onPostProject }: HowItWorksProps) {
  // Let's keep a tiny interactive state inside the dashboard mockup
  // so the user can actually hover or select projects inside it!
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  // Stats bar beneath "How It Works"
  const statsList = [
    {
      value: "5,000+",
      label: "Contractors",
      description: "Active local pros",
      icon: (
        <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      value: "10,000+",
      label: "Projects Posted",
      description: "Across all trades",
      icon: (
        <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      value: "50+",
      label: "Trades Supported",
      description: "From foundation to roof",
      icon: (
        <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      value: "Nationwide",
      label: "Coverage",
      description: "Available in all US states",
      icon: (
        <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h2a2.5 2.5 0 002.5-2.5V4a9 9 0 11-15.545 5.688" />
        </svg>
      )
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Create Your Profile",
      description: "Sign up as a contractor or subcontractor and showcase your trade, experience, licenses, insurance, and past work."
    },
    {
      number: "2",
      title: "Post or Search Projects",
      description: "Post upcoming jobs or browse opportunities that match your skills, requirements, and service location."
    },
    {
      number: "3",
      title: "Connect With the Right Pros",
      description: "Message in real-time, compare past ratings, and build trusted relationships with qualified service professionals."
    },
    {
      number: "4",
      title: "Build Better Together",
      description: "Stay connected, cover labor shortages, win more quotes, and scale stronger long-term construction networks."
    }
  ];

  return (
    <section id="how-it-works" className="bg-slate-50 py-16 lg:py-24 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Mockup APP Dashboard */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="bg-slate-900 rounded-3xl p-3 sm:p-4 shadow-2xl shadow-slate-900/30 ring-1 ring-white/10 relative overflow-hidden group">
              {/* Browser/OS Mock controls */}
              <div className="flex gap-1.5 mb-3.5 px-2">
                <span className="w-3 h-3 rounded-full bg-rose-500" />
                <span className="w-3 h-3 rounded-full bg-amber-500" />
                <span className="w-3 h-3 rounded-full bg-emerald-500" />
              </div>

              {/* Inner Dashboard Layout */}
              <div className="bg-slate-50 rounded-2xl overflow-hidden flex min-h-[460px] text-slate-800">
                
                {/* Dashboard Left Sidebar */}
                <aside className="w-1/4 bg-white border-r border-slate-100 p-2 sm:p-4 hidden sm:flex flex-col justify-between">
                  <div>
                    {/* Brand icon representation */}
                    <div className="flex items-center gap-1.5 px-2 mb-6">
                      <div className="h-5 w-5 rounded bg-blue-600 text-white flex items-center justify-center font-bold text-[10px]">C</div>
                      <span className="font-display font-black text-xs text-slate-900 tracking-tight">CrewUp</span>
                    </div>

                    <nav className="flex flex-col gap-1">
                      <div className="bg-blue-50 text-blue-600 rounded-lg p-2 text-xs font-semibold flex items-center gap-2 cursor-pointer">
                        <Folder className="h-3.5 w-3.5" />
                        <span>Dashboard</span>
                      </div>
                      <div className="text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-lg p-2 text-xs font-medium flex items-center gap-2 cursor-pointer">
                        <ClipboardList className="h-3.5 w-3.5" />
                        <span>Projects</span>
                      </div>
                      <div className="text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-lg p-2 text-xs font-medium flex items-center gap-2 cursor-pointer">
                        <MessageSquare className="h-3.5 w-3.5" />
                        <span>Messages</span>
                      </div>
                      <div className="text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-lg p-2 text-xs font-medium flex items-center gap-2 cursor-pointer">
                        <UserPlus className="h-3.5 w-3.5" />
                        <span>Contractors</span>
                      </div>
                      <div className="text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-lg p-2 text-xs font-medium flex items-center gap-2 cursor-pointer">
                        <Heart className="h-3.5 w-3.5" />
                        <span>Saved</span>
                      </div>
                    </nav>
                  </div>

                  <div className="flex flex-col gap-1 border-t border-slate-100 pt-3">
                    <div className="text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-lg p-2 text-xs font-medium flex items-center gap-2 cursor-pointer">
                      <User className="h-3.5 w-3.5" />
                      <span>Profile</span>
                    </div>
                    <div className="text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-lg p-2 text-xs font-medium flex items-center gap-2 cursor-pointer">
                      <Settings className="h-3.5 w-3.5" />
                      <span>Settings</span>
                    </div>
                  </div>
                </aside>

                {/* Dashboard Main Content Panel */}
                <main className="flex-1 bg-slate-50/50 p-4 sm:p-5 flex flex-col gap-4 overflow-y-auto max-h-[460px]">
                  {/* Top Bar */}
                  <div className="flex justify-between items-center bg-transparent">
                    <div>
                      <h4 className="font-display font-bold text-sm text-slate-900">Welcome back, <span className="text-blue-600">John!</span></h4>
                      <p className="text-[10px] text-slate-400">June 12, 2026 • General Contractor</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-7 w-7 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center cursor-pointer border border-slate-200">
                        <Bell className="h-3.5 w-3.5" />
                      </div>
                      <img 
                        src="https://images.unsplash.com/photo-1489980508314-941910ded1f4?auto=format&fit=crop&q=80&w=250" 
                        alt="Profile" 
                        className="h-7 w-7 rounded-full object-cover border border-blue-500" 
                      />
                    </div>
                  </div>

                  {/* 4 Cards state indicators */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {[
                      { val: "12", lbl: "Active Projs" },
                      { val: "28", lbl: "Messages" },
                      { val: "15", lbl: "Saved Contractors" },
                      { val: "4", lbl: "Project Invites" }
                    ].map((card, idx) => (
                      <div key={idx} className="bg-white rounded-xl p-2.5 border border-slate-100 flex flex-col justify-between shadow-xs">
                        <span className="font-display text-base font-black text-blue-600">{card.val}</span>
                        <span className="text-[9px] font-semibold text-slate-500 whitespace-nowrap mt-1">{card.lbl}</span>
                      </div>
                    ))}
                  </div>

                  {/* Recent Projects Table Mockup */}
                  <div className="bg-white border border-slate-100 rounded-xl p-3 shadow-xs">
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="font-display font-bold text-[11px] text-slate-900">Recent Projects</span>
                      <span className="text-[9px] font-bold text-blue-600 hover:underline cursor-pointer">View all</span>
                    </div>

                    <div className="divide-y divide-slate-100">
                      {mockProjects.slice(0, 3).map((proj) => (
                        <div 
                          key={proj.id} 
                          className={`py-2 flex justify-between items-center gap-2 cursor-pointer transition-colors ${hoveredProject === proj.id ? "bg-slate-50/80" : ""}`}
                          onMouseEnter={() => setHoveredProject(proj.id)}
                          onMouseLeave={() => setHoveredProject(null)}
                        >
                          <div className="flex-1 min-w-0">
                            <h5 className="font-semibold text-[10px] text-slate-800 truncate">{proj.title}</h5>
                            <p className="text-[8px] text-slate-400 flex items-center gap-1 mt-0.5">
                              <MapPin className="h-2 w-2" /> {proj.location}
                            </p>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="text-right">
                              <p className="text-[8px] font-bold text-slate-500">Bids: <span className="text-blue-600 font-semibold">{proj.bidsCount}</span></p>
                              <p className="text-[7px] text-slate-400 mt-0.5">Due: {proj.dueDate}</p>
                            </div>
                            <span className="text-[7px] font-bold bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded border border-blue-100">
                              Active
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </main>

              </div>
            </div>
          </div>

          {/* Right Column: Text & List steps */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center text-left">
            <span className="text-sm font-bold text-blue-600 uppercase tracking-widest font-display">
              How It Works
            </span>
            <h2 className="mt-2 font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              How CrewUp Works
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
              Whether you're hiring subcontractors or looking for your next project, CrewUp makes connecting simple.
            </p>

            {/* List steps */}
            <div className="mt-8 flex flex-col gap-6">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-4">
                  {/* Circle number */}
                  <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-display font-extrabold text-[15px] shadow-md shadow-blue-500/10">
                    {step.number}
                  </div>
                  {/* Step Description */}
                  <div>
                    <h4 className="font-display font-semibold text-base text-slate-900">
                      {step.title}
                    </h4>
                    <p className="mt-1 text-[14px] text-slate-500 leading-relaxed font-sans">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Dynamic Metric Counter Rows Bar */}
        <div className="mt-24 border border-blue-100 bg-white rounded-2xl p-6 sm:p-8 shadow-lg shadow-blue-500/5 hover:shadow-blue-500/10 transition-all duration-300">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 divide-y-2 lg:divide-y-0 lg:divide-x divide-slate-100">
            {statsList.map((st, i) => (
              <div key={i} className="flex items-center gap-4.5 px-4 first:pl-0 last:pr-0 pt-4 first:pt-0 lg:pt-0">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
                  {st.icon}
                </div>
                <div className="text-left flex-1 min-w-0">
                  <span className="block font-display text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-none">
                    {st.value}
                  </span>
                  <span className="block text-xs font-semibold text-slate-700 mt-1">
                    {st.label}
                  </span>
                  <span className="block text-[11px] text-slate-400 mt-0.5">
                    {st.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
