import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

export default function LiveStream() {
  return (
    <section id="live" className="py-12 bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white mb-6">Live Match</h2>
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-black">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/21X5lGlDOfg?rel=0&modestbranding=1"
                title="Live Stream"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-white">
            <h3 className="text-lg font-semibold">Match Info</h3>
            <ul className="mt-4 space-y-3 text-white/90">
              <li className="flex items-center gap-3"><Calendar size={18} className="text-emerald-400"/> Sun, 19:00</li>
              <li className="flex items-center gap-3"><MapPin size={18} className="text-emerald-400"/> Wembley Stadium</li>
              <li className="flex items-center gap-3"><Clock size={18} className="text-emerald-400"/> 32' First Half</li>
            </ul>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              <div className="bg-white/5 rounded-lg p-3">
                <div className="text-xs text-white/70">Home</div>
                <div className="text-2xl font-bold">2</div>
              </div>
              <div className="bg-white/5 rounded-lg p-3">
                <div className="text-xs text-white/70">Away</div>
                <div className="text-2xl font-bold">1</div>
              </div>
              <div className="bg-white/5 rounded-lg p-3">
                <div className="text-xs text-white/70">Possession</div>
                <div className="text-2xl font-bold">57%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
