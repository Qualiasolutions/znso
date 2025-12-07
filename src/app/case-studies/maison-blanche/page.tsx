import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Maison Blanche Case Study | ZNSO Architects',
    description: 'A 375 m² villa expressed as a monolith in daylight and a luminous lantern by night.',
};

export default function MaisonBlanchePage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white">
            {/* Hero Section */}
            <section className="relative h-[70vh] bg-cover bg-center" style={{ backgroundImage: 'url(https://i.ibb.co/0pVwWwcG/4.jpg)' }}>
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black" />
                <div className="container mx-auto px-6 h-full flex flex-col justify-end pb-20 relative z-10">
                    <Link href="/" className="mb-8 inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        <span className="text-sm uppercase tracking-wider">Back to Home</span>
                    </Link>
                    <span className="text-xs uppercase tracking-[0.3em] text-white/60 mb-4">Case Study</span>
                    <h1 className="text-5xl md:text-7xl font-extralight tracking-tight mb-4">Maison Blanche</h1>
                    <p className="text-xl text-white/80 font-light max-w-2xl">Kuwait City, Kuwait</p>
                </div>
            </section>

            {/* Project Overview */}
            <section className="py-24 bg-[#fdfdfd] text-[#0a0a0a]">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
                        <div>
                            <h2 className="text-4xl font-extralight mb-6">Project Overview</h2>
                            <p className="text-lg leading-relaxed mb-6 text-[#555]">
                                A 375 m² villa expressed as a monolith in daylight and a luminous lantern by night. Maison Blanche represents the synthesis of architectural purity and programmatic complexity.
                            </p>
                            <p className="text-lg leading-relaxed text-[#555]">
                                The villa's circulation is anchored by a sculpted atrium, enabling layered privacy while maintaining visual continuity between levels. Adaptive solar fins modulate daylight, while the evening lighting script transitions through hospitality, gallery, and residence scenes.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-sm uppercase tracking-wider text-[#888] mb-2">Client</h3>
                                <p className="text-lg text-[#0a0a0a]">Private Residence</p>
                            </div>
                            <div>
                                <h3 className="text-sm uppercase tracking-wider text-[#888] mb-2">Location</h3>
                                <p className="text-lg text-[#0a0a0a]">Kuwait City, Kuwait</p>
                            </div>
                            <div>
                                <h3 className="text-sm uppercase tracking-wider text-[#888] mb-2">Size</h3>
                                <p className="text-lg text-[#0a0a0a]">375 m²</p>
                            </div>
                            <div>
                                <h3 className="text-sm uppercase tracking-wider text-[#888] mb-2">Scope</h3>
                                <p className="text-lg text-[#0a0a0a]">Architecture + Interior Design</p>
                            </div>
                            <div>
                                <h3 className="text-sm uppercase tracking-wider text-[#888] mb-2">Completion</h3>
                                <p className="text-lg text-[#0a0a0a]">2025</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-24 bg-[#0a0a0a]">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        <div className="aspect-[4/3] relative rounded-2xl overflow-hidden">
                            <img src="https://i.ibb.co/HLLwjMns/21.jpg" alt="Maison Blanche Interior" className="w-full h-full object-cover" />
                        </div>
                        <div className="aspect-[4/3] relative rounded-2xl overflow-hidden">
                            <img src="https://i.ibb.co/0pVwWwcG/4.jpg" alt="Maison Blanche Exterior" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Design Concept */}
            <section className="py-24 bg-[#fdfdfd] text-[#0a0a0a]">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-4xl font-extralight mb-8">Design Concept</h2>
                    <div className="space-y-6 text-lg leading-relaxed text-[#555]">
                        <p>
                            The design philosophy centers on creating a residence that balances monumentality with intimacy. The villa's massing is carefully articulated to respond to the harsh desert climate while creating protected outdoor spaces that extend the living experience.
                        </p>
                        <p>
                            Layered apertures modulate natural light throughout the day, while programmable lighting scenes choreograph the evening mood. The result is a home that transforms from a contemplative sanctuary during the day to an inviting social space at night.
                        </p>
                        <p>
                            Material selection emphasizes the interplay between rough and refined surfaces—from the textured exterior cladding to the polished interior finishes. This material dialogue reinforces the project's theme of duality and transformation.
                        </p>
                    </div>
                </div>
            </section>

            {/* Technical Innovation */}
            <section className="py-24 bg-[#0a0a0a]">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-4xl font-extralight mb-8">Technical Innovation</h2>
                    <div className="space-y-6 text-lg leading-relaxed text-white/80">
                        <p>
                            The immersive model integrates material libraries, acoustic mapping, and climatic simulations for stakeholder alignment. Advanced BIM workflows ensured precision in fabrication and coordination across multiple building systems.
                        </p>
                        <p>
                            Environmental analysis informed the placement of openings and the design of shading devices, optimizing thermal performance while maintaining architectural clarity. The result is a villa that achieves both aesthetic ambition and environmental responsibility.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-[#fdfdfd] text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-extralight mb-6 text-[#0a0a0a]">Interested in a similar project?</h2>
                    <Button asChild size="lg">
                        <Link href="/contact">Start a Consultation</Link>
                    </Button>
                </div>
            </section>
        </main>
    );
}
