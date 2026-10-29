import React, { useState } from 'react';
import { Monitor, Wifi, Users, Building, ShieldCheck, MapPin } from 'lucide-react';
import classroomImg from '../assets/images/trading_academy_classroom_1792563260521.jpg';
import deskImg from '../assets/images/trading_desk_office_1792563260968.jpg';
import sessionImg from '../assets/images/student_practical_session_1792563260774.jpg';

interface OfficeGalleryProps {
  onOpenDemo: () => void;
}

export const OfficeGallery: React.FC<OfficeGalleryProps> = ({ onOpenDemo }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'classroom' | 'trading-floor'>('all');

  const galleryItems = [
    {
      id: 'classroom',
      title: 'State-Of-The-Art Trading Academy Classroom',
      category: 'classroom',
      description: 'Students actively trading during live market hours (9:15 AM - 3:30 PM) with multi-screen setups, live candlestick charts, and instant mentor feedback.',
      image: classroomImg,
      tag: 'Live Market Floor',
    },
    {
      id: 'session',
      title: 'Practical Nifty & BankNifty Live Analysis Session',
      category: 'classroom',
      description: 'Interactive group breakdown of intraday price action, breakout verifications, and real-time order flow on large institutional display boards.',
      image: sessionImg,
      tag: 'Interactive Analysis',
    },
    {
      id: 'desk',
      title: 'Professional Multi-Monitor Trading Workstations',
      category: 'trading-floor',
      description: 'Institutional-grade quad-monitor workstations configured with multi-timeframe charts, option chain telemetry, and market depth.',
      image: deskImg,
      tag: 'Pro Trading Desk',
    },
  ];

  const filteredItems = activeTab === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab);

  return (
    <section id="academy" className="py-16 sm:py-24 bg-neutral-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-wider uppercase">
              <Building className="w-4 h-4" />
              <span>Offline Center &amp; Live Trading Floor</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Where Real Students Learn Real Trading
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base max-w-2xl">
              Trading cannot be learned through pre-recorded cartoon videos. At Balance Bull Academy, students sit inside our high-tech training center and trade with Trader Punit Narang during actual market hours.
            </p>
          </div>

          {/* Interactive filter control */}
          <div className="flex items-center gap-1.5 p-1 bg-neutral-900 border border-neutral-800 rounded-xl shrink-0">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-amber-400 text-neutral-950 shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              All Spaces
            </button>
            <button
              onClick={() => setActiveTab('classroom')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeTab === 'classroom'
                  ? 'bg-amber-400 text-neutral-950 shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Classroom &amp; Sessions
            </button>
            <button
              onClick={() => setActiveTab('trading-floor')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeTab === 'trading-floor'
                  ? 'bg-amber-400 text-neutral-950 shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Trading Desks
            </button>
          </div>
        </div>

        {/* Gallery Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-neutral-900/80 border border-neutral-800/90 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all duration-300 flex flex-col shadow-xl"
            >
              {/* Image Container with Fallback */}
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
                <span className="absolute bottom-3 left-3 text-[11px] font-bold text-amber-300 bg-neutral-950/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-amber-500/30">
                  {item.tag}
                </span>
              </div>

              {/* Content Block */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400">
                  <span className="flex items-center gap-1.5">
                    <Monitor className="w-3.5 h-3.5 text-amber-400" />
                    <span>Dual Screen Desk</span>
                  </span>
                  <span className="text-amber-400 font-medium">9:15 AM - 3:30 PM</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Physical Facility Amenities Row */}
        <div className="mt-12 p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 text-amber-400">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Live Market Floor</h4>
              <p className="text-xs text-neutral-400 mt-0.5">
                Practice trades side-by-side with Punit Sir during active NSE trading hours.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 text-emerald-400">
              <Wifi className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Ultra-Fast Infrastructure</h4>
              <p className="text-xs text-neutral-400 mt-0.5">
                Redundant high-speed leased line internet &amp; zero-latency charting terminals.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 text-amber-400">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Central Delhi NCR Hub</h4>
              <p className="text-xs text-neutral-400 mt-0.5">
                Easily accessible via Metro with ample parking and executive classrooms.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 text-emerald-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Lifetime Academy Access</h4>
              <p className="text-xs text-neutral-400 mt-0.5">
                Re-attend any future batch offline or online without paying extra course fees.
              </p>
            </div>
          </div>
        </div>

        {/* Schedule a Visit CTA */}
        <div className="mt-8 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="text-xs sm:text-sm text-neutral-300">
            Want to visit our training floor in person before deciding?
          </p>
          <button
            onClick={onOpenDemo}
            className="px-4 py-2 rounded-lg text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-md cursor-pointer"
          >
            Schedule Free Academy Tour &amp; Demo
          </button>
        </div>
      </div>
    </section>
  );
};
