'use client';

import { motion } from 'framer-motion';

const team = [
    {
        name: 'Salman Al-Nasser',
        role: 'Principal Architect',
        image: 'https://i.ibb.co/DDTBq9XT/2.jpg' // Placeholder, replace with actual team image if available
    },
    {
        name: 'Sarah Ahmed',
        role: 'Senior Interior Designer',
        image: 'https://i.ibb.co/pvX6DG4y/Reception-5.jpg' // Placeholder
    },
    {
        name: 'Mohammed Ali',
        role: 'Project Manager',
        image: 'https://i.ibb.co/CKRsCZK0/Hallway-5.jpg' // Placeholder
    }
];

export function Team() {
    return (
        <section className="py-32 bg-zinc-900/30">
            <div className="container mx-auto px-6">
                <div className="mb-16 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 0.6, y: 0 }}
                        viewport={{ once: true }}
                        className="text-xs uppercase tracking-[0.4em] block mb-4"
                    >
                        The Team
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-extralight tracking-wide"
                    >
                        Meet the minds behind ZNSO
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="group relative overflow-hidden rounded-[24px]"
                        >
                            <div
                                className="aspect-[3/4] bg-cover bg-center transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                                style={{ backgroundImage: `url(${member.image})` }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />
                            <div className="absolute bottom-0 left-0 p-8">
                                <h3 className="text-2xl font-light tracking-wide mb-1">{member.name}</h3>
                                <p className="text-sm uppercase tracking-widest text-white/60">{member.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
