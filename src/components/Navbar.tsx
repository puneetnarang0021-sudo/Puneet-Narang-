import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenDemo: () => void;
  onOpenForm?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo, onOpenForm }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-neutral-950/95 backdrop-blur-md border-b border-neutral-800/80">
      {/* Top Direct Contact Bar */}
      <div className="bg-gradient-to-r from-neutral-900 via-neutral-900 to-neutral-950 border-b border-neutral-800/60 text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-neutral-300">
          <div className="flex items-center gap-3 text-neutral-400">
            <button
              onClick={onOpenForm}
              className="text-amber-400 hover:text-amber-300 font-bold tracking-wide hover:underline cursor-pointer flex items-center gap-1.5"
            >
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <span>Admissions Open: Fill Google Form &amp; Get Free Demo Pass</span>
            </button>
            <span className="hidden sm:inline text-neutral-600">|</span>
            <span className="hidden sm:inline">Offline Delhi NCR &amp; Live Online</span>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <a
              href="tel:9999633109"
              className="flex items-center gap-1.5 text-neutral-200 hover:text-amber-400 font-medium transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>9999633109</span>
            </a>

            <a
              href="https://wa.me/919999633109?text=Hello%20Trader%20Punit%20Narang,%20I%20want%20to%20know%20more%20about%20the%20Stock%20Market%20Course%20at%20Balance%20Bull%20Academy."
              target="_blank"
              rel="noreferrer"
              className="hidden md:flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <a
              href="mailto:PuneetNarang0021@gmail.com"
              className="hidden lg:flex items-center gap-1.5 text-neutral-300 hover:text-amber-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>PuneetNarang0021@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Bar Contract: Zone 1 (Brand) — Zone 2 (4-5 Nav Links) — Zone 3 (1 Primary Action) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-8">
        {/* Zone 1: Brand element with official logo */}
        <a href="#" className="flex items-center gap-3 shrink-0 group">
          <img
            src="/assets/aistudio/WhatsApp_Image_2026-10-21_at_11.35.54_d622ae91.jpeg"
            alt="Balance Bull Academy Logo - Trader Punit Narang"
            className="w-11 h-11 rounded-full object-cover ring-2 ring-amber-400/80 shadow-md shadow-amber-500/10 group-hover:scale-105 transition-transform"
            referrerPolicy="no-referrer"
          />
          <div className="flex flex-col">
            <span className="font-display font-bold text-base sm:text-lg tracking-tight text-neutral-100 group-hover:text-amber-400 transition-colors whitespace-nowrap">
              Balance Bull Academy
            </span>
            <span className="text-[11px] font-semibold text-amber-400/90 tracking-wide uppercase">
              By Trader Punit Narang
            </span>
          </div>
        </a>

        {/* Zone 2: 4-5 clean single-line nav links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-300">
          <a
            href="#webinars"
            className="text-amber-400 hover:text-amber-300 font-semibold transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
          >
            <span>Webinars</span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          </a>
          <a
            href="#curriculum"
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
          >
            Curriculum
          </a>
          <a
            href="#mentor"
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
          >
            Meet Mentor
          </a>
          <a
            href="#academy"
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
          >
            Live Academy
          </a>
          <a
            href="#reviews"
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
          >
            Reviews (4.9★)
          </a>
          <a
            href="#calculator"
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
          >
            Risk Calculator
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenDemo}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-neutral-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 active:scale-[0.98] transition-all whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>Book Free Demo</span>
            <ArrowUpRight className="w-4 h-4 text-neutral-950" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenDemo}
            className="px-3 py-1.5 rounded-md text-xs font-bold text-neutral-950 bg-amber-400 active:scale-95 transition-transform"
          >
            Free Demo
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-300 hover:text-white rounded-lg focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-800 bg-neutral-950 px-5 py-4 space-y-3">
          <a
            href="#webinars"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-bold text-amber-400 hover:text-amber-300 py-1 flex items-center justify-between"
          >
            <span>Featured Webinars (Motilal Oswal &amp; Upsurge)</span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 uppercase">Live</span>
          </a>
          <a
            href="#curriculum"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-neutral-200 hover:text-amber-400 py-1"
          >
            Curriculum &amp; Modules
          </a>
          <a
            href="#mentor"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-neutral-200 hover:text-amber-400 py-1"
          >
            Trader Punit Narang (Mentor)
          </a>
          <a
            href="#academy"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-neutral-200 hover:text-amber-400 py-1"
          >
            Live Academy & Offline Center
          </a>
          <a
            href="#reviews"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-neutral-200 hover:text-amber-400 py-1"
          >
            Student Reviews & Results
          </a>
          <a
            href="#calculator"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-neutral-200 hover:text-amber-400 py-1"
          >
            Risk & Position Calculator
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-neutral-200 hover:text-amber-400 py-1"
          >
            Contact & Directions
          </a>

          <div className="pt-3 border-t border-neutral-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full py-2.5 text-center font-bold text-neutral-950 bg-amber-400 rounded-lg text-sm"
            >
              Book Free Demo Class
            </button>
            <a
              href="https://wa.me/919999633109?text=Hello%20Trader%20Punit%20Narang,%20I%20want%20to%20know%20more%20about%20the%20Stock%20Market%20Course%20at%20Balance%20Bull%20Academy."
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 text-center font-medium text-emerald-400 bg-neutral-900 border border-emerald-500/30 rounded-lg text-sm flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Punit Sir (9999633109)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
