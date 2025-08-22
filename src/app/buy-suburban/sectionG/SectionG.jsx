'use client';

import { useRef } from 'react';

import useOnScreen from '@/hooks/useOnScreen';

import Container from '@/components/container';

import TickerDevelopers from '@/components/tickerDevelopers';
import TickerPartners from '@/components/tickerPartners';

import s from './sectionG.module.css';

function SectionG() {
  const sectionRef = useRef(null);

  const isOnScreen = useOnScreen(sectionRef);

  return (
    <section className={s.section} ref={sectionRef}>
      <Container>
        <div className={s.block}>
          <p className={s.marker}>Партнеры</p>

          <div className={s.title}>
            <p>
              Дом мечты
              <br />
              начинается
            </p>
            <p>
              / с надежных
              <br />
              партнеров /
            </p>
          </div>
          <p className={s.text}>
            Мы доверяем строительство только проверенным профессионалам.
          </p>

          <div className={s.stats}>
            <div>{isOnScreen && <TickerDevelopers />}+</div>
            <p>застройщиков</p>
          </div>

          {isOnScreen && <TickerPartners />}
        </div>
      </Container>
    </section>
  );
}

export default SectionG;
