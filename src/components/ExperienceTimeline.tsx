'use client';

import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 bg-zinc-950/80 border-t border-zinc-900 overflow-hidden">
      {/* Ambient Glow */}
      <div className="ambient-glow-gold top-1/4 -right-48 opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/10 border border-red-500/30 text-red-500 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Journey</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            20+ Years of <span className="gradient-text-red">Design Leadership</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl">
            A proven track record leading corporate design, pharmaceutical packaging, exhibition branding, and digital media across Dubai, Oman, and India.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l-2 border-zinc-800 ml-4 sm:ml-32 space-y-12">
          {experienceData.map((exp) => (
            <div key={exp.id} className="relative pl-8 sm:pl-10 group">
              {/* Timeline Dot Indicator */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-zinc-950 border-2 border-red-500 group-hover:border-white group-hover:scale-125 transition-all shadow-md shadow-red-600/40" />

              {/* Company & Role Header Card */}
              <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-zinc-800/90 group-hover:border-zinc-700 transition-all shadow-xl bg-zinc-950">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-red-500 group-hover:text-red-400 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-base font-semibold text-red-400 mt-0.5">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400 font-mono">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-white">
                      <Calendar className="w-3.5 h-3.5 text-red-500" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800">
                      <MapPin className="w-3.5 h-3.5 text-red-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Accomplishments Bullet Points */}
                <ul className="space-y-2.5 mb-6 text-zinc-300 text-sm sm:text-base leading-relaxed">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-1" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Tools Used Badges */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800">
                  {exp.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 rounded-md bg-zinc-900 text-zinc-300 text-xs font-mono border border-zinc-800"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
