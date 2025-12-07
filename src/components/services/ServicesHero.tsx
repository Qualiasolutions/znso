'use client';

import { motion } from 'framer-motion';

export function ServicesHero() {
    return (
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ backgroundImage: 'url(https://i.ibb.co/HLLwjMns/21.jpg)' }} // Using a placeholder/hero image
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 0.7, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-xs font-medium uppercase tracking-[0.45em] block mb-6"
                >
                    Comprehensive Services
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-extralight tracking-tight leading-tight mb-8"
                >
                    Architectural Excellence<br />Through Integrated Services
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 0.8, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-lg font-light leading-relaxed max-w-2xl mx-auto text-white/80"
                >
                    From concept to completion, we provide a complete suite of architectural services designed to transform your vision into built reality with precision and artistry.
                </motion.p>
            </div>
        </section>
    );
}
