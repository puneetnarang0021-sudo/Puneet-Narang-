import React, { useState } from 'react';
import { Star, CheckCircle, ShieldCheck, Quote, MessageSquare } from 'lucide-react';
import type { Review } from '../types';

const REVIEWS: Review[] = [
  {
    id: '1',
    studentName: 'Rajesh Sharma',
    city: 'Rohini, Delhi',
    rating: 5,
    date: '2 weeks ago',
    batchType: 'Offline Live Market Batch',
    category: 'options',
    headline: 'From losing ₹1.8L on fake Telegram tips to consistent 1:2.5 setups',
    reviewText: 'Before joining Balance Bull Academy, I was constantly following paid Telegram tip channels and blowing my capital. Punit Narang Sir made me unlearn everything. Sitting on the academy trading floor from 9:15 AM to 3:30 PM and seeing him read Nifty option chains in real-time changed my trading forever.',
    keyOutcome: '+1:2.8 avg R:R in BankNifty · Capital Recovered',
    verified: true,
  },
  {
    id: '2',
    studentName: 'Sneha Kapoor',
    city: 'Gurgaon, Haryana',
    rating: 5,
    date: '1 month ago',
    batchType: 'Weekend Professional Batch',
    category: 'beginner',
    headline: 'Zero knowledge to confident Option Seller in 45 days',
    reviewText: 'As an IT professional, I only had weekends free. Punit Sir’s non-directional option selling course gave me a systematic strategy for weekly income without staring at screens all day. His explanation of Delta and Theta decay in simple Hindi is simply world-class.',
    keyOutcome: 'Non-Directional Index Hedging · Consistent Returns',
    verified: true,
  },
  {
    id: '3',
    studentName: 'Amit Verma',
    city: 'Noida, Sector 62',
    rating: 5,
    date: '3 weeks ago',
    batchType: 'Offline Classroom Batch',
    category: 'offline',
    headline: 'The multi-monitor office environment gives real institutional feeling',
    reviewText: 'You can watch 1000 YouTube videos, but nothing beats sitting in the academy with multi-monitor desks and discussing live price action. Trader Punit Narang doesn’t sugarcoat anything—he stops you from overtrading and forces strict risk discipline.',
    keyOutcome: 'Zero Overtrading · 68% Win Rate in Price Action',
    verified: true,
  },
  {
    id: '4',
    studentName: 'Vikram Rajput',
    city: 'Jaipur, Rajasthan',
    rating: 5,
    date: '1 month ago',
    batchType: 'Live Online Mentorship',
    category: 'price-action',
    headline: 'Pure Price Action without any lagging RSI or MACD indicators',
    reviewText: 'Punit Sir taught me how institutions hunt liquidity at swing highs and lows. The Break of Structure (BOS) and Order Block concepts alone made my entries razor sharp. Easily the best stock market mentor in North India.',
    keyOutcome: 'Sniper Retest Entries · Minimum 1:3 Target',
    verified: true,
  },
  {
    id: '5',
    studentName: 'Harpreet Singh',
    city: 'Ludhiana, Punjab',
    rating: 5,
    date: '2 months ago',
    batchType: 'Hybrid Batch (Offline & Online)',
    category: 'options',
    headline: 'Mastered 0-Hero Expiry Option Buying with strict stoploss',
    reviewText: 'I used to buy OTM cheap options on expiry day and watch them become zero. Punit Sir showed us the exact institutional OI buildup and Gamma surge timing. Now I only trade high-probability momentum bursts.',
    keyOutcome: 'Disciplined Expiry Trading · Zero Account Blowouts',
    verified: true,
  },
  {
    id: '6',
    studentName: 'Manish Rawat',
    city: 'Janakpuri, Delhi',
    rating: 5,
    date: '1 month ago',
    batchType: 'Offline Live Market Floor',
    category: 'offline',
    headline: 'The lifetime community and doubt clearing is worth 10x the fees',
    reviewText: 'Even after completing the 6-week course, I still sit on the trading floor and get my trades reviewed. Trader Punit Narang is genuinely committed to student success, unlike commercial institutes that disappear after fees are paid.',
    keyOutcome: 'Full-Time Independent Trader · Lifetime Support',
    verified: true,
  },
];

interface ReviewsSectionProps {
  onOpenDemo: () => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ onOpenDemo }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredReviews = selectedCategory === 'all'
    ? REVIEWS
    : REVIEWS.filter(r => r.category === selectedCategory);

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-neutral-900/50 relative border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Google Reviews Trust Header */}
        <div className="bg-neutral-950 border border-amber-500/30 rounded-2xl p-6 sm:p-8 mb-12 shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-amber-400/10 border border-amber-500/30 flex items-center justify-center shrink-0">
                <span className="font-display font-extrabold text-2xl text-amber-400">G</span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Google Rating: 4.9 / 5.0</h3>
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                </div>
                <div className="flex items-center gap-2.5 mt-1 text-xs text-neutral-300">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="font-semibold text-white">487 Verified Student Reviews</span>
                  <span className="text-neutral-500">·</span>
                  <span className="text-neutral-400">Balance Bull Academy</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <button
                onClick={onOpenDemo}
                className="w-full md:w-auto px-5 py-2.5 rounded-xl font-bold text-xs text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-md cursor-pointer whitespace-nowrap"
              >
                Experience in Free Demo Class
              </button>
            </div>
          </div>
        </div>

        {/* Section Heading & Category Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-wider uppercase">
              <MessageSquare className="w-4 h-4" />
              <span>Real Transformations</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              What Students Say About Trader Punit Narang
            </h2>
            <p className="text-neutral-400 text-sm max-w-2xl">
              Honest feedback from working professionals, beginners, and full-time traders who trained at Balance Bull Academy.
            </p>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-neutral-950 border border-neutral-800 rounded-xl overflow-x-auto shrink-0">
            {[
              { id: 'all', label: 'All Reviews' },
              { id: 'options', label: 'Options Trading' },
              { id: 'price-action', label: 'Price Action' },
              { id: 'offline', label: 'Offline Center' },
              { id: 'beginner', label: 'Beginners' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCategory === tab.id
                    ? 'bg-amber-400 text-neutral-950 shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="bg-neutral-950 border border-neutral-800 hover:border-amber-500/40 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between space-y-4 shadow-lg relative group"
            >
              <div className="space-y-3">
                {/* Header: Student Info & Rating */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                      <span>{review.studentName}</span>
                      {review.verified && (
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      )}
                    </h4>
                    <p className="text-[11px] text-neutral-400">
                      {review.city} · <span className="text-amber-400/80">{review.batchType}</span>
                    </p>
                  </div>

                  <div className="flex text-amber-400 shrink-0">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Headline */}
                <p className="text-xs sm:text-sm font-semibold text-neutral-100 leading-snug">
                  "{review.headline}"
                </p>

                {/* Review Text */}
                <p className="text-xs text-neutral-300 leading-relaxed">
                  {review.reviewText}
                </p>
              </div>

              {/* Bottom Verified Badge & Key Outcome */}
              <div className="pt-3 border-t border-neutral-900 flex items-center justify-between text-[11px]">
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {review.keyOutcome}
                </span>
                <span className="text-neutral-500">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
