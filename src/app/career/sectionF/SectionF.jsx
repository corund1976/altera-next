'use client';

import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';

import dataSelectors from '@/redux//data/dataSelectors';

import Container from '@/components/container';

import s from './sectionF.module.css';

function SectionF() {
  const data = useSelector(dataSelectors.career)?.section_f;

  const sliderRef = useRef(null);

  const [showVideo, setShowVideo] = useState(null);

  const goPrev = () => {
    const { scrollWidth, scrollLeft } = sliderRef.current;

    sliderRef.current.scrollTo({
      left: scrollLeft - scrollWidth / 4,
      behavior: 'smooth',
    });
  };

  const goNext = () => {
    const { scrollWidth, scrollLeft } = sliderRef.current;

    sliderRef.current.scrollTo({
      left: scrollWidth / 4 + scrollLeft,
      behavior: 'smooth',
    });
  };

  return (
    <section className={s.section}>
      <Container>
        <p className={s.title}>От новичка до профессионала кратчайшим путем</p>
        <p className={s.text}>
          В собственном учебном центре мы обучаем кандидатов со всей России и
          знаем, как растить профессионалов рынка недвижимости с нуля.
        </p>

        {/* <ul className={isOnscreen ? s.list_animated : s.list} ref={sliderRef}> */}
        <ul className={s.list} ref={sliderRef}>
          {data?.first_poster_path && data?.first_video_url && (
            <li>
              {showVideo === 1 ? (
                <iframe
                  // src={`${VIDEO_URL_1}?autoplay=1&loop=1`}
                  src={data?.first_video_url}
                  width="250"
                  height="445"
                  allow="autoplay; encrypted-media"
                  autoPlay
                ></iframe>
              ) : (
                <>
                  <Image src={data?.first_poster_path} alt="poster" />
                  <button
                    type="button"
                    onClick={() => setShowVideo(1)}
                    className={s.btn_play}
                  />
                </>
              )}
            </li>
          )}
          {data?.second_poster_path && data?.second_video_url && (
            <li>
              {showVideo === 2 ? (
                <iframe
                  src={data?.second_video_url}
                  width="250"
                  height="445"
                  allow="autoplay; encrypted-media"
                  autoPlay
                ></iframe>
              ) : (
                <>
                  <Image src={data?.second_poster_path} alt="poster" />
                  <button
                    type="button"
                    onClick={() => setShowVideo(2)}
                    className={s.btn_play}
                  />
                </>
              )}
            </li>
          )}
          {data?.third_poster_path && data?.third_video_url && (
            <li>
              {showVideo === 3 ? (
                <iframe
                  src={data?.third_video_url}
                  width="250"
                  height="445"
                  allow="autoplay; encrypted-media"
                  autoPlay
                ></iframe>
              ) : (
                <>
                  <Image src={data?.third_poster_path} alt="poster" />
                  <button
                    type="button"
                    onClick={() => setShowVideo(3)}
                    className={s.btn_play}
                  />
                </>
              )}
            </li>
          )}
        </ul>

        <div className={s.nav_btns}>
          <button
            type="button"
            onClick={goPrev}
            className={s.btn_prev}
            title="prev"
          />
          <button
            type="button"
            onClick={goNext}
            className={s.btn_next}
            title="next"
          />
        </div>
      </Container>
    </section>
  );
}

export default SectionF;
