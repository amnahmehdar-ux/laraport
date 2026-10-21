import { useEffect, useState } from 'react';
import { useScrollProgress } from '@/hooks/useReveal';
import { useLang } from '@/context/LanguageContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const progress = useScrollProgress();
  const { t } = useLang();

  const navLinks = [
    { label: t.navAbout, href: '#about' },
    { label: t.navWork, href: '#work' },
    { label: t.navContact, href: '#contact' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-ink/80 backdrop-blur-md border-b border-white/5 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="font-display font-bold text-lg tracking-tight text-bone hover-underline"
          >
            Lara<span className="text-lime">.</span>Q
          </a>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-body text-bone/70 hover:text-bone transition-colors duration-300 hover-underline"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="text-sm font-body font-medium text-ink bg-lime px-5 py-2 rounded-full hover:bg-bone transition-colors duration-300"
            >
              {t.navLetsTalk}
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-bone transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-bone transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-bone transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>

        <div className="absolute bottom-0 left-0 h-0.5 bg-lime" style={{ width: `${progress * 100}%` }} />
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-ink/95 backdrop-blur-lg transition-all duration-500 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-display text-3xl text-bone hover:text-lime transition-colors"
              style={{
                transitionDelay: menuOpen ? `${i * 80}ms` : '0ms',
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="mt-4 text-base font-body font-medium text-ink bg-lime px-8 py-3 rounded-full"
          >
            {t.navLetsTalk}
          </a>
        </div>
      </div>
    </>
  );
}
