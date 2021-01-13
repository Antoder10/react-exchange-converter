import { useState, useEffect } from 'react';

import ExchangeRates from '../api/ExchangeRates';

const useGetCurrencies = () => {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    fetchExchangeRates();
  }, []);

  const fetchExchangeRates = async () => {
    const response = await ExchangeRates.get('');
    const currencies = ['EUR'];
    for (const [key] of Object.entries(response.data.rates)) {
      currencies.push(key);
    }
    setCurrencies(currencies);
  };

  return [currencies, fetchExchangeRates];
}

export default useGetCurrencies;