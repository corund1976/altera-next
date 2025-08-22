'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import arrowBlue from '@/images/main/sectionC/arrow-top-right.svg';
import ArrowIcon from '@/images/main/sectionC/arrow.react.svg';

import Container from '@/components/container';

import list from './list.json';
import s from './sectionC.module.css';

function SectionC() {
  const [displayArticle, setDisplayArticle] = useState(null);

  const toggleArticle = (id) =>
    setDisplayArticle(id === displayArticle ? null : id);

  return (
    <section className={s.section}>
      <Container>
        <p className={s.title}>Услуги</p>
        <ul className={s.list}>
          {list.map(({ id, title, subtitle, text, link }) => (
            <li
              key={id}
              onClick={() => toggleArticle(id)}
              className={id === displayArticle ? s.item_active : s.item}
            >
              <div className={s.id_title_wrapper}>
                <p className={s.id}>0{id}</p>
                <p className={s.name_big}>{title}</p>
                <Link href={link} className={s.link}>
                  Узнать подробнее
                  <Image src={arrowBlue} alt="more" />
                </Link>
              </div>

              <div className={s.article}>
                <p className={s.name}>{title}</p>
                {id === displayArticle && (
                  <>
                    <p className={s.subtitle}>{subtitle}</p>
                    <p className={s.text}>{text}</p>
                    <Link href={link} className={s.link}>
                      Узнать подробнее
                      <Image src={arrowBlue} alt="more" />
                    </Link>
                  </>
                )}
              </div>

              <button
                type="button"
                onClick={() => toggleArticle(id)}
                className={s.btn_show}
              >
                {id === displayArticle ? 'Закрыть' : 'Подробнее'}
                <ArrowIcon />
              </button>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default SectionC;
