'use client';
import React from 'react';
import { Download, Award, Calendar, MapPin } from 'lucide-react';

const experience = [
  {
    role: 'Senior Graphic Designer',
    company: 'Shalina Healthcare DMCC',
    location: 'Dubai, UAE',
    period: 'Jul 2020 – Present',
    achievements: [
      'Lead design for 20+ African market pharmaceutical brand portfolios',
      'Developed and maintain complete brand identity and regulatory packaging systems for Rx, OTC & nutraceutical products',
      'Managed end-to-end creative production for WHX 2024 & 2025 exhibition booths',
      'Produced After Effects corporate motion reels distributed across 20+ countries',
    ],
  },
  {
    role: 'Senior Graphic Designer',
    company: 'Neopharma LLC',
    location: 'Abu Dhabi, UAE',
    period: 'Apr 2018 – Jul 2020',
    achievements: [
      'Designed regulatory-compliant packaging for 50+ pharmaceutical SKUs (UAE MOH & SFDA standards)',
      'Created complete visual identity for new product launches across UAE, KSA, and GCC markets',
      'Delivered large-format exhibition materials for CPHI and Arab Health trade shows',
    ],
  },
  {
    role: 'Senior Graphic & Web Designer',
    company: 'Nanobird Technologies',
    location: 'Cochin, India',
    period: 'Apr 2016 – Apr 2018',
    achievements: [
      'Designed and developed 15+ client WordPress websites with custom UI/UX',
      'Created digital marketing assets — social media graphics, email campaigns, digital banners',
      'Led brand identity projects for technology and service sector clients',
    ],
  },
  {
    role: 'Senior Graphic Designer',
    company: 'Potential Advertising',
    location: 'Muscat, Oman',
    period: 'Jun 2008 – Sep 2016',
    achievements: [
      'Senior designer for 8+ years at one of Oman\'s leading advertising agencies',
      'Delivered creative for Shell Oman, PDO, Royal Oman Police, Port of Duqm and Mphasis',
      'Designed the Royal Oman Police Highway Code publication and Shell Oman annual magazine',
    ],
  },
  {
    role: 'Graphic Designer',
    company: 'Deadline Advertising',
    location: 'Bangalore, India',
    period: 'Mar 2006 – Jun 2008',
    achievements: [
      'Designed print advertising, brochures, and corporate identity materials',
      'Managed pre-press production and vendor coordination for large-format printing',
    ],
  },
  {
    role: 'Graphic Designer',
    company: "Mariam's Marketing",
    location: 'Bangalore, India',
    period: 'Nov 2003 – Feb 2006',
    achievements: [
      'Began career in print design, developing foundational skills in layout and typography',
      'Produced marketing collateral for retail, FMCG, and event clients',
    ],
  },
];

const tools = [
  'Adobe InDesign', 'Adobe Illustrator', 'Adobe Photoshop',
  'Adobe After Effects', 'Adobe Premiere Pro', 'CorelDraw',
  'WordPress', 'HTML / CSS', 'Midjourney', 'Adobe Firefly',
  'Claude AI', 'ChatGPT', 'Grok',
];

export const Resume: React.FC = () => (
  <section id="resume" className="section-pad bg-[#07070A]">
    <div className="container-xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
        <div>
          <div className="section-label">Career</div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            20 Years of <span className="font-editorial italic font-normal text-[#E8192C]">Excellence</span>
          </h2>
        </div>
        <a
          href="/cv/linoy-stephen-cv.pdf"
          download
          className="btn-red shrink-0"
        >
          <Download className="w-4 h-4" />
          Download CV (PDF)
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Timeline */}
        <div className="lg:col-span-2">
          <div className="relative pl-8">
            <div className="timeline-line" />
            <div className="flex flex-col gap-10">
              {experience.map((exp, i) => (
                <div key={i} className="relative">
                  {/* Dot */}
                  <div className="absolute -left-[2.1rem] top-1.5 timeline-dot" />

                  <div className="card-glass rounded-2xl p-6">
                    {/* Role & Period */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-base font-black text-white">{exp.role}</h3>
                        <div className="text-[#E8192C] font-semibold text-sm mt-0.5">{exp.company}</div>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-1 shrink-0 text-[10px] font-mono text-[#6B6B74]">
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{exp.period}</span>
                        <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{exp.location}</span>
                      </div>
                    </div>

                    {/* Achievements */}
                    <ul className="flex flex-col gap-2">
                      {exp.achievements.map((a, j) => (
                        <li key={j} className="flex items-start gap-2 text-xs text-[#9999A6] leading-relaxed">
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-[#E8192C] shrink-0" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar: Tools + Education */}
        <div className="flex flex-col gap-8">
          {/* Creative Toolkit */}
          <div className="card-glass rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-4 h-4 text-[#E8192C]" />
              <span className="text-xs font-bold tracking-widest uppercase text-[#6B6B74]">Creative Toolkit</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {tools.map((t) => (
                <span key={t} className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-white/5 text-[#9999A6] border border-white/5">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Key Stats */}
          <div className="card-glass rounded-2xl p-6 space-y-5">
            <div className="text-xs font-bold tracking-widest uppercase text-[#6B6B74] mb-2">Career Highlights</div>
            {[
              ['20+', 'Years in Graphic Design'],
              ['8+', 'Years in UAE & GCC'],
              ['100+', 'Brands Served'],
              ['50+', 'Pharma SKUs Designed'],
              ['15+', 'Exhibition Booths'],
            ].map(([v, l]) => (
              <div key={l} className="flex items-center justify-between border-b border-white/5 pb-4 last:border-0 last:pb-0">
                <span className="text-sm text-[#9999A6]">{l}</span>
                <span className="text-2xl font-black text-white">{v}</span>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="card-glass rounded-2xl p-6">
            <div className="text-xs font-bold tracking-widest uppercase text-[#6B6B74] mb-4">Education</div>
            <div>
              <div className="text-sm font-bold text-white">BCA — Computer Applications</div>
              <div className="text-xs text-[#E8192C] mt-0.5">Bangalore University, India</div>
              <div className="text-[10px] font-mono text-[#6B6B74] mt-1">2000 – 2003</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
