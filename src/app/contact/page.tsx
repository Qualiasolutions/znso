'use client';

import { Suspense } from 'react';
import { ContactHero } from '@/components/contact/ContactHero';
import { ContactForm } from '@/components/contact/ContactForm';
import { ThankYouModal } from '@/components/contact/ThankYouModal';
import { FadeIn } from '@/components/ui/FadeIn';

export default function Contact() {
    return (
        <>
            <Suspense fallback={null}>
                <ThankYouModal />
            </Suspense>
            <ContactHero />
            <FadeIn direction="up" blur>
                <ContactForm />
            </FadeIn>
        </>
    );
}
