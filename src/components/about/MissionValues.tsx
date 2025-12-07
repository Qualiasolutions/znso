'use client';

import { motion } from 'framer-motion';

const values = [
    {
        title: 'Cultural Resonance',
        description: 'We deeply study the local context, history, and social fabric to create spaces that feel belonging.'
    },
    {
        title: 'Minimalist Purity',
        description: 'We strip away the unnecessary to reveal the essence of form, light, and material.'
    },
    {
        title: 'Technical Precision',
        description: 'We leverage advanced technology and rigorous management to ensure flawless execution.'
    },
    {
        title: 'Human-Centric',
        description: 'We design for the people who will inhabit our spaces, prioritizing comfort, flow, and well-being.'
    }
];

export function MissionValues() {
    return (
        <section className="py-32 container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-xs uppercase tracking-[0.4em] flex items-center gap-4 mb-6 before:content-[''] before:w-16 before:h-px before:bg-gradient-to-r before:from-white/40 before:to-transparent">
                        Mission & Values
                    </span>
                    <h2 className="text-3xl md:text-4xl font-light leading-relaxed mb-8 text-white/90">
                        We are a collective of architects, designers, and thinkers dedicated to crafting environments that elevate the human spirit.
                    </h2>
                    <p className="text-lg font-light leading-relaxed text-white/70">
                        Founded in 2022, ZNSO Architects has rapidly established itself as a leading voice in contemporary Middle Eastern architecture. Our approach is rooted in a deep respect for tradition, reinterpreted through a modern lens.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 gap-8">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                        >
                            <h3 className="text-xl font-light mb-3">{value.title}</h3>
                            <p className="text-sm leading-relaxed text-white/60">{value.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
