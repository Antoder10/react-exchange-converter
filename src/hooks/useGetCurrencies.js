import { useState, useEffect } from 'react';

import ExchangeRates from '../api/ExchangeRates';
import OpenExchangeRates from '../api/OpenExchangeRates';

const useGetCurrencies = () => {
  const [currenciesCodes, setCurrenciesCodes] = useState([]);
  const [currenciesNames, setCurrenciesNames] = useState([]);
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    fetchExchangeRates();
    fetchCurrenciesDetails();
  }, []);

  useEffect(() => {
    filterCurrencies(currenciesCodes, currenciesNames);
  }, [currenciesCodes, currenciesNames])


  const fetchExchangeRates = async () => {
    const response = await ExchangeRates.get('');
    const currencies = ['EUR'];
    const rates = [{code: 'EUR', rate: 1}]
    for (const [key] of Object.entries(response.data.rates)) {
      currencies.push(key);
    }
    setCurrenciesCodes(currencies);
  };

  const fetchCurrenciesDetails = async () => {
    const response = await OpenExchangeRates.get('currencies.json');
    const currenciesNames = [];
    for (const [key, value] of Object.entries(response.data)) {
      currenciesNames.push({key, value});
    }
    setCurrenciesNames(currenciesNames);
  };

  const filterCurrencies = (currenciesCodes, currenciesNames) => {
    if(currenciesCodes.length && currenciesNames.length) {
      const currenciesList = currenciesNames.filter(currenciesName => currenciesCodes.includes(currenciesName.key));
      setCurrencies(currenciesList);
    }
  }

  return [currencies, fetchExchangeRates];
}

export default useGetCurrencies;