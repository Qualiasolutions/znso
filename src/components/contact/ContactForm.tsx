'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export function ContactForm() {
    return (
        <section className="py-20 container mx-auto px-6">
            <div className="grid lg:grid-cols-5 gap-12 items-start">
                {/* Form Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="lg:col-span-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-[32px] p-8 md:p-12"
                >
                    <div className="mb-10">
                        <h2 className="text-3xl font-light mb-4">Request a Consultation</h2>
                        <p className="text-white/60 font-light">Tell us about your project and we'll connect you with the right architectural expertise.</p>
                    </div>

                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-white/60">First Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/30 transition-colors"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-white/60">Last Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/30 transition-colors"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-white/60">Email Address</label>
                                <input
                                    type="email"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/30 transition-colors"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-white/60">Phone Number</label>
                                <input
                                    type="tel"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/30 transition-colors"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-white/60">Project Location</label>
                            <input
                                type="text"
                                placeholder="City, Country"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/30 transition-colors placeholder:text-white/20"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-white/60">Project Type</label>
                            <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/30 transition-colors text-white/80 [&>option]:bg-black">
                                <option value="">Select project type</option>
                                <option value="residential">Residential</option>
                                <option value="commercial">Commercial</option>
                                <option value="hospitality">Hospitality</option>
                                <option value="cultural">Cultural</option>
                                <option value="interior">Interior Design</option>
                                <option value="consultation">Consultation Only</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-white/60">Project Details</label>
                            <textarea
                                rows={4}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/30 transition-colors resize-none"
                            />
                        </div>

                        <Button className="w-full md:w-auto mt-4">Submit Request</Button>
                    </form>
                </motion.div>

                {/* Info & Consultation Card */}
                <div className="lg:col-span-2 space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[32px] p-8 md:p-10"
                    >
                        <h3 className="text-2xl font-light mb-6">Contact Information</h3>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                    <svg className="w-5 h-5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                </div>
                                <div>
                                    <div className="text-xs uppercase tracking-widest text-white/40 mb-1">Email</div>
                                    <a href="mailto:Info@znsoarchitects.com" className="text-lg font-light hover:text-white/80 transition-colors">Info@znsoarchitects.com</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                    <svg className="w-5 h-5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                </div>
                                <div>
                                    <div className="text-xs uppercase tracking-widest text-white/40 mb-1">Phone</div>
                                    <div className="flex flex-col">
                                        <a href="tel:+96595559313" className="text-lg font-light hover:text-white/80 transition-colors">+965 9555 9313</a>
                                        <a href="tel:+96595556597" className="text-lg font-light hover:text-white/80 transition-colors">+965 9555 6597</a>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                    <svg className="w-5 h-5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                </div>
                                <div>
                                    <div className="text-xs uppercase tracking-widest text-white/40 mb-1">Office</div>
                                    <p className="text-lg font-light leading-relaxed">
                                        Building 18A, Salhiya Street, Jibla<br />
                                        Kuwait City, Kuwait
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="bg-gradient-to-br from-white/10 to-black/40 backdrop-blur-md border border-white/10 rounded-[32px] p-8 md:p-10"
                    >
                        <h3 className="text-2xl font-light mb-4">What to Expect</h3>
                        <p className="text-white/70 font-light mb-6 leading-relaxed">
                            Our initial consultation is a collaborative session to understand your vision, requirements, and site potential.
                        </p>
                        <ul className="space-y-3">
                            {['Project Feasibility Assessment', 'Design Vision Discussion', 'Budget & Timeline Planning', 'Process Overview'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-white/80 font-light">
                                    <span className="text-white/40">→</span> {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
