export interface MarketIndex {
  symbol: string;
  name: string;
  price: number;
  change: number;
  percentChange: number;
  isPositive: boolean;
}

export interface Review {
  id: string;
  studentName: string;
  city: string;
  rating: number;
  date: string;
  batchType: string;
  category: 'options' | 'price-action' | 'beginner' | 'offline';
  headline: string;
  reviewText: string;
  keyOutcome: string;
  verified: boolean;
}

export interface CurriculumModule {
  id: number;
  title: string;
  subtitle: string;
  duration: string;
  topics: string[];
  practicalOutcome: string;
}

export interface DemoBooking {
  fullName: string;
  mobile: string;
  email: string;
  mode: 'offline' | 'online';
  slot: string;
  experience: string;
}
