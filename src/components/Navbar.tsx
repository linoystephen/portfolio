'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#works', label: 'Works' },
  { href: '#resume', label: 'Resume' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#07070A]/95 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-xl flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex flex-col leading-none">
          <span className="text-base font-black tracking-tight text-white uppercase">Linoy Stephen</span>
          <span className="text-[10px] font-semibold tracking-[0.18em] text-[#E8192C] uppercase">Senior Graphic Designer</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="/cv/linoy-stephen-cv.pdf" download className="btn-outline py-2.5 px-5 text-xs">
            <Download className="w-3.5 h-3.5" />
            Download CV
          </a>
          <a href="#contact" className="btn-red py-2.5 px-5 text-xs">Hire Me</a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-white"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="lg:hidden bg-[#07070A] border-t border-white/5 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="nav-link text-sm text-[#F2F0EB]"
            >
              {l.label}
            </a>
          ))}
          <hr className="divider" />
          <a href="/cv/linoy-stephen-cv.pdf" download className="btn-outline">
            <Download className="w-4 h-4" />
            Download CV
          </a>
          <a href="#contact" onClick={() => setOpen(false)} className="btn-red">Hire Me</a>
        </div>
      )}
    </header>
  );
};
