'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { projects, type Project } from '@/lib/projects';
import { cn } from '@/lib/utils';

const filters = [
    { id: 'residential', label: 'Architectural' },
    { id: 'interior', label: 'Interior' },
];

interface PortfolioGridProps {
    onOpenProject: (project: Project) => void;
}

export function PortfolioGrid({ onOpenProject }: PortfolioGridProps) {
    const [activeFilter, setActiveFilter] = useState('residential');
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    const filteredProjects = projects.filter(p => p.category === activeFilter);

    return (
        <section className="py-20 container mx-auto px-6">
            {/* Filters */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-3 mb-20"
            >
                {filters.map((filter, index) => (
                    <motion.button
                        key={filter.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => setActiveFilter(filter.id)}
                        className={cn(
                            'px-8 py-4 rounded-full text-xs uppercase tracking-[0.25em] transition-all duration-500 border relative overflow-hidden group',
                            activeFilter === filter.id
                                ? 'bg-white text-black border-white'
                                : 'bg-transparent border-white/20 text-white/70 hover:border-white/40 hover:text-white'
                        )}
                    >
                        <span className="relative z-10">{filter.label}</span>
                        {activeFilter !== filter.id && (
                            <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        )}
                    </motion.button>
                ))}
            </motion.div>

            {/* Project Count */}
            <motion.div
                layout
                className="text-center mb-12"
            >
                <span className="text-white/40 text-sm tracking-widest uppercase">
                    {filteredProjects.length} Project{filteredProjects.length !== 1 ? 's' : ''}
                </span>
            </motion.div>

            {/* Grid */}
            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
            >
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project, index) => (
                        <motion.article
                            layout
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: -20 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.05,
                                layout: { duration: 0.4 }
                            }}
                            onMouseEnter={() => setHoveredId(project.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            onClick={() => onOpenProject(project)}
                            className="group relative cursor-pointer"
                        >
                            {/* Card */}
                            <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden border border-white/10 bg-white/5">
                                {/* Image */}
                                <Image
                                    src={project.coverImage}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

                                {/* Scan Line Effect */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100"
                                    initial={false}
                                    animate={hoveredId === project.id ? {
                                        y: ['0%', '200%'],
                                        transition: { duration: 1.5, repeat: Infinity }
                                    } : { y: '0%' }}
                                    style={{ height: '30%' }}
                                />

                                {/* Content */}
                                <div className="absolute inset-0 flex flex-col justify-end p-8">
                                    {/* Category Tag */}
                                    <motion.div
                                        initial={false}
                                        animate={{
                                            y: hoveredId === project.id ? 0 : 10,
                                            opacity: hoveredId === project.id ? 1 : 0.7
                                        }}
                                        transition={{ duration: 0.3 }}
                                        className="mb-4"
                                    >
                                        <span className="inline-block px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] uppercase tracking-[0.3em] text-white/80">
                                            {project.category === 'residential' ? 'Architectural' : project.category}
                                        </span>
                                    </motion.div>

                                    {/* Title */}
                                    <motion.h3
                                        initial={false}
                                        animate={{
                                            y: hoveredId === project.id ? 0 : 10,
                                        }}
                                        transition={{ duration: 0.3, delay: 0.05 }}
                                        className="text-2xl lg:text-3xl font-light tracking-wide mb-2"
                                    >
                                        {project.title}
                                    </motion.h3>

                                    {/* Subtitle */}
                                    {project.subtitle && (
                                        <motion.p
                                            initial={false}
                                            animate={{
                                                y: hoveredId === project.id ? 0 : 10,
                                                opacity: hoveredId === project.id ? 1 : 0.6
                                            }}
                                            transition={{ duration: 0.3, delay: 0.1 }}
                                            className="text-sm text-white/60 font-light mb-4"
                                        >
                                            {project.subtitle}
                                        </motion.p>
                                    )}

                                    {/* Meta */}
                                    <motion.div
                                        initial={false}
                                        animate={{
                                            y: hoveredId === project.id ? 0 : 20,
                                            opacity: hoveredId === project.id ? 1 : 0
                                        }}
                                        transition={{ duration: 0.3, delay: 0.15 }}
                                        className="flex items-center gap-4 text-xs text-white/50"
                                    >
                                        <span>{project.location}</span>
                                        <span className="w-1 h-1 rounded-full bg-white/30" />
                                        <span>{project.year}</span>
                                        <span className="w-1 h-1 rounded-full bg-white/30" />
                                        <span>{project.images.length} Images</span>
                                    </motion.div>
                                </div>

                                {/* Corner Accent */}
                                <div className="absolute top-6 right-6 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-white/60 to-transparent" />
                                    <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-white/60 to-transparent" />
                                </div>

                                {/* Featured Badge */}
                                {project.featured && (
                                    <div className="absolute top-6 left-6">
                                        <span className="px-3 py-1.5 rounded-full bg-white/90 text-black text-[10px] uppercase tracking-[0.2em] font-medium">
                                            Featured
                                        </span>
                                    </div>
                                )}
                            </div>
                        </motion.article>
                    ))}
                </AnimatePresence>
            </motion.div>
        </section>
    );
}
