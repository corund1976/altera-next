'use client';

import { useRef } from 'react';
import Image from 'next/image';

import useOnScreen from '@/hooks/useOnScreen';

import titlePicture from '@/images/secondary/sectionD/title-picture.webp';

import Container from '@/components/container';

import listFast from './listFast.json';
import listSafe from './listSafe.json';
import s from './sectionD.module.css';

function SectionD() {
  const sectionRef = useRef(null);

  const isOnScreen = useOnScreen(sectionRef);

  return (
    <section className={s.section} ref={sectionRef}>
      <Container>
        <div className={s.block}>
          <h2 className={s.title}>
            <div className={s.title_picture}>
              <Image src={titlePicture} alt="picture" />
            </div>
            с нами сделка пройдет :
          </h2>

          <div className={s.safe}>
            <p>Безопасно</p>
            <ul className={isOnScreen ? s.list_animated : s.list}>
              {listSafe.map(({ id, desc }) => (
                <li key={id}>
                  <p className={s.id}>/ 0{id}</p>
                  <p className={s.desc}>{desc}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className={s.fast}>
            <p>Оперативно</p>
            <ul className={isOnScreen ? s.list_animated : s.list}>
              {listFast.map(({ id, desc }) => (
                <li key={id}>
                  <p className={s.id}>/ 0{id}</p>
                  <p className={s.desc}>{desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SectionD;
