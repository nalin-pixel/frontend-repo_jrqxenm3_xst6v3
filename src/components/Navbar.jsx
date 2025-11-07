import React from 'react';
import { Home, PlayCircle, Trophy, Users, Newspaper, LogIn } from 'lucide-react';

const NavItem = ({ icon: Icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`inline-flex items-center gap-2 px-3 py-2 rounded-md transition-colors text-sm font-medium ${
      active ? 'bg-white/10 text-white' : 'text-white/80 hover:text-white hover:bg-white/10'
    }`}
  >
    <Icon size={18} />
    <span>{label}</span>
  </button>
);

export default function Navbar({ current, onNavigate }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/10 bg-white/5 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-emerald-500 to-cyan-400 grid place-items-center text-white font-black">F</div>
            <div className="text-white font-semibold tracking-tight">Footy Live</div>
          </div>
          <nav className="hidden md:flex items-center gap-2">
            <NavItem icon={Home} label="Home" active={current === 'home'} onClick={() => onNavigate('home')} />
            <NavItem icon={PlayCircle} label="Live" active={current === 'live'} onClick={() => onNavigate('live')} />
            <NavItem icon={Trophy} label="Fixtures" active={current === 'fixtures'} onClick={() => onNavigate('fixtures')} />
            <NavItem icon={Users} label="Players" active={current === 'players'} onClick={() => onNavigate('players')} />
            <NavItem icon={Newspaper} label="Blog" active={current === 'blog'} onClick={() => onNavigate('blog')} />
          </nav>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigate('auth')}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-emerald-500 text-white hover:bg-emerald-400 transition-colors text-sm font-semibold"
            >
              <LogIn size={18} />
              <span>Login</span>
            </button>
          </div>
        </div>
      </div>
      <div className="md:hidden px-4 pb-3">
        <div className="flex flex-wrap gap-2">
          <NavItem icon={Home} label="Home" active={current === 'home'} onClick={() => onNavigate('home')} />
          <NavItem icon={PlayCircle} label="Live" active={current === 'live'} onClick={() => onNavigate('live')} />
          <NavItem icon={Trophy} label="Fixtures" active={current === 'fixtures'} onClick={() => onNavigate('fixtures')} />
          <NavItem icon={Users} label="Players" active={current === 'players'} onClick={() => onNavigate('players')} />
          <NavItem icon={Newspaper} label="Blog" active={current === 'blog'} onClick={() => onNavigate('blog')} />
        </div>
      </div>
    </header>
  );
}
