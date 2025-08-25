'use client'

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { usePathname } from 'next/navigation';

import { setTheme } from "@/redux/app/appSlice";

const useTheme = () => {
  const dispatch = useDispatch();

  const pathname = usePathname();

  useEffect(() => {
    if (!document) return;

    if (pathname.includes('/commercial-residence')) {
      dispatch(setTheme('dark'));
      document.documentElement.dataset.theme = 'dark';
    }
    else {
      dispatch(setTheme('light'));
      document.documentElement.dataset.theme = 'light';
    }
  }, [dispatch, pathname]);
}

export default useTheme