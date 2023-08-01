export function createPopupCartEl(product) {
  const cartPopupEl = document.getElementById('cart-popup')
  const price = new Intl.NumberFormat('ru-RU', { style: 'decimal' }).format(
    product.price
  )

  cartPopupEl.style.display = 'block'
  cartPopupEl.innerHTML = `
	<div class="success-cart__wrapper">
    <span class="success-cart__name">Вы добавили в корзину:</span>
    <div class="success-cart__shell">
    <div class="success-cart__content-wrapper">

    <img class="success-cart__img" src="../${product.img}" alt="${product.title}">
    <div class="success-cart__content-right">
    <h4 class="success-cart__title">${product.title}</h4>
    <button class="success-cart__remove">+</button>
    <p class="success-cart__price">${price} руб.</p>
    </div>
    </div>
    <button class="success-cart__go">Перейти в корзину</button>
    </div>

  </div>
	`
}
