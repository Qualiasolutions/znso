'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

const services = [
    {
        id: 'architecture',
        title: 'Architectural Design Service',
        description: 'We begin by studying the site through real data and in-depth client consultations, then develop your project through concept creation, zoning, Baladiya approvals, structural design, and a fully crafted façade — delivered as a complete architectural package.',
        image: 'https://i.ibb.co/HL00Pf9k/Bedroom-04-Dressing-4.jpg',
        modalId: 'architecture'
    },
    {
        id: 'interior',
        title: 'Interior Design Service',
        description: 'Starting from your approved floor plan, we shape your interiors through lifestyle-focused meetings, space planning, mood direction, material specifications, 3D design, and technical drawings that ensure a seamless construction process.',
        image: 'https://i.ibb.co/WvQKgKMg/Prayer-Room.jpg',
        modalId: 'interior'
    },
    {
        id: 'management',
        title: 'Project Management & Supervision',
        description: 'We oversee grey structure and finishes through method statements, execution planning, site visits, and technical coordination — ensuring your project is delivered accurately, safely, and on schedule.',
        image: 'https://i.ibb.co/CKRsCZK0/Hallway-5.jpg',
        modalId: 'management'
    },
    {
        id: 'consultation',
        title: 'Consultation',
        description: 'Expert guidance to refine your vision, optimize space, and select the perfect materials.',
        image: 'https://i.ibb.co/dsT9rLFz/7.jpg',
        modalId: 'consultation'
    }
];

interface ServicesProps {
    onOpenModal?: (modalId: string) => void;
}

export function Services({ onOpenModal }: ServicesProps) {
    return (
        <section className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col gap-4 max-w-2xl mb-16">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 0.6, x: 0 }}
                        viewport={{ once: true }}
                        className="text-xs uppercase tracking-[0.4em] flex items-center gap-4 text-[#0a0a0a] before:content-[''] before:w-16 before:h-px before:bg-gradient-to-r before:from-[#0a0a0a]/40 before:to-transparent"
                    >
                        Our Expertise
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-5xl font-extralight tracking-wide text-[#0a0a0a]"
                    >
                        Curated Services
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.8 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="text-lg font-light leading-relaxed text-[#555]"
                    >
                        We offer a comprehensive suite of architectural and design services, tailored to bring your unique vision to life.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8 rounded-[32px] border border-white/10 bg-gradient-to-br from-white/5 to-black/60 backdrop-blur-xl shadow-2xl relative">
                    {/* Background for the grid container */}
                    <div className="absolute inset-0 rounded-[32px] overflow-hidden -z-10 opacity-20">
                        <div className="absolute inset-0 bg-[url('https://i.ibb.co/pvX6DG4y/Reception-5.jpg')] bg-cover bg-center" />
                    </div>

                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative p-8 rounded-[28px] overflow-hidden min-h-[380px] flex flex-col justify-between bg-[#0c0c0c]/85 border border-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-white/25"
                        >
                            {/* Card Background Image */}
                            <div
                                className="absolute inset-0 opacity-40 bg-cover bg-center transition-opacity duration-500 group-hover:opacity-50 saturate-150"
                                style={{ backgroundImage: `url(${service.image})` }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/60 to-black/90 pointer-events-none" />

                            <div className="relative z-10 flex flex-col h-full justify-between">
                                <div>
                                    <h3 className="text-xl font-light tracking-widest uppercase mb-4">{service.title}</h3>
                                    <p className="text-sm leading-relaxed text-white/75">{service.description}</p>
                                </div>

                                <Button
                                    variant="ghost"
                                    className="self-start mt-6 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10"
                                    onClick={() => onOpenModal?.(service.modalId)}
                                >
                                    Learn More
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
