'use client';

import { useRef } from 'react';
import Image from 'next/image';

import useOnScreen from '@/hooks/useOnScreen';

import picture from '@/images/career/sectionA/title-picture.webp';

import Container from '@/components/container';

import list from './list.json';
import s from './sectionA.module.css';

function SectionA() {
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);

  const isOnscreen = useOnScreen(sectionRef);

  const goPrev = () => {
    const { scrollWidth, scrollLeft } = sliderRef.current;

    sliderRef.current.scrollTo({
      left: scrollLeft - scrollWidth / 4,
      behavior: 'smooth',
    });
  };

  const goNext = () => {
    const { scrollWidth, scrollLeft } = sliderRef.current;

    sliderRef.current.scrollTo({
      left: scrollWidth / 4 + scrollLeft,
      behavior: 'smooth',
    });
  };

  return (
    <section className={s.section} ref={sectionRef}>
      <Container>
        <h2 className={s.title}>
          Профессия в сфере недвижимости —
          <div className={s.title_picture}>
            <Image src={picture} alt="picture" />
          </div>
          <span>/ключ к жизни/</span> вашей мечты
        </h2>

        <p className={s.subtitle}>
          Станьте востребованным агентом, который наслаждается процессом и
          результатом своей работы, становясь успешнее с каждой новой сделкой
        </p>

        <ul className={isOnscreen ? s.list_animated : s.list} ref={sliderRef}>
          {list.map(({ id, text }) => (
            <li key={id}>
              <p className={s.id}>/ 0{id}</p>
              <p className={s.desc}>{text}</p>
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

export default SectionA;
