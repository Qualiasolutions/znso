'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { ArrowUpRight } from 'lucide-react';

const services = [
    {
        id: 'architecture',
        title: 'Architectural Design',
        description: 'We begin by studying the site through real data and in-depth client consultations, then develop your project through concept creation, zoning, Baladiya approvals, structural design, and a fully crafted facade.',
        image: '/projects/facade-3/Facade-2_1.jpg',
        modalId: 'architecture',
        stats: { label: 'Projects', value: '8+' }
    },
    {
        id: 'interior',
        title: 'Interior Design',
        description: 'Starting from your approved floor plan, we shape your interiors through lifestyle-focused meetings, space planning, mood direction, material specifications, and 3D visualization.',
        image: '/projects/hassan-at/Dining_1.jpg',
        modalId: 'interior',
        stats: { label: 'Spaces', value: '50+' }
    },
    {
        id: 'management',
        title: 'Project Management',
        description: 'We oversee grey structure and finishes through method statements, execution planning, site visits, and technical coordination — ensuring your project is delivered accurately.',
        image: '/projects/facade-4/Facade-3_1.jpg',
        modalId: 'management',
        stats: { label: 'Delivered', value: '100%' }
    },
    {
        id: 'consultation',
        title: 'Consultation',
        description: 'Expert guidance to refine your vision, optimize space, and select the perfect materials for your unique project requirements.',
        image: '/projects/ali-bl/Living_1.jpg',
        modalId: 'consultation',
        stats: { label: 'Sessions', value: '200+' }
    }
];

interface ServicesProps {
    onOpenModal?: (modalId: string) => void;
}

export function Services({ onOpenModal }: ServicesProps) {
    return (
        <section className="py-32 relative overflow-hidden bg-[#fafafa]">
            {/* Subtle Pattern */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
                backgroundSize: '32px 32px'
            }} />

            <div className="container mx-auto px-6 relative">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">
                    <div className="flex flex-col gap-4 max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4"
                        >
                            <div className="w-12 h-px bg-[#0a0a0a]/30" />
                            <span className="text-[11px] uppercase tracking-[0.4em] text-[#0a0a0a]/50">
                                Our Expertise
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-extralight tracking-tight text-[#0a0a0a]"
                        >
                            Curated Services
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg font-light leading-relaxed text-[#555] max-w-lg"
                        >
                            A comprehensive suite of architectural and design services, tailored to bring your unique vision to life.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex gap-8"
                    >
                        <div className="text-right">
                            <span className="block text-4xl font-light text-[#0a0a0a]">15+</span>
                            <span className="text-[10px] uppercase tracking-widest text-[#0a0a0a]/40">Years Experience</span>
                        </div>
                        <div className="w-px bg-[#0a0a0a]/10" />
                        <div className="text-right">
                            <span className="block text-4xl font-light text-[#0a0a0a]">100%</span>
                            <span className="text-[10px] uppercase tracking-widest text-[#0a0a0a]/40">Client Satisfaction</span>
                        </div>
                    </motion.div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative rounded-[28px] overflow-hidden bg-[#0a0a0a] min-h-[420px] cursor-pointer"
                            onClick={() => onOpenModal?.(service.modalId)}
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                            </div>

                            {/* Content */}
                            <div className="relative z-10 h-full p-10 flex flex-col justify-between">
                                {/* Top */}
                                <div className="flex justify-between items-start">
                                    <motion.div
                                        initial={false}
                                        className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-2 group-hover:translate-y-0"
                                    >
                                        <ArrowUpRight className="w-5 h-5" />
                                    </motion.div>

                                    <div className="text-right">
                                        <span className="block text-2xl font-light">{service.stats.value}</span>
                                        <span className="text-[10px] uppercase tracking-widest text-white/40">{service.stats.label}</span>
                                    </div>
                                </div>

                                {/* Bottom */}
                                <div>
                                    <span className="inline-block px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] uppercase tracking-[0.2em] text-white/70 mb-4">
                                        {service.id}
                                    </span>

                                    <h3 className="text-2xl md:text-3xl font-light tracking-wide mb-4 group-hover:translate-x-2 transition-transform duration-300">
                                        {service.title}
                                    </h3>

                                    <p className="text-sm leading-relaxed text-white/60 max-w-md group-hover:text-white/80 transition-colors duration-300">
                                        {service.description}
                                    </p>

                                    <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <Button
                                            variant="ghost"
                                            className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10"
                                        >
                                            Explore Service
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Corner */}
                            <div className="absolute top-6 right-6 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-white/60 to-transparent" />
                                <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-white/60 to-transparent" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
