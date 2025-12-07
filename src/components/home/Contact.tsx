'use client';

import { motion } from 'framer-motion';

export function Contact() {
    return (
        <section className="py-32 relative bg-cover bg-center" style={{ backgroundImage: 'url(https://i.ibb.co/HLLwjMns/21.jpg)' }}>
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/90" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl mb-16">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 0.6, x: 0 }}
                        viewport={{ once: true }}
                        className="text-xs uppercase tracking-[0.4em] flex items-center gap-4 mb-4 before:content-[''] before:w-16 before:h-px before:bg-gradient-to-r before:from-white/40 before:to-transparent"
                    >
                        Contact
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-extralight tracking-wide mb-6"
                    >
                        Co-create the next landmark
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.8 }}
                        viewport={{ once: true }}
                        className="text-lg font-light leading-relaxed text-white/80"
                    >
                        Share your project requirements or schedule a strategic consultation to explore possibilities with ZNSO Architects.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-10 rounded-[32px] bg-[#0c0c0c]/90 border border-white/10 backdrop-blur-xl shadow-2xl grid md:grid-cols-3 gap-10"
                >
                    <div className="flex flex-col gap-3">
                        <span className="text-[0.7rem] uppercase tracking-[0.34em] text-white/60">Email</span>
                        <a href="mailto:Salman@znsoarchitects.com" className="text-lg text-white/90 hover:text-white transition-colors">Salman@znsoarchitects.com</a>
                    </div>
                    <div className="flex flex-col gap-3">
                        <span className="text-[0.7rem] uppercase tracking-[0.34em] text-white/60">Phone</span>
                        <a href="tel:+96595559313" className="text-lg text-white/90 hover:text-white transition-colors">+965 9555 9313</a>
                    </div>
                    <div className="flex flex-col gap-3">
                        <span className="text-[0.7rem] uppercase tracking-[0.34em] text-white/60">Studio</span>
                        <p className="text-lg text-white/90 leading-relaxed">Building 18A, Salhiya Street, Jibla, Kuwait City</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
