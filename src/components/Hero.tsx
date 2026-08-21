'use client';
import React from 'react';
import Image from 'next/image';
import { ArrowDown, Download, Phone, Mail, MapPin } from 'lucide-react';
import { LinkedinIcon } from './SocialIcons';

const stats = [
  { value: '20+', label: 'Years Experience' },
  { value: '100+', label: 'Brands & Clients' },
  { value: '8+', label: 'Years in UAE/GCC' },
];

export const Hero: React.FC = () => (
  <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-24 pb-12 overflow-hidden bg-[#07070A]">
    {/* Ambient glows */}
    <div className="ambient -top-40 -left-40 opacity-60" />
    <div className="ambient -bottom-40 -right-40 opacity-40" style={{ width: 500, height: 500 }} />

    <div className="container-xl relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* ── LEFT: Text ── */}
        <div className="flex flex-col">
          {/* Available badge */}
          <div className="pill-available mb-8 self-start">
            <span className="pill-dot" />
            Open to Work · Dubai, UAE
          </div>

          {/* Headline */}
          <h1 className="text-[clamp(2.8rem,7vw,5.5rem)] font-black leading-[0.95] tracking-tight text-white mb-6 uppercase">
            Senior<br />
            <span className="font-editorial italic font-normal text-[#E8192C] normal-case">
              Graphic
            </span>{' '}
            &amp;<br />
            Web Designer
          </h1>

          {/* Tagline */}
          <p className="text-[#9999A6] text-base sm:text-lg leading-relaxed max-w-xl mb-8 border-l-2 border-[#E8192C] pl-5">
            20+ years crafting bold brand identities, regulatory pharma packaging,
            world-class exhibition booths, motion reels, and WordPress websites
            for leading corporations across UAE, GCC &amp; Africa.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 mb-10">
            <a href="#works" className="btn-red">View My Works</a>
            <a href="/cv/linoy-stephen-cv.pdf" download className="btn-outline">
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </div>

          {/* Quick contact strip */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono text-[#6B6B74]">
            <a href="tel:+971552805458" className="flex items-center gap-1.5 hover:text-[#E8192C] transition-colors">
              <Phone className="w-3 h-3 text-[#E8192C]" />+971-552805458
            </a>
            <a href="mailto:linoystephen@gmail.com" className="flex items-center gap-1.5 hover:text-[#E8192C] transition-colors">
              <Mail className="w-3 h-3 text-[#E8192C]" />linoystephen@gmail.com
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-[#E8192C]" />Dubai, UAE
            </span>
            <a href="https://linkedin.com/in/linoystephen" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-[#E8192C] transition-colors">
              <LinkedinIcon className="w-3 h-3 text-[#6B6B74]" />LinkedIn
            </a>
          </div>
        </div>

        {/* ── RIGHT: Photo + Stats ── */}
        <div className="relative flex flex-col items-center lg:items-end gap-6">
          {/* Photo Frame */}
          <div className="relative w-full max-w-sm">
            {/* Glow ring */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-[#E8192C]/40 via-transparent to-transparent blur-2xl opacity-60" />
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#0E0E12]">
              <Image
                src="/images/portrait.png"
                alt="Linoy Stephen - Senior Graphic Designer Dubai"
                width={480}
                height={560}
                priority
                className="object-cover w-full grayscale hover:grayscale-0 transition-all duration-700"
              />
              {/* Gradient fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07070A]/80 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Stat chips */}
          <div className="flex gap-3 flex-wrap justify-center lg:justify-end w-full max-w-sm">
            {stats.map((s) => (
              <div key={s.label} className="card-glass rounded-xl px-5 py-3 text-center flex-1 min-w-[90px]">
                <div className="text-2xl font-black text-white">{s.value}</div>
                <div className="text-[10px] font-semibold tracking-widest text-[#6B6B74] uppercase">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="mt-16 flex justify-center">
        <a href="#services" className="flex flex-col items-center gap-2 text-[#6B6B74] hover:text-[#E8192C] transition-colors text-[10px] tracking-widest uppercase font-semibold">
          <span>Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </div>
  </section>
);
