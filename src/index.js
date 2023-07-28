import { getCorrectPrice, searchIndexInAPI } from './utils/globals.js'
import { addEventListenerBtns } from './utils/addEventListener.js'
import { API } from '../api/products.js'


let main = document.querySelector('main')
var products = []

fetch('../api/products.json')
  .then(response => response.json())
  .then(data => {
    products = data.products
    setTimeout(()=>{
      main.classList.remove('loader-style')
      document.querySelector('.main__loader').remove()
      for (var el in products){
        main.innerHTML += `<div id='${products[el].id}' class="main__container container">
        <div class="container__img-block">
          <img class="container__img" src="../${products[el].img ? products[el].img : "images/default.png"}" alt="${products[el].title}">
        </div>
        <div class="container__product-text product-text">
          <h1 class="product-text__title">${products[el].title}</h1>
          <span class="product-text__price">${getCorrectPrice(products[el].price)} руб.</span>
        </div>
        <div class="container__product-btns product-btns">
          <button id='${products[el].id}__order' class="product-btns__order-btn btn orderButton" type="button">Заказать</button>
          <button id='${products[el].id}__cart' class="product-btns__cart-btn btn cartButton" type="button">В корзину</button>
        </div>
      </div>`
      }
      addEventListenerBtns(orderClick, cartClick)
    }, 1500)
  })
  .catch(error => {
    main.innerHTML +='<h1>Данных нет :(</h1>'
});

const turnOffClicks = (isOrder)=>{
  let orderButtons = document.querySelectorAll(".orderButton")
  let cartButtons = document.querySelectorAll(".cartButton")
  for (let i = 0; i<orderButtons.length;i++){
    orderButtons[i].removeEventListener("click", orderClick)
    cartButtons[i].removeEventListener("click", cartClick)
  }
  let mainContainer = document.querySelectorAll(".main__container");
  [...mainContainer].map((el)=>el.classList.add("main__containerHidden"))
  if (isOrder){
    document.body.style.top = `-${window.scrollY}px`;
    document.body.style.position = 'fixed';
  }
  else{
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
}

const turnOnClicks = (event)=>{
  addEventListenerBtns(orderClick, cartClick)
  let mainContainer = document.querySelectorAll(".main__container");
  [...mainContainer].map((el)=>el.classList.remove("main__containerHidden"))
  if (event.target.parentNode.id){
    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
    document.getElementById(event.target.parentNode.id).remove()
  }
  else{
    document.querySelector(".main__cart").remove()
  }
}

const orderClick = (event)=>{
  turnOffClicks(true)
  const APIIndex = searchIndexInAPI(event.target.id.slice(0,-7), products)
  main.innerHTML += `<div id='${products[APIIndex].id}__orderBlock' class="main__order order">
    <div class="order__close-btn"></div>
    <h2 class="order__title">${products[APIIndex].title}</h2>
    <div class="order__content">
      <div class="order__descr">
        <img class="order__img" src="../${products[APIIndex].img ? products[APIIndex].img : "images/default.png"}" alt="${products[APIIndex].title}">
        <span class="order__price">${getCorrectPrice(products[APIIndex].price)} руб.</span>
      </div>
      <div class="order__line"></div>
      <div class="order__comment commemt">
        <span class="commemt__text grey-color-text">Комментарий к заказу:</span>
        <textarea class="commemt__textarea" placeholder="Введите комментарий..."></textarea>
      </div>
    </div>
    <div class="order__tel-block tel-block">
      <span class="tel-block__text grey-color-text">Ваш телефон*:</span>
      <div class="tel-block__tel-form">
        <input class="tel-block_tel-input" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        required>
        <button class="tel-block_submit-btn btn">Отправить</button>
      </div>
    </div>
  </div>`
  document.querySelector(".order__close-btn").addEventListener("click", turnOnClicks)
}

const cartClick = (event)=>{
  turnOffClicks(false)
  const APIIndex = searchIndexInAPI(event.target.id.slice(0,-6), products)
  main.innerHTML += `<div class="main__cart cart">
    <div class="cart__info">Вы добавили в корзину:</div>
    <div class="cart__container">
      <div class="cart__content">
        <img class="cart__img" src="../${products[APIIndex].img ? products[APIIndex].img : "images/default.png"}" alt="${products[APIIndex].title}">
        <div class="cart__text">
          <div class="cart__title">${products[APIIndex].title}</div>
          <div class="cart__price">${getCorrectPrice(products[APIIndex].price)} руб.</div>
          <button class="cart__close-btn btn"></button>
        </div>
      </div>
      <button class="cart__go-cart-btn btn">Перейти в корзину</button>
    </div>
  </div>`
  document.querySelector(".cart__close-btn").addEventListener("click", turnOnClicks)
}
