'use client';

import { motion } from 'framer-motion';

const steps = [
    {
        number: '01',
        title: 'Discovery',
        description: 'We begin by listening. Understanding your needs, aspirations, and the unique constraints of the site.'
    },
    {
        number: '02',
        title: 'Concept',
        description: 'We translate insights into a cohesive design narrative, exploring form, light, and spatial relationships.'
    },
    {
        number: '03',
        title: 'Development',
        description: 'We refine the design through rigorous technical detailing, material selection, and 3D visualization.'
    },
    {
        number: '04',
        title: 'Execution',
        description: 'We oversee the construction process, ensuring the vision is realized with uncompromising quality.'
    }
];

export function DesignProcess() {
    return (
        <section className="py-32 container mx-auto px-6">
            <div className="grid lg:grid-cols-[0.4fr_1fr] gap-16">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-xs uppercase tracking-[0.4em] flex items-center gap-4 mb-6 before:content-[''] before:w-16 before:h-px before:bg-gradient-to-r before:from-white/40 before:to-transparent">
                        Methodology
                    </span>
                    <h2 className="text-3xl md:text-4xl font-light leading-relaxed text-white/90">
                        A rigorous process for exceptional results.
                    </h2>
                </motion.div>

                <div className="space-y-12">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex gap-8 border-b border-white/10 pb-12 last:border-0"
                        >
                            <span className="text-4xl font-thin text-white/20">{step.number}</span>
                            <div>
                                <h3 className="text-2xl font-light mb-3">{step.title}</h3>
                                <p className="text-lg font-light leading-relaxed text-white/60 max-w-xl">{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
