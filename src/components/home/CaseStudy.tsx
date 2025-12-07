'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export function CaseStudy() {
    return (
        <section className="py-32 relative bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url(https://i.ibb.co/0pVwWwcG/4.jpg)' }}>
            <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/60 to-black/95" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl mx-auto text-center">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-black/50 backdrop-blur-xl p-12 rounded-[32px] border border-white/10 shadow-2xl flex flex-col gap-6"
                    >
                        <span className="text-xs uppercase tracking-[0.3em] text-white/60">Case Study</span>
                        <h2 className="text-4xl md:text-5xl font-extralight tracking-tight">Maison Blanche, Kuwait</h2>
                        <p className="text-lg font-light leading-relaxed text-white/80">
                            A 375 m² villa expressed as a monolith in daylight and a luminous lantern by night.
                        </p>
                        <ul className="space-y-3 mt-2">
                            {[
                                'Scope: Architecture + Interior',
                                'Experience: Interactive 3D walkthrough',
                                'Delivery: 2025, Kuwait City'
                            ].map((item, i) => (
                                <li key={i} className="flex items-center justify-center gap-3 text-sm text-white/70 font-light">
                                    <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-4">
                            <Button asChild size="lg">
                                <Link href="/case-studies/maison-blanche">View Full Case Study</Link>
                            </Button>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
