class Numpad {
  _$buttons;

  constructor() {
    this._$buttons = document
      .getElementById('numpad')
      .querySelectorAll('button');

    this._$buttons.forEach($element => {
      new Button($element, $element.value);
    });
  }

}