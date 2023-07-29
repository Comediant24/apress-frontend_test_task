class Basket {
  constructor(popupBasketSelector, basketContentSelector) {
    this.popupBasket = document.querySelector(popupBasketSelector);
    this.basketContent = document.querySelector(basketContentSelector);
    this.idTimer = null;

    this.mouseEnterBasket = this.mouseEnterBasket.bind(this);
    this.mouseLeaveBasket = this.mouseLeaveBasket.bind(this);
  }

  render(id, title, price, url) {
    this.openBasket();

    const html = `<div class="item-basket">
                    <div class="item-basket__content">
                      <img class="item-basket__img" src=../${url} alt=${title}>
                      <div>
                        <h4 class="item-basket__header">${title}</h4>
                        <span class="item-basket__price">${price}</span>
                      </div>
                      <button type="button" class="item-basket__cross" data-id=${id}>
                        <svg viewBox="0 0 32 32" width="14px"><defs><style>.cls-2{fill:none;stroke:#cf315c;stroke-linecap:round;stroke-linejoin:round;stroke-width:4px;}</style></defs><title/><g id="cross"><line class="cls-2" x1="7" x2="25" y1="7" y2="25"/><line class="cls-2" x1="7" x2="25" y1="25" y2="7"/></g></svg>
                      </button>
                    </div>
                    <button type="button" class="item-basket__btn">Перейти в корзину</button>
                  </div>`;

    this.basketContent.innerHTML = html;
    this.#addListeners();
  }

  openBasket() {
    this.#removeListeners();
    this.popupBasket.setAttribute("data-active", true);
    if (this.idTimer !== null) clearTimeout(this.idTimer);

    this.idTimer = setTimeout(() => {
      this.closeBasket();
    }, 3000);
  }

  closeBasket() {
    this.popupBasket.setAttribute("data-active", false);
    this.#removeListeners();
  }

  mouseLeaveBasket() {
    this.idTimer = setTimeout(() => {
      this.closeBasket();
    }, 1500);
  }

  mouseEnterBasket() {
    clearTimeout(this.idTimer);
  }

  #addListeners() {
    this.popupBasket.addEventListener("mouseleave", this.mouseLeaveBasket);
    this.popupBasket.addEventListener("mouseenter", this.mouseEnterBasket);
  }

  #removeListeners() {
    this.popupBasket.removeEventListener("mouseleave", this.mouseLeaveBasket);
    this.popupBasket.removeEventListener("mouseenter", this.mouseEnterBasket);
  }
}

export const basket = new Basket(".popup-basket", ".basket__content");
