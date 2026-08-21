'use client';
import React from 'react';
import { Sparkles } from 'lucide-react';

export const About: React.FC = () => (
  <section id="about" className="section-pad bg-[#0A0A0D] border-y border-white/5">
    <div className="container-xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Bio */}
        <div>
          <div className="section-label">About Me</div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-8">
            A Creative <span className="font-editorial italic font-normal text-[#E8192C]">Mind</span> Behind<br />Every Pixel
          </h2>
          <div className="space-y-5 text-[#9999A6] text-base leading-relaxed">
            <p>
              I&apos;m <strong className="text-white font-semibold">Linoy Stephen</strong>, a Senior Graphic Designer
              and Web Designer based in Dubai, UAE with over 20 years of experience turning creative
              concepts into compelling visual communications. My expertise spans the full creative spectrum —
              from developing comprehensive brand identities to designing regulatory-compliant pharmaceutical
              packaging that meets international standards.
            </p>
            <p>
              Having worked across UAE, Oman, and India with leading corporations including Shalina Healthcare,
              Neopharma, Shell Oman, and Petroleum Development Oman, I bring a rare combination of strategic
              thinking, technical precision, and artistic sensibility to every project.
            </p>
            <p>
              I also leverage modern AI creative tools — <strong className="text-white">Midjourney, Adobe Firefly,
              Claude AI, and ChatGPT</strong> — to supercharge design workflows and deliver results faster without
              compromising on quality.
            </p>
          </div>
        </div>

        {/* Right: AI Tools + Values */}
        <div className="space-y-5">
          {/* AI Workflow */}
          <div className="card-glass rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-[#E8192C]" />
              <span className="text-xs font-bold tracking-widest uppercase text-[#6B6B74]">AI-Enhanced Creative Workflows</span>
            </div>
            <p className="text-sm text-[#9999A6] leading-relaxed mb-5">
              Staying ahead of the curve by integrating cutting-edge AI tools into the creative process — producing higher-quality output faster while maintaining full artistic control.
            </p>
            <div className="grid grid-cols-2 gap-2">
              {['Midjourney', 'Adobe Firefly', 'Claude AI', 'ChatGPT', 'Grok', 'Adobe AI'].map((tool) => (
                <div key={tool} className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/5 text-xs font-semibold text-[#9999A6]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E8192C]" />
                  {tool}
                </div>
              ))}
            </div>
          </div>

          {/* Values */}
          {[
            ['Precision', 'Every pixel, every rule, every margin — deliberate and exact.'],
            ['Versatility', 'From pharma leaflets to 12×6m exhibition booths to WordPress sites.'],
            ['Deadline-Driven', '20 years of delivering quality work on time, every time.'],
          ].map(([title, desc]) => (
            <div key={title} className="card-glass rounded-2xl p-5 flex items-start gap-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8192C] mt-2 shrink-0" />
              <div>
                <div className="text-sm font-bold text-white mb-1">{title}</div>
                <div className="text-xs text-[#6B6B74] leading-relaxed">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
