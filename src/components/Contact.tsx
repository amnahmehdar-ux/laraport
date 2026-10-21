import { useState } from 'react';
import { useReveal, useMagneticButton } from '@/hooks/useReveal';
import { useLang } from '@/context/LanguageContext';
import { Mail, Linkedin, ArrowUpRight, Check, Copy, Phone, MessageCircle } from 'lucide-react';

const socials = [
  {
    label: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/laraqashgari?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
  },
];

export default function Contact() {
  const { ref, revealed } = useReveal<HTMLDivElement>();
  const magneticRef = useMagneticButton(0.35);
  const { t, lang } = useLang();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const phoneNumber = '+966 53 905 5770';
  const whatsappUrl = 'https://wa.me/966539055770';

  const handleContactScroll = (e: React.MouseEvent, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEmailClick = () => {
    const email = t.contactEmail || 'laraabbas60@gmail.com';
    window.location.href = `mailto:${email}`;
  };

  const copyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    const email = t.contactEmail || 'laraabbas60@gmail.com';
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText('+966539055770');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <footer id="contact" className="relative bg-ink overflow-hidden">
      <div className="noise-overlay" />

      {/* Floating gradient orb */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-lime/5 rounded-full blur-[150px]" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* CTA */}
        <div className={`reveal ${revealed ? 'revealed' : ''} py-24 md:py-36 text-center`}>
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="w-8 h-px bg-lime" />
            <span className="text-xs font-body uppercase tracking-[0.25em] text-mist">
              {t.contactLabel}
            </span>
            <span className="w-8 h-px bg-lime" />
          </div>

          <h2 className="font-display font-bold text-4xl md:text-7xl lg:text-8xl text-bone leading-[0.95] tracking-tighter mb-8">
            {t.contactHeading1}
            <br />
            <span className="font-serif italic font-normal text-bone/50">
              {t.contactHeading2}
            </span>
          </h2>

          <p className="font-body text-base md:text-lg text-mist max-w-lg mx-auto mb-12">
            {t.contactDescription}
          </p>

          {/* Contact Action Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 max-w-xl mx-auto">
            {/* Email Row */}
            <div className="flex items-center justify-center gap-2 w-full sm:w-auto">
              <a
                ref={magneticRef}
                href={`mailto:${t.contactEmail || 'laraabbas60@gmail.com'}`}
                onClick={handleEmailClick}
                className="magnetic inline-flex items-center justify-center gap-3 bg-lime text-ink font-display font-semibold text-base md:text-lg px-8 md:px-10 py-4 rounded-full hover:bg-bone transition-colors duration-300 shadow-lg cursor-pointer flex-1 sm:flex-initial"
              >
                <Mail className="w-5 h-5" strokeWidth={1.5} />
                <span>{t.contactEmail || 'laraabbas60@gmail.com'}</span>
                <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
              </a>

              {/* Copy Email Button */}
              <button
                onClick={copyEmail}
                type="button"
                className="glass p-4 rounded-full text-bone hover:text-lime hover:border-lime/40 transition-all cursor-pointer flex items-center justify-center"
                title={lang === 'ar' ? 'نسخ الإيميل' : 'Copy Email'}
              >
                {copiedEmail ? (
                  <Check className="w-5 h-5 text-lime" />
                ) : (
                  <Copy className="w-5 h-5 text-mist" />
                )}
              </button>
            </div>

            {/* Phone & WhatsApp Row */}
            <div className="flex items-center justify-center gap-2 w-full sm:w-auto">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                dir="ltr"
                className="glass inline-flex items-center justify-center gap-3 text-bone font-display font-medium text-base md:text-lg px-8 md:px-10 py-4 rounded-full hover:text-lime hover:border-lime/40 transition-all duration-300 cursor-pointer flex-1 sm:flex-initial"
              >
                <MessageCircle className="w-5 h-5 text-lime" strokeWidth={1.5} />
                <span>{phoneNumber}</span>
                <ArrowUpRight className="w-4 h-4 text-mist" strokeWidth={2} />
              </a>

              {/* Copy Phone Button */}
              <button
                onClick={copyPhone}
                type="button"
                className="glass p-4 rounded-full text-bone hover:text-lime hover:border-lime/40 transition-all cursor-pointer flex items-center justify-center"
                title={lang === 'ar' ? 'نسخ رقم الجوال' : 'Copy Phone Number'}
              >
                {copiedPhone ? (
                  <Check className="w-5 h-5 text-lime" />
                ) : (
                  <Copy className="w-5 h-5 text-mist" />
                )}
              </button>
            </div>
          </div>

          {/* Socials */}
          <div className="flex items-center justify-center gap-6 mt-16">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-12 h-12 rounded-full glass flex items-center justify-center text-bone/60 hover:text-lime hover:border-lime/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon className="w-4 h-4" strokeWidth={1.5} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <a
              href="#hero"
              onClick={(e) => handleContactScroll(e, '#hero')}
              className="font-display font-bold text-base text-bone hover-underline"
            >
              Lara<span className="text-lime">.</span>Q
            </a>
            <span className="text-mist/40 text-xs">|</span>
            <span className="text-xs font-body text-mist">
              {t.footerTitle}
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="#about"
              onClick={(e) => handleContactScroll(e, '#about')}
              className="text-xs font-body text-mist hover:text-bone transition-colors hover-underline"
            >
              {t.navAbout}
            </a>
            <a
              href="#work"
              onClick={(e) => handleContactScroll(e, '#work')}
              className="text-xs font-body text-mist hover:text-bone transition-colors hover-underline"
            >
              {t.navWork}
            </a>
            <a
              href="#contact"
              onClick={(e) => handleContactScroll(e, '#contact')}
              className="text-xs font-body text-mist hover:text-bone transition-colors hover-underline"
            >
              {t.navContact}
            </a>
          </div>
          <span className="text-xs font-body text-mist/60">
            {t.footerCopy}
          </span>
        </div>
      </div>
    </footer>
  );
}