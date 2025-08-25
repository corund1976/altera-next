/* eslint-disable @next/next/no-img-element */
import { useSelector } from 'react-redux';

import dataSelectors from '@/redux/data/dataSelectors';

import s from './tickerPartners.module.css';

function TickerPartners() {
  const banks = useSelector(dataSelectors.banks);
  const developers = useSelector(dataSelectors.developers);

  return (
    <div className={s.ticker_wrapper}>
      {developers?.length > 0 && (
        <div className={s.ticker_first}>
          <div>
            {developers.map(({ id, picture_path }) => (
              <img key={id} alt="developer" src={picture_path} />
            ))}
          </div>
          <div aria-hidden="true">
            {developers.map(({ id, picture_path }) => (
              <img key={id} alt="developer" src={picture_path} />
            ))}
          </div>
        </div>
      )}
      {banks?.length > 0 && (
        <div className={s.ticker_second}>
          <div>
            {banks.map(({ id, picture_path }) => (
              <img key={id} alt="bank" src={picture_path} />
            ))}
          </div>
          <div aria-hidden="true">
            {banks.map(({ id, picture_path }) => (
              <img key={id} alt="bank" src={picture_path} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default TickerPartners;
