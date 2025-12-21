'use client';

import { useState } from 'react';
import { Hero } from '@/components/home/Hero';
import { Services } from '@/components/home/Services';
import { FeaturedProjects } from '@/components/home/FeaturedProjects';
import { CaseStudy } from '@/components/home/CaseStudy';
import { Clients } from '@/components/home/Clients';
import { Contact } from '@/components/home/Contact';
import { Modal } from '@/components/ui/Modal';
import { FadeIn } from '@/components/ui/FadeIn';

const modalContent: Record<string, { title: string; content: React.ReactNode }> = {
    maison: {
        title: 'Maison Blanche Insight',
        content: (
            <>
                <p>The villa&apos;s circulation is anchored by a sculpted atrium, enabling layered privacy while maintaining visual continuity between levels.</p>
                <p className="mt-4">Adaptive solar fins modulate daylight, while the evening lighting script transitions through hospitality, gallery, and residence scenes.</p>
            </>
        )
    },
    interior: {
        title: 'Interior Design Blueprint',
        content: (
            <>
                <p>We choreograph spatial gradients, tactile finishes, and bespoke furniture pieces that articulate each client&apos;s identity.</p>
                <p className="mt-4">Digital twins capture lighting, acoustic, and furnishings mockups for stakeholder alignment.</p>
            </>
        )
    },
    consultation: {
        title: 'Consultation Workshop Flow',
        content: (
            <>
                <p>We initiate with feasibility and ROI modeling, followed by cultural narrative studies and stakeholder alignment.</p>
                <p className="mt-4">Decision dashboards capture milestones, risk forecasts, and cost engineering scenarios.</p>
            </>
        )
    },
    management: {
        title: 'Management & Supervision Playbook',
        content: (
            <>
                <p>On-site leadership integrates digital snagging, quality benchmarks, and weekly executive dashboards.</p>
                <p className="mt-4">We coordinate procurement, logistics, and specialty artisans to safeguard the design intent.</p>
            </>
        )
    },
    architecture: {
        title: 'Architectural Project Matrix',
        content: (
            <>
                <p>We manage concept narratives, permit packages, BIM coordination, and fabrication drawings under a unified vision.</p>
                <p className="mt-4">Environmental simulations and cost engineering ensure feasibility without compromising expression.</p>
            </>
        )
    }
};

export function HomeClient() {
    const [activeModal, setActiveModal] = useState<string | null>(null);

    const handleOpenModal = (modalId: string) => {
        setActiveModal(modalId);
    };

    const handleCloseModal = () => {
        setActiveModal(null);
    };

    const currentModal = activeModal ? modalContent[activeModal] : null;

    return (
        <div className="flex flex-col gap-0 overflow-hidden">
            <Hero onOpenModal={handleOpenModal} />

            <FadeIn direction="up" delay={0.1} blur>
                <Services onOpenModal={handleOpenModal} />
            </FadeIn>

            <FadeIn direction="up" delay={0.05}>
                <FeaturedProjects />
            </FadeIn>

            <FadeIn direction="up" blur>
                <CaseStudy />
            </FadeIn>

            <FadeIn direction="up" delay={0.1}>
                <Clients />
            </FadeIn>

            <FadeIn direction="up">
                <Contact />
            </FadeIn>

            <Modal
                isOpen={!!activeModal}
                onClose={handleCloseModal}
                title={currentModal?.title || ''}
            >
                {currentModal?.content}
            </Modal>
        </div>
    );
}
