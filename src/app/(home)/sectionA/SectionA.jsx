'use client';

import Image from 'next/image';

import useMatchMedia from '@/hooks/useMatchMedia';

import arrowImg from '@/images/main/sectionA/arrow.svg';
import titlePicture from '@/images/main/sectionA/title-picture.webp';
import textPicture from '@/images/main/sectionA/text-picture.webp';
import bannerMob from '@/images/main/sectionA/banner-mob.webp';
import bannerDsk from '@/images/main/sectionA/banner-dsk.webp';

import Container from '@/components/container';

import s from './sectionA.module.css';

function SectionA() {
  const { isDesktop = true } = useMatchMedia();

  return (
    <section className={s.section}>
      <Container>
        <p className={s.marker}>Немного о нас</p>

        <h2 className={s.title}>
          <Image
            src={arrowImg}
            alt="arrow"
            width={68}
            height={68}
            className={s.arrow_image}
          />
          Альтера — это <span>/ ваш партнер / </span>
          <br />в вопросах
          <div className={s.title_picture}>
            <Image src={titlePicture} alt="picture" />
          </div>
          <br /> с недвижимостью
        </h2>

        <div className={s.flex_wrapper}>
          <div className={s.banner}>
            {isDesktop ? (
              <Image src={bannerDsk} alt="banner" />
            ) : (
              <Image src={bannerMob} alt="banner" />
            )}
          </div>

          <div className={s.text}>
            <div>
              продать, купить, сдать
              <div className={s.text_picture}>
                <Image src={textPicture} alt="picture" />
              </div>
              в аренду и{' '}
              <span>
                инвести
                <span className={s.only_dsk}>
                  -
                  <br />
                </span>
                ровать
              </span>
            </div>
            <div>
              в квартиру, дом или
              <br />
              <span>
                / помещение
                <br />
                для бизнеса /
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SectionA;
