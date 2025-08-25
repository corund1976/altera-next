import { Suspense } from 'react';

import LoaderSpinner from '@/components/loaderSpinner';

import Hero from './hero';
import SectionA from './sectionA';
import SectionB from './sectionB';
import SectionC from './sectionC';
import SectionD from './sectionD';
import SectionE from './sectionE';
import SectionF from './sectionF';
import SectionG from './sectionG';
import SectionH from './sectionH';

const phone = process.env.NEXT_PUBLIC_PHONE

export const metadata = {
  title: 'ᐉ Купить загородную недвижимость выгодно - подбор коттеджей и домов | Altera',
  description: `🏡 Купите дом и коттедж за городом с помощью агента недвижимости «Альтера».\n⭐️ Выгодные цены с льготной ипотекой и быстрый подбор в Москве, Сочи, Казани, Санкт-Петербурге и других крупных городах.\n☎️ Телефон: ${phone}.`,
};

function BuySuburbanPage() {
  return <Suspense fallback={<LoaderSpinner />}>
    <Hero />
    <SectionA />
    <SectionB />
    <SectionC />
    <SectionD />
    <SectionE />
    <SectionF />
    <SectionG />
    <SectionH />
  </Suspense>
}

export default BuySuburbanPage;
