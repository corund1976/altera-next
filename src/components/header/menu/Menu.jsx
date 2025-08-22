'use client'

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import PropTypes from 'prop-types';

import Logo from '@/images/logo-altera.react.svg';
import ArrowIcon from '@/images/arrow-top-right.react.svg';
import CloseIcon from '@/images/header/close.react.svg';

import Portal from '@/ui/portal';

import Nav from '../nav';

import s from './menu.module.css';

const EMAIL = process.env.NEXT_PUBLIC_EMAIL;
const PHONE = process.env.NEXT_PUBLIC_PHONE;

function Menu({ close }) {
  const pathname = usePathname();

  const [form, setForm] = useState(null);

  const [opened, setOpened] = useState(false);

  const hideMenu = () => {
    setOpened(false);

    const delayedAction = setTimeout(() => {
      close();

      clearTimeout(delayedAction);
    }, 300);
  };

  const handleFeedback = () => {
    hideMenu();

    form.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  };

  useEffect(() => {
    setOpened(true);
  }, []);

  useEffect(() => {
    if (!document) return;

    const formElement = document.getElementById('form');

    if (!formElement) return;

    setForm(formElement);
  }, [pathname]);

  const backdropStyles = opened ? s.backdrop : s.backdrop_hidden;
  const menuStyles = opened ? s.menu : s.menu_hidden;

  return (
    <Portal>
      <div className={backdropStyles}>
        <div className={menuStyles}>
          <div className={s.menu_header}>
            <Link href="/" onClick={hideMenu} className={s.logo}>
              <Logo />
            </Link>
            <button
              type="button"
              onClick={hideMenu}
              className={s.btn_close}
              title="close"
            >
              <CloseIcon />
            </button>
          </div>

          <Nav closeMenu={hideMenu} />

          <button
            type="button"
            onClick={handleFeedback}
            className={s.btn_feedback}
          >
            обратный звонок <ArrowIcon />
          </button>
          <a href={`mailto:${EMAIL}`} className={s.email}>
            {EMAIL}
          </a>
          <a href={`tel:${PHONE}`} className={s.phone}>
            {PHONE}
          </a>
          <a
            href="ПОЛИТИКА_В_ОТНОШЕНИИ_ОБРАБОТКИ_ПЕРСОНАЛЬНЫХ_ДАННЫХ.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={hideMenu}
            className={s.policy_link}
          >
            Политика конфиденциальности
          </a>
          <div className={s.copyright}>2002&#8213;2025 © Альтера</div>
        </div>
      </div>
    </Portal>
  );
}

export default Menu;

Menu.propTypes = {
  close: PropTypes.func.isRequired,
};
