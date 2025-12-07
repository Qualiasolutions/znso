'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';

// Project Data
const projects = [
    {
        id: 'maison-blanche',
        category: 'residential',
        title: 'Maison Blanche',
        location: 'Kuwait City',
        size: '375 m²',
        image: 'https://i.ibb.co/6078Nj8f/5.jpg',
        year: '2025',
        services: 'Architecture, Interior, Lighting',
        description: 'A luminous villa that transforms from a monolithic form by day to a glowing lantern by night, featuring adaptive solar fins and layered privacy.'
    },
    {
        id: 'facade-modern',
        category: 'residential',
        title: 'Al Hamra Villa',
        location: 'Riyadh',
        size: '520 m²',
        image: 'https://i.ibb.co/HLLwjMns/21.jpg',
        year: '2024',
        services: 'Architecture, Landscape',
        description: 'A contemporary residence that blends traditional Arabian elements with modern minimalist design, creating a harmonious living environment.'
    },
    {
        id: 'office-complex',
        category: 'commercial',
        title: 'Al Salhiya Towers',
        location: 'Kuwait City',
        size: '2,400 m²',
        image: 'https://i.ibb.co/4nWF1fxd/1.jpg',
        year: '2024',
        services: 'Architecture, Interior, Planning',
        description: 'A landmark commercial development featuring sustainable design principles and cutting-edge workplace environments.'
    },
    {
        id: 'poolside-retreat',
        category: 'residential',
        title: 'Desert Oasis',
        location: 'Doha',
        size: '680 m²',
        image: 'https://i.ibb.co/pvX6DG4y/Reception-5.jpg',
        year: '2024',
        services: 'Architecture, Pool Design, Landscape',
        description: 'A luxurious poolside retreat that seamlessly integrates indoor and outdoor living spaces with desert landscaping.'
    },
    {
        id: 'luxury-bedroom',
        category: 'interior',
        title: 'Serene Sanctuary',
        location: 'Dubai',
        size: 'Interior Design',
        image: 'https://i.ibb.co/HL00Pf9k/Bedroom-04-Dressing-4.jpg',
        year: '2024',
        services: 'Interior Design, Furniture, Lighting',
        description: 'A master bedroom sanctuary designed for ultimate relaxation, featuring custom furniture and ambient lighting.'
    },
    {
        id: 'contemporary-living',
        category: 'interior',
        title: 'Urban Elegance',
        location: 'Abu Dhabi',
        size: '450 m²',
        image: 'https://i.ibb.co/WvQKgKMg/Prayer-Room.jpg',
        year: '2024',
        services: 'Interior Design, Space Planning',
        description: 'A sophisticated living space that balances comfort and style with modern urban aesthetics.'
    },
    {
        id: 'boutique-hotel',
        category: 'hospitality',
        title: 'Pearl Retreat',
        location: 'Manama',
        size: '28 rooms',
        image: 'https://i.ibb.co/dsT9rLFz/7.jpg',
        year: '2025',
        services: 'Architecture, Interior, Branding',
        description: 'An intimate boutique hotel that combines luxury with authentic local culture and personalized service.'
    },
    {
        id: 'cultural-center',
        category: 'commercial',
        title: 'Heritage Gallery',
        location: 'Sharjah',
        size: '1,200 m²',
        image: 'https://i.ibb.co/CKRsCZK0/Hallway-5.jpg',
        year: '2024',
        services: 'Architecture, Exhibition Design, Lighting',
        description: 'A cultural center dedicated to preserving and celebrating local heritage through contemporary architectural expression.'
    }
];

const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'hospitality', label: 'Hospitality' },
    { id: 'interior', label: 'Interior' }
];

interface PortfolioGridProps {
    onOpenProject: (project: any) => void;
}

export function PortfolioGrid({ onOpenProject }: PortfolioGridProps) {
    const [activeFilter, setActiveFilter] = useState('all');

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(p => p.category === activeFilter);

    return (
        <section className="py-20 container mx-auto px-6">
            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
                {filters.map(filter => (
                    <button
                        key={filter.id}
                        onClick={() => setActiveFilter(filter.id)}
                        className={`px-6 py-3 rounded-full text-xs uppercase tracking-widest transition-all duration-300 border ${activeFilter === filter.id
                                ? 'bg-white/10 border-white/40 text-white'
                                : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:border-white/20'
                            }`}
                    >
                        {filter.label}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence>
                    {filteredProjects.map((project) => (
                        <motion.article
                            layout
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4 }}
                            className="group relative aspect-[4/5] rounded-[28px] overflow-hidden cursor-pointer border border-white/10 shadow-2xl"
                            onClick={() => onOpenProject(project)}
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${project.image})` }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />

                            <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500 group-hover:-translate-y-2">
                                <span className="text-xs font-mono text-white/60 uppercase tracking-widest mb-2 block">
                                    {project.category}
                                </span>
                                <h3 className="text-2xl font-light mb-2">{project.title}</h3>
                                <p className="text-sm text-white/70">
                                    {project.location} • {project.size}
                                </p>
                            </div>
                        </motion.article>
                    ))}
                </AnimatePresence>
            </motion.div>
        </section>
    );
}
