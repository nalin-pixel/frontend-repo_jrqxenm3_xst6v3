import React, { useState } from 'react';
import { X, Mail, Lock, User } from 'lucide-react';

export default function AuthModal({ open, onClose }) {
  const [mode, setMode] = useState('login');

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative bg-slate-900 border border-white/10 rounded-2xl w-full max-w-md p-6 text-white shadow-xl">
        <button onClick={onClose} className="absolute top-3 right-3 text-white/70 hover:text-white">
          <X size={20} />
        </button>
        <div className="mb-4">
          <div className="text-2xl font-bold">{mode === 'login' ? 'Welcome back' : 'Create account'}</div>
          <div className="text-white/70 text-sm">{mode === 'login' ? 'Log in to follow matches and players.' : 'Sign up to personalize your feed.'}</div>
        </div>
        <form className="space-y-3">
          {mode === 'signup' && (
            <label className="block">
              <span className="text-sm text-white/80">Name</span>
              <div className="mt-1 flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3">
                <User size={16} className="text-white/60" />
                <input type="text" className="w-full bg-transparent py-2.5 outline-none placeholder:text-white/40" placeholder="Your name" />
              </div>
            </label>
          )}
          <label className="block">
            <span className="text-sm text-white/80">Email</span>
            <div className="mt-1 flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3">
              <Mail size={16} className="text-white/60" />
              <input type="email" className="w-full bg-transparent py-2.5 outline-none placeholder:text-white/40" placeholder="you@example.com" />
            </div>
          </label>
          <label className="block">
            <span className="text-sm text-white/80">Password</span>
            <div className="mt-1 flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3">
              <Lock size={16} className="text-white/60" />
              <input type="password" className="w-full bg-transparent py-2.5 outline-none placeholder:text-white/40" placeholder="••••••••" />
            </div>
          </label>
          <button type="button" className="w-full mt-2 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold py-2.5 rounded-lg transition-colors">
            {mode === 'login' ? 'Log In' : 'Sign Up'}
          </button>
        </form>
        <div className="mt-4 text-center text-sm text-white/70">
          {mode === 'login' ? (
            <>
              Don't have an account?{' '}
              <button className="text-emerald-400 hover:underline" onClick={() => setMode('signup')}>Sign up</button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button className="text-emerald-400 hover:underline" onClick={() => setMode('login')}>Log in</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
