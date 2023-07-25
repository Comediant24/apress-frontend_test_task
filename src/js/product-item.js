export const productItem = (id, title, price, img, priceed) => {
  return `<div class="product">
      <img src=${"../" + img} alt=${title}>
    <div class="product_about">
      <h3 class="product_title">${title}</h3>
      <span class="product_price">${priceed}</span>
    </div>
    <div class="product_btns">
      <button class="product_btn-order" data-img="${img}" data-title="${title}" data-price="${price}">Заказать</button>
      <button class="product_btn-basket" data-id=${id} data-img="${img}" data-title="${title}" data-price="${price}">В корзину</button>
    </div>
  </div>`;
};
