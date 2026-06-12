import React, { useState } from "react";
import { 
  Folder, MessageSquare, Heart, User, Settings, Bell, LogOut, 
  MapPin, Plus, DollarSign, Calendar, Search, Check, Send, 
  ChevronRight, ArrowLeft, Star, FileText, Sparkles, Building, AlertCircle
} from "lucide-react";
import { mockProjects, mockContractors, mockChatThreads } from "../data";
import { Project, Contractor, ChatThread, Message } from "../types";

interface DashboardViewProps {
  onLogout: () => void;
}

export default function DashboardView({ onLogout }: DashboardViewProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "projects" | "contractors" | "messages">("overview");
  
  // Projects related states
  const [projectsList, setProjectsList] = useState<Project[]>(mockProjects);
  const [searchProjectQuery, setSearchProjectQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(mockProjects[0]);
  const [newProjectModal, setNewProjectModal] = useState(false);
  
  // New Project Form state
  const [newProjTitle, setNewProjTitle] = useState("");
  const [newProjTrade, setNewProjTrade] = useState("Electrical");
  const [newProjLoc, setNewProjLoc] = useState("");
  const [newProjBudget, setNewProjBudget] = useState("");
  const [newProjDesc, setNewProjDesc] = useState("");
  
  // Custom Contractors related states
  const [searchContractorQuery, setSearchContractorQuery] = useState("");
  const [selectedContractorTrade, setSelectedContractorTrade] = useState<string | null>(null);
  
  // Live Messages related states
  const [chatThreads, setChatThreads] = useState<ChatThread[]>(mockChatThreads);
  const [activeThreadId, setActiveThreadId] = useState<string>("th-1");
  const [typedMessage, setTypedMessage] = useState("");

  // AI Assistant states (Simulated AI Bid Generator for construction)
  const [aiPrompterOpen, setAiPrompterOpen] = useState(false);
  const [aiScope, setAiScope] = useState("");
  const [aiSquareFootage, setAiSquareFootage] = useState("");
  const [aiSelectedTrade, setAiSelectedTrade] = useState("Electrical");
  const [aiResult, setAiResult] = useState<string | null>(null);
  const [aiLoading, setAiLoading] = useState(false);

  const activeThread = chatThreads.find(t => t.id === activeThreadId) || chatThreads[0];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!typedMessage.trim()) return;

    const newMsg: Message = {
      id: `msg-custom-${Date.now()}`,
      senderId: "me",
      senderName: "John",
      senderAvatar: "https://images.unsplash.com/photo-1489980508314-941910ded1f4?auto=format&fit=crop&q=80&w=250",
      text: typedMessage,
      timestamp: "Just now",
      isMe: true
    };

    setChatThreads(prev => 
      prev.map(thread => {
        if (thread.id === activeThread.id) {
          return {
            ...thread,
            lastMessage: typedMessage,
            timestamp: "Just now",
            messages: [...thread.messages, newMsg]
          };
        }
        return thread;
      })
    );

    const backupMsg = typedMessage;
    setTypedMessage("");

    // Simulate Subcontractor automatic response sequence
    setTimeout(() => {
      let replyText = "Received! Let me look at the schedule and drawings and let you know what works.";
      if (backupMsg.toLowerCase().includes("cost") || backupMsg.toLowerCase().includes("rate")) {
        replyText = "My commercial rates are standard around $75/hr + materials, or I can do a fixed-sum bid once I see the full blueprint specs.";
      } else if (backupMsg.toLowerCase().includes("permit") || backupMsg.toLowerCase().includes("license")) {
        replyText = "Yes, my municipal license is active and I'm fully bonded up to $1.5M. I can pull standard city permits easily.";
      } else if (backupMsg.toLowerCase().includes("tomorrow") || backupMsg.toLowerCase().includes("meeting")) {
        replyText = "I can jump on an on-site walkthrough tomorrow morning at 8:30 AM if you are free!";
      }

      const subcontractorMsg: Message = {
        id: `msg-sub-${Date.now()}`,
        senderId: activeThread.id,
        senderName: activeThread.contractorName,
        senderAvatar: activeThread.contractorAvatar,
        text: replyText,
        timestamp: "Just now",
        isMe: false
      };

      setChatThreads(prev => 
        prev.map(thread => {
          if (thread.id === activeThread.id) {
            return {
              ...thread,
              lastMessage: replyText,
              timestamp: "Just now",
              unread: true,
              messages: [...thread.messages, subcontractorMsg]
            };
          }
          return thread;
        })
      );
    }, 1200);
  };

  const handleCreateProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProjTitle || !newProjLoc) return;

    const newProj: Project = {
      id: `proj-custom-${Date.now()}`,
      title: newProjTitle,
      trade: newProjTrade,
      trades: [newProjTrade],
      location: newProjLoc,
      bidsCount: 0,
      dueDate: "30 days",
      status: "Active",
      budget: newProjBudget || "Competitive bid",
      description: newProjDesc || "No further description provided. Contact general contractor details."
    };

    setProjectsList(prev => [newProj, ...prev]);
    setSelectedProject(newProj);
    
    // Clear forms
    setNewProjTitle("");
    setNewProjLoc("");
    setNewProjBudget("");
    setNewProjDesc("");
    setNewProjectModal(false);
  };

  // Simulated Gemini AI Project Scope estimator
  const handleGenerateAIScope = () => {
    if (!aiScope) return;
    setAiLoading(true);
    setAiResult(null);

    setTimeout(() => {
      const generatedSpec = `
## DRAFT ESTIMATE PROPOSAL SHEETS

**Project Classification**: ${aiSelectedTrade} Subcontracting
**Scale Area Size**: ${aiSquareFootage ? aiSquareFootage + " sq ft" : "Medium Commercial"}
**Trade Details**: ${aiScope}

### 1. ESTIMATED LABOR RATES & HOURS
- **Master Journeyman**: 24 Hours estimated @ $85.00/Hour = $2,040
- **Apprentice Helpers**: 36 Hours estimated @ $45.00/Hour = $1,620
- **Project supervisor**: 8 Hours estimated @ $105.00/Hour = $840
- **Total labor estimate baseline**: $4,500.00

### 2. MATERIAL REQUIREMENTS MATRIX (RECOMMENDED)
1. Heavy duty industrial conduits and wiring harnesses (NEMA Standard)
2. Copper piping fittings and drainage traps (Plumbing classification grade A)
3. Reinforced brackets and sheet mount assemblies
4. High-efficiency thermal insulative tape

### 3. REQUIRED LICENSES & LOCAL CODE PERMITS
- Subcontractor must submit an active State Contractor License matching ${aiSelectedTrade} work.
- Standard general commercial safety protocols (OSHA 10 compliance mandatory).
- Electrical/Mechanical safety inspection code certification on completion.

### 4. SUGGESTED TERMS OF ENGAGEMENT
- **Retainer Margin**: 25% payable upfront upon signing contract agreement.
- **Milestone Tranche 2**: 50% payable upon passing structural framing inspections.
- **Remainder Retention**: 25% payable upon final cleanup and signoff checklist.
      `;
      setAiResult(generatedSpec.trim());
      setAiLoading(false);
    }, 1500);
  };

  // Filter lists
  const filteredProjects = projectsList.filter(p => 
    p.title.toLowerCase().includes(searchProjectQuery.toLowerCase()) ||
    p.location.toLowerCase().includes(searchProjectQuery.toLowerCase())
  );

  const filteredContractors = mockContractors.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(searchContractorQuery.toLowerCase()) || 
                          c.companyName.toLowerCase().includes(searchContractorQuery.toLowerCase());
    const matchesTrade = !selectedContractorTrade || c.trade === selectedContractorTrade;
    return matchesSearch && matchesTrade;
  });

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800">
      
      {/* Dashboard Top Header */}
      <header className="h-16 bg-slate-900 text-white px-4 sm:px-6 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded bg-blue-600 text-white flex items-center justify-center font-bold text-sm">C</div>
          <div className="flex items-baseline">
            <span className="font-display text-lg font-black tracking-tight text-white">CREW</span>
            <span className="font-display text-lg font-black tracking-tight text-blue-500">UP</span>
          </div>
          <span className="bg-slate-800 text-slate-400 text-[10px] uppercase font-black tracking-widest px-2 py-0.5 rounded ml-3">
            INTERACTIVE CONSOLE
          </span>
        </div>

        {/* User Badge Profile */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:block text-right">
            <p className="text-xs font-bold text-white">John Jenkins</p>
            <p className="text-[10px] text-slate-400">GC Enterprises Ltd.</p>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1489980508314-941910ded1f4?auto=format&fit=crop&q=80&w=250" 
            alt="John Avatar" 
            className="h-9 w-9 rounded-full object-cover border-2 border-blue-500" 
          />
          <button
            onClick={onLogout}
            title="Log Out"
            className="text-slate-400 hover:text-white p-1 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
          >
            <LogOut className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Main Container Layer with extra bottom padding on mobile to accommodate bottom tabs */}
      <div className="flex-1 flex flex-col md:flex-row pb-20 md:pb-0">
        
        {/* Navigation Sidebar - hidden on mobile, visible on desktop */}
        <aside className="hidden md:flex w-full md:w-64 bg-white border-r border-slate-200 p-4 shrink-0 flex-col justify-between">
          <div className="flex flex-col gap-1.5">
            <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider mb-2 block">Main Portal Tabs</span>
            
            <button
              onClick={() => setActiveTab("overview")}
              className={`w-full text-left p-3 rounded-xl text-xs font-bold flex items-center gap-3 transition-all ${
                activeTab === "overview" 
                  ? "bg-blue-650 bg-blue-600 text-white shadow-md shadow-blue-550/10" 
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <Building className="h-4 w-4" />
              <span>Overview & Stats</span>
            </button>

            <button
              onClick={() => setActiveTab("projects")}
              className={`w-full text-left p-3 rounded-xl text-xs font-bold flex items-center gap-3 transition-all ${
                activeTab === "projects" 
                  ? "bg-blue-600 text-white shadow-md shadow-blue-550/10" 
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <Folder className="h-4 w-4" />
              <span>Job Projects Board</span>
            </button>

            <button
              onClick={() => setActiveTab("contractors")}
              className={`w-full text-left p-3 rounded-xl text-xs font-bold flex items-center gap-3 transition-all ${
                activeTab === "contractors" 
                  ? "bg-blue-600 text-white shadow-md shadow-blue-550/10" 
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <User className="h-4 w-4" />
              <span>Trades Subcontractors</span>
            </button>

            <button
              onClick={() => setActiveTab("messages")}
              className={`w-full text-left p-3 rounded-xl text-xs font-bold flex items-center gap-3 justify-between transition-all ${
                activeTab === "messages" 
                  ? "bg-blue-600 text-white shadow-md shadow-blue-550/10" 
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <div className="flex items-center gap-3">
                <MessageSquare className="h-4 w-4" />
                <span>Conversations Chat</span>
              </div>
              <span className={`h-2.5 w-2.5 rounded-full bg-rose-500 ring-4 ring-white ${activeTab === "messages" ? "ring-blue-600 bg-white" : ""}`} />
            </button>
          </div>

          <div className="border-t border-slate-200 mt-6 pt-4 flex flex-col gap-3">
            {/* AI Assistant Quick Tool */}
            <button
              onClick={() => {
                setActiveTab("overview");
                setAiPrompterOpen(true);
              }}
              className="bg-amber-50 text-amber-800 border border-amber-200 hover:bg-amber-100 rounded-xl p-3 text-xs font-bold flex items-center justify-between transition-colors"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
                <span>AI Estimator tool</span>
              </div>
              <ChevronRight className="h-3 w-3" />
            </button>

            <div className="text-[10px] text-slate-400 text-center font-medium leading-relaxed">
              CrewUp Premium Account<br />
              ID: GC-99410-JENKINS
            </div>
          </div>
        </aside>

        {/* Dynamic Content Frame */}
        <main className="flex-1 p-4 sm:p-6 overflow-y-auto max-h-[calc(100vh-4rem)]">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === "overview" && (
            <div className="flex flex-col gap-6 text-left">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h2 className="font-display font-black text-2xl text-slate-900">Dashboard Command Center</h2>
                  <p className="text-xs text-slate-500">Track bids, talk with active subcontractors, and estimate labor rates.</p>
                </div>
                
                <div className="flex gap-2">
                  <button
                    onClick={() => setAiPrompterOpen(true)}
                    className="bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 font-bold text-xs px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition-colors"
                  >
                    <Sparkles className="h-3.5 w-3.5 text-amber-600 fill-amber-600" />
                    AI Bid Draft Tool
                  </button>
                  <button
                    onClick={() => setNewProjectModal(true)}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl flex items-center gap-1.5 shadow-md shadow-blue-500/10 transition-all"
                  >
                    <Plus className="h-4 w-4" />
                    Post New Project
                  </button>
                </div>
              </div>

              {/* Statistics Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: "Active Project Contracts", value: projectsList.length, desc: "Across US regional areas", color: "text-blue-600" },
                  { label: "Unread Contractor Messages", value: chatThreads.filter(t=>t.unread).length + 1, desc: "Real-time chat replies", color: "text-rose-500" },
                  { label: "Saved Subcontractors", value: "15 Favorites", desc: "Shortlisted trades specialists", color: "text-slate-800" },
                  { label: "Interactive Bids Received", value: "32 Invoices", desc: "Average 5 bids per job", color: "text-emerald-600" }
                ].map((stat, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-5 border border-slate-200 flex flex-col justify-between shadow-xs">
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">{stat.label}</span>
                      <span className={`font-display text-2xl sm:text-3xl font-black block mt-2 ${stat.color}`}>{stat.value}</span>
                    </div>
                    <span className="text-[10px] text-slate-450 text-slate-400 mt-2 font-medium">{stat.desc}</span>
                  </div>
                ))}
              </div>

              {/* Two Column Section: Recent Projects & AI Sandbox */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Left Column: Recent Projects board */}
                <div className="bg-white rounded-3xl p-6 border border-slate-200 lg:col-span-8 shadow-xs">
                  <div className="flex justify-between items-center mb-4 pb-3 border-b border-slate-150">
                    <h3 className="font-display font-extrabold text-lg text-slate-900">Current active scope contracts</h3>
                    <button onClick={() => setActiveTab("projects")} className="text-xs font-bold text-blue-600 hover:underline">
                      See all projects
                    </button>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left min-w-[500px]">
                      <thead>
                        <tr className="border-b border-slate-100 text-[10px] font-black text-slate-400 uppercase tracking-wider">
                          <th className="py-3 px-2">Project Title</th>
                          <th className="py-3 px-2">Location</th>
                          <th className="py-3 px-2">Primary Trade</th>
                          <th className="py-3 px-2">Bid Count</th>
                          <th className="py-3 px-2">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {projectsList.slice(0, 4).map((p) => (
                          <tr key={p.id} className="hover:bg-slate-50/50 transition-colors">
                            <td className="py-3 px-2 font-display font-bold text-slate-900">{p.title}</td>
                            <td className="py-3 px-2 font-semibold text-slate-600 flex items-center gap-1 mt-1">
                              <MapPin className="h-3 w-3 text-slate-400" /> {p.location}
                            </td>
                            <td className="py-3 px-2">
                              <span className="bg-slate-100 text-slate-700 font-bold px-2.5 py-0.5 rounded text-[10px]">
                                {p.trade}
                              </span>
                            </td>
                            <td className="py-3 px-2 font-bold text-slate-800">{p.bidsCount} Offers</td>
                            <td className="py-3 px-2">
                              <button
                                onClick={() => {
                                  setSelectedProject(p);
                                  setActiveTab("projects");
                                }}
                                className="text-blue-600 hover:text-blue-700 font-bold"
                              >
                                View Details &rarr;
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Right Column: AI estimator module */}
                <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-3xl p-6 border border-amber-200/60 lg:col-span-4 text-left flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="h-8 w-8 rounded-lg bg-amber-500/10 text-amber-700 flex items-center justify-center">
                        <Sparkles className="h-4.5 w-4.5 fill-amber-500" />
                      </div>
                      <h4 className="font-display font-extrabold text-[15px] text-slate-900">AI Contractor Proposal Tool</h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-sans mb-4">
                      Struggling to write bid guidelines or estimate labor hours? Input your scope specifications; our smart algorithm will draft code compliant checklists.
                    </p>

                    <button
                      onClick={() => setAiPrompterOpen(true)}
                      className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs py-3 rounded-xl transition-all shadow-md shadow-amber-600/10 flex items-center justify-center gap-1.5"
                    >
                      Open Assistant Generator
                    </button>
                  </div>

                  <div className="mt-6 border-t border-amber-200/60 pt-4 flex items-center gap-3">
                    <img 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150" 
                      alt="avatar" 
                      className="h-8 w-8 rounded-full object-cover" 
                    />
                    <div className="text-[10px] leading-snug">
                      <p className="text-slate-800 font-bold">Recommended Pro Draft</p>
                      <p className="text-slate-500">Hourly standard checklists matching state rules.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* TAB 2: PROJECTS LIST */}
          {activeTab === "projects" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
              
              {/* Left Projects list column */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                <div className="flex justify-between items-center bg-white border border-slate-200 rounded-xl px-3 py-2">
                  <Search className="h-4 w-4 text-slate-400 shrink-0" />
                  <input
                    type="text"
                    value={searchProjectQuery}
                    onChange={(e) => setSearchProjectQuery(e.target.value)}
                    placeholder="Search active jobs or cities..."
                    className="w-full text-xs bg-transparent border-0 focus:outline-hidden focus:ring-0 ml-2 text-slate-800"
                  />
                </div>

                <div className="flex flex-col gap-2.5 max-h-[500px] overflow-y-auto pr-1">
                  {filteredProjects.map((proj) => (
                    <div
                      key={proj.id}
                      onClick={() => setSelectedProject(proj)}
                      className={`p-4 border rounded-2xl cursor-pointer transition-all ${
                        selectedProject?.id === proj.id
                          ? "border-blue-600 bg-white shadow-md ring-1 ring-blue-500"
                          : "border-slate-200 bg-white hover:border-slate-350 hover:bg-slate-50/50"
                      }`}
                    >
                      <div className="flex justify-between items-start gap-2">
                        <h4 className="font-display font-extrabold text-sm text-slate-900 truncate">{proj.title}</h4>
                        <span className="text-[8px] bg-blue-50 text-blue-600 font-black px-1.5 py-0.5 rounded border border-blue-100 flex-shrink-0">
                          {proj.status}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 font-semibold flex items-center gap-1.5 mt-1.5">
                        <MapPin className="h-3.5 w-3.5 shrink-0" /> {proj.location}
                      </p>
                      <div className="flex justify-between items-center mt-3 pt-3 border-t border-slate-100">
                        <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-[9px] font-bold">
                          {proj.trade}
                        </span>
                        <span className="text-[10px] font-bold text-slate-500">
                          Offers: <strong className="text-blue-600">{proj.bidsCount}</strong>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right project details panels */}
              <div className="lg:col-span-7">
                {selectedProject ? (
                  <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[480px]">
                    <div>
                      {/* Name & trade */}
                      <span className="bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full border border-blue-100">
                        {selectedProject.trade} Contract Work
                      </span>
                      <h3 className="font-display font-black text-2xl text-slate-900 mt-4 leading-tight">
                        {selectedProject.title}
                      </h3>
                      
                      {/* Budget and Due Dates */}
                      <div className="grid grid-cols-2 gap-4 my-6 bg-slate-50 rounded-2xl p-4 border border-slate-150">
                        <div>
                          <span className="text-[10px] text-slate-400 uppercase font-black tracking-wider block">Estimated Range</span>
                          <span className="font-display text-base font-extrabold text-slate-900 mt-0.5 flex items-center gap-1">
                            <DollarSign className="h-4 w-4 text-blue-600 shrink-0" /> {selectedProject.budget || "Competitive bid"}
                          </span>
                        </div>
                        <div>
                          <span className="text-[10px] text-slate-400 uppercase font-black tracking-wider block">Target Due Date</span>
                          <span className="font-display text-base font-extrabold text-slate-900 mt-0.5 flex items-center gap-1">
                            <Calendar className="h-4 w-4 text-blue-600 shrink-0" /> {selectedProject.dueDate}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="mb-6">
                        <h4 className="font-display font-bold text-xs text-slate-500 uppercase tracking-widest mb-2">Scope of Project Description</h4>
                        <p className="text-xs text-slate-600 leading-relaxed font-sans font-medium whitespace-wrap">
                          {selectedProject.description}
                        </p>
                      </div>

                      <div className="h-px bg-slate-100 my-6" />

                      {/* Associated subcontracts */}
                      <div>
                        <h4 className="font-display font-bold text-xs text-slate-500 uppercase tracking-widest mb-3">Target Subcontract Trades Needed</h4>
                        <div className="flex gap-2">
                          {(selectedProject.trades || [selectedProject.trade]).map((tr, idx) => (
                            <span key={idx} className="bg-slate-100 text-slate-705 text-slate-700 font-bold text-xs px-3 py-1 rounded-lg">
                              {tr}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action trigger bidding */}
                    <div className="mt-8 flex gap-3 border-t border-slate-100 pt-6">
                      <button
                        onClick={() => {
                          setSelectedContractorTrade(selectedProject.trade);
                          setActiveTab("contractors");
                        }}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl text-xs shadow-lg shadow-blue-500/10 transition-colors cursor-pointer text-center"
                      >
                        Find Qualified {selectedProject.trade} Pros
                      </button>
                      <button
                        onClick={() => {
                          setActiveTab("messages");
                        }}
                        className="bg-slate-100 hover:bg-slate-200 text-slate-705 text-slate-700 font-bold px-5 py-3.5 rounded-xl text-xs transition-colors cursor-pointer"
                      >
                        Contact support team
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white border border-slate-200 border-dashed rounded-3xl p-8 flex flex-col items-center justify-center text-center h-full">
                    <AlertCircle className="h-10 w-10 text-slate-350" />
                    <h4 className="font-display font-bold text-base text-slate-600 mt-2">No Project Selected</h4>
                    <p className="text-xs text-slate-400 mt-1">Choose a project from the left tab list to check details.</p>
                  </div>
                )}
              </div>

            </div>
          )}

          {/* TAB 3: TRADES CONTRACTORS */}
          {activeTab === "contractors" && (
            <div className="flex flex-col gap-6 text-left">
              
              {/* Category selector panel */}
              <div className="flex flex-wrap gap-2 pb-2 border-b border-slate-200/60">
                <button
                  onClick={() => setSelectedContractorTrade(null)}
                  className={`px-3 py-2 rounded-xl text-xs font-bold border transition-colors ${
                    !selectedContractorTrade
                      ? "border-blue-600 bg-blue-600 text-white"
                      : "border-slate-200 bg-white hover:bg-slate-50 text-slate-600"
                  }`}
                >
                  All Trades
                </button>
                {Array.from(new Set(mockContractors.map(c=>c.trade))).map((tr) => (
                  <button
                    key={tr}
                    onClick={() => setSelectedContractorTrade(tr)}
                    className={`px-3 py-2 rounded-xl text-xs font-bold border transition-colors ${
                      selectedContractorTrade === tr
                        ? "border-blue-600 bg-blue-600 text-white font-black"
                        : "border-slate-200 bg-white hover:bg-slate-50 text-slate-600"
                    }`}
                  >
                    {tr}
                  </button>
                ))}
              </div>

              {/* Subcontractors search row */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1 bg-white border border-slate-200 rounded-xl px-3 py-2.5 flex items-center">
                  <Search className="h-4 w-4 text-slate-400 shrink-0" />
                  <input
                    type="text"
                    value={searchContractorQuery}
                    onChange={(e) => setSearchContractorQuery(e.target.value)}
                    placeholder="Search tradesmen names, company references..."
                    className="w-full text-xs bg-transparent border-0 focus:outline-hidden focus:ring-0 ml-2"
                  />
                </div>
              </div>

              {/* Contractors mapping card display */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredContractors.map((c) => (
                  <div key={c.id} className="bg-white rounded-2xl p-5 border border-slate-200 hover:shadow-md transition-all flex flex-col justify-between">
                    <div>
                      <div className="flex gap-3 justify-between items-start">
                        <img src={c.avatarUrl} alt={c.name} className="h-11 w-11 rounded-full object-cover" />
                        <div className="flex-grow min-w-0">
                          <h4 className="font-display font-bold text-sm text-slate-950 truncate">{c.name}</h4>
                          <span className="text-[10px] text-slate-400 block font-semibold truncate leading-none mt-0.5">{c.companyName}</span>
                          <span className="bg-slate-100 text-slate-750 text-slate-700 text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded inline-block mt-2">
                            {c.trade}
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 border-y border-slate-100 my-4 py-2 text-center text-[10px] text-slate-500">
                        <div>
                          <span className="block font-medium">Ratings</span>
                          <span className="font-bold text-slate-800 flex items-center justify-center gap-0.5 mt-0.5">
                            <Star className="h-3 w-3 fill-amber-500 text-amber-500" /> {c.rating}
                          </span>
                        </div>
                        <div>
                          <span className="block font-medium">Experience</span>
                          <span className="font-bold text-slate-800 mt-0.5 block">{c.experience}</span>
                        </div>
                        <div>
                          <span className="block font-medium">City Area</span>
                          <span className="font-bold text-slate-800 mt-0.5 block truncate">{c.location}</span>
                        </div>
                      </div>

                      <div>
                        <span className="text-[9px] font-black uppercase text-slate-400 tracking-wider">Select Past work</span>
                        <ul className="flex flex-col gap-1 mt-1">
                          {c.portfolio.map((p, idx) => (
                            <li key={idx} className="text-xs text-slate-600 font-medium flex items-center gap-1.5 truncate">
                              <Check className="h-3.5 w-3.5 text-blue-600 shrink-0" /> {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-5 pt-4 border-t border-slate-100">
                      <button
                        onClick={() => {
                          // Look for existing thread or trigger new messages tab with this user
                          const matchTh = chatThreads.find(t=>t.contractorName.includes(c.name));
                          if (matchTh) {
                            setActiveThreadId(matchTh.id);
                          } else {
                            // Mock prepend new thread
                            const newTh: ChatThread = {
                              id: `th-new-${Date.now()}`,
                              contractorName: c.name,
                              contractorAvatar: c.avatarUrl,
                              trade: c.trade,
                              lastMessage: "Conversation initiated.",
                              timestamp: "Just now",
                              unread: false,
                              messages: []
                            };
                            setChatThreads(prev=>[newTh, ...prev]);
                            setActiveThreadId(newTh.id);
                          }
                          setActiveTab("messages");
                        }}
                        className="w-full bg-blue-600 hover:bg-blue-705 text-white font-bold py-2 rounded-xl text-xs text-center block"
                      >
                        Send Message &amp; Chat
                      </button>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          )}

          {/* TAB 4: REAL-TIME CONVERSATIONS CHAT */}
          {activeTab === "messages" && (
            <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden flex h-[500px] text-left">
              
              {/* Left sidebar: thread items */}
              <aside className="w-1/3 border-r border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="p-4 border-b border-slate-100">
                    <h3 className="font-display font-extrabold text-base text-slate-900">Live Trade Channels</h3>
                  </div>
                  <div className="flex flex-col overflow-y-auto max-h-[440px]">
                    {chatThreads.map((th) => (
                      <div
                        key={th.id}
                        onClick={() => {
                          setActiveThreadId(th.id);
                          // Clear unread mark
                          setChatThreads(prev => prev.map(t => t.id === th.id ? { ...t, unread: false } : t));
                        }}
                        className={`p-3.5 border-b border-slate-100/60 flex gap-2.5 items-center cursor-pointer transition-colors ${
                          activeThreadId === th.id ? "bg-blue-50/40" : "hover:bg-slate-50/50"
                        }`}
                      >
                        <div className="relative">
                          <img src={th.contractorAvatar} alt={th.contractorName} className="h-9 w-9 rounded-full object-cover" />
                          {th.unread && (
                            <span className="absolute top-0 right-0 h-2.5 w-2.5 bg-rose-500 rounded-full border-2 border-white" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-baseline">
                            <h4 className="font-display font-bold text-xs text-slate-900 truncate">{th.contractorName}</h4>
                            <span className="text-[8px] text-slate-400 shrink-0">{th.timestamp}</span>
                          </div>
                          <p className="text-[9px] text-slate-400 font-semibold truncate mt-0.5">{th.trade}</p>
                          <p className="text-[10px] text-slate-500 truncate mt-1 leading-normal font-medium">
                            {th.lastMessage}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </aside>

              {/* Right Panel: Active messages box */}
              <section className="flex-1 flex flex-col justify-between bg-slate-50/30">
                {/* Header info */}
                <div className="bg-white border-b border-slate-150 py-3.5 px-5 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <img src={activeThread.contractorAvatar} alt={activeThread.contractorName} className="h-9 w-9 rounded-full object-cover" />
                    <div className="text-left">
                      <h4 className="font-display font-bold text-sm text-slate-950">{activeThread.contractorName}</h4>
                      <p className="text-[10px] text-slate-400 font-semibold">{activeThread.trade} • Local partner</p>
                    </div>
                  </div>
                </div>

                {/* Messages stream area */}
                <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3 max-h-[380px]">
                  {activeThread.messages.length > 0 ? (
                    activeThread.messages.map((m) => (
                      <div key={m.id} className={`flex gap-2 w-full max-w-sm ${m.isMe ? "ml-auto flex-row-reverse" : "mr-auto"}`}>
                        <img src={m.senderAvatar} alt="avatar" className="h-7 w-7 rounded-full object-cover flex-shrink-0" />
                        <div className="flex flex-col gap-1">
                          <div className={`p-3 rounded-2xl text-[12px] leading-relaxed font-semibold ${
                            m.isMe 
                              ? "bg-blue-600 text-white rounded-tr-none" 
                              : "bg-white border border-slate-200 text-slate-800 rounded-tl-none shadow-xs"
                          }`}>
                            {m.text}
                          </div>
                          <span className={`text-[8px] text-slate-400 ${m.isMe ? "text-right" : "text-left"}`}>{m.timestamp}</span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="my-auto text-center py-10 flex flex-col items-center justify-center">
                      <MessageSquare className="h-9 w-9 text-slate-300" />
                      <p className="text-xs text-slate-400 font-bold mt-2">New Thread Conversation</p>
                      <p className="text-[10px] text-slate-400 mt-1">Send a message to Marcus underneath to request contract rates.</p>
                    </div>
                  )}
                </div>

                {/* Sender typing box */}
                <form onSubmit={handleSendMessage} className="bg-white border-t border-slate-200 p-3 flex gap-2.5 items-center">
                  <input
                    type="text"
                    value={typedMessage}
                    onChange={(e) => setTypedMessage(e.target.value)}
                    placeholder={`Type message reply to ${activeThread.contractorName}...`}
                    className="flex-1 bg-slate-50 focus:bg-white border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl px-4 py-3 text-xs text-slate-850 placeholder-slate-400 focus:outline-hidden transition-all"
                  />
                  <button
                    type="submit"
                    className="p-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl active:scale-[0.98] transition-all cursor-pointer"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              </section>

            </div>
          )}

        </main>
      </div>

      {/* MODAL: Draft Project Post Form */}
      {newProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative border border-slate-100 text-left animate-in zoom-in-95 duration-150">
            <h3 className="font-display font-extrabold text-2xl text-slate-900">Post Bid Project Contract</h3>
            <p className="text-xs text-slate-500 mt-1">Publish an invitation open to verified local construction trades.</p>

            <form onSubmit={handleCreateProject} className="mt-6 flex flex-col gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wilder mb-1.5">Project Title</label>
                <input
                  type="text"
                  required
                  value={newProjTitle}
                  onChange={(e) => setNewProjTitle(e.target.value)}
                  placeholder="e.g., Commercial HVAC Duct Replacement"
                  className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500 rounded-xl px-4 py-3 text-xs text-slate-800 placeholder-slate-400 focus:outline-hidden transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wilder mb-1.5">Construction Trade</label>
                  <select
                    value={newProjTrade}
                    onChange={(e) => setNewProjTrade(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-800 focus:outline-hidden"
                  >
                    {["Electrical", "Plumbing", "HVAC", "Roofing", "Concrete", "Framing", "Drywall", "Painting", "Flooring", "Excavation", "Landscaping", "Masonry"].map(t=>(
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wilder mb-1.5">Location (City, State)</label>
                  <input
                    type="text"
                    required
                    value={newProjLoc}
                    onChange={(e) => setNewProjLoc(e.target.value)}
                    placeholder="e.g., Denver, CO"
                    className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500 rounded-xl px-4 py-3 text-xs text-slate-800 placeholder-slate-400 focus:outline-hidden transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wilder mb-1.5">Target Budget range</label>
                <input
                  type="text"
                  value={newProjBudget}
                  onChange={(e) => setNewProjBudget(e.target.value)}
                  placeholder="e.g., $25,000 - $35,000"
                  className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500 rounded-xl px-4 py-3 text-xs text-slate-800 placeholder-slate-400 focus:outline-hidden transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wilder mb-1.5">Project Scope Summary</label>
                <textarea
                  rows={3}
                  value={newProjDesc}
                  onChange={(e) => setNewProjDesc(e.target.value)}
                  placeholder="Enter detailed instructions of building materials, inspection codes or timeline schedules expected..."
                  className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500 rounded-xl px-4 py-3 text-xs text-slate-800 placeholder-slate-400 focus:outline-hidden transition-all"
                />
              </div>

              <div className="mt-4 flex items-center justify-end gap-3 border-t border-slate-100 pt-5">
                <button
                  type="button"
                  onClick={() => setNewProjectModal(false)}
                  className="text-slate-505 font-bold text-xs text-slate-500 hover:text-slate-800 px-4 py-2"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-6 py-3.5 rounded-xl shadow-lg"
                >
                  Publish Contract Invitation
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: AI Contractor Proposal Scope Estimator tool */}
      {aiPrompterOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl relative border border-slate-100 text-left animate-in zoom-in-95 duration-150 my-8">
            <div className="flex items-center gap-2 pb-4 border-b border-slate-100">
              <div className="h-10 w-10 bg-amber-50 rounded-xl text-amber-500 flex items-center justify-center">
                <Sparkles className="h-5 w-5 fill-amber-500" />
              </div>
              <div>
                <h3 className="font-display font-extrabold text-xl text-slate-900">AI Contractor Proposal Tool</h3>
                <p className="text-[11px] text-slate-500 mt-0.5">Automated labor hours, material scope guidelines & code checks.</p>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wilder mb-1.5">Trade Sector Classification</label>
                  <select
                    value={aiSelectedTrade}
                    onChange={(e) => setAiSelectedTrade(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-800"
                  >
                    {["Electrical", "Plumbing", "HVAC", "Roofing", "Concrete", "Framing"].map(t=>(
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wilder mb-1.5">Optional Square Footage (e.g., 2500)</label>
                  <input
                    type="number"
                    value={aiSquareFootage}
                    onChange={(e) => setAiSquareFootage(e.target.value)}
                    placeholder="e.g., 2500"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-800 focus:outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wilder mb-1.5">Specific Trade Scope Requirements</label>
                <textarea
                  rows={3}
                  value={aiScope}
                  onChange={(e) => setAiScope(e.target.value)}
                  placeholder="e.g. Copper piping installation for 12 bathroom stalls in commercial shopping center. Heavy duty valves..."
                  className="w-full bg-slate-50 border border-slate-200 focus:border-amber-500 focus:bg-white focus:ring-1 focus:ring-amber-500 rounded-xl px-4 py-3 text-xs text-slate-850 placeholder-slate-400 focus:outline-hidden transition-all"
                />
              </div>

              <button
                type="button"
                onClick={handleGenerateAIScope}
                disabled={aiLoading || !aiScope}
                className="w-full bg-amber-600 hover:bg-amber-700 disabled:opacity-40 text-white font-bold text-xs py-3.5 rounded-xl text-center active:scale-[0.98] transition-all shadow-lg shadow-amber-600/10"
              >
                {aiLoading ? "Consulting AI Models..." : "Generate Professional Estimate Scope"}
              </button>

              {aiResult && (
                <div className="mt-4 border border-amber-200 bg-amber-50/40 rounded-2xl p-5 max-h-[250px] overflow-y-auto">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[10px] bg-amber-100 text-amber-800 px-2 py-1 rounded font-black tracking-wider uppercase">AI Generated Proposal Outline</span>
                    <button
                      onClick={() => {
                        setNewProjTitle(`${aiSelectedTrade} Trade installation`);
                        setNewProjTrade(aiSelectedTrade);
                        setNewProjBudget("$12,000 - $18,000");
                        setNewProjDesc(aiResult);
                        setNewProjectModal(true);
                        setAiPrompterOpen(false);
                      }}
                      className="text-amber-850 hover:text-amber-900 font-bold text-xs flex items-center gap-1"
                    >
                      Use as Project Draft &rarr;
                    </button>
                  </div>
                  <pre className="text-[11px] text-slate-700 whitespace-pre-wrap font-mono leading-relaxed">
                    {aiResult}
                  </pre>
                </div>
              )}
            </div>

            <div className="mt-6 flex items-center justify-end gap-3 border-t border-slate-100 pt-5">
              <button
                type="button"
                onClick={() => setAiPrompterOpen(false)}
                className="text-slate-500 hover:text-slate-800 font-bold text-xs px-4 py-2"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Sticky Tab Bar (Only visible on small/medium screens) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 shadow-xl px-2 py-2.5 flex justify-around items-center">
        <button
          onClick={() => setActiveTab("overview")}
          className={`flex flex-col items-center gap-1 py-1 px-3 rounded-xl transition-all ${
            activeTab === "overview" ? "text-blue-600 font-bold" : "text-slate-500"
          }`}
        >
          <Building className="h-5 w-5" />
          <span className="text-[10px] tracking-tight">Overview</span>
        </button>

        <button
          onClick={() => setActiveTab("projects")}
          className={`flex flex-col items-center gap-1 py-1 px-3 rounded-xl transition-all ${
            activeTab === "projects" ? "text-blue-600 font-bold" : "text-slate-500"
          }`}
        >
          <Folder className="h-5 w-5" />
          <span className="text-[10px] tracking-tight">Projects</span>
        </button>

        <button
          onClick={() => setActiveTab("contractors")}
          className={`flex flex-col items-center gap-1 py-1 px-3 rounded-xl transition-all ${
            activeTab === "contractors" ? "text-blue-600 font-bold" : "text-slate-500"
          }`}
        >
          <User className="h-5 w-5" />
          <span className="text-[10px] tracking-tight">Contractors</span>
        </button>

        <button
          onClick={() => setActiveTab("messages")}
          className={`relative flex flex-col items-center gap-1 py-1 px-3 rounded-xl transition-all ${
            activeTab === "messages" ? "text-blue-600 font-bold" : "text-slate-500"
          }`}
        >
          <MessageSquare className="h-5 w-5" />
          <span className="text-[10px] tracking-tight">Chat</span>
          <span className="absolute top-1 right-3.5 h-2 w-2 rounded-full bg-rose-500 ring-2 ring-white animate-pulse" />
        </button>
      </div>

    </div>
  );
}
