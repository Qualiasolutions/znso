'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
];

const services = [
    'Architectural Design',
    'Interior Design',
    'Project Management',
    'Consultation',
];

export function Footer() {
    return (
        <footer className="bg-[#0a0a0a] text-white">
            {/* Main Footer Content */}
            <div className="container mx-auto px-6 py-16 lg:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="inline-block mb-6">
                            <span className="text-2xl font-light tracking-[0.2em]">ZNSO</span>
                        </Link>
                        <p className="text-sm leading-relaxed text-white/50 max-w-xs mb-6">
                            Crafting timeless spaces where bold vision meets meticulous craftsmanship. Architecture is the silent poetry of space.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Follow ZNSO Architects on Instagram"
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a962]/50"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Follow ZNSO Architects on LinkedIn"
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a962]/50"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Navigation Column */}
                    <div>
                        <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-white/40 mb-6">Navigation</h4>
                        <ul className="flex flex-col gap-3">
                            {navLinks.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-sm text-white/70 hover:text-white transition-colors inline-flex items-center gap-1 group"
                                    >
                                        {item.name}
                                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-white/40 mb-6">Services</h4>
                        <ul className="flex flex-col gap-3">
                            {services.map((service) => (
                                <li key={service}>
                                    <span className="text-sm text-white/70">{service}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-white/40 mb-6">Contact</h4>
                        <ul className="flex flex-col gap-4">
                            <li>
                                <a
                                    href="mailto:Info@znsoarchitects.com"
                                    className="flex items-start gap-3 text-sm text-white/70 hover:text-white transition-colors"
                                >
                                    <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                    <span>Info@znsoarchitects.com</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:+96595559313"
                                    className="flex items-start gap-3 text-sm text-white/70 hover:text-white transition-colors"
                                >
                                    <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                    <span>+965 9555 9313</span>
                                </a>
                            </li>
                            <li>
                                <div className="flex items-start gap-3 text-sm text-white/70">
                                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                    <span>Building 18A, Salhiya Street,<br />Jibla, Kuwait City, Kuwait</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="container mx-auto px-6 py-6">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-xs text-white/40 text-center sm:text-left">
                            &copy; {new Date().getFullYear()} ZNSO Architects. All Rights Reserved.
                        </p>
                        <p className="text-xs text-white/40">
                            Designed & Developed by{' '}
                            <a
                                href="https://qualiasolutions.net"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/60 hover:text-white transition-colors"
                            >
                                Qualia Solutions
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
