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
  title: 'ᐉ Купить коммерческую недвижимость выгодно - помощь с подбором | Altera',
  description: `🏡 Купите коммерческую недвижимость с помощью агента компании «Альтера».\n⭐️ Выгодные цены и быстрый поиск недвижимости в Москве, Сочи, Казани, Санкт-Петербурге и других крупных городах.\n☎️ Телефон: ${phone}.`,
};

function page() {
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

export default page;
