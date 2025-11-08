import { Shield, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="flex items-center gap-2 font-bold text-lg">
            <div className="h-7 w-7 rounded-md bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-rose-500" />
            AstraTrade
          </div>
          <p className="mt-2 text-slate-600 dark:text-slate-300">A minimal marketplace for buying and selling anime RPG accounts with an elegant, game-inspired vibe.</p>
        </div>
        <div>
          <p className="font-semibold mb-2">Trust & Safety</p>
          <ul className="space-y-1 text-slate-600 dark:text-slate-300">
            <li className="inline-flex items-center gap-2"><Shield className="w-4 h-4 text-emerald-500" /> Escrow Protection</li>
            <li>Ownership Verification</li>
            <li>Dispute Mediation</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-2">Community</p>
          <ul className="space-y-1 text-slate-600 dark:text-slate-300">
            <li>Guides & Tips</li>
            <li>Report a Listing</li>
            <li className="inline-flex items-center gap-2">Aesthetic Mode <Sparkles className="w-4 h-4 text-fuchsia-500" /></li>
          </ul>
        </div>
      </div>
      <div className="py-4 text-center text-xs text-slate-500 dark:text-slate-400">© {new Date().getFullYear()} AstraTrade. All rights reserved. Fan project, not affiliated with any game publishers.</div>
    </footer>
  );
}
