import React, { useState, useEffect } from 'react';
import { Play, ExternalLink, Award, CheckCircle2, ShieldCheck, Sparkles, Share2, AlertCircle, MessageCircle, RefreshCw, Key, Video } from 'lucide-react';

interface WebinarSectionProps {
  onOpenDemo: () => void;
}

export const WebinarSection: React.FC<WebinarSectionProps> = ({ onOpenDemo }) => {
  const [copiedLink, setCopiedLink] = useState<string | null>(null);
  const [showZoomNotice, setShowZoomNotice] = useState(false);
  const [customMotilalUrl, setCustomMotilalUrl] = useState<string>('');
  const [isEditingUrl, setIsEditingUrl] = useState(false);
  const [inputUrl, setInputUrl] = useState('');

  // Default Zoom URL provided by user
  const defaultZoomUrl = 'https://zoom.us/rec/share/L4n9b53hBrf1or1n8YkihtqgmtO5BWPlYC7wusHj2VT1Wh6MWQrY1TY9Rtv8SUM.iJwSdIKblsuKLtGy';

  // Load custom URL if user saved one in localStorage (e.g. YouTube or Google Drive re-upload)
  useEffect(() => {
    const saved = localStorage.getItem('bba_motilal_webinar_url');
    if (saved) {
      setCustomMotilalUrl(saved);
      setInputUrl(saved);
    } else {
      setCustomMotilalUrl(defaultZoomUrl);
      setInputUrl(defaultZoomUrl);
    }
  }, []);

  const activeMotilalUrl = customMotilalUrl || defaultZoomUrl;

  const handleSaveCustomUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputUrl.trim()) {
      setCustomMotilalUrl(inputUrl.trim());
      localStorage.setItem('bba_motilal_webinar_url', inputUrl.trim());
      setIsEditingUrl(false);
    }
  };

  const handleResetUrl = () => {
    setCustomMotilalUrl(defaultZoomUrl);
    setInputUrl(defaultZoomUrl);
    localStorage.removeItem('bba_motilal_webinar_url');
    setIsEditingUrl(false);
  };

  const handleShare = (title: string, url: string) => {
    if (navigator.share) {
      navigator.share({ title, url }).catch(() => {});
    } else {
      navigator.clipboard.writeText(url);
      setCopiedLink(url);
      setTimeout(() => setCopiedLink(null), 2500);
    }
  };

  const isYouTubeUrl = (url: string) => {
    return url.includes('youtube.com') || url.includes('youtu.be');
  };

  const getYouTubeEmbedUrl = (url: string) => {
    try {
      if (url.includes('youtu.be/')) {
        const id = url.split('youtu.be/')[1]?.split('?')[0];
        return `https://www.youtube-nocookie.com/embed/${id}`;
      }
      if (url.includes('watch?v=')) {
        const id = url.split('watch?v=')[1]?.split('&')[0];
        return `https://www.youtube-nocookie.com/embed/${id}`;
      }
      if (url.includes('/live/')) {
        const id = url.split('/live/')[1]?.split('?')[0];
        return `https://www.youtube-nocookie.com/embed/${id}`;
      }
    } catch {
      return null;
    }
    return null;
  };

  return (
    <section id="webinars" className="py-16 sm:py-24 bg-neutral-900/60 relative border-t border-b border-neutral-800/90 overflow-hidden">
      {/* Background radial accent glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-amber-500/30 text-xs font-semibold text-amber-400 uppercase tracking-wider">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Institutional Industry Masterclasses</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Watch Trader Punit Narang in Action
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            Recognized and invited by India’s top financial brokerage houses and learning platforms. Watch these exclusive live sessions with <strong className="text-white">Motilal Oswal</strong> and <strong className="text-white">Upsurge.club</strong> to see our pure logic and Option trading strategies.
          </p>
        </div>

        {/* 2 Marquee Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: Motilal Oswal Live Option Webinar */}
          <div className="bg-neutral-950 border-2 border-amber-500/40 hover:border-amber-400/80 rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between transition-all duration-300 group">
            {/* Header Banner */}
            <div className="p-6 sm:p-7 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="px-3 py-1 rounded-md text-xs font-bold text-amber-300 bg-amber-500/20 border border-amber-500/40 uppercase tracking-wide">
                    Motilal Oswal Masterclass
                  </span>
                  <span className="text-xs text-neutral-400 font-medium">Live Institutional Webinar</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsEditingUrl(!isEditingUrl)}
                    className="p-1.5 text-xs text-neutral-400 hover:text-amber-400 transition-colors flex items-center gap-1 bg-neutral-900 border border-neutral-800 rounded-lg"
                    title="Update Video / Drive / YouTube Link"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline text-[11px]">Change Link</span>
                  </button>

                  <button
                    onClick={() =>
                      handleShare(
                        'Motilal Oswal Live Option Webinar with Trader Punit Narang',
                        activeMotilalUrl
                      )
                    }
                    className="p-1.5 text-neutral-400 hover:text-amber-400 transition-colors bg-neutral-900 border border-neutral-800 rounded-lg"
                    title="Share Webinar Link"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-400 transition-colors leading-snug">
                  Motilal Oswal Live Option Webinar by Trader Punit Narang
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 mt-2 leading-relaxed">
                  Official collaborative session with <strong className="text-amber-300">Motilal Oswal Financial Services</strong>. Trader Punit Narang decodes high-probability Index Option buying &amp; selling setups, institutional open interest dynamics, and risk management.
                </p>
              </div>

              {/* URL Customizer Form (Visible when user clicks 'Change Link') */}
              {isEditingUrl && (
                <form onSubmit={handleSaveCustomUrl} className="p-3.5 bg-neutral-900/90 border border-amber-500/40 rounded-xl space-y-2.5 text-xs">
                  <p className="font-semibold text-white flex items-center gap-1.5">
                    <Video className="w-4 h-4 text-amber-400" />
                    <span>Paste New Video / YouTube / Drive Link:</span>
                  </p>
                  <p className="text-[11px] text-neutral-400">
                    If you re-uploaded the Motilal Oswal webinar to YouTube, Google Drive, or Zoom, paste the new link below:
                  </p>
                  <div className="flex gap-2">
                    <input
                      type="url"
                      required
                      value={inputUrl}
                      onChange={(e) => setInputUrl(e.target.value)}
                      placeholder="https://youtu.be/... or https://drive.google.com/..."
                      className="flex-1 bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-1.5 text-xs text-white focus:border-amber-400 focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="px-3 py-1.5 bg-amber-400 text-neutral-950 font-bold rounded-lg text-xs hover:bg-amber-300 cursor-pointer"
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      onClick={handleResetUrl}
                      className="px-2.5 py-1.5 bg-neutral-800 text-neutral-300 rounded-lg text-xs hover:bg-neutral-700 cursor-pointer"
                    >
                      Reset
                    </button>
                  </div>
                </form>
              )}

              {/* Video Player or Zoom Cloud Screen */}
              {isYouTubeUrl(activeMotilalUrl) && getYouTubeEmbedUrl(activeMotilalUrl) ? (
                <div className="relative rounded-xl overflow-hidden aspect-video bg-neutral-900 border border-neutral-800 shadow-xl">
                  <iframe
                    src={getYouTubeEmbedUrl(activeMotilalUrl)!}
                    title="Motilal Oswal Live Option Webinar"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                </div>
              ) : (
                <div className="relative rounded-xl overflow-hidden aspect-video bg-neutral-900 border border-neutral-800 shadow-inner group/video">
                  <div className="absolute inset-0 bg-gradient-to-tr from-neutral-950 via-neutral-900 to-amber-950/40 flex flex-col items-center justify-center p-6 text-center">
                    <a
                      href={activeMotilalUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-amber-400 text-neutral-950 flex items-center justify-center shadow-xl shadow-amber-500/30 group-hover/video:scale-110 active:scale-95 transition-transform cursor-pointer"
                      title="Click to Open Zoom Recording"
                    >
                      <Play className="w-8 h-8 fill-neutral-950 ml-1" />
                    </a>

                    <div className="mt-4 space-y-1">
                      <span className="text-xs font-mono font-bold text-amber-300 tracking-wider uppercase">
                        Motilal Oswal Official Recording
                      </span>
                      <p className="text-sm font-semibold text-white">
                        Live Institutional Option Trading
                      </p>
                      <p className="text-xs text-neutral-400">
                        Speaker: Trader Punit Narang · Balance Bull Academy
                      </p>
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-neutral-950/80 backdrop-blur-md px-3 py-1 rounded-md text-[11px] text-amber-400 border border-amber-500/30">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified Institutional Masterclass</span>
                  </div>

                  <div className="absolute top-3 right-3 bg-red-600/90 text-white font-bold text-[10px] px-2.5 py-0.5 rounded tracking-wider uppercase shadow">
                    Zoom Recording
                  </div>
                </div>
              )}

              {/* Zoom Access / Passcode Notice Callout */}
              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 space-y-2">
                <div className="flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div className="text-xs text-neutral-300 space-y-1">
                    <p className="font-semibold text-white">
                      Notice Regarding Zoom Cloud Recording Access:
                    </p>
                    <p className="text-neutral-300 leading-relaxed text-[11px]">
                      Because Zoom cloud recordings are hosted on Motilal Oswal's corporate servers, Zoom may sometimes require a <strong className="text-amber-400 font-medium">passcode</strong> or display an expiration message after a scheduled period.
                    </p>
                  </div>
                </div>

                <div className="pt-1 flex flex-wrap items-center gap-2">
                  <a
                    href="https://wa.me/919999633109?text=Hello%20Trader%20Punit%20Narang%20Sir,%20the%20Motilal%20Oswal%20Zoom%20Webinar%20recording%20link%20is%20asking%20for%20a%20passcode%20or%20not%20playing.%20Please%20share%20the%20active%20passcode%20or%20backup%20video%20link."
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-semibold hover:bg-emerald-500/30 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Get Passcode / Video on WhatsApp (9999633109)</span>
                  </a>

                  <button
                    onClick={() => setShowZoomNotice(!showZoomNotice)}
                    className="text-[11px] text-neutral-400 hover:text-white underline cursor-pointer"
                  >
                    {showZoomNotice ? 'Hide details' : 'Why does Zoom do this?'}
                  </button>
                </div>

                {showZoomNotice && (
                  <div className="pt-2 text-[11px] text-neutral-400 border-t border-amber-500/20 space-y-1">
                    <p>• Corporate Zoom accounts automatically archive or lock recordings after 30–60 days to prevent unauthorized downloads.</p>
                    <p>• Zoom also enforces cross-origin security (`X-Frame-Options: DENY`), which prevents embedding Zoom players directly inside web pages.</p>
                    <p>• Trader Punit Narang has the master video file and can share the direct Google Drive / YouTube link with you upon request!</p>
                  </div>
                )}
              </div>

              {/* Key Highlights */}
              <div className="space-y-2 pt-1">
                <p className="text-xs font-bold text-neutral-300 uppercase tracking-wider">
                  Core Topics Covered in Motilal Oswal Webinar:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Nifty &amp; BankNifty Expiry Playbook</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Institutional PCR &amp; OI Trap Detection</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Non-Directional Credit Spread Hedging</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Capital Allocation &amp; Drawdown Defense</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="p-6 bg-neutral-900/80 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-3">
              <a
                href="https://wa.me/919999633109?text=Hello%20Trader%20Punit%20Narang,%20please%20send%20me%20the%20active%20Motilal%20Oswal%20Webinar%20recording%20video."
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Mentor for Access</span>
              </a>

              <a
                href={activeMotilalUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-lg shadow-amber-500/20 active:scale-95"
              >
                <span>Try Opening Zoom Link</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 2: Upsurge Live Webinar about Option Greeks */}
          <div className="bg-neutral-950 border-2 border-emerald-500/40 hover:border-emerald-400/80 rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between transition-all duration-300 group">
            {/* Header Banner */}
            <div className="p-6 sm:p-7 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="px-3 py-1 rounded-md text-xs font-bold text-emerald-300 bg-emerald-500/20 border border-emerald-500/40 uppercase tracking-wide">
                    Upsurge.club Masterclass
                  </span>
                  <span className="text-xs text-neutral-400 font-medium">YouTube Live Stream (Full HD)</span>
                </div>

                <button
                  onClick={() =>
                    handleShare(
                      'Live Option Greeks Webinar with Upsurge and Trader Punit Narang',
                      'https://www.youtube.com/live/5lnxFu5Xt1A?si=eDC3oR_CKhKzQEXn'
                    )
                  }
                  className="p-1.5 text-neutral-400 hover:text-emerald-400 transition-colors bg-neutral-900 border border-neutral-800 rounded-lg"
                  title="Share Webinar Link"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors leading-snug">
                  Option Greeks Live Webinar with Upsurge &amp; Trader Punit Narang
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 mt-2 leading-relaxed">
                  Interactive masterclass on <strong className="text-emerald-300">Upsurge.club</strong>. Trader Punit Narang simplifies the mathematics of Delta, Gamma scalping, Theta time decay, and Vega volatility for retail traders.
                </p>
              </div>

              {/* Embedded YouTube Player: 100% Reliable & Plays Directly */}
              <div className="relative rounded-xl overflow-hidden aspect-video bg-neutral-900 border border-neutral-800 shadow-xl">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/5lnxFu5Xt1A"
                  title="Live Webinar with Upsurge about Option Greeks With Trader Punit Narang"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>

              {/* Key Highlights */}
              <div className="space-y-2 pt-2">
                <p className="text-xs font-bold text-neutral-300 uppercase tracking-wider">
                  Core Topics Covered in Upsurge Webinar:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Option Greeks in Everyday Hindi</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>How to Turn Theta Decay Into Profit</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Gamma Blast Timing on Weekly Expiries</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Live Interactive Audience Q&amp;A Session</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="p-6 bg-neutral-900/80 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-neutral-400 text-center sm:text-left">
                <span>Plays directly above or watch on YouTube</span>
              </div>

              <a
                href="https://www.youtube.com/live/5lnxFu5Xt1A?si=eDC3oR_CKhKzQEXn"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-neutral-950 bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-500/20 active:scale-95"
              >
                <span>Watch on YouTube</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Banner Linking to Free Demo Class */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-amber-500/10 via-neutral-900 to-emerald-500/10 border border-neutral-800 text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Want Personalized Mentorship?</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Learn Live With Trader Punit Narang at Balance Bull Academy
          </h3>
          <p className="text-xs sm:text-sm text-neutral-300 max-w-2xl mx-auto">
            These masterclasses give a glimpse into our trading logic. In our full 6-week mentorship, you sit on our live trading floor and execute real trades with Punit Sir during active market hours.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenDemo}
              className="px-6 py-3 rounded-xl font-bold text-sm text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-lg shadow-amber-500/20 cursor-pointer"
            >
              Book Free Live Demo Session
            </button>
            <a
              href="https://wa.me/919999633109?text=Hello%20Trader%20Punit%20Narang,%20I%20watched%20your%20webinar%20with%20Motilal%20Oswal%20and%20Upsurge%20and%20want%20to%20learn%20more."
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl font-semibold text-sm text-emerald-400 bg-neutral-900 border border-emerald-500/40 hover:bg-neutral-800 transition-colors"
            >
              Ask Questions on WhatsApp (9999633109)
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
