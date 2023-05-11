class Button {
  #element;
  #value;
  #$elAmount = document.querySelector('.amount-from');

  constructor($element, value) {
    this.#element = $element;
    this.#value = value;

    this.#element.addEventListener('click', () => console.log(value));
    this.#element.addEventListener('click', () => {
      if (this.#value == -1)
        this.#$elAmount.value = this.#$elAmount.value.slice(0, -1);
      else this.#$elAmount.value += this.#value;

      getCurrenciesRates()
    });
  }
}