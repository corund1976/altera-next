import { useEffect } from 'react'

import useLatest from '@/hooks/useLatest'

const useInsideClick = (elementRef, handler, isVisible = true) => {
  const latestHandler = useLatest(handler)

  useEffect(() => {
    if (!isVisible) return

    const handleClick = (e) => {
      if (!elementRef.current) return
      if (elementRef.current.contains(e.target)) latestHandler.current()
    }

    window.addEventListener('click', handleClick)

    return () => window.removeEventListener('click', handleClick)
  }, [elementRef, latestHandler, isVisible])
}

export default useInsideClick