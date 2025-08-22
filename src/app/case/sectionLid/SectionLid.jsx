import Image from 'next/image';

import picture from '@/images/case/sectionLid/title-picture.webp';

import Container from '@/components/container';

import s from './sectionLid.module.css';

function SectionLid() {
  return (
    <section className={s.section}>
      <Container>
        <div className={s.title}>
          <div className={s.first_row}>
            <div className={s.title_picture}>
              <Image src={picture} alt="picture" />
            </div>
            Если вы хотите
          </div>
          <p>
            приобрести недвижимость
            <br />с уверенностью
            <br />в результате, <span>/ welcome /</span>
          </p>
        </div>

        <p className={s.text}>
          Мы знаем, как сделать процесс лёгким и результативным.
        </p>
      </Container>
    </section>
  );
}

export default SectionLid;
