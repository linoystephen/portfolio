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
} from 'lucide-react';
import { linoyProfile } from '../data/portfolioData';
import { LinkedinIcon } from './SocialIcons';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#050507]"
    >
      {/* Ambient Red Lighting Glows */}
      <div className="ambient-glow-cyan top-1/4 -left-32 animate-pulse-glow" />
      <div className="ambient-glow-gold bottom-1/4 -right-32 animate-pulse-glow" style={{ animationDelay: '2.5s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline & Bio */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 backdrop-blur-md mb-6 shadow-lg shadow-red-950/20">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
              </span>
              <span className="text-xs font-semibold text-zinc-300 tracking-wide flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-red-500" />
                <span>{linoyProfile.location} — Available for Senior Creative Roles</span>
              </span>
            </div>

            {/* Main Name & Title */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
              Hi, I&apos;m{' '}
              <span className="gradient-text-red font-black">{linoyProfile.name}</span>
            </h1>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-zinc-200 mb-6 flex flex-wrap items-center gap-2">
              <span className="text-red-500">{linoyProfile.title}</span>
              <span className="text-zinc-600">•</span>
              <span className="text-white font-mono">20+ Years Exp</span>
            </h2>

            {/* Summary */}
            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed mb-8">
              {linoyProfile.summary}
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-base shadow-xl shadow-red-600/30 hover:shadow-red-600/50 hover:-translate-y-0.5 transition-all w-full sm:w-auto"
              >
                <Sparkles className="w-5 h-5" />
                <span>View Design Portfolio</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-700 font-semibold text-base transition-all hover:-translate-y-0.5 w-full sm:w-auto"
              >
                <span>Get In Touch</span>
                <ArrowUpRight className="w-5 h-5 text-red-500" />
              </a>

              <a
                href={linoyProfile.existingPortfolioUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-zinc-400 hover:text-white text-sm font-medium transition-colors"
                title="Existing Portfolio Site"
              >
                <ArrowUpRight className="w-4 h-4 text-red-400" />
                <span>linoy.nanobirdtech.com</span>
              </a>
            </div>

            {/* Contact Quick Strip */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-zinc-800 w-full text-xs text-zinc-400 font-mono">
              <a
                href={`tel:${linoyProfile.phone}`}
                className="flex items-center gap-1.5 hover:text-red-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-red-500" />
                <span>{linoyProfile.phone}</span>
              </a>
              <span className="text-zinc-700">•</span>
              <a
                href={`mailto:${linoyProfile.email}`}
                className="flex items-center gap-1.5 hover:text-red-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-red-500" />
                <span>{linoyProfile.email}</span>
              </a>
              <span className="text-zinc-700">•</span>
              <a
                href={linoyProfile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-red-400 transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-zinc-400" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Portrait Photo Display */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Crimson Accent Frame Glow */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-red-600 via-rose-600 to-red-800 opacity-40 blur-2xl animate-pulse-glow" />

              {/* Designer Portrait Container */}
              <div className="relative glass-panel rounded-3xl overflow-hidden shadow-2xl border border-zinc-800 bg-zinc-950">
                <div className="relative h-[480px] sm:h-[540px] w-full overflow-hidden">
                  <Image
                    src="/images/brand-1.png"
                    alt="Linoy Stephen - Senior Graphic Designer"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover object-center filter brightness-95 contrast-105 hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 text-center">
          <a
            href="#projects"
            className="inline-flex flex-col items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-red-500 transition-colors"
          >
            <span>Explore Portfolio Showcase</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-red-500" />
          </a>
        </div>
      </div>
    </section>
  );
};
