import React from 'react';
import { PlayCircle, Users, Trophy, Newspaper } from 'lucide-react';

const Card = ({ icon: Icon, title, desc, onClick }) => (
  <button onClick={onClick} className="group text-left bg-white/5 border border-white/10 hover:border-emerald-400/40 hover:bg-white/10 transition-colors rounded-xl p-6 h-full">
    <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-300 grid place-items-center mb-3">
      <Icon size={20} />
    </div>
    <div className="text-white font-semibold">{title}</div>
    <div className="text-white/70 text-sm mt-1">{desc}</div>
  </button>
);

export default function Sections({ onNavigate }) {
  return (
    <section id="sections" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white mb-6">Explore</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card icon={PlayCircle} title="Live" desc="Watch live fixtures with real-time info." onClick={() => onNavigate('live')} />
          <Card icon={Trophy} title="Fixtures" desc="Browse fixtures with dedicated pages." onClick={() => onNavigate('fixtures')} />
          <Card icon={Users} title="Players" desc="See player details and stats." onClick={() => onNavigate('players')} />
          <Card icon={Newspaper} title="Blog" desc="Read match analysis and news." onClick={() => onNavigate('blog')} />
        </div>
      </div>
    </section>
  );
}
