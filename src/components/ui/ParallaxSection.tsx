'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ParallaxSectionProps {
    children: React.ReactNode;
    className?: string;
    velocity?: number; // Positive for slower scroll (lag), negative for faster
    opacityEffect?: boolean;
}

export function ParallaxSection({
    children,
    className,
    velocity = 50,
    opacityEffect = false
}: ParallaxSectionProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], [-velocity, velocity]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section ref={ref} className={cn('relative', className)}>
            <motion.div
                style={{
                    y,
                    opacity: opacityEffect ? opacity : 1
                }}
                className="relative z-10"
            >
                {children}
            </motion.div>
        </section>
    );
}
