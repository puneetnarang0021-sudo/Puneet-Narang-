/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { MarketTicker } from './components/MarketTicker';
import { Hero } from './components/Hero';
import { WebinarSection } from './components/WebinarSection';
import { MentorSection } from './components/MentorSection';
import { OfficeGallery } from './components/OfficeGallery';
import { Curriculum } from './components/Curriculum';
import { RiskCalculator } from './components/RiskCalculator';
import { ReviewsSection } from './components/ReviewsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FreeDemoModal } from './components/FreeDemoModal';
import { FloatingActions } from './components/FloatingActions';
import { LeadPopupModal } from './components/LeadPopupModal';

export default function App() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [leadPopupOpen, setLeadPopupOpen] = useState(false);

  // Auto-trigger the Google Form & Admission Pop-up when opening the website
  useEffect(() => {
    const timer = setTimeout(() => {
      // Show popup automatically on initial arrival
      setLeadPopupOpen(true);
    }, 2400);

    return () => clearTimeout(timer);
  }, []);

  const handleOpenDemo = () => {
    setDemoModalOpen(true);
  };

  const handleCloseDemo = () => {
    setDemoModalOpen(false);
  };

  const handleOpenLeadPopup = () => {
    setLeadPopupOpen(true);
  };

  const handleCloseLeadPopup = () => {
    setLeadPopupOpen(false);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-amber-400 selection:text-neutral-950">
      {/* Navigation Bar */}
      <Navbar onOpenDemo={handleOpenDemo} onOpenForm={handleOpenLeadPopup} />

      {/* Live Financial Market Ticker */}
      <MarketTicker />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenDemo={handleOpenDemo} onOpenForm={handleOpenLeadPopup} />

        {/* Featured Masterclasses: Motilal Oswal & Upsurge.club Webinars */}
        <WebinarSection onOpenDemo={handleOpenDemo} />

        {/* Meet The Mentor: Trader Punit Narang */}
        <MentorSection onOpenDemo={handleOpenDemo} />

        {/* Office & Classroom Gallery: Where Students Learn Real Trading */}
        <OfficeGallery onOpenDemo={handleOpenDemo} />

        {/* Course Curriculum & Syllabus */}
        <Curriculum onOpenDemo={handleOpenDemo} />

        {/* Interactive Risk & Position Sizing Calculator */}
        <RiskCalculator onOpenDemo={handleOpenDemo} />

        {/* Student Reviews & Google 4.9★ Ratings */}
        <ReviewsSection onOpenDemo={handleOpenDemo} />

        {/* Contact, Counseling Form & SEO FAQs */}
        <ContactSection onOpenDemo={handleOpenDemo} />
      </main>

      {/* Site Footer */}
      <Footer onOpenDemo={handleOpenDemo} />

      {/* Interactive Free Demo Booking Modal */}
      <FreeDemoModal isOpen={demoModalOpen} onClose={handleCloseDemo} />

      {/* Google Form & Admission Lead Popup (Pops up on website open) */}
      <LeadPopupModal isOpen={leadPopupOpen} onClose={handleCloseLeadPopup} />

      {/* Floating WhatsApp Action & Mobile Sticky Bar with Form Button */}
      <FloatingActions onOpenDemo={handleOpenDemo} onOpenForm={handleOpenLeadPopup} />
    </div>
  );
}
