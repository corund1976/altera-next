import { useRef, useState } from 'react';
import Link from 'next/link';

import RouteNames from '@/app/routes';

import useOutsideClick from '@/hooks/useOutsideClick';

import Dropdown from '@/images/dropdown.react.svg';

import s from './nav.module.css';

function Nav() {
  const submenuRef = useRef(null);

  const [displaySubmenu, setDisplaySubmenu] = useState(false);
  const toggleSubmenu = () => setDisplaySubmenu(!displaySubmenu);

  useOutsideClick(submenuRef, toggleSubmenu, displaySubmenu);

  const btnSubmenuStyle = displaySubmenu ? s.btn_submenu : s.btn_submenu_hidden;

  return (
    <nav className={s.nav}>
      <div className={s.submenu_wrapper} ref={submenuRef}>
        <button
          type="button"
          onClick={toggleSubmenu}
          className={btnSubmenuStyle}
        >
          Покупка <Dropdown />
        </button>
        <div className={displaySubmenu ? s.submenu : s.submenu_hidden}>
          <Link
            href={RouteNames.BUY_PRIMARY}
            onClick={toggleSubmenu}
            className={s.link}
          >
            квартиры в новостройке
          </Link>
          <Link
            href={RouteNames.BUY_SECONDARY}
            onClick={toggleSubmenu}
            className={s.link}
          >
            вторичное жилье
          </Link>
          <Link
            href={RouteNames.BUY_SUBURBAN}
            onClick={toggleSubmenu}
            className={s.link}
          >
            дом с участком
          </Link>
        </div>
      </div>
      <Link href={RouteNames.SELL_RESIDENCE} className={s.link}>
        Продажа
      </Link>
      <Link href={RouteNames.RENT_RESIDENCE} className={s.link}>
        Аренда
      </Link>
      <Link href={RouteNames.COMMERCIAL_RESIDENCE} className={s.link}>
        Коммерческая недвижимость
      </Link>
      <Link href={RouteNames.CAREER} className={s.link}>
        Партнерство
      </Link>
    </nav>
  );
}

export default Nav;
