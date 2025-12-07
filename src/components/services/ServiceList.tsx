'use client';

import { motion } from 'framer-motion';

const services = [
    {
        id: 'architecture',
        number: '01',
        title: 'Architecture',
        description: 'Complete architectural solutions from concept to construction, blending innovative design with technical excellence.',
        image: 'https://i.ibb.co/HL00Pf9k/Bedroom-04-Dressing-4.jpg'
    },
    {
        id: 'interior',
        number: '02',
        title: 'Interior Design',
        description: 'Curated interior environments that reflect your identity while enhancing functionality and aesthetic appeal.',
        image: 'https://i.ibb.co/WvQKgKMg/Prayer-Room.jpg'
    },
    {
        id: 'consultation',
        number: '03',
        title: 'Consultation',
        description: 'Strategic guidance and expert advice to navigate complex architectural decisions and optimize project outcomes.',
        image: 'https://i.ibb.co/dsT9rLFz/7.jpg'
    },
    {
        id: 'management',
        number: '04',
        title: 'Project Management',
        description: 'Comprehensive oversight ensuring quality, timeline, and budget adherence throughout the construction process.',
        image: 'https://i.ibb.co/CKRsCZK0/Hallway-5.jpg'
    }
];

export function ServiceList() {
    return (
        <section className="py-20 container mx-auto px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-light mb-6"
                >
                    Our Service Pillars
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 0.8, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-lg font-light text-white/70"
                >
                    Each service is carefully crafted to ensure seamless integration, creative innovation, and exceptional quality throughout your project journey.
                </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, index) => (
                    <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative min-h-[400px] rounded-[28px] overflow-hidden p-8 flex flex-col justify-end border border-white/10 hover:border-white/20 transition-colors"
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                            style={{ backgroundImage: `url(${service.image})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

                        <div className="relative z-10">
                            <span className="text-xs font-mono text-white/60 mb-4 block">{service.number}</span>
                            <h3 className="text-xl font-light mb-3">{service.title}</h3>
                            <p className="text-sm text-white/70 leading-relaxed">{service.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
