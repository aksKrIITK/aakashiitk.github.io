export function Tag({ label, col }: { label: string; col?: string }) {
  const defaultCol = '#00d4ff'; // accent
  const color = col || defaultCol;
  return (
    <span 
      style={{ color, backgroundColor: `${color}18`, borderColor: `${color}30` }}
      className="text-[11px] font-mono tracking-widest px-2.5 py-[3px] rounded border"
    >
      {label}
    </span>
  );
}
