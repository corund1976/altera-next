'use client';

import Image from 'next/image';

import useMatchMedia from '@/hooks/useMatchMedia';

import bannerMob from '@/images/suburban/hero/banner-mob.webp';
import bannerDsk from '@/images/suburban/hero/banner-dsk.webp';
import Logo from '@/images/logo-altera-big.react.svg';

import Container from '@/components/container';

import s from './hero.module.css';

function Hero() {
  const { isDesktop = true } = useMatchMedia();

  return (
    <section className={s.section}>
      <Container>
        <h1 className={s.h1}>Купить загородный дом</h1>
        <div className={s.title}>
          <div className={s.logo}>
            <Logo />/
          </div>
          <div className={s.ticker}>
            <p>
              Недвижимость
              <br />
              Инвестиции
              <br />
              Развитие
            </p>
            <p aria-hidden="true">
              Недвижимость
              <br />
              Инвестиции
              <br />
              Развитие
            </p>
          </div>
        </div>
        <p className={s.subtitle}>Загородная недвижимость</p>
        <div className={s.image}>
          <Image src={isDesktop ? bannerDsk : bannerMob} alt="banner" />
        </div>
      </Container>
    </section>
  );
}

export default Hero;
