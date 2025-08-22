import Portal from '@/ui/portal';

import TailSpin from './tailSpin';

import s from './loaderSpinner.module.css';

function LoaderSpinner() {
  return (
    <Portal>
      <div className={s.loader_wrapper}>
        <TailSpin
          color="#005df3"
          height={100}
          width={100}
          ariaLabel="loading"
        />
      </div>
    </Portal>
  );
}

export default LoaderSpinner;
