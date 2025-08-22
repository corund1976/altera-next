'use client';

import Image from 'next/image';

import imageMob from '@/images/primary/sectionA/image-mob.webp';
import imageDsk from '@/images/primary/sectionA/image-dsk.webp';

import useMatchMedia from '@/hooks/useMatchMedia';

import Container from '@/components/container';

import s from './sectionA.module.css';

function SectionA() {
  const { isDesktop = true } = useMatchMedia();

  return (
    <section className={s.section}>
      <Container>
        <h2 className={s.title}>
          Подбор квартиры
          <br />с экспертом:
        </h2>

        <p className={s.subtitle}>
          Квартира вашей мечты уже строится —<br />
          мы поможем её найти!
        </p>

        <div className={s.flex_wrapper}>
          <div className={s.text_image_wrapper}>
            <p className={s.text}>
              Доверьте этот сложный и ответственный процесс профессионалам,
              которые знают все тонкости подбора и актуальную ситуацию на рынке
              недвижимости
            </p>
            <div className={s.image}>
              <Image src={isDesktop ? imageDsk : imageMob} alt="banner" />
            </div>
          </div>

          <div className={s.slogan_wrapper}>
            <div className={s.slogan}>
              <p>когда хочется</p>
              <span>купить</span> <br className={s.only_dsk} />
              <span className={s.profit}>/ выгоднее</span>
              <p className={s.fast}> и быстрее /</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SectionA;
