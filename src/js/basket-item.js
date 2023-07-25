export const basketItem = (id, title, price, url) => {
  return `<div class="basket_item">
    <div class="basket_item_content">
      <img class="basket_item_img" src=${url} alt=${title}>
      <div>
        <h4 class="basket_item_title">${title}</h4>
        <span class="basket_item_price">${price}</span>
      </div>
      <button class="delete-btn" data-id-item=${id}>
        <svg viewBox="0 0 32 32" width="14px"><defs><style>.cls-2{fill:none;stroke:#cf315c;stroke-linecap:round;stroke-linejoin:round;stroke-width:4px;}</style></defs><title/><g id="cross"><line class="cls-2" x1="7" x2="25" y1="7" y2="25"/><line class="cls-2" x1="7" x2="25" y1="25" y2="7"/></g></svg>
      </button>
    </div>
    <button class="basket-btn_in">Перейти в корзину</button>
  </div>`;
};
