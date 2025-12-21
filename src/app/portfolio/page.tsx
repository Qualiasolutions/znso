'use client';

import { useState } from 'react';
import { PortfolioHero } from '@/components/portfolio/PortfolioHero';
import { PortfolioGrid } from '@/components/portfolio/PortfolioGrid';
import { ProjectModal } from '@/components/portfolio/ProjectModal';
import type { Project } from '@/lib/projects';

export default function Portfolio() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <>
            <PortfolioHero />
            <PortfolioGrid onOpenProject={setSelectedProject} />
            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </>
    );
}
