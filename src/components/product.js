export function createProductEl(product) {
  const productEl = document.createElement('li')
  const price = new Intl.NumberFormat('ru-RU', { style: 'decimal' }).format(
    product.price
  )

  productEl.classList.add('products__item')
  productEl.innerHTML = `
  <img class="products__img" src="../${product.img}" alt="">
  <div class="products__content">
    <h3 class="products__title">${product.title}</h3>
    <p class="products__price">${price} руб.</p>
  </div>
  <div class="products__button-group">
    <button class="products__button-order button">Заказать</button>
    <button class="products__button-add-to-cart button">В корзину</button>
  </div>
  `
  const buttonOrder = productEl.querySelector('.products__button-order')
  const buttonAddCart = productEl.querySelector('.products__button-add-to-cart')

  buttonOrder.addEventListener('click', () => {
    openOrderPopup(product.id)
  })

  buttonAddCart.addEventListener('click', () => {
    addToCart(product.id)
    showSuccessNotification()
  })

  return productEl
}
