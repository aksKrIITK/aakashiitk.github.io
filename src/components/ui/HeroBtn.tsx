import React from 'react';
import { useHover } from '../../hooks/useHover';

export function HeroBtn({ href, children, primary, ghost }: { href:string; children:React.ReactNode; primary?:boolean; ghost?:boolean }) {
  const h = useHover();
  let baseClasses = "px-7 py-3 rounded-full font-poppins font-bold text-sm inline-block transition-all duration-200 no-underline ";
  
  if (primary) {
    baseClasses += "bg-accent text-white border-none shadow-[0_4px_14px_rgba(255,77,77,0.4)]";
  } else if (ghost) {
    baseClasses += "bg-transparent border border-dim text-muted hover:text-white hover:border-white";
  } else {
    baseClasses += "bg-transparent border border-borderW text-textLight hover:bg-bg3";
  }

  const hoverStyle = h.hovered 
    ? { opacity: 0.85, transform: 'translateY(-2px)' } 
    : { opacity: 1, transform: 'translateY(0)' };

  return (
    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" 
       {...h}
       className={baseClasses}
       style={hoverStyle}>
      {children}
    </a>
  );
}
