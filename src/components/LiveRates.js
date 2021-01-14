import React, {useState, useEffect} from 'react';

import useGetLiveRates from '../hooks/useGetLiveRates';

import CurrencyLiveRate from './CurrencyLiveRate';

const LiveRates = () => {
  const [currentRates, setCurrentRates] = useGetLiveRates();

  return (
    <>
      <h2>Live Exchange Rates</h2>
      <table className="table table-sm table-striped table-hover table-borderless align-middle">
        <thead className="table-dark align-middle">
          <tr>
            <th scope="row">
              <img src={`https://transferwise.com/public-resources/assets/flags/rectangle/eur.png`} />
            </th>
            <th scope="col">EUR</th>
            <th scope="col">1</th>
          </tr>
        </thead>
        <tbody>
          {currentRates.map(currentRate => {
            if(currentRate.code) {
              return (
                <CurrencyLiveRate currentRate={currentRate}/>
              )
            }
          })}
        </tbody>
      </table>
    </>
  )
}

export default LiveRates;