'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, ExternalLink, Play } from 'lucide-react';
import { client } from '../sanity/client';

interface Project {
  title: string;
  description: string;
  category: string;
  images: string[];
  videoUrl?: string;
  videoFile?: string;
  websiteUrl?: string;
  deliverables?: string[];
  tools?: string[];
}

interface SanityProject extends Omit<Project, 'images'> {
  cover?: string;
  gallery?: string[];
}

const fallbackProjects: Project[] = [
  {
    title: 'Shalina Healthcare — Brand Identity System',
    description: 'Comprehensive brand identity guidelines, corporate stationery, and marketing collateral for one of Africa\'s leading pharmaceutical companies with presence in 20+ African countries.',
    category: 'Brand Identity',
    images: ['/images/brand-1.png', '/images/brand-2.png'],
    deliverables: ['Brand Guidelines', 'Stationery System', 'Marketing Collateral', 'Digital Assets'],
    tools: ['Adobe Illustrator', 'Adobe InDesign'],
  },
  {
    title: 'Neopharma — Pharma Packaging System',
    description: 'Full regulatory-compliant packaging artwork for Rx and OTC pharmaceutical products. Covers labelling, folding cartons, and patient information leaflets adhering to UAE MOH guidelines.',
    category: 'Pharma Packaging',
    images: ['/images/pharma-1.png', '/images/pharma-2.png'],
    deliverables: ['Rx Pack Artwork', 'OTC Packaging', 'Patient Info Leaflets', 'Regulatory Inserts'],
    tools: ['Adobe Illustrator', 'Adobe Photoshop'],
  },
  {
    title: 'WHX — World Health Exhibition Booth',
    description: 'Large-scale 12×6m exhibition booth design for the World Health Exhibition in Dubai. Full 3D visualisation, signage system, and print-ready production files.',
    category: 'Exhibition',
    images: ['/images/event-1.png', '/images/event-2.png'],
    deliverables: ['3D Booth Design', 'Fabric Print Files', 'Signage System', 'Event Collateral'],
    tools: ['Adobe Illustrator', 'CorelDraw'],
  },
  {
    title: 'Corporate Motion Reel — After Effects',
    description: 'High-energy corporate promotional video reel with motion graphics, kinetic typography, and branded animations produced using Adobe After Effects and Premiere Pro.',
    category: 'Video & Motion',
    images: ['/images/video-1.png'],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    deliverables: ['Motion Graphic Reel', 'Branded Animations', 'Social Media Cuts'],
    tools: ['Adobe After Effects', 'Adobe Premiere Pro'],
  },
  {
    title: 'Nanobird Technologies — Web Design',
    description: 'Full UI/UX design and WordPress development for a tech services company. Responsive, SEO-optimised with a clean corporate aesthetic and fast page performance.',
    category: 'Web Design',
    images: ['/images/web-1.png'],
    websiteUrl: 'http://linoy.nanobirdtech.com',
    deliverables: ['UI/UX Design', 'WordPress Dev', 'SEO Setup', 'Responsive Layout'],
    tools: ['Adobe XD', 'WordPress', 'HTML/CSS'],
  },
  {
    title: 'Royal Oman Police — Highway Code Book',
    description: 'Complete design and layout of the Royal Oman Police Highway Code educational publication. Complex multi-page editorial design with infographics and bilingual Arabic/English content.',
    category: 'Editorial',
    images: ['/images/brand-2.png'],
    deliverables: ['Publication Design', 'Infographics', 'Print-ready PDF', 'Bilingual Layout'],
    tools: ['Adobe InDesign', 'Adobe Illustrator'],
  },
  {
    title: 'Shell Oman — Annual Corporate Publication',
    description: 'Design and production of Shell Oman\'s annual corporate magazine. Editorial layout, photography direction, and print management for a 120-page premium publication.',
    category: 'Editorial',
    images: ['/images/brand-1.png', '/images/brand-2.png'],
    deliverables: ['Magazine Layout', 'Photography Direction', 'Print Management'],
    tools: ['Adobe InDesign', 'Adobe Photoshop'],
  },
  {
    title: 'CPHI Exhibition — Pharma Trade Show',
    description: 'Complete branding and booth design for CPHI pharmaceutical trade show. From concept to production-ready artwork for a 200sqm exhibition space.',
    category: 'Exhibition',
    images: ['/images/event-2.png', '/images/event-1.png'],
    deliverables: ['Booth Concept', 'Branding System', 'Large Format Print'],
    tools: ['Adobe Illustrator', 'CorelDraw'],
  },
  {
    title: 'Petroleum Development Oman — Campaign',
    description: 'Multi-channel marketing campaign design for PDO\'s corporate social responsibility initiatives. Includes print, digital, and out-of-home advertising materials.',
    category: 'Brand Identity',
    images: ['/images/brand-1.png'],
    deliverables: ['Campaign Design', 'OOH Advertising', 'Digital Banners', 'Print Collateral'],
    tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign'],
  },
];

const ITEMS_PER_PAGE = 6;

export const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>(fallbackProjects);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [selected, setSelected] = useState<Project | null>(null);
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    client.fetch<SanityProject[]>(`*[_type == "project" && published != false] | order(order asc, _createdAt desc){
      title, description, category,
      "cover": coverImage.asset->url, "gallery": galleryImages[].asset->url,
      videoUrl, "videoFile": videoFile.asset->url, websiteUrl, deliverables, tools
    }`).then((items) => {
      const mapped = items.map(({ cover, gallery = [], ...item }) => ({
        ...item,
        images: [cover, ...gallery].filter((url): url is string => Boolean(url)),
      })).filter((item) => item.images.length);
      if (mapped.length) setProjects(mapped);
    }).catch(() => {
      // Keep curated work visible when Sanity is empty or temporarily unavailable.
    });
  }, []);

  const visible = projects.slice(0, visibleCount);

  const open = (p: Project) => { setSelected(p); setImgIndex(0); };
  const close = () => setSelected(null);

  return (
    <section id="works" className="section-pad bg-[#07070A]">
      <div className="container-xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <div className="section-label">Portfolio</div>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Selected <span className="font-editorial italic font-normal text-[#E8192C]">Works</span>
            </h2>
          </div>
          <p className="text-[#6B6B74] text-sm max-w-sm">
            A curated selection from 20+ years of creative work across branding, packaging, exhibitions, video & web.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map((p, i) => (
            <div
              key={i}
              className="work-card group bg-[#0E0E12] border border-white/7 rounded-2xl overflow-hidden cursor-pointer"
              style={{ aspectRatio: i % 5 === 0 ? '4/3' : i % 3 === 1 ? '3/4' : '1/1' }}
              onClick={() => open(p)}
            >
              <div className="relative w-full h-full min-h-[220px]">
                <Image
                  src={p.images[0]}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                />
                <div className="work-card-overlay">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#E8192C] mb-1">{p.category}</span>
                  <h3 className="text-sm font-bold text-white leading-snug mb-1">{p.title}</h3>
                  <p className="text-xs text-[#9999A6] line-clamp-2">{p.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 mt-12">
          <span className="text-[#6B6B74] text-xs font-mono">
            Showing {visible.length} of {projects.length} works
          </span>
          {visibleCount < projects.length && (
            <button onClick={() => setVisibleCount((count) => count + ITEMS_PER_PAGE)} className="btn-red py-2.5 px-5 text-xs">
              View More Works
            </button>
          )}
        </div>
      </div>

      {/* ── Lightbox Modal ── */}
      {selected && (
        <div className="lightbox-overlay" onClick={close}>
          <div
            className="lightbox-panel w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-2xl bg-[#0E0E12] border border-white/8 flex flex-col lg:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image / Video pane */}
            <div className="relative lg:w-3/5 bg-[#07070A] flex-shrink-0">
              {selected.videoFile ? (
                <div className="aspect-video w-full">
                  <video src={selected.videoFile} controls className="w-full h-full object-contain" />
                </div>
              ) : selected.videoUrl ? (
                <div className="aspect-video w-full">
                  <iframe
                    src={selected.videoUrl}
                    title={selected.title}
                    className="w-full h-full rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={selected.images[imgIndex]}
                    alt={selected.title}
                    fill
                    className="object-cover rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none"
                  />
                  {/* Gallery nav */}
                  {selected.images.length > 1 && (
                    <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-3">
                      <button onClick={() => setImgIndex((i) => Math.max(0, i - 1))} className="p-2 rounded-full bg-black/60 text-white hover:bg-[#E8192C] transition-colors">
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <span className="text-xs font-mono text-white/70">{imgIndex + 1} / {selected.images.length}</span>
                      <button onClick={() => setImgIndex((i) => Math.min(selected.images.length - 1, i + 1))} className="p-2 rounded-full bg-black/60 text-white hover:bg-[#E8192C] transition-colors">
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Details pane */}
            <div className="flex-1 p-7 flex flex-col gap-5 overflow-y-auto">
              {/* Close */}
              <button onClick={close} className="self-end p-2 rounded-full hover:bg-white/10 text-[#6B6B74] hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>

              <div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#E8192C] mb-2 block">{selected.category}</span>
                <h3 className="text-xl font-black text-white leading-snug mb-3">{selected.title}</h3>
                <p className="text-sm text-[#9999A6] leading-relaxed">{selected.description}</p>
              </div>

              {selected.deliverables && (
                <div>
                  <div className="text-[10px] font-bold tracking-widest uppercase text-[#6B6B74] mb-2">Deliverables</div>
                  <div className="flex flex-wrap gap-2">
                    {selected.deliverables.map((d) => (
                      <span key={d} className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#E8192C]/10 border border-[#E8192C]/20 text-[#E8192C]">{d}</span>
                    ))}
                  </div>
                </div>
              )}

              {selected.tools && (
                <div>
                  <div className="text-[10px] font-bold tracking-widest uppercase text-[#6B6B74] mb-2">Tools Used</div>
                  <div className="flex flex-wrap gap-2">
                    {selected.tools.map((t) => (
                      <span key={t} className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 text-[#9999A6]">{t}</span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-col gap-3 mt-auto pt-4 border-t border-white/5">
                {(selected.videoUrl || selected.videoFile) && (
                  <a href={selected.videoUrl || selected.videoFile} target="_blank" rel="noreferrer" className="btn-red justify-center">
                    <Play className="w-4 h-4" />
                    Watch Video Reel
                  </a>
                )}
                {selected.websiteUrl && (
                  <a href={selected.websiteUrl} target="_blank" rel="noreferrer" className="btn-outline justify-center">
                    <ExternalLink className="w-4 h-4" />
                    Visit Live Site
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
