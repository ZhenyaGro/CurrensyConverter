class Button {
  _element;
  _value;
  _elAmount = document.getElementById('amount-from');

  constructor(element, value) {
    this._element = element;
    this._value = value;

    this._element.addEventListener('click', () => console.log(value));
    this._element.addEventListener('click', () => {
      if (this._value == -1)
        this._elAmount.value = this._elAmount.value.slice(0, -1);
      else this._elAmount.value += this._value;
    });
  }
}