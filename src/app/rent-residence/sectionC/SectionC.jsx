'use client';

import { useRef } from 'react';
import Image from 'next/image';

import useOnScreen from '@/hooks/useOnScreen';

import picture from '@/images/rent/sectionC/title-picture.webp';
import imageMob from '@/images/rent/sectionC/image-mob.webp';

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
      left: scrollLeft - scrollWidth / 5,
      behavior: 'smooth',
    });
  };

  const goNext = () => {
    const { scrollWidth, scrollLeft } = sliderRef.current;

    sliderRef.current.scrollTo({
      left: scrollWidth / 5 + scrollLeft,
      behavior: 'smooth',
    });
  };

  return (
    <section className={s.section} ref={sectionRef}>
      <Container>
        <h2 className={s.title}>
          Мы ценим ваше время
          <br />и{' '}
          <span>
            / берем управление
            <br />
            <div className={s.title_picture}>
              <Image src={picture} alt="picture" />
            </div>
            недвижимостью на себя /
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
          <li className={s.only_desktop} />
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
          <Image src={imageMob} alt="image" />
        </div>

        <div className={s.slogan}>
          мы работаем
          <br />
          <span>
            как с / физическими / так и с / юридическими /{' '}
            <div className={s.title_picture}>
              <Image src={picture} alt="picture" />
            </div>
            лицами
          </span>
        </div>
      </Container>
    </section>
  );
}

export default SectionC;
