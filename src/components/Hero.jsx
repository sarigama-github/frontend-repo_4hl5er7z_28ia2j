import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const petals = Array.from({ length: 14 }).map((_, i) => ({
  id: i,
  left: Math.random() * 100,
  delay: Math.random() * 6,
  duration: 10 + Math.random() * 10,
  size: 8 + Math.random() * 10,
  opacity: 0.5 + Math.random() * 0.5,
}));

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-pink-100">
      {/* 3D Animation */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Tu-wEVxfDuICpwJI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient tint aligned to theme */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-pink-100/80 via-pink-100/30 to-white/60" />

      {/* Falling petals */}
      <div className="pointer-events-none absolute inset-0">
        {petals.map((p) => (
          <span
            key={p.id}
            className="absolute rounded-full bg-pink-300/70 shadow-sm"
            style={{
              left: `${p.left}%`,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
              animation: `petal-fall ${p.duration}s linear ${p.delay}s infinite`,
              filter: 'blur(0.2px)',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col justify-center px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-pink-300/80 ring-4 ring-pink-200/60" />
            <p className="text-sm tracking-wide text-rose-700/70">Minimalist Luxe • Japanese × Indian</p>
          </div>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#collections" className="text-rose-800/80 hover:text-rose-900 transition">Collections</a>
            <a href="#features" className="text-rose-800/80 hover:text-rose-900 transition">Heritage</a>
            <a href="#cta" className="rounded-full bg-rose-600 px-4 py-2 text-white shadow-sm hover:bg-rose-700 transition">Shop Now</a>
          </nav>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="max-w-3xl text-5xl font-semibold leading-tight tracking-tight text-rose-900 sm:text-6xl"
        >
          Sakura meets Sari
          <span className="block text-rose-600">crafted for serene opulence</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8 }}
          className="mt-5 max-w-2xl text-lg text-rose-900/70"
        >
          Contemporary silhouettes blending Japanese restraint with Indian artistry. Soft pink palettes, artisanal textures, effortless movement.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <a
            href="#collections"
            className="rounded-full bg-rose-600 px-6 py-3 text-white shadow-lg shadow-rose-300/40 transition hover:-translate-y-0.5 hover:bg-rose-700"
          >
            Explore Collections
          </a>
          <a
            href="#features"
            className="rounded-full border border-rose-300/60 bg-white/60 px-6 py-3 text-rose-700 backdrop-blur transition hover:bg-white"
          >
            Our Philosophy
          </a>
        </motion.div>
      </div>
    </section>
  );
}
