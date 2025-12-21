import { Suspense } from 'react';
import { ContactHero } from '@/components/contact/ContactHero';
import { ContactForm } from '@/components/contact/ContactForm';
import { ContactMap } from '@/components/contact/ContactMap';
import { ThankYouModal } from '@/components/contact/ThankYouModal';

export default function Contact() {
    return (
        <>
            <Suspense fallback={null}>
                <ThankYouModal />
            </Suspense>
            <ContactHero />
            <ContactForm />
            <ContactMap />
        </>
    );
}
