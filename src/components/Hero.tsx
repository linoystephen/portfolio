'use client';

import React from 'react';
import Image from 'next/image';
import {
  ArrowDown,
  ArrowUpRight,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Award,
} from 'lucide-react';
import { linoyProfile } from '../data/portfolioData';
import { LinkedinIcon } from './SocialIcons';

export const Hero: React.FC = () => {
  const clientsList = [
    'Shalina Healthcare',
    'Neopharma LLC',
    'Shell Oman',
    'Petroleum Development Oman',
    'Port of Duqm',
    'Royal Oman Police',
    'Nanobird Tech',
    'Mphasis',
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-32 pb-16 overflow-hidden bg-[#030304]"
    >
      {/* Ambient Red Studio Lighting */}
      <div className="ambient-glow-red top-1/4 -left-32 animate-pulse-glow" />
      <div className="ambient-glow-red bottom-1/4 -right-32 animate-pulse-glow" style={{ animationDelay: '3s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Editorial Headline & Bio */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 backdrop-blur-md mb-8 shadow-xl">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
              </span>
              <span className="text-xs font-mono tracking-widest text-zinc-300 uppercase flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-red-500" />
                <span>{linoyProfile.location} • 20+ Yrs Exp</span>
              </span>
            </div>

            {/* Main Name & Title (Editorial Style) */}
            <div className="space-y-3 mb-8">
              <span className="text-xs font-mono text-red-500 tracking-[0.3em] uppercase block font-semibold">
                SENIOR GRAPHIC DESIGNER & WEB DESIGNER
              </span>
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-white uppercase leading-[0.95]">
                LINOY <br />
                <span className="editorial-title font-serif italic text-red-500 lowercase font-normal">
                  Stephen.
                </span>
              </h1>
            </div>

            {/* Summary Quote */}
            <p className="text-base sm:text-xl text-zinc-400 max-w-2xl leading-relaxed font-light mb-10 border-l-2 border-red-600 pl-5 py-1">
              {linoyProfile.summary}
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-12 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-widest shadow-xl shadow-red-600/30 hover:shadow-red-600/50 hover:-translate-y-0.5 transition-all w-full sm:w-auto"
              >
                <Sparkles className="w-4 h-4" />
                <span>Explore Works</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-white border border-zinc-800 font-semibold text-xs uppercase tracking-widest transition-all hover:-translate-y-0.5 w-full sm:w-auto"
              >
                <span>Get In Touch</span>
                <ArrowUpRight className="w-4 h-4 text-red-500" />
              </a>
            </div>

            {/* Contact Strip */}
            <div className="flex flex-wrap items-center gap-5 pt-6 border-t border-zinc-800/80 w-full text-xs text-zinc-400 font-mono">
              <a
                href={`tel:${linoyProfile.phone}`}
                className="flex items-center gap-2 hover:text-red-500 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-red-500" />
                <span>{linoyProfile.phone}</span>
              </a>
              <span className="text-zinc-700">•</span>
              <a
                href={`mailto:${linoyProfile.email}`}
                className="flex items-center gap-2 hover:text-red-500 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-red-500" />
                <span>{linoyProfile.email}</span>
              </a>
              <span className="text-zinc-700">•</span>
              <a
                href={linoyProfile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-red-500 transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-zinc-400" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: High-Impact Editorial Studio Frame Display */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Crimson Accent Frame Glow */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-red-600 via-rose-600 to-red-800 opacity-30 blur-2xl animate-pulse-glow" />

              {/* Designer Portrait Container */}
              <div className="relative glass-panel-luxury rounded-3xl overflow-hidden shadow-2xl border border-zinc-800 bg-[#070709]">
                <div className="relative h-[480px] sm:h-[560px] w-full overflow-hidden">
                  <Image
                    src="/images/brand-1.png"
                    alt="Linoy Stephen - Senior Graphic Designer"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover object-center filter grayscale contrast-110 hover:grayscale-0 transition-all duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030304] via-transparent to-transparent" />

                  {/* Corner Accent Box */}
                  <div className="absolute top-5 left-5 px-4 py-2 rounded-xl bg-zinc-950/90 backdrop-blur-md border border-zinc-800 text-xs font-mono text-white flex items-center gap-2">
                    <Award className="w-4 h-4 text-red-500" />
                    <span>Creative Leadership</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Client Brand Marquee Ribbon */}
        <div className="mt-16 pt-8 border-t border-zinc-900">
          <div className="text-[10px] font-mono tracking-[0.25em] text-zinc-500 uppercase text-center mb-6">
            TRUSTED BY LEADING CORPORATIONS & PHARMA LEADERS ACROSS GCC & AFRICA
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 opacity-70 hover:opacity-100 transition-opacity">
            {clientsList.map((client) => (
              <span
                key={client}
                className="px-4 py-2 rounded-lg bg-zinc-900/60 border border-zinc-800/80 text-xs font-mono text-zinc-300"
              >
                {client}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 text-center">
          <a
            href="#projects"
            className="inline-flex flex-col items-center gap-2 text-xs font-mono tracking-widest uppercase text-zinc-500 hover:text-red-500 transition-colors"
          >
            <span>Scroll Down</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-red-500" />
          </a>
        </div>
      </div>
    </section>
  );
};
