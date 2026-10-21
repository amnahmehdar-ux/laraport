import { useState } from 'react';
import { useReveal } from '@/hooks/useReveal';
import { projects, type WorkProject } from '@/data/projects';
import { useLang } from '@/context/LanguageContext';
import { Instagram, ArrowUpRight, TrendingUp, Maximize2 } from 'lucide-react';
import WorkModal from './WorkModal';

export default function Work() {
  const { ref, revealed } = useReveal<HTMLDivElement>();
  const [selected, setSelected] = useState<WorkProject | null>(null);
  const { t } = useLang();

  return (
    <section id="work" className="relative bg-ink-2 py-24 md:py-36 overflow-hidden">
      <div className="noise-overlay" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className={`reveal ${revealed ? 'revealed' : ''} mb-16 md:mb-24`}>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-lime" />
            <span className="text-xs font-body uppercase tracking-[0.25em] text-mist">
              {t.workLabel}
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-display font-bold text-4xl md:text-6xl text-bone leading-[1.05] tracking-tight">
              {t.workHeading1}
              <br />
              <span className="font-serif italic font-normal text-bone/60">
                {t.workHeading2}
              </span>
            </h2>
            <p className="font-body text-sm text-mist max-w-xs">
              {t.workDescription}
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {projects.map((project, i) => (
            <WorkCard
              key={project.id}
              project={project}
              index={i}
              revealed={revealed}
              onRead={() => setSelected(project)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <WorkModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

function WorkCard({
  project,
  index,
  revealed,
  onRead,
}: {
  project: WorkProject;
  index: number;
  revealed: boolean;
  onRead: () => void;
}) {
  const { t, lang } = useLang();
  const isLime = project.accentColor === 'lime';
  const accentClass = isLime ? 'text-lime' : 'text-coral';
  const bgAccent = isLime ? 'bg-lime' : 'bg-coral';
  const glowAccent = isLime ? 'group-hover:border-lime/30' : 'group-hover:border-coral/30';
  const delayClass = ['reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3'][index % 3];

  const title = lang === 'ar' ? project.projectTitleAr : project.projectTitle;
  const category = lang === 'ar' ? project.categoryAr : project.category;
  const challenge = lang === 'ar' ? project.challengeAr : project.challenge;
  const excerpt = lang === 'ar' ? project.excerptAr : project.excerpt;
  const impact = lang === 'ar' ? project.impactAr : project.impact;
  const client = lang === 'ar' ? project.client : project.client;

  const handleInstagramClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(project.instagramUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <article
      className={`reveal ${delayClass} ${revealed ? 'revealed' : ''} card-glow group glass rounded-2xl border border-white/8 ${glowAccent} hover:-translate-y-1.5 transition-all duration-500 overflow-hidden flex flex-col`}
    >
      {/* Visual mockup — Instagram 4:5 aspect ratio */}
      <div
        className="relative aspect-[4/5] overflow-hidden cursor-pointer bg-ink-3"
        onClick={onRead}
      >
        <img
          src={project.imageUrl}
          alt={title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />

        {/* Client badge — top */}
        <div className="absolute top-4 left-4 flex items-center gap-2.5 z-10">
          <div className={`w-9 h-9 rounded-lg ${bgAccent}/15 backdrop-blur-md flex items-center justify-center border ${isLime ? 'border-lime/25' : 'border-coral/25'}`}>
            <span className={`font-display font-bold text-xs ${accentClass}`}>
              {project.clientInitials}
            </span>
          </div>
          <div className="glass rounded-full px-3 py-1.5">
            <span className="text-xs font-display font-medium text-bone">
              {client}
            </span>
          </div>
        </div>

        {/* Category badge — top right */}
        <span className={`absolute top-4 right-4 z-10 text-[9px] font-body uppercase tracking-[0.12em] px-2.5 py-1 rounded-full backdrop-blur-md ${isLime ? 'bg-lime/15 text-lime border border-lime/20' : 'bg-coral/15 text-coral border border-coral/20'}`}>
          {category}
        </span>

        {/* Expand icon — appears on hover */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="w-12 h-12 rounded-full glass flex items-center justify-center border border-white/20">
            <Maximize2 className="w-4 h-4 text-bone" strokeWidth={1.5} />
          </div>
        </div>

        {/* Bottom content on image — title + excerpt */}
        <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
          <h3 className="font-display font-bold text-base md:text-lg text-bone leading-tight tracking-tight mb-1.5">
            {title}
          </h3>
          <p className="font-serif italic text-sm text-bone/70 leading-snug line-clamp-2">
            {excerpt}
          </p>
        </div>
      </div>

      {/* Card body — context + actions */}
      <div className="p-4 md:p-5 flex flex-col flex-1">
        {/* Context */}
        <p className="text-xs font-body leading-relaxed text-mist mb-4 flex-1 line-clamp-3">
          {challenge}
        </p>

        {/* Impact */}
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className={`w-3.5 h-3.5 ${accentClass}`} strokeWidth={1.5} />
          <span className="text-xs font-body text-mist">{impact}</span>
          <span className={`text-sm font-display font-bold ${accentClass}`}>
            {project.impactMetric}
          </span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 pt-3 border-t border-white/5">
          <button
            onClick={onRead}
            className="flex-1 flex items-center justify-center gap-1.5 text-xs font-body text-bone/70 hover:text-bone transition-colors py-2.5 rounded-lg hover:bg-white/5"
          >
            {t.readFullPiece}
            <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
          </button>
          <a
            href={project.instagramUrl}
            onClick={handleInstagramClick}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center gap-1.5 text-xs font-body font-medium px-3 py-2.5 rounded-lg transition-all duration-300 ${isLime ? 'bg-lime/10 text-lime hover:bg-lime/20' : 'bg-coral/10 text-coral hover:bg-coral/20'}`}
          >
            <Instagram className="w-3.5 h-3.5" strokeWidth={1.5} />
            <span className="hidden sm:inline">{t.viewOnInstagram}</span>
          </a>
        </div>
      </div>
    </article>
  );
}
