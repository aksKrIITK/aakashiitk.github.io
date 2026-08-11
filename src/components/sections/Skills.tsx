import { useHover } from '../../hooks/useHover';
import { SectionLabel } from '../ui/SectionLabel';
import { SKILLS, PROFICIENCY } from '../../data/portfolio';

function SkillCard({ data }: { data: typeof SKILLS[0] }) {
  const { hovered, ...hoverProps } = useHover();
  return (
    <div {...hoverProps} className={`border rounded-2xl p-6 transition-all duration-300  ${
      hovered ? 'bg-bg4 -translate-y-1 shadow-[0_10px_30px_rgba(250,204,21,0.1)]' : 'bg-bg3 border-white/10 translate-y-0'
    }`}
    style={{ borderColor: hovered ? `${data.col}60` : undefined }}>
      <div 
        className="font-sora font-bold text-[15px] mb-4" 
        style={{ color: hovered ? data.col : 'theme("colors.textLight")' }}
      >
        {data.icon} {data.cat}
      </div>
      <ul className="m-0 p-0 list-none">
        {data.items.map(it => (
          <li key={it} className="font-poppins text-[13px] text-muted mb-2 flex items-center gap-2">
            <span className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: data.col }} />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProfBar({ data }: { data: typeof PROFICIENCY[0] }) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="font-poppins text-sm text-textLight font-medium">{data.skill}</span>
        <span className="font-mono text-xs font-medium" style={{ color: data.col }}>{data.pct}%</span>
      </div>
      <div className="h-1 rounded bg-bg3 overflow-hidden">
        <div className="h-full rounded" style={{ width: `${data.pct}%`, background: `linear-gradient(90deg, ${data.col}, ${data.col}aa)` }} />
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-[100px] px-7 bg-bg2 relative">
      <div className="absolute inset-0 bg-[radial-gradient(theme('colors.accent')_1px,transparent_1px)] bg-[length:28px_28px] opacity-10 pointer-events-none" />
      <div className="max-w-[1200px] mx-auto relative z-10">
        <SectionLabel>Skills & Expertise</SectionLabel>
        <h2 className="font-sora font-extrabold text-[clamp(32px,4vw,52px)] text-textLight m-0 mb-2">
          Technical Arsenal
        </h2>
        <p className="font-poppins text-[17px] text-muted mb-14">
          Specialized in backend engineering and distributed systems with a full-stack edge.
        </p>

        {/* Skill categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4.5 mb-14">
          {SKILLS.map(s => <SkillCard key={s.cat} data={s} />)}
        </div>

        {/* Proficiency bars */}
        <div className="bg-bg3  rounded-2xl p-10 border border-white/10">
          <h3 className="font-sora font-bold text-textLight text-[22px] m-0 mb-8">Proficiency</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-12">
            {PROFICIENCY.map(p => <ProfBar key={p.skill} data={p} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
