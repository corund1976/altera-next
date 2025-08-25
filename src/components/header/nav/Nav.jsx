import { useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import PropTypes from 'prop-types';

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
            href="/buy-primary"
            onClick={handleClick}
            className={navlinkStyle('/buy-primary')}
          >
            квартиры в новостройке
          </Link>
          <Link
            href="/buy-secondary"
            onClick={handleClick}
            className={navlinkStyle('/buy-secondary')}
          >
            вторичное жилье
          </Link>
          <Link
            href="/buy-suburban"
            onClick={handleClick}
            className={navlinkStyle('/buy-suburban')}
          >
            дом с участком
          </Link>
        </div>
      </div>
      <Link
        href="/sell-residence"
        onClick={closeMenu}
        className={navlinkStyle('/sell-residence')}
      >
        продажа
      </Link>
      <Link
        href="/rent-residence"
        onClick={closeMenu}
        className={navlinkStyle('/rent-residence')}
      >
        аренда
      </Link>
      <Link
        href="/commercial-residence"
        onClick={closeMenu}
        className={navlinkStyle('/commercial-residence')}
      >
        коммерческая недвижимость
      </Link>
      <Link
        href="/career"
        onClick={closeMenu}
        className={navlinkStyle('/career')}
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
