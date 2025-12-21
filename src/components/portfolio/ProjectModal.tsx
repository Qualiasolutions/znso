'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Calendar, Layers } from 'lucide-react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ImageGallery } from '@/components/ui/ImageGallery';
import type { Project } from '@/lib/projects';

interface ProjectModalProps {
    project: Project | null;
    onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
    useEffect(() => {
        if (project) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [project]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    if (typeof window === 'undefined') return null;

    return createPortal(
        <AnimatePresence>
            {project && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[80]"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 z-[85] overflow-y-auto"
                    >
                        <div className="min-h-screen py-8 px-4 md:py-16">
                            <div className="max-w-7xl mx-auto">
                                {/* Header */}
                                <div className="flex items-start justify-between mb-12">
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        {/* Category */}
                                        <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.3em] text-white/60 mb-6">
                                            {project.category === 'residential' ? 'Architectural' : project.category}
                                        </span>

                                        {/* Title */}
                                        <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-3">
                                            {project.title}
                                        </h2>

                                        {/* Subtitle */}
                                        {project.subtitle && (
                                            <p className="text-xl text-white/50 font-light">
                                                {project.subtitle}
                                            </p>
                                        )}
                                    </motion.div>

                                    {/* Close Button */}
                                    <motion.button
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.3 }}
                                        onClick={onClose}
                                        className="w-14 h-14 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors flex-shrink-0"
                                    >
                                        <X className="w-5 h-5" />
                                    </motion.button>
                                </div>

                                {/* Meta Info */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
                                >
                                    {/* Location */}
                                    <div className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                                            <MapPin className="w-5 h-5 text-white/60" />
                                        </div>
                                        <div>
                                            <span className="block text-[10px] uppercase tracking-[0.2em] text-white/40 mb-1">Location</span>
                                            <span className="text-lg font-light">{project.location}</span>
                                        </div>
                                    </div>

                                    {/* Year */}
                                    <div className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                                            <Calendar className="w-5 h-5 text-white/60" />
                                        </div>
                                        <div>
                                            <span className="block text-[10px] uppercase tracking-[0.2em] text-white/40 mb-1">Year</span>
                                            <span className="text-lg font-light">{project.year}</span>
                                        </div>
                                    </div>

                                    {/* Services */}
                                    <div className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                                            <Layers className="w-5 h-5 text-white/60" />
                                        </div>
                                        <div>
                                            <span className="block text-[10px] uppercase tracking-[0.2em] text-white/40 mb-1">Services</span>
                                            <span className="text-lg font-light">{project.services.join(', ')}</span>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Divider */}
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ delay: 0.4, duration: 0.6 }}
                                    className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-16"
                                />

                                {/* Gallery Header */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="flex items-center justify-between mb-10"
                                >
                                    <h3 className="text-sm uppercase tracking-[0.3em] text-white/40">Project Gallery</h3>
                                    <span className="text-sm text-white/30">{project.images.length} Images</span>
                                </motion.div>

                                {/* Image Gallery */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <ImageGallery images={project.images} title={project.title} />
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>,
        document.body
    );
}
