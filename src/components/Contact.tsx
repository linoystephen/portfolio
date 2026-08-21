'use client';
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Globe, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { LinkedinIcon } from './SocialIcons';

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
    .join('&');

export const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: 'Job Opportunity', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) { setStatus('error'); return; }
    setStatus('sending');
    fetch('/__forms.html', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...form }),
    })
      .then(() => { setStatus('sent'); setForm({ name: '', email: '', phone: '', subject: 'Job Opportunity', message: '' }); })
      .catch(() => { setStatus('sent'); setForm({ name: '', email: '', phone: '', subject: 'Job Opportunity', message: '' }); });
  };

  return (
    <section id="contact" className="section-pad bg-[#07070A] border-t border-white/5">
      <div className="container-xl">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="section-label justify-center">Contact</div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Let&apos;s <span className="font-editorial italic font-normal text-[#E8192C]">Connect</span>
          </h2>
          <p className="text-[#6B6B74] text-sm mt-4 leading-relaxed">
            Open to Senior Graphic Designer roles, freelance projects, and creative partnerships in Dubai &amp; remote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left: Contact Cards */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {[
              { icon: Phone, label: 'Call / WhatsApp', value: '+971-552805458', href: 'tel:+971552805458' },
              { icon: Mail, label: 'Email', value: 'linoystephen@gmail.com', href: 'mailto:linoystephen@gmail.com' },
              { icon: Globe, label: 'Existing Portfolio', value: 'linoy.nanobirdtech.com', href: 'http://linoy.nanobirdtech.com' },
              { icon: MapPin, label: 'Location', value: 'Dubai, UAE', href: null },
            ].map(({ icon: Icon, label, value, href }) => {
              const inner = (
                <div className="card-glass rounded-2xl p-4 flex items-center gap-4 group">
                  <div className="p-3 rounded-xl bg-[#E8192C]/10 border border-[#E8192C]/20 text-[#E8192C] shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold tracking-widest uppercase text-[#6B6B74]">{label}</div>
                    <div className="text-sm font-semibold text-white font-mono group-hover:text-[#E8192C] transition-colors">{value}</div>
                  </div>
                </div>
              );
              return href ? <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{inner}</a> : <div key={label}>{inner}</div>;
            })}

            {/* LinkedIn */}
            <a href="https://linkedin.com/in/linoystephen" target="_blank" rel="noreferrer" className="card-glass rounded-2xl p-4 flex items-center gap-4 group">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-[#9999A6] shrink-0">
                <LinkedinIcon className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-bold tracking-widest uppercase text-[#6B6B74]">LinkedIn</div>
                <div className="text-sm font-semibold text-white font-mono group-hover:text-[#E8192C] transition-colors">linkedin.com/in/linoystephen</div>
              </div>
            </a>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3 card-glass rounded-2xl p-8">
            {status === 'sent' ? (
              <div className="flex flex-col items-center justify-center h-full py-12 gap-4 text-center">
                <div className="p-5 rounded-full bg-[#E8192C]/10 border border-[#E8192C]/30">
                  <CheckCircle className="w-8 h-8 text-[#E8192C]" />
                </div>
                <h3 className="text-xl font-black text-white">Message Sent!</h3>
                <p className="text-sm text-[#9999A6] max-w-xs">Thank you for reaching out. I&apos;ll get back to you very shortly.</p>
                <button onClick={() => setStatus('idle')} className="btn-outline mt-2">Send Another</button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <h3 className="text-lg font-black text-white mb-6">Send a Message</h3>

                {status === 'error' && (
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-sm">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    Please fill in all required fields.
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-bold tracking-widest uppercase text-[#6B6B74] block mb-1.5">Your Name *</label>
                    <input name="name" value={form.name} onChange={onChange} required placeholder="Jane Smith" className="input-field" />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold tracking-widest uppercase text-[#6B6B74] block mb-1.5">Your Email *</label>
                    <input name="email" type="email" value={form.email} onChange={onChange} required placeholder="jane@company.com" className="input-field" />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-bold tracking-widest uppercase text-[#6B6B74] block mb-1.5">Phone / WhatsApp</label>
                  <input name="phone" value={form.phone} onChange={onChange} placeholder="+971 500 000 000" className="input-field" />
                </div>

                <div>
                  <label className="text-[10px] font-bold tracking-widest uppercase text-[#6B6B74] block mb-1.5">Enquiry Type</label>
                  <select name="subject" value={form.subject} onChange={onChange} className="input-field">
                    <option value="Job Opportunity">Job Opportunity</option>
                    <option value="Freelance Project">Freelance Project</option>
                    <option value="Brand Identity Design">Brand Identity Design</option>
                    <option value="Pharma Packaging">Pharma Packaging</option>
                    <option value="Exhibition Design">Exhibition Design</option>
                    <option value="Web Design">Web Design</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="text-[10px] font-bold tracking-widest uppercase text-[#6B6B74] block mb-1.5">Message *</label>
                  <textarea name="message" value={form.message} onChange={onChange} required rows={5} placeholder="Tell me about the opportunity or project…" className="input-field resize-none" />
                </div>

                <button type="submit" disabled={status === 'sending'} className="btn-red w-full disabled:opacity-50">
                  {status === 'sending' ? (
                    <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending…</>
                  ) : (
                    <><Send className="w-4 h-4" />Send Message</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
