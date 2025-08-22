'use client';

import { useSearchParams } from 'next/navigation';

import Case1 from './case1';
import Case2 from './case2';
import Case3 from './case3';

function Cases() {
  const searchParams = useSearchParams();
  const caseId = searchParams.get('id');

  return (
    <>
      {caseId === '1' && <Case1 />}
      {caseId === '2' && <Case2 />}
      {caseId === '3' && <Case3 />};
    </>
  );
}

export default Cases;
