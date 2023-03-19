'use strict';
// Free api (1500 requests available) https://app.exchangerate-api.com/dashboard/confirmed

// Let constants and make the listeners
const elCurrencyFrom = document.querySelector('.currency-from');
const elCurrencyTo = document.querySelector('.currency-to');
const elAmountFrom = document.querySelector('.amount-from');
const elAmountTo = document.querySelector('.amount-to');

const rateEl = document.querySelector('.rate');
const swap = document.querySelector('.button_swap');

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
//setLanguage();
fillCurrencies();
getCurrenciesRates();



// Testing of numpad, buttons click
const numpad = new Numpad();