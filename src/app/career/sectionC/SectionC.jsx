'use client';

import { useRef } from 'react';
import Image from 'next/image';

import useOnScreen from '@/hooks/useOnScreen';
import useMatchMedia from '@/hooks/useMatchMedia';

import picture from '@/images/career/sectionC/title-picture.webp';
import image from '@/images/career/sectionC/image.webp';

import Container from '@/components/container';

import list from './list.json';
import s from './sectionC.module.css';

function SectionC() {
  const sectionRef = useRef(null);

  const isOnScreen = useOnScreen(sectionRef);

  const { isMobile, isDesktop } = useMatchMedia();

  return (
    <section className={s.section} ref={sectionRef}>
      <Container>
        <div className={s.block}>
          <p className={s.marker}>Работа в агентстве</p>

          <h2 className={s.title}>
            <div className={s.title_picture}>
              <Image src={picture} alt="picture" />
            </div>
            ваш быстрый и комфортный
            <br />
            старт
          </h2>

          <ul className={isOnScreen ? s.list_animated : s.list}>
            {list.map(({ id, text }) => (
              <li key={id}>
                <p className={s.id}>0{id}</p>
                <p className={s.text}>{text}</p>
                {((isMobile && id === 4) || (isDesktop && id === 2)) && (
                  <div className={s.image}>
                    <Image src={image} alt="image" />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default SectionC;
