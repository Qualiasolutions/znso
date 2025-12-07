'use client';

import { useState } from 'react';
import { Hero } from '@/components/home/Hero';
import { Metrics } from '@/components/home/Metrics';
import { Services } from '@/components/home/Services';
import { CaseStudy } from '@/components/home/CaseStudy';
import { Clients } from '@/components/home/Clients';
import { Contact } from '@/components/home/Contact';
import { Modal } from '@/components/ui/Modal';
import { ParallaxSection } from '@/components/ui/ParallaxSection';

const modalContent: Record<string, { title: string; content: React.ReactNode }> = {
    maison: {
        title: 'Maison Blanche Insight',
        content: (
            <>
                <p>The villa's circulation is anchored by a sculpted atrium, enabling layered privacy while maintaining visual continuity between levels.</p>
                <p>Adaptive solar fins modulate daylight, while the evening lighting script transitions through hospitality, gallery, and residence scenes.</p>
            </>
        )
    },
    interior: {
        title: 'Interior Design Blueprint',
        content: (
            <>
                <p>We choreograph spatial gradients, tactile finishes, and bespoke furniture pieces that articulate each client's identity.</p>
                <p>Digital twins capture lighting, acoustic, and furnishings mockups for stakeholder alignment.</p>
            </>
        )
    },
    consultation: {
        title: 'Consultation Workshop Flow',
        content: (
            <>
                <p>We initiate with feasibility and ROI modeling, followed by cultural narrative studies and stakeholder alignment.</p>
                <p>Decision dashboards capture milestones, risk forecasts, and cost engineering scenarios.</p>
            </>
        )
    },
    management: {
        title: 'Management & Supervision Playbook',
        content: (
            <>
                <p>On-site leadership integrates digital snagging, quality benchmarks, and weekly executive dashboards.</p>
                <p>We coordinate procurement, logistics, and specialty artisans to safeguard the design intent.</p>
            </>
        )
    },
    architecture: {
        title: 'Architectural Project Matrix',
        content: (
            <>
                <p>We manage concept narratives, permit packages, BIM coordination, and fabrication drawings under a unified vision.</p>
                <p>Environmental simulations and cost engineering ensure feasibility without compromising expression.</p>
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

            <ParallaxSection velocity={30} className="z-10 bg-[#fdfdfd]">
                <Metrics />
            </ParallaxSection>

            <ParallaxSection velocity={-20} className="z-20 bg-[#fdfdfd]">
                <Services onOpenModal={handleOpenModal} />
            </ParallaxSection>

            <ParallaxSection velocity={40} className="z-10 bg-[#fdfdfd]">
                <CaseStudy />
            </ParallaxSection>

            <ParallaxSection velocity={10} className="z-10 bg-[#fdfdfd]">
                <Clients />
            </ParallaxSection>

            <Contact />

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
