'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ImageGalleryProps {
    images: string[];
    title?: string;
    className?: string;
}

export function ImageGallery({ images, title, className }: ImageGalleryProps) {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [isLoaded, setIsLoaded] = useState<boolean[]>([]);

    useEffect(() => {
        setIsLoaded(new Array(images.length).fill(false));
    }, [images.length]);

    const openLightbox = useCallback((index: number) => {
        setSelectedIndex(index);
        document.body.style.overflow = 'hidden';
    }, []);

    const closeLightbox = useCallback(() => {
        setSelectedIndex(null);
        document.body.style.overflow = 'unset';
    }, []);

    const goNext = useCallback(() => {
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex + 1) % images.length);
        }
    }, [selectedIndex, images.length]);

    const goPrev = useCallback(() => {
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
        }
    }, [selectedIndex, images.length]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedIndex === null) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') goNext();
            if (e.key === 'ArrowLeft') goPrev();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedIndex, closeLightbox, goNext, goPrev]);

    const handleImageLoad = (index: number) => {
        setIsLoaded(prev => {
            const next = [...prev];
            next[index] = true;
            return next;
        });
    };

    return (
        <>
            {/* Masonry Grid */}
            <div className={cn('columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4', className)}>
                {images.map((image, index) => (
                    <motion.div
                        key={image}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        className="break-inside-avoid group relative overflow-hidden rounded-2xl cursor-pointer"
                        onClick={() => openLightbox(index)}
                    >
                        <div className="relative aspect-[4/3] w-full bg-white/5">
                            {!isLoaded[index] && (
                                <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-white/5 to-white/10" />
                            )}
                            <Image
                                src={image}
                                alt={`${title || 'Project'} - Image ${index + 1}`}
                                fill
                                className={cn(
                                    'object-cover transition-all duration-700 group-hover:scale-105',
                                    isLoaded[index] ? 'opacity-100' : 'opacity-0'
                                )}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                onLoad={() => handleImageLoad(index)}
                            />
                        </div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileHover={{ opacity: 1, scale: 1 }}
                                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            >
                                <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                                    <Maximize2 className="w-5 h-5 text-white" />
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Lightbox */}
            {typeof window !== 'undefined' && createPortal(
                <AnimatePresence>
                    {selectedIndex !== null && (
                        <>
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                onClick={closeLightbox}
                                className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[100]"
                            />

                            {/* Content */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 z-[101] flex items-center justify-center p-4 md:p-8"
                            >
                                {/* Close Button */}
                                <button
                                    onClick={closeLightbox}
                                    className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors z-10"
                                >
                                    <X className="w-5 h-5" />
                                </button>

                                {/* Navigation */}
                                <button
                                    onClick={goPrev}
                                    className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors z-10"
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </button>
                                <button
                                    onClick={goNext}
                                    className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors z-10"
                                >
                                    <ChevronRight className="w-6 h-6" />
                                </button>

                                {/* Image */}
                                <motion.div
                                    key={selectedIndex}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3 }}
                                    className="relative w-full h-full max-w-7xl max-h-[85vh] flex items-center justify-center"
                                >
                                    <Image
                                        src={images[selectedIndex]}
                                        alt={`${title || 'Project'} - Image ${selectedIndex + 1}`}
                                        fill
                                        className="object-contain"
                                        sizes="100vw"
                                        priority
                                    />
                                </motion.div>

                                {/* Counter */}
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10">
                                    <span className="text-sm font-light tracking-widest">
                                        {selectedIndex + 1} / {images.length}
                                    </span>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </>
    );
}
