import Link from 'next/link';

import CloseIcon from '@/images/close.react.svg';

import s from './linkBack.module.css';

function LinkBack() {
  return (
    <Link href="/?scrollCases=true" className={s.btn_close}>
      <CloseIcon />
    </Link>
  );
}

export default LinkBack;
