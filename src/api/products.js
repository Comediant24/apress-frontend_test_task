var API = {
  products: [
    {
      "id": 1, 
      "title": "Выкатной детский диван Зайка производитель фабрика Blanes", 
      "price": 11740,
      "img": "assets/images/1.jpg"
    },

    {
      "id": 2, 
      "title": "Диван Банжо", 
      "price": 62839,
      "img": "assets/images/2.jpg"
    },
    
    {
      "id": 3, 
      "title": "Гостиная классика Panamar Classic", 
      "price": 267593,
      "img": "assets/images/3.jpg"
    },

    {
      "id": 4, 
      "title": "Chairman Диван Релакс Terra 101", 
      "price": 31950,
      "img": "assets/images/4.jpg"
    },

    {
      "id": 5, 
      "title": "Диван матрас прямой Верн Sleepformer", 
      "price": 52450,
      "img": "assets/images/5.jpg"
    },

    {
      "id": 6, 
      "title": "2 кресла и стол чайный - комплект «Виктория» (Эдем)", 
      "price": 62350,
      "img": "assets/images/6.jpg"
    },
    
    {
      "id": 7, 
      "title": "Современный стильный угловой диван Flex с декоративной столешницей", 
      "price": 483000,
      "img": "assets/images/7.jpg"
    },

    {
      "id": 8, 
      "title": "Белый диван Deco - Colleccion Alexandra", 
      "price": 606400,
      "img": "assets/images/8.jpg"
    }, 
    
    {
      "id": 9, 
      "title": "Белый диван в гостиную с цветной обивкой", 
      "price": 394899,
      "img": "assets/images/9.jpg"
    },

    {
      "id": 10, 
      "title": "Двухместный бархатный диван", 
      "price": 13240,
      "img": "assets/images/10.jpg"
    },           
  ]
};
console.log(API.products);

let shop = document.querySelector('.shop');
let content = API.products.splice(0, API.products.length);


let key;
for (key in content) {
  shop.innerHTML += `
  <div class="product-card">
  <div class="card__img">
    <img src="${content[key].img}" alt="item">
  </div>
  <div class="card-info">
    <h3 class="card__title">${content[key].title}</h3>
    <h4 class="card__price">${content[key].price}</h4>
  </div>
  <div class="card-buttons">
    <button class="button button-red popup__open">Заказать</button>
    <button class="button button-cart cart__open">В корзину</button>
  </div> 
</div>
`;
}

let popupOpenButton = document.querySelectorAll('.popup__open'),
    popupCloseButton = document.querySelector('.popup__close'),
    popupOrder = document.getElementById('popup__order'),
    products = document.querySelectorAll('.product-card'),
    popupInfoOrder = document.querySelector('.popup-info__order'),
    popupTitle = document.querySelector('.popup-body__title'),
    popupPrice = document.querySelector('.popup__price'),
    popupImage = document.querySelector('.popup__image');

let cartOpenButton = document.querySelectorAll('.cart__open'),
    cartCloseButton = document.querySelector('.cart__close'),
    cartOrder = document.getElementById('cart__order'),
    cartItem = document.querySelector('.cart__item');


    

popupOpenButton.forEach(function (item, i) {
    item.addEventListener('click', function () {
        document.body.classList.add('lock');
        popupOrder.classList.add('active');
        let item = products[i].cloneNode(true),
            titleCard = item.querySelector('.card__title'),
            imageCard = item.querySelector('.card__img'),
            priceCard = item.querySelector('.card__price'),
            btn = item.querySelector('.card-buttons');
        
        btn.remove();
        

        
        popupInfoOrder.appendChild(item);
        popupTitle.appendChild(titleCard);
        popupPrice.appendChild(priceCard);

    });
});

popupCloseButton.addEventListener('click', () => {
    popupOrder.classList.remove('active');
    document.body.classList.remove('lock');
});

cartOpenButton.forEach(function (item, i) {
    item.addEventListener('click', function () {
        cartOrder.classList.add('active');
        let item = products[i].cloneNode(true),
            titleCart = item.querySelector('.card__title'),
            imageCard = item.querySelector('.card__img'),
            priceCard = item.querySelector('.card__price'),
            btn = item.querySelector('.card-buttons');
        
        btn.remove();

        cartItem.appendChild(item);
        
        
    });
});
cartCloseButton.addEventListener('click', () => {
    cartOrder.classList.remove('active');
});


