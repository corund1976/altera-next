'use client';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import appSelectors from '@/redux/app/appSelectors';

import { setDisplayMenu } from '@/redux/app/appSlice';

import useMatchMedia from '@/hooks/useMatchMedia';

import LogoIcon from '@/images/logo-altera.react.svg';
import ArrowUpIcon from '@/images/header/arrow-up.react.svg';

import ArrowUpRightIcon from '@/images/arrow-top-right.react.svg';
import BurgerIcon from '@/images/header/burger.react.svg';
import PhoneIcon from '@/images/header/phone.react.svg';

import Container from '@/components/container';

import Menu from './menu';
import Nav from './nav';

import s from './header.module.css';

const PHONE = process.env.NEXT_PUBLIC_PHONE;

function Header() {
  const dispatch = useDispatch();

  const displayMenu = useSelector(appSelectors.displayMenu);

  const pathname = usePathname();

  const [form, setForm] = useState(null);

  const toggleMenu = () => dispatch(setDisplayMenu(!displayMenu));

  const scrollTop = () => {
    if (pathname === '/')
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
  };

  const handleFeedback = () => {
    form.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  };

  useEffect(() => {
    if (!document) return;

    const formElement = document.getElementById('form');

    if (!formElement) return;

    setForm(formElement);
  }, [pathname]);

  const { isDesktop = true } = useMatchMedia();

  return (
    <>
      <header className={s.header}>
        <Container>
          <Link href="/" onClick={scrollTop} className={s.logo}>
            {isDesktop ? (
              <ArrowUpIcon width={47} height={26} />
            ) : (
              <LogoIcon className={s.logo_mob} />
            )}
          </Link>
          <a href={`tel:${PHONE}`} className={s.link_phone}>
            <PhoneIcon />
            <span>{PHONE}</span>
          </a>
          {isDesktop && <Nav />}

          <div className={s.btn_feedback}>
            <button type="button" onClick={handleFeedback}>
              обратный звонок <ArrowUpRightIcon />
            </button>
          </div>

          <button
            type="button"
            onClick={toggleMenu}
            className={s.btn_menu}
            title="menu"
          >
            <BurgerIcon />
          </button>
        </Container>
      </header>

      {displayMenu && <Menu close={toggleMenu} />}
    </>
  );
}

export default Header;
