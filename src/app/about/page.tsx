import { Vision } from '@/components/about/Vision';
import { MissionValues } from '@/components/about/MissionValues';
import { Team } from '@/components/about/Team';
import { DesignProcess } from '@/components/about/DesignProcess';

export default function About() {
    return (
        <div className="flex flex-col gap-0">
            <Vision />
            <MissionValues />
            <Team />
            <DesignProcess />
        </div>
    );
}
