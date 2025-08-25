'use client';

import { useState } from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';

import dataSelectors from '@/redux//data/dataSelectors';

import Container from '@/components/container';

import s from './sectionE.module.css';

function SectionE() {
  const data = useSelector(dataSelectors.career)?.section_e;

  const [showVideo, setShowVideo] = useState(null);

  return (
    <section className={s.section}>
      <Container>
        <p className={s.title}>РАЗВИТИЕ В ПРОФЕССИИ — РАЗВИТИЕ В ЖИЗНИ</p>
        <div
          dangerouslySetInnerHTML={{
            __html: data?.intro_text,
          }}
          className={s.subtitle}
        />

        <div className={s.flex_wrapper}>
          <div className={s.slogan_wrapper_dsk}>
            <div className={s.slogan}>
              <p>
                Достичь баланса
                <br /> в главных
                <br /> сферах жизни —<span>мечта для многих</span>
              </p>
              <p>
                Для агентов «Альтера» —<span>/ реальность /</span>
              </p>
            </div>
          </div>

          <div className={s.content_wrapper}>
            <div className={s.video_wrapper_1}>
              {data?.first_poster_path && data?.first_video_url && (
                <div className={s.video}>
                  {showVideo === 1 ? (
                    <iframe
                      src={data?.first_video_url}
                      width="100%"
                      height="100%"
                      allow="autoplay; encrypted-media"
                      autoPlay
                    ></iframe>
                  ) : (
                    <>
                      <Image src={data?.first_poster_path} alt="poster" fill />
                      <button
                        type="button"
                        onClick={() => setShowVideo(1)}
                        className={s.btn_play}
                      />
                    </>
                  )}
                </div>
              )}
              <div
                dangerouslySetInnerHTML={{
                  __html: data?.first_description,
                }}
                className={s.media_desc}
              />
            </div>

            <div className={s.slogan_wrapper_mob}>
              <div className={s.slogan}>
                <p>
                  достичь баланса в главных сферах жизни —
                  <span>мечта для многих</span>
                </p>
                <p>
                  Для агентов «Альтера» —<span>/ реальность /</span>
                </p>
              </div>
            </div>

            <div className={s.video_wrapper_2}>
              {data?.second_poster_path && data?.second_video_url && (
                <div className={s.video}>
                  {showVideo === 2 ? (
                    <iframe
                      src={data?.second_video_url}
                      width="100%"
                      height="100%"
                      allow="autoplay; encrypted-media"
                      autoPlay
                    ></iframe>
                  ) : (
                    <>
                      <Image src={data?.second_poster_path} alt="poster" fill />
                      <button
                        type="button"
                        onClick={() => setShowVideo(2)}
                        className={s.btn_play}
                      />
                    </>
                  )}
                </div>
              )}
              <div
                dangerouslySetInnerHTML={{
                  __html: data?.second_description,
                }}
                className={s.media_desc}
              />
            </div>

            <div className={s.images_wrapper}>
              <div>
                <div className={s.picture}>
                  {data?.first_image_path && (
                    <Image src={data?.first_image_path} alt="picture" fill />
                  )}
                </div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: data?.first_image_description,
                  }}
                  className={s.media_desc}
                />
              </div>
              <div>
                <div className={s.picture}>
                  {data?.second_image_path && (
                    <Image src={data?.second_image_path} alt="picture" fill />
                  )}
                </div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: data?.second_image_description,
                  }}
                  className={s.media_desc}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SectionE;
