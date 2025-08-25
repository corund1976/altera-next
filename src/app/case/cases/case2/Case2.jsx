import Image from 'next/image';

import image from '@/images/case/case2/image.webp';

import Container from '@/components/container';

import s from './case2.module.css';

function Case2() {
  return (
    <section className={s.section}>
      <Container>
        {/* HERO */}
        <p className={s.badge}>Кейсы</p>
        <p className={s.title}>
          <span>/ Оптимизация /</span>
          <br />
          жилищного актива:
        </p>
        <div className={s.flex_wrapper}>
          <p className={s.under_title}>
            переход от неэффективной
            <br />
            собственности к перспективному
            <br />
            жилью в ЖК «Лето»
          </p>
          <div className={s.image_wrapper}>
            <Image src={image} alt="image" priority />
          </div>
          <p className={s.author}>
            Рассказывает риэлтор
            <br />
            <span>Рамзия Васина:</span>
          </p>
        </div>

        {/* CONTENT */}

        {/* DESCRIPTION */}
        <div className={s.block}>
          <p className={s.block_title}>С чего всё началось</p>
          <div className={s.block_content}>
            <div className={s.description}>
              <p>
                Клиент являлась собственником трехкомнатной квартиры (82 м²) в
                ЖК «Салават Купере» по адресу Юсупова,6. Объект находился в
                статусе пустующего с момента сдачи застройщиком, в то время как
                семья проживала в евродвухкомнатной квартире в другом районе на
                ул. Минской.
              </p>
              <p>
                Изначально клиентка рассматривала продажу, но после анализа
                ситуации я предложила трейд-ин в новый ЖК «Лето» – это позволило
                бы ей не только избавиться от не используемого ею жилья, но и
                сразу переехать в современный комплекс.
              </p>
            </div>
          </div>
        </div>

        {/* WHY MOSCOW*/}
        <div className={s.block}>
          <p className={s.block_title}>Почему Москва?</p>
          <div className={s.block_content}>
            <p className={s.block_subtitle}>
              От просмотра до ключей:
              <br />
              <span>когда всё сложилось</span>
            </p>
            <ul className={s.why_list}>
              <li>
                <span>Быстрая продажа, экономящая время</span>
                <br />
                Квартира в Салават Купере могла задержаться на рынке, но
                благодаря грамотной цене (8,5 млн руб.) и активным показам мы
                продали её за 1 день.
                <br />
                <br />
                Покупатель пришёл с наличными, что ускорило сделку.
              </li>
              <li>
                <span>Выгодные условия в ЖК «Лето»</span>
                <br />
                Застройщик предложил скидку 2% по программе трейд-ин.
                <br />
                <br />
                Дом сдаётся уже в октябре – клиентка сможет заехать почти сразу.
              </li>
              <li>
                <span>Перспективный район</span>
                <br />
                Во время экскурсии мы изучили генплан, осмотрели парки,
                строящуюся школу и детский сад – всё, что важно для комфортной
                жизни
              </li>
            </ul>
          </div>
        </div>

        {/*  HOW DID IT GO */}
        <div className={s.block}>
          <p className={s.block_title}>Как прошла сделка?</p>
          <div className={s.block_content}>
            <ul className={s.how_list}>
              <li>
                <span>Провела аналитику рынка:</span> определили реальную цену
                продажи (не выше 7,7 млн ₽), но выставили за 8,5 млн ₽, чтобы
                иметь запас для торга (поэтапного снижения цены при
                необходимости).
              </li>
              <li>
                Организовали несколько показов за день и нашли покупателя с
                деньгами.
                <br />
                <br />
                Одновременно оформили покупку в ЖК «Лето» – клиентка осталась
                довольна скоростью и прозрачностью процесса.
              </li>
            </ul>
          </div>
        </div>

        {/* CONCLUSION */}
        <div className={s.block}>
          <p className={s.block_title}>Итог:</p>
          <div className={s.block_content}>
            <p className={s.block_subtitle}>
              Продали пустующую квартиру в Салават Купере быстро и по хорошей
              цене.
            </p>
            <ul className={s.conclusion_list}>
              <li>Переселились в новый ЖК с выгодными условиями.</li>
              <li>
                Избавились от ненужного актива без лишнего стресса и с выгодой,
                применив комбинированный подход к сделке!
                <br />
                <br />
                Если у вас есть квартира, которая не приносит доход или просто
                пустует, давайте разберёмся, как можно продать её с максимальной
                выгодой или обменять по трейд-ину на более ликвидный вариант.
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Case2;
