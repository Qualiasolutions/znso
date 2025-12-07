'use client';

import { motion } from 'framer-motion';

const insights = [
    {
        category: 'Journal',
        title: 'Designing cultural centers with light',
        description: 'We articulate how programmable lighting becomes the backbone of immersive cultural storytelling.',
        image: 'https://i.ibb.co/pvX6DG4y/Reception-5.jpg'
    },
    {
        category: 'Research',
        title: 'Climate-responsive villas in Kuwait',
        description: 'A climatic toolkit that optimizes courtyards, glazing, and shading for desert environments.',
        image: 'https://i.ibb.co/WvQKgKMg/Prayer-Room.jpg'
    },
    {
        category: 'Recruitment',
        title: 'Join our growing atelier',
        description: 'Architects, 3D artists, and site supervisors are invited to collaborate on upcoming cultural, hospitality, and residential commissions.',
        image: 'https://i.ibb.co/CKRsCZK0/Hallway-5.jpg'
    }
];

export function Insights() {
    return (
        <section className="py-32 container mx-auto px-6">
            <div className="max-w-3xl mb-16">
                <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 0.6, x: 0 }}
                    viewport={{ once: true }}
                    className="text-xs uppercase tracking-[0.4em] flex items-center gap-4 mb-4 text-[#0a0a0a] before:content-[''] before:w-16 before:h-px before:bg-gradient-to-r before:from-[#0a0a0a]/40 before:to-transparent"
                >
                    Insights
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-extralight tracking-wide mb-6 text-[#0a0a0a]"
                >
                    Knowledge shaping every commission
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.8 }}
                    viewport={{ once: true }}
                    className="text-lg font-light leading-relaxed text-[#555]"
                >
                    We pair cultural literacy with innovation, ensuring each concept resonates with place, purpose, and people.
                </motion.p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {insights.map((item, index) => (
                    <motion.article
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 }}
                        className="group relative p-8 rounded-[24px] bg-[#0c0c0c]/90 border border-white/10 flex flex-col gap-4 backdrop-blur-md shadow-lg overflow-hidden transition-all hover:-translate-y-2"
                    >
                        <div
                            className="absolute inset-0 opacity-10 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                            style={{ backgroundImage: `url(${item.image})` }}
                        />
                        <span className="text-[0.65rem] uppercase tracking-[0.28em] text-white/60 relative z-10">{item.category}</span>
                        <h3 className="text-xl font-light tracking-wide relative z-10">{item.title}</h3>
                        <p className="text-sm leading-relaxed text-white/70 font-light relative z-10">{item.description}</p>
                    </motion.article>
                ))}
            </div>
        </section>
    );
}
