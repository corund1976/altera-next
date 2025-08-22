'use client';

import Image from 'next/image';

import picture from '@/images/rent/sectionA/title-picture.webp';
import imageMob from '@/images/rent/sectionA/image-mob.webp';
import imageDsk from '@/images/rent/sectionA/image-dsk.webp';

import useMatchMedia from '@/hooks/useMatchMedia';

import Container from '@/components/container';

import s from './sectionA.module.css';

function SectionA() {
  const { isDesktop = true } = useMatchMedia();

  return (
    <section className={s.section}>
      <Container>
        <h2 className={s.title}>
          <span>доверительное</span> управление
          <div className={s.title_picture}>
            <Image src={picture} alt="picture" />
          </div>
          недвижимостью
        </h2>
        <div className={s.flex_wrapper}>
          <div className={s.image}>
            <Image src={isDesktop ? imageDsk : imageMob} alt="image" />
          </div>
          <div className={s.text}>
            <p>
              альтера <br />
              аренда — это
            </p>
            <p>/ построить свой бизнес /</p>
            <p>вместе с нами</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SectionA;
