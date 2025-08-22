import { useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import PropTypes from 'prop-types';

import RouteNames from '@/app/routes';

import useOutsideClick from '@/hooks/useOutsideClick';

import Dropdown from '@/images/dropdown.react.svg';

import s from './nav.module.css';

function Nav({ closeMenu = () => {} }) {
  const pathname = usePathname();

  const submenuRef = useRef(null);

  const [displaySubmenu, setDisplaySubmenu] = useState(false);
  const toggleSubmenu = () => setDisplaySubmenu(!displaySubmenu);

  const handleClick = () => {
    setDisplaySubmenu(false);
    closeMenu();
  };

  useOutsideClick(submenuRef, toggleSubmenu, displaySubmenu);

  const btnSubmenuStyle = displaySubmenu ? s.btn_submenu : s.btn_submenu_hidden;
  const navlinkStyle = (navlinkPath) =>
    pathname === navlinkPath ? s.navlink_active : s.navlink;

  return (
    <nav className={s.nav}>
      <div className={s.submenu_wrapper} ref={submenuRef}>
        <button
          type="button"
          onClick={toggleSubmenu}
          className={btnSubmenuStyle}
        >
          покупка <Dropdown />
        </button>
        <div className={displaySubmenu ? s.submenu : s.submenu_hidden}>
          <Link
            href={RouteNames.BUY_PRIMARY}
            onClick={handleClick}
            className={navlinkStyle(RouteNames.BUY_PRIMARY)}
          >
            квартиры в новостройке
          </Link>
          <Link
            href={RouteNames.BUY_SECONDARY}
            onClick={handleClick}
            className={navlinkStyle(RouteNames.BUY_SECONDARY)}
          >
            вторичное жилье
          </Link>
          <Link
            href={RouteNames.BUY_SUBURBAN}
            onClick={handleClick}
            className={navlinkStyle(RouteNames.BUY_SUBURBAN)}
          >
            дом с участком
          </Link>
        </div>
      </div>
      <Link
        href={RouteNames.SELL_RESIDENCE}
        onClick={closeMenu}
        className={navlinkStyle(RouteNames.SELL_RESIDENCE)}
      >
        продажа
      </Link>
      <Link
        href={RouteNames.RENT_RESIDENCE}
        onClick={closeMenu}
        className={navlinkStyle(RouteNames.RENT_RESIDENCE)}
      >
        аренда
      </Link>
      <Link
        href={RouteNames.COMMERCIAL_RESIDENCE}
        onClick={closeMenu}
        className={navlinkStyle(RouteNames.COMMERCIAL_RESIDENCE)}
      >
        коммерческая недвижимость
      </Link>
      <Link
        href={RouteNames.CAREER}
        onClick={closeMenu}
        className={navlinkStyle(RouteNames.CAREER)}
      >
        партнерство
      </Link>
    </nav>
  );
}

export default Nav;

Nav.propTypes = {
  closeMenu: PropTypes.func,
};
