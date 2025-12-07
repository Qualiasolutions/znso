'use client';

import { motion } from 'framer-motion';

const metrics = [
    { value: '10+', label: 'Years Experience' },
    { value: '70+', label: 'Projects Completed' },
    { value: '100%', label: 'Client Satisfaction' },
];

export function Metrics() {
    return (
        <section className="py-5 relative bg-cover bg-center" style={{ backgroundImage: 'url(https://i.ibb.co/DDTBq9XT/2.jpg)' }}>
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/90" />
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-[28px] p-8 md:p-10 backdrop-blur-sm">
                    {metrics.map((metric, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col gap-2 text-center md:text-left"
                        >
                            <strong className="text-3xl md:text-4xl font-extralight text-white">{metric.value}</strong>
                            <span className="text-[0.65rem] md:text-xs uppercase tracking-[0.3em] text-white/60">{metric.label}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
