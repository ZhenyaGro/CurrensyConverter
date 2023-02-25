class Numpad {
  _button1;
  _button2;

  constructor() {
    let testButton1 = document.getElementById('button-value-1');
    let testButton2 = document.getElementById('button-value-2');

    this._button1 = new Button(testButton1, 1);
    this._button2 = new Button(testButton2, 2);
  }

}