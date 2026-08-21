'use client';
import React from 'react';
import { ArrowUp, Phone, Mail } from 'lucide-react';
import { LinkedinIcon } from './SocialIcons';

export const Footer: React.FC = () => (
  <footer className="bg-[#07070A] border-t border-white/5">
    <div className="container-xl py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
      {/* Brand */}
      <div className="flex flex-col items-center sm:items-start">
        <span className="text-sm font-black tracking-tight text-white uppercase">Linoy Stephen</span>
        <span className="text-[10px] tracking-widest text-[#6B6B74] uppercase">Senior Graphic Designer • Dubai, UAE</span>
      </div>

      {/* Quick links */}
      <div className="flex items-center gap-5 text-[10px] font-mono text-[#6B6B74] tracking-wider">
        <a href="tel:+971552805458" className="flex items-center gap-1 hover:text-[#E8192C] transition-colors">
          <Phone className="w-3 h-3" />+971-552805458
        </a>
        <a href="mailto:linoystephen@gmail.com" className="flex items-center gap-1 hover:text-[#E8192C] transition-colors">
          <Mail className="w-3 h-3" />linoystephen@gmail.com
        </a>
        <a href="https://linkedin.com/in/linoystephen" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-[#E8192C] transition-colors">
          <LinkedinIcon className="w-3 h-3" />LinkedIn
        </a>
      </div>

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="p-3 rounded-full border border-white/10 text-[#6B6B74] hover:text-white hover:border-[#E8192C] transition-all"
        aria-label="Back to top"
      >
        <ArrowUp className="w-4 h-4" />
      </button>
    </div>
    <div className="text-center text-[10px] font-mono text-[#3a3a3f] pb-4">
      © {new Date().getFullYear()} Linoy Stephen. All rights reserved.
    </div>
  </footer>
);
