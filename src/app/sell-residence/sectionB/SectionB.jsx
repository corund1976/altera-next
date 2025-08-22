'use client';

import { useRef } from 'react';

import useOnScreen from '@/hooks/useOnScreen';

import Container from '@/components/container';

import s from './sectionB.module.css';

function SectionB() {
  const sectionRef = useRef(null);

  const isOnscreen = useOnScreen(sectionRef);

  return (
    <section className={s.section} ref={sectionRef}>
      <Container>
        <ul className={isOnscreen ? s.list_animated : s.list}>
          <li>
            <div className={s.name_id}>
              <p className={s.id}>/01</p>
              <p className={s.name}>
                знаем как <br />
                продать выгодно и быстро
              </p>
            </div>
            <p className={s.desc}>
              Доверьте продажу вашей недвижимости профессионалам «АЛЬТЕРА»:
              оценим объект, привлечем покупателя и доведем сделку до конца —
              без рисков и лишних забот
            </p>
          </li>
          <li>
            <div className={s.name_id}>
              <p className={s.id}>/02</p>
              <p className={s.name}>
                от первой встречи
                <br />
                до успешной сделки
              </p>
            </div>
            <p className={s.desc}>
              Наши агенты сопровождают клиента на каждом этапе сделки: начиная с
              первичной консультации, создания грамотной рекламы и объявлений,
              встреч с потенциальными покупателями, подготовки необходимых
              документов, заканчивая передачей ключей
            </p>
          </li>
          <li>
            <div className={s.name_id}>
              <p className={s.id}>/03</p>
              <p className={s.name}>
                получите удовольствие
                <br />
                от продажи
              </p>
            </div>
            <p className={s.desc}>
              Работа с агентом позволит насладиться процессом продажи
              недвижимости, а не переживать о нюансах. Вы получаете возможность{' '}
              <span>сэкономить время</span> и не погружаться в тонкости
              процесса, <span>быть уверенным</span> в юридической точности
              сделки и{' '}
              <span>
                продать объект с максимальной выгодой в короткие сроки
              </span>
            </p>
          </li>
        </ul>
      </Container>
    </section>
  );
}

export default SectionB;
