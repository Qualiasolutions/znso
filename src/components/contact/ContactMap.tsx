'use client';

import { motion } from 'framer-motion';

export function ContactMap() {
    return (
        <section className="pb-20 container mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[32px] p-8 md:p-12 text-center"
            >
                <div className="mb-8">
                    <h2 className="text-3xl font-light mb-4">Visit Our Studio</h2>
                    <p className="text-white/60 font-light">Experience our workspace and meet the team in person.</p>
                </div>

                <div className="relative h-[400px] bg-white/5 rounded-2xl overflow-hidden flex items-center justify-center border border-white/10">
                    {/* Placeholder for actual map integration (e.g., Google Maps Embed) */}
                    <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                            <svg className="w-8 h-8 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        </div>
                        <p className="text-white/40 uppercase tracking-widest text-sm">Map Integration Placeholder</p>
                        <p className="text-white/30 text-xs mt-2">Al Hamra Tower, Kuwait City</p>
                    </div>

                    {/* Overlay gradient */}
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 to-transparent" />
                </div>
            </motion.div>
        </section>
    );
}
