import { useSelector } from 'react-redux';
import Image from 'next/image';

import dataSelectors from '@/redux/data/dataSelectors';

import s from './tickerPartners.module.css';

function TickerPartners() {
  const banks = useSelector(dataSelectors.banks);
  const developers = useSelector(dataSelectors.developers);

  return (
    <div className={s.ticker_wrapper}>
      {developers && (
        <div className={s.ticker_first}>
          <div>
            {developers.map(({ id, picture_path }) => (
              <Image key={id} alt="developer" src={picture_path} />
            ))}
          </div>
          <div aria-hidden="true">
            {developers.map(({ id, picture_path }) => (
              <Image key={id} alt="developer" src={picture_path} />
            ))}
          </div>
        </div>
      )}
      {banks && (
        <div className={s.ticker_second}>
          <div>
            {banks.map(({ id, picture_path }) => (
              <Image key={id} alt="bank" src={picture_path} />
            ))}
          </div>
          <div aria-hidden="true">
            {banks.map(({ id, picture_path }) => (
              <Image key={id} alt="bank" src={picture_path} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default TickerPartners;
