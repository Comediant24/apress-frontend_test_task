

const arr = API.products
const shoppingCart = document.querySelector('.shopping-cart')
const popapShopingCart = document.querySelector('.popap-shoppingcart')
const closeBtn = document.querySelector('.close-popap')
const wrapper = document.querySelector('.wrapper')
const popapShopingCart1 = document.querySelector('active')

// shoppingCart.addEventListener("click" ,  function(e) {
// if (popapShopingCart.classList.contains('active')) {
//    popapShopingCart.classList.remove("active")
// } else {
//    popapShopingCart.classList.add("active")
// }
// })
// closeBtn.addEventListener("click" , () => {
//    popapShopingCart.classList.remove("active")
// })


wrapper.innerHTML = `<div class="shop-list" ></div>`
for (key of arr) {
   let row = document.createElement('div')
   row.innerHTML = `
   <img class="img-item" src="${key.img}"/> 
   
   <div class="item-content">
   <div class = "item-title">${key.title} </div>
   <div class = "item-price">${key.price} руб.</div>
   </div>
   <div class="btn-container">
   <button value="${key.id}" class="order btn">заказать</button>
   <button value="${key.id}" class="to-cart btn" >В корзину</button>
   </div>
   `
   document.querySelector('.shop-list').appendChild(row).className = "item"
  
}
//==========================popap-module===============================================
const personShoppingCart = []
const informCart = []
const bigPopap = document.querySelector('.big-popap')
const bigPopapContent = document.querySelector('.bigpopap-content')


const led = document.querySelector('.shop-list')


led.addEventListener('click' , (e) => {
   if (e.target.closest('.order')){
      informCart.push(arr[e.target.value -1])
      bigPopap.classList.add("take")

      bigPopapContent.innerHTML = `<div class="inform-item"></div>`
      let row = document.createElement('div')
      if (informCart.length != 0 ) {
         row.innerHTML = `
         <div class = "item-title popap">${informCart[0].title} </div>
         <span class = "btn-close"><img class="ico" src="./assets/delite.png" /></span>
            <div class ="item-info">
               <div class="logo-prace">
                  <img class="img-item img" src="${informCart[0].img}"/> 
                  <div class = "item-price price">${informCart[0].price} руб.</div>
               </div>
               <span class="vertical"></span>
               <div class="comments">Коментарий <br/> к заказу:</div>
            </div>
            <div class="phone-number">Ваш телефон: </div>
            <button class="submit btn">Отправить</button>
         `

         document.querySelector('.inform-item').appendChild(row).className = "inform"

         const closeBigPopap = document.querySelector('.inform-item')
         closeBigPopap.addEventListener("click" , (e) => {
            if (e.target.closest('.btn-close')){
               informCart.pop(arr[e.target.value -1])
               bigPopap.classList.remove("take")
            }
         })
      } else {
         row.innerHTML = '<p>Нет информации</p>'
         document.querySelector('.inform-item').appendChild(row)
      }
   }
})
//===============================================================================
const shopping = document.querySelector('.shopping')



led.addEventListener('click' , (e) => {

   if (e.target.closest('.to-cart')){
      
      personShoppingCart.push(arr[e.target.value -1])

      shopping.innerHTML = `<div class="shopcart"></div>`
      let row = document.createElement('div')
      if (personShoppingCart.length != 0) {
         row.innerHTML = `
      <div class="message">Вы добавили в корзину:</div>
      <div class="shopcart-content">
         <img class="message-img" src="${personShoppingCart[personShoppingCart.length - 1].img}"/>
            <div class="message-content" > 
               <h3 class="message-title" >${personShoppingCart[personShoppingCart.length - 1].title} </h3>
               <p class="message-prece" >${personShoppingCart[personShoppingCart.length - 1].price} руб. </p>
            </div>
            <div class="message-delit" ><img class="ico" src="./assets/delite.png" /></div>
      </div>
      <button class="message-btn btn"><a src="#">Перейти в корзину</a></button>
      `
      document.querySelector('.shopcart').appendChild(row).className = "cartshop"
      shopping.classList.add("shopactive")
      } 

      const delitItem = document.querySelector('.shopcart')
      delitItem.addEventListener("click" , (e) => {
         if (e.target.closest('.message-delit')){
            
            personShoppingCart.pop(personShoppingCart[personShoppingCart.length - 1])
            shopping.classList.remove("shopactive")
         
            
         }
      })
      setTimeout(() => {
         shopping.classList.remove("shopactive")
      }, 8000)
      }
   })







