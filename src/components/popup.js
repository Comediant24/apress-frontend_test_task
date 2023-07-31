export function createPopupEl(product) {
  function closeOrderPopup() {
    orderPopupEl.style.display = 'none'
  }

  const orderPopupEl = document.getElementById('order-popup')
  const price = new Intl.NumberFormat('ru-RU', { style: 'decimal' }).format(
    product.price
  )

  orderPopupEl.style.display = 'block'
  orderPopupEl.innerHTML = `
	<div class="popup__wrapper">
  <h3 class="popup__title">${product.title}</h3>
  <button class="popup__close">+</button>
  <div class="popup__content-wrapper">
    <div class="popup__content-left">
      <img class="popup__img" src="../${product.img}" alt="">
      <p class="popup__price">${price} руб.</p>
    </div>
    <form class="popup__form-textarea">
      <label class="popup__label-textarea">
        Комментарий к заказу:
      </label>
      <textarea class="popup__textarea"></textarea>
    </form>
  </div>
  <form class="popup__form-input">
    <label class="popup__label-input">
      Ваш телефон*:
    </label>
    <input class="popup__input" type="tel">
  </form>
  <button class="popup__order">Отправить</button>
</div>
	`

  const popupClose = document.querySelector('.popup__close')

  popupClose.addEventListener('click', () => {
    closeOrderPopup()
  })
}
