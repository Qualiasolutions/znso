'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

interface ProjectModalProps {
    project: any;
    isOpen: boolean;
    onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (typeof window === 'undefined') return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && project && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[60]"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none"
                    >
                        <div className="bg-[#0c0c0c] border border-white/10 rounded-[32px] w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl pointer-events-auto relative flex flex-col">

                            {/* Header */}
                            <div className="sticky top-0 z-10 bg-[#0c0c0c]/80 backdrop-blur-md border-b border-white/5 p-6 md:p-8 flex justify-between items-start">
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-light tracking-wide mb-2">{project.title}</h2>
                                    <p className="text-white/60 font-light">{project.description}</p>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors shrink-0 ml-4"
                                >
                                    <X className="w-6 h-6 opacity-70" />
                                </button>
                            </div>

                            <div className="p-6 md:p-8 space-y-8">
                                {/* Gallery Grid (Placeholder for now, using project image) */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div
                                        className="aspect-video rounded-2xl bg-cover bg-center col-span-2"
                                        style={{ backgroundImage: `url(${project.image})` }}
                                    />
                                    {/* Add more images here if available in project data */}
                                </div>

                                {/* Details Grid */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-white/5 rounded-2xl border border-white/5">
                                    <div>
                                        <h3 className="text-xs uppercase tracking-widest text-white/40 mb-2">Location</h3>
                                        <p className="text-lg font-light">{project.location}</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xs uppercase tracking-widest text-white/40 mb-2">Size</h3>
                                        <p className="text-lg font-light">{project.size}</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xs uppercase tracking-widest text-white/40 mb-2">Year</h3>
                                        <p className="text-lg font-light">{project.year}</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xs uppercase tracking-widest text-white/40 mb-2">Services</h3>
                                        <p className="text-lg font-light">{project.services}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>,
        document.body
    );
}
