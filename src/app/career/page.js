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

const phone = process.env.NEXT_PUBLIC_PHONE

export const metadata = {
  title: 'ᐉ Работа риэлтором: вакансии риэлтора в агентстве недвижимости в Казани | Altera',
  description: `🏡 Трудоустройтесь или освойте профессию риэлтора в агентстве недвижимости «Альтера» в Казани.\n⭐️ Присоединяйтесь к нашей команде.\n☎️ Телефон: ${phone}.`,
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
    <SectionG />
  </Suspense>
}

export default page;
