export default class BasketCard {
  constructor({ id, img, price, title }, selector, num, basketArr, deleteItem) {
    this._id = id;
    this._img = img;
    this._price = price;
    this._title = title;
    this._selector = selector;
    this._num = num[id];
    this._deleteItem = deleteItem;
  }
  _getElement() {
    const cardElement = document
      .querySelector(this._selector)
      .content.cloneNode(true);
    return cardElement;
  }

  _makeCard() {
    this._card.querySelector(".popup__basket-img").src = `../${this._img}`;
    this._card.querySelector(".popup__basket-img").alt = this._title;
    this._card.querySelector(".popup__basket-text-title").textContent =
      this._title;
    this._card.querySelector(
      ".popup__basket-text-paragraph",
    ).textContent = `${this._price} руб.`;
    this._card.querySelector(
      ".popup__basket-text-num",
    ).textContent = `${this._num} шт.`;
    return this._card;
  }

  _deleteItemFromBasket() {
    this._card
      .querySelector(".popup__basket-item-close")
      .addEventListener("click", () => {
        this._deleteItem(this._id);
      });
  }

  generate() {
    this._card = this._getElement();
    this._makeCard();
    this._deleteItemFromBasket();
    return this._card;
  }
}
