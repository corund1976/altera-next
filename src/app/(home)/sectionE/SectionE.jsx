'use client';

import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';

import appSelectors from '@/redux/app/appSelectors';

import useOnScreen from '@/hooks/useOnScreen';
import useMatchMedia from '@/hooks/useMatchMedia';

import picture from '@/images/main/sectionE/title-picture.webp';
import Bgi from '@/images/main/sectionE/bgi.react.svg';

import Container from '@/components/container';

import listMob from './listMob.json';
import listDsk from './listDsk.json';
import s from './sectionE.module.css';

function SectionE() {
  const windowHeight = useSelector(appSelectors.screenHeight);

  const sectionRef = useRef(null);
  const sliderRef = useRef(null);
  const bgiRef = useRef(null);

  const isOnscreen = useOnScreen(sectionRef);

  const { isDesktop = true } = useMatchMedia();

  // const shape = document.getElementById('shape');
  // const length = shape?.getTotalLength();
  // console.log('length', length);

  const goPrev = () => {
    const { scrollWidth, scrollLeft } = sliderRef.current;

    sliderRef.current.scrollTo({
      left: scrollLeft - scrollWidth / 8,
      behavior: 'smooth',
    });
  };

  const goNext = () => {
    const { scrollWidth, scrollLeft } = sliderRef.current;

    sliderRef.current.scrollTo({
      left: scrollWidth / 8 + scrollLeft,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (!isDesktop || !isOnscreen || !bgiRef.current) return;
    const handleScroll = () => {
      const topPos = bgiRef?.current?.getBoundingClientRect().top;
      if (topPos < windowHeight)
        bgiRef.current.style.strokeDashoffset = 3711.52;
      if (topPos + 50 < windowHeight)
        bgiRef.current.style.strokeDashoffset = 3580;
      if (topPos + 150 < windowHeight)
        bgiRef.current.style.strokeDashoffset = 3174;
      if (topPos + 250 < windowHeight)
        bgiRef.current.style.strokeDashoffset = 2755;
      if (topPos + 350 < windowHeight)
        bgiRef.current.style.strokeDashoffset = 1965;
      if (topPos + 450 < windowHeight)
        bgiRef.current.style.strokeDashoffset = 1550;
      if (topPos + 550 < windowHeight)
        bgiRef.current.style.strokeDashoffset = 1144;
      // if (topPos + 650 < windowHeight)
      //   bgiRef.current.style.strokeDashoffset = 585;
      // if (topPos + 750 < windowHeight)
      //   bgiRef.current.style.strokeDashoffset = 0;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDesktop, isOnscreen, windowHeight]);

  return (
    <section className={s.section} ref={sectionRef}>
      <Container>
        <div className={s.block}>
          <p className={s.marker}>Схема работы</p>
          <h2 className={s.title}>
            <div className={s.title_picture}>
              <Image src={picture} alt="picture" />
            </div>
            Альтера — всегда <span>в пользу</span> клиента
          </h2>
          <p className={s.text}>
            Мы обеспечиваем всестороннюю поддержку на каждом этапе, превращая
            сделки с недвижимостью в комфортный и легкий процесс
          </p>

          <ul className={s.list_mob} ref={sliderRef}>
            {listMob.map(({ id, name, text }) => (
              <li key={id}>
                <p className={s.id}>/ 0{id}</p>
                <p className={s.name}>{name}</p>
                <p className={s.desc}>{text}</p>
              </li>
            ))}
          </ul>
          <div className={s.nav_btns}>
            <button
              type="button"
              onClick={goPrev}
              className={s.btn_prev}
              title="prev"
            />
            <button
              type="button"
              onClick={goNext}
              className={s.btn_next}
              title="next"
            />
          </div>

          <div className={s.relative_container}>
            {/* <Bgi className={isOnscreen ? s.bgi_animated : s.bgi} /> */}
            <Bgi className={s.bgi} ref={bgiRef} />

            <ul className={s.list_dsk}>
              {listDsk.map(({ id, name, text }) => (
                <li key={id}>
                  <p className={s.id}>/ 0{id}</p>
                  <p className={s.name}>{name}</p>
                  <p className={s.desc}>{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SectionE;
