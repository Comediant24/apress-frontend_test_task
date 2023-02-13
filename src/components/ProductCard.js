class ProductCard {
  constructor({title, cost, photo}, cardSelector, handleOrderClick, handleBasketClick) {
    this._title = title;
    this._cost = cost;
    this._photo = photo;
    this._cardSelector = cardSelector;
    this._handleOrderClick = handleOrderClick;
    this._handleBasketClick = handleBasketClick;
  }

  _getTemplate() {
    const cardTemplate = document.querySelector(this._cardSelector).content.querySelector('.product-card').cloneNode(true);
    return cardTemplate;
  }

  _setEventListeners() {
    this._element.querySelector('.product-card__order-button').addEventListener('click', this._handleOrderClick);
    this._element.querySelector('.product-card__basket-button').addEventListener('click', this._handleBasketClick);
  }

  createCard() {
    this._element = this._getTemplate();
    this._cardPhoto = this._element.querySelector('.product-card__photo');
    this._cardPhoto.src = this._photo;
    this._cardPhoto.alt = this._title;
    this._element.querySelector('.product-card__title').textContent = this._title;
    this._costString = '';
    this._element.querySelector('.product-card__cost').textContent = this._cost;
    this._setEventListeners();
    return this._element;
  }
};
