'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  ExternalLink,
  FolderGit2,
  X,
  ArrowUpRight,
  Layers,
  CheckCircle2,
  Images,
  Play,
  Globe,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  ArrowRight,
  RotateCcw,
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types/portfolio';

const ITEMS_PER_PAGE = 6;

export const Projects: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const totalPages = Math.ceil(projectsData.length / ITEMS_PER_PAGE);

  // Get current batch of 6 items (hiding previous items)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProjects = projectsData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setActiveImageIndex(0);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
      scrollToPortfolioTop();
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      scrollToPortfolioTop();
    }
  };

  const scrollToPortfolioTop = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNextImage = () => {
    if (selectedProject?.galleryImages) {
      setActiveImageIndex((prev) => (prev + 1) % selectedProject.galleryImages!.length);
    }
  };

  const handlePrevImage = () => {
    if (selectedProject?.galleryImages) {
      setActiveImageIndex((prev) =>
        prev === 0 ? selectedProject.galleryImages!.length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="projects" className="relative py-24 bg-zinc-950 overflow-hidden">
      {/* Ambient Red Glow */}
      <div className="ambient-glow-gold top-1/3 -right-48 opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/10 border border-red-500/30 text-red-500 text-xs font-semibold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Design Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Featured <span className="gradient-text-red">Design Works</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl">
            A visual showcase of brand identity guidelines, regulatory pharmaceutical packaging series, trade show exhibition booths, motion reels, and web platforms.
          </p>

          {/* Page Counter Badge */}
          <div className="mt-4 inline-flex items-center gap-2 text-xs font-mono text-zinc-400 bg-zinc-900 px-3.5 py-1.5 rounded-full border border-zinc-800">
            <span>Showing {startIndex + 1} – {Math.min(startIndex + ITEMS_PER_PAGE, projectsData.length)} of {projectsData.length} Projects</span>
            <span className="text-red-500 font-bold">• Page {currentPage} of {totalPages}</span>
          </div>
        </div>

        {/* Current Batch Project Grid (6 Items max) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {currentProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => openProjectModal(project)}
              className="glass-panel rounded-2xl overflow-hidden border border-zinc-800/90 hover:border-red-500/50 transition-all duration-300 group cursor-pointer flex flex-col justify-between shadow-xl hover:shadow-red-950/30 hover:-translate-y-1.5 bg-zinc-950"
            >
              {/* Image Preview Container */}
              <div className="relative h-64 w-full overflow-hidden bg-zinc-900">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

                {/* Media Indicator Icons */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5">
                  {project.galleryImages && project.galleryImages.length > 1 && (
                    <span
                      className="p-1.5 rounded-full bg-zinc-950/85 backdrop-blur-md border border-zinc-800 text-red-400"
                      title="Multi-image gallery"
                    >
                      <Images className="w-3.5 h-3.5" />
                    </span>
                  )}
                  {project.videoUrl && (
                    <span
                      className="p-1.5 rounded-full bg-zinc-950/85 backdrop-blur-md border border-zinc-800 text-red-400"
                      title="Video Reel Preview"
                    >
                      <Play className="w-3.5 h-3.5 fill-red-400" />
                    </span>
                  )}
                  {project.websiteUrl && (
                    <span
                      className="p-1.5 rounded-full bg-zinc-950/85 backdrop-blur-md border border-zinc-800 text-white"
                      title="Live Website"
                    >
                      <Globe className="w-3.5 h-3.5" />
                    </span>
                  )}
                </div>

                {/* Hover Overlay Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-950/40 backdrop-blur-xs">
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-red-600 text-white text-xs font-bold shadow-lg">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>View Artwork</span>
                  </span>
                </div>
              </div>

              {/* Card Body: Title & Description */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-red-500 transition-colors flex items-center justify-between mb-2">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-red-500 shrink-0" />
                  </h3>
                  <p className="text-zinc-400 text-sm line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Classy Pagination / Load More Navigation Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 backdrop-blur-md">
          {/* Previous Page Button */}
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white border border-zinc-800 text-xs font-bold uppercase tracking-wider transition-all disabled:opacity-30 disabled:pointer-events-none"
          >
            <ChevronLeft className="w-4 h-4 text-red-500" />
            <span>Previous Works</span>
          </button>

          {/* Page Indicators */}
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => {
                  setCurrentPage(pageNum);
                  scrollToPortfolioTop();
                }}
                className={`w-10 h-10 rounded-xl text-xs font-mono font-bold transition-all ${
                  currentPage === pageNum
                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/30 scale-105'
                    : 'bg-zinc-950 text-zinc-400 hover:text-white border border-zinc-800'
                }`}
              >
                {pageNum}
              </button>
            ))}
          </div>

          {/* Load More / Next Page Button */}
          {currentPage < totalPages ? (
            <button
              onClick={handleNextPage}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-red-600/30 hover:-translate-y-0.5"
            >
              <span>Load Next Works</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={() => {
                setCurrentPage(1);
                scrollToPortfolioTop();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 text-xs font-bold uppercase tracking-wider transition-all"
            >
              <RotateCcw className="w-4 h-4 text-red-500" />
              <span>Back to First Page</span>
            </button>
          )}
        </div>
      </div>

      {/* Expanded Multi-Media Gallery Lightbox Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-zinc-950/90 backdrop-blur-xl animate-fadeIn">
          <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto glass-panel rounded-3xl border border-zinc-800 shadow-2xl p-6 sm:p-8 bg-zinc-950">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all z-10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header Title */}
            <div className="mb-6">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {selectedProject.title}
              </h3>
            </div>

            {/* Media Gallery / Player Viewport */}
            <div className="relative mb-6">
              {selectedProject.videoUrl ? (
                <div className="relative h-64 sm:h-96 w-full rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800">
                  <iframe
                    src={selectedProject.videoUrl}
                    title={selectedProject.title}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : selectedProject.galleryImages && selectedProject.galleryImages.length > 0 ? (
                <div>
                  {/* Main Gallery Display */}
                  <div className="relative h-64 sm:h-96 w-full rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800">
                    <Image
                      src={selectedProject.galleryImages[activeImageIndex]}
                      alt={`${selectedProject.title} slide ${activeImageIndex + 1}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 900px"
                      className="object-cover object-top transition-all duration-300"
                    />

                    {/* Carousel Navigation Arrows */}
                    {selectedProject.galleryImages.length > 1 && (
                      <>
                        <button
                          onClick={handlePrevImage}
                          className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-zinc-950/80 hover:bg-zinc-900 text-white border border-zinc-800 transition-all"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={handleNextImage}
                          className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-zinc-950/80 hover:bg-zinc-900 text-white border border-zinc-800 transition-all"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </>
                    )}
                  </div>

                  {/* Thumbnail Row Switcher */}
                  {selectedProject.galleryImages.length > 1 && (
                    <div className="flex items-center gap-3 mt-3 overflow-x-auto pb-2">
                      {selectedProject.galleryImages.map((img, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveImageIndex(i)}
                          className={`relative w-20 h-14 rounded-xl overflow-hidden border-2 shrink-0 transition-all ${
                            activeImageIndex === i
                              ? 'border-red-500 scale-105 shadow-md shadow-red-600/30'
                              : 'border-zinc-800 opacity-60 hover:opacity-100'
                          }`}
                        >
                          <Image src={img} alt={`thumb ${i}`} fill className="object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : null}
            </div>

            {/* Description & Deliverables */}
            <div className="space-y-6">
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                {selectedProject.longDescription}
              </p>

              {/* Deliverables Grid */}
              <div>
                <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-red-500" />
                  <span>Key Deliverables & Specifications</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedProject.deliverables.map((item, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-200 flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools Used Badges */}
              <div>
                <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2.5">
                  Design Tools & Pre-Press Software
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tools.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg bg-zinc-900 text-red-400 text-xs font-mono border border-zinc-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* External Links */}
              {selectedProject.websiteUrl && (
                <div className="pt-4 border-t border-zinc-800 flex items-center gap-4">
                  <a
                    href={selectedProject.websiteUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm transition-all shadow-lg shadow-red-600/30"
                  >
                    <Globe className="w-4 h-4" />
                    <span>Visit Live Website</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
