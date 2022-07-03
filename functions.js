'use strict';

function getCurrenciesRates() {

  let currencyFrom = elCurrencyFrom.value;
  let currencyTo = elCurrencyTo.value;

  fetch(`https://v6.exchangerate-api.com/v6/7fd52bbd6cb5e9fff6ab9110/latest/${currencyFrom}`)
    .then(response => response.json())
    .then(data => {
      let rate = data.conversion_rates[currencyTo];
      rateEl.innerText = `1 ${currencyFrom} = ${rate.toFixed(2)} ${currencyTo}`;

      elAmountTo.value = (elAmountFrom.value * rate).toFixed(2);
    })
    .catch(error => console.log('Error of getting rates')); // Need to improve

} // Need to add checking of errors (Internet connection or ran out of API requests)

function setLanguage() {
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
}

function fillCurrencies() {
  // The lis of supported currencies got here: https://www.exchangerate-api.com/docs/supported-currencies
  let currencies = ["USD", "EUR", "RUB", "AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BRL", "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHF", "CLP", "CNY", "COP", "CRC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "FJD", "FKP", "FOK", "GBP", "GEL", "GGP", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "IMP", "INR", "IQD", "IRR", "ISK", "JEP", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KID", "KMF", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRU", "MUR", "MVR", "MWK", "MXN", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLL", "SOS", "SRD", "SSP", "STN", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TVD", "TWD", "TZS", "UAH", "UGX", "UYU", "UZS", "VES", "VND", "VUV", "WST", "XAF", "XCD", "XDR", "XOF", "XPF", "YER", "ZAR", "ZMW", "ZWL"];

  for (let currency of currencies) {
    let optionFrom = document.createElement("option");
    optionFrom.textContent = String(currency);
    optionFrom.value = String(currency);
    elCurrencyFrom.appendChild(optionFrom);

    let optionTo = document.createElement("option");
    optionTo.textContent = String(currency);
    optionTo.value = String(currency);
    elCurrencyTo.appendChild(optionTo);
  }

  // Set base currency
  const userLanguage = window.navigator.language.substr(0, 2);

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
}