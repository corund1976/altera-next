'use client';

import Image from 'next/image';

import picture from '@/images/sell/sectionA/title-picture.webp';
import imageMob from '@/images/sell/sectionA/image-mob.webp';
import imageDsk from '@/images/sell/sectionA/image-dsk.webp';

import useMatchMedia from '@/hooks/useMatchMedia';

import Container from '@/components/container';

import s from './sectionA.module.css';

function SectionA() {
  const { isDesktop = true } = useMatchMedia();

  return (
    <section className={s.section}>
      <Container>
        <h2 className={s.title}>
          <span>продать</span> недвижимость —
          <div className={s.title_picture}>
            <Image src={picture} alt="picture" />
          </div>
          больше
          <br />
          <span>не проблема</span>
        </h2>

        <div className={s.flex_wrapper}>
          <div className={s.image}>
            <Image src={isDesktop ? imageDsk : imageMob} alt="image" />
          </div>
          <div className={s.text}>
            <p>Доверьте процесс агентам «Альтера» —</p>
            <p>
              / экспертам рынка недвижи<span>-</span>
              <br />
              мости /
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SectionA;
