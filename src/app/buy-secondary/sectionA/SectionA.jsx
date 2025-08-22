'use client';

import Image from 'next/image';

import imageMob from '@/images/secondary/sectionA/image-mob.webp';
import imageDsk from '@/images/secondary/sectionA/image-dsk.webp';

import useMatchMedia from '@/hooks/useMatchMedia';

import Container from '@/components/container';

import s from './sectionA.module.css';

function SectionA() {
  const { isDesktop = true } = useMatchMedia();

  return (
    <section className={s.section}>
      <Container>
        <h2 className={s.title}>
          как подобрать квартиру на <span>вторичном рынке</span>
        </h2>
        <p className={s.subtitle}>
          Где искать подходящие варианты, что проверить перед покупкой и как
          договориться о сделке — доверьте эти и другие вопросы о вторичной
          недвижимости агентам «Альтера».
        </p>

        <div className={s.flex_wrapper}>
          <div className={s.image}>
            <Image src={isDesktop ? imageDsk : imageMob} alt="banner" />
          </div>
          <div className={s.slogan_wrapper}>
            <p className={s.slogan}>
              когда хочется
              <br />
              купить <br className={s.only_dsk} />
              <span className={s.fast}>/ быстро,</span>
              <br />
              <span className={s.profit}>выгодно</span>
              <br />
              <span className={s.safe}>и безопасно /</span>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SectionA;
