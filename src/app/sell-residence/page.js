import { Suspense } from 'react';

import LoaderSpinner from '@/components/loaderSpinner';
import SectionContacts from '@/components/sectionContacts';

import Hero from './hero';
import SectionA from './sectionA';
import SectionB from './sectionB';
import SectionC from './sectionC';
import SectionD from './sectionD';
import SectionE from './sectionE';

const phone = process.env.NEXT_PUBLIC_PHONE

export const metadata = {
  title: 'ᐉ Продать недвижимость выгодно и быстро | Altera',
  description: `🏡 Продайте квартиру и другую недвижимость с риэлтором компании «Альтера» в Москве, Сочи, Казани, Санкт-Петербурге и других крупных городах.\n⭐️ Выгодные цены и быстрые сделки.\n☎️ Телефон: ${phone}.`,
};

function SellResidencePage() {
  return <Suspense fallback={<LoaderSpinner />}>
    <Hero />
    <SectionA />
    <SectionB />
    <SectionC />
    <SectionD />
    <SectionE />
    <SectionContacts />
  </Suspense>
}

export default SellResidencePage;
