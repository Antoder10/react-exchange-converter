import { useState, useEffect, useRef } from 'react';

import ExchangeRates from '../api/ExchangeRates';

const useGetRate = () => {
  const [exchangeRate, setExchangeRate] = useState(0);
  const isFirstRun = useRef(true);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    else {
      fetchExchangeRate();
    }
  }, []);

  const fetchExchangeRate = async (base, symbols) => {
    const response = await ExchangeRates.get('', { params: {
      base,
      symbols
    }});
    const fetchedExchangeRate = response.data.rates[symbols]
    if(fetchedExchangeRate) setExchangeRate(fetchedExchangeRate);
  };

  return [exchangeRate, fetchExchangeRate];
}

export default useGetRate;