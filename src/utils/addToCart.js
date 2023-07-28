const cartWrapper = document.querySelector('.cart-wrapper')
const cartPrice = document.querySelector('.cart__price')
const cartTitle = document.querySelector('.cart__title')
const cartBtnClose = document.querySelector('.cart_btn-close')
const cartImg = document.querySelector('.cart__img')

function addToCart(title, price, path) {
    cartWrapper.classList.remove('cart-wrapper_visible')
    cartPrice.textContent = `${price} руб.`
    cartTitle.textContent = `${title}`
    cartImg.src = `../${path}`

}

cartBtnClose.addEventListener('click', () => {
    cartWrapper.classList.add('cart-wrapper_visible')
})

export default addToCart