'use client';

import React from 'react';
import {
  Palette,
  Box,
  Video,
  Layout,
  Sparkles,
  Award,
  CheckCircle2,
  Cpu,
} from 'lucide-react';
import { linoyProfile, skillsCategoriesData } from '../data/portfolioData';

const iconMap: Record<string, React.ElementType> = {
  Palette,
  Box,
  Video,
  Layout,
  Sparkles,
};

export const About: React.FC = () => {
  return (
    <section id="services" className="relative py-24 bg-zinc-950/70 border-t border-zinc-900 overflow-hidden">
      {/* Background Glow */}
      <div className="ambient-glow-cyan top-1/2 -left-48 opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/10 border border-red-500/30 text-red-500 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Core Expertise & Services</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Mastery Across <span className="gradient-text-red">Brand, Packaging & Digital</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl">
            20+ years delivering end-to-end creative solutions from corporate brand manuals to regulatory pharma packaging, exhibition stands, motion reels, and websites.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20">
          {linoyProfile.keyStats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover p-6 rounded-2xl border border-zinc-800 flex flex-col items-center text-center relative overflow-hidden group bg-zinc-950"
            >
              <div className="text-3xl sm:text-5xl font-black text-white mb-2 group-hover:scale-105 transition-transform text-red-500">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-white mb-1">{stat.label}</div>
              <div className="text-xs text-zinc-400">{stat.subtext}</div>
            </div>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillsCategoriesData.map((category, idx) => {
            const IconComp = iconMap[category.iconName] || Palette;
            return (
              <div
                key={idx}
                className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-2xl border border-zinc-800 flex flex-col justify-between group bg-zinc-950"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-red-600/15 border border-red-500/30 flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors">
                    {category.title}
                  </h3>

                  <ul className="space-y-2.5 mb-6 text-zinc-300 text-xs sm:text-sm">
                    {category.skills.map((skill, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* AI Creative Workflows Banner */}
        <div className="glass-panel p-8 rounded-3xl border border-zinc-800 flex flex-col lg:flex-row items-center justify-between gap-8 bg-zinc-950">
          <div className="space-y-3 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-500/30 text-red-500 text-xs font-mono">
              <Cpu className="w-3.5 h-3.5" />
              <span>Next-Gen Design Workflows</span>
            </div>
            <h3 className="text-2xl font-bold text-white">
              AI-Powered Creative Acceleration
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Proficient leveraging cutting-edge generative AI platforms including Midjourney, Adobe Firefly, Claude, ChatGPT, and Grok for rapid visual concepting, copy briefing, image generation, and workflow optimization.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 justify-center lg:justify-end">
            {['Midjourney', 'Adobe Firefly', 'Claude AI', 'ChatGPT', 'Grok', 'Google AI'].map((aiTool) => (
              <span
                key={aiTool}
                className="px-3.5 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-mono text-white shadow-sm"
              >
                {aiTool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
