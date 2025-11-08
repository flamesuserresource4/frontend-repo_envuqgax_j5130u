import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        {/* Background 3D scene - replace URL with any Spline scene if desired */}
        <Spline scene="https://prod.spline.design/5kM7q8m0QqgLwzqf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-20 pb-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 dark:bg-slate-900/70 border border-white/10 px-3 py-1 text-xs font-medium mb-4">
            <span className="h-2 w-2 rounded-full bg-fuchsia-500 animate-pulse" />
            Live anime RPG account marketplace
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Trade Legendary Accounts with Style
          </h1>
          <p className="mt-4 text-base md:text-lg text-slate-600 dark:text-slate-300">
            A sleek hub inspired by Genshin and PGR aesthetics. Browse featured accounts, verify ownership, and trade securely with escrow protections.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#listings" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white shadow-lg hover:shadow-xl transition">
              <Rocket className="w-5 h-5" /> Explore Listings
            </a>
            <a href="#sell" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-white/70 dark:bg-slate-800/70 border border-white/10 hover:bg-white/90 dark:hover:bg-slate-800 transition text-sm">
              Start Selling
            </a>
          </div>
        </div>
      </div>

      {/* Soft gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white/90 dark:from-slate-900/70 dark:to-slate-900" />
    </section>
  );
}
