'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import { getFeaturedProjects } from '@/lib/projects';

export function FeaturedProjects() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const x = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);

    const featuredProjects = getFeaturedProjects().slice(0, 6);

    return (
        <section ref={containerRef} className="py-32 overflow-hidden bg-[#030303]">
            <div className="container mx-auto px-6 mb-16">
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
                    <div className="flex flex-col gap-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4"
                        >
                            <div className="w-12 h-px bg-white/40" />
                            <span className="text-[11px] uppercase tracking-[0.4em] text-white/50">
                                Selected Works
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-extralight tracking-tight"
                        >
                            Featured Projects
                        </motion.h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <Button asChild variant="outline" className="group">
                            <Link href="/portfolio" className="flex items-center gap-3">
                                View All Projects
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </div>

            {/* Horizontal Scroll Gallery */}
            <motion.div style={{ x }} className="flex gap-6 pl-6">
                {featuredProjects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ delay: index * 0.1 }}
                        className="group flex-shrink-0 w-[400px] md:w-[500px]"
                    >
                        <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden border border-white/10 mb-6">
                            <Image
                                src={project.coverImage}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 flex items-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="flex gap-2 flex-wrap">
                                    {project.services.map((service) => (
                                        <span
                                            key={service}
                                            className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] uppercase tracking-widest"
                                        >
                                            {service}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Category Badge */}
                            <div className="absolute top-6 left-6">
                                <span className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] uppercase tracking-[0.2em]">
                                    {project.category}
                                </span>
                            </div>
                        </div>

                        <div className="px-2">
                            <h3 className="text-2xl font-light tracking-wide mb-2 group-hover:translate-x-2 transition-transform duration-300">
                                {project.title}
                            </h3>
                            <div className="flex items-center gap-4 text-sm text-white/40">
                                <span>{project.location}</span>
                                <span className="w-1 h-1 rounded-full bg-white/20" />
                                <span>{project.year}</span>
                                <span className="w-1 h-1 rounded-full bg-white/20" />
                                <span>{project.images.length} Images</span>
                            </div>
                        </div>
                    </motion.div>
                ))}

                {/* View All Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex-shrink-0 w-[300px] aspect-[4/5] rounded-[24px] border border-white/10 bg-white/5 flex items-center justify-center"
                >
                    <Link href="/portfolio" className="flex flex-col items-center gap-6 group">
                        <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                            <ArrowRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
                        </div>
                        <span className="text-sm uppercase tracking-widest text-white/60">View All</span>
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
}
