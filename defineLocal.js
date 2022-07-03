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

elCurrencyTo.value = 'USD';
switch (userLanguage) {

  case 'sq':
    elCurrencyFrom.value = 'ALL';
    break;

  case 'ar':
    elCurrencyFrom.value = 'AED';
    break;

  case 'ru':
    elCurrencyFrom.value = 'RUB';
    break;

  case 'hy':
    elCurrencyFrom.value = 'AMD';
    break;

  case 'az':
    elCurrencyFrom.value = 'AZN';
    break;

  case 'be':
    elCurrencyFrom.value = 'BYN';
    break;

  case 'zh':
    elCurrencyFrom.value = 'CNY';
    break;

  case 'cs':
    elCurrencyFrom.value = 'CZK';
    break;

  case 'da':
    elCurrencyFrom.value = 'DKK';
    break;

  case 'eu':
  case 'de':
  case 'et':
  case 'fr':
  case 'it':
  case 'lv':
  case 'lt':
  case 'nl':
  case 'es':
    elCurrencyFrom.value = 'EUR';
    break;

  case 'ja':
    elCurrencyFrom.value = 'JPY';
    break;

  case 'kk':
    elCurrencyFrom.value = 'KZT';
    break;

  case 'pl':
    elCurrencyFrom.value = 'PLN';
    break;

  case 'sr':
    elCurrencyFrom.value = 'RSD';
    break;

  case 'sv':
    elCurrencyFrom.value = 'SEK';
    break;

  case 'tr':
    elCurrencyFrom.value = 'TRY';
    break;

  case 'uk':
    elCurrencyFrom.value = 'UAH';
    break;

  default:
    elCurrencyFrom.value = 'USD';
    elCurrencyTo.value = 'EUR';
    break;
}

getCurrenciesRates();