export type Role = "startup" | "investidor";
export type ProfileKind = "startup" | "investidor";

export interface DealProfile {
  id: string;
  kind: ProfileKind;
  name: string;
  image: string;
  verified: boolean;
  matchScore: number;
  headline: string;
  location: string;
  stage: string;
  vertical: string;
  description: string;
  tags: string[];
  metrics: { label: string; value: string; accent?: "blue" | "green" | "purple" }[];
  details: {
    thesis: string[];
    smartMoney: string[];
    trackRecord: { value: string; label: string }[];
    dealBreakers: string[];
  };
}

export interface ChatMessage {
  id: string;
  from: "them" | "me";
  text: string;
  time: string;
  kind?: "text" | "file" | "system";
}

export interface MockMatch {
  id: string;
  profileId: string;
  createdAt: string;
}

export interface MockStoreState {
  favorites: string[];
  passed: string[];
  matches: MockMatch[];
  messages: Record<string, ChatMessage[]>;
}

export interface MockConversation {
  id: string;
  profileId: string;
  unread: boolean;
  lastMessage: string;
  time: string;
}
