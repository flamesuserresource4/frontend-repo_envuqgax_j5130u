import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedListings from './components/FeaturedListings';
import SellForm from './components/SellForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900 text-slate-900 dark:text-white">
      <Navbar />
      <Hero />
      <main className="relative">
        <FeaturedListings />
        <SellForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
