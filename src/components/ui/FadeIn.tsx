'use client';

import { motion, Variants, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ANIMATION, prefersReducedMotion } from '@/lib/animations';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

const easeOut = ANIMATION.ease.out;

interface FadeInProps extends Omit<HTMLMotionProps<'div'>, 'variants'> {
    children: React.ReactNode;
    direction?: Direction;
    delay?: number;
    duration?: number;
    distance?: number;
    blur?: boolean;
    scale?: boolean;
    className?: string;
    once?: boolean;
    threshold?: number;
}

const getDirectionOffset = (direction: Direction, distance: number) => {
    switch (direction) {
        case 'up':
            return { y: distance };
        case 'down':
            return { y: -distance };
        case 'left':
            return { x: distance };
        case 'right':
            return { x: -distance };
        default:
            return {};
    }
};

export function FadeIn({
    children,
    direction = 'up',
    delay = 0,
    duration = ANIMATION.duration.slow,
    distance = 24,
    blur = false,
    scale = false,
    className,
    once = true,
    threshold = 0.1,
    ...props
}: FadeInProps) {
    // Respect reduced motion preferences
    const reducedMotion = typeof window !== 'undefined' && prefersReducedMotion();
    const directionOffset = getDirectionOffset(direction, distance);

    const variants: Variants = reducedMotion
        ? {
            hidden: { opacity: 1 },
            visible: { opacity: 1 },
        }
        : {
            hidden: {
                opacity: 0,
                ...directionOffset,
                ...(blur && { filter: 'blur(8px)' }),
                ...(scale && { scale: 0.95 }),
            },
            visible: {
                opacity: 1,
                x: 0,
                y: 0,
                filter: 'blur(0px)',
                scale: 1,
                transition: {
                    duration,
                    delay,
                    ease: easeOut,
                },
            },
        };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount: threshold }}
            variants={variants}
            className={cn(className)}
            {...props}
        >
            {children}
        </motion.div>
    );
}

interface StaggerContainerProps extends Omit<HTMLMotionProps<'div'>, 'variants'> {
    children: React.ReactNode;
    staggerDelay?: number;
    className?: string;
    once?: boolean;
}

export function StaggerContainer({
    children,
    staggerDelay = 0.1,
    className,
    once = true,
    ...props
}: StaggerContainerProps) {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: staggerDelay,
                delayChildren: 0.1,
            },
        },
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount: 0.1 }}
            variants={containerVariants}
            className={cn(className)}
            {...props}
        >
            {children}
        </motion.div>
    );
}

interface StaggerItemProps extends Omit<HTMLMotionProps<'div'>, 'variants'> {
    children: React.ReactNode;
    direction?: Direction;
    distance?: number;
    blur?: boolean;
    className?: string;
}

export function StaggerItem({
    children,
    direction = 'up',
    distance = 20,
    blur = false,
    className,
    ...props
}: StaggerItemProps) {
    const directionOffset = getDirectionOffset(direction, distance);

    const itemVariants: Variants = {
        hidden: {
            opacity: 0,
            ...directionOffset,
            ...(blur && { filter: 'blur(6px)' }),
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            filter: 'blur(0px)',
            transition: {
                duration: 0.5,
                ease: easeOut,
            },
        },
    };

    return (
        <motion.div variants={itemVariants} className={cn(className)} {...props}>
            {children}
        </motion.div>
    );
}
