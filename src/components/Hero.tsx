import { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { useLang } from '@/context/LanguageContext';

export default function Hero() {
  const [entered, setEntered] = useState(false);
  const { t, isRTL } = useLang();

  useEffect(() => {
    const timer = setTimeout(() => setEntered(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      onClick={handleClick}
      className="relative min-h-screen flex flex-col items-center justify-center cursor-pointer overflow-hidden bg-ink"
    >
      <div className="noise-overlay" />

      {/* Floating gradient orbs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-lime/10 rounded-full blur-[120px] blob-pulse" />
      <div
        className="absolute bottom-1/4 right-10 w-80 h-80 bg-coral/10 rounded-full blur-[130px] blob-pulse"
        style={{ animationDelay: '2s' }}
      />

      <div className="relative z-10 text-center px-6 max-w-5xl">
        {/* Tag */}
        <div
          className={`inline-flex items-center gap-2 mb-8 transition-all duration-700 ${
            entered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="w-2 h-2 bg-lime rounded-full animate-pulse" />
          <span className="text-xs font-body uppercase tracking-[0.25em] text-mist">
            {t.heroTag}
          </span>
        </div>

        {/* Name */}
        <h1
          className={`font-display font-bold tracking-tighter leading-[0.9] text-bone transition-all duration-1000 ${
            entered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ fontSize: 'clamp(3rem, 12vw, 9rem)' }}
        >
          {t.heroFirstName}
          <br />
          <span className="font-serif italic font-normal text-bone/90" style={isRTL ? { fontStyle: 'normal' } : undefined}>
            {t.heroLastName}
          </span>
        </h1>

        {/* Title */}
        <p
          className={`mt-6 font-body text-base md:text-lg text-mist max-w-xl mx-auto transition-all duration-1000 delay-300 ${
            entered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {t.heroTitle}
        </p>

        {/* Interactive cue */}
        <div
          className={`mt-12 flex flex-col items-center gap-3 transition-all duration-1000 delay-500 ${
            entered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="text-xs font-body uppercase tracking-[0.2em] text-bone/40">
            {t.heroCue}
          </span>
          <div className="scroll-bounce">
            <ArrowDown className="w-5 h-5 text-lime" strokeWidth={1.5} />
          </div>
        </div>
      </div>

      {/* Corner labels */}
      <div className="absolute top-24 left-6 lg:left-10 hidden md:block">
        <span className="text-[10px] font-body uppercase tracking-[0.3em] text-bone/20">
          {t.heroLocation}
        </span>
      </div>
      <div className="absolute top-24 right-6 lg:right-10 hidden md:block">
        <span className="text-[10px] font-body uppercase tracking-[0.3em] text-bone/20">
          {t.heroEst}
        </span>
      </div>
    </section>
  );
}
