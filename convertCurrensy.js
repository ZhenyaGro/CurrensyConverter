'use strict';

getCurrenciesRates();

async function getCurrenciesRates() {
  let currentRates = await fetch(/* Here will be API */);
  let curData = await currentRates.json();
  let currenciesJson = await curData;
} // Need to add checking of errors

function convertCurrensy(value) {
  document.getElementById('outputCurrency').innerHTML = value /* * Rate of currency */;
}