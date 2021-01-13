import { useState, useEffect, useRef } from 'react';

import ExchangeRates from '../api/ExchangeRates';

const useGetRate = () => {
  const [exchangeRate, setExchangeRate] = useState(0);

  const fetchExchangeRate = async (base, symbols) => {
    const response = await ExchangeRates.get('', { params: {
      base,
      symbols
    }});
    const fetchedExchangeRate = response.data.rates[symbols];
    if(fetchedExchangeRate) setExchangeRate(fetchedExchangeRate);
  };

  return [exchangeRate, fetchExchangeRate];
}

export default useGetRate;