import Link from 'next/link';

import RouteNames from '@/app/routes';

import CloseIcon from '@/images/close.react.svg';

import s from './linkBack.module.css';

function LinkBack() {
  return (
    <Link href={`${RouteNames.MAIN}?scrollCases=true`} className={s.btn_close}>
      <CloseIcon />
    </Link>
  );
}

export default LinkBack;
