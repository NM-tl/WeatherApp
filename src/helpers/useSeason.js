import { useState, useEffect, useMemo } from 'react';

const useSeason = () => {
  const [season, setSeason] = useState('');

  const memoizedDate = useMemo(() => new Date(), []);

  useEffect(() => {
    const currMonthNumber = memoizedDate.getMonth();

    if (currMonthNumber >= 5 && currMonthNumber <= 7) {
      setSeason('summer');
    } else if (currMonthNumber >= 8 && currMonthNumber <= 10) {
      setSeason('autumn');
    } else if (currMonthNumber >= 2 && currMonthNumber <= 4) {
      setSeason('spring');
    } else {
      setSeason('winter');
    }
  }, [memoizedDate]);

  return { season, memoizedDate };
};

export default useSeason;
