'use client';

import { useRef } from 'react';
import Image from 'next/image';

import useOnScreen from '@/hooks/useOnScreen';

import textPicture from '@/images/main/sectionM/text-picture.webp';

import Container from '@/components/container';

import s from './sectionM.module.css';

function SectionM() {
  const sectionRef = useRef(null);

  const isOnScreen = useOnScreen(sectionRef);

  return (
    <section className={s.section} ref={sectionRef}>
      <Container>
        <p className={s.marker}>Экспертиза</p>

        <p className={s.title}>
          Альтера — это <span>профессиональный взгляд</span> на рынок
          недвижимости
        </p>

        <ul className={isOnScreen ? s.list_animated : s.list}>
          <li>
            <span>/</span> всегда в курсе
            <br />
            ситуации на рынке
          </li>
          <li>
            <span>/</span> работаем только
            <br />с надежными партнерами
          </li>
          <li>
            <span>/</span> объективный взгляд
            <br />
            на недвижимость
          </li>
          <li>
            <span>/</span> независимы
            <br />
            от застройщиков
          </li>
        </ul>

        <div className={s.text}>
          Агенты «Альтера»
          <br />
          <span>/ помогут Вам /</span>
          <br />
          взглянуть
          <br />
          <div className={s.text_picture}>
            <Image src={textPicture} alt="picture" />
          </div>
          на мир недвижимости
          <br />
          по-новому:
          <br />
          <span>шире, интереснее и понятнее</span>
        </div>
      </Container>
    </section>
  );
}

export default SectionM;
