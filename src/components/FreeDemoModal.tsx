import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, CheckCircle, MessageCircle, Phone, Sparkles, ShieldCheck, Mail, ExternalLink, Send } from 'lucide-react';
import type { DemoBooking } from '../types';
import { dispatchLeadDirectly, getWhatsAppUrl, getEmailUrl, GOOGLE_FORM_URL, OFFICIAL_PHONE, OFFICIAL_EMAIL } from '../utils/leadDispatch';

interface FreeDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FreeDemoModal: React.FC<FreeDemoModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [booking, setBooking] = useState<DemoBooking>({
    fullName: '',
    mobile: '',
    email: '',
    mode: 'offline',
    slot: 'Upcoming Saturday 11:00 AM IST',
    experience: 'Beginner (0-6 months)',
  });

  if (!isOpen) return null;

  const leadPayload = {
    type: 'Free Demo Class' as const,
    name: booking.fullName,
    phone: booking.mobile,
    email: booking.email,
    mode: booking.mode === 'offline' ? 'Offline Classroom (Delhi NCR)' : 'Live Online Interactive (Zoom)',
    slot: booking.slot,
    experience: booking.experience,
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!booking.fullName || !booking.mobile) return;

    setIsSubmitting(true);

    // Instant direct dispatch to Trader Punit Narang's WhatsApp (9999633109)
    dispatchLeadDirectly(leadPayload);

    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  const whatsappUrl = getWhatsAppUrl(leadPayload);
  const emailUrl = getEmailUrl(leadPayload);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-lg bg-neutral-950 border border-amber-500/40 rounded-2xl shadow-2xl p-5 sm:p-7 my-6 text-neutral-100">
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-900 transition-colors cursor-pointer"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          /* Confirmation View - Explicit notification that message was sent directly */
          <div className="text-center space-y-4 py-2">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-bold text-emerald-400 tracking-wide">
                <CheckCircle className="w-3.5 h-3.5" />
                Direct Message Dispatched to 9999633109
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-2">
                Demo Class Registered!
              </h3>
              <p className="text-xs text-neutral-300 mt-1.5 leading-relaxed">
                Thank you, <strong className="text-white">{booking.fullName}</strong>. Your registration has been sent directly to <strong className="text-amber-400">Trader Punit Narang’s personal WhatsApp desk ({OFFICIAL_PHONE})</strong> for immediate confirmation.
              </p>
            </div>

            {/* Registration Details Summary Card */}
            <div className="p-3.5 rounded-xl bg-neutral-900/90 border border-neutral-800 text-left space-y-2 text-xs">
              <div className="flex items-center justify-between text-neutral-400 pb-1.5 border-b border-neutral-800">
                <span>Selected Mode:</span>
                <span className="font-semibold text-white">
                  {booking.mode === 'offline' ? 'Offline (Delhi NCR)' : 'Live Online (Zoom)'}
                </span>
              </div>
              <div className="flex items-center justify-between text-neutral-400 pb-1.5 border-b border-neutral-800">
                <span>Session Slot:</span>
                <span className="font-semibold text-amber-400">{booking.slot}</span>
              </div>
              <div className="flex items-center justify-between text-neutral-400">
                <span>Registered Phone:</span>
                <span className="font-mono font-semibold text-white">{booking.mobile}</span>
              </div>
            </div>

            {/* Direct Multi-Channel Connect Options */}
            <div className="p-4 rounded-xl bg-neutral-900 border border-amber-500/30 space-y-2.5 text-left">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Instant Connect &amp; Backup Channels</span>
              </div>
              <p className="text-[11px] text-neutral-400">
                WhatsApp was opened automatically. If your browser blocked the window or you need to re-open the chat, tap below:
              </p>

              {/* Primary Direct WhatsApp Action */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 px-4 rounded-xl font-bold text-xs text-neutral-950 bg-emerald-400 hover:bg-emerald-300 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-neutral-950" />
                <span>Open / Send WhatsApp Direct ({OFFICIAL_PHONE})</span>
              </a>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                {/* Email Option */}
                <a
                  href={emailUrl}
                  className="py-2.5 px-3 rounded-lg bg-neutral-950 border border-neutral-800 hover:border-amber-400/50 text-neutral-200 hover:text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                  <span>Send Copy to Email</span>
                </a>

                {/* Google Form Option */}
                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="py-2.5 px-3 rounded-lg bg-neutral-950 border border-neutral-800 hover:border-amber-400/50 text-amber-400 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open Google Form</span>
                </a>
              </div>

              {/* Direct Call */}
              <a
                href={`tel:${OFFICIAL_PHONE}`}
                className="w-full py-2 px-3 rounded-lg text-neutral-300 hover:text-white text-xs font-medium flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Need immediate help? Call {OFFICIAL_PHONE}</span>
              </a>
            </div>

            <button
              onClick={handleReset}
              className="text-xs font-medium text-neutral-400 hover:text-white transition-colors cursor-pointer pt-1"
            >
              Done / Return to Website
            </button>
          </div>
        ) : (
          /* Form View */
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Book Free Live Demo Class</h3>
                <p className="text-xs text-amber-400 font-medium">
                  Direct Submission to Trader Punit Narang ({OFFICIAL_PHONE})
                </p>
              </div>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed">
              Experience our live market Price Action &amp; Option strategies. Submitting this form directly notifies Trader Punit Narang via WhatsApp and Email instantly.
            </p>

            {/* Mode Selection */}
            <div className="space-y-1.5 pt-1">
              <label className="text-xs font-semibold text-neutral-300">
                Choose Attendance Mode
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setBooking({ ...booking, mode: 'offline' })}
                  className={`py-2 px-3 text-xs font-semibold rounded-lg border flex items-center justify-center gap-2 cursor-pointer transition-all ${
                    booking.mode === 'offline'
                      ? 'bg-amber-400 text-neutral-950 border-amber-400 font-bold shadow'
                      : 'bg-neutral-900 text-neutral-400 border-neutral-800 hover:border-neutral-700'
                  }`}
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Offline (Delhi NCR)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setBooking({ ...booking, mode: 'online' })}
                  className={`py-2 px-3 text-xs font-semibold rounded-lg border flex items-center justify-center gap-2 cursor-pointer transition-all ${
                    booking.mode === 'online'
                      ? 'bg-amber-400 text-neutral-950 border-amber-400 font-bold shadow'
                      : 'bg-neutral-900 text-neutral-400 border-neutral-800 hover:border-neutral-700'
                  }`}
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Live Online (Zoom)</span>
                </button>
              </div>
            </div>

            {/* Slot Selection */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-neutral-300 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>Select Demo Session Slot</span>
              </label>
              <select
                value={booking.slot}
                onChange={(e) => setBooking({ ...booking, slot: e.target.value })}
                className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
              >
                <option value="Upcoming Saturday 11:00 AM IST">
                  Saturday 11:00 AM IST (Weekend Special Masterclass)
                </option>
                <option value="Upcoming Sunday 4:00 PM IST">
                  Sunday 4:00 PM IST (Option Strategies Deep Dive)
                </option>
                <option value="Live Market Hours 10:00 AM - 11:30 AM (Mon-Fri)">
                  Live Market Hours (10:00 AM - 11:30 AM IST Mon-Fri)
                </option>
              </select>
            </div>

            {/* Full Name */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-neutral-300">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Mohit Aggarwal"
                value={booking.fullName}
                onChange={(e) => setBooking({ ...booking, fullName: e.target.value })}
                className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3.5 py-2 text-xs sm:text-sm text-white focus:border-amber-400 focus:outline-none"
              />
            </div>

            {/* Mobile & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-neutral-300 flex items-center justify-between">
                  <span>Mobile (WhatsApp) *</span>
                  <span className="text-[10px] text-emerald-400">Direct to {OFFICIAL_PHONE}</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9876543210"
                  value={booking.mobile}
                  onChange={(e) => setBooking({ ...booking, mobile: e.target.value })}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3.5 py-2 text-xs sm:text-sm text-white focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-neutral-300">
                  Email Address (Optional)
                </label>
                <input
                  type="email"
                  placeholder="mohit@example.com"
                  value={booking.email}
                  onChange={(e) => setBooking({ ...booking, email: e.target.value })}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3.5 py-2 text-xs sm:text-sm text-white focus:border-amber-400 focus:outline-none"
                />
              </div>
            </div>

            {/* Trading Experience */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-neutral-300">
                Your Stock Market Background
              </label>
              <select
                value={booking.experience}
                onChange={(e) => setBooking({ ...booking, experience: e.target.value })}
                className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
              >
                <option value="Beginner (0-6 months)">Complete Beginner (Zero market knowledge)</option>
                <option value="Intermediate (Trading cash / losses in F&O)">
                  Have traded in cash/intraday with inconsistent results
                </option>
                <option value="Active Option Trader seeking consistency">
                  Active in Nifty/BankNifty looking for institutional risk edge
                </option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-4 rounded-xl font-bold text-sm text-neutral-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all shadow-lg shadow-amber-500/20 active:scale-[0.98] cursor-pointer mt-2 flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4 text-neutral-950" />
              <span>Confirm &amp; Send Directly to Punit Narang (9999633109)</span>
            </button>

            <div className="flex items-center justify-between text-[11px] text-neutral-400 pt-1">
              <span className="flex items-center gap-1 text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                Instant message directly to 9999633109
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
  );
};
