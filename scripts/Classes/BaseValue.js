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