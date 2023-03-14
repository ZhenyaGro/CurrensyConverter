class Numpad {
  #$buttons;

  constructor() {
    this.#$buttons = document
      .getElementById('numpad')
      .querySelectorAll('button');

    this.#$buttons.forEach($element => {
      new Button($element, $element.value);
    });
  }

}