'use client';

import Image from 'next/image';

import useMatchMedia from '@/hooks/useMatchMedia';

import imageMob from '@/images/commercial/sectionA/image-mob.webp';
import imageDsk from '@/images/commercial/sectionA/image-dsk.webp';

import Container from '@/components/container';

import s from './sectionA.module.css';

function SectionA() {
  const { isDesktop = true } = useMatchMedia();

  return (
    <section className={s.section}>
      <Container>
        <h2 className={s.title}>
          <span className={s.gap} />
          купить, продать,{' '}
          <span className={s.highlighted}>сдать в аренду,</span> инвестировать
        </h2>
        <p className={s.text}>
          «Альтера» — агентство, которое успешно развивает свои компетенции в
          сфере коммерческой недвижимости. Мы помогаем подобрать, продать, сдать
          в аренду объекты коммерческой недвижимости, оказывая полный комплекс
          услуг.
        </p>
        <div className={s.image}>
          <Image src={isDesktop ? imageDsk : imageMob} alt="banner" />
        </div>
      </Container>
    </section>
  );
}

export default SectionA;
