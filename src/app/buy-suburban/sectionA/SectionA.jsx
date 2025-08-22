'use client';

import Image from 'next/image';

import imageMob from '@/images/suburban/sectionA/image-mob.webp';
import imageDsk from '@/images/suburban/sectionA/image-dsk.webp';
import picture from '@/images/suburban/sectionA/title-picture.webp';

import useMatchMedia from '@/hooks/useMatchMedia';

import Container from '@/components/container';

import s from './sectionA.module.css';

function SectionA() {
  const { isDesktop = true } = useMatchMedia();

  return (
    <section className={s.section}>
      <Container>
        <div>
          <h2 className={s.title}>
            Собственный дом — не мечта, а ваша
            <div className={s.title_picture}>
              <Image src={picture} alt="picture" />
            </div>
            <span>/ реальность /</span>
          </h2>
          <p className={s.text}>
            Приобрести частный дом с участком, коттедж или таунхаус за городом
            или в городской черте — с агентами «АЛЬТЕРА» такая крупная и
            серьезная покупка станет реальностью
          </p>
        </div>
        <div className={s.image}>
          <Image src={isDesktop ? imageDsk : imageMob} alt="banner" />
        </div>
      </Container>
    </section>
  );
}

export default SectionA;
