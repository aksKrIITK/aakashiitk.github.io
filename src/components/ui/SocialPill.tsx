import { useHover } from '../../hooks/useHover';

export function SocialPill({ label, url }: { label:string; url:string }) {
  const h = useHover();
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" {...h}
      style={{
        borderColor: h.hovered ? 'theme("colors.borderC")' : 'theme("colors.borderW")',
      }}
      className={`px-4 py-[7px] rounded-full font-poppins text-[13px] font-medium transition-all duration-200 no-underline border ${
        h.hovered ? 'bg-accent/10 border-accent/20 text-accent' : 'bg-bg3 border-borderW text-muted'
      }`}>
      {label}
    </a>
  );
}
