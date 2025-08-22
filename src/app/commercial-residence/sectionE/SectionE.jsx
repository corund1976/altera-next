'use client';

import { useRef } from 'react';
import Image from 'next/image';

import useOnScreen from '@/hooks/useOnScreen';

import point1 from '@/images/commercial/sectionE/point-1.svg';
import point2 from '@/images/commercial/sectionE/point-2.svg';
import point3 from '@/images/commercial/sectionE/point-3.svg';
import point4 from '@/images/commercial/sectionE/point-4.svg';
import image from '@/images/commercial/sectionE/image-mob.webp';

import Container from '@/components/container';

import s from './sectionE.module.css';

function SectionE() {
  const listRef = useRef(null);

  const isOnScreeen = useOnScreen(listRef);
  return (
    <section className={s.section}>
      <Container>
        <h2 className={s.title}>
          <span>Сдать в аренду</span>
          <br />
          <span className={s.gap}>/</span> или продать <span>/</span>
        </h2>

        <p className={s.text}>
          Мы работаем напрямую с собственниками и предлагаем прибыльные варианты
          для реализации их объектов.
        </p>

        <ul className={isOnScreeen ? s.list_animated : s.list} ref={listRef}>
          <li>
            <Image src={point1} alt="01" />
            <p className={s.desc}>
              <span>Проводим комплексный аудит коммерческой недвижимости:</span>{' '}
              эксплуатационный, юридический и коммерческий
            </p>
          </li>
          <li>
            <Image src={point2} alt="02" />
            <p>
              <span>Анализ объекта:</span> изучение локации и инфраструктуры,
              анализ пешеходного трафика, транспортной доступности и
              конкурентной среды, выявление уникальных характеристик объекта
            </p>
          </li>
          <li>
            <Image src={point3} alt="03" />
            <p>
              <span>Разрабатываем коммерческую концепцию</span> объекта
              недвижимости
            </p>
          </li>
          <li>
            <Image src={point4} alt="04" />
            <p>
              <span>Просчитываем наиболее эффективные</span> и выгодные варианты
              аренды и продажи
            </p>
          </li>
        </ul>

        <div className={s.sell}>
          <p>/ продажа</p>
          <p>
            реализовываем объект коммерческой недвижимости, работая с широкой
            базой инвесторов
          </p>
        </div>
        <div className={s.rent}>
          <p>/ аренда</p>
          <p>подбираем арендатора на основании продуманной аналитики объекта</p>
        </div>

        <div className={s.image}>
          <Image src={image} alt="image" />
        </div>
      </Container>
    </section>
  );
}

export default SectionE;
