'use client';

import { useRef } from 'react';

import useOnScreen from '@/hooks/useOnScreen';

import Container from '@/components/container';

import list from './list.json';
import s from './sectionC.module.css';

function SectionC() {
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);

  const isOnscreen = useOnScreen(sectionRef);

  const goPrev = () => {
    const { scrollWidth, scrollLeft } = sliderRef.current;

    sliderRef.current.scrollTo({
      left: scrollLeft - scrollWidth / 8,
      behavior: 'smooth',
    });
  };

  const goNext = () => {
    const { scrollWidth, scrollLeft } = sliderRef.current;

    sliderRef.current.scrollTo({
      left: scrollWidth / 8 + scrollLeft,
      behavior: 'smooth',
    });
  };

  return (
    <section className={s.section} ref={sectionRef}>
      <Container>
        <p className={s.title}>
          в чем <span>преимущество</span>
          <br />
          подбора квартиры
          <br />с экспертом <span>«Альтеры»</span>?
        </p>
        <p className={s.subtitile}>
          Процесс подбора квартиры
          <br />в новостройке с агентом проходит в несколько этапов, а стратегия
          работы и в чем преимущества работы с агентами «Альтера»?
        </p>
        <p className={s.label}>Разберемся подробнее:</p>

        <ul className={isOnscreen ? s.list_animated : s.list} ref={sliderRef}>
          {list.map(({ id, text_bold, text }) => (
            <li key={id}>
              <p className={s.id}>/ 0{id}</p>
              <p className={s.desc}>
                <span>{text_bold}</span>
                {text}
              </p>
            </li>
          ))}
        </ul>

        <div className={s.nav_btns}>
          <button
            type="button"
            onClick={goPrev}
            className={s.btn_prev}
            title="prev"
          />
          <button
            type="button"
            onClick={goNext}
            className={s.btn_next}
            title="next"
          />
        </div>
      </Container>
    </section>
  );
}

export default SectionC;
