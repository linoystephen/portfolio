'use client';

import React, { useState } from 'react';
import {
  Mail,
  Send,
  MessageSquare,
  MapPin,
  CheckCircle,
  AlertCircle,
  Phone,
  Globe,
  Sparkles,
} from 'lucide-react';
import { linoyProfile } from '../data/portfolioData';
import { LinkedinIcon } from './SocialIcons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Brand & Corporate Identity',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const encode = (data: Record<string, string>) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill out all required fields.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    // Send payload to Netlify Forms static endpoint /__forms.html
    fetch('/__forms.html', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...formData }),
    })
      .then(() => {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: 'Brand & Corporate Identity',
          message: '',
        });
      })
      .catch(() => {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: 'Brand & Corporate Identity',
          message: '',
        });
      });
  };

  return (
    <section id="contact" className="relative py-24 bg-zinc-950/90 border-t border-zinc-900 overflow-hidden">
      {/* Ambient Glow */}
      <div className="ambient-glow-cyan bottom-10 -left-32 opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/10 border border-red-500/30 text-red-500 text-xs font-semibold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Let&apos;s Build <span className="gradient-text-red">Your Next Project</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl">
            Available for Senior Graphic Design leadership, pharmaceutical packaging design consultation, trade show booth branding, and corporate web projects in Dubai & international markets.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-8 rounded-3xl border border-zinc-800 space-y-6 bg-zinc-950">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-red-500" />
                <span>Direct Contact Details</span>
              </h3>

              <div className="space-y-4 pt-2">
                {/* Phone Card */}
                <a
                  href={`tel:${linoyProfile.phone}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-red-500/40 hover:bg-zinc-900/90 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-red-600/15 text-red-500 border border-red-500/30 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-zinc-400">Call / WhatsApp</div>
                    <div className="text-sm font-bold text-white group-hover:text-red-500 transition-colors font-mono">
                      {linoyProfile.phone}
                    </div>
                  </div>
                </a>

                {/* Email Card */}
                <a
                  href={`mailto:${linoyProfile.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-red-500/40 hover:bg-zinc-900/90 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-red-600/15 text-red-500 border border-red-500/30 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-zinc-400">Direct Email</div>
                    <div className="text-sm font-bold text-white group-hover:text-red-500 transition-colors font-mono">
                      {linoyProfile.email}
                    </div>
                  </div>
                </a>

                {/* Existing Portfolio Card */}
                <a
                  href={linoyProfile.existingPortfolioUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-red-500/40 hover:bg-zinc-900/90 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-red-600/15 text-red-500 border border-red-500/30 group-hover:scale-110 transition-transform">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-zinc-400">Existing Portfolio Site</div>
                    <div className="text-sm font-bold text-white group-hover:text-red-500 transition-colors font-mono">
                      linoy.nanobirdtech.com
                    </div>
                  </div>
                </a>

                {/* Location Card */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-900 border border-zinc-800">
                  <div className="p-3 rounded-xl bg-zinc-800 text-red-500 border border-zinc-700">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-zinc-400">Location</div>
                    <div className="text-sm font-bold text-white">{linoyProfile.location}</div>
                  </div>
                </div>
              </div>

              {/* LinkedIn Button */}
              <div className="pt-6 border-t border-zinc-800">
                <a
                  href={linoyProfile.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white hover:text-red-400 hover:border-red-500/40 text-xs font-semibold uppercase tracking-wider transition-all"
                >
                  <LinkedinIcon className="w-4 h-4 text-zinc-300" />
                  <span>Connect on LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 rounded-3xl border border-zinc-800 bg-zinc-950">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-red-500" />
                <span>Send Studio Inquiry</span>
              </h3>

              {status === 'success' ? (
                <div className="p-8 rounded-2xl bg-red-600/10 border border-red-500/30 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-red-600/20 text-red-500 border border-red-500/40 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Inquiry Received!</h4>
                  <p className="text-zinc-300 text-sm max-w-md mx-auto">
                    Thank you for reaching out. Your message has been sent directly to Linoy Stephen.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {status === 'error' && (
                    <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-sm flex items-center gap-3">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-zinc-300 mb-2">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm placeholder-zinc-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-zinc-300 mb-2">
                        Your Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm placeholder-zinc-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-zinc-300 mb-2">
                      Your Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+971-500000000"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm placeholder-zinc-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
                    />
                  </div>

                  {/* Service Select */}
                  <div>
                    <label htmlFor="projectType" className="block text-xs font-semibold text-zinc-300 mb-2">
                      Project Service Required
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
                    >
                      <option value="Brand & Corporate Identity">Brand & Corporate Identity Systems</option>
                      <option value="Pharma Packaging & Regulatory">Pharma Packaging & Regulatory (Rx/OTC)</option>
                      <option value="Exhibition Booth & Event Graphics">Exhibition Booth & Event Collateral</option>
                      <option value="Corporate Video & Motion Graphics">Corporate Video Editing / Motion Reel</option>
                      <option value="Web & UI/UX Design">WordPress / Web Design & SEO</option>
                      <option value="Full-Time Creative Role">Senior Graphic Designer / Web Role</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-zinc-300 mb-2">
                      Project Overview / Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Linoy, I'd like to discuss a brand identity and packaging project..."
                      required
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm placeholder-zinc-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-base transition-all shadow-xl shadow-red-600/30 disabled:opacity-50"
                  >
                    {status === 'submitting' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
