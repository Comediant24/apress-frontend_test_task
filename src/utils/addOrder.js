const orderWrapper = document.querySelector('.order-wrapper')
const orderPrice = document.querySelector('.order__price')
const orderTitle = document.querySelector('.order__title')
const orderBtnClose = document.querySelector('.order__btn-close')
const orderImg = document.querySelector('.order__img')

function addOrder(title, price, path) {
    orderWrapper.classList.remove('order-wrapper_visible')
    orderPrice.textContent = `${price} руб.`
    orderTitle.textContent = `${title}`
    orderImg.src = `../${path}`

}

orderBtnClose.addEventListener('click', () => {
    orderWrapper.classList.add('order-wrapper_visible')
})
export default addOrder