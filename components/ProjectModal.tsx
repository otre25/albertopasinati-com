import React, { useEffect, useRef } from 'react';
import { X, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '../types';
import { useSwipe } from '../hooks/useSwipe';

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  hasNext?: boolean;
  hasPrev?: boolean;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose, onNext, onPrev, hasNext = false, hasPrev = false }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  // Swipe gestures for mobile navigation
  const swipeHandlers = useSwipe({
    onSwipedLeft: () => {
      if (hasNext && onNext) onNext();
    },
    onSwipedRight: () => {
      if (hasPrev && onPrev) onPrev();
    },
    minSwipeDistance: 50,
  });

  // Focus trap e gestione keyboard
  useEffect(() => {
    if (!isOpen) return;

    // Salva l'elemento attivo prima di aprire il modal
    previousActiveElement.current = document.activeElement as HTMLElement;

    // Focus sul pulsante chiudi quando il modal si apre
    closeButtonRef.current?.focus();

    // Gestione ESC key e frecce prev/next
    const handleKeyboard = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && hasPrev && onPrev) {
        onPrev();
      } else if (e.key === 'ArrowRight' && hasNext && onNext) {
        onNext();
      }
    };

    // Focus trap: cicla tra elementi focusabili
    const handleTabKey = (e: KeyboardEvent) => {
      if (!modalRef.current) return;

      const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyboard);
    document.addEventListener('keydown', handleTabKey);

    // Previene scroll del body quando il modal è aperto
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyboard);
      document.removeEventListener('keydown', handleTabKey);
      document.body.style.overflow = '';

      // Ripristina il focus all'elemento precedente
      if (previousActiveElement.current) {
        previousActiveElement.current.focus();
      }
    };
  }, [isOpen, onClose, onNext, onPrev, hasNext, hasPrev]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-6xl max-h-[90vh] overflow-auto bg-white rounded-sm shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={swipeHandlers.onTouchStart}
        onTouchMove={swipeHandlers.onTouchMove}
        onTouchEnd={swipeHandlers.onTouchEnd}
      >
        {/* Close button */}
        <button
          ref={closeButtonRef}
          onClick={onClose}
          className="absolute top-6 right-6 z-10 min-w-[44px] min-h-[44px] w-11 h-11 flex items-center justify-center bg-black text-white rounded-full hover:bg-brand-yellow hover:text-black transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-brand-yellow"
          aria-label="Chiudi modal"
        >
          <X size={24} />
        </button>

        {/* Previous Project Button */}
        {hasPrev && onPrev && (
          <button
            onClick={onPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 min-w-[48px] min-h-[48px] w-12 h-12 flex items-center justify-center bg-black/80 text-white rounded-full hover:bg-brand-yellow hover:text-black hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-yellow shadow-lg"
            aria-label="Progetto precedente"
          >
            <ChevronLeft size={28} />
          </button>
        )}

        {/* Next Project Button */}
        {hasNext && onNext && (
          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 min-w-[48px] min-h-[48px] w-12 h-12 flex items-center justify-center bg-black/80 text-white rounded-full hover:bg-brand-yellow hover:text-black hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-yellow shadow-lg"
            aria-label="Progetto successivo"
          >
            <ChevronRight size={28} />
          </button>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">

          {/* Left side - Dark Background with Info */}
          <div className="bg-deep-black text-white p-12 flex flex-col justify-between">

            <div>
              {/* Category Badge */}
              <div className="inline-block px-3 py-1 bg-white/10 text-xs uppercase tracking-wider mb-6 rounded-sm">
                {project.category}
              </div>

              {/* Title */}
              <h2 id="modal-title" className="text-5xl md:text-6xl font-display font-black uppercase leading-[0.9] mb-6">
                {project.title}
              </h2>

              {/* Yellow underline */}
              <div className="h-1 w-32 bg-brand-yellow mb-8"></div>

              {/* Description */}
              {project.description && (
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  {project.description}
                </p>
              )}

              {/* Client */}
              {project.client && (
                <div className="mb-4">
                  <div className="text-xs uppercase tracking-wider text-gray-500 mb-1">Azienda</div>
                  <div className="text-xl font-bold">{project.client}</div>
                </div>
              )}

              {/* Year */}
              <div className="mb-6">
                <div className="text-xs uppercase tracking-wider text-gray-500 mb-1">Anno</div>
                <div className="text-xl font-bold">{project.year}</div>
              </div>

              {/* Services */}
              {project.services && project.services.length > 0 && (
                <div className="mb-8">
                  <div className="text-xs uppercase tracking-wider text-gray-500 mb-3">Servizi</div>
                  <div className="flex flex-wrap gap-2">
                    {project.services.map((service, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-white/10 text-sm rounded-sm hover:bg-brand-yellow hover:text-black transition-colors"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Website Button */}
            {project.websiteUrl && (
              <a
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-bold uppercase text-sm hover:bg-brand-yellow transition-colors border-2 border-brand-yellow"
              >
                Visita sito live <ExternalLink size={18} />
              </a>
            )}
          </div>

          {/* Right side - Mockup/Preview */}
          <div className="bg-gray-100 flex items-center justify-center p-12 relative overflow-hidden">
            {project.mockupUrl ? (
              <img
                src={project.mockupUrl}
                alt={`Anteprima del progetto ${project.title} - ${project.category}`}
                className="w-full h-auto object-contain max-h-[600px] drop-shadow-2xl"
                loading="lazy"
              />
            ) : (
              <img
                src={project.imageUrl}
                alt={`Immagine progetto ${project.title}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
