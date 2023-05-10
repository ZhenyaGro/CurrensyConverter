class Rate {
  #currentRate = 0;
  #apiKey;

  constructor(apiKey) {
    this.#apiKey = apiKey;
    this.#currentRate = this.getCurrenciesRates();
  }

  getCurrenciesRates(currencyFrom, currencyTo) {
    fetch(`https://v6.exchangerate-api.com/v6/${this.#apiKey}/latest/${currencyFrom}`)
      .then(response => response.json())
      .then(data => {
        this.#currentRate = data.conversion_rates[currencyTo];
      })
      .catch(() => {
        alert('Не удалось получить актуальные курсы валют');
      });

    return this.#currentRate;
  }
}