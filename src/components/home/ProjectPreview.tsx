'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, MapPin } from 'lucide-react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import type { Project } from '@/lib/projects';

interface ProjectPreviewProps {
    project: Project | null;
    onClose: () => void;
    onViewProject: (project: Project) => void;
}

export function ProjectPreview({ project, onClose, onViewProject }: ProjectPreviewProps) {
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
                        className="fixed inset-0 bg-black/90 backdrop-blur-md z-[80]"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 z-[85] flex items-center justify-center p-4 md:p-8"
                    >
                        <div className="relative w-full max-w-5xl">
                            {/* Close Button */}
                            <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                onClick={onClose}
                                className="absolute -top-12 right-0 md:top-4 md:-right-16 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-white/20 transition-colors z-10"
                            >
                                <X className="w-5 h-5" />
                            </motion.button>

                            {/* Image */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10"
                            >
                                <Image
                                    src={project.coverImage}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1280px) 100vw, 1280px"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                                {/* Content Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                                        <div>
                                            <div className="flex items-center gap-3 mb-3">
                                                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] uppercase tracking-widest">
                                                    {project.category}
                                                </span>
                                                <span className="flex items-center gap-1.5 text-sm text-white/60">
                                                    <MapPin className="w-3.5 h-3.5" />
                                                    {project.location}
                                                </span>
                                            </div>
                                            <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-2">
                                                {project.title}
                                            </h2>
                                            {project.subtitle && (
                                                <p className="text-lg text-white/60 font-light">
                                                    {project.subtitle}
                                                </p>
                                            )}
                                        </div>

                                        <Button
                                            size="lg"
                                            onClick={() => onViewProject(project)}
                                            className="group flex-shrink-0"
                                        >
                                            <span className="flex items-center gap-3">
                                                View Project
                                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                            </span>
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Image count indicator */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="flex justify-center mt-4"
                            >
                                <span className="text-sm text-white/40">
                                    {project.images.length} images available
                                </span>
                            </motion.div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>,
        document.body
    );
}
