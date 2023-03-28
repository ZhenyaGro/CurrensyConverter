'use strict';

new App();

// Main class for managing application
class App {
  #numpad;
  #$buttons;

  constructor() {
    /*
    new BaseCurrency(); // Set the base currency into selects
    const baseInputValue = new BaseValue(); // Set value into input 'From'
    new Numpad(baseInputValue.getValue); // Create the numpad, that creates the buttons
    // 'getValue' will get the value when button click?
    */


    new BaseValue('.amount-from');
    this.#$buttons = document
      .querySelector('.numpad')
      .querySelectorAll('button');
    this.#numpad = new Numpad(Button, this.#$buttons);
    // Create currencies
    // Define base currency
    // Get currency rate new Rate('f75e933545485ad498aef88d');
  }
}

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

// Class Browser language?

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

class BaseValue {
  #$elInput;

  constructor(className) {
    this.#$elInput = document.querySelector(className);
    this.#$elInput.addEventListener('change', () => {
      console.log(this.#$elInput.value);
      return this.#$elInput.value;
    });
  }

  getValue() {
    return this.#$elInput.value;
  }
}

class Button {
  #element;
  #value;
  #$elAmount = document.querySelector('.amount-from'); // Move out from the class?

  constructor($element, value) {
    this.#element = $element;
    this.#value = value;

    this.#element.addEventListener('click', () => console.log(value)); // Remove after
    this.#element.addEventListener('click', () => {
      if (this.#value == -1)
        this.#$elAmount.value = this.#$elAmount.value.slice(0, -1);
      else this.#$elAmount.value += this.#value;
    });
  }
}

class Numpad {
  #$buttons;

  constructor(ClassButton, $buttons) {
    this.#$buttons = $buttons;

    this.#$buttons.forEach($element => {
      // new Button($element, $element.value);
      new ClassButton($element, $element.value);
      // $element.addEventListener('click', getCurrenciesRates);
    });
  }
}