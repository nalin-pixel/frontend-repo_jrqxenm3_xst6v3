import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroCover from './components/HeroCover';
import LiveStream from './components/LiveStream';
import Sections from './components/Sections';
import AuthModal from './components/AuthModal';

function BlogTeasers() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white mb-6">Latest from the Blog</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <article key={i} className="bg-white/5 border border-white/10 rounded-xl p-5 text-white">
              <div className="text-sm text-emerald-300">Analysis</div>
              <h3 className="mt-2 text-lg font-semibold">Derby Day: Tactical Breakdown</h3>
              <p className="mt-1 text-white/70 text-sm">We break down the pressing triggers and midfield rotations that defined the match.</p>
              <button className="mt-3 text-emerald-400 hover:underline">Read more</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [route, setRoute] = useState('home');
  const [authOpen, setAuthOpen] = useState(false);

  const handleNavigate = (r) => {
    if (r === 'auth') {
      setAuthOpen(true);
    } else {
      setRoute(r);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar current={route} onNavigate={handleNavigate} />
      <div className="pt-16" />

      {route === 'home' && (
        <>
          <HeroCover onExploreLive={() => handleNavigate('live')} />
          <Sections onNavigate={handleNavigate} />
          <BlogTeasers />
        </>
      )}

      {route === 'live' && (
        <>
          <HeroCover onExploreLive={() => {}} />
          <LiveStream />
        </>
      )}

      {route === 'fixtures' && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Fixtures</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[1,2,3,4].map((n) => (
                <div key={n} className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <div className="text-sm text-white/70">Premier League</div>
                  <div className="mt-1 flex items-center justify-between">
                    <div className="font-semibold">Team A vs Team B</div>
                    <button className="text-emerald-400 hover:underline" onClick={() => alert('Fixture page can be wired to API-Football later.')}>Open</button>
                  </div>
                  <div className="text-white/60 text-sm">Sun, 19:00 · Wembley</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {route === 'players' && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Players</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[1,2,3,4,5,6].map((n) => (
                <div key={n} className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <div className="h-28 w-full rounded-lg bg-gradient-to-tr from-emerald-500/30 to-cyan-400/20" />
                  <div className="mt-3 font-semibold">Player {n}</div>
                  <div className="text-white/60 text-sm">Position · Club</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {route === 'blog' && <BlogTeasers />}

      <footer className="border-t border-white/10 py-8 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white/70 text-sm">
          © {new Date().getFullYear()} Footy Live. Unofficial demo. Data integrations via API-Football coming next.
        </div>
      </footer>

      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </div>
  );
}
