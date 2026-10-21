import { useLang } from '@/context/LanguageContext';
import { Languages } from 'lucide-react';

export default function LanguageToggle() {
  const { lang, toggleLang, isRTL } = useLang();

  return (
    <button
      onClick={toggleLang}
      aria-label="Toggle language"
      className={`fixed top-5 z-[60] group flex items-center gap-2 px-3.5 py-2 rounded-full glass border border-white/10 hover:border-lime/40 transition-all duration-500 hover:scale-105 ${
        isRTL ? 'left-4 lg:left-6' : 'right-4 lg:right-6'
      }`}
      style={{ marginTop: '0.5rem' }}
    >
      <Languages className="w-3.5 h-3.5 text-lime" strokeWidth={1.5} />
      <span className="flex items-center gap-1.5 text-xs font-display font-semibold tracking-wide">
        <span className={lang === 'en' ? 'text-bone' : 'text-bone/30'}>EN</span>
        <span className="text-bone/20">|</span>
        <span className={lang === 'ar' ? 'text-bone' : 'text-bone/30'}>ع</span>
      </span>
    </button>
  );
}
