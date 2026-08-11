import { useHover } from '../../hooks/useHover';
import { SectionLabel } from '../ui/SectionLabel';
import { TESTIMONIALS } from '../../data/portfolio';

function TestCard({ t, index }: { t: typeof TESTIMONIALS[0]; index: number }) {
  const { hovered, ...hoverProps } = useHover();
  const cols = ['#FF4D4D', '#6366F1', '#EC4899']; // accent, violet, amber
  const col = cols[index % cols.length];

  return (
    <div {...hoverProps} className={`border rounded-[18px] p-8 transition-all duration-300 relative  ${
      hovered ? 'bg-bg4 -translate-y-1 shadow-[0_10px_30px_rgba(255,77,77,0.1)]' : 'bg-bg3 border-white/10 translate-y-0'
    }`} style={{ borderColor: hovered ? `${col}30` : 'rgba(255, 255, 255, 0.1)' }}>
      <div className="font-sora font-extrabold text-[52px] absolute top-4 right-6 leading-none" style={{ color: `${col}20` }}>"</div>

      <div className="flex gap-3.5 items-center mb-5">
        <div className="w-11 h-11 rounded-xl flex items-center justify-center font-sora font-extrabold text-sm border"
             style={{ backgroundColor: `${col}20`, borderColor: `${col}40`, color: col }}>
          {t.initials}
        </div>
        <div>
          <div className="font-sora font-bold text-[15px] text-textLight">{t.name}</div>
          <div className="font-poppins text-[13px] text-dim">{t.role}</div>
        </div>
      </div>

      <div className="flex gap-[3px] mb-4">
        {[...Array(5)].map((_, i) => <span key={i} className="text-sm" style={{ color: col }}>★</span>)}
      </div>

      <p className="font-poppins text-[15px] leading-[1.8] text-muted m-0 italic">
        "{t.text}"
      </p>
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="py-[100px] px-7 bg-bg2">
      <div className="max-w-[1200px] mx-auto">
        <SectionLabel>Social Proof</SectionLabel>
        <h2 className="font-sora font-extrabold text-[clamp(32px,4vw,52px)] text-textLight m-0 mb-2">
          What People Say
        </h2>
        <p className="font-poppins text-[17px] text-muted mb-14">
          Feedback from clients and colleagues.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => <TestCard key={t.id} t={t} index={i} />)}
        </div>
      </div>
    </section>
  );
}
