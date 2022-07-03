'use strict';
// Free api (1500 requests available) https://app.exchangerate-api.com/dashboard/confirmed

const elCurrencyFrom = document.getElementById('currencyFrom');
const elCurrencyTo = document.getElementById('currencyTo');
const elAmountFrom = document.getElementById('amountFrom');
const elAmountTo = document.getElementById('amountTo');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

function getCurrenciesRates() {

  let currencyFrom = elCurrencyFrom.value;
  let currencyTo = elCurrencyTo.value;

  fetch(`https://v6.exchangerate-api.com/v6/7fd52bbd6cb5e9fff6ab9110/latest/${currencyFrom}`)
    .then(response => response.json())
    .then(data => {
      let rate = data.conversion_rates[currencyTo];
      rateEl.innerText = `1 ${currencyFrom} = ${rate} ${currencyTo}`;

      elAmountTo.value = (elAmountFrom.value * rate).toFixed(2);
    })
    .catch(error => console.log('Error of getting rates')); // Need to improve

} // Need to add checking of errors (Internet connection or ran out of API requests)

elCurrencyFrom.addEventListener('change', getCurrenciesRates);
elCurrencyTo.addEventListener('change', getCurrenciesRates);
elAmountFrom.addEventListener('input', getCurrenciesRates);
elAmountTo.addEventListener('input', getCurrenciesRates);

swap.addEventListener('click', () => {
  const temp = elCurrencyFrom.value;
  elCurrencyFrom.value = elCurrencyTo.value;
  elCurrencyTo.value = temp;
  getCurrenciesRates();
})

getCurrenciesRates();