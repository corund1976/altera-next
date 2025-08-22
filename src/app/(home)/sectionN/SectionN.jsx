'use client';

import { useSelector } from 'react-redux';
import Image from 'next/image';

import dataSelectors from '@/redux/data/dataSelectors';

import dzen from '@/images/main/sectionN/dzen.svg';
import youtube from '@/images/main/sectionN/youtube.svg';

import Container from '@/components/container';

import s from './sectionN.module.css';

function SectionN() {
  const portfolio = useSelector(dataSelectors.portfolio);

  return (
    <section className={s.section}>
      <Container>
        <div className={s.block}>
          {portfolio && portfolio[0] && (
            <div className={s.block_1}>
              <div className={s.image}>
                <Image src={portfolio[0]?.picture_path} alt="picture" />
                <a
                  href={portfolio[0]?.external_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {portfolio[0]?.external_url &&
                  portfolio[0]?.external_url.includes('dzen.ru') ? (
                    <>
                      <Image src={dzen} alt="dzen" /> Дзен
                    </>
                  ) : (
                    <>
                      <Image src={youtube} alt="youtube" /> Youtube
                    </>
                  )}
                </a>
              </div>
              <p className={s.name}>{portfolio[0]?.header}</p>
              <div
                dangerouslySetInnerHTML={{ __html: portfolio[0]?.text }}
                className={s.text}
              />
            </div>
          )}

          <div className={s.block_1_2_wrapper}>
            {portfolio && portfolio[1] && (
              <div className={s.block_2}>
                <div className={s.image}>
                  <Image src={portfolio[1]?.picture_path} alt="picture" />
                  <a
                    href={portfolio[1]?.external_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {portfolio[1]?.external_url &&
                    portfolio[1]?.external_url.includes('dzen.ru') ? (
                      <>
                        <Image src={dzen} alt="dzen" /> Дзен
                      </>
                    ) : (
                      <>
                        <Image src={youtube} alt="youtube" /> Youtube
                      </>
                    )}
                  </a>
                </div>
                <p className={s.name}>{portfolio[1]?.header}</p>
              </div>
            )}

            {portfolio && portfolio[2] && (
              <div className={s.block_3}>
                <div className={s.image}>
                  <Image src={portfolio[2]?.picture_path} alt="picture" />
                  <a
                    href={portfolio[2]?.external_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {portfolio[2]?.external_url &&
                    portfolio[2]?.external_url.includes('dzen.ru') ? (
                      <>
                        <Image src={dzen} alt="dzen" /> Дзен
                      </>
                    ) : (
                      <>
                        <Image src={youtube} alt="youtube" /> Youtube
                      </>
                    )}
                  </a>
                </div>
                <p className={s.name}>{portfolio[2]?.header}</p>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SectionN;
