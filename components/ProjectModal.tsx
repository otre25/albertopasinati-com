import React from 'react';
import { X, ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl max-h-[90vh] overflow-auto bg-white rounded-sm shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center bg-black text-white rounded-full hover:bg-brand-yellow hover:text-black transition-colors"
        >
          <X size={24} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">

          {/* Left side - Dark Background with Info */}
          <div className="bg-deep-black text-white p-12 flex flex-col justify-between">

            <div>
              {/* Category Badge */}
              <div className="inline-block px-3 py-1 bg-white/10 text-xs uppercase tracking-wider mb-6 rounded-sm">
                {project.category}
              </div>

              {/* Title */}
              <h2 className="text-5xl md:text-6xl font-display font-black uppercase leading-[0.9] mb-6">
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
                alt={`${project.title} preview`}
                className="w-full h-auto object-contain max-h-[600px] drop-shadow-2xl"
              />
            ) : (
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
