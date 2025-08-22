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
                долгосрочная <br />
                аренда без фейков
              </p>
            </div>
            <p className={s.desc}>
              Вы получаете возможность сэкономить время и не погружаться в
              тонкости процесса, быть уверенным в юридической точности сделки,
              снять или сдать объект безопасно и с максимальной выгодой.
            </p>
          </li>
          <li>
            <div className={s.name_id}>
              <p className={s.id}>/02</p>
              <p className={s.name}>
                посуточная аренда <br />
                недвижимости
              </p>
            </div>
            <p className={s.desc}>
              В нашем управлении находится более 50 квартир для краткосрочной
              аренды. Мы помогаем арендаторам находить идеальное жилье, а
              собственником — надежных клиентов.
            </p>
          </li>
          <li>
            <div className={s.name_id}>
              <p className={s.id}>/03</p>
              <p className={s.name}>
                сервис <br />
                для инвесторов
              </p>
            </div>
            <p className={s.desc}>
              Более 3 лет мы помогаем зарабатывать инвесторам, которые
              занимаются долгосрочной и посуточной арендой.
              <br />
              <br />
              Более 40 собственников уже построили свой посуточный бизнес с
              помощью нашего сервиса.
            </p>
          </li>
        </ul>
      </Container>
    </section>
  );
}

export default SectionB;
