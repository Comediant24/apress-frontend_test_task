const orderButton = document.querySelectorAll(".btn__order")
const inBasketButton = document.querySelectorAll(".btn__basket")
const submitButton = document.querySelector(".btn_submit")
const popUpOrder = document.querySelector(".popup__order")
const popUpBasket = document.querySelector(".popup__basket")
const closeButton = document.querySelector(".close")

for (let i = 0; i < orderButton.length; i++) {
   orderButton[i].addEventListener("click", function () {
      popUpOrder.classList.remove('invisibility')
      popUpOrder.querySelector('.popup__order_title').innerHTML =
         document.querySelectorAll(".main__item")[i].querySelector('.item__info_name').innerHTML;

      popUpOrder.querySelector('.info__left_price').innerHTML =
         document.querySelectorAll(".main__item")[i].querySelector('.item__info_price').innerHTML;

      popUpOrder.querySelector('.order_img').src =
         document.querySelectorAll(".main__item")[i].querySelector('.img').src;

   });
}


for (let i = 0; i < inBasketButton.length; i++) {
   inBasketButton[i].addEventListener("click", function () {
      popUpBasket.classList.remove('invisibility')
      popUpBasket.querySelector('.info__info_title').innerHTML =
         document.querySelectorAll(".main__item")[i].querySelector('.item__info_name').innerHTML;

      popUpBasket.querySelector('.info__info_price').innerHTML =
         document.querySelectorAll(".main__item")[i].querySelector('.item__info_price').innerHTML;

      popUpBasket.querySelector('.basket_img').src =
         document.querySelectorAll(".main__item")[i].querySelector('.img').src;
      setTimeout(() => { popUpBasket.classList.add('invisibility') }, 1000)
   });
}


closeButton.addEventListener("click", function () { popUpOrder.classList.add('invisibility') })
submitButton.addEventListener("click", function () { console.log('click') })