
export interface NavLink {
  name: string;
  href: string;
}

export interface ChatMessage {
  sender: 'user' | 'ai';
  text: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
  sponsored?: boolean;
  tip?: string;
}

export interface SavingsResult {
    totalPremium: number;
    estimatedSavings: number;
    marketAverage: number;
}

export type InsuranceType = 'Health' | 'Life' | 'Auto' | 'Home' | 'Travel' | 'Business';

export interface CountryInsight {
    name: string;
    flag: string;
    popularInsurances: InsuranceType[];
    keyInsight: string;
    perCapitaSpending: number;
    marketSize: number; // in billions USD
    notes: string;
    globalRank: number;
    distribution: { name: InsuranceType, value: number }[];
}


export type Page = 'home' | 'about' | 'privacy' | 'terms' | 'contact' | 'insights';