import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';

export type Lang = 'en' | 'ar';

interface UIStrings {
  // Nav
  navAbout: string;
  navWork: string;
  navContact: string;
  navLetsTalk: string;

  // Hero
  heroTag: string;
  heroFirstName: string;
  heroLastName: string;
  heroTitle: string;
  heroCue: string;
  heroLocation: string;
  heroEst: string;

  // About
  aboutLabel: string;
  aboutHeading1: string;
  aboutHeading2: string;
  aboutHeading3: string;
  aboutBio1: string;
  aboutBio1Highlight: string;
  aboutBio2: string;
  statYears: string;
  statCampaigns: string;
  statBrands: string;
  capabilitiesLabel: string;

  // Work
  workLabel: string;
  workHeading1: string;
  workHeading2: string;
  workDescription: string;
  readFullPiece: string;
  viewOnInstagram: string;

  // Modal
  modalTheChallenge: string;
  modalTheCopy: string;
  modalClose: string;

  // Contact
  contactLabel: string;
  contactHeading1: string;
  contactHeading2: string;
  contactDescription: string;
  contactEmail: string;
  footerTitle: string;
  footerCopy: string;
}

const translations: Record<Lang, UIStrings> = {
  en: {
    navAbout: 'About',
    navWork: 'Work',
    navContact: 'Contact',
    navLetsTalk: "Let's talk",

    heroTag: 'Portfolio · 2026',
    heroFirstName: 'Lara',
    heroLastName: 'Qashgari',
    heroTitle: 'Content Writer & Photographer',
    heroCue: 'Click anywhere to explore',
    heroLocation: '',
    heroEst: '',

    aboutLabel: 'About',
    aboutHeading1: 'Words that',
    aboutHeading2: 'move people',
    aboutHeading3: 'into action.',
    aboutBio1:
      'I am a Content Writer and Multimedia Creator specializing in content creation, photography, video editing, and social media reporting to help brands grow their digital presence.',
    aboutBio1Highlight: '',
    aboutBio2: '',
    statYears: '',
    statCampaigns: '',
    statBrands: '',
    capabilitiesLabel: 'Core Capabilities',

    workLabel: '',
    workHeading1: 'Selected Work',
    workHeading2: '',
    workDescription: '',
    readFullPiece: '',
    viewOnInstagram: 'View Post on Instagram',

    modalTheChallenge: 'The Challenge',
    modalTheCopy: 'The Copy',
    modalClose: 'Close',

    contactLabel: "Let's Collaborate",
    contactHeading1: 'Got a story',
    contactHeading2: 'that needs telling?',
    contactDescription:
      "Whether it's a campaign, a script, a rebrand, or a sentence you can't quite crack — let's find the words that make it impossible to ignore.",
    contactEmail: 'laraabbas60@gmail.com',
    footerTitle: 'Content Writer & Photographer',
    footerCopy: '',
  },
  ar: {
    navAbout: 'نبذة',
    navWork: 'الأعمال',
    navContact: 'تواصل',
    navLetsTalk: 'لنتحدث',

    heroTag: 'ملف أعمال 2026',
    heroFirstName: 'لارا',
    heroLastName: 'قشقري',
    heroTitle: 'كاتبة محتوى ومصورة',
    heroCue: 'انقر في أي مكان للاستكشاف',
    heroLocation: '',
    heroEst: '',

    aboutLabel: 'نبذة',
    aboutHeading1: 'كلمات',
    aboutHeading2: 'تحرّك الناس',
    aboutHeading3: 'إلى الفعل.',
    aboutBio1:
      'أنا صانعة محتوى ومبدعة وسائط متعددة متخصصة في كتابة المحتوى، والتصوير الفوتوغرافي، والمونتاج، وتحليلات التواصل الاجتماعي لمساعدة العلامات التجارية على تعزيز حضورها الرقمي.',
    aboutBio1Highlight: '',
    aboutBio2: '',
    statYears: '',
    statCampaigns: '',
    statBrands: '',
    capabilitiesLabel: 'المهارات',

    workLabel: '',
    workHeading1: 'أعمال مختارة',
    workHeading2: '',
    workDescription: '',
    readFullPiece: '',
    viewOnInstagram: 'عرض المنشور في إنستغرام',

    modalTheChallenge: 'التحدّي',
    modalTheCopy: 'النص',
    modalClose: 'إغلاق',

    contactLabel: 'لنتعاون معاً',
    contactHeading1: 'لديك قصة',
    contactHeading2: 'تحتاج لمن يرويها؟',
    contactDescription:
      'سواء كانت حملة، أو سيناريو، أو إعادة بناء علامة، أو جملة لم تستطع صياغتها بعد — فلنجد الكلمات التي تجعلها مستحيلة التجاهل.',
    contactEmail: 'laraabbas60@gmail.com',
    footerTitle: 'كاتبة محتوى ومصورة',
    footerCopy: '',
  },
};

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  t: UIStrings;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');

  useEffect(() => {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const toggleLang = () => setLang((prev) => (prev === 'en' ? 'ar' : 'en'));

  const value: LanguageContextValue = {
    lang,
    setLang,
    toggleLang,
    t: translations[lang],
    isRTL: lang === 'ar',
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used within LanguageProvider');
  return ctx;
}