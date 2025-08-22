'use client';

import { useRef } from 'react';
import Image from 'next/image';

import useOnScreen from '@/hooks/useOnScreen';
import useMatchMedia from '@/hooks/useMatchMedia';

import imageDsk from '@/images/commercial/sectionC/image-dsk.webp';
import imageMob from '@/images/commercial/sectionC/image-mob.webp';

import Container from '@/components/container';

import s from './sectionC.module.css';

function SectionC() {
  const listRef = useRef(null);

  const isOnScreen = useOnScreen(listRef);

  const { isDesktop = true } = useMatchMedia();

  return (
    <section className={s.section}>
      <Container>
        <h2 className={s.title}>
          <span>Подобрать коммерческую недвижимость</span>
          <br />
          <span className={s.gap}>/</span> для вашего бизнеса или инвестиций{' '}
          <span>/</span>
        </h2>
        <p className={s.text_top}>
          Коммерческая недвижимость из года в год доказывает свою надежность и
          эффективность. Специалисты «Альтера» помогут вам выбрать наиболее
          прибыльный объект и реализовать его потенциал.
        </p>
        <p className={s.text_btm}>
          Мы работаем напрямую с собственниками и предлагаем выгодные решения
          как для продажи, так и для инвестирования. Наше сотрудничество с
          ведущими представителями ритейл-сегмента позволяет не только подобрать
          объект под покупку, но и обеспечить его надежным арендатором. Если вы
          хотите приобрести помещение под ритейл, мы подберем для вас
          оптимальный вариант и гарантируем стабильный доход за счет
          долгосрочной аренды.
        </p>
        <ul className={isOnScreen ? s.list_animated : s.list} ref={listRef}>
          <li>
            <p className={s.label}>/01</p>
            <p className={s.desc}>выявляем цель инвестирования</p>
          </li>
          <li>
            <p className={s.label}>/02</p>
            <p className={s.desc}>
              отбираем необходимые критерии под цели клиента
            </p>
          </li>
          <li>
            <p className={s.label}>/03</p>
            <p className={s.desc}>
              подбираем лучшие предложения из портфелей наших инвесторов, а
              также из всех возможных каналов, включая закрытые площадки
            </p>
          </li>
          <li>
            <p className={s.label}>/04</p>
            <p className={s.desc}>
              гарантируем юридическую чистоту и полное сопровождение сделки
            </p>
          </li>
        </ul>

        <div className={s.image}>
          <Image src={isDesktop ? imageDsk : imageMob} alt="image" />
        </div>
      </Container>
    </section>
  );
}

export default SectionC;
