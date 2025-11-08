import { Star, ShieldCheck, Gamepad2 } from 'lucide-react';

const mockListings = [
  {
    id: 1,
    game: 'Genshin Impact',
    title: 'AR58 | Nahida, Raiden, Hu Tao | 4x 5★ weapons',
    price: 249,
    rating: 4.9,
    badge: 'Verified',
    gradient: 'from-indigo-500 to-fuchsia-500',
  },
  {
    id: 2,
    game: 'Punishing: Gray Raven',
    title: 'SS Lucia: Plume | SSS Bianca | Meta-ready',
    price: 180,
    rating: 4.8,
    badge: 'Verified',
    gradient: 'from-rose-500 to-amber-500',
  },
  {
    id: 3,
    game: 'Wuthering Waves',
    title: 'Lighthouse account | Top resonance | High pity',
    price: 129,
    rating: 4.7,
    badge: 'New',
    gradient: 'from-emerald-500 to-cyan-500',
  },
];

export default function FeaturedListings() {
  return (
    <section id="listings" className="relative py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">Featured Listings</h2>
          <a href="#" className="text-indigo-600 hover:text-fuchsia-600 text-sm">View all</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockListings.map((item) => (
            <article key={item.id} className="group rounded-xl border border-white/10 bg-white/70 dark:bg-slate-900/70 backdrop-blur overflow-hidden shadow-sm hover:shadow-md transition">
              <div className={`h-28 bg-gradient-to-r ${item.gradient}`} />
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-flex items-center gap-2 text-xs font-medium px-2 py-1 rounded-full bg-white/70 dark:bg-slate-800/70 border border-white/10">
                    <Gamepad2 className="w-3.5 h-3.5" /> {item.game}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-amber-600 dark:text-amber-400">
                    <Star className="w-4 h-4 fill-current" /> {item.rating}
                  </span>
                </div>
                <h3 className="font-semibold leading-snug">{item.title}</h3>
                <div className="mt-3 flex items-center justify-between">
                  <p className="text-lg font-bold">${'{'}item.price{'}'}</p>
                  <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                    <ShieldCheck className="w-3.5 h-3.5" /> {item.badge}
                  </span>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <button className="flex-1 py-2 rounded-md bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white text-sm shadow hover:shadow-md">Buy</button>
                  <button className="flex-1 py-2 rounded-md bg-white/70 dark:bg-slate-800/70 border border-white/10 text-sm">Details</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
