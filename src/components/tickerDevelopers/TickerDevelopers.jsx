// import { useSelector } from 'react-redux';

// import dataSelectors from '@/redux/data/dataSelectors';

import s from './tickerDevelopers.module.css';

function TickerDevelopers() {
  // const statistics = useSelector(dataSelectors.statistics);

  return (
    <div className={s.ticker_wrapper}>
      <div className={s.ticker_first}>
        <p>
          {' '}
          <br />1
        </p>
      </div>
      <div className={s.ticker_second}>
        <p>
          1<br />2<br />3<br />4<br />5<br />6<br />7<br />8<br />9<br />
          0<br />1<br />2<br />3<br />4<br />5
        </p>
      </div>
    </div>
  );
}

export default TickerDevelopers;
