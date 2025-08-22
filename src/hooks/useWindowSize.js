'use client'

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setScreenHeight, setScreenWidth } from '@/redux/app/appSlice';

// Сохранение размеров вьюпорта
const useWindowSize = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (!document) return;

    const handleResize = () => {
      const html = document.documentElement;

      const height = window.innerHeight

      html.style.setProperty('--window-height', `${height}px`);
      dispatch(setScreenHeight(height));

      const width = window.innerWidth

      html.style.setProperty('--window-width', `${width}px`);
      dispatch(setScreenWidth(width));
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () =>
      window.removeEventListener('resize', handleResize);
  }, [dispatch])
}

export default useWindowSize