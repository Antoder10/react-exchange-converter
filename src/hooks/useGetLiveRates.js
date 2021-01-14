import {useState, useEffect} from 'react';

import ExchangeRates from '../api/ExchangeRates';

const useGetLiveRates = () => {
  const [liveRates, setLiveRates] = useState([]);

  useEffect(() => {
    fetchLiveRates();
  }, []);

  const fetchLiveRates = async () => {
    const response = await ExchangeRates.get('');
    const liveRates = [{base: 'EUR', value: 1}];
    for (const [key, value] of Object.entries(response.data.rates)) {
      liveRates.push({code: key, rate: value});
    }
    setLiveRates(liveRates);
  };

  return [liveRates, fetchLiveRates];
}

export default useGetLiveRates;