import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, MessageCircle, Phone, Sparkles, ShieldCheck, Mail, ExternalLink, ArrowRight } from 'lucide-react';
import type { DemoBooking } from '../types';
import { dispatchLeadDirectly, getWhatsAppUrl, getEmailUrl, GOOGLE_FORM_URL, OFFICIAL_PHONE, OFFICIAL_EMAIL } from '../utils/leadDispatch';

interface FreeDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FreeDemoModal: React.FC<FreeDemoModalProps> = ({ isOpen, onClose }) => {
  const [messageSent, setMessageSent] = useState(false);
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

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!booking.fullName || !booking.mobile) return;

    // Direct WhatsApp message trigger directly to Trader Punit Narang (9999633109)
    dispatchLeadDirectly(leadPayload);
    setMessageSent(true);
  };

  const handleReset = () => {
    setMessageSent(false);
    onClose();
  };

  const whatsappUrl = getWhatsAppUrl(leadPayload);
  const emailUrl = getEmailUrl(leadPayload);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-lg bg-neutral-950 border border-emerald-500/40 rounded-2xl shadow-2xl p-5 sm:p-7 my-6 text-neutral-100">
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-900 transition-colors cursor-pointer"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {messageSent ? (
          /* Post-Click Screen - Direct WhatsApp Confirmation (No "booked" claim) */
          <div className="text-center space-y-4 py-2">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 flex items-center justify-center mx-auto animate-pulse">
              <MessageCircle className="w-8 h-8 fill-emerald-400 text-neutral-950" />
            </div>

            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-bold text-emerald-400 tracking-wide">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                WhatsApp Message Dispatched to {OFFICIAL_PHONE}
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-2">
                Connecting with Trader Punit Narang
              </h3>
              <p className="text-xs text-neutral-300 mt-1.5 leading-relaxed">
                Hello <strong className="text-white">{booking.fullName}</strong>! Your demo session details are ready to send directly to Trader Punit Narang on WhatsApp (<strong className="text-emerald-400">{OFFICIAL_PHONE}</strong>).
              </p>
            </div>

            {/* Session Summary Card */}
            <div className="p-3.5 rounded-xl bg-neutral-900/90 border border-neutral-800 text-left space-y-2 text-xs">
              <div className="flex items-center justify-between text-neutral-400 pb-1.5 border-b border-neutral-800">
                <span>Selected Mode:</span>
                <span className="font-semibold text-white">
                  {booking.mode === 'offline' ? 'Offline (Delhi NCR)' : 'Live Online (Zoom)'}
                </span>
              </div>
              <div className="flex items-center justify-between text-neutral-400 pb-1.5 border-b border-neutral-800">
                <span>Preferred Slot:</span>
                <span className="font-semibold text-amber-400">{booking.slot}</span>
              </div>
              <div className="flex items-center justify-between text-neutral-400">
                <span>Your Phone:</span>
                <span className="font-mono font-semibold text-white">{booking.mobile}</span>
              </div>
            </div>

            {/* Direct WhatsApp Big Action Button */}
            <div className="p-4 rounded-xl bg-neutral-900 border border-emerald-500/30 space-y-2.5 text-left">
              <p className="text-[11px] text-neutral-300 text-center">
                If WhatsApp didn't open automatically, tap below to chat directly with Punit Sir:
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 px-4 rounded-xl font-extrabold text-sm text-neutral-950 bg-emerald-400 hover:bg-emerald-300 transition-all flex items-center justify-center gap-2.5 shadow-xl shadow-emerald-500/30 active:scale-[0.98] cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-neutral-950" />
                <span>Open WhatsApp Direct ({OFFICIAL_PHONE})</span>
              </a>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                {/* Email Option */}
                <a
                  href={emailUrl}
                  className="py-2.5 px-3 rounded-lg bg-neutral-950 border border-neutral-800 hover:border-amber-400/50 text-neutral-200 hover:text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                  <span>Send via Email</span>
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
                <span>Or Call Direct: +91 {OFFICIAL_PHONE}</span>
              </a>
            </div>

            <button
              onClick={handleReset}
              className="text-xs font-medium text-neutral-400 hover:text-white transition-colors cursor-pointer pt-1"
            >
              Close / Return to Website
            </button>
          </div>
        ) : (
          /* Main Form View with Direct WhatsApp Button */
          <form onSubmit={handleSendWhatsApp} className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                <MessageCircle className="w-5 h-5 fill-emerald-400 text-neutral-950" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Free Live Demo Class</h3>
                <p className="text-xs text-emerald-400 font-medium">
                  Direct WhatsApp to Trader Punit Narang ({OFFICIAL_PHONE})
                </p>
              </div>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed">
              Fill in your details below and tap the WhatsApp button to message Trader Punit Narang directly for demo timing and batch availability.
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

            {/* DIRECT WHATSAPP SUBMIT BUTTON */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-xl font-extrabold text-sm sm:text-base text-neutral-950 bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-400 hover:from-emerald-300 hover:to-emerald-400 transition-all shadow-xl shadow-emerald-500/25 active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2.5"
              >
                <MessageCircle className="w-5 h-5 fill-neutral-950 text-neutral-950 shrink-0" />
                <span>Send on WhatsApp to Trader Punit Narang ({OFFICIAL_PHONE})</span>
              </button>
              <p className="text-[11px] text-center text-neutral-400 mt-2">
                Clicking opens WhatsApp directly with your details to send to <strong className="text-white">+91 {OFFICIAL_PHONE}</strong>
              </p>
            </div>

            <div className="flex items-center justify-between text-[11px] text-neutral-400 pt-1 border-t border-neutral-900">
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
                <span>Or use Google Form</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
