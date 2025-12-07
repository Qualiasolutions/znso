'use client';

import { motion } from 'framer-motion';

export function Clients() {
    return (
        <section className="py-32 relative bg-cover bg-center" style={{ backgroundImage: 'url(https://i.ibb.co/HL00Pf9k/Bedroom-04-Dressing-4.jpg)' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />
            <div className="absolute inset-0 bg-black/80" /> {/* Overlay for readability */}

            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-16">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 0.6, x: 0 }}
                        viewport={{ once: true }}
                        className="text-xs uppercase tracking-[0.4em] flex items-center gap-4 mb-4 before:content-[''] before:w-16 before:h-px before:bg-gradient-to-r before:from-white/40 before:to-transparent"
                    >
                        Testimonials
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-extralight tracking-wide"
                    >
                        Trusted by visionary stakeholders
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {[
                        {
                            quote: "ZNSO translated our brand philosophy into a space that feels timeless and operationally precise.",
                            author: "Hospitality Client · Riyadh"
                        },
                        {
                            quote: "From feasibility to delivery, their supervision model kept every contractor aligned with the vision.",
                            author: "Commercial Partner · Kuwait City"
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="p-8 rounded-[26px] border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl flex flex-col gap-6"
                        >
                            <p className="text-lg leading-relaxed text-white/80 font-light italic">"{item.quote}"</p>
                            <span className="text-xs uppercase tracking-[0.32em] text-white/60">{item.author}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
