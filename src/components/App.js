import React, {useState, useEffect} from 'react';

import useGetCurrencies from '../hooks/useGetCurrencies';
import useGetRate from '../hooks/useGetRate';

import ConvertededAmount from './ConvertedAmount';
import CurrenciesDropdwon from './CurrenciesDropdown';

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
        convertedAmount: (amountToConvert*currentRate).toFixed(5),
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
      <h1>Currency Converter</h1>
      <form className="row row-cols-lg-auto g-4 justify-content-center inputs" onSubmit={handleSubmit}>
        <div className="col-auto">
          <label for="basic-url" class="form-label">Amount</label>
          <input
            type="text"
            name="amountToConvert"
            class="form-control"
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
        <div className="row row-cols-lg-auto g-4 justify-content-center">
          <button type="submit" className="btn btn-primary">Convert</button>
        </div>
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
  );
}

export default App;
