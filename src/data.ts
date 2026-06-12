import { Project, Contractor, ChatThread } from "./types";

export const mockProjects: Project[] = [
  {
    id: "proj-1",
    title: "Downtown Office Build",
    trade: "Electrical",
    trades: ["Electrical", "Plumbing", "HVAC"],
    location: "Denver, CO",
    bidsCount: 5,
    dueDate: "May 24, 2024",
    status: "Active",
    budget: "$45,000 - $60,000",
    description: "Complete commercial electrical installation for a 3-story office building. Requires pre-install rough-ins, layout, and fixture wiring. All materials provided on-site. Valid license and insurance required."
  },
  {
    id: "proj-2",
    title: "Warehouse Renovation",
    trade: "Concrete",
    trades: ["Concrete", "Framing"],
    location: "Phoenix, AZ",
    bidsCount: 7,
    dueDate: "May 30, 2024",
    status: "Active",
    budget: "$85,000 - $110,000",
    description: "Slab pouring and structural reinforcement for an expanding fulfillment center. Floor area spans 10,000 sq ft. Subcontractor must bring own tools, concrete mixer, and finishing equipment."
  },
  {
    id: "proj-3",
    title: "Retail Buildout",
    trade: "Drywall",
    trades: ["Drywall", "Painting", "Flooring"],
    location: "Austin, TX",
    bidsCount: 4,
    dueDate: "Jun 03, 2024",
    status: "Active",
    budget: "$18,000 - $25,000",
    description: "Retail store wall partitioning, high-end drywall hanging, taping, sanding, and smooth coating. Finish with neutral-toned professional grade zero-VOC paint."
  },
  {
    id: "proj-4",
    title: "Modern Residential Roofing",
    trade: "Roofing",
    trades: ["Roofing"],
    location: "Seattle, WA",
    bidsCount: 3,
    dueDate: "Jun 15, 2024",
    status: "Active",
    budget: "$12,000 - $16,500",
    description: "Removal of old composition single roof and replacement with high-durability standing seam metal roofing panels. Property size: 2,400 sq ft."
  },
  {
    id: "proj-5",
    title: "Commercial Excavation & Grading",
    trade: "Excavation",
    trades: ["Excavation"],
    location: "Salt Lake City, UT",
    bidsCount: 9,
    dueDate: "Jun 20, 2024",
    status: "Active",
    budget: "$35,000 - $48,000",
    description: "Site preparation for multi-unit apartment complex. Includes excavation of foundation trench, backfilling, compaction, and fine grading according to engineer blueprint."
  },
  {
    id: "proj-6",
    title: "Subdivision Brick Masonry Wall",
    trade: "Masonry",
    trades: ["Masonry"],
    location: "Dallas, TX",
    bidsCount: 6,
    dueDate: "Jul 01, 2024",
    status: "Pending",
    budget: "$28,000 - $34,000",
    description: "Construction of an external brick perimeter wall for a new residential development. Length of wall is 500 yards with 6ft pillars every 15 yards. Red brick and standard mortar specifications."
  }
];

export const mockContractors: Contractor[] = [
  {
    id: "con-1",
    name: "Marcus Vance",
    companyName: "Vance Electrical Corp",
    trade: "Electrical",
    rating: 4.9,
    reviewCount: 34,
    experience: "12 years",
    location: "Denver, CO",
    verified: true,
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250",
    portfolio: ["Commercial Office Wiring", "Industrial PLC Programming", "Smart Home Automation System"]
  },
  {
    id: "con-2",
    name: "Sarah Jenkins",
    companyName: "FlowRight Plumbing",
    trade: "Plumbing",
    rating: 4.8,
    reviewCount: 42,
    experience: "8 years",
    location: "Seattle, WA",
    verified: true,
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=250",
    portfolio: ["Apartment Complex Pipe Routing", "Commercial Copper Piping", "Drainage Retrofitting"]
  },
  {
    id: "con-3",
    name: "David Stern",
    companyName: "Apex Climate Control",
    trade: "HVAC",
    rating: 4.7,
    reviewCount: 19,
    experience: "10 years",
    location: "Phoenix, AZ",
    verified: true,
    avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=250",
    portfolio: ["Rooftop Chiller Units", "Ductwork Installation for Retail", "HEPA Filtration Setup"]
  },
  {
    id: "con-4",
    name: "Tyler Vance",
    companyName: "Summit Roofing Solutions",
    trade: "Roofing",
    rating: 4.9,
    reviewCount: 56,
    experience: "15 years",
    location: "Salt Lake City, UT",
    verified: true,
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=250",
    portfolio: ["Standing Seam Metal Roofs", "Flat EPDM Rubber Membranes", "Clay Tile Replacements"]
  },
  {
    id: "con-5",
    name: "Hector Alvarez",
    companyName: "SolidRock Concrete",
    trade: "Concrete",
    rating: 4.8,
    reviewCount: 29,
    experience: "9 years",
    location: "Austin, TX",
    verified: true,
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=250",
    portfolio: ["Foundations & Slab-on-grade", "Stained & Polished Concrete floors", "Reinforced Retaining Walls"]
  },
  {
    id: "con-6",
    name: "Luke Morrison",
    companyName: "Timberline Framing",
    trade: "Framing",
    rating: 4.9,
    reviewCount: 47,
    experience: "11 years",
    location: "Boston, MA",
    verified: true,
    avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=250",
    portfolio: ["Multi-Family Timber Frames", "Complex Custom Truss Trimming", "Heavy Timber Trusses"]
  },
  {
    id: "con-7",
    name: "Elena Ross",
    companyName: "SmoothFinish Drywall",
    trade: "Drywall",
    rating: 4.6,
    reviewCount: 15,
    experience: "6 years",
    location: "Denver, CO",
    verified: false,
    avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=250",
    portfolio: ["Drywall Hang & Finish Storefront", "Level 5 Smooth Coat Finishing", "Drwall Repair Projects"]
  },
  {
    id: "con-8",
    name: "Michael Chen",
    companyName: "Precision Brush",
    trade: "Painting",
    rating: 4.8,
    reviewCount: 38,
    experience: "7 years",
    location: "Phoenix, AZ",
    verified: true,
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=250",
    portfolio: ["Luxury Residential Paint", "Exterior Commercial Sprayed Coating", "Custom Cabinets Stain"]
  },
  {
    id: "con-9",
    name: "Chloe Dupont",
    companyName: "Elite Hardwoods & Tile",
    trade: "Flooring",
    rating: 4.9,
    reviewCount: 22,
    experience: "9 years",
    location: "Chicago, IL",
    verified: true,
    avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=250",
    portfolio: ["Brazilian Cherry Hardwood Install", "Herringbone Porcelain Backsplash", "Epoxy Countertop Sealing"]
  },
  {
    id: "con-10",
    name: "James Bradfield",
    companyName: "TerraForce Excavating",
    trade: "Excavation",
    rating: 5.0,
    reviewCount: 25,
    experience: "16 years",
    location: "Austin, TX",
    verified: true,
    avatarUrl: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80&w=250",
    portfolio: ["Main Sewer Line Trenches", "Commercial Foundation Digging", "Topsoil Retention Silt Fences"]
  },
  {
    id: "con-11",
    name: "Oliver Moss",
    companyName: "GreenScapes Outdoor Design",
    trade: "Landscaping",
    rating: 4.7,
    reviewCount: 31,
    experience: "8 years",
    location: "Portland, OR",
    verified: true,
    avatarUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=250",
    portfolio: ["Stonework Pathways", "Commercial Turf & Tree Planting", "Drip Irrigation Controller Install"]
  },
  {
    id: "con-12",
    name: "Robert Novak",
    companyName: "Classic Stone Masonry",
    trade: "Masonry",
    rating: 4.8,
    reviewCount: 40,
    experience: "14 years",
    location: "Philadelphia, PA",
    verified: true,
    avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=250",
    portfolio: ["Hand-crafted Fieldstone Fireplaces", "Granite Retaining Walls", "Decorative Brick Gate Pillars"]
  }
];

export const mockChatThreads: ChatThread[] = [
  {
    id: "th-1",
    contractorName: "Marcus Vance",
    contractorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250",
    trade: "Electrical Specialist",
    lastMessage: "I uploaded the signed bid. Let me know when we can pull the electrical permits.",
    timestamp: "2:15 PM",
    unread: true,
    messages: [
      {
        id: "m-1",
        senderId: "me",
        senderName: "John",
        senderAvatar: "https://images.unsplash.com/photo-1489980508314-941910ded1f4?auto=format&fit=crop&q=80&w=250",
        text: "Hi Marcus, are you available next week to look at the rough-in plans for the Downtown Office Build?",
        timestamp: "Yesterday, 3:10 PM",
        isMe: true
      },
      {
        id: "m-2",
        senderId: "con-1",
        senderName: "Marcus Vance",
        senderAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250",
        text: "Hey John! Yes, I reviewed the drawings you sent. They look solid, although I noticed we might need extra conduit in Room 302 for the server racks.",
        timestamp: "Yesterday, 4:22 PM",
        isMe: false
      },
      {
        id: "m-3",
        senderId: "me",
        senderName: "John",
        senderAvatar: "https://images.unsplash.com/photo-1489980508314-941910ded1f4?auto=format&fit=crop&q=80&w=250",
        text: "Good catch, I'll update the plan right away. Can you send over the updated price bid reflecting those additions?",
        timestamp: "Yesterday, 5:01 PM",
        isMe: true
      },
      {
        id: "m-4",
        senderId: "con-1",
        senderName: "Marcus Vance",
        senderAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250",
        text: "I uploaded the signed bid. Let me know when we can pull the electrical permits.",
        timestamp: "2:15 PM",
        isMe: false
      }
    ]
  },
  {
    id: "th-2",
    contractorName: "Hector Alvarez",
    contractorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=250",
    trade: "Concrete Subcontractor",
    lastMessage: "Sounds good, concrete trucks scheduled for 6 AM Thursday morning.",
    timestamp: "Yesterday",
    unread: false,
    messages: [
      {
        id: "m-5",
        senderId: "me",
        senderName: "John",
        senderAvatar: "https://images.unsplash.com/photo-1489980508314-941910ded1f4?auto=format&fit=crop&q=80&w=250",
        text: "Hey Hector, just confirming if we are still on track for the slab pour?",
        timestamp: "Yesterday, 9:20 AM",
        isMe: true
      },
      {
        id: "m-6",
        senderId: "con-5",
        senderName: "Hector Alvarez",
        senderAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=250",
        text: "Sounds good, concrete trucks scheduled for 6 AM Thursday morning.",
        timestamp: "Yesterday, 10:11 AM",
        isMe: false
      }
    ]
  },
  {
    id: "th-3",
    contractorName: "Sarah Jenkins",
    contractorAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=250",
    trade: "Plumbing Contractor",
    lastMessage: "I see the blueprints, checking availability. I'll get back to you with a quote tonight.",
    timestamp: "May 22",
    unread: false,
    messages: [
      {
        id: "m-7",
        senderId: "me",
        senderName: "John",
        senderAvatar: "https://images.unsplash.com/photo-1489980508314-941910ded1f4?auto=format&fit=crop&q=80&w=250",
        text: "Hello Sarah, sent over the plumbing specs for the Texas retail store bid.",
        timestamp: "May 22, 11:15 AM",
        isMe: true
      },
      {
        id: "m-8",
        senderId: "con-2",
        senderName: "Sarah Jenkins",
        senderAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=250",
        text: "I see the blueprints, checking availability. I'll get back to you with a quote tonight.",
        timestamp: "May 22, 1:45 PM",
        isMe: false
      }
    ]
  }
];
