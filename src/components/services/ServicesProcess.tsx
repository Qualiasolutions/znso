'use client';

import { motion } from 'framer-motion';

const steps = [
    {
        number: '01',
        title: 'Discovery & Vision',
        description: 'Understanding your goals, site conditions, and aspirations through intensive research and collaboration.'
    },
    {
        number: '02',
        title: 'Concept Development',
        description: 'Translating vision into tangible design concepts through sketches, models, and iterative exploration.'
    },
    {
        number: '03',
        title: 'Design Refinement',
        description: 'Detailing and optimizing the design through technical documentation, material selection, and coordination.'
    },
    {
        number: '04',
        title: 'Implementation',
        description: 'Overseeing construction to ensure design intent is realized with precision and quality.'
    }
];

export function ServicesProcess() {
    return (
        <section className="py-32 bg-zinc-900/30">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-light mb-4"
                    >
                        Our Design Process
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 0.8, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg font-light text-white/60"
                    >
                        A systematic approach that ensures excellence at every stage.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                        >
                            <span className="text-4xl font-thin text-white/20 block mb-6">{step.number}</span>
                            <h3 className="text-xl font-light mb-4">{step.title}</h3>
                            <p className="text-sm leading-relaxed text-white/60">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
