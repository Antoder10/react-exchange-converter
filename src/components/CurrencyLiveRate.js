import React from 'react';

const CurrencyLiveRate = ({base, currentRate}) => {
  const {code, rate} = currentRate;

  return (
    <tr>
      <th scope="row">
        <img src={`https://transferwise.com/public-resources/assets/flags/rectangle/${code.toLowerCase()}.png`} />
      </th>
      <td>{code}</td>
      <td>{rate}</td>
    </tr>
  )
}

export default CurrencyLiveRate;