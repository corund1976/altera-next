'use client';

import { useRef } from 'react';
import Image from 'next/image';

import useOnScreen from '@/hooks/useOnScreen';

import label01 from '@/images/commercial/sectionB/label-01.svg';
import label02 from '@/images/commercial/sectionB/label-02.svg';
import label03 from '@/images/commercial/sectionB/label-03.svg';
import label04 from '@/images/commercial/sectionB/label-04.svg';

import Container from '@/components/container';

import s from './sectionB.module.css';

function SectionB() {
  const sectionRef = useRef(null);

  const isOnScreen = useOnScreen(sectionRef);

  return (
    <section className={s.section} ref={sectionRef}>
      <Container>
        <div className={s.block}>
          <p className={s.title}>для инвесторов</p>
          <p className={s.text}>
            <span>Более 10 лет</span> мы работаем с частными инвесторами и
            обладаем всеми инструментами для того, чтобы вы успешно
            инвестировали в прибыльные объекты коммерческой недвижимости.
          </p>

          <ul className={isOnScreen ? s.list_animated : s.list}>
            <li>
              <div className={s.label}>
                <Image src={label01} alt="01" />
              </div>
              <p className={s.desc}>
                Выявляем потребности и потенциал инвестиций, определяемся с
                целью инвестирования
              </p>
            </li>
            <li>
              <div className={s.label}>
                <Image src={label02} alt="02" />
              </div>
              <p className={s.desc}>
                Проводим комплексный аудит коммерческой недвижимости:
                эксплуатационный, юридический, коммерческий
              </p>
            </li>
            <li>
              <div className={s.label}>
                <Image src={label03} alt="03" />
              </div>
              <p className={s.desc}>
                Проводим аналитику локации и делаем финансовые расчеты
              </p>
            </li>
            <li>
              <div className={s.label}>
                <Image src={label04} alt="04" />
              </div>
              <p className={s.desc}>
                Предлагаем наиболее инвестиционно-привлекательные варианты
                вложений с обоснованием
              </p>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default SectionB;
