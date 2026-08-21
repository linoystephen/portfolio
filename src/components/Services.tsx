'use client';
import React from 'react';
import {
  Layers, Package, Layout, Video, Globe, ArrowUpRight,
} from 'lucide-react';

const services = [
  {
    icon: Layers,
    number: '01',
    title: 'Brand Identity & Corporate Design',
    description:
      'Complete visual identity systems — brand guidelines, logo design, corporate stationery, marketing collateral, annual reports, and campaign materials for major GCC corporations.',
    deliverables: ['Brand Guidelines', 'Logo & Visual Identity', 'Corporate Campaigns', 'Annual Reports'],
  },
  {
    icon: Package,
    number: '02',
    title: 'Pharmaceutical Packaging (Rx/OTC)',
    description:
      'Regulatory-compliant packaging artwork and SOPs for prescription, OTC, and nutraceutical products. Experienced with SFDA, UAE MOH, and African market labelling requirements.',
    deliverables: ['Rx & OTC Pack Artwork', 'Regulatory Inserts & PILs', 'Branded Packaging Systems', 'SOP Documents'],
  },
  {
    icon: Layout,
    number: '03',
    title: 'Exhibition & Event Design',
    description:
      'Large-format exhibition booths, trade show branding, event collateral, and signage for GITEX, WHX, CPHI, and corporate events across the UAE and Middle East.',
    deliverables: ['Booth Design & Layout', 'Event Signage & Banners', 'Trade Show Collateral', 'Conference Branding'],
  },
  {
    icon: Video,
    number: '04',
    title: 'Video Editing & Motion Graphics',
    description:
      'Corporate video production, After Effects motion reels, promotional videos, and animated brand presentations that communicate your story with creative impact.',
    deliverables: ['After Effects Motion Reels', 'Corporate Video Editing', 'Animated Presentations', 'Social Media Videos'],
  },
  {
    icon: Globe,
    number: '05',
    title: 'Web Design & WordPress',
    description:
      'Responsive, SEO-ready websites built on WordPress with a sharp eye for UI/UX design. From corporate portals to service-based business sites — pixel-perfect and performance-optimised.',
    deliverables: ['WordPress Development', 'UI/UX Design', 'Responsive Design', 'SEO Optimisation'],
  },
];

export const Services: React.FC = () => (
  <section id="services" className="section-pad bg-[#07070A]">
    <div className="container-xl">
      {/* Header */}
      <div className="max-w-2xl mb-16">
        <div className="section-label">What I Offer</div>
        <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
          Services That <span className="font-editorial italic font-normal text-[#E8192C]">Drive Results</span>
        </h2>
        <p className="text-[#6B6B74] text-base leading-relaxed">
          Two decades of hands-on expertise across five core disciplines — bringing together
          creative vision, technical precision, and deep industry knowledge.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={i} className="service-card group">
              {/* Number + Icon */}
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 rounded-xl bg-[#E8192C]/10 border border-[#E8192C]/20 text-[#E8192C] group-hover:bg-[#E8192C]/20 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-5xl font-black text-white/5 group-hover:text-white/10 transition-colors font-editorial">
                  {s.number}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white mb-3 leading-snug">{s.title}</h3>

              {/* Description */}
              <p className="text-sm text-[#6B6B74] leading-relaxed mb-6">{s.description}</p>

              {/* Deliverables */}
              <div className="flex flex-wrap gap-2 pt-5 border-t border-white/5">
                {s.deliverables.map((d) => (
                  <span key={d} className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-white/5 text-[#9999A6]">
                    {d}
                  </span>
                ))}
              </div>
            </div>
          );
        })}

        {/* CTA Card */}
        <div className="service-card flex flex-col items-start justify-between bg-[#E8192C]/5 border-[#E8192C]/20 hover:border-[#E8192C]/60">
          <div>
            <div className="text-4xl font-black font-editorial italic text-[#E8192C] mb-4">Let&apos;s<br />Work<br />Together</div>
            <p className="text-sm text-[#6B6B74] leading-relaxed">
              Available for full-time roles, freelance projects, and long-term creative partnerships in Dubai &amp; remote.
            </p>
          </div>
          <a href="#contact" className="btn-red mt-8 w-full justify-between">
            <span>Get In Touch</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  </section>
);
