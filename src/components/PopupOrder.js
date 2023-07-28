import Popup from "./Popup.js";

export default class PopupOrder extends Popup {
  constructor(selector) {
    super(selector);
    this._img = this._popup.querySelector(".popup__img");
    this._title = this._popup.querySelector(".popup__title");
    this._price = this._popup.querySelector(".popup__price");
  }

  open(link, name, price) {
    this._img.src = link;
    this._img.alt = name;
    this._title.textContent = name;
    this._price.textContent = `${price} руб.`;
    super.open();
  }

  _submitEventButton() {
    this._popup
      .querySelector(".popup__order-button")
      .addEventListener("click", e => e.preventDefault());
  }

  setEventListeners() {
    super.setEventListeners(this._popup);
    this._submitEventButton();
  }
}
