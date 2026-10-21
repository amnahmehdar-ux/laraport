import { useReveal } from '@/hooks/useReveal';
import { capabilities } from '@/data/projects';
import { useLang } from '@/context/LanguageContext';
import { Sparkles } from 'lucide-react';

export default function About() {
  const { ref, revealed } = useReveal<HTMLDivElement>();
  const { t, lang } = useLang();

  return (
    <section id="about" className="relative bg-ink py-24 md:py-36 overflow-hidden">
      <div className="noise-overlay" />

      {/* Ticker / Marquee - تعرض المهارات الآن هنا */}
      <div className="relative overflow-hidden border-y border-white/5 py-5 mb-24">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...capabilities, ...capabilities].map((cap, i) => (
            <span
              key={i}
              className="inline-flex items-center mx-6 text-sm font-display font-medium text-bone/60 tracking-wider uppercase hover:text-lime transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-lime/60 inline-block mr-4 ml-4" />
              {cap[lang]}
            </span>
          ))}
        </div>
      </div>

      <div
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10"
      >
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left: Section label */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <div className={`reveal ${revealed ? 'revealed' : ''}`}>
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-4 h-4 text-lime" strokeWidth={1.5} />
                <span className="text-xs font-body uppercase tracking-[0.25em] text-mist">
                  {t.aboutLabel}
                </span>
              </div>
              <h2 className="font-display font-bold text-3xl md:text-5xl text-bone leading-[1.05] tracking-tight">
                {t.aboutHeading1}
                <br />
                <span className="font-serif italic font-normal text-lime">{t.aboutHeading2}</span>
                <br />
                {t.aboutHeading3}
              </h2>
            </div>
          </div>

          {/* Right: Bio */}
          <div className="lg:col-span-8 space-y-12">
            <div className={`reveal reveal-delay-1 ${revealed ? 'revealed' : ''}`}>
              <p className="font-serif text-2xl md:text-3xl leading-[1.5] text-bone/90 font-normal">
                {t.aboutBio1}
                {t.aboutBio1Highlight && (
                  <span className="text-lime"> {t.aboutBio1Highlight}</span>
                )}
              </p>
              {t.aboutBio2 && (
                <p className="mt-6 font-body text-base md:text-lg leading-[1.7] text-mist max-w-2xl">
                  {t.aboutBio2}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}