import { useEffect } from 'react';
import { X, Quote, TrendingUp, Instagram } from 'lucide-react';
import type { WorkProject } from '@/data/projects';
import { useLang } from '@/context/LanguageContext';

interface WorkModalProps {
  project: WorkProject | null;
  onClose: () => void;
}

export default function WorkModal({ project, onClose }: WorkModalProps) {
  const { t, lang } = useLang();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  const isLime = project.accentColor === 'lime';
  const accentClass = isLime ? 'text-lime' : 'text-coral';
  const bgAccent = isLime ? 'bg-lime' : 'bg-coral';
  const borderAccent = isLime ? '#c8f96b' : '#ff6b5b';

  const title = lang === 'ar' ? project.projectTitleAr : project.projectTitle;
  const category = lang === 'ar' ? project.categoryAr : project.category;
  const challenge = lang === 'ar' ? project.challengeAr : project.challenge;
  const impact = lang === 'ar' ? project.impactAr : project.impact;
  const client = lang === 'ar' ? project.client : project.client;
  const fullCopyText = lang === 'ar' ? project.fullCopyAr : project.fullCopy;
  const fullCopyLines = fullCopyText.split('\n');

  const headingPrefixesEn = ['Title:', 'CAMPAIGN', 'BRAND', 'POST', 'OOH', 'INSTAGRAM', 'INFLUENCER', 'TAGLINE'];
  const headingPrefixesAr = ['العنوان:', 'مفهوم', 'بيان', 'منشور', 'لوحة', 'تعليق', 'توجيهات', 'خيارات'];
  const headingPrefixes = lang === 'ar' ? headingPrefixesAr : headingPrefixesEn;

  const handleInstagramClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(project.instagramUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 modal-overlay"
      style={{ background: 'rgba(10, 10, 10, 0.85)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      <div
        className="modal-content relative bg-ink-3 rounded-2xl w-full max-w-3xl max-h-[88vh] overflow-y-auto border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-ink/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-bone/60 hover:text-bone hover:border-white/30 transition-all duration-300"
          aria-label={t.modalClose}
        >
          <X className="w-4 h-4" strokeWidth={1.5} />
        </button>

        {/* Visual header image */}
        <div className="relative h-48 md:h-64 overflow-hidden rounded-t-2xl bg-ink-3">
          <img
            src={project.imageUrl}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-3 via-ink-3/40 to-transparent" />

          {/* Client badge over image */}
          <div className="absolute bottom-4 left-4 md:left-6 flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center border backdrop-blur-md"
              style={{
                backgroundColor: `${borderAccent}20`,
                borderColor: `${borderAccent}40`,
              }}
            >
              <span className={`font-display font-bold text-sm ${accentClass}`}>
                {project.clientInitials}
              </span>
            </div>
            <div>
              <div className="text-sm font-display font-medium text-bone">
                {client}
              </div>
              <div className="text-[11px] font-body uppercase tracking-wider text-mist mt-0.5">
                {category} · {project.year}
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 md:p-8">
          {/* Title */}
          <h2 className="font-display font-bold text-2xl md:text-3xl text-bone leading-tight tracking-tight mb-6">
            {title}
          </h2>

          {/* Challenge */}
          <div className="mb-6">
            <h3 className="text-xs font-body uppercase tracking-[0.25em] text-mist mb-3">
              {t.modalTheChallenge}
            </h3>
            <p className="text-sm md:text-base font-body leading-relaxed text-bone/80">
              {challenge}
            </p>
          </div>

          {/* Full copy */}
          <div className="mb-6">
            <h3 className="text-xs font-body uppercase tracking-[0.25em] text-mist mb-4 flex items-center gap-2">
              <Quote className={`w-3.5 h-3.5 ${accentClass}`} strokeWidth={1.5} />
              {t.modalTheCopy}
            </h3>
            <div
              className="rounded-xl p-5 md:p-6 border"
              style={{
                backgroundColor: 'rgba(10,10,10,0.5)',
                borderColor: 'rgba(255,255,255,0.06)',
                borderLeft: lang === 'ar' ? undefined : `2px solid ${borderAccent}`,
                borderRight: lang === 'ar' ? `2px solid ${borderAccent}` : undefined,
              }}
            >
              <div className="space-y-1">
                {fullCopyLines.map((line, i) => {
                  const isBold = line.startsWith('[') || (line.includes(':') && !line.startsWith('—'));
                  const isHeading = headingPrefixes.some((p) => line.startsWith(p));
                  if (line.trim() === '') {
                    return <div key={i} className="h-3" />;
                  }
                  if (isHeading) {
                    return (
                      <p key={i} className={`font-display font-semibold text-sm ${accentClass} mt-3`}>
                        {line}
                      </p>
                    );
                  }
                  return (
                    <p
                      key={i}
                      className={`text-sm md:text-base font-body leading-relaxed ${
                        isBold ? 'font-medium text-bone' : 'text-bone/70'
                      }`}
                    >
                      {line}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Impact + Instagram CTA */}
          <div className="flex items-center justify-between border-t border-white/8 pt-6 flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full ${bgAccent}/10 flex items-center justify-center border ${isLime ? 'border-lime/20' : 'border-coral/20'}`}>
                <TrendingUp className={`w-4 h-4 ${accentClass}`} strokeWidth={1.5} />
              </div>
              <div>
                <div className={`text-2xl font-display font-bold ${accentClass}`}>
                  {project.impactMetric}
                </div>
                <div className="text-xs font-body text-mist">
                  {impact}
                </div>
              </div>
            </div>
            <a
              href={project.instagramUrl}
              onClick={handleInstagramClick}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 text-sm font-body font-medium px-5 py-2.5 rounded-full transition-all duration-300 ${isLime ? 'bg-lime/10 text-lime hover:bg-lime/20 border border-lime/20' : 'bg-coral/10 text-coral hover:bg-coral/20 border border-coral/20'}`}
            >
              <Instagram className="w-4 h-4" strokeWidth={1.5} />
              {t.viewOnInstagram}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
