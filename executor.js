'use strict';
// Free api (1500 requests available) https://app.exchangerate-api.com/dashboard/confirmed

// Let constants and make the listeners
const elCurrencyFrom = document.getElementById('currencyFrom');
const elCurrencyTo = document.getElementById('currencyTo');
const elAmountFrom = document.getElementById('amountFrom');
const elAmountTo = document.getElementById('amountTo');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

elCurrencyFrom.addEventListener('change', getCurrenciesRates);
elCurrencyTo.addEventListener('change', getCurrenciesRates);
elAmountFrom.addEventListener('input', getCurrenciesRates);
elAmountTo.addEventListener('input', getCurrenciesRates);
swap.addEventListener('click', () => {
  const temp = elCurrencyFrom.value;
  elCurrencyFrom.value = elCurrencyTo.value;
  elCurrencyTo.value = temp;
  getCurrenciesRates();
});

// Execute functions
setLanguage();
fillCurrencies();
getCurrenciesRates();