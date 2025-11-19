import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Artisanal Heritage',
    desc: 'Zardozi, kantha, chikankari meet sashiko, shibori, and kintsugi-inspired details.',
  },
  {
    title: 'Considered Materials',
    desc: 'Mulberry silk, organic cotton, and plant dyes — chosen for longevity and feel.',
  },
  {
    title: 'Serene Movement',
    desc: 'Floaty silhouettes that drape with quiet confidence and ease.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-rose-50 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-semibold tracking-tight text-rose-900 sm:text-4xl">A softer kind of luxury</h2>
            <p className="mt-4 text-rose-900/70">Designed to breathe and move — a quiet celebration of craft at the intersection of two cultures.</p>
            <div className="mt-8 space-y-6">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: i * 0.05, duration: 0.45 }}
                  className="rounded-xl border border-rose-200/60 bg-white/70 p-5 shadow-sm backdrop-blur"
                >
                  <h3 className="font-medium text-rose-900">{f.title}</h3>
                  <p className="mt-1 text-sm text-rose-900/70">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1530639832028-d065f8f3c2e1?q=80&w=1600&auto=format&fit=crop"
              alt="Textile detail"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-rose-100/60 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
