import { useState } from 'react';
import { UploadCloud, DollarSign, Gamepad2 } from 'lucide-react';

export default function SellForm() {
  const [title, setTitle] = useState('');
  const [game, setGame] = useState('Genshin Impact');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted listing: ${title} | ${game} | $${price}`);
  };

  return (
    <section id="sell" className="relative py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">Sell Your Account</h2>
          <p className="text-slate-600 dark:text-slate-300 mt-2 max-w-2xl">Create a listing with clear details. Ownership is verified during escrow for safe trading.</p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 rounded-xl border border-white/10 bg-white/70 dark:bg-slate-900/70 backdrop-blur">
          <div className="md:col-span-2 space-y-3">
            <label className="block text-sm font-medium">Title
              <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g., AR58 | Raiden C2, Hu Tao C1" className="mt-1 w-full rounded-md border border-white/10 bg-white/80 dark:bg-slate-800/70 px-3 py-2 outline-none focus:ring-2 focus:ring-fuchsia-500" />
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <label className="block text-sm font-medium">Game
                <div className="relative mt-1">
                  <Gamepad2 className="w-4 h-4 absolute left-3 top-2.5 text-slate-500" />
                  <select value={game} onChange={(e) => setGame(e.target.value)} className="w-full appearance-none rounded-md border border-white/10 bg-white/80 dark:bg-slate-800/70 pl-9 pr-8 py-2 outline-none focus:ring-2 focus:ring-fuchsia-500">
                    <option>Genshin Impact</option>
                    <option>Punishing: Gray Raven</option>
                    <option>Wuthering Waves</option>
                    <option>Honkai: Star Rail</option>
                  </select>
                </div>
              </label>
              <label className="block text-sm font-medium">Price (USD)
                <div className="relative mt-1">
                  <DollarSign className="w-4 h-4 absolute left-3 top-2.5 text-slate-500" />
                  <input value={price} onChange={(e) => setPrice(e.target.value)} type="number" min="1" className="w-full rounded-md border border-white/10 bg-white/80 dark:bg-slate-800/70 pl-9 py-2 outline-none focus:ring-2 focus:ring-fuchsia-500" />
                </div>
              </label>
            </div>
            <label className="block text-sm font-medium">Account Highlights
              <textarea placeholder="List key characters, weapons, ranks..." className="mt-1 w-full rounded-md border border-white/10 bg-white/80 dark:bg-slate-800/70 px-3 py-2 h-24 outline-none focus:ring-2 focus:ring-fuchsia-500" />
            </label>
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-medium">Screenshots
              <div className="mt-1 h-36 rounded-md border border-dashed border-white/20 bg-white/60 dark:bg-slate-800/40 flex flex-col items-center justify-center text-sm">
                <UploadCloud className="w-5 h-5 mb-1 text-slate-500" />
                Drag & drop or click to upload
              </div>
            </label>
            <button type="submit" className="w-full py-2.5 rounded-md bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white shadow hover:shadow-md">Create Listing</button>
          </div>
        </form>
      </div>
    </section>
  );
}
