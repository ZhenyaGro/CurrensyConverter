// Main class for managing application
class App {
  #numpad;
  #$buttons;

  constructor() {
    /*
    new BaseCurrency(); // Set the base currency into selects
    const baseInputValue = new BaseValue(); // Set value into input 'From'
    new Numpad(baseInputValue.getValue); // Create the numpad, that creates the buttons
    // 'getValue' will get the value when button click?
    */


    new BaseValue('.amount-from');
    this.#$buttons = document
      .querySelector('.numpad')
      .querySelectorAll('button');
    this.#numpad = new Numpad(Button, this.#$buttons);
    // Create currencies
    // Define base currency
    // Get currency rate new Rate('f75e933545485ad498aef88d');
  }
}