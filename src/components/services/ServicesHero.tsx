'use client';

import { motion } from 'framer-motion';

const easeOut: [number, number, number, number] = [0.25, 0.4, 0.25, 1];

const textVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: (delay: number) => ({
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
            duration: 0.8,
            delay,
            ease: easeOut,
        },
    }),
};

export function ServicesHero() {
    return (
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20 pb-20">
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ backgroundImage: 'url(https://i.ibb.co/HLLwjMns/21.jpg)' }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.span
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    custom={0}
                    className="text-xs font-medium uppercase tracking-[0.45em] block mb-6 text-white/70"
                >
                    Comprehensive Services
                </motion.span>

                <motion.h1
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    custom={0.15}
                    className="text-4xl md:text-6xl lg:text-7xl font-extralight tracking-tight leading-tight mb-8"
                >
                    Architectural Excellence<br />Through Integrated Services
                </motion.h1>

                <motion.p
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    custom={0.3}
                    className="text-lg font-light leading-relaxed max-w-2xl mx-auto text-white/80"
                >
                    From concept to completion, we provide a complete suite of architectural services designed to transform your vision into built reality with precision and artistry.
                </motion.p>

                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.5, ease: easeOut }}
                    className="w-24 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto mt-12"
                />
            </div>
        </section>
    );
}
