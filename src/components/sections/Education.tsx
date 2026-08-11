import { useHover } from '../../hooks/useHover';
import { SectionLabel } from '../ui/SectionLabel';
import { EDUCATION } from '../../data/portfolio';

function EduCard({ edu }: { edu: typeof EDUCATION[0] }) {
  const h = useHover();
  return (
    <div {...h} className={`border rounded-2xl p-7 flex gap-5 items-start transition-all duration-300  ${
      h.hovered ? 'bg-bg4 shadow-[0_10px_30px_rgba(250,204,21,0.1)]' : 'bg-bg3 border-white/10'
    }`}
    style={{ borderColor: h.hovered ? `${edu.col}40` : 'rgba(255, 255, 255, 0.1)' }}>
      <div className="w-12 h-12 rounded-xl shrink-0 flex items-center justify-center font-sora font-extrabold text-sm border"
           style={{ backgroundColor: `${edu.col}18`, borderColor: `${edu.col}35`, color: edu.col }}>
        {edu.period.split('–')[0].trim().slice(-2)}
      </div>
      <div>
        <div className="font-sora font-bold text-textLight text-base mb-1">{edu.degree}</div>
        <div className="font-poppins font-medium text-sm mb-2" style={{ color: edu.col }}>{edu.school}</div>
        <div className="flex gap-2.5 flex-wrap items-center">
          <span className="font-mono text-[11px] text-dim">{edu.period}</span>
          <span className="font-mono text-[11px] px-2 py-0.5 rounded" style={{ color: edu.col, backgroundColor: `${edu.col}12` }}>{edu.grade}</span>
        </div>
      </div>
    </div>
  );
}

export function Education() {
  return (
    <section id="education" className="py-[100px] px-7 bg-bg2">
      <div className="max-w-[1200px] mx-auto">
        <SectionLabel>Academic Background</SectionLabel>
        <h2 className="font-sora font-extrabold text-[clamp(32px,4vw,52px)] text-textLight m-0 mb-2">
          Education
        </h2>
        <p className="font-poppins text-[17px] text-muted mb-14">
          Strong academic foundation from premier institutions.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {EDUCATION.map(edu => <EduCard key={edu.id} edu={edu} />)}
        </div>
      </div>
    </section>
  );
}
