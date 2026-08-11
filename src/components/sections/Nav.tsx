import { useState, useEffect } from 'react';
import { useHover } from '../../hooks/useHover';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

function NavLink({
  href,
  children,
  active,
  onClick,
}: {
  href: string;
  children: string;
  active?: boolean;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}) {
  const { hovered, ...hoverProps } = useHover();
  return (
    <a
      href={href}
      onClick={(e) => onClick(e, href)}
      {...hoverProps}
      className={`font-poppins text-[14px] font-medium transition-colors duration-200 relative pb-1 no-underline ${
        active || hovered ? 'text-accent' : 'text-muted'
      }`}
    >
      {children}
      {active && <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent rounded-full shadow-[0_0_8px_rgba(250,204,21,0.6)]" />}
    </a>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // ScrollSpy logic to detect active section
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = document.getElementById(sections[i]);
        if (sec && sec.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(targetId);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[9999] h-[80px] flex items-center transition-all duration-300 ${
        scrolled ? 'backdrop-blur-[20px] bg-bg/90 border-b border-borderC' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-7 w-full flex items-center justify-between">
        {/* Left: Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-2.5 no-underline"
        >
          <div className="grid grid-cols-3 gap-[2px] w-[22px] h-[22px]">
            {[...Array(9)].map((_, i) => (
              <div key={i} className={`rounded-sm ${[0, 2, 4, 6, 8].includes(i) ? 'bg-accent' : 'bg-accent/50'}`} />
            ))}
          </div>
          <span className="font-sora font-semibold text-textLight text-xl hidden sm:block">Aakash</span>
        </a>

        {/* Center: Links */}
        <nav className="hidden md:flex gap-8 items-center justify-center">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.label}
              href={item.href}
              active={activeSection === item.href.substring(1)}
              onClick={handleNavClick}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Right: Button */}
        <div className="flex justify-end">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="px-6 py-3 rounded-full bg-accent text-black font-poppins font-bold text-[13px] no-underline tracking-[0.03em] hover:opacity-90 transition-opacity shadow-[0_4px_14px_rgba(250,204,21,0.3)]"
          >
            Book a 1:1 free Consultation
          </a>
        </div>
      </div>
    </header>
  );
}
