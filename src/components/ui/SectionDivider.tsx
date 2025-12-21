'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionDividerProps {
    className?: string;
    variant?: 'light' | 'dark';
}

export function SectionDivider({ className, variant = 'dark' }: SectionDividerProps) {
    const lineColor = variant === 'light' ? 'from-transparent via-black/10 to-transparent' : 'from-transparent via-white/10 to-transparent';
    const dotColor = variant === 'light' ? 'bg-black/20' : 'bg-white/20';

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={cn('flex items-center justify-center py-16', className)}
        >
            <div className="flex items-center gap-4 w-full max-w-xs">
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className={cn('flex-1 h-px bg-gradient-to-r origin-right', lineColor)}
                />
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className={cn('w-1.5 h-1.5 rounded-full', dotColor)}
                />
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className={cn('flex-1 h-px bg-gradient-to-l origin-left', lineColor)}
                />
            </div>
        </motion.div>
    );
}
