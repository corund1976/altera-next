'use client'

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setWindowScrollY } from '@/redux/app/appSlice';

// Сохранение величины скролла
const useWindowScrollY = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (!document) return;

    const handleScroll = () => {
      const html = document.documentElement;
      const scrollY = window.scrollY;

      html.style.setProperty('--window-scrollY', `${scrollY}px`);

      dispatch(setWindowScrollY(scrollY));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dispatch])
}

export default useWindowScrollY