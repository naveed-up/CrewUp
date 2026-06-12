export interface Project {
  id: string;
  title: string;
  trade: string;
  trades?: string[]; // Multiple trades if applicable
  location: string;
  bidsCount: number;
  dueDate: string;
  budget?: string;
  status?: "Active" | "Pending" | "Completed";
  description?: string;
}

export interface Contractor {
  id: string;
  name: string;
  companyName: string;
  trade: string;
  rating: number;
  reviewCount: number;
  experience: string;
  location: string;
  verified: boolean;
  avatarUrl: string;
  portfolio: string[];
}

export interface Message {
  id: string;
  senderId: string;
  senderName: string;
  senderAvatar: string;
  text: string;
  timestamp: string;
  isMe: boolean;
}

export interface ChatThread {
  id: string;
  contractorName: string;
  contractorAvatar: string;
  trade: string;
  lastMessage: string;
  timestamp: string;
  unread: boolean;
  messages: Message[];
}
