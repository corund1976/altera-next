import { Suspense } from 'react';

import LoaderSpinner from '@/components/loaderSpinner';

import Hero from './hero';
import SectionA from './sectionA';
import SectionB from './sectionB';
import SectionC from './sectionC';
import SectionD from './sectionD';
import SectionE from './sectionE';
import SectionF from './sectionF';

const phone = process.env.NEXT_PUBLIC_PHONE

export const metadata = {
  title: 'ᐉ Купить квартиру на вторичке в Казани: недорого и быстро | Altera',
  description: `🏡 Купите квартиру на вторичном рынке с риэлтором агентства недвижимости «Альтера».\n⭐️ Выгодные цены и быстрый поиск квартиры в Москве, Сочи, Казани, Санкт-Петербурге и других крупных городах.\n☎️ Телефон: ${phone}.`,
};

function BuySecondaryage() {
  return <Suspense fallback={<LoaderSpinner />}>
    <Hero />
    <SectionA />
    <SectionB />
    <SectionC />
    <SectionD />
    <SectionE />
    <SectionF />
  </Suspense>
}

export default BuySecondaryage;
