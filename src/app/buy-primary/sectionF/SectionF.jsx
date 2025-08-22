'use client';

import { useRef } from 'react';

import useOnScreen from '@/hooks/useOnScreen';

import Bgi from '@/images/primary/sectionF/bgi.react.svg';

import Container from '@/components/container';

import listDsk from './listDsk.json';
import listMob from './listMob.json';
import s from './sectionF.module.css';

function SectionF() {
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);

  const isOnscreen = useOnScreen(sectionRef);

  // const shape = document.getElementById('shape');
  // const length = shape?.getTotalLength();
  // console.log('length', length);

  const goPrev = () => {
    const { scrollWidth, scrollLeft } = sliderRef.current;

    sliderRef.current.scrollTo({
      left: scrollLeft - scrollWidth / 9,
      behavior: 'smooth',
    });
  };

  const goNext = () => {
    const { scrollWidth, scrollLeft } = sliderRef.current;

    sliderRef.current.scrollTo({
      left: scrollWidth / 9 + scrollLeft,
      behavior: 'smooth',
    });
  };

  return (
    <section className={s.section} ref={sectionRef}>
      <Container>
        <p className={s.title}>
          всего <span>/ несколько шагов /</span> до квартиры вашей мечты
        </p>

        <ul className={s.list_mob} ref={sliderRef}>
          {listMob.map(({ id, text_bold, text }) => (
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

        <div className={s.relative_container}>
          <Bgi className={isOnscreen ? s.bgi_animated : s.bgi} />

          <ul className={s.list_dsk}>
            {listDsk.map(({ id, text_bold, text }) => (
              <li key={id}>
                <p className={s.id}>/ 0{id}</p>
                <p className={s.desc}>
                  <span>{text_bold}</span>
                  {text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default SectionF;
