'use client';

import { useRef } from 'react';
import Image from 'next/image';

import useOnScreen from '@/hooks/useOnScreen';

import titlePicture from '@/images/secondary/sectionB/title-picture.webp';

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
        <h2 className={s.title}>
          <span>преимущества</span>
          <div className={s.title_picture}>
            <Image src={titlePicture} alt="picture" />
          </div>
          вторичной недвижимости
        </h2>

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

export default SectionB;
