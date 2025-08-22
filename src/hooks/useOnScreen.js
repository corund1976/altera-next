import { useEffect, useState, useRef } from 'react';

export default function useOnScreen(ref) {
  const observerRef = useRef(null);

  const [isOnScreen, setIsOnScreen] = useState(false);

  useEffect(() => {
    // if (!observerRef.current) return

    observerRef.current = new IntersectionObserver(([entry]) =>
      setIsOnScreen(entry.isIntersecting)
    );
  }, []);

  useEffect(() => {
    // if (!observerRef.current) return
    if (!ref.current) return

    observerRef.current.observe(ref.current);

    return () => {
      observerRef.current.disconnect();
    };
  }, [ref, observerRef]);

  return isOnScreen;
}
