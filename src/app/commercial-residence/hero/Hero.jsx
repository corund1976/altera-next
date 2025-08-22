'use client';

import Image from 'next/image';

import useMatchMedia from '@/hooks/useMatchMedia';

import bannerMob from '@/images/commercial/hero/banner-mob.webp';
import bannerDsk from '@/images/commercial/hero/banner-dsk.webp';

import Logo from '@/images/logo-altera-big.react.svg';

import Container from '@/components/container';

import s from './hero.module.css';

function Hero() {
  const { isDesktop = true } = useMatchMedia();

  return (
    <section className={s.section}>
      <Container>
        <h1 className={s.h1}>Купить коммерческую недвижимость</h1>
        <div className={s.title}>
          <div className={s.logo}>
            <Logo />/
          </div>
          <div className={s.ticker}>
            <p>
              Инвестиции
              <br />
              Недвижимость
              <br />
              Развитие
            </p>
            <p aria-hidden="true">
              Инвестиции
              <br />
              Недвижимость
              <br />
              Развитие
            </p>
          </div>
        </div>
        <p className={s.subtitle}>Коммерческая недвижимость</p>
        <div className={s.image}>
          <Image src={isDesktop ? bannerDsk : bannerMob} alt="banner" />
        </div>
      </Container>
    </section>
  );
}

export default Hero;
