'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

interface HeroProps {
    onOpenModal?: (modalId: string) => void;
}

export function Hero({ onOpenModal }: HeroProps) {
    return (
        <section className="relative min-h-[92vh] flex items-center pt-32 pb-20 overflow-hidden">
            {/* Background */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url(https://i.ibb.co/HLLwjMns/21.jpg)' }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/85" />
            </div>

            {/* Animated Aurora/Glow */}
            <div className="absolute inset-[-25%] z-0 opacity-50 blur-[90px] pointer-events-none">
                <div className="absolute top-[24%] left-[18%] w-[40%] h-[40%] rounded-full bg-white/5" />
                <div className="absolute top-[20%] right-[25%] w-[30%] h-[30%] rounded-full bg-[#7878ff]/10" />
            </div>

            <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-[0.8fr_1fr] gap-16 items-center">
                {/* Text Content */}
                <div className="flex flex-col gap-8">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 0.65, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xs font-medium uppercase tracking-[0.35em]"
                    >
                        Architectural Excellence
                    </motion.span>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight tracking-tight leading-[1.15] -mt-2">
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Designing
                        </motion.span>
                        <br />
                        <span className="inline-block border-r-4 border-white/80 pr-4 animate-pulse">
                            The Future
                        </span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 0.78, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="text-lg font-light leading-relaxed max-w-xl text-white/80"
                    >
                        Shaping environments built to endure, enrich, and elevate the essence of living.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="flex flex-wrap gap-4 mt-4"
                    >
                        <Button asChild>
                            <Link href="/portfolio">View Projects</Link>
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() => onOpenModal?.('maison')}
                        >
                            Maison Blanche Insight
                        </Button>
                    </motion.div>
                </div>

                {/* Visual Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="relative hidden lg:block"
                >
                    <div
                        className="relative rounded-[36px] overflow-hidden min-h-[560px] shadow-[0_30px_80px_rgba(0,0,0,0.45)] bg-cover bg-center"
                        style={{ backgroundImage: 'url(https://i.ibb.co/6078Nj8f/5.jpg)' }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-black/75" />
                    </div>

                    {/* Overlay image removed as per request */}
                </motion.div>
            </div>
        </section>
    );
}
