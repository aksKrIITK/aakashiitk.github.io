import { useState } from 'react';
import { SectionLabel } from '../ui/SectionLabel';
import { PROJECTS } from '../../data/portfolio';

type ProjectType = typeof PROJECTS[0];

function ProjectCard({ project }: { project: ProjectType }) {
  return (
    <div className="rounded-[22px] bg-bg3 border border-white/10 p-6 md:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:border-accent/50 hover:shadow-[0_12px_40px_rgba(250,204,21,0.15)] group relative overflow-hidden">
      {/* Accent glow line on top hover */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div>
        {/* Header Badge & Title */}
        <div className="flex items-center justify-between gap-3 mb-3">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent font-poppins font-semibold text-[11px] uppercase tracking-wider">
            {project.featured ? 'Featured System' : 'Production System'}
          </span>

          <div className="flex items-center gap-2">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Live Demo"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-accent hover:border-accent hover:bg-accent/10 transition-all text-xs"
              >
                ↗
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Repository"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-accent hover:border-accent hover:bg-accent/10 transition-all text-xs"
              >
                💻
              </a>
            )}
          </div>
        </div>

        <h3 className="font-sora font-bold text-[20px] md:text-[22px] text-textLight mb-2 group-hover:text-accent transition-colors leading-tight">
          {project.title}
        </h3>

        <p className="font-poppins text-[13px] md:text-[14px] text-muted leading-[1.65] mb-5">
          {project.desc}
        </p>
      </div>

      <div>
        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-white/80 font-poppins text-[11px] font-medium"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action Buttons Row */}
        <div className="flex items-center gap-3 pt-4 border-t border-white/10">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2.5 px-4 rounded-xl bg-accent text-black font-poppins font-bold text-[12px] text-center no-underline hover:scale-[1.02] active:scale-95 transition-all shadow-[0_4px_14px_rgba(250,204,21,0.25)] flex items-center justify-center gap-1.5"
            >
              <span>🚀 Live Demo</span>
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2.5 px-4 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-textLight font-poppins font-semibold text-[12px] text-center no-underline transition-all flex items-center justify-center gap-1.5 hover:border-white/40"
            >
              <span>💻 GitHub</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<'all' | 'ai' | 'saas'>('all');

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'ai') return p.tech.some((t) => ['LangGraph', 'RAG', 'Vector Databases', 'FastAPI'].includes(t));
    if (filter === 'saas') return p.tech.some((t) => ['Spring Boot', 'MySQL', 'React', 'AWS'].includes(t));
    return true;
  });

  return (
    <section id="projects" className="py-[100px] px-7 bg-bg relative">
      <div className="max-w-[1200px] mx-auto">
        <SectionLabel>Featured Work</SectionLabel>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="font-sora font-extrabold text-[clamp(32px,4vw,52px)] text-textLight m-0 mb-3 leading-tight">
              Production Systems & AI Architecture
            </h2>
            <p className="font-poppins text-[15px] md:text-[17px] text-muted max-w-[650px] m-0">
              High-impact SaaS platforms, multi-agent AI systems, and microservices engineered for production scale.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 bg-bg3 border border-white/10 p-1.5 rounded-full shrink-0">
            {(
              [
                ['all', 'All Projects'],
                ['ai', 'AI / Agentic'],
                ['saas', 'Full Stack SaaS'],
              ] as const
            ).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`px-4 py-2 rounded-full font-poppins text-[12px] font-semibold transition-all cursor-pointer border ${
                  filter === key
                    ? 'bg-accent border-accent text-black shadow-[0_0_12px_rgba(250,204,21,0.3)]'
                    : 'bg-transparent border-transparent text-muted hover:text-white'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
