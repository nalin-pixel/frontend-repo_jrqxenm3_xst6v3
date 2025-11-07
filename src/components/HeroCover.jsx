import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroCover({ onExploreLive }) {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70 pointer-events-none" />
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="text-white max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">Your Front-Row Seat to Football</h1>
          <p className="mt-4 text-white/80 text-lg">Live fixtures, player insights, league tables, and a sleek blog — all in one fast experience.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button onClick={onExploreLive} className="px-5 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white font-semibold transition-colors">Watch Live</button>
            <a href="#sections" className="px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold backdrop-blur transition-colors">Explore Sections</a>
          </div>
        </div>
      </div>
    </section>
  );
}
