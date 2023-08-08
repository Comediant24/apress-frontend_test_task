import {onOrderClickHandler } from './order-handlers.js';
import { onCartClickHandler } from './cart-handlers.js';

import { API } from '../../api/products.js';

const dataAPI = API.products;

export const onCardClickHandler = (evt) => {
  if (Array.from(evt.target.classList).includes('card-item__order-button')) {
    const orderModal = document.querySelector('.order');
    orderModal.classList.add('order__wrapper--active')
    const id = evt.target.closest('li').dataset.id;
    const cardData = dataAPI.find((element) => element.id === +id);

    orderModal.querySelector('.order__details-img').src = `../${cardData.img}`;
    orderModal.querySelector('.order__details-img').alt = cardData.title;
    orderModal.querySelector('.order__title-text').textContent = cardData.title;
    orderModal.querySelector('.order__details-price').textContent = `${cardData.price} руб.`;

    orderModal.addEventListener('click', onOrderClickHandler);
  }
  else if (Array.from(evt.target.classList).includes('card-item__cart-button')) {
    const cartModal = document.querySelector('.cart');
    cartModal.classList.add('cart__wrapper--active')
    const id = evt.target.closest('li').dataset.id;
    const cardData = dataAPI.find((element) => element.id === +id);

    cartModal.querySelector('.cart__item-img').src = `../${cardData.img}`
    cartModal.querySelector('.cart__item-img').alt = cardData.title;
    cartModal.querySelector('.cart-item__name').textContent = cardData.title;
    cartModal.querySelector('.cart-item__price').textContent = `${cardData.price} руб.`;

    cartModal.addEventListener('click', onCartClickHandler);
  }
}

