import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { setDisplayModal } from '@/redux/app/appSlice';

import CloseIcon from '@/images/close.svg';

import Portal from '@/ui/portal';

import s from './modal.module.css';

function Modal({ close, children }) {
  const dispatch = useDispatch();

  const [opened, setOpened] = useState(false);

  const handleClick = () => {
    setOpened(false);

    dispatch(setDisplayModal(false));

    setTimeout(() => {
      close();
    }, 300);
  };

  useEffect(() => {
    setOpened(true);
  }, []);

  useEffect(() => {
    dispatch(setDisplayModal(true));
  }, [dispatch]);

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

export default Modal;

Modal.propTypes = {
  close: PropTypes.func,
  children: PropTypes.node,
};
