import React from 'react';

const ConvertededAmount = ({amountToConvert, convertedAmount, fromCurrency, toCurrency}) => {
  return (
    <h1>{amountToConvert} {fromCurrency} = {convertedAmount} {toCurrency}</h1>
  )
}

export default ConvertededAmount;