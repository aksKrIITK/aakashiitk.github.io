import { useState, useEffect } from 'react';

const HERO_CONCEPTS = [
  {
    id: 1,
    tag: '1. The Builder Angle',
    title: 'The Builder Angle',
    headlinePrefix: 'I build AI systems that ',
    accentPart: 'actually ship.',
    subline:
      'Most AI demos die in a notebook. I take them to production — RAG pipelines matching 3,000+ RFQs, multi-agent systems with human-in-the-loop approval, deployed and serving real users.',
    cta: 'See the systems →',
    ctaHref: '#projects',
  },
  {
    id: 2,
    tag: '2. The Problem-First Angle',
    title: 'Problem-First Angle',
    headlinePrefix: "Your backend is slow. Your AI features don't ship. ",
    accentPart: 'I fix both.',
    subline:
      'Cut a reporting API from 4 minutes to under 10 seconds. Reduced p95 latency 40%. Then built the RAG and multi-agent layer on top of it.',
    cta: 'View the work →',
    ctaHref: '#experience',
  },
  {
    id: 3,
    tag: '3. The Founder Angle',
    title: 'The Founder Angle',
    headlinePrefix: "I don't just write code — ",
    accentPart: 'I ship products.',
    subline:
      'Founded Godizy from zero to 10 paying SMB customers — architecture, pricing, sales, all solo. Now I bring that same end-to-end ownership to AI-native backend systems.',
    cta: 'Explore Godizy →',
    ctaHref: '#projects',
  },
  {
    id: 4,
    tag: '4. Technical Depth',
    title: 'Technical Depth',
    headlinePrefix: 'RAG. LangGraph. Multi-agent systems. ',
    accentPart: 'Production code serving real tenants.',
    subline:
      'ACL-aware pgvector RAG, Supervisor-Specialist agent architectures, MCP tool connectors, validated by real test suites — not toy demos.',
    cta: 'Check the architecture →',
    ctaHref: '#skills',
  },
  {
    id: 5,
    tag: '5. Contrarian / Story Angle',
    title: 'Contrarian / Story Angle',
    headlinePrefix: 'Spent 2 years studying geopolitics. Now I debug systems the same way — ',
    accentPart: 'gather evidence, weigh tradeoffs, commit.',
    subline:
      'That analytical rigor shows up in how I approach system design: IIT Kanpur engineer, JNU-trained researcher, now building AI infrastructure that handles real scale.',
    cta: 'Read my approach →',
    ctaHref: '#contact',
  },
];

export function Hero() {
  const [conceptIndex, setConceptIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const prevConcept = () => {
    setConceptIndex((prev) => (prev - 1 + HERO_CONCEPTS.length) % HERO_CONCEPTS.length);
  };

  const nextConcept = () => {
    setConceptIndex((prev) => (prev + 1) % HERO_CONCEPTS.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setConceptIndex((prev) => (prev + 1) % HERO_CONCEPTS.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused, conceptIndex]);

  return (
    <section id="home" className="min-h-screen flex flex-col relative overflow-hidden bg-black pt-16">
      {/* Background Text (Deep back) */}
      <div className="absolute top-[12%] left-1/2 -translate-x-1/2 text-[clamp(120px,25vw,480px)] font-sora font-black text-white/[0.03] blur-[2px] pointer-events-none z-0 select-none tracking-tighter uppercase whitespace-nowrap">
        AAKASH
      </div>

      {/* Hero Image */}
      <div className="relative w-full h-[450px] md:h-[520px] flex items-center justify-center z-10 pointer-events-none shrink-0 translate-y-6">
        <div className="relative h-full flex items-center justify-center scale-125">
          <img
            src="/hero_3d.jpeg"
            alt="Aakash Character"
            className="h-full w-auto object-contain opacity-100 drop-shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
          />
        </div>
      </div>

      {/* Content & 3D Rotating Cards Container */}
      <div
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="w-full z-20 relative flex flex-col items-center justify-center px-4 pb-6 bg-gradient-to-t from-black via-black/95 to-transparent gap-4 mt-auto"
      >
        {/* 3D Rotating Cards Carousel Deck */}
        <div className="relative w-full max-w-[900px] h-[260px] md:h-[240px] flex items-center justify-center perspective-[1000px] my-2">
          {/* Navigation Arrows */}
          <button
            onClick={prevConcept}
            aria-label="Previous Card"
            className="absolute left-1 md:left-4 z-40 w-10 h-10 rounded-full bg-black/70 border border-white/20 text-white hover:border-accent hover:text-accent hover:bg-black/90 transition-all flex items-center justify-center cursor-pointer shadow-lg backdrop-blur-md"
          >
            ←
          </button>

          <button
            onClick={nextConcept}
            aria-label="Next Card"
            className="absolute right-1 md:right-4 z-40 w-10 h-10 rounded-full bg-black/70 border border-white/20 text-white hover:border-accent hover:text-accent hover:bg-black/90 transition-all flex items-center justify-center cursor-pointer shadow-lg backdrop-blur-md"
          >
            →
          </button>

          {/* Render All Cards in 3D Stack */}
          {HERO_CONCEPTS.map((concept, idx) => {
            const total = HERO_CONCEPTS.length;
            let offset = (idx - conceptIndex + total) % total;
            if (offset > total / 2) offset -= total;

            const isActive = offset === 0;
            const isPrev = offset === -1 || offset === total - 1;
            const isNext = offset === 1 || offset === -(total - 1);

            let styleTransform = 'translateX(0%) scale(1) rotateY(0deg)';
            let opacity = 0;
            let zIndex = 0;
            let pointerEvents: 'auto' | 'none' = 'none';

            if (isActive) {
              styleTransform = 'translateX(0%) scale(1) rotateY(0deg)';
              opacity = 1;
              zIndex = 30;
              pointerEvents = 'auto';
            } else if (isNext) {
              styleTransform = 'translateX(45%) scale(0.85) rotateY(-10deg)';
              opacity = 0.4;
              zIndex = 20;
              pointerEvents = 'auto';
            } else if (isPrev) {
              styleTransform = 'translateX(-45%) scale(0.85) rotateY(10deg)';
              opacity = 0.4;
              zIndex = 20;
              pointerEvents = 'auto';
            } else {
              styleTransform = `translateX(${offset > 0 ? '90%' : '-90%'}) scale(0.7) rotateY(${offset > 0 ? '-20deg' : '20deg'})`;
              opacity = 0;
              zIndex = 10;
              pointerEvents = 'none';
            }

            return (
              <div
                key={concept.id}
                onClick={() => setConceptIndex(idx)}
                className={`absolute w-[88%] max-w-[700px] p-5 md:p-6 rounded-[22px] border transition-all duration-500 ease-out flex flex-col justify-between cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-b from-black/90 via-zinc-900/90 to-black border-accent/60 shadow-[0_10px_40px_rgba(250,204,21,0.2)] backdrop-blur-xl'
                    : 'bg-zinc-900/80 border-white/10 hover:border-white/30 backdrop-blur-md'
                }`}
                style={{
                  transform: styleTransform,
                  opacity,
                  zIndex,
                  pointerEvents,
                }}
              >
                {/* Card Header Badge */}
                <div className="flex items-center justify-between mb-2">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/15 border border-accent/40 text-accent font-poppins font-bold text-[11px] uppercase tracking-wider">
                    <span>{concept.tag}</span>
                  </div>
                  <span className="text-white/40 font-sora font-extrabold text-xs">
                    0{concept.id} / 0{HERO_CONCEPTS.length}
                  </span>
                </div>

                {/* Card Headline */}
                <h2 className="font-sora font-extrabold text-[clamp(16px,2.5vw,22px)] leading-[1.25] text-white tracking-tight m-0 uppercase">
                  {concept.headlinePrefix}
                  <span className="text-accent relative inline-block drop-shadow-[0_0_12px_rgba(250,204,21,0.4)]">
                    {concept.accentPart}
                  </span>
                </h2>

                {/* Card Subline Description */}
                <p className="font-poppins text-[12px] md:text-[13px] leading-[1.6] text-white/80 my-2 line-clamp-3">
                  {concept.subline}
                </p>

                {/* Card Action Footer */}
                <div className="flex items-center justify-between gap-4 mt-1 pt-2 border-t border-white/10">
                  <a
                    href="#contact"
                    onClick={(e) => e.stopPropagation()}
                    className="px-5 py-2 rounded-full bg-accent text-black font-poppins font-black text-[12px] no-underline hover:scale-105 transition-all uppercase tracking-wider shadow-[0_0_18px_rgba(250,204,21,0.4)]"
                  >
                    Book Consultation
                  </a>

                  <a
                    href={concept.ctaHref}
                    onClick={(e) => e.stopPropagation()}
                    className="text-accent font-poppins font-bold text-[12px] no-underline hover:underline flex items-center gap-1 group"
                  >
                    {concept.cta}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Card Deck Progress Dots */}
        <div className="flex gap-2 items-center justify-center mt-1">
          {HERO_CONCEPTS.map((_, i) => (
            <button
              key={i}
              onClick={() => setConceptIndex(i)}
              aria-label={`Go to card ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                i === conceptIndex ? 'w-8 bg-accent shadow-[0_0_10px_rgba(250,204,21,0.6)]' : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Stats Row */}
      <div className="w-full z-20 relative flex flex-wrap items-center justify-center gap-6 md:gap-16 px-6 py-4 border-t border-white/10 bg-black mt-auto">
        {[
          ['50+', 'Systems Delivered'],
          ['98%', 'Efficiency Gain'],
          ['5+', 'Years Engineering'],
          ['24/7', 'Strategic Support'],
        ].map(([n, l]) => (
          <div key={l} className="flex flex-col items-center group cursor-default">
            <div className="font-sora font-bold text-[24px] md:text-[32px] text-white leading-none tracking-tighter mb-1 group-hover:text-accent transition-colors duration-300">
              {n}
            </div>
            <div className="font-poppins text-[9px] md:text-[10px] text-white/50 uppercase tracking-[0.2em] text-center font-bold">
              {l}
            </div>
          </div>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40 z-30 pointer-events-none">
        <div className="w-[1px] h-6 bg-gradient-to-b from-accent to-transparent animate-bounce" />
        <span className="font-poppins text-[8px] uppercase tracking-[0.3em] text-accent">Scroll</span>
      </div>
    </section>
  );
}
