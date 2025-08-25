'use client';

import { useRef } from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';

import dataSelectors from '@/redux/data/dataSelectors';

import useOnScreen from '@/hooks/useOnScreen';

import titlePicture from '@/images/main/sectionJ/title-picture.webp';

import Container from '@/components/container';

import s from './sectionJ.module.css';

function SectionJ() {
  const history = useSelector(dataSelectors.history);

  const sectionRef = useRef(null);
  const sliderRef = useRef(null);

  const isOnScreen = useOnScreen(sectionRef);

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
        <p className={s.marker}>История компании</p>

        <h2 className={s.title}>
          От небольшого бюро{' '}
          <div className={s.title_picture_dsk}>
            <Image src={titlePicture} alt="title" />
          </div>
          <span>
            до крупного
            <br />
            <div className={s.title_picture_mob}>
              <Image src={titlePicture} alt="title" />
            </div>{' '}
            агентства
          </span>
        </h2>

        <p className={s.subtitle}>
          Индивидуальный подход к запросам клиентов и полная вовлеченность на
          каждом этапе работы сделали нашу команду одной из лучших среди
          агентств Казани.
        </p>

        <p className={s.text}>
          Мы продолжаем расти и совершенствоваться: создали отдел амбассадоров
          для непрерывного мониторинга лучших предложений на рынке новостроек,
          открыли учебный центр по подготовке агентов, настроили работу по
          подбору квартир не только в Казани, но и в Москве, Санкт-Петербурге и
          Сочи.
        </p>

        <ul className={isOnScreen ? s.list_animated : s.list} ref={sliderRef}>
          {history?.length > 0 &&
            history.map(({ year, title, description }) => (
              <li key={year.toString()}>
                <p className={s.year}>{year}</p>
                <p className={s.name}>{title}</p>
                <div
                  dangerouslySetInnerHTML={{ __html: description }}
                  className={s.desc}
                />
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

export default SectionJ;
