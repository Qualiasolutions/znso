'use client';

import { motion } from 'framer-motion';

const details = [
    {
        id: 'architecture',
        title: 'Architectural Services',
        description: 'Our architectural practice combines visionary design thinking with rigorous technical execution. We create spaces that inspire, function flawlessly, and stand as testaments to craftsmanship and innovation.',
        features: [
            'Concept design and master planning',
            'Schematic design and design development',
            'Construction documentation and permit acquisition',
            'BIM coordination and clash detection',
            'Sustainable design and environmental analysis'
        ],
        image: 'https://i.ibb.co/HL00Pf9k/Bedroom-04-Dressing-4.jpg'
    },
    {
        id: 'interior',
        title: 'Interior Design Services',
        description: 'We craft interior environments that tell stories, evoke emotions, and enhance daily experiences. Our approach combines aesthetic sensibility with functional intelligence to create spaces that are both beautiful and purposeful.',
        features: [
            'Space planning and functional analysis',
            'Custom furniture design and procurement',
            'Material selection and finish coordination',
            'Lighting design and integration',
            'Art consultation and curation'
        ],
        image: 'https://i.ibb.co/WvQKgKMg/Prayer-Room.jpg'
    },
    // Add other sections as needed, keeping it concise for now
];

export function ServiceDetails() {
    return (
        <section className="py-20 space-y-32 container mx-auto px-6">
            {details.map((detail, index) => (
                <div key={detail.id} className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                    <motion.div
                        initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className={index % 2 === 1 ? 'lg:col-start-2' : ''}
                    >
                        <h2 className="text-3xl md:text-4xl font-light mb-6">{detail.title}</h2>
                        <p className="text-lg font-light text-white/70 mb-8 leading-relaxed">
                            {detail.description}
                        </p>
                        <ul className="space-y-4">
                            {detail.features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-4 text-white/80">
                                    <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className={`relative aspect-[4/3] rounded-[32px] overflow-hidden ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${detail.image})` }}
                        />
                        <div className="absolute inset-0 bg-black/20" />
                    </motion.div>
                </div>
            ))}
        </section>
    );
}
