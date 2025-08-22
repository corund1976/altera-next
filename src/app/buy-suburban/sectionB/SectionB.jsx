'use client';

import { useRef } from 'react';
import Image from 'next/image';

import useOnScreen from '@/hooks/useOnScreen';

import picture from '@/images/suburban/sectionB/title-picture.webp';

import Container from '@/components/container';

import list from './list.json';
import s from './sectionB.module.css';

function SectionB() {
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
        <h2 className={s.title}>
          почему
          <br />
          частный дом —
          <div className={s.title_picture}>
            <Image src={picture} alt="picture" />
          </div>
          мечта многих
        </h2>

        <ul className={isOnscreen ? s.list_animated : s.list} ref={sliderRef}>
          {list.map(({ id, name, text }) => (
            <li key={id}>
              <p className={s.name}>/ {name} /</p>
              <p className={s.text}>{text}</p>
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

export default SectionB;
