'use client';

import { motion } from 'framer-motion';

export function ContactHero() {
    return (
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ backgroundImage: 'url(https://i.ibb.co/HLLwjMns/21.jpg)' }} // Placeholder
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
                    Let's Connect
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-extralight tracking-tight leading-tight mb-8"
                >
                    Begin Your Architectural Journey
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 0.8, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-lg font-light leading-relaxed max-w-2xl mx-auto text-white/80"
                >
                    Whether you have a vision in mind or need guidance exploring possibilities, our team is ready to transform your architectural aspirations into reality.
                </motion.p>
            </div>
        </section>
    );
}
