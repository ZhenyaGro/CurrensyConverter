class Button {
  _element;
  _value;
  _$elAmount = document.getElementById('amount-from');

  constructor($element, value) {
    this._element = $element;
    this._value = value;

    this._element.addEventListener('click', () => console.log(value));
    this._element.addEventListener('click', () => {
      if (this._value == -1)
        this._$elAmount.value = this._$elAmount.value.slice(0, -1);
      else this._$elAmount.value += this._value;
    });
  }
}