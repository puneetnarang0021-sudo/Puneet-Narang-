import React, { useState } from 'react';
import { BookOpen, CheckCircle, ChevronDown, ChevronUp, Download, Sparkles } from 'lucide-react';
import type { CurriculumModule } from '../types';

interface CurriculumProps {
  onOpenDemo: () => void;
}

const MODULES: CurriculumModule[] = [
  {
    id: 1,
    title: 'Foundations of Stock Market & Candlestick Anatomy',
    subtitle: 'From Absolute Zero to Chart Fluency',
    duration: 'Week 1',
    topics: [
      'Market participants: Retail vs Domestic & Foreign Institutions (DIIs & FIIs)',
      'Anatomy of bullish & bearish candlesticks: Wicks, body rejections, and volume',
      'Support & Resistance mapping using multi-timeframe confirmation (Daily, 1-Hr, 15-Min)',
      'Trendlines, channels, and chart patterns that actually work in today’s algorithmic markets',
      'Setting up your professional trading terminal (TradingView & Broker workstations)',
    ],
    practicalOutcome: 'Master reading any naked chart without cluttering your screen with lagging indicators.',
  },
  {
    id: 2,
    title: 'Pure Price Action & Institutional Market Structure',
    subtitle: 'Smart Money Concepts & Liquidity Hunting',
    duration: 'Week 2',
    topics: [
      'Understanding Market Structure: Higher Highs, Lower Lows, Break of Structure (BOS)',
      'Change of Character (CHoCH) and identifying real reversals early',
      'Liquidity Pools: Why retail stoplosses get hunted at previous swing highs and lows',
      'Fair Value Gaps (FVG) and Order Blocks (OB) for sniper institutional entries',
      'Volume Profile & Value Area High (VAH) / Value Area Low (VAL) analysis',
    ],
    practicalOutcome: 'Stop buying at tops and selling at bottoms; enter where institutions place their block orders.',
  },
  {
    id: 3,
    title: 'Nifty & Bank Nifty Options Mastery',
    subtitle: 'Option Buying Momentum & Option Selling Consistency',
    duration: 'Week 3',
    topics: [
      'Deep dive into Option Greeks: Delta, Theta decay, Gamma spikes, and Vega volatility',
      'Option Buying Playbook: Catching fast momentum moves without suffering Theta bleed',
      'Option Selling Playbook: High-probability non-directional Strangles and Iron Condors for consistent cashflow',
      'Open Interest (OI) analysis and Put-Call Ratio (PCR) for live expiry day prediction',
      'Selecting the correct strike price: ITM vs ATM vs OTM risk calculation',
    ],
    practicalOutcome: 'Execute high-conviction Index Option trades with defined risk and calculated Greeks edge.',
  },
  {
    id: 4,
    title: 'Trader Punit Narang’s Proprietary Setups',
    subtitle: 'Battle-Tested High-Probability Setups',
    duration: 'Week 4',
    topics: [
      'The 9:20 AM Opening Range Breakout (ORB) institutional trap filter',
      'VWAP & EMA confluence mean reversion setup for afternoon sessions',
      'Expiry Day 0-Hero Option buying strategy with 1:3 minimum risk-reward',
      'Swing trading breakout strategies for cash stocks with 2-4 week holding period',
      'Live trade checklist before clicking the Buy or Sell button',
    ],
    practicalOutcome: 'Have a clear rules-based execution manual instead of emotional impulse guessing.',
  },
  {
    id: 5,
    title: 'Risk Management, Position Sizing & Capital Shield',
    subtitle: 'How The Top 1% Manage Money & Stay Alive',
    duration: 'Week 5',
    topics: [
      'The 1% - 2% Golden Rule: Exactly how much capital to allocate per index trade',
      'Calculating exact lot size using stoploss distance rather than gut feel',
      'Trailing stoplosses to lock in profits during multi-hundred-point trending rallies',
      'Managing drawdowns: What to do when a streak of 3 losses occurs',
      'Setting daily stop-loss limit to guarantee account survival and eliminate blowouts',
    ],
    practicalOutcome: 'Never blow up another trading account; protect capital like a hedge fund risk manager.',
  },
  {
    id: 6,
    title: 'Trading Psychology & Live Market Mentorship',
    subtitle: 'Mastering The Mind & 9:15 AM - 3:30 PM Execution',
    duration: 'Week 6 & Ongoing',
    topics: [
      'Eliminating FOMO (Fear of Missing Out) and the urge for revenge trading',
      'Trading Journaling: How to log, audit, and systematically eliminate recurring errors',
      'Transitioning from paper trading to real capital with micro lot progression',
      'Live trading room handholding: Live commentary and chart markups with Punit Sir',
      'Lifetime community membership and weekly alumni review calls',
    ],
    practicalOutcome: 'Transform from a panicked gambler into a calm, confident, professional stock trader.',
  },
];

export const Curriculum: React.FC<CurriculumProps> = ({ onOpenDemo }) => {
  const [expandedId, setExpandedId] = useState<number | null>(1);

  const toggleModule = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="curriculum" className="py-16 sm:py-24 bg-neutral-900/40 relative border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-wider uppercase">
            <BookOpen className="w-4 h-4" />
            <span>Comprehensive Syllabus</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Complete Stock Market &amp; Options Masterclass
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            Curated by <span className="text-amber-400 font-medium">Trader Punit Narang</span> based on 12+ years of real trading floor execution. Designed to take complete beginners to consistent profitability.
          </p>
        </div>

        {/* Modules Accordion Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-4">
            {MODULES.map((module) => {
              const isOpen = expandedId === module.id;
              return (
                <div
                  key={module.id}
                  className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-neutral-900/90 border-amber-500/50 shadow-lg shadow-amber-500/5'
                      : 'bg-neutral-950/70 border-neutral-800 hover:border-neutral-700'
                  }`}
                >
                  <button
                    onClick={() => toggleModule(module.id)}
                    className="w-full px-5 py-4.5 flex items-center justify-between text-left gap-4 cursor-pointer"
                  >
                    <div className="flex items-center gap-3.5 sm:gap-4">
                      <span className="w-9 h-9 rounded-xl bg-amber-400/10 border border-amber-500/30 flex items-center justify-center font-mono font-bold text-amber-400 text-sm shrink-0">
                        0{module.id}
                      </span>
                      <div>
                        <h3 className="text-sm sm:text-base font-bold text-white">
                          {module.title}
                        </h3>
                        <p className="text-xs text-neutral-400 mt-0.5">
                          {module.subtitle} · <span className="text-amber-400/90">{module.duration}</span>
                        </p>
                      </div>
                    </div>

                    <div className="shrink-0 text-neutral-400 hover:text-amber-400">
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 border-t border-neutral-800/80 space-y-4">
                      <div className="space-y-2.5">
                        <p className="text-xs font-semibold text-neutral-300 uppercase tracking-wider">
                          Key Topics Covered:
                        </p>
                        <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
                          {module.topics.map((topic, i) => (
                            <li key={i} className="flex items-start gap-2.5">
                              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-3 rounded-xl bg-neutral-950/80 border border-neutral-800 text-xs text-neutral-300">
                        <span className="font-semibold text-amber-400">Practical Outcome: </span>
                        {module.practicalOutcome}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Course Features Card & Free Demo Trigger */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl bg-neutral-950 border border-amber-500/30 shadow-xl space-y-6">
              <div>
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                  Course Inclusions
                </span>
                <h3 className="text-xl font-bold text-white mt-1">What Every Student Receives</h3>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm text-neutral-300">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Live Market Trading Desk</strong> during 9:15 AM - 3:30 PM with Trader Punit Narang</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Full Recording Access</strong> with lifetime validity on your student portal</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Option Greeks &amp; Position Sizing Calculators</strong> pre-configured excel tools</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Daily Pre-Market Levels</strong> for Nifty, BankNifty, and high-beta breakout stocks</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Official Certificate of Completion</strong> from Balance Bull Academy</span>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-800 space-y-3">
                <button
                  onClick={onOpenDemo}
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-sm text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Attend Free Demo Class</span>
                </button>

                <a
                  href="https://wa.me/919999633109?text=Hello%20Trader%20Punit%20Narang,%20please%20send%20me%20the%20detailed%20Balance%20Bull%20Academy%20Syllabus%20PDF."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 px-4 rounded-xl font-semibold text-xs text-neutral-200 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 flex items-center justify-center gap-2 transition-colors"
                >
                  <Download className="w-4 h-4 text-amber-400" />
                  <span>Get Complete PDF Syllabus on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Batch Schedule Quick Card */}
            <div className="p-5 rounded-2xl bg-neutral-950/80 border border-neutral-800 space-y-3 text-xs text-neutral-300">
              <h4 className="font-bold text-white text-sm">Upcoming Batch Details</h4>
              <div className="space-y-2">
                <div className="flex justify-between py-1 border-b border-neutral-800/80">
                  <span className="text-neutral-400">Regular Batch:</span>
                  <span className="font-semibold text-white">Monday - Friday (Live Market)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-800/80">
                  <span className="text-neutral-400">Weekend Batch:</span>
                  <span className="font-semibold text-white">Sat &amp; Sun (For Working Pros)</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-neutral-400">Language:</span>
                  <span className="font-semibold text-white">Hindi &amp; Simple English</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
