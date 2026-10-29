import React from 'react';
import { Phone, Mail, MessageCircle, MapPin, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onOpenDemo: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDemo }) => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1 & 2: Brand & Mentor Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/aistudio/WhatsApp_Image_2026-10-21_at_11.35.54_d622ae91.jpeg"
                alt="Balance Bull Academy Logo - Trader Punit Narang"
                className="w-12 h-12 rounded-full object-cover ring-2 ring-amber-400/80 shadow"
                referrerPolicy="no-referrer"
              />
              <div>
                <h3 className="font-display font-bold text-base sm:text-lg text-white">
                  Balance Bull Academy
                </h3>
                <p className="text-xs font-semibold text-amber-400">
                  By Trader Punit Narang
                </p>
              </div>
            </div>

            <p className="text-neutral-300 text-xs leading-relaxed max-w-sm">
              India’s premier practical stock market institute. Dedicated to building independent, disciplined retail traders through live market mentorship, institutional price action, and advanced Nifty &amp; BankNifty option strategies.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://wa.me/919999633109"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-semibold text-xs hover:bg-emerald-500/20 transition-colors flex items-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp: 9999633109</span>
              </a>
              <a
                href="tel:9999633109"
                className="px-3 py-1.5 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/30 font-semibold text-xs hover:bg-amber-500/20 transition-colors flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call 9999633109</span>
              </a>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Academy
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#webinars" className="text-amber-400 hover:text-amber-300 font-semibold transition-colors flex items-center gap-1.5">
                  <span>Featured Webinars</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-400/20 text-amber-300">Live</span>
                </a>
              </li>
              <li>
                <a href="#curriculum" className="hover:text-amber-400 transition-colors">
                  Course Syllabus &amp; Modules
                </a>
              </li>
              <li>
                <a href="#mentor" className="hover:text-amber-400 transition-colors">
                  Meet Trader Punit Narang
                </a>
              </li>
              <li>
                <a href="#academy" className="hover:text-amber-400 transition-colors">
                  Live Trading Floor &amp; Office
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-amber-400 transition-colors">
                  Student Reviews (4.9★)
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-amber-400 transition-colors">
                  Risk-Reward Calculator
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Course Offerings */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Specializations
            </h4>
            <ul className="space-y-2">
              <li className="text-neutral-300">Nifty 50 &amp; Bank Nifty Options</li>
              <li className="text-neutral-300">Pure Price Action Mastery</li>
              <li className="text-neutral-300">Institutional Order Blocks (SMC)</li>
              <li className="text-neutral-300">Option Buying Momentum Setups</li>
              <li className="text-neutral-300">Non-Directional Option Selling</li>
              <li className="text-neutral-300">Live Trading 9:15 AM - 3:30 PM</li>
            </ul>
          </div>

          {/* Col 5: Contact Desk */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Admissions Desk
            </h4>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2 text-neutral-300">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:9999633109" className="hover:text-amber-400 transition-colors">
                  +91 9999633109
                </a>
              </li>
              <li className="flex items-center gap-2 text-neutral-300">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href="mailto:PuneetNarang0021@gmail.com"
                  className="hover:text-amber-400 transition-colors truncate"
                >
                  PuneetNarang0021@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-neutral-300">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Delhi NCR Offline Center &amp; Online Live Mentorship</span>
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={onOpenDemo}
                className="w-full py-2 px-3 rounded-lg font-bold text-xs text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-colors cursor-pointer text-center"
              >
                Book Free Demo Session
              </button>
            </div>
          </div>
        </div>

        {/* Regulatory & Educational Compliance Disclaimer */}
        <div className="mt-12 pt-6 border-t border-neutral-900 text-[11px] text-neutral-500 space-y-2">
          <p>
            <strong>Regulatory &amp; Educational Notice:</strong> Balance Bull Academy by Trader Punit Narang is exclusively an educational and training institution. All content, live market charts, case studies, and training materials are shared strictly for educational and training purposes. We do not provide SEBI-registered investment advisory services, stock tips, or portfolio management. Trading in financial markets involves risk to capital; students are encouraged to practice thorough risk management.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-3">
            <p>© {new Date().getFullYear()} Balance Bull Academy by Trader Punit Narang. All rights reserved.</p>
            <p className="flex items-center gap-1">
              <span>Crafted for high-performance traders</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
