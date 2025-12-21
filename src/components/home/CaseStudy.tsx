'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export function CaseStudy() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.5]);

    return (
        <section ref={containerRef} className="min-h-screen lg:h-screen relative overflow-hidden flex items-center">
            {/* Background Image with Parallax */}
            <motion.div style={{ y }} className="absolute inset-0 z-0">
                <Image
                    src="/projects/facade-1/1.jpg"
                    alt="Maison Blanche"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/60" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
            </motion.div>

            <motion.div style={{ opacity }} className="container mx-auto px-6 relative z-10 py-16 lg:py-0">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col gap-6 lg:gap-8"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-px bg-white/40" />
                            <span className="text-[11px] uppercase tracking-[0.4em] text-white/50">Featured Case Study</span>
                        </div>

                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-extralight tracking-tight leading-tight">
                            Maison Blanche
                            <span className="block text-white/60 text-xl md:text-2xl lg:text-3xl mt-2">Kuwait City</span>
                        </h2>

                        <p className="text-base md:text-lg font-light leading-relaxed text-white/70 max-w-lg">
                            A 375 m² villa expressed as a monolith in daylight and a luminous lantern by night. This residence redefines contemporary living through adaptive architecture.
                        </p>

                        {/* Stats - Horizontal on mobile */}
                        <div className="flex flex-wrap gap-6 lg:gap-8 py-6 border-y border-white/10">
                            <div>
                                <span className="block text-2xl md:text-3xl font-light">375</span>
                                <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-white/40">Sq Meters</span>
                            </div>
                            <div className="w-px bg-white/10 hidden sm:block" />
                            <div>
                                <span className="block text-2xl md:text-3xl font-light">2024</span>
                                <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-white/40">Completion</span>
                            </div>
                            <div className="w-px bg-white/10 hidden sm:block" />
                            <div>
                                <span className="block text-2xl md:text-3xl font-light">9</span>
                                <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-white/40">Renders</span>
                            </div>
                        </div>

                        {/* Services */}
                        <div className="flex flex-wrap gap-2">
                            {['Architecture', 'Facade Design', 'Lighting'].map((service) => (
                                <span
                                    key={service}
                                    className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-widest text-white/60"
                                >
                                    {service}
                                </span>
                            ))}
                        </div>

                        <Button asChild size="lg" className="w-fit group">
                            <Link href="/case-studies/maison-blanche" className="flex items-center gap-3">
                                View Case Study
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                    </motion.div>

                    {/* Single Featured Image - Clean and Simple */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.4 }}
                            className="relative aspect-[4/3] lg:aspect-[3/4] rounded-2xl overflow-hidden border border-white/10"
                        >
                            <Image
                                src="/projects/facade-1/5.jpg"
                                alt="Maison Blanche Facade"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                            {/* Image label */}
                            <div className="absolute bottom-4 left-4 right-4">
                                <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">Night View</span>
                            </div>
                        </motion.div>

                        {/* Small accent image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="absolute -bottom-4 -left-4 lg:-left-8 w-24 h-24 lg:w-32 lg:h-32 rounded-xl overflow-hidden border border-white/20 shadow-2xl"
                        >
                            <Image
                                src="/projects/facade-1/3.jpg"
                                alt="Maison Blanche Detail"
                                fill
                                className="object-cover"
                            />
                        </motion.div>

                        {/* Decorative element */}
                        <div className="absolute -z-10 -inset-4 bg-gradient-to-br from-white/5 to-transparent rounded-3xl blur-xl" />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
