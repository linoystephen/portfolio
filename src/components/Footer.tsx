'use client';

import React from 'react';
import { ArrowUp, Palette } from 'lucide-react';
import { linoyProfile } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-red-600/15 border border-red-500/30 flex items-center justify-center text-red-500">
              <Palette className="w-4 h-4" />
            </div>
            <span className="text-white font-bold text-sm">
              {linoyProfile.name} <span className="text-red-500">Creative Studio</span>
            </span>
          </div>

          {/* Copyright */}
          <div className="text-zinc-400 text-xs flex items-center gap-1.5 text-center">
            <span>© {new Date().getFullYear()} {linoyProfile.name}. Senior Graphic & Web Designer — Dubai, UAE</span>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-red-500 border border-zinc-800 transition-all hover:scale-105"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-red-500" />
          </button>
        </div>
      </div>
    </footer>
  );
};
