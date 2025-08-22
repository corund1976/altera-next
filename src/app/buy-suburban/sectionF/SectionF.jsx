'use client';

import { useRef } from 'react';

import useOnScreen from '@/hooks/useOnScreen';

import Container from '@/components/container';

import listMob from './listMob.json';
import listDsk from './listDsk.json';
import s from './sectionF.module.css';

function SectionF() {
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);

  const isOnscreen = useOnScreen(sectionRef);

  const goPrev = () => {
    const { scrollWidth, scrollLeft } = sliderRef.current;

    sliderRef.current.scrollTo({
      left: scrollLeft - scrollWidth / 6,
      behavior: 'smooth',
    });
  };

  const goNext = () => {
    const { scrollWidth, scrollLeft } = sliderRef.current;

    sliderRef.current.scrollTo({
      left: scrollWidth / 6 + scrollLeft,
      behavior: 'smooth',
    });
  };

  return (
    <section className={s.section} ref={sectionRef}>
      <Container>
        <p className={s.title}>
          как проходит
          <br />
          подбор
          <br />
          <span>/ загородного дома /</span>
        </p>
        <p className={s.text}>
          Подбор загородной недвижимости значительно отличается от выбора
          квартиры. Разобраться в процессе проще и быстрее с профессиональными
          агентами:
        </p>

        <div className={s.list_wrapper}>
          <ul className={s.list_mob} ref={sliderRef}>
            {listMob.map(({ id, desc }) => (
              <li key={id}>
                <p className={s.id}>0{id}</p>
                <p className={s.desc}>{desc}</p>
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

        <ul className={isOnscreen ? s.list_animated : s.list_dsk}>
          {listDsk.map(({ id, desc, desc_1, desc_2, desc_3, desc_4 }) => (
            <li key={id}>
              <p className={s.id}>0{id}</p>
              <div className={s.desc}>
                <p>{desc}</p>
                {desc_1 && <p className={s.desc_1}>{desc_1}</p>}
                {desc_2 && <p className={s.desc}>{desc_2}</p>}
                {desc_3 && <p className={s.desc_1}>{desc_3}</p>}
                {desc_4 && <p className={s.desc}>{desc_4}</p>}
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default SectionF;
