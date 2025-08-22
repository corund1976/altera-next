'use client';

import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import appSelectors from '@/redux/app/appSelectors';

import useOnScreen from '@/hooks/useOnScreen';
import useMatchMedia from '@/hooks/useMatchMedia';

import Container from '@/components/container';

import s from './sectionB.module.css';

function SectionB() {
  const windowHeight = useSelector(appSelectors.screenHeight);

  const sliderRef = useRef(null);

  const isOnscreen = useOnScreen(sliderRef);

  const { isDesktop = true } = useMatchMedia();

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

  if (!isDesktop || !isOnscreen || !sliderRef.current) return;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDesktop, isOnscreen, windowHeight]);

  return (
    <section className={s.section}>
      <Container>
        <p className={s.marker}>Почему мы</p>
        <p className={s.title}>Альтера — когда сложное становится простым</p>
        <p className={s.text}>
          С агентами «АЛЬТЕРА» процесс покупки, продажи и инвестиции в
          недвижимость становится прозрачным и понятным:
        </p>

        <ul className={s.list} ref={sliderRef}>
          <li>полностью погружаемся в задачу клиента</li>
          <li>даем независимую и профессиональную оценку</li>
          <li>сопровождаем на всех этапах сделки</li>
          <li>
            предлагаем только те варианты, которые действительно решают задачи
            клиента
          </li>
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

export default SectionB;
