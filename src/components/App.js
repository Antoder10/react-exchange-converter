import React, {useState, useEffect} from 'react';

import useGetCurrencies from '../hooks/useGetCurrencies';
import useGetRate from '../hooks/useGetRate';

import ConvertededAmount from './ConvertedAmount';
import CurrenciesDropdwon from './CurrenciesDropdown';
import LiveRates from './LiveRates';

const initialValues = {
  amountToConvert: 0,
  convertedAmount: 0,
  showConvertedAmount: false,
  fromCurrency: 'EUR',
  toCurrency: 'GBP'
}

const App = () => {

  const [values, setValues] = useState(initialValues);
  const {amountToConvert, convertedAmount, showConvertedAmount, fromCurrency, toCurrency} = values;
  const [currentRate, setCurrentRate] = useGetRate();
  const [currencies, setCurrencies] = useGetCurrencies();

  useEffect(() => {
    setCurrentRate(fromCurrency, toCurrency);
  }, [fromCurrency, toCurrency]);

  const handleSubmit = e => {
    e.preventDefault();
    if(currentRate) {
      setValues({
        ...values,
        convertedAmount: (amountToConvert*currentRate).toFixed(4),
        showConvertedAmount: true,
      });
    }
  }

  const handleChanges = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
      showConvertedAmount: false
    });
  }

  return (
    <div className="container text-center">
      <div className="row">
        <div class="col-sm-9">
          <h1>Currency Converter</h1>
          <div className="convert-card">
          <form className="row g-3 justify-content-center inputs" onSubmit={handleSubmit}>
            <div className="col-auto">
              <label for="basic-url" class="form-label">Amount</label>
              <input
                type="text"
                name="amountToConvert"
                class="form-control text-center"
                value={amountToConvert}
                onChange={handleChanges}
              />
            </div>
            <CurrenciesDropdwon
              label="From"
              name="fromCurrency"
              value={fromCurrency}
              handleChanges={handleChanges}
              currencies={currencies}
            />
            <CurrenciesDropdwon
              label="To"
              name="toCurrency"
              value={toCurrency}
              handleChanges={handleChanges}
              currencies={currencies}
            />
            <button type="submit" className="btn btn-primary">Convert</button>
          </form>
          {showConvertedAmount && (
            <ConvertededAmount
              amountToConvert = {amountToConvert}
              convertedAmount = {convertedAmount}
              fromCurrency = {fromCurrency}
              toCurrency = {toCurrency}
            />
          )}
          </div>
        </div>
          <div class="col-sm-3">
            <LiveRates />
          </div>
      </div>
    </div>
  );
}

export default App;
