import React, { useEffect, useState } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import type { MarketIndex } from '../types';

const INITIAL_INDICES: MarketIndex[] = [
  { symbol: 'NIFTY 50', name: 'NSE Nifty', price: 24865.40, change: 148.65, percentChange: 0.60, isPositive: true },
  { symbol: 'BANK NIFTY', name: 'Nifty Bank', price: 51640.25, change: 342.10, percentChange: 0.67, isPositive: true },
  { symbol: 'FIN NIFTY', name: 'Nifty Financial', price: 23210.80, change: 94.30, percentChange: 0.41, isPositive: true },
  { symbol: 'SENSEX', name: 'BSE Sensex', price: 81480.90, change: 512.40, percentChange: 0.63, isPositive: true },
  { symbol: 'INDIA VIX', name: 'Volatility Index', price: 12.35, change: -0.42, percentChange: -3.29, isPositive: false },
  { symbol: 'MIDCAP NIFTY', name: 'Nifty Midcap 100', price: 13240.15, change: 110.50, percentChange: 0.84, isPositive: true },
];

export const MarketTicker: React.FC = () => {
  const [indices, setIndices] = useState<MarketIndex[]>(INITIAL_INDICES);

  // Subtle live tick simulation to give real financial market feel
  useEffect(() => {
    const interval = setInterval(() => {
      setIndices((prev) =>
        prev.map((item) => {
          const delta = (Math.random() - 0.48) * (item.price * 0.0003);
          const newPrice = Number((item.price + delta).toFixed(2));
          const newChange = Number((item.change + delta).toFixed(2));
          const newPercent = Number(((newChange / (newPrice - newChange)) * 100).toFixed(2));
          return {
            ...item,
            price: newPrice,
            change: newChange,
            percentChange: newPercent,
            isPositive: newChange >= 0,
          };
        })
      );
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-neutral-900/90 border-b border-neutral-800 text-xs py-2 px-4 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="hidden lg:flex items-center gap-2 shrink-0 pr-3 border-r border-neutral-800 text-neutral-400 font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>LIVE MARKET HOURS</span>
        </div>

        <div className="flex items-center gap-6 overflow-x-auto no-scrollbar scroll-smooth whitespace-nowrap w-full py-0.5">
          {indices.map((idx) => (
            <div key={idx.symbol} className="inline-flex items-center gap-2 shrink-0 font-mono">
              <span className="font-semibold text-neutral-200">{idx.symbol}</span>
              <span className="text-neutral-100 font-medium tabular-nums">
                {idx.price.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
              <span
                className={`inline-flex items-center text-xs font-semibold tabular-nums ${
                  idx.isPositive ? 'text-emerald-400' : 'text-rose-400'
                }`}
              >
                {idx.isPositive ? (
                  <TrendingUp className="w-3 h-3 mr-0.5" />
                ) : (
                  <TrendingDown className="w-3 h-3 mr-0.5" />
                )}
                {idx.isPositive ? '+' : ''}
                {idx.change.toFixed(2)} ({idx.isPositive ? '+' : ''}
                {idx.percentChange.toFixed(2)}%)
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
