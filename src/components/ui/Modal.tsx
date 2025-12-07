'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (typeof window === 'undefined') return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none"
                    >
                        <div className="bg-[#0c0c0c]/95 border border-white/10 rounded-[28px] p-10 max-w-2xl w-full shadow-2xl backdrop-blur-md pointer-events-auto relative overflow-hidden">
                            {/* Background Pattern */}
                            <div className="absolute inset-0 opacity-5 bg-[url('https://i.ibb.co/DDTBq9XT/2.jpg')] bg-cover bg-center -z-10" />

                            <div className="flex justify-between items-start mb-6">
                                <h3 className="text-2xl font-light tracking-wide">{title}</h3>
                                <button
                                    onClick={onClose}
                                    className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                                >
                                    <X className="w-5 h-5 opacity-70" />
                                </button>
                            </div>
                            <div className="space-y-4 text-white/80 leading-relaxed font-light">
                                {children}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>,
        document.body
    );
}
