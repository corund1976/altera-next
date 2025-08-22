'use client';

import { useRef } from 'react';
import Image from 'next/image';

import imageMob from '@/images/primary/sectionB/image-mob.webp';
import imageDsk from '@/images/primary/sectionB/image-dsk.webp';
import picture from '@/images/primary/sectionB/title-picture.webp';

import useMatchMedia from '@/hooks/useMatchMedia';
import useOnScreen from '@/hooks/useOnScreen';

import Container from '@/components/container';

import listMob from './listMob.json';
import listDsk from './listDsk.json';
import s from './sectionB.module.css';

function SectionB() {
  const sectionRef = useRef(null);

  const isOnScreen = useOnScreen(sectionRef);

  const { isDesktop = true } = useMatchMedia();

  return (
    <section className={s.section} ref={sectionRef}>
      <Container>
        <div className={s.block}>
          <h2 className={s.title}>
            почему <span>/ новостройки</span>
            <br />
            <span>привлекают /</span>
            <br />
            покупателя
          </h2>

          <div className={s.flex_wrapper}>
            <div className={s.slogan_wrapper}>
              <h3 className={s.slogan}>
                Покупка квартиры —
                <div className={s.title_picture}>
                  <Image src={picture} alt="picture" />
                </div>
                <span>/ всегда /</span> эмоции
              </h3>
            </div>

            <div className={s.content}>
              <p className={s.text}>
                А жилье в новостройке добавляет особой радости, ведь здесь за
                квадратными метрами нет никакой истории.
              </p>

              <div className={s.image}>
                <Image src={isDesktop ? imageDsk : imageMob} alt="banner" />
              </div>

              <h3 className={s.slogan}>
                Покупка квартиры —
                <div className={s.title_picture}>
                  <Image src={picture} alt="picture" />
                </div>
                <span>/ всегда /</span> эмоции
              </h3>

              <p className={s.subtext}>
                Новые квартиры связаны с вашими новыми надеждами и
                перспективами.{' '}
                <span>
                  Спрос на них всегда высокий, ведь такая жилплощадь имеет много
                  преимуществ:
                </span>
              </p>
            </div>
          </div>

          <ul className={s.list_mob}>
            {listMob.map(({ id, text }) => (
              <li key={id}>
                <p className={s.id}>/ 0{id}</p>
                <p className={s.desc}>{text}</p>
              </li>
            ))}
          </ul>

          <ul className={isOnScreen ? s.list_animated : s.list_dsk}>
            {listDsk.map(({ id, text }) => (
              <li key={id}>
                <p className={s.id}>/ 0{id}</p>
                <p className={s.desc}>{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default SectionB;
