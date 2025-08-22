'use client';

import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import appSelectors from '@/redux//app/appSelectors';

import useOnScreen from '@/hooks/useOnScreen';
import useMatchMedia from '@/hooks/useMatchMedia';

import Container from '@/components/container';

import s from './sectionD.module.css';

function SectionD() {
  const windowHeight = useSelector(appSelectors.screenHeight);

  const sliderRef = useRef(null);

  const isOnscreen = useOnScreen(sliderRef);

  const { isMobile = true } = useMatchMedia();

  const goPrev = () => {
    const { scrollWidth, scrollLeft } = sliderRef.current;

    sliderRef.current.scrollTo({
      left: scrollLeft - scrollWidth / 4,
      behavior: 'smooth',
    });
  };

  const goNext = () => {
    const { scrollWidth, scrollLeft } = sliderRef.current;

    sliderRef.current.scrollTo({
      left: scrollWidth / 4 + scrollLeft,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (!isOnscreen || !sliderRef.current) return;

    const handleScroll = () => {
      const topPos = sliderRef.current.getBoundingClientRect().top;
      const height = sliderRef.current.getBoundingClientRect().height;

      if (windowHeight - topPos <= height)
        sliderRef.current.style.transform = `translateX(0)`;
      if (windowHeight - topPos > height)
        sliderRef.current.style.transform = `translateX(-124px)`;
      if (windowHeight - topPos > height + 100)
        sliderRef.current.style.transform = `translateX(-248px)`;
      if (windowHeight - topPos > height + 200)
        sliderRef.current.style.transform = `translateX(-372px)`;
    };

    if (isMobile) {
      sliderRef.current.style.transform = `translateX(0)`;
      window.removeEventListener('scroll', handleScroll);
      return;
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile, isOnscreen, windowHeight]);

  return (
    <section className={s.section}>
      <Container>
        <p className={s.title}>совершайте сделки по проверенной технологии</p>
        <p className={s.text}>
          От агента по недвижимости требуется много личной ответственности,
          амбиций и настойчивости. Но делать все это проще, обладая знаниями,
          которые дает вам «Альтера»
        </p>

        {/* <ul className={isOnscreen ? s.list_animated : s.list} ref={sliderRef}> */}
        <ul className={s.list} ref={sliderRef}>
          <li>изучите технологию сделок</li>
          <li>проводите встречи по этой технологии</li>
          <li>
            создавайте, пополняйте и взаимодействуйте с клиентской базой,
            используя методики компании
          </li>
          <li>получайте результаты от проделанной работы</li>
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
      </Container>
    </section>
  );
}

export default SectionD;
