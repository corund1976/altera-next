'use client';

import { useRef } from 'react';
import Image from 'next/image';

import useOnScreen from '@/hooks/useOnScreen';

import image1 from '@/images/main/sectionI/image-1.svg';
import image2 from '@/images/main/sectionI/image-2.svg';
import image3 from '@/images/main/sectionI/image-3.svg';
import image4 from '@/images/main/sectionI/image-4.svg';

import Container from '@/components/container';

import s from './sectionI.module.css';

function SectionI() {
  const sectionRef = useRef(null);

  const isOnScreen = useOnScreen(sectionRef);

  return (
    <section className={s.section} ref={sectionRef}>
      <Container>
        <div className={s.block}>
          <p className={s.marker}>Награды</p>

          <p className={s.title}>
            Большая работа —<br />
            большие достижения
          </p>

          <ul className={isOnScreen ? s.list_animated : s.list}>
            <li>
              <Image src={image1} alt="image" className={s.image} />
              <p className={s.desc}>
                Наша компания уже 4-й год подряд является <span>/ ТОП-1 /</span>{' '}
                у застройщика «Унистрой»
              </p>
            </li>
            <li>
              <Image src={image2} alt="image" className={s.image} />
              <p className={s.desc}>
                <span>/ ТОП-1 /</span> у застройщика «СМУ-88»
              </p>
            </li>
            <li>
              <Image src={image3} alt="image" className={s.image} />
              <p className={s.desc}>
                В <span>/ ТОП-3 /</span> у застройщиков «Суварстроит», «Ак Барс
                Дом»
              </p>
            </li>
            <li>
              <Image src={image4} alt="image" className={s.image} />
              <p className={s.desc}>
                В <span>/ ТОП-20 /</span> агентств России в рейтинге «Домклик»
              </p>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default SectionI;
