'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';

interface HeroProps {
    onOpenModal?: (modalId: string) => void;
}

// Curated image sets - each set contains: background, main showcase, accent1, accent2
const imageSets = [
    {
        background: '/projects/facade-1/1.jpg',
        main: { src: '/projects/facade-1/2.jpg', label: 'Maison Blanche' },
        accent1: '/projects/facade-1/3.jpg',
        accent2: '/projects/facade-1/4.jpg',
    },
    {
        background: '/projects/dana/1.jpg',
        main: { src: '/projects/dana/3.jpg', label: 'Dana Residence' },
        accent1: '/projects/dana/2.jpg',
        accent2: '/projects/dana/4.jpg',
    },
    {
        background: '/projects/poolside/1.jpg',
        main: { src: '/projects/poolside/2.jpg', label: 'Poolside Villa' },
        accent1: '/projects/poolside/3.jpg',
        accent2: '/projects/poolside/4.jpg',
    },
    {
        background: '/projects/osama/Living_1.jpg',
        main: { src: '/projects/osama/Living_2.jpg', label: 'Osama Residence' },
        accent1: '/projects/osama/Dining_1.jpg',
        accent2: '/projects/osama/Bedroom_1.jpg',
    },
    {
        background: '/projects/facade-3/Facade-2_1.jpg',
        main: { src: '/projects/facade-3/Facade-2_2.jpg', label: 'Contemporary Villa' },
        accent1: '/projects/facade-3/Facade-2_3.jpg',
        accent2: '/projects/facade-3/Facade-2_4.jpg',
    },
    {
        background: '/projects/hassan-at/Living_1.jpg',
        main: { src: '/projects/hassan-at/Dining_1.jpg', label: 'Hassan Residence' },
        accent1: '/projects/hassan-at/Master_1.jpg',
        accent2: '/projects/hassan-at/Living_2.jpg',
    },
];

export function Hero({ onOpenModal }: HeroProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % imageSets.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    const currentSet = imageSets[currentIndex];

    return (
        <section className="relative h-screen flex items-center overflow-hidden">
            {/* Animated Background */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 z-0"
                >
                    <Image
                        src={currentSet.background}
                        alt="ZNSO Architecture"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
                </motion.div>
            </AnimatePresence>

            {/* Grain Overlay */}
            <div
                className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Animated Aurora */}
            <motion.div
                className="absolute inset-[-25%] z-0 opacity-30 blur-[120px] pointer-events-none"
                animate={{
                    rotate: [0, 360],
                }}
                transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
            >
                <div className="absolute top-[20%] left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-white/10 to-transparent" />
                <div className="absolute bottom-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-gradient-to-tl from-amber-500/5 to-transparent" />
            </motion.div>

            <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
                {/* Text Content */}
                <div className="flex flex-col gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex items-center gap-4"
                    >
                        <div className="w-12 h-px bg-white/40" />
                        <span className="text-[11px] font-medium uppercase tracking-[0.4em] text-white/60">
                            Architectural Excellence
                        </span>
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-extralight tracking-tight leading-[1.05]">
                        <motion.span
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="block"
                        >
                            Where Vision
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="block text-white/90"
                        >
                            Becomes
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                            className="block relative"
                        >
                            <span className="relative">
                                Structure
                                <motion.span
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: 0.8, delay: 1.2 }}
                                    className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-white/60 to-transparent origin-left"
                                />
                            </span>
                        </motion.span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                        className="text-lg md:text-xl font-light leading-relaxed max-w-lg text-white/60"
                    >
                        Shaping environments built to endure, enrich, and elevate the essence of living.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.1 }}
                        className="flex flex-wrap gap-4 mt-2"
                    >
                        <Button asChild size="lg">
                            <Link href="/portfolio">Explore Projects</Link>
                        </Button>
                        <Button asChild variant="outline" size="lg">
                            <Link href="/contact">Start a Conversation</Link>
                        </Button>
                    </motion.div>

                    {/* Progress Indicators */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="flex gap-2 mt-4"
                    >
                        {imageSets.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentIndex(i)}
                                className="relative h-1 w-12 rounded-full bg-white/20 overflow-hidden"
                            >
                                {currentIndex === i && (
                                    <motion.div
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        transition={{ duration: 6, ease: 'linear' }}
                                        className="absolute inset-0 bg-white origin-left"
                                    />
                                )}
                            </button>
                        ))}
                    </motion.div>
                </div>

                {/* Visual Content - Project Showcase */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 50 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="relative hidden lg:block"
                >
                    {/* Main Featured Image */}
                    <div className="relative max-w-md mx-auto">
                        <motion.div
                            className="relative rounded-[24px] overflow-hidden aspect-[4/5] shadow-2xl border border-white/10"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.5 }}
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src={currentSet.main.src}
                                        alt={currentSet.main.label}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                </motion.div>
                            </AnimatePresence>

                            {/* Label */}
                            <div className="absolute bottom-6 left-6 right-6">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentIndex}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                    >
                                        <span className="text-[10px] uppercase tracking-[0.3em] text-white/50 block mb-2">Featured Project</span>
                                        <span className="text-xl font-light">{currentSet.main.label}</span>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </motion.div>

                        {/* Floating Accent Card 1 - Top Right */}
                        <div className="absolute -right-6 top-1/4 w-20 h-20 rounded-xl overflow-hidden border border-white/20 shadow-xl">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={`accent1-${currentIndex}`}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.6 }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src={currentSet.accent1}
                                        alt="Project detail"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/20" />
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Floating Accent Card 2 - Bottom Left */}
                        <div className="absolute -left-6 bottom-1/3 w-16 h-24 rounded-xl overflow-hidden border border-white/20 shadow-xl">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={`accent2-${currentIndex}`}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src={currentSet.accent2}
                                        alt="Project detail"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/20" />
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Stats Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.6 }}
                            className="absolute -bottom-4 right-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl px-5 py-4"
                        >
                            <div className="flex gap-6">
                                <div>
                                    <span className="block text-2xl font-light">15+</span>
                                    <span className="text-[9px] uppercase tracking-widest text-white/40">Projects</span>
                                </div>
                                <div className="w-px bg-white/10" />
                                <div>
                                    <span className="block text-2xl font-light">2025</span>
                                    <span className="text-[9px] uppercase tracking-widest text-white/40">Latest</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
