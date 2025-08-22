'use client';

import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import appSelectors from '@/redux/app/appSelectors';

// Запрет скролла при открытии меню/модалки
const useBlockScroll = () => {
  const displayLoader = useSelector(appSelectors.displayLoader);
  const displayModal = useSelector(appSelectors.displayModal);
  const displayMenu = useSelector(appSelectors.displayMenu);

  useEffect(() => {
    if (!document) return;

    if (displayLoader || displayModal || displayMenu)
      document.body.style.overflow = 'hidden';
    else
      document.body.style.overflow = 'unset';

  }, [displayLoader, displayModal, displayMenu])
}

export default useBlockScroll