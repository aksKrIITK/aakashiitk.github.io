import React, { useState } from 'react';
import { useHover } from '../../hooks/useHover';
import { SectionLabel } from '../ui/SectionLabel';

function ContactInfoCard({ icon, label, value, href }: { icon: string; label: string; value: string; href?: string }) {
  const { hovered, ...hoverProps } = useHover();
  const inner = (
    <div
      {...hoverProps}
      className={`flex gap-3.5 items-center p-3.5 px-4.5 rounded-xl border transition-all duration-200 ${
        hovered ? 'bg-bg4 border-accent/30 shadow-[0_4px_14px_rgba(250,204,21,0.1)]' : 'bg-bg3 border-white/10'
      } ${href ? 'cursor-pointer' : 'cursor-default'}`}
    >
      <span className="text-[20px]">{icon}</span>
      <div>
        <div className="font-poppins text-[11px] text-dim uppercase tracking-[0.07em]">{label}</div>
        <div className={`font-poppins text-sm transition-colors duration-200 ${hovered && href ? 'text-accent' : 'text-textLight'}`}>
          {value}
        </div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="no-underline block">
      {inner}
    </a>
  ) : (
    <div className="block">{inner}</div>
  );
}

export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('Select type…');
  const [msg, setMsg] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [statusMsg, setStatusMsg] = useState('');

  const inputClasses =
    'w-full p-3.5 px-4.5 rounded-lg bg-bg3 border border-white/10 text-textLight font-poppins text-[15px] outline-none transition-colors duration-200 focus:border-accent focus:bg-bg4';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !msg.trim()) {
      setStatus('error');
      setStatusMsg('Please fill in your name, email, and message.');
      return;
    }

    setStatus('submitting');
    setStatusMsg('');

    const payload = {
      name: name.trim(),
      email: email.trim(),
      projectType: projectType === 'Select type…' ? 'General Inquiry' : projectType,
      message: msg.trim(),
      timestamp: new Date().toISOString(),
    };

    // Standalone Spring Boot Backend API URL
    const backendApiUrl = import.meta.env.VITE_BACKEND_API_URL || '/api/contact';
    const googleSheetWebhook = import.meta.env.VITE_GOOGLE_SHEETS_URL;

    try {
      if (backendApiUrl) {
        // Standalone Backend REST Submission
        const res = await fetch(backendApiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        const data = await res.json().catch(() => null);

        if (!res.ok || (data && data.success === false)) {
          throw new Error(data?.message || `Backend responded with HTTP ${res.status}`);
        }

        setStatus('success');
        setStatusMsg(data?.message || `Thank you, ${name}! Your message has been received successfully.`);
      } else if (googleSheetWebhook) {
        // Direct Google Apps Script fallback submission
        await fetch(googleSheetWebhook, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        setStatus('success');
        setStatusMsg(`Thank you, ${name}! Your message has been sent successfully.`);
      }

      setName('');
      setEmail('');
      setProjectType('Select type…');
      setMsg('');
    } catch (err: any) {
      console.error('Contact form submission error:', err);
      setStatus('error');
      setStatusMsg(err?.message || 'Failed to send message. Please try again or email directly at akskr.iitk@gmail.com.');
    }
  };

  return (
    <section id="contact" className="py-[100px] px-7 bg-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(theme('colors.violet')_1px,transparent_1px)] bg-[length:28px_28px] opacity-10 pointer-events-none" />

      <div className="max-w-[900px] mx-auto relative z-10">
        <div className="text-center mb-14 flex flex-col items-center">
          <SectionLabel>Let's Connect</SectionLabel>
          <h2 className="font-sora font-extrabold text-[clamp(32px,4vw,52px)] text-textLight m-0 mb-3">Work With Me</h2>
          <p className="font-poppins text-[17px] text-muted">Have a challenging problem? Let's solve it together.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-10">
          {/* Left */}
          <div className="flex flex-col gap-5">
            <ContactInfoCard icon="📍" label="Location" value="India (Remote-friendly)" />
            <ContactInfoCard icon="✉️" label="Email" value="akskr.iitk@gmail.com" href="mailto:akskr.iitk@gmail.com" />
            <ContactInfoCard icon="🔗" label="LinkedIn" value="aakashkumariitk" href="https://www.linkedin.com/in/aakashkumariitk/" />
            <ContactInfoCard icon="💻" label="GitHub" value="aksKrIITK" href="https://github.com/aksKrIITK" />

            <div className="mt-2 p-5 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
              <div className="font-sora font-bold text-textLight text-[15px] mb-2">Currently Open To</div>
              {[
                'Full-time Backend Roles',
                'Distributed Systems Projects',
                'GenAI / LLM Platform Work',
                'Consulting Opportunities',
              ].map((r) => (
                <div key={r} className="font-poppins text-[13px] text-white/70 mb-1.5 flex gap-2">
                  <span className="text-accent">▸</span>
                  {r}
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-bg3 rounded-2xl p-9 border border-white/10">
            {/* Status Alert Banners */}
            {status === 'success' && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-500/15 border border-emerald-400/40 text-emerald-300 font-poppins text-[13px] leading-relaxed flex items-start gap-3">
                <span className="text-lg">✅</span>
                <div>{statusMsg}</div>
              </div>
            )}

            {status === 'error' && (
              <div className="mb-6 p-4 rounded-xl bg-rose-500/15 border border-rose-400/40 text-rose-300 font-poppins text-[13px] leading-relaxed flex items-start gap-3">
                <span className="text-lg">⚠️</span>
                <div>{statusMsg}</div>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block font-poppins text-xs text-muted tracking-[0.06em] uppercase mb-2">Name</label>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className={inputClasses}
                />
              </div>
              <div>
                <label className="block font-poppins text-xs text-muted tracking-[0.06em] uppercase mb-2">Email</label>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className={inputClasses}
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block font-poppins text-xs text-muted tracking-[0.06em] uppercase mb-2">Project Type</label>
              <select
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
                className={`${inputClasses} appearance-none cursor-pointer`}
              >
                {['Select type…', 'Full-time Role', 'Consulting', 'Project Collaboration', 'Open Source'].map((o) => (
                  <option key={o} value={o} className="bg-bg3 text-textLight">
                    {o}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-6">
              <label className="block font-poppins text-xs text-muted tracking-[0.06em] uppercase mb-2">Message</label>
              <textarea
                required
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                placeholder="Tell me about the challenge you're trying to solve…"
                rows={5}
                className={`${inputClasses} resize-none`}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full p-3.5 rounded-full bg-accent text-black font-poppins font-bold text-base border-none cursor-pointer tracking-[0.03em] hover:opacity-90 transition-all shadow-[0_4px_14px_rgba(250,204,21,0.4)] uppercase disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {status === 'submitting' ? (
                <>
                  <span className="w-4 h-4 rounded-full border-2 border-black border-t-transparent animate-spin" />
                  Sending Message...
                </>
              ) : (
                'Send Message →'
              )}
            </button>

            <p className="font-poppins text-[13px] text-dim text-center mt-3.5">
              Or email directly:{' '}
              <a href="mailto:akskr.iitk@gmail.com" className="text-accent no-underline hover:text-white transition-colors">
                akskr.iitk@gmail.com
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
