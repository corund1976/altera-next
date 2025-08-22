import { Suspense } from 'react';

import LoaderSpinner from '@/components/loaderSpinner';
import SectionContacts from '@/components/sectionContacts';

import Hero from './hero';
import SectionA from './sectionA';
import SectionB from './sectionB';
import SectionC from './sectionC';
import SectionD from './sectionD';

const phone = process.env.NEXT_PUBLIC_PHONE

export const metadata = {
  title: 'ᐉ Сдача недвижимости в аренду | Агентство недвижимости Altera',
  description: `🏡 Сдайте свою недвижимость в аренду с помощью риэлтора агентства «Альтера».\n⭐️ Профессиональная помощь в аренде квартир и объектов недвижимости в Москве, Сочи, Казани, Санкт-Петербурге и других городах. Быстро и выгодно.\n☎️ Телефон: ${phone}.`,
};

function page() {
  return <Suspense fallback={<LoaderSpinner />}>
    <Hero />
    <SectionA />
    <SectionB />
    <SectionC />
    <SectionD />
    <SectionContacts />
  </Suspense>
}

export default page;
