class Button {
  _element;
  _value;

  constructor(element, value) {
    this._element = element;
    this._value = value;

    this._element.addEventListener('click', () => console.log(value));
  }

}