'use client';

import Image from 'next/image';

import useMatchMedia from '@/hooks/useMatchMedia';

import Logo from '@/images/logo-altera-big.react.svg';
import bannerMob from '@/images/sell/hero/banner-mob.webp';
import bannerDsk from '@/images/sell/hero/banner-dsk.webp';

import Container from '@/components/container';

import s from './hero.module.css';

function Hero() {
  const { isDesktop = true } = useMatchMedia();

  return (
    <section className={s.section}>
      <Container>
        <h1 className={s.h1}>Продать недвижимость</h1>
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
        <div className={s.image}>
          <Image src={isDesktop ? bannerDsk : bannerMob} alt="banner" />
        </div>
      </Container>
    </section>
  );
}

export default Hero;
