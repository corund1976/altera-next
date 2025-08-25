'use client';

import { useRef } from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';

import dataSelectors from '@/redux/data/dataSelectors';

import useOnScreen from '@/hooks/useOnScreen';

import Container from '@/components/container';

import s from './sectionL.module.css';

function SectionL() {
  const team = useSelector(dataSelectors.team);

  const sectionRef = useRef(null);
  const sliderRef = useRef(null);

  const isOnScreen = useOnScreen(sectionRef);

  const goPrev = () => {
    const { scrollWidth, scrollLeft } = sliderRef.current;

    sliderRef.current.scrollTo({
      left: scrollLeft - scrollWidth / 10,
      behavior: 'smooth',
    });
  };

  const goNext = () => {
    const { scrollWidth, scrollLeft } = sliderRef.current;

    sliderRef.current.scrollTo({
      left: scrollWidth / 10 + scrollLeft,
      behavior: 'smooth',
    });
  };

  return (
    <section className={s.section} ref={sectionRef}>
      <Container>
        <p className={s.marker}>Команда Альтеры</p>

        <p className={s.title}>
          Альтера — это
          <br />
          <span>/ комплексный подход /</span>
          <br /> в решении задач с недвижимостью
        </p>

        <ul className={isOnScreen ? s.list_animated : s.list} ref={sliderRef}>
          {team &&
            team.map(({ id, picture_path, name, description }) => (
              <li key={id}>
                <div className={s.image}>
                  <Image
                    src={picture_path}
                    alt="image"
                    fill
                    sizes="(max-width: 1439px) 170px, 260px"
                  />
                </div>
                <p className={s.name}>{name}</p>
                <p className={s.job}>{description}</p>
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

export default SectionL;
