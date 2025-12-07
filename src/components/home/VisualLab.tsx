'use client';

import { motion } from 'framer-motion';

const visuals = [
    {
        title: 'Interactive 3D Walkthroughs',
        description: 'Explore design narratives at 1:1 scale with material swaps and live lighting tests.',
        image: 'https://i.ibb.co/CKRsCZK0/Hallway-5.jpg'
    },
    {
        title: 'Climatic Intelligence',
        description: 'Parametric modeling anticipates sun, wind, and shading for resilient envelopes.',
        image: 'https://i.ibb.co/HL00Pf9k/Bedroom-04-Dressing-4.jpg'
    },
    {
        title: 'Material Library',
        description: 'Curated palettes with tactile samples allow teams to sense quality before fabrication.',
        image: 'https://i.ibb.co/HLLwjMns/21.jpg'
    },
    {
        title: 'Data Dashboards',
        description: 'Real-time dashboards sync progress across site teams, suppliers, and stakeholders.',
        image: 'https://i.ibb.co/DDTBq9XT/2.jpg'
    }
];

export function VisualLab() {
    return (
        <section className="py-32 container mx-auto px-6 relative">
            {/* Background Image with Strong White Overlay */}
            <div className="absolute inset-0 -mx-6 bg-cover bg-center" style={{ backgroundImage: 'url(https://i.ibb.co/pvX6DG4y/Reception-5.jpg)' }} />
            <div className="absolute inset-0 -mx-6 bg-white/95" />

            <div className="grid lg:grid-cols-[1fr_0.9fr] gap-12 items-center relative z-10">

                <div className="max-w-xl">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 0.6, x: 0 }}
                        viewport={{ once: true }}
                        className="text-xs uppercase tracking-[0.4em] flex items-center gap-4 mb-4 text-[#0a0a0a] before:content-[''] before:w-16 before:h-px before:bg-gradient-to-r before:from-[#0a0a0a]/40 before:to-transparent"
                    >
                        Visualization Lab
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-extralight tracking-wide mb-6 text-[#0a0a0a]"
                    >
                        Enhancing perception through technology
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.8 }}
                        viewport={{ once: true }}
                        className="text-lg font-light leading-relaxed text-[#555]"
                    >
                        We translate data and craft into sensory previews: climate-adaptive facades, acoustic mapping, and bespoke lighting scenarios.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {visuals.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative p-6 rounded-l-[24px] bg-gradient-to-br from-white/5 to-black/85 border border-white/10 flex flex-col gap-3 backdrop-blur-md shadow-xl overflow-hidden group"
                        >
                            <div
                                className="absolute inset-0 opacity-10 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${item.image})` }}
                            />
                            <h3 className="text-lg font-light tracking-wide relative z-10">{item.title}</h3>
                            <p className="text-sm leading-relaxed text-white/70 font-light relative z-10">{item.description}</p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
