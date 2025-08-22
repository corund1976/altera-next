'use client';

import { useRef } from 'react';
import Image from 'next/image';

import useOnScreen from '@/hooks/useOnScreen';
import useMatchMedia from '@/hooks/useMatchMedia';

import picture from '@/images/sell/sectionC/title-picture.webp';
import image from '@/images/sell/sectionC/image-dsk.webp';

import Container from '@/components/container';

import list from './list.json';
import s from './sectionC.module.css';

function SectionC() {
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);

  const isOnscreen = useOnScreen(sectionRef);

  const { isDesktop = true } = useMatchMedia();

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
          как проходит
          <br />
          <span>
            / продажа
            <br />
            <div className={s.title_picture}>
              <Image src={picture} alt="picture" />
            </div>
            с «АЛЬТЕРОЙ» /
          </span>
        </h2>

        <ul className={isOnscreen ? s.list_animated : s.list} ref={sliderRef}>
          {list.map(({ id, name, text }) => (
            <li key={id}>
              <p className={s.id}>/0{id}</p>
              <p className={s.name}>{name}</p>
              <p className={s.text}>{text}</p>
            </li>
          ))}
          {isDesktop && (
            <li>
              <Image src={image} alt="image" />
            </li>
          )}
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

        <div className={s.image_wrapper}>
          <Image src={image} alt="image" />
        </div>
      </Container>
    </section>
  );
}

export default SectionC;
