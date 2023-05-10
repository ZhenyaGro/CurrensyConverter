class Currency {
  #name;
  #code;
  #country;

  constructor(code, name, country) {
    this.#code = code;
    this.#name = name;
    this.#country = country;
  }
}

class BaseCurrency extends Currency {
  #userLanguage = window.navigator.language.substr(0, 2);

  constructor(/* Get browser's language */) {
    // Set base currency
    // Set currency to convert
  }
}