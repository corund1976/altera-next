'use client'

import { useLayoutEffect, useState } from 'react'

const queries = [
  '(max-width: 1439px)',
  '(min-width: 1440px)',
]

const init = [
  { media: '(max-width: 1439px)', matches: false, onchange: null },
  { media: '(min-width: 1440px)', matches: true, onchange: null }
]

const useMatchMedia = () => {
  const mediaQueryLists = typeof window !== 'undefined'
    ? queries.map(query => matchMedia(query))
    : init;

  const getValues = () => mediaQueryLists.map(({ matches }) => matches)

  const [values, setValues] = useState(getValues)

  useLayoutEffect(() => {
    const handler = () => setValues(getValues)

    mediaQueryLists
      .forEach(mql => mql.addEventListener('change', handler))

    return () => mediaQueryLists
      .forEach(mql => mql.removeEventListener('change', handler))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return ['isMobile', 'isDesktop']
    .reduce((acc, screen, index) => ({ ...acc, [screen]: values[index], }), {})
}

export default useMatchMedia