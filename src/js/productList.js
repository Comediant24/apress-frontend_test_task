import { API } from "../../api/products.js";
import { toPrice } from "./utils.js";

class ProductList {
  constructor(API, productListSelector) {
    this.productList = document.querySelector(productListSelector);
    this.API = API;
  }

  findProduct(target) {
    const productId = Number(target.getAttribute("data-id"));
    return this.API.find((item) => item.id === productId);
  }

  render() {
    const html = this.API.map(({ id, title, img, price }) => {
      const priced = toPrice(price);

      return `<div class="product-item">
                <img class="product-item__img" src=../${img} alt=${title}>
                <div class="product-item__about">
                  <h3 class="product-item__title">${title}</h3>
                  <span class="product-item__price">${priced}</span>
                </div>
                <div class="product-item__btns">
                  <button type="button" class="product-item__btn product-item__btn_order"  data-id=${id}>Заказать</button>
                  <button type="button" class="product-item__btn product-item__btn_basket" data-id=${id}>В корзину</button>
                </div>
              </div>`;
    }).join("");

    this.productList.innerHTML = html;
  }
}

export const productList = new ProductList(API.products, ".main");
