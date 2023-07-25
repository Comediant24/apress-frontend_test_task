export const modalCard = (title, price, url) => {
  return `<div class="modal">
          <button class="modal_btn_exit">
            <svg viewBox="0 0 32 32" width="24px"><defs><style>.cls-1{fill:none;stroke:#a5a5a5;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}</style></defs><title/><g id="cross"><line class="cls-1" x1="7" x2="25" y1="7" y2="25"/><line class="cls-1" x1="7" x2="25" y1="25" y2="7"/></g></svg>
          </button>
          <h2 class="modal_title">${title}</h2>
          <div class="modal_content">
            <div class="modal_content_left">
              <img class="modal_img" src=${url} alt="">
              <span class="modal_price">${price}</span>
            </div>
            <div class="modal_content_right">
              <span>Комментарий <br> к заказу:</span>
              <textarea name="" id=""></textarea>
            </div>
          </div>
          <div class="modal_footer">
            <div class="modal_footer_left">
              <span>Ваш телефон*:</span>
            </div>
            <form class="modal_footer_form">
              <input type="text">
              <button>Отправить</button>
            </form>
          </div>
      </div>`;
};
