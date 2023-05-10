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
