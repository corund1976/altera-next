'use client';

import { useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

import case1 from '@/images/main/sectionD/case-1.webp';
import case2 from '@/images/main/sectionD/case-2.webp';
import case3 from '@/images/main/sectionD/case-3.webp';
import ArrowIcon from '@/images/main/sectionD/arrow.react.svg';

import Container from '@/components/container';

import s from './sectionD.module.css';

function SectionD() {
  const sliderRef = useRef(null);
  const sectionRef = useRef(null);

  const searchParams = useSearchParams();
  const scrollCases = searchParams.get('scrollCases');

  useEffect(() => {
    if (scrollCases) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
      // setSearchParams({});
    } else window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  return (
    <section className={s.section} ref={sectionRef}>
      <Container>
        <p className={s.marker}>Кейсы</p>
        <p className={s.title}>
          Альтера — это комплексный подход в решении задач
          <br />с недвижимостью
        </p>
        <ul className={s.list} ref={sliderRef}>
          <li>
            <p>Как клиенты из Казани вложили капитал в Москву</p>
            <div>
              <Image src={case1} alt="case" />
            </div>
            <Link href="/case?id=1">
              <ArrowIcon />
            </Link>
          </li>
          <li>
            <p>Экспертный подбор жилой недвижимости</p>
            <div>
              <Image src={case2} alt="case" />
            </div>
            <Link href="/case?id=2">
              <ArrowIcon />
            </Link>
          </li>
          <li>
            <p>Помогли семье из Северодвинска купить дом в Казани удалённо</p>
            <div>
              <Image src={case3} alt="case" />
            </div>
            <Link href="/case?id=3">
              <ArrowIcon />
            </Link>
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

export default SectionD;
