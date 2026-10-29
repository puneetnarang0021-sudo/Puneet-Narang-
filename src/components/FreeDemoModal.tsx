import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, CheckCircle, MessageCircle, Phone, Sparkles, ShieldCheck } from 'lucide-react';
import type { DemoBooking } from '../types';

interface FreeDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FreeDemoModal: React.FC<FreeDemoModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [booking, setBooking] = useState<DemoBooking>({
    fullName: '',
    mobile: '',
    email: '',
    mode: 'offline',
    slot: 'Upcoming Saturday 11:00 AM IST',
    experience: 'Beginner (0-6 months)',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!booking.fullName || !booking.mobile) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Trader Punit Narang Sir, I have booked a Free Demo Session for Balance Bull Academy!\n\nName: ${booking.fullName}\nPhone: ${booking.mobile}\nMode: ${booking.mode === 'offline' ? 'Offline Classroom (Delhi NCR)' : 'Live Online Interactive'}\nSlot: ${booking.slot}\nExperience: ${booking.experience}\n\nPlease confirm my demo seat.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-lg bg-neutral-950 border border-amber-500/40 rounded-2xl shadow-2xl p-6 sm:p-8 my-8 text-neutral-100">
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-900 transition-colors cursor-pointer"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          /* Confirmation View */
          <div className="text-center space-y-5 py-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div>
              <span className="text-[11px] font-bold text-amber-400 tracking-wider uppercase">
                Seat Reserved • Free Demo Pass
              </span>
              <h3 className="text-2xl font-extrabold text-white mt-1">
                Demo Class Booked Successfully!
              </h3>
              <p className="text-xs text-neutral-300 mt-2">
                Welcome, <strong className="text-white">{booking.fullName}</strong>. Your provisional seat for the{' '}
                <span className="text-amber-400 font-semibold">{booking.slot}</span> ({booking.mode === 'offline' ? 'Offline Delhi Center' : 'Live Online Zoom'}) has been reserved.
              </p>
            </div>

            {/* Direct Connect Options */}
            <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 space-y-3 text-left">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
                <span>Instant Confirmation with Trader Punit Narang</span>
              </div>
              <p className="text-xs text-neutral-400">
                Tap below to send your reservation directly to Punit Sir’s personal desk on WhatsApp for instant VIP confirmation and location link.
              </p>

              <a
                href={`https://wa.me/919999633109?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 px-4 rounded-xl font-bold text-xs text-neutral-950 bg-emerald-400 hover:bg-emerald-300 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm Instantly via WhatsApp (9999633109)</span>
              </a>

              <a
                href="tel:9999633109"
                className="w-full py-2.5 px-4 rounded-xl font-semibold text-xs text-neutral-200 bg-neutral-950 hover:bg-neutral-800 border border-neutral-800 flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Call Admissions: +91 9999633109</span>
              </a>
            </div>

            <button
              onClick={handleReset}
              className="text-xs font-medium text-neutral-400 hover:text-white transition-colors cursor-pointer"
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
                  Balance Bull Academy by Trader Punit Narang
                </p>
              </div>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed">
              Experience our live market Price Action &amp; Option strategies firsthand. No fees, no obligations.
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
                <label className="text-xs font-semibold text-neutral-300">
                  Mobile (WhatsApp) *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9999633109"
                  value={booking.mobile}
                  onChange={(e) => setBooking({ ...booking, mobile: e.target.value })}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3.5 py-2 text-xs sm:text-sm text-white focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-neutral-300">
                  Email Address
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
              className="w-full py-3.5 px-4 rounded-xl font-bold text-sm text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-lg shadow-amber-500/20 cursor-pointer mt-2"
            >
              Confirm Free Demo Registration
            </button>

            <p className="text-[10px] text-neutral-500 text-center">
              100% Free · No credit card required · Instant WhatsApp confirmation
            </p>
          </form>
        )}
      </div>
    </div>
  );
};
