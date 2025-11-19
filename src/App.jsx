import React from 'react';
import Hero from './components/Hero';
import Collections from './components/Collections';
import Features from './components/Features';
import CTA from './components/CTA';
import './index.css';

function App() {
  return (
    <div className="min-h-screen w-full bg-white">
      <Hero />
      <Collections />
      <Features />
      <CTA />
      <footer className="bg-rose-50 px-6 py-10 text-center text-rose-900/70">
        © {new Date().getFullYear()} Sakura × Sari — crafted with calm.
      </footer>
    </div>
  );
}

export default App;
