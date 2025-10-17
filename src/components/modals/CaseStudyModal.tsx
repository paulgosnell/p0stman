import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, ExternalLink, Calendar, Users, TrendingUp } from 'lucide-react';

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    id: string;
    title: string;
    company: string;
    category: string;
    image: string;
    logo?: string;
    description: string;
    challenge?: string;
    solution?: string;
    results?: string[];
    metrics?: {
      label: string;
      value: string;
      icon: React.ReactNode;
    }[];
    technologies?: string[];
    timeline?: string;
    teamSize?: string;
  } | null;
}

export default function CaseStudyModal({ isOpen, onClose, project }: CaseStudyModalProps) {
  if (!project) return null;

  // Check if this is a simple gallery project (no challenge/solution/results)
  const isGalleryProject = !project.challenge && !project.solution && !project.results;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className={`relative bg-white rounded-2xl shadow-2xl w-full max-h-[90vh] overflow-hidden ${
              isGalleryProject ? 'max-w-5xl' : 'max-w-4xl'
            }`}
          >
            {isGalleryProject ? (
              // Simple Gallery View - Just show the image large
              <>
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-6 right-6 z-10 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Large Image */}
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto max-h-[70vh] object-contain bg-gray-100"
                  />
                </div>

                {/* Info Below Image */}
                <div className="p-6 border-t border-gray-200">
                  <div className="text-sm text-blue-600 font-medium mb-2">{project.category}</div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h2>
                  <p className="text-gray-600 mb-4">{project.company}</p>
                  <p className="text-gray-700 leading-relaxed mb-4">{project.description}</p>

                  {/* Metrics */}
                  {project.metrics && (
                    <div className="flex gap-6 pt-4 border-t border-gray-100">
                      {project.metrics.map((metric, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="text-blue-600">{metric.icon}</div>
                          <div>
                            <div className="text-lg font-bold text-gray-900">{metric.value}</div>
                            <div className="text-sm text-gray-500">{metric.label}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </>
            ) : (
              // Full Case Study View
              <>
                {/* Header Image */}
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  {/* Logo Overlay */}
                  {project.logo && (
                    <div className="absolute top-6 left-6">
                      <img
                        src={project.logo}
                        alt={`${project.company} logo`}
                        className="h-12 w-auto filter drop-shadow-lg"
                      />
                    </div>
                  )}

                  {/* Close Button */}
                  <button
                    onClick={onClose}
                    className="absolute top-6 right-6 w-10 h-10 bg-gray-100 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  {/* Title Overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="text-sm text-gray-700 mb-2">{project.category}</div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{project.title}</h2>
                    <p className="text-white/90 text-lg">{project.company}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 max-h-[50vh] overflow-y-auto">
              {/* Metrics */}
              {project.metrics && (
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {project.metrics.map((metric, index) => (
                    <div key={index} className="text-center p-4 bg-gray-50 rounded-xl">
                      <div className="text-blue-600 mb-2 flex justify-center">{metric.icon}</div>
                      <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                      <div className="text-sm text-gray-600">{metric.label}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Project Overview</h3>
                <p className="text-gray-700 leading-relaxed">{project.description}</p>
              </div>

              {/* Challenge & Solution */}
              {project.challenge && project.solution && (
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-red-600">Challenge</h3>
                    <p className="text-gray-700 leading-relaxed">{project.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-green-600">Solution</h3>
                    <p className="text-gray-700 leading-relaxed">{project.solution}</p>
                  </div>
                </div>
              )}

              {/* Results */}
              {project.results && project.results.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4">Key Results</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {project.results.map((result, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies */}
              {project.technologies && project.technologies.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Project Details */}
              {(project.timeline || project.teamSize) && (
                <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-gray-200">
                  {project.timeline && (
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-gray-400" />
                      <div>
                        <div className="text-sm text-gray-500">Timeline</div>
                        <div className="font-medium">{project.timeline}</div>
                      </div>
                    </div>
                  )}
                  {project.teamSize && (
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-gray-400" />
                      <div>
                        <div className="text-sm text-gray-500">Team Size</div>
                        <div className="font-medium">{project.teamSize}</div>
                      </div>
                    </div>
                  )}
                </div>
              )}
                </div>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}