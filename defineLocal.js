'use strict';

const userLanguage = window.navigator.language.substr(0, 2);
let docLanguage = document.getElementsByTagName('html')[0].getAttribute('lang')
/*
if (docLanguage == 'ru' && userLanguage != 'ru') {
  if (confirm(`Your browser's language is "${userLanguage}".
  Would you like to move to english page?`)) {
    window.location.href = 'index_en.html';
  }
} else if (docLanguage != 'ru' && userLanguage == 'ru') {
  if (confirm(`Язык Вашего браузера "русский".
  Перейти на страницу с русским переводом?`)) {
    window.location.href = 'index.html';
  }
}
*/

switch (userLanguage) {
  case 'ru':
    elCurrencyFrom.value = 'RUB';
    elCurrencyTo.value = 'USD';
    getCurrenciesRates();
    break;

  case 'en':
    elCurrencyFrom.value = 'USD';
    elCurrencyTo.value = 'EUR';
    getCurrenciesRates();
    break;

  default:
    elCurrencyFrom.value = 'USD';
    elCurrencyTo.value = 'RUB';
    getCurrenciesRates();
    break;
}