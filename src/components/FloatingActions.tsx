import React from 'react';
import { Phone, MessageCircle, Sparkles, Gift } from 'lucide-react';

interface FloatingActionsProps {
  onOpenDemo: () => void;
  onOpenForm?: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenDemo, onOpenForm }) => {
  return (
    <>
      {/* Floating Admission & Google Form Badge (Bottom-Left on Desktop & Tablet) */}
      <aside aria-label="Special Admission Offer" className="hidden sm:block fixed bottom-6 left-6 z-40">
        <button
          onClick={onOpenForm || onOpenDemo}
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-neutral-950 font-bold text-xs shadow-xl shadow-amber-500/25 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          title="Open Google Form & Free Demo Pass"
        >
          <Gift className="w-4 h-4 text-neutral-950" />
          <span className="whitespace-nowrap">🎁 Claim Free Demo &amp; Google Form</span>
          <span className="w-2 h-2 rounded-full bg-neutral-950 animate-ping" />
        </button>
      </aside>

      {/* Floating WhatsApp Action Pill (Bottom-Right on Desktop & Tablet) */}
      <aside aria-label="Quick WhatsApp Contact" className="hidden sm:block fixed bottom-6 right-6 z-40">
        <a
          href="https://wa.me/919999633109?text=Hello%20Trader%20Punit%20Narang,%20I%20want%20to%20know%20more%20about%20the%20Stock%20Market%20Course%20at%20Balance%20Bull%20Academy."
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-xs shadow-xl shadow-emerald-500/25 transition-all hover:scale-105 active:scale-95"
          aria-label="Chat with Trader Punit Narang on WhatsApp"
        >
          <div className="relative">
            <MessageCircle className="w-5 h-5 fill-neutral-950 text-neutral-950" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-white border-2 border-emerald-500 animate-ping" />
          </div>
          <span className="whitespace-nowrap">WhatsApp Trader Punit Narang (9999633109)</span>
        </a>
      </aside>

      {/* Streamlined Mobile Bottom Action Bar (Fixed, max 48px height to strictly respect 15% mobile viewport cap) */}
      <nav aria-label="Mobile quick actions" className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-neutral-950/95 backdrop-blur-md border-t border-neutral-800 px-2.5 py-2 flex items-center justify-between gap-1.5 shadow-2xl">
        <a
          href="tel:9999633109"
          className="flex-1 py-2 px-2 rounded-lg bg-neutral-900 border border-neutral-800 text-amber-400 font-bold text-[11px] flex items-center justify-center gap-1 active:bg-neutral-800 whitespace-nowrap"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Call Desk</span>
        </a>

        <a
          href="https://wa.me/919999633109?text=Hello%20Trader%20Punit%20Narang,%20I%20want%20to%20join%20Balance%20Bull%20Academy."
          target="_blank"
          rel="noreferrer"
          className="flex-1 py-2 px-2 rounded-lg bg-emerald-500 text-neutral-950 font-bold text-[11px] flex items-center justify-center gap-1 active:bg-emerald-400 whitespace-nowrap"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-neutral-950" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={onOpenForm || onOpenDemo}
          className="flex-1 py-2 px-2 rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 text-neutral-950 font-extrabold text-[11px] flex items-center justify-center gap-1 active:bg-amber-300 whitespace-nowrap cursor-pointer shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Admission Form</span>
        </button>
      </nav>
    </>
  );
};
