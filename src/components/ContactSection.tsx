import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock, ChevronDown, ChevronUp, Send, CheckCircle2, ShieldCheck, ExternalLink } from 'lucide-react';
import {
  dispatchLeadDirectly,
  getWhatsAppUrl,
  getEmailUrl,
  GOOGLE_FORM_URL,
  OFFICIAL_PHONE,
  OFFICIAL_EMAIL,
} from '../utils/leadDispatch';

interface ContactSectionProps {
  onOpenDemo: () => void;
}

const FAQS = [
  {
    q: 'Why choose Balance Bull Academy by Trader Punit Narang over other institutes?',
    a: 'Unlike generic coaching institutes that rely on pre-recorded videos and theoretical textbooks, Balance Bull Academy provides 100% practical training during live market hours (9:15 AM to 3:30 PM). Trader Punit Narang brings over 12 years of real execution experience in Nifty & BankNifty derivatives, teaching pure price action, order flow, and mathematical risk management.',
  },
  {
    q: 'I am a complete beginner with zero finance background. Can I learn?',
    a: 'Yes, absolutely. Over 65% of our successful alumni started with zero market background. Our 6-week curriculum begins with basic candlestick structure, support/resistance, and chart reading before advancing into option Greeks and momentum setups.',
  },
  {
    q: 'How does the Free Demo Class work?',
    a: 'In the Free Demo Session, you get to experience Trader Punit Narang’s live market chart reading, understand how institutional price action differs from retail indicators, and see how our live trading floor operates. You can book it online or via WhatsApp at 9999633109.',
  },
  {
    q: 'Are offline classes available in Delhi NCR?',
    a: 'Yes! We have an executive stock trading floor and classroom facility in Delhi NCR with quad-monitor workstations, high-speed dual internet lines, and real-time chart screens. We also run high-definition live online batches for students across India and overseas.',
  },
  {
    q: 'Do you provide tips or call recommendations?',
    a: 'No. Balance Bull Academy is strictly an educational and mentorship institution. We do not run paid Telegram tip channels or advisory services. Our entire mission is to make YOU an independent, disciplined trader who never needs to ask anyone else for tips.',
  },
  {
    q: 'What is the batch timing and duration?',
    a: 'We offer two flexible schedules: Regular Live Market Batches (Monday to Friday, 9:15 AM to 3:30 PM) and Weekend Masterclass Batches (Saturday & Sunday) specifically designed for working professionals and business owners.',
  },
];

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenDemo }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const leadPayload = {
    type: 'Counseling Request' as const,
    name: formData.name,
    phone: formData.phone,
    email: formData.email,
    message: formData.message,
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Instant direct dispatch to Trader Punit Narang's WhatsApp (9999633109)
    dispatchLeadDirectly(leadPayload);
    setFormSubmitted(true);
  };

  const whatsappUrl = getWhatsAppUrl(leadPayload);
  const emailUrl = getEmailUrl(leadPayload);

  return (
    <section id="contact" className="py-16 sm:py-24 bg-neutral-950 relative border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Left Column: Direct Academy Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">
                Get In Touch Directly
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Connect With Balance Bull Academy
              </h2>
              <p className="text-neutral-400 text-sm">
                Have questions regarding batch schedules, course modules, or classroom visits? Talk directly to Trader Punit Narang’s admissions desk.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-3.5">
              <a
                href={`tel:${OFFICIAL_PHONE}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 hover:border-amber-400/50 transition-colors group"
              >
                <div className="w-11 h-11 rounded-xl bg-amber-400/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-neutral-400">Direct Contact Number / Call Desk</p>
                  <p className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                    +91 {OFFICIAL_PHONE}
                  </p>
                </div>
              </a>

              <a
                href={`https://wa.me/91${OFFICIAL_PHONE}?text=Hello%20Trader%20Punit%20Narang,%20I%20want%20to%20know%20more%20about%20Balance%20Bull%20Academy.`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 hover:border-emerald-400/50 transition-colors group"
              >
                <div className="w-11 h-11 rounded-xl bg-emerald-400/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-neutral-400">WhatsApp Quick Chat</p>
                  <p className="text-base font-bold text-emerald-400 group-hover:text-emerald-300 transition-colors">
                    +91 {OFFICIAL_PHONE}
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${OFFICIAL_EMAIL}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 hover:border-amber-400/50 transition-colors group"
              >
                <div className="w-11 h-11 rounded-xl bg-amber-400/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs text-neutral-400">Official Email Inquiries</p>
                  <p className="text-sm sm:text-base font-bold text-white group-hover:text-amber-400 transition-colors truncate">
                    {OFFICIAL_EMAIL}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-neutral-900/80 border border-neutral-800">
                <div className="w-11 h-11 rounded-xl bg-amber-400/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-neutral-400">Academy Operating Hours</p>
                  <p className="text-sm font-bold text-white">
                    Mon - Sat: 9:00 AM – 7:00 PM IST
                  </p>
                </div>
              </div>

              {/* Official Google Form Direct Card */}
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-amber-500/10 border border-amber-500/40 hover:bg-amber-500/20 transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-amber-400/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 group-hover:scale-105 transition-transform">
                  <span className="font-bold text-lg">G</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-amber-400 font-semibold uppercase tracking-wider">Official Admission Form</p>
                  <p className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                    Click to Open Google Form Registration
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Instant Message / Callback Form */}
          <div className="lg:col-span-7 bg-neutral-900/90 border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
            {formSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-bold text-emerald-400">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Direct Message Sent to {OFFICIAL_PHONE}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-2">Inquiry Dispatched Directly!</h3>
                  <p className="text-neutral-300 text-sm max-w-md mx-auto mt-1 leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Your message was sent straight to <strong className="text-amber-400">Trader Punit Narang’s personal desk ({OFFICIAL_PHONE})</strong>.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-left space-y-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 px-4 rounded-xl font-bold text-xs text-neutral-950 bg-emerald-400 hover:bg-emerald-300 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-neutral-950" />
                    <span>Open / Resend WhatsApp Directly ({OFFICIAL_PHONE})</span>
                  </a>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <a
                      href={emailUrl}
                      className="py-2.5 px-3 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-amber-400 text-neutral-200 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5 text-amber-400" />
                      <span>Send Backup Email</span>
                    </a>

                    <a
                      href={GOOGLE_FORM_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="py-2.5 px-3 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-amber-400 text-amber-400 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Open Google Form</span>
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer pt-2"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white">Request a Callback / Counseling</h3>
                  <p className="text-xs text-neutral-400 mt-1">
                    Fill in your details below to directly message Trader Punit Narang on WhatsApp ({OFFICIAL_PHONE}).
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-neutral-300">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3.5 py-2.5 text-sm text-white focus:border-amber-400 focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-neutral-300 flex items-center justify-between">
                      <span>Mobile (WhatsApp) *</span>
                      <span className="text-[10px] text-emerald-400">Direct to {OFFICIAL_PHONE}</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3.5 py-2.5 text-sm text-white focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-neutral-300">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3.5 py-2.5 text-sm text-white focus:border-amber-400 focus:outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-neutral-300">
                    Your Current Trading Experience or Questions
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Complete beginner / interested in BankNifty Option Buying..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3.5 py-2.5 text-sm text-white focus:border-amber-400 focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl font-extrabold text-sm sm:text-base text-neutral-950 bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-400 hover:from-emerald-300 hover:to-emerald-400 transition-all shadow-xl shadow-emerald-500/25 active:scale-[0.98] flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-neutral-950 text-neutral-950" />
                  <span>Send on WhatsApp to Trader Punit Narang ({OFFICIAL_PHONE})</span>
                </button>

                <div className="flex items-center justify-between text-[11px] text-neutral-400 pt-1">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Direct to {OFFICIAL_PHONE}
                  </span>
                  <a
                    href={GOOGLE_FORM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="text-amber-400 hover:underline flex items-center gap-1"
                  >
                    <span>Google Form</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* SEO FAQ Section */}
        <div className="pt-12 border-t border-neutral-800/80">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
            <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">
              Frequently Asked Questions
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Everything You Need to Know
            </h3>
          </div>

          <div className="max-w-4xl mx-auto space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-neutral-900/60 border border-neutral-800 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-neutral-900 transition-colors"
                  >
                    <span className="text-sm sm:text-base font-bold text-white">
                      {faq.q}
                    </span>
                    <span className="text-amber-400 shrink-0">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-neutral-800/60">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
