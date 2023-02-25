class Numpad {
  _buttons;

  constructor() {
    this._buttons = document
      .getElementById('numpad')
      .querySelectorAll('button');

    this._buttons.forEach(element => {
      new Button(element, element.value);
    });
  }

}