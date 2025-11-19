import React from 'react';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden bg-gradient-to-b from-rose-50 to-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-rose-200/60 bg-white/70 p-10 text-center shadow-xl backdrop-blur"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-rose-900 sm:text-4xl">Ready to wear the quiet?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-rose-900/70">Discover limited-run drops and seasonal edits. Free worldwide shipping for launch week.</p>
          <div className="mt-6 flex justify-center gap-3">
            <a href="#collections" className="rounded-full bg-rose-600 px-6 py-3 text-white shadow hover:bg-rose-700">Shop the Edit</a>
            <a href="#" className="rounded-full border border-rose-300/60 bg-white/60 px-6 py-3 text-rose-700 backdrop-blur hover:bg-white">Join the List</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
