import React from 'react';
import '../../node_modules/currency-flags/dist/currency-flags.css';

const CurrenciesDropdwon = ({label, name, value, handleChanges, currencies}) => {
  return (
    <div className="col-auto">
      <label for="basic-url" class="form-label">{label}</label>
      <select
        className="form-select"
        name={name}
        value={value}
        onChange={handleChanges}
      >
        {currencies.map(currency => {
          return (
            <option value={currency.key}>{currency.key} - {currency.value}</option>
          )
        })}
      </select>
    </div>
  )
}

export default CurrenciesDropdwon;