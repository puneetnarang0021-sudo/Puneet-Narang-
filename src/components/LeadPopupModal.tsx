import React, { useState, useEffect } from 'react';
import { X, Send, MessageCircle, Mail, ExternalLink, Sparkles, CheckCircle2, ShieldCheck, Gift, Phone } from 'lucide-react';

interface LeadPopupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LeadPopupModal: React.FC<LeadPopupModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'quick-form' | 'google-form'>('quick-form');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    course: 'Nifty & Bank Nifty Options Mastery',
    mode: 'Offline Classroom (Delhi NCR)',
    experience: 'Complete Beginner (0-6 months)',
  });

  const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSddlnDkVU2miFiXhcbLD21qYgdK0SyXiSm4boljdK03sVyPtA/viewform?usp=header';
  const GOOGLE_FORM_EMBED_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSddlnDkVU2miFiXhcbLD21qYgdK0SyXiSm4boljdK03sVyPtA/viewform?embedded=true';

  const whatsappMessage = encodeURIComponent(
    `🔥 NEW ADMISSION INQUIRY - BALANCE BULL ACADEMY\n\n` +
    `👤 Name: ${formData.name}\n` +
    `📱 Mobile/WhatsApp: ${formData.phone}\n` +
    `📚 Interested Course: ${formData.course}\n` +
    `📍 Mode: ${formData.mode}\n` +
    `📈 Experience: ${formData.experience}\n\n` +
    `Hello Trader Punit Narang Sir, please confirm my Free Demo Class and share current batch fee details.`
  );

  const emailSubject = encodeURIComponent(`New Admission Form: ${formData.name} - ${formData.course}`);
  const emailBody = encodeURIComponent(
    `New Admission Form Submission:\n\n` +
    `Name: ${formData.name}\n` +
    `Phone: ${formData.phone}\n` +
    `Interested Course: ${formData.course}\n` +
    `Mode: ${formData.mode}\n` +
    `Experience: ${formData.experience}\n\n` +
    `Sent from Balance Bull Academy Website`
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Trigger WhatsApp directly in a new window/tab
    window.open(`https://wa.me/919999633109?text=${whatsappMessage}`, '_blank');
    setSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-neutral-950 border-2 border-amber-500/50 rounded-2xl shadow-2xl overflow-hidden my-6">
        
        {/* Top Promotional Announcement Header */}
        <div className="bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-neutral-950 px-4 py-2 text-xs font-bold flex items-center justify-between">
          <div className="flex items-center gap-1.5 truncate">
            <Gift className="w-4 h-4 shrink-0" />
            <span className="truncate">Special Admission Offer: Free Demo Pass + 1-on-1 Portfolio Review!</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-neutral-950 hover:bg-neutral-950/20 rounded-md transition-colors cursor-pointer shrink-0 ml-2"
            aria-label="Close Popup"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-4">
          
          {/* Brand Header */}
          <div className="flex items-center gap-3.5 pb-3 border-b border-neutral-800">
            <img
              src="/assets/aistudio/WhatsApp_Image_2026-10-21_at_11.35.54_d622ae91.jpeg"
              alt="Balance Bull Academy Logo - Trader Punit Narang"
              className="w-12 h-12 rounded-full object-cover ring-2 ring-amber-400 shrink-0"
              referrerPolicy="no-referrer"
            />
            <div className="flex-1 min-w-0">
              <h3 className="font-display font-extrabold text-base sm:text-lg text-white leading-tight truncate">
                Balance Bull Academy
              </h3>
              <p className="text-xs font-semibold text-amber-400 truncate">
                By Trader Punit Narang • 9999633109
              </p>
              <div className="flex items-center gap-2 text-[10px] text-neutral-400 mt-0.5">
                <span className="text-amber-400 font-bold">4.9★ Google Rated</span>
                <span>•</span>
                <span>5,000+ Students Mentored</span>
              </div>
            </div>
          </div>

          {/* Tab Switcher: Quick Form vs Google Form */}
          <div className="flex items-center gap-1 p-1 bg-neutral-900 border border-neutral-800 rounded-xl">
            <button
              onClick={() => setActiveTab('quick-form')}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                activeTab === 'quick-form'
                  ? 'bg-amber-400 text-neutral-950 shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Instant Quick Registration</span>
            </button>
            <button
              onClick={() => setActiveTab('google-form')}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                activeTab === 'google-form'
                  ? 'bg-amber-400 text-neutral-950 shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Official Google Form</span>
            </button>
          </div>

          {/* TAB 1: Quick Form */}
          {activeTab === 'quick-form' && (
            <div>
              {submitted ? (
                <div className="text-center py-6 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">Application Received!</h4>
                    <p className="text-xs text-neutral-300 mt-1 max-w-sm mx-auto">
                      Thank you, <strong className="text-white">{formData.name}</strong>. Your details have been sent directly to Trader Punit Narang’s official WhatsApp (<strong className="text-amber-400">9999633109</strong>).
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-neutral-900 border border-neutral-800 space-y-2.5 text-xs text-left">
                    <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                      <ShieldCheck className="w-4 h-4 shrink-0" />
                      <span>Instant Connect Options:</span>
                    </div>

                    <a
                      href={`https://wa.me/919999633109?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-2.5 px-3 rounded-lg bg-emerald-500 text-neutral-950 font-bold text-xs flex items-center justify-center gap-2 hover:bg-emerald-400 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 fill-neutral-950" />
                      <span>Chat on WhatsApp: 9999633109</span>
                    </a>

                    <a
                      href={`mailto:puneetnarang0021@gmail.com?subject=${emailSubject}&body=${emailBody}`}
                      className="w-full py-2 px-3 rounded-lg bg-neutral-800 text-neutral-200 font-semibold text-xs flex items-center justify-center gap-2 hover:bg-neutral-700 transition-colors"
                    >
                      <Mail className="w-4 h-4 text-amber-400" />
                      <span>Send Confirmation Email to Punit Sir</span>
                    </a>

                    <a
                      href={GOOGLE_FORM_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-2 px-3 rounded-lg bg-neutral-950 border border-neutral-800 text-amber-400 font-semibold text-xs flex items-center justify-center gap-2 hover:border-amber-400 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Also Fill Detailed Google Form</span>
                    </a>
                  </div>

                  <button
                    onClick={onClose}
                    className="text-xs font-medium text-neutral-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Close Window &amp; Explore Website
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div className="text-center sm:text-left space-y-0.5">
                    <p className="text-sm font-bold text-white">
                      Book Your Free Demo Class &amp; Fee Concession
                    </p>
                    <p className="text-xs text-neutral-400">
                      Fill this 30-second form to connect directly with Trader Punit Narang.
                    </p>
                  </div>

                  {/* Name & Phone in grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-neutral-300">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-neutral-300 flex items-center justify-between">
                        <span>Mobile (WhatsApp) *</span>
                        <span className="text-[10px] text-emerald-400">Direct Connect</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 9999633109"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Interested Course */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-neutral-300">
                      Interested Course / Strategy *
                    </label>
                    <select
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
                    >
                      <option value="Nifty & Bank Nifty Options Mastery">
                        Nifty &amp; Bank Nifty Options Mastery (Buying &amp; Selling)
                      </option>
                      <option value="Pure Price Action & Institutional SMC">
                        Pure Price Action &amp; Smart Money Concepts (Order Blocks)
                      </option>
                      <option value="Complete Beginner-to-Pro Stock Market Masterclass">
                        Complete Beginner-to-Pro Stock Market Masterclass (Zero to Hero)
                      </option>
                      <option value="Zero-to-Hero Expiry Day Strategy">
                        Zero-to-Hero Expiry Day Momentum Strategy
                      </option>
                      <option value="1-on-1 Personal Mentorship with Punit Narang">
                        1-on-1 Personal Mentorship with Trader Punit Narang
                      </option>
                    </select>
                  </div>

                  {/* Mode & Experience */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-neutral-300">
                        Learning Mode
                      </label>
                      <select
                        value={formData.mode}
                        onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-1.5 text-xs text-white focus:border-amber-400 focus:outline-none"
                      >
                        <option value="Offline Classroom (Delhi NCR)">Offline Classroom (Delhi NCR)</option>
                        <option value="Live Online Interactive (Zoom)">Live Online Interactive (Zoom)</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-neutral-300">
                        Current Experience
                      </label>
                      <select
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-1.5 text-xs text-white focus:border-amber-400 focus:outline-none"
                      >
                        <option value="Complete Beginner (0-6 months)">Complete Beginner (Zero knowledge)</option>
                        <option value="Intermediate (Trading cash / losses)">Trading cash with losses</option>
                        <option value="Active Option Trader seeking consistency">Active Option Trader</option>
                      </select>
                    </div>
                  </div>

                  {/* Submission CTA */}
                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-neutral-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-xl shadow-amber-500/20 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-neutral-950" />
                    <span>Submit &amp; Connect on WhatsApp (9999633109)</span>
                  </button>

                  <div className="pt-1 flex items-center justify-between text-[11px] text-neutral-400">
                    <span className="flex items-center gap-1 text-emerald-400">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Direct to Trader Punit Narang
                    </span>
                    <a
                      href={GOOGLE_FORM_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="text-amber-400 hover:underline flex items-center gap-1"
                    >
                      <span>Or fill Google Form</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </form>
              )}
            </div>
          )}

          {/* TAB 2: Official Google Form */}
          {activeTab === 'google-form' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-neutral-300">
                <span className="font-semibold text-white">Official Google Form Registration</span>
                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-400 text-neutral-950 font-bold text-xs hover:bg-amber-300 transition-colors"
                >
                  <span>Open in Full Page</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Embedded Google Form Iframe */}
              <div className="rounded-xl overflow-hidden border border-neutral-800 bg-white h-[380px] sm:h-[420px]">
                <iframe
                  src={GOOGLE_FORM_EMBED_URL}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  title="Balance Bull Academy Official Google Form"
                  className="w-full h-full"
                >
                  Loading Google Form…
                </iframe>
              </div>

              <div className="p-3 bg-neutral-900 border border-neutral-800 rounded-xl flex flex-wrap items-center justify-between gap-2 text-xs">
                <div className="text-neutral-300 text-[11px]">
                  Filled the form? Notify Punit Sir for priority batch allotment:
                </div>
                <a
                  href={`https://wa.me/919999633109?text=Hello%20Trader%20Punit%20Narang,%20I%20have%20submitted%20the%20Official%20Google%20Form%20for%20Balance%20Bull%20Academy.%20Please%20confirm%20my%20seat.`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-[11px] flex items-center gap-1 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Notify via WhatsApp</span>
                </a>
              </div>
            </div>
          )}

        </div>

        {/* Footer Quick Contact */}
        <div className="px-5 py-3 bg-neutral-900/90 border-t border-neutral-800/80 flex flex-wrap items-center justify-between gap-2 text-[11px] text-neutral-400">
          <div className="flex items-center gap-3">
            <a href="tel:9999633109" className="hover:text-amber-400 flex items-center gap-1 transition-colors">
              <Phone className="w-3 h-3 text-amber-400" />
              <span>9999633109</span>
            </a>
            <span>•</span>
            <a href="mailto:puneetnarang0021@gmail.com" className="hover:text-amber-400 flex items-center gap-1 transition-colors truncate">
              <Mail className="w-3 h-3 text-amber-400" />
              <span>puneetnarang0021@gmail.com</span>
            </a>
          </div>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-white cursor-pointer ml-auto"
          >
            Remind me later
          </button>
        </div>

      </div>
    </div>
  );
};
