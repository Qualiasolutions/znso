'use client';

import { useState } from 'react';
import { PortfolioHero } from '@/components/portfolio/PortfolioHero';
import { PortfolioGrid } from '@/components/portfolio/PortfolioGrid';
import { ProjectModal } from '@/components/portfolio/ProjectModal';

export default function Portfolio() {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <>
            <PortfolioHero />
            <PortfolioGrid onOpenProject={setSelectedProject} />
            <ProjectModal
                project={selectedProject}
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </>
    );
}
