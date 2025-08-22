'use client';

import { useRef } from 'react';

import useOnScreen from '@/hooks/useOnScreen';

import Container from '@/components/container';

import TickerDevelopers from '@/components/tickerDevelopers';
import TickerBanks from '@/components/tickerBanks';
import TickerPartners from '@/components/tickerPartners';

import s from './sectionD.module.css';

function SectionD() {
  const sectionRef = useRef(null);

  const isOnScreen = useOnScreen(sectionRef);

  return (
    <section className={s.section} ref={sectionRef}>
      <Container>
        <p className={s.marker}>Партнеры</p>

        <p className={s.title}>
          За <span>/ 10 лет /</span> работы агентства нашей гордостью стали не
          только наши клиенты, но и надежные партнеры
        </p>
        <p className={s.text}>
          крупнейшие застройщики города, федеральные девелоперы и крупные банки
        </p>

        <ul className={s.stats}>
          <li>
            <div>{isOnScreen && <TickerDevelopers />}+</div>
            <p>застройщиков</p>
          </li>
          <li>
            <div>{isOnScreen && <TickerBanks />}+</div>
            <p>банков</p>
          </li>
        </ul>

        {isOnScreen && <TickerPartners />}
      </Container>
    </section>
  );
}

export default SectionD;
