'use client';

import { useRef } from 'react';

import useOnScreen from '@/hooks/useOnScreen';

import Container from '@/components/container';

import list from './list.json';
import s from './sectionE.module.css';

function SectionE() {
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);

  const isOnscreen = useOnScreen(sectionRef);

  const goPrev = () => {
    const { scrollWidth, scrollLeft } = sliderRef.current;

    sliderRef.current.scrollTo({
      left: scrollLeft - scrollWidth / 13,
      behavior: 'smooth',
    });
  };

  const goNext = () => {
    const { scrollWidth, scrollLeft } = sliderRef.current;

    sliderRef.current.scrollTo({
      left: scrollWidth / 13 + scrollLeft,
      behavior: 'smooth',
    });
  };

  return (
    <section className={s.section} ref={sectionRef}>
      <Container>
        <p className={s.title}>
          как проходит подбор <span>/ вторички /</span>
        </p>

        <div className={s.list_wrapper}>
          <ul className={isOnscreen ? s.list_animated : s.list} ref={sliderRef}>
            {list.map(({ id, text }) => (
              <li key={id}>
                <p className={s.id}>{id}</p>
                <p className={s.text}>{text}</p>
              </li>
            ))}
          </ul>
        </div>

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

export default SectionE;
