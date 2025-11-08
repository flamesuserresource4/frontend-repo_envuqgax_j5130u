import { Store, User, Shield, Star } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/10 bg-white/60 dark:bg-slate-900/60 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-rose-500 shadow-lg" />
          <div>
            <p className="text-xl font-bold tracking-tight">AstraTrade</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 -mt-1">Anime RPG Account Marketplace</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#buy" className="hover:text-indigo-500 transition-colors">Buy</a>
          <a href="#sell" className="hover:text-indigo-500 transition-colors">Sell</a>
          <a href="#listings" className="hover:text-indigo-500 transition-colors">Listings</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/70 dark:bg-slate-800/70 border border-white/10 hover:bg-white/90 dark:hover:bg-slate-800 transition-colors">
            <Shield className="w-4 h-4 text-emerald-500" />
            <span className="text-sm">Escrow</span>
          </button>
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white shadow-md hover:shadow-lg transition">
            <User className="w-4 h-4" />
            <span className="text-sm">Sign In</span>
          </button>
        </div>
      </div>
      <div className="w-full border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center gap-4 text-xs text-slate-600 dark:text-slate-300">
          <Star className="w-4 h-4 text-amber-500" />
          Trusted trading hub for titles like Genshin Impact and Punishing: Gray Raven.
        </div>
      </div>
    </header>
  );
}
