import React from 'react';
import { motion } from 'framer-motion';

const items = [
  {
    title: 'Iki Silk Set',
    desc: 'Flowing co-ord inspired by Kyoto minimalism, hand-embellished zardozi trims.',
    price: '₹14,900',
    img: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Sakura Sari',
    desc: 'Pale pink organza sari with whisper-thin kantha embroidery and Japanese knot blouse.',
    price: '₹24,500',
    img: 'https://images.unsplash.com/photo-1542060748-10c28b62716f?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Kintsugi Kimono',
    desc: 'Kimono jacket featuring gold-thread kintsugi seams over matte mulberry silk.',
    price: '₹18,700',
    img: 'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function Collections() {
  return (
    <section id="collections" className="relative bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-3xl font-semibold tracking-tight text-rose-900 sm:text-4xl"
        >
          Signature pieces
        </motion.h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, idx) => (
            <motion.article
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="group overflow-hidden rounded-2xl border border-rose-200/60 bg-rose-50/40 shadow-sm backdrop-blur"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={it.img} alt={it.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-rose-50/60 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-medium text-rose-900">{it.title}</h3>
                <p className="mt-1 text-sm text-rose-900/70">{it.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-rose-700">{it.price}</span>
                  <button className="rounded-full bg-rose-600 px-4 py-2 text-white shadow hover:bg-rose-700">Add</button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
