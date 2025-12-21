'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

const featuredImages = [
    '/projects/facade-1/2.jpg',
    '/projects/facade-1/3.jpg',
    '/projects/facade-1/4.jpg',
];

export function CaseStudy() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);

    return (
        <section ref={containerRef} className="py-32 relative overflow-hidden">
            {/* Background Image with Parallax */}
            <motion.div style={{ y }} className="absolute inset-0 z-0">
                <Image
                    src="/projects/facade-1/1.jpg"
                    alt="Maison Blanche"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />
            </motion.div>

            <motion.div style={{ opacity }} className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col gap-8"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-px bg-white/40" />
                            <span className="text-[11px] uppercase tracking-[0.4em] text-white/50">Featured Case Study</span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-extralight tracking-tight leading-tight">
                            Maison Blanche
                            <span className="block text-white/60 text-2xl md:text-3xl mt-2">Kuwait City</span>
                        </h2>

                        <p className="text-lg md:text-xl font-light leading-relaxed text-white/70 max-w-lg">
                            A 375 m² villa expressed as a monolith in daylight and a luminous lantern by night. This residence redefines contemporary living through adaptive architecture.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 py-8 border-y border-white/10">
                            <div>
                                <span className="block text-3xl md:text-4xl font-light">375</span>
                                <span className="text-[10px] uppercase tracking-widest text-white/40">Square Meters</span>
                            </div>
                            <div>
                                <span className="block text-3xl md:text-4xl font-light">2024</span>
                                <span className="text-[10px] uppercase tracking-widest text-white/40">Completion</span>
                            </div>
                            <div>
                                <span className="block text-3xl md:text-4xl font-light">9</span>
                                <span className="text-[10px] uppercase tracking-widest text-white/40">Renders</span>
                            </div>
                        </div>

                        {/* Services */}
                        <div className="flex flex-wrap gap-3">
                            {['Architecture', 'Facade Design', 'Lighting'].map((service) => (
                                <span
                                    key={service}
                                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-widest text-white/60"
                                >
                                    {service}
                                </span>
                            ))}
                        </div>

                        <Button asChild size="lg" className="w-fit group">
                            <Link href="/portfolio" className="flex items-center gap-3">
                                View Project
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                    </motion.div>

                    {/* Image Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative hidden lg:block"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            {/* Main large image */}
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.4 }}
                                className="col-span-2 aspect-video rounded-2xl overflow-hidden border border-white/10"
                            >
                                <Image
                                    src="/projects/facade-1/5.jpg"
                                    alt="Maison Blanche Facade"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>

                            {/* Smaller images */}
                            {featuredImages.map((img, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                    whileHover={{ scale: 1.05 }}
                                    className={`relative aspect-square rounded-2xl overflow-hidden border border-white/10 ${
                                        i === 2 ? 'col-span-2' : ''
                                    }`}
                                >
                                    <Image
                                        src={img}
                                        alt={`Maison Blanche Detail ${i + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/20 hover:bg-black/0 transition-colors duration-300" />
                                </motion.div>
                            ))}
                        </div>

                        {/* Decorative element */}
                        <div className="absolute -z-10 -inset-4 bg-gradient-to-br from-white/5 to-transparent rounded-3xl blur-xl" />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
