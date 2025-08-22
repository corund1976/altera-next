'use client';

import Image from 'next/image';

import useMatchMedia from '@/hooks/useMatchMedia';

import imageMob from '@/images/suburban/sectionC/image-mob.webp';
import imageDsk from '@/images/suburban/sectionC/image-dsk.webp';

import Container from '@/components/container';

import s from './sectionC.module.css';

function SectionC() {
  const { isDesktop = true } = useMatchMedia();

  return (
    <section className={s.section}>
      <Container>
        <div className={s.image}>
          <Image src={isDesktop ? imageDsk : imageMob} alt="image" />
        </div>
      </Container>
    </section>
  );
}

export default SectionC;
