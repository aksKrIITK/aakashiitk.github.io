import React from 'react';

export function FloatChip({ children, col, style }: { children:React.ReactNode; col:string; style:React.CSSProperties }) {
  return (
    <div style={{
      ...style,
      borderColor: `${col}35`,
      color: col,
    }} className="absolute px-3.5 py-2 rounded-lg bg-bg3 font-mono text-xs shadow-2xl border">
      {children}
    </div>
  );
}
