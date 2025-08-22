'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';

import useOnScreen from '@/hooks/useOnScreen';
import useMatchMedia from '@/hooks/useMatchMedia';

import posterMob from '@/images/career/sectionB/poster-mob.webp';
import posterDsk from '@/images/career/sectionB/poster-dsk.webp';

import Container from '@/components/container';

import list from './list.json';
import s from './sectionB.module.css';

const VIDEO_URL =
  'https://drive.google.com/file/d/17ZQjCI1-yeN64y4oNExb0y4bwSPUELfm/preview';

function SectionB() {
  const listRef = useRef(null);

  const isOnScreen = useOnScreen(listRef);

  const { isMobile = true } = useMatchMedia();

  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className={s.section}>
      <Container>
        <div className={s.block}>
          <p className={s.marker}>Карьера в «Альтере»</p>
          <h1 className={s.title}>
            Станьте <br />
            партнером одного <br />
            из <span>/ лучших /</span> агентств недвижимости
          </h1>

          <div className={s.flex_wrapper}>
            <div className={s.slogan_wrapper}>
              <div className={s.slogan}>
                <p>
                  Присоединяй-тесь к Альтера —<br />
                  <span>/ успешной команде /</span>
                </p>
                <p>экспертов по недвижимости и станьте одним из них</p>
              </div>
            </div>
            <div>
              <p className={s.subtitle}>
                это всегда большая ответственность, но вместе с этим вы
                получаете профессиональную среду для роста, в которой можно
                реализовать свои амбиции и достигать большие цели
              </p>

              <div className={s.video}>
                {showVideo === true ? (
                  <iframe
                    src={VIDEO_URL}
                    width="100%"
                    height="100%"
                    allow="autoplay; encrypted-media"
                    autoPlay
                  ></iframe>
                ) : (
                  <>
                    <Image
                      src={isMobile ? posterMob : posterDsk}
                      alt="poster"
                    />
                    <button
                      type="button"
                      onClick={() => setShowVideo(true)}
                      className={s.btn_play}
                    />
                  </>
                )}
              </div>
            </div>
          </div>

          <ul className={isOnScreen ? s.list_animated : s.list} ref={listRef}>
            {list.map(({ id, text }) => (
              <li key={id}>
                <p>
                  <span>/</span> {text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default SectionB;
