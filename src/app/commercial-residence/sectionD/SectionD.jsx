'use client';

import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isValidPhoneNumber } from 'libphonenumber-js';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Image from 'next/image';

import dataSelectors from '@/redux//data/dataSelectors';

import { setSendFeedback } from '@/redux//data/dataSlice';

import dataOperations from '@/redux//data/dataOperations';

import convertPhoneNumber from '@/utils/convertPhoneNumber ';

import picture from '@/images/main/sectionK/picture.webp';
import ArrowIcon from '@/images/arrow.react.svg';

import s from './sectionD.module.css';

const policyUrl = 'ПОЛИТИКА_В_ОТНОШЕНИИ_ОБРАБОТКИ_ПЕРСОНАЛЬНЫХ_ДАННЫХ.pdf';
const fileName = 'Альтера - Каталог коммерческая недвижимость.pdf';

function SectionD() {
  const dispatch = useDispatch();

  const fileUrl = useSelector(dataSelectors.downloadUrls)?.commercial_pdf_url;
  const sendFeedback = useSelector(dataSelectors.sendFeedback);

  const btnSubmitRef = useRef(null);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isNameFocus, setIsNameFocus] = useState(false);
  const [checked, setChecked] = useState(true);

  const handleClickPhone = (e) => {
    const value = e.target.value;
    if (value?.length === 0) setPhone('+7');
    return;
  };

  const handleChangePhone = (e) => {
    const value = e.target.value;

    // eslint-disable-next-line no-useless-escape
    const pattern = /^((8|\+|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{0,10}$/;

    if (!pattern.test(value)) {
      Notify.warning('Введите номер телефона в указанном формате');
      return;
    }

    setPhone(convertPhoneNumber(value));
  };

  const handleChangeName = (e) => setName(e.target.value);

  const handleCheck = () => setChecked(!checked);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // блокировка повторного нажатия в течение 2 сек
    if (btnSubmitRef.current.cantClick) return;

    btnSubmitRef.current.cantClick = true;

    const delayedAction = setTimeout(() => {
      btnSubmitRef.current.cantClick = false;
      clearTimeout(delayedAction);
    }, 2000);
    // конец блокировка повторного нажатия в течение 2 сек

    if (!phone) {
      Notify.warning('Введите телефон');
      return;
    }

    if (!isValidPhoneNumber(phone, 'RU')) {
      Notify.warning('Введите телефон в указанном формате');
      return;
    }

    if (!name) {
      Notify.warning('Введите имя');
      return;
    }

    if (!checked) {
      Notify.warning('Подтвердите согласие на обработку персональных данных');
      return;
    }

    downloadFile();

    const data = {
      phone: phone.replaceAll(' ', '').replaceAll('+', ''),
      name: name.trim(),
      context: 'commercial_catalog',
    };

    dispatch(dataOperations.sendFeedback(data));
  };

  const downloadFile = () => {
    if (!document) return;

    const anchor = document.createElement('a');
    document.body.appendChild(anchor);

    fetch(fileUrl)
      .then((response) => response.blob())
      .then((blobby) => {
        const objectUrl = window.URL.createObjectURL(blobby);

        anchor.href = objectUrl;
        anchor.download = fileName;
        anchor.click();

        window.URL.revokeObjectURL(objectUrl);
      });

    document.body.removeChild(anchor);
  };

  useEffect(() => {
    dispatch(setSendFeedback(''));
  }, [dispatch]);

  useEffect(() => {
    if (!fileUrl) dispatch(dataOperations.getDownloadUrls());
  }, [dispatch, fileUrl]);

  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.block}>
          <Image src={picture} alt="picture" className={s.form_picture} />
          {sendFeedback === 'commercial_catalog' ? (
            <div>
              <p className={s.success_title}>Благодарим за заявку!</p>
              <p className={s.success_text}>
                Мы свяжемся с вами в ближайшее время
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={s.form}>
              <p className={s.title}>Скачайте</p>
              <p className={s.text}>
                эксклюзивный каталог коммерческой недвижимости
              </p>
              <label htmlFor="downloadInputPhone" className={s.label_phone}>
                <p>Телефон</p>
                <input
                  type="text"
                  id="downloadInputPhone"
                  value={phone}
                  onChange={handleChangePhone}
                  onClick={handleClickPhone}
                  placeholder="+7 999 123 45 67"
                  autoComplete="off"
                  maxLength={15}
                />
              </label>
              <label htmlFor="downloadInputName" className={s.label_name}>
                <p>Имя</p>
                <input
                  type="text"
                  id="downloadInputName"
                  value={name}
                  onChange={handleChangeName}
                  onFocus={() => setIsNameFocus(true)}
                  onBlur={() => setIsNameFocus(false)}
                  placeholder={isNameFocus ? '' : 'Александр'}
                  autoComplete="off"
                  maxLength={50}
                />
              </label>
              <div className={s.check_submit_wrapper}>
                <button
                  type="submit"
                  ref={btnSubmitRef}
                  className={s.btn_submit}
                >
                  скачать <ArrowIcon />
                </button>
                <div className={s.check}>
                  <button
                    type="button"
                    onClick={handleCheck}
                    className={checked ? s.checked : null}
                    aria-label="check"
                  />
                  <p>
                    Я согласен на обработку предоставленных персональных данных
                    в соответствии с{' '}
                    <a
                      href={policyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      политикой обработки персональных данных
                    </a>
                  </p>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default SectionD;
