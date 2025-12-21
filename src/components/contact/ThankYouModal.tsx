'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

export function ThankYouModal() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (searchParams.get('submitted') === 'true') {
            setIsOpen(true);
            // Redirect to homepage after 4 seconds
            const timer = setTimeout(() => {
                router.push('/');
            }, 4000);
            return () => clearTimeout(timer);
        }
    }, [searchParams, router]);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100] flex items-center justify-center p-4"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="bg-[#0c0c0c]/95 border border-white/10 rounded-[32px] p-12 max-w-lg w-full text-center shadow-2xl"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                        className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-8"
                    >
                        <Check className="w-10 h-10 text-white" strokeWidth={1.5} />
                    </motion.div>

                    <h2 className="text-3xl font-light mb-4">Thank You</h2>
                    <p className="text-white/60 font-light leading-relaxed mb-6">
                        Your consultation request has been submitted successfully. Our team will review your project details and get back to you shortly.
                    </p>

                    <div className="flex items-center justify-center gap-2 text-sm text-white/40">
                        <motion.div
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-1.5 h-1.5 rounded-full bg-white/60"
                        />
                        <span>Redirecting to homepage...</span>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
