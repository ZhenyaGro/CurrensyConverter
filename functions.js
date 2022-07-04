'use strict';

function getCurrenciesRates() {

  let currencyFrom = elCurrencyFrom.value;
  let currencyTo = elCurrencyTo.value;

  fetch(`https://v6.exchangerate-api.com/v6/f75e933545485ad498aef88d/latest/${currencyFrom}`)
    .then(response => response.json())
    .then(data => {
      let rate = data.conversion_rates[currencyTo];
      rateEl.innerText = `1 ${currencyFrom} = ${rate} ${currencyTo}`;
      elAmountTo.value = (elAmountFrom.value * rate).toFixed(2);
    })
    .catch(() => {
      const elErrNote = document.getElementById('liveToast');
      const errNote = new bootstrap.Toast(elErrNote);
      errNote.show();
    });

}

function setLanguage() {
  const userLanguage = window.navigator.language.substr(0, 2);
  let docLanguage = document.getElementsByTagName('html')[0].getAttribute('lang');

  if (docLanguage == 'ru' && userLanguage != 'ru') {
    const elLangNote = document.getElementById('langNote');
    const langNote = new bootstrap.Toast(elLangNote);

    const btnChangeLang = document.getElementById('btnChangeLang');
    btnChangeLang.addEventListener('click', () => window.location.href = 'index_en.html');

    langNote.show();
  }
  if (docLanguage != 'ru' && userLanguage == 'ru') {
    const elLangNote = document.getElementById('langNote');
    const langNote = new bootstrap.Toast(elLangNote);

    const btnChangeLang = document.getElementById('btnChangeLang');
    btnChangeLang.addEventListener('click', () => window.location.href = 'index.html');

    langNote.show();
  }
}

function fillCurrencies() {
  // The lis of supported currencies got here: https://www.exchangerate-api.com/docs/supported-currencies
  let currencies = ["USD", "EUR", "RUB", "AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BRL", "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHF", "CLP", "CNY", "COP", "CRC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "FJD", "FKP", "FOK", "GBP", "GEL", "GGP", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "IMP", "INR", "IQD", "IRR", "ISK", "JEP", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KID", "KMF", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRU", "MUR", "MVR", "MWK", "MXN", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLL", "SOS", "SRD", "SSP", "STN", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TVD", "TWD", "TZS", "UAH", "UGX", "UYU", "UZS", "VES", "VND", "VUV", "WST", "XAF", "XCD", "XDR", "XOF", "XPF", "YER", "ZAR", "ZMW", "ZWL"];

  // Fill currencies into the selects
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