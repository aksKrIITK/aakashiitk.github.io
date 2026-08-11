import { useHover } from '../../hooks/useHover';
import { SectionLabel } from '../ui/SectionLabel';
import { Tag } from '../ui/Tag';
import { EXPERIENCES } from '../../data/portfolio';

function ExpCard({ exp, index }: { exp: typeof EXPERIENCES[0]; index: number }) {
  const { hovered, ...hoverProps } = useHover();
  const accent = index === 0 ? '#FACC15' : '#EAB308'; // accent or secondary yellow

  return (
    <div {...hoverProps} 
      className={`border rounded-2xl p-8 md:p-9 transition-all duration-300 border-l-[3px]  ${
        hovered ? 'bg-bg4 shadow-[0_10px_30px_rgba(250,204,21,0.1)]' : 'bg-bg3 border-white/10'
      }`}
      style={{
        borderLeftColor: accent,
        borderColor: hovered ? `${accent}35` : 'rgba(255, 255, 255, 0.1)'
      }}>
      
      <div className="flex justify-between items-start mb-5 flex-wrap gap-3">
        <div>
          <h3 className="font-sora font-bold text-textLight text-[22px] m-0 mb-1.5">{exp.role}</h3>
          <p className="font-poppins font-semibold text-[15px] m-0" style={{ color: accent }}>{exp.company}</p>
        </div>
        <div className="flex flex-col items-end gap-1.5">
          <span 
            className="font-mono text-xs text-muted px-3 py-1 rounded-md border"
            style={{ backgroundColor: `${accent}14`, borderColor: `${accent}28` }}>
            {exp.period}
          </span>
          <span className="font-poppins text-[11px] text-dim uppercase tracking-[0.08em]">{exp.type}</span>
        </div>
      </div>

      <p className="font-poppins text-[15px] leading-[1.8] text-muted mb-6">{exp.description}</p>

      {/* Achievements */}
      <div className="mb-6">
        {exp.achievements.map((a, i) => (
          <div key={i} className="flex gap-2.5 items-start mb-2">
            <span className="text-[14px] shrink-0 mt-0.5" style={{ color: accent }}>▸</span>
            <span className="font-poppins text-[14px] text-muted leading-[1.6]">{a}</span>
          </div>
        ))}
      </div>

      {/* Tech */}
      <div className="flex gap-2 flex-wrap">
        {exp.tech.map(t => <Tag key={t} label={t} col={accent} />)}
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="py-[100px] px-7 bg-bg">
      <div className="max-w-[1200px] mx-auto">
        <SectionLabel>Professional Journey</SectionLabel>
        <h2 className="font-sora font-extrabold text-[clamp(32px,4vw,52px)] text-textLight m-0 mb-2">
          Work Experience
        </h2>
        <p className="font-poppins text-[17px] text-muted mb-14">
          2+ years building scalable, secure & intelligent systems in production.
        </p>

        <div className="flex flex-col gap-6">
          {EXPERIENCES.map((exp, i) => <ExpCard key={exp.id} exp={exp} index={i} />)}
        </div>
      </div>
    </section>
  );
}
