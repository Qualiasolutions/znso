'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Calendar, Layers, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import type { Project } from '@/lib/projects';

interface ProjectModalProps {
    project: Project | null;
    onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

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

    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    const scrollTo = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = scrollRef.current.clientWidth * 0.8;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    useEffect(() => {
        checkScroll();
    }, [project]);

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
                        className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[80]"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 z-[85] overflow-y-auto"
                    >
                        <div className="min-h-screen py-4 px-3 md:py-12 md:px-6">
                            <div className="max-w-7xl mx-auto">
                                {/* Header - Compact on Mobile */}
                                <div className="flex items-start justify-between mb-6 md:mb-10">
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="flex-1"
                                    >
                                        {/* Title */}
                                        <h2 className="text-2xl md:text-5xl font-light tracking-tight mb-1 md:mb-2">
                                            {project.title}
                                        </h2>

                                        {/* Subtitle */}
                                        {project.subtitle && (
                                            <p className="text-sm md:text-lg text-white/50 font-light">
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
                                        className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors flex-shrink-0 ml-4"
                                    >
                                        <X className="w-4 h-4 md:w-5 md:h-5" />
                                    </motion.button>
                                </div>

                                {/* Meta Info - Single Row on Mobile */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="flex flex-wrap gap-2 md:gap-4 mb-6 md:mb-12"
                                >
                                    {/* Category */}
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-xs uppercase tracking-wider text-white/70">
                                        {project.category === 'residential' ? 'Architectural' : project.category}
                                    </span>

                                    {/* Location */}
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-xs text-white/70">
                                        <MapPin className="w-3 h-3" />
                                        {project.location}
                                    </span>

                                    {/* Year */}
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-xs text-white/70">
                                        <Calendar className="w-3 h-3" />
                                        {project.year}
                                    </span>

                                    {/* Services */}
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-xs text-white/70">
                                        <Layers className="w-3 h-3" />
                                        {project.services.join(' · ')}
                                    </span>

                                    {/* Image count */}
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-[10px] md:text-xs text-white/80 font-medium">
                                        {project.images.length} Images
                                    </span>
                                </motion.div>

                                {/* Horizontal Scrolling Gallery */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="relative"
                                >
                                    {/* Left Arrow */}
                                    <button
                                        onClick={() => scrollTo('left')}
                                        className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-24 md:w-16 md:h-32 bg-gradient-to-r from-black/80 to-transparent flex items-center justify-start pl-2 transition-opacity duration-300 ${
                                            canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'
                                        }`}
                                    >
                                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors">
                                            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                                        </div>
                                    </button>

                                    {/* Right Arrow */}
                                    <button
                                        onClick={() => scrollTo('right')}
                                        className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-24 md:w-16 md:h-32 bg-gradient-to-l from-black/80 to-transparent flex items-center justify-end pr-2 transition-opacity duration-300 ${
                                            canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'
                                        }`}
                                    >
                                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors">
                                            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                                        </div>
                                    </button>

                                    {/* Scrollable Gallery */}
                                    <div
                                        ref={scrollRef}
                                        onScroll={checkScroll}
                                        className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
                                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                                    >
                                        {project.images.map((image, index) => (
                                            <motion.div
                                                key={image}
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.1 + index * 0.03 }}
                                                className="flex-shrink-0 snap-center first:pl-0 last:pr-0"
                                            >
                                                <div className="relative w-[280px] h-[200px] md:w-[500px] md:h-[350px] lg:w-[600px] lg:h-[420px] rounded-xl md:rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                                                    <Image
                                                        src={image}
                                                        alt={`${project.title} - Image ${index + 1}`}
                                                        fill
                                                        className="object-cover"
                                                        sizes="(max-width: 768px) 280px, (max-width: 1024px) 500px, 600px"
                                                    />
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Progress Indicator */}
                                    <div className="flex justify-center gap-1.5 mt-4">
                                        {project.images.slice(0, Math.min(project.images.length, 10)).map((_, i) => (
                                            <div
                                                key={i}
                                                className="w-1.5 h-1.5 rounded-full bg-white/20"
                                            />
                                        ))}
                                        {project.images.length > 10 && (
                                            <span className="text-[10px] text-white/30 ml-1">+{project.images.length - 10}</span>
                                        )}
                                    </div>
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
