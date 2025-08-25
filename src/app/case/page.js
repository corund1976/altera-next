import { Suspense } from 'react';

import LoaderSpinner from '@/components/loaderSpinner';

import LinkBack from './linkBack';
import Cases from './cases';
import SectionLid from './sectionLid';
import SectionForm from './sectionForm';

const phone = process.env.NEXT_PUBLIC_PHONE;

export const metadata = {
  title: 'ᐉ Агентство недвижимости: риэлторское агентство | Altera',
  description: `🏡 Агентство недвижимости «Альтера» с выгодными условиями.\n⭐️ Услуги риэлтерского агентства: продажа, покупка и аренда недвижимости в Москве, Сочи, Казани, Санкт-Петербурге и других крупных городах.\n☎️ Телефон: ${phone}.`,
};

function CasePage() {
  return <Suspense fallback={<LoaderSpinner />}>
    <LinkBack />
    <Cases />
    <SectionLid />
    <SectionForm />
  </Suspense>

}

export default CasePage;
