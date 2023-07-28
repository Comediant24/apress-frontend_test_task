export default class Card {
  constructor(
    { id, img, price, title },
    selector,
    openCard,
    addCard,
    openBasket,
  ) {
    this._id = id;
    this._img = img;
    this._price = price;
    this._title = title;
    this._selector = selector;
    this._openCard = openCard;
    this._addCard = addCard;
    this._openBasket = openBasket;
  }
  _getElement() {
    const cardElement = document
      .querySelector(this._selector)
      .content.cloneNode(true);
    return cardElement;
  }

  _makeCard() {
    this._card.querySelector(".furniture__img").src = `../${this._img}`;
    this._card.querySelector(".furniture__img").alt = this._title;
    this._card.querySelector(".furniture__paragraph").textContent = this._title;
    this._card.querySelector(
      ".furniture__price",
    ).textContent = `${this._price} руб.`;
    return this._card;
  }

  _openOrder() {
    this._card
      .querySelector(".furniture__button-order")
      .addEventListener("click", () =>
        this._openCard(`../${this._img}`, this._title, this._price),
      );
  }

  _addCardToBasket() {
    this._card
      .querySelector(".furniture__button-basket")
      .addEventListener("click", () => {
        this._addCard({
          id: this._id,
          img: `../${this._img}`,
          price: this._price,
          title: this._title,
        });
        this._openBasket();
      });
  }

  generate() {
    this._card = this._getElement();
    this._makeCard();
    this._openOrder();
    this._addCardToBasket();
    return this._card;
  }
}
