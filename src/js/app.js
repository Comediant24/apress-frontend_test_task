import { productList } from "./productList.js";
import { modal } from "./modal.js";
import { basket } from "./basket.js";
import { toPrice } from "./utils.js";

const main = document.querySelector(".main");

document.addEventListener("DOMContentLoaded", () => {
  productList.render();
  main.addEventListener("click", (e) => {
    const target = e.target;

    if (target.classList.contains("product-item__btn")) {
      const { id, title, price, img } = productList.findProduct(target);

      if (target.classList.contains("product-item__btn_order")) {
        modal.render(title, toPrice(price), img);
      }

      if (target.classList.contains("product-item__btn_basket")) {
        basket.render(id, title, toPrice(price), img);
      }
    }
  });
});
