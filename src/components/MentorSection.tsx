import React from 'react';
import { Award, Shield, Target, BookOpen, MessageCircle, Phone, Sparkles } from 'lucide-react';

interface MentorSectionProps {
  onOpenDemo: () => void;
}

export const MentorSection: React.FC<MentorSectionProps> = ({ onOpenDemo }) => {
  return (
    <section id="mentor" className="py-16 sm:py-24 bg-neutral-900/50 relative border-t border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: ONLY Trader Punit Narang's Picture */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-500/30 via-yellow-500/20 to-emerald-500/30 rounded-2xl blur-xl opacity-60"></div>
              
              <div className="relative rounded-2xl overflow-hidden border-2 border-amber-500/50 bg-neutral-950 shadow-2xl p-2">
                <img
                  src="/assets/aistudio/WhatsApp_Image_2026-10-21_at_11.35.54_d622ae91.jpeg"
                  alt="Trader Punit Narang - Founder & Lead Mentor at Balance Bull Academy"
                  className="w-full h-auto aspect-square object-cover rounded-xl"
                  referrerPolicy="no-referrer"
                />

                <div className="p-4 bg-neutral-900/90 rounded-xl mt-2 border border-neutral-800 text-center">
                  <h3 className="font-display text-xl font-bold text-white">Trader Punit Narang</h3>
                  <p className="text-xs font-semibold text-amber-400 mt-0.5">
                    Founder, Head Trader &amp; Chief Market Mentor
                  </p>
                  <p className="text-[12px] text-neutral-400 mt-1">
                    Balance Bull Academy • Delhi NCR &amp; Online
                  </p>
                  
                  <div className="flex items-center justify-center gap-2 mt-3 pt-3 border-t border-neutral-800">
                    <a
                      href="https://wa.me/919999633109?text=Hello%20Trader%20Punit%20Narang,%20I%20would%20like%20to%20connect%20regarding%20trading%20mentorship."
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-semibold hover:bg-emerald-500/20 transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp Direct</span>
                    </a>
                    <a
                      href="tel:9999633109"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs font-semibold hover:bg-amber-500/20 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>9999633109</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Credentials */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">
                Best Mentor &amp; Professional Trader
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Learn Trading From A Real Full-Time Market Practitioner
              </h2>
            </div>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              With more than <strong className="text-white font-semibold">12 years of hands-on experience</strong> in Indian Equity, Nifty, and Bank Nifty derivatives, <strong className="text-amber-400 font-semibold">Trader Punit Narang</strong> established <span className="text-white font-medium">Balance Bull Academy</span> with one clear objective: to turn ordinary retail participants into self-sufficient, disciplined, and profitable traders.
            </p>

            <div className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800 text-neutral-300 text-sm italic relative">
              <span className="text-3xl text-amber-400/40 absolute -top-3 left-3 select-none">“</span>
              <p className="pl-4">
                The market is not a lottery ticket. 90% of retail traders lose because they trade on borrowed tips or greed. When you learn how institutions leave footprints in Price Action and manage risk with mathematical precision, trading becomes a structured business rather than an emotional rollercoaster.
              </p>
              <div className="mt-2 text-right not-italic">
                <span className="text-xs font-bold text-amber-400">— Trader Punit Narang</span>
              </div>
            </div>

            {/* Mentor Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800/80 space-y-1">
                <div className="flex items-center gap-2 text-amber-400">
                  <Target className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">No Blind Tips, Pure Logic</span>
                </div>
                <p className="text-xs text-neutral-400">
                  You are trained to analyze candles, volume spikes, and supply/demand independently on live screens.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800/80 space-y-1">
                <div className="flex items-center gap-2 text-emerald-400">
                  <Shield className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Strict Capital Preservation</span>
                </div>
                <p className="text-xs text-neutral-400">
                  Never risking more than 1–2% per setup. Setting rigid stoploss levels before entering any trade.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800/80 space-y-1">
                <div className="flex items-center gap-2 text-amber-400">
                  <BookOpen className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Nifty &amp; BankNifty Specialist</span>
                </div>
                <p className="text-xs text-neutral-400">
                  Deep mastery of expiry moves, Gamma scalping, PCR data, and institutional open interest shifts.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800/80 space-y-1">
                <div className="flex items-center gap-2 text-emerald-400">
                  <Award className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Live Market Handholding</span>
                </div>
                <p className="text-xs text-neutral-400">
                  Trade alongside Punit Sir during 9:15 AM to 3:30 PM so you see theory applied under real pressure.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenDemo}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-lg shadow-amber-500/20 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-neutral-950" />
                <span>Attend Free Demo with Punit Sir</span>
              </button>
              <a
                href="tel:9999633109"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm text-neutral-200 bg-neutral-950 border border-neutral-800 hover:border-amber-400/50 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call Mentor: 9999633109</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
