'use client';

import { useState } from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

import useMatchMedia from '@/hooks/useMatchMedia';

import CloseIcon from '@/images/main/sectionO/close.react.svg';
import ArrowIcon from '@/images/main/sectionK/arrow.react.svg';

import Container from '@/components/container';

import list from './list';
import s from './sectionContacts.module.css';

const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP;
const TELEGRAM = process.env.NEXT_PUBLIC_TELEGRAM;

function SectionContacts() {
  const [displayDetails, setDisplayDetails] = useState(false);

  const { isMobile = true } = useMatchMedia();

  return (
    <section className={s.section}>
      <Container>
        <div className={s.map_contacts_wrapper}>
          <div className={s.map}>
            <YMaps>
              <Map
                defaultState={{
                  center: [55.8, 49.14],
                  zoom: isMobile ? 12 : 13,
                }}
                width="100%"
                height="100%"
              >
                {list.map(
                  ({
                    id,
                    coords,
                    phone,
                    address,
                    schedule,
                    navigate,
                    badge,
                    offsetMob,
                    offsetDsk,
                  }) => (
                    <Placemark
                      key={id}
                      geometry={coords}
                      onClick={() =>
                        setDisplayDetails({
                          phone,
                          address,
                          schedule,
                          navigate,
                        })
                      }
                      options={{
                        iconLayout: 'default#image',
                        iconImageHref: badge,
                        iconImageSize: isMobile ? [66, 24] : [94, 34],
                        iconImageOffset: isMobile ? offsetMob : offsetDsk,
                      }}
                    />
                  ),
                )}
              </Map>
            </YMaps>
          </div>

          <div className={s.contacts_wrapper}>
            {displayDetails && (
              <div className={s.details}>
                <div className={s.details_header}>
                  <p className={s.btn_contacts}>Контакты</p>
                  <a
                    href={displayDetails.navigate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={s.btn_navigation}
                  >
                    Как добраться
                  </a>
                  <button
                    type="button"
                    onClick={() => setDisplayDetails(null)}
                    className={s.btn_close}
                  >
                    <CloseIcon />
                  </button>
                </div>
                <p className={s.label_contacts}>Контакты:</p>
                <p className={s.phone}>{displayDetails.phone}</p>
                <p className={s.address}>{displayDetails.address}</p>
                <p className={s.label_schedule}>График работы</p>
                <p className={s.schedule}>{displayDetails.schedule}</p>
              </div>
            )}

            <ul className={s.messengers}>
              <li>
                <a href={TELEGRAM} target="_blank" rel="noopener noreferrer">
                  Telegram
                  <ArrowIcon />
                </a>
                <p>Получить бесплатную консультацию</p>
              </li>
              <li>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                  <ArrowIcon />
                </a>
                <p>Получить бесплатную консультацию</p>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SectionContacts;
