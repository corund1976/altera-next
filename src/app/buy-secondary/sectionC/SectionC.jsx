'use client';

import { useRef } from 'react';
import Image from 'next/image';

import useOnScreen from '@/hooks/useOnScreen';

import imageMob from '@/images/secondary/sectionC/image-mob.webp';
import imageDsk from '@/images/secondary/sectionC/image-dsk.webp';
import textPicture from '@/images/secondary/sectionC/text-picture.webp';
import imageArrow from '@/images/secondary/sectionC/image-arrow.svg';

import useMatchMedia from '@/hooks/useMatchMedia';

import Container from '@/components/container';

import list from './list.json';
import s from './sectionC.module.css';

function SectionC() {
  const listRef = useRef(null);

  const isOnScreen = useOnScreen(listRef);

  const { isDesktop = true } = useMatchMedia();

  return (
    <section className={s.section}>
      <Container>
        <div className={s.block}>
          <div className={s.title}>
            <p>без рисков</p>
            <p>и подводных</p>
            <p>камней:</p>
          </div>

          <p className={s.subtitle}>
            Поиск и приобретение квартиры на вторичном рынке – это процесс,
            пожалуй, куда более кропотливый и многозадачный, чем поиск квартиры
            в новостройке.
          </p>

          <div className={s.flex_wrapper}>
            <div className={s.slogan_wrapper}>
              <div className={s.slogan}>
                <div className={s.text_picture}>
                  <Image src={textPicture} alt="picture" />
                </div>
                почему подбирать вторичку{' '}
                <span>
                  удобнее
                  <br />
                  <Image
                    src={imageArrow}
                    alt="arrow"
                    className={s.image_arrow}
                  />
                  с агентами «АЛЬТЕРА»
                </span>
              </div>
            </div>

            <div className={s.image}>
              <Image src={isDesktop ? imageDsk : imageMob} alt="image" />
            </div>
          </div>

          <p className={s.label}>
            Сотрудничество с агентом «АЛЬТЕРА» сэкономит ваше время, но главное
            — убережет от рисков потому что мы:
          </p>

          <ul className={isOnScreen ? s.list_animated : s.list} ref={listRef}>
            {list.map(({ id, name, desc }) => (
              <li key={id}>
                <p className={s.id}>/ 0{id}</p>
                <div className={s.name_desc}>
                  <p className={s.name}>{name}</p>
                  <p className={s.desc}>{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default SectionC;
