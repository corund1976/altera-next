'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import appSelectors from '@/redux/app/appSelectors';

import dataOperations from '@/redux/data/dataOperations';

import useBlockScroll from '@/hooks/useBlockScroll';
import useTheme from '@/hooks/useTheme';
import useWindowScrollY from '@/hooks/useWindowScrollY';
import useWindowSize from '@/hooks/useWindowSize';

import LoaderSpinner from '@/components/loaderSpinner';

function AppInit() {
  const dispatch = useDispatch();

  const displayLoader = useSelector(appSelectors.displayLoader);

  useTheme();
  useWindowSize();
  useWindowScrollY();
  // Запрет скролла при открытии меню/модалки
  useBlockScroll();

  useEffect(() => {
    dispatch(dataOperations.getHistory());
    dispatch(dataOperations.getStatistics());
    dispatch(dataOperations.getPartners());
    dispatch(dataOperations.getReviews());
    dispatch(dataOperations.getTeam());
    dispatch(dataOperations.getPortfolio());
    dispatch(dataOperations.getCareer());
  }, [dispatch]);

  useEffect(() => {
    Notify.init({
      borderRadius: '12px',
      fontFamily: 'Helvetica',
      fontSize: '14px',
      timeout: 5000,
      useFontAwesome: true,
      success: {
        background: '#22232b',
        textColor: '#787e95',
        fontAwesomeClassName: 'fas fa-check-circle',
        fontAwesomeIconColor: '#fdfdfd',
      },
      failure: {
        background: '#22232b',
        textColor: '#787e95',
        fontAwesomeClassName: 'fa fa-times-circle',
        fontAwesomeIconColor: '#f2d280',
      },
      warning: {
        background: '#22232b',
        textColor: '#787e95',
        fontAwesomeClassName: 'fa fa-info-circle',
        fontAwesomeIconColor: '#e5a500',
      },
    });
  }, []);

  return <>{displayLoader && <LoaderSpinner />}</>;
}

export default AppInit;
