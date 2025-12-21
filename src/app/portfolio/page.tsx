'use client';

import { useState } from 'react';
import { PortfolioHero } from '@/components/portfolio/PortfolioHero';
import { PortfolioGrid } from '@/components/portfolio/PortfolioGrid';
import { ProjectModal } from '@/components/portfolio/ProjectModal';
import { FadeIn } from '@/components/ui/FadeIn';
import type { Project } from '@/lib/projects';

export default function Portfolio() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <>
            <PortfolioHero />
            <FadeIn direction="up" blur>
                <PortfolioGrid onOpenProject={setSelectedProject} />
            </FadeIn>
            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </>
    );
}
