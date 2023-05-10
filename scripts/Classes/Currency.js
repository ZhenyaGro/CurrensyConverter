class Currency {
  #name;
  #code;
  #country;

  constructor(code, name, country) {
    this.#code = code;
    this.#name = name;
    this.#country = country;
  }
}
