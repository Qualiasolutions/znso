'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export function ServicesCTA() {
    return (
        <section className="py-32 container mx-auto px-6 text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white/10 to-black/40 rounded-[32px] p-12 md:p-20 border border-white/10 backdrop-blur-sm"
            >
                <h2 className="text-3xl md:text-5xl font-light mb-6">Ready to Transform Your Vision?</h2>
                <p className="text-lg md:text-xl font-light text-white/70 mb-10 max-w-2xl mx-auto">
                    Let's collaborate to create exceptional architectural solutions that exceed your expectations and inspire generations.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <Button asChild size="lg">
                        <Link href="/contact">Start Consultation</Link>
                    </Button>
                    <Button variant="outline" asChild size="lg">
                        <Link href="/portfolio">View Our Work</Link>
                    </Button>
                </div>
            </motion.div>
        </section>
    );
}
