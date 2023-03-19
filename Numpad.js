class Numpad {
  #$buttons;

  constructor() {
    this.#$buttons = document
      .querySelector('.numpad')
      .querySelectorAll('button');

    this.#$buttons.forEach($element => {
      new Button($element, $element.value);
    });
  }

}