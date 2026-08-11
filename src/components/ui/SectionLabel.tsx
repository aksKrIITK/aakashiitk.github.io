export function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3 mb-3.5">
      <span className="font-mono text-xs text-accent tracking-[0.12em] uppercase">
        {children}
      </span>
      <div className="flex-1 h-px bg-gradient-to-r from-accent/40 to-transparent" />
    </div>
  );
}
