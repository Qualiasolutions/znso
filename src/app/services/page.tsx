import { ServicesHero } from '@/components/services/ServicesHero';
import { ServiceList } from '@/components/services/ServiceList';
import { ServiceDetails } from '@/components/services/ServiceDetails';
import { ServicesProcess } from '@/components/services/ServicesProcess';
import { ServicesCTA } from '@/components/services/ServicesCTA';

export default function Services() {
    return (
        <div className="flex flex-col gap-0">
            <ServicesHero />
            <ServiceList />
            <ServiceDetails />
            <ServicesProcess />
            <ServicesCTA />
        </div>
    );
}
