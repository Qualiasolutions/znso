'use client';

import { Vision } from '@/components/about/Vision';
import { MissionValues } from '@/components/about/MissionValues';
import { Team } from '@/components/about/Team';
import { DesignProcess } from '@/components/about/DesignProcess';
import { FadeIn } from '@/components/ui/FadeIn';

export default function About() {
    return (
        <div className="flex flex-col gap-0">
            <Vision />
            <FadeIn direction="up" blur>
                <MissionValues />
            </FadeIn>
            <FadeIn direction="up" delay={0.05}>
                <Team />
            </FadeIn>
            <FadeIn direction="up" blur>
                <DesignProcess />
            </FadeIn>
        </div>
    );
}
