import { API } from "../../api/products.js";
import { productItem } from "./product-item.js";
import { basketItem } from "./basket-item.js";
import { modalCard } from "./modal-card.js";

const productsContainer = document.querySelector(".main");
const basketContainer = document.querySelector(".basket_content");
const PRODUCTS = API.products;
const basket = document.getElementById("popup_basket");
const modal = document.getElementById("popup_product");

modal.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.setAttribute("data-active", false);
  }
});

const addProductToModal = (title, price, url) => {
  modal.innerHTML = modalCard(title, price, url);

  const closeModal = document.querySelector(".modal_btn_exit");
  closeModal.addEventListener("click", () => {
    modal.setAttribute("data-active", false);
  });
};

const addProductToBasket = (id, title, price, url_img) => {
  basketContainer.innerHTML = basketItem(id, title, price, url_img);
};

const toPrice = (price) => {
  let strPrice = price;
  let segments = [];
  while (strPrice.length > 0) {
    segments.unshift(strPrice.slice(-3));
    strPrice = strPrice.slice(0, -3);
  }
  return segments.join(" ") + " руб.";
};

document.addEventListener("DOMContentLoaded", () => {
  let idTimer;
  productsContainer.innerHTML = PRODUCTS.map(({ id, img, price, title }) =>
    productItem(id, title, price, img, toPrice(price + ""))
  ).join("");

  productsContainer.addEventListener("click", function (e) {
    const target = e.target;
    const id = target.getAttribute("data-id");
    const url_img = "../" + target.getAttribute("data-img");
    const title = target.getAttribute("data-title");
    const price = target.getAttribute("data-price");

    if (e.target.classList.contains("product_btn-order")) {
      modal.setAttribute("data-active", true);
      addProductToModal(title, toPrice(price), url_img);
    }

    if (e.target.classList.contains("product_btn-basket")) {
      clearTimeout(idTimer);
      addProductToBasket(id, title, toPrice(price), url_img);
      basket.setAttribute("data-active", true);
      idTimer = setTimeout(() => {
        basket.setAttribute("data-active", false);
      }, 3000);
    }
  });
});
