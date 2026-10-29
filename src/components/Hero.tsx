import React from 'react';
import { Phone, MessageCircle, Star, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenDemo: () => void;
  onOpenForm?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo, onOpenForm }) => {
  return (
    <section className="relative pt-8 pb-16 lg:pt-16 lg:pb-24 overflow-hidden bg-chart-grid">
      {/* Subtle radial ambient gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            {/* Trust badge with Google rating */}
            <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-amber-500/30 text-xs font-medium text-neutral-300">
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <span className="font-semibold text-white">4.9 / 5.0</span>
              <span className="text-neutral-500">·</span>
              <span className="text-neutral-300">480+ Verified Google Reviews</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-white">
              Learn Real Stock Trading with{' '}
              <span className="gold-gradient-text">Trader Punit Narang</span> at Balance Bull Academy
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl">
              Stop relying on random Telegram tips. Master pure Price Action, Nifty &amp; Bank Nifty Option Strategies, and Institutional Order Flow with live market handholding during real trading hours (9:15 AM – 3:30 PM).
            </p>

            {/* 4 Core Pillars from the Official Academy Badge */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {[
                { title: 'Live Trading', desc: 'Real Market Hours' },
                { title: 'Practical Learning', desc: 'Hands-on Execution' },
                { title: 'Option Strategies', desc: 'Buying & Selling' },
                { title: 'Technical Analysis', desc: 'Pure Price Action' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-neutral-900/70 border border-neutral-800 rounded-lg p-3 hover:border-amber-500/40 transition-colors"
                >
                  <p className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    {item.title}
                  </p>
                  <p className="text-[11px] text-neutral-400 mt-0.5">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4">
              {/* Free Demo Button */}
              <button
                onClick={onOpenDemo}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-base text-neutral-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-xl shadow-amber-500/20 active:scale-[0.98] transition-all cursor-pointer group"
              >
                <span>Book Free Demo Class</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/919999633109?text=Hello%20Trader%20Punit%20Narang,%20I%20want%20to%20know%20about%20the%20Stock%20Market%20Course%20at%20Balance%20Bull%20Academy."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-emerald-400 bg-neutral-900/90 hover:bg-neutral-800 border border-emerald-500/40 hover:border-emerald-400 transition-all shadow-md active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5 text-emerald-400" />
                <span>WhatsApp: 9999633109</span>
              </a>

              {/* Direct Call Button */}
              <a
                href="tel:9999633109"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-neutral-300 bg-neutral-900/60 hover:bg-neutral-800 border border-neutral-800 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call 9999633109</span>
              </a>
            </div>

            {/* Reassurance Checklist */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-neutral-400 pt-2">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                No Prior Experience Needed
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Offline Delhi Center &amp; Online Live
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                Lifetime Mentorship Community
              </span>
            </div>
          </div>

          {/* Right Column: Official Badge & Mentor Visual Carrier */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md mx-auto">
              {/* Outer Golden Glow Circle */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-amber-500/20 via-yellow-400/10 to-emerald-500/20 blur-2xl opacity-70"></div>

              {/* Card Container holding the Official Uploaded Image */}
              <div className="relative rounded-2xl bg-neutral-900/90 border border-neutral-800 p-3 shadow-2xl gold-border-glow">
                <img
                  src="/assets/aistudio/WhatsApp_Image_2026-10-21_at_11.35.54_d622ae91.jpeg"
                  alt="Balance Bull Academy - Stock Market Course by Trader Punit Narang"
                  className="w-full aspect-square object-cover rounded-xl shadow-inner"
                  referrerPolicy="no-referrer"
                />

                {/* Bottom Card Kicker */}
                <div className="mt-3.5 px-3 py-2.5 rounded-lg bg-neutral-950/80 border border-neutral-800 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-neutral-200">
                      Learn • Trade • Grow
                    </span>
                    <span className="text-[11px] text-amber-400">
                      Head Mentor: Trader Punit Narang
                    </span>
                  </div>
                  <button
                    onClick={onOpenDemo}
                    className="px-3 py-1.5 rounded-md text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-colors cursor-pointer"
                  >
                    Free Demo
                  </button>
                </div>
              </div>

              {/* Floating Stat Pill on Desktop */}
              <div className="hidden sm:flex absolute -bottom-5 -left-4 items-center gap-3 bg-neutral-950 border border-amber-500/40 rounded-xl px-4 py-2.5 shadow-xl">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center font-bold text-amber-400 text-sm">
                  12+
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Years Market Experience</p>
                  <p className="text-[10px] text-neutral-400">NSE &amp; BSE Derivatives Specialist</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Masterclasses Banner with Motilal Oswal & Upsurge */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-neutral-900/90 to-emerald-500/10 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-amber-400/20 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-400">
              <Star className="w-5 h-5 fill-amber-400" />
            </div>
            <div>
              <p className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                Industry Recognition &amp; Masterclasses
              </p>
              <p className="text-sm font-semibold text-white">
                Live Option Webinars with <span className="text-amber-300">Motilal Oswal</span> &amp; <span className="text-emerald-400">Upsurge.club</span>
              </p>
            </div>
          </div>

          <a
            href="#webinars"
            className="shrink-0 px-4 py-2 rounded-xl text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-md flex items-center gap-1.5 whitespace-nowrap"
          >
            <span>Watch Live Masterclasses</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 4-Metric Proof Strip (Full-width row below hero split) */}
        <div className="mt-8 pt-8 border-t border-neutral-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-3">
            <p className="font-mono text-2xl sm:text-3xl font-extrabold text-amber-400 tabular-nums">
              5,000+
            </p>
            <p className="text-xs sm:text-sm text-neutral-300 mt-1">Students Mentored</p>
            <p className="text-[11px] text-neutral-500">Across India &amp; Abroad</p>
          </div>
          <div className="p-3">
            <p className="font-mono text-2xl sm:text-3xl font-extrabold text-emerald-400 tabular-nums">
              4.9 / 5.0
            </p>
            <p className="text-xs sm:text-sm text-neutral-300 mt-1">Google Reviews Rating</p>
            <p className="text-[11px] text-neutral-500">480+ Genuine Student Reviews</p>
          </div>
          <div className="p-3">
            <p className="font-mono text-2xl sm:text-3xl font-extrabold text-amber-400 tabular-nums">
              100%
            </p>
            <p className="text-xs sm:text-sm text-neutral-300 mt-1">Live Market Practical</p>
            <p className="text-[11px] text-neutral-500">9:15 AM to 3:30 PM Handholding</p>
          </div>
          <div className="p-3">
            <p className="font-mono text-2xl sm:text-3xl font-extrabold text-white tabular-nums">
              1:2 to 1:4
            </p>
            <p className="text-xs sm:text-sm text-neutral-300 mt-1">Risk-to-Reward Ratio</p>
            <p className="text-[11px] text-neutral-500">Capital Protection First</p>
          </div>
        </div>
      </div>
    </section>
  );
};
