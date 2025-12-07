'use client';

import { motion } from 'framer-motion';

export function Vision() {
    return (
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ backgroundImage: 'url(https://i.ibb.co/6078Nj8f/5.jpg)' }}
            >
                <div className="absolute inset-0 bg-black/60" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 0.6, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-xs font-medium uppercase tracking-[0.35em] text-white/80 block mb-6"
                >
                    Our Vision
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl md:text-6xl font-light tracking-wide leading-tight max-w-4xl mx-auto"
                >
                    To redefine the Middle Eastern landscape through architecture that honors heritage while embracing the future.
                </motion.h1>
            </div>
        </section>
    );
}
