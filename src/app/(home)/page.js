import { Suspense } from 'react';

import SectionContacts from '@/components/sectionContacts';
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
import SectionI from './sectionI';
import SectionJ from './sectionJ';
import SectionK from './sectionK';
import SectionL from './sectionL';
import SectionM from './sectionM';
import SectionN from './sectionN';

const phone = process.env.NEXT_PUBLIC_PHONE

export const metadata = {
  title: 'ᐉ Агентство недвижимости: риэлторское агентство | Altera',
  description: `🏡 Агентство недвижимости «Альтера» с выгодными условиями.\n⭐️ Услуги риэлтерского агентства: продажа, покупка и аренда недвижимости в Москве, Сочи, Казани, Санкт-Петербурге и других крупных городах.\n☎️ Телефон: ${phone}.`,
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
    <SectionH />
    <SectionI />
    <SectionJ />
    <SectionK />
    <SectionL />
    <SectionM />
    <SectionN />
    <SectionContacts />
  </Suspense>
}

export default page;
