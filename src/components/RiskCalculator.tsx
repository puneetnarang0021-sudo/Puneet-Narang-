import React, { useState } from 'react';
import { Calculator, ShieldCheck, AlertCircle, ArrowRight } from 'lucide-react';

interface RiskCalculatorProps {
  onOpenDemo: () => void;
}

export const RiskCalculator: React.FC<RiskCalculatorProps> = ({ onOpenDemo }) => {
  const [capital, setCapital] = useState<number>(100000);
  const [riskPercent, setRiskPercent] = useState<number>(2);
  const [entryPrice, setEntryPrice] = useState<number>(500);
  const [stopLoss, setStopLoss] = useState<number>(490);
  const [targetPrice, setTargetPrice] = useState<number>(525);

  // Calculations
  const riskAmount = (capital * riskPercent) / 100;
  const slPoints = Math.max(0.1, Math.abs(entryPrice - stopLoss));
  const targetPoints = Math.max(0.1, Math.abs(targetPrice - entryPrice));

  // Quantity allowed based on risk budget
  const calculatedQty = Math.max(1, Math.floor(riskAmount / slPoints));
  const totalInvestment = calculatedQty * entryPrice;
  const potentialProfit = calculatedQty * targetPoints;
  const riskRewardRatio = Number((targetPoints / slPoints).toFixed(2));

  const isSetupGood = riskRewardRatio >= 2.0;
  const isSetupAcceptable = riskRewardRatio >= 1.5 && riskRewardRatio < 2.0;

  return (
    <section id="calculator" className="py-16 sm:py-24 bg-neutral-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-wider uppercase">
            <Calculator className="w-4 h-4" />
            <span>Interactive Trader Tool</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Institutional Risk-to-Reward &amp; Position Calculator
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            At Balance Bull Academy, Trader Punit Narang teaches one non-negotiable rule: <strong className="text-white">Calculate your risk before you dream of profit.</strong> Test your trade setups below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls Column */}
          <div className="lg:col-span-6 bg-neutral-900/80 border border-neutral-800 rounded-2xl p-6 space-y-5">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <span>Trade Parameters</span>
            </h3>

            {/* Capital Input */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-neutral-300 font-medium">Total Trading Capital:</span>
                <span className="font-mono text-amber-400 font-bold tabular-nums">
                  ₹{capital.toLocaleString('en-IN')}
                </span>
              </div>
              <input
                type="range"
                min="10000"
                max="1000000"
                step="10000"
                value={capital}
                onChange={(e) => setCapital(Number(e.target.value))}
                className="w-full accent-amber-400 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-neutral-500 font-mono">
                <span>₹10,000</span>
                <span>₹5,00,000</span>
                <span>₹10,00,000+</span>
              </div>
            </div>

            {/* Risk Percent */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-neutral-300 font-medium">Max Risk Per Trade:</span>
                <span className="font-mono text-amber-400 font-bold tabular-nums">
                  {riskPercent}% (₹{riskAmount.toLocaleString('en-IN')})
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[1, 1.5, 2, 3].map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => setRiskPercent(val)}
                    className={`py-2 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                      riskPercent === val
                        ? 'bg-amber-400 text-neutral-950 border-amber-400 font-bold shadow'
                        : 'bg-neutral-950 text-neutral-400 border-neutral-800 hover:border-neutral-700'
                    }`}
                  >
                    {val}%
                  </button>
                ))}
              </div>
            </div>

            {/* Entry, Stoploss, Target */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="space-y-1.5">
                <label className="text-[11px] font-semibold text-neutral-300">
                  Entry Price (₹)
                </label>
                <input
                  type="number"
                  value={entryPrice}
                  onChange={(e) => setEntryPrice(Math.max(1, Number(e.target.value)))}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-sm text-white font-mono focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-semibold text-rose-300">
                  Stop Loss (₹)
                </label>
                <input
                  type="number"
                  value={stopLoss}
                  onChange={(e) => setStopLoss(Math.max(0.5, Number(e.target.value)))}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-sm text-rose-300 font-mono focus:border-rose-400 focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-semibold text-emerald-300">
                  Target Price (₹)
                </label>
                <input
                  type="number"
                  value={targetPrice}
                  onChange={(e) => setTargetPrice(Math.max(1, Number(e.target.value)))}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-sm text-emerald-300 font-mono focus:border-emerald-400 focus:outline-none"
                />
              </div>
            </div>

            <p className="text-[11px] text-neutral-500 italic">
              *Stop Loss distance: {slPoints.toFixed(2)} pts | Target distance: {targetPoints.toFixed(2)} pts
            </p>
          </div>

          {/* Results Column */}
          <div className="lg:col-span-6 bg-neutral-900/90 border border-amber-500/30 rounded-2xl p-6 flex flex-col justify-between space-y-6 shadow-xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                  Mathematical Analysis
                </span>
                <span
                  className={`text-xs font-bold px-2.5 py-1 rounded-md border flex items-center gap-1.5 ${
                    isSetupGood
                      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                      : isSetupAcceptable
                      ? 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                      : 'bg-rose-500/10 text-rose-400 border-rose-500/30'
                  }`}
                >
                  {isSetupGood ? (
                    <ShieldCheck className="w-3.5 h-3.5" />
                  ) : (
                    <AlertCircle className="w-3.5 h-3.5" />
                  )}
                  {isSetupGood
                    ? 'Recommended Setup (1:2+ R:R)'
                    : isSetupAcceptable
                    ? 'Acceptable Intraday Setup'
                    : 'Unfavorable Risk Setup'}
                </span>
              </div>

              {/* Stat Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800/80">
                  <span className="text-[11px] text-neutral-400">Recommended Position Size:</span>
                  <p className="text-xl sm:text-2xl font-mono font-bold text-white tabular-nums mt-0.5">
                    {calculatedQty.toLocaleString('en-IN')}{' '}
                    <span className="text-xs text-neutral-400 font-normal">shares / units</span>
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800/80">
                  <span className="text-[11px] text-neutral-400">Risk-to-Reward Ratio:</span>
                  <p
                    className={`text-xl sm:text-2xl font-mono font-bold tabular-nums mt-0.5 ${
                      isSetupGood ? 'text-emerald-400' : 'text-amber-400'
                    }`}
                  >
                    1 : {riskRewardRatio}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800/80">
                  <span className="text-[11px] text-rose-400/90">Max Risk If SL Hits:</span>
                  <p className="text-lg sm:text-xl font-mono font-bold text-rose-400 tabular-nums mt-0.5">
                    -₹{(calculatedQty * slPoints).toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800/80">
                  <span className="text-[11px] text-emerald-400/90">Potential Profit at Target:</span>
                  <p className="text-lg sm:text-xl font-mono font-bold text-emerald-400 tabular-nums mt-0.5">
                    +₹{potentialProfit.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-neutral-950/70 border border-neutral-800 text-xs text-neutral-300">
                <span className="text-amber-400 font-semibold">Total Trade Capital: </span>
                ₹{totalInvestment.toLocaleString('en-IN', { maximumFractionDigits: 0 })} ({((totalInvestment / capital) * 100).toFixed(1)}% of your available capital)
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <button
                onClick={onOpenDemo}
                className="w-full py-3 px-4 rounded-xl font-bold text-sm text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Learn Live Execution with Trader Punit Narang</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
