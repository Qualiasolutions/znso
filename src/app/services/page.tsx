'use client';

import { ServicesHero } from '@/components/services/ServicesHero';
import { ServiceList } from '@/components/services/ServiceList';
import { ServiceDetails } from '@/components/services/ServiceDetails';
import { ServicesProcess } from '@/components/services/ServicesProcess';
import { ServicesCTA } from '@/components/services/ServicesCTA';
import { FadeIn } from '@/components/ui/FadeIn';

export default function Services() {
    return (
        <div className="flex flex-col gap-0">
            <ServicesHero />
            <FadeIn direction="up" blur>
                <ServiceList />
            </FadeIn>
            <FadeIn direction="up" delay={0.05}>
                <ServiceDetails />
            </FadeIn>
            <FadeIn direction="up" blur>
                <ServicesProcess />
            </FadeIn>
            <FadeIn direction="up">
                <ServicesCTA />
            </FadeIn>
        </div>
    );
}
