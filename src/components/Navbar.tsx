'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Palette, Phone, ArrowUpRight, Sparkles } from 'lucide-react';
import { linoyProfile } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'Portfolio Works', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'projects', 'services', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-zinc-950/90 backdrop-blur-xl border-b border-zinc-800 shadow-2xl shadow-red-950/20'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="flex items-center gap-3 group text-white font-bold text-xl tracking-tight transition-transform hover:scale-105"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-red-600 via-rose-600 to-red-500 p-[1.5px] shadow-lg shadow-red-600/30">
              <div className="w-full h-full bg-zinc-950 rounded-[10px] flex items-center justify-center group-hover:bg-zinc-900 transition-colors">
                <Palette className="w-5 h-5 text-red-500 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-white group-hover:text-red-500 transition-colors text-lg leading-none">
                LINOY STEPHEN
              </span>
              <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase mt-0.5">
                Senior Graphic & Web Designer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-zinc-900/80 border border-zinc-800 rounded-full px-4 py-1.5 backdrop-blur-md">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                    isActive
                      ? 'bg-red-600/20 text-red-400 border border-red-500/40 shadow-sm shadow-red-500/20'
                      : 'text-zinc-300 hover:text-white hover:bg-zinc-800/60'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Action Call & Contact CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${linoyProfile.phone}`}
              className="inline-flex items-center gap-1.5 text-xs font-mono px-3.5 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-red-400 hover:border-red-500/40 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-red-500" />
              <span>{linoyProfile.phone}</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full bg-red-600 hover:bg-red-500 text-white transition-all shadow-lg shadow-red-600/30 hover:shadow-red-600/50 hover:-translate-y-0.5"
            >
              <span>Contact Studio</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors border border-zinc-800"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 px-4 pb-6 pt-2 bg-zinc-950/95 backdrop-blur-2xl border-b border-zinc-800 animate-fadeIn">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-semibold uppercase tracking-wider flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-red-600/20 text-red-400 border border-red-500/40'
                      : 'text-zinc-300 hover:bg-zinc-900 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <Sparkles className="w-4 h-4 text-red-500" />}
                </a>
              );
            })}

            <div className="pt-3 mt-2 border-t border-zinc-800 flex flex-col gap-2">
              <a
                href={`tel:${linoyProfile.phone}`}
                className="flex items-center justify-center gap-2 w-full text-center text-xs font-mono px-4 py-2.5 rounded-xl bg-zinc-900 text-red-400 border border-zinc-800"
              >
                <Phone className="w-4 h-4" />
                <span>{linoyProfile.phone}</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full text-center text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-xl bg-red-600 text-white"
              >
                <span>Contact Studio</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
