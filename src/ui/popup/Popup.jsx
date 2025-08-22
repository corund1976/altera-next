import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import CloseIcon from '@/images/close.svg';

import Portal from '@/ui/portal';

import s from './popup.module.css';

function Popup({ close, children }) {
  const [opened, setOpened] = useState(false);

  const handleClick = () => {
    setOpened(false);
    setTimeout(() => {
      close();
    }, 300);
  };

  useEffect(() => {
    setOpened(true);
  }, []);

  const backdropStyles = opened ? s.backdrop_active : s.backdrop;
  const modalStyles = opened ? s.modal_active : s.modal;

  return (
    <Portal>
      <div className={backdropStyles} onClick={handleClick}>
        <div className={modalStyles} onClick={(e) => e.stopPropagation()}>
          <button type="button" onClick={handleClick} className={s.btn_close}>
            <CloseIcon />
          </button>
          {children}
        </div>
      </div>
    </Portal>
  );
}

export default Popup;

Popup.propTypes = {
  close: PropTypes.func,
  children: PropTypes.node,
};
