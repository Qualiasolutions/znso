'use client';

import { motion } from 'framer-motion';

const steps = [
    {
        phase: 'PHASE 01',
        title: 'Vision Mapping',
        description: 'Immersive charrettes, cultural research, and program mapping articulate intent and ambition.',
        image: 'https://i.ibb.co/DDTBq9XT/2.jpg'
    },
    {
        phase: 'PHASE 02',
        title: 'Immersive Design',
        description: 'Realtime 3D models, material mockups, and light studies align decisions with precision.',
        image: 'https://i.ibb.co/pvX6DG4y/Reception-5.jpg'
    },
    {
        phase: 'PHASE 03',
        title: 'Precision Delivery',
        description: 'Site supervision, stakeholder dashboards, and final commissioning orchestrate flawless execution.',
        image: 'https://i.ibb.co/WvQKgKMg/Prayer-Room.jpg'
    }
];

export function Process() {
    return (
        <section className="py-32 container mx-auto px-6">
            <div className="max-w-3xl mb-16">
                <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 0.6, x: 0 }}
                    viewport={{ once: true }}
                    className="text-xs uppercase tracking-[0.4em] flex items-center gap-4 mb-4 text-[#0a0a0a] before:content-[''] before:w-16 before:h-px before:bg-gradient-to-r before:from-[#0a0a0a]/40 before:to-transparent"
                >
                    Process
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-extralight tracking-wide mb-6 text-[#0a0a0a]"
                >
                    From discovery to precision delivery
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.8 }}
                    viewport={{ once: true }}
                    className="text-lg font-light leading-relaxed text-[#555]"
                >
                    Each commission moves through a calibrated framework blending investigation, visualization, and on-site leadership.
                </motion.p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 }}
                        className="group relative p-8 rounded-[26px] bg-[#0c0c0c]/90 border border-white/10 overflow-hidden min-h-[320px] flex flex-col gap-4 shadow-xl"
                    >
                        <div
                            className="absolute inset-0 opacity-15 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                            style={{ backgroundImage: `url(${step.image})` }}
                        />
                        <div className="relative z-10">
                            <strong className="text-xs font-medium uppercase tracking-[0.32em] text-white/60 block mb-3">{step.phase}</strong>
                            <h3 className="text-2xl font-light tracking-wide mb-4">{step.title}</h3>
                            <p className="text-sm leading-relaxed text-white/70 font-light">{step.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
