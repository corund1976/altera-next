'use client';

import { useRef } from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';

import dataSelectors from '@/redux/data/dataSelectors';

import ArrowIcon from '@/images/main/sectionG/arrow.react.svg';

import Container from '@/components/container';

import s from './sectionG.module.css';

function SectionG() {
  const reviews = useSelector(dataSelectors.reviews);

  const sliderRef = useRef(null);

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
    <section className={s.section}>
      <Container>
        <div className={s.block}>
          <p className={s.marker}>Отзывы</p>

          <p className={s.title}>
            Более 1 000 клиентов
            <br />
            уже оставили
            <br />
            свои отзывы
          </p>

          <p className={s.under_title}>
            Мы обеспечиваем всестороннюю поддержку на каждом этапе, превращая
            сделки с недвижимостью в комфортный и легкий процесс
          </p>

          <ul className={s.list} ref={sliderRef}>
            {reviews?.length > 0 &&
              reviews.map(
                ({ id, photo_url, name, description, review, text, link }) => (
                  <li key={id}>
                    <div className={s.avatar}>
                      {photo_url ? (
                        <Image
                          src={photo_url}
                          alt="customer"
                          width={70}
                          height={70}
                        />
                      ) : (
                        <p>{name[0]}</p>
                      )}
                      <div className={s.yandex}>{review}</div>
                    </div>
                    <p className={s.name}>{name}</p>
                    <p className={s.subname}>{description}</p>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: text,
                      }}
                      className={s.review}
                    />
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={s.link}
                    >
                      <ArrowIcon />
                    </a>
                  </li>
                ),
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

          <div className={s.text}>
            <p className={s.first_row}>каждый</p>
            <p className={s.second_row}>
              <span>/ пятый /</span> клиент
            </p>
            <p className={s.third_row}>
              приходит
              <br /> к нам по
            </p>
            <p className={s.fourth_row}>
              <span>/ рекомен</span>
              <span>-</span>
              <br />
              <span>дации /</span>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SectionG;
