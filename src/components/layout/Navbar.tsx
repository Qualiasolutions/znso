'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
];

export function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="fixed top-0 left-0 right-0 z-50"
            >
                <div className="mx-auto px-6 lg:px-12 py-5">
                    <div className="flex items-center justify-between">
                        {/* Logo - Text only */}
                        <Link href="/" className="relative z-50">
                            <span className="text-lg font-light tracking-[0.3em] text-white">ZNSO</span>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-10">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="group relative"
                                >
                                    <span className={`text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 ${
                                        pathname === item.href
                                            ? 'text-white'
                                            : 'text-white/50 group-hover:text-white'
                                    }`}>
                                        {item.name}
                                    </span>
                                    {pathname === item.href && (
                                        <motion.span
                                            layoutId="navbar-indicator"
                                            className="absolute -bottom-1 left-0 right-0 h-px bg-white"
                                            transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                </Link>
                            ))}
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center"
                            aria-label="Toggle menu"
                        >
                            <div className="w-6 flex flex-col gap-1.5">
                                <motion.span
                                    animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full h-[1.5px] bg-white origin-center"
                                />
                                <motion.span
                                    animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="w-full h-[1.5px] bg-white"
                                />
                                <motion.span
                                    animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full h-[1.5px] bg-white origin-center"
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 md:hidden"
                    >
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/95 backdrop-blur-xl"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Menu Content */}
                        <div className="relative h-full flex flex-col items-center justify-center">
                            <nav className="flex flex-col items-center gap-8">
                                {navItems.map((item, i) => (
                                    <motion.div
                                        key={item.href}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ delay: i * 0.1, duration: 0.4 }}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={() => setIsOpen(false)}
                                            className={`text-2xl font-light tracking-[0.15em] uppercase transition-colors ${
                                                pathname === item.href
                                                    ? 'text-white'
                                                    : 'text-white/40 hover:text-white'
                                            }`}
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>

                            {/* Contact Info */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="absolute bottom-16 flex flex-col items-center gap-3"
                            >
                                <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">Get in touch</span>
                                <a
                                    href="mailto:info@znso.com"
                                    className="text-sm text-white/60 hover:text-white transition-colors"
                                >
                                    info@znso.com
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
