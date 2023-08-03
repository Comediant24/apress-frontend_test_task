var API = {
    products: [
      {
        id: 1,
        title: "Выкатной детский диван Зайка производитель фабрика Blanes",
        price: 11740,
        img: "../img/1.jpg",
      },
  
      {
        id: 2,
        title: "Диван Банжо",
        price: 62839,
        img: "../img/2.jpg",
      },
  
      {
        id: 3,
        title: "Гостиная классика Panamar Classic",
        price: 267593,
        img: "../img/3.jpg",
      },
  
      {
        id: 4,
        title: "Chairman Диван Релакс Terra 101",
        price: 31950,
        img: "../img/4.jpg",
      },
  
      {
        id: 5,
        title: "Диван матрас прямой Верн Sleepformer",
        price: 52450,
        img: "../img/5.jpg",
      },
  
      {
        id: 6,
        title: "2 кресла и стол чайный - комплект «Виктория» (Эдем)",
        price: 62350,
        img: "../img/6.jpg",
      },
  
      {
        id: 7,
        title:
          "Современный стильный угловой диван Flex с декоративной столешницей",
        price: 483000,
        img: "../img/7.jpg",
      },
  
      {
        id: 8,
        title: "Белый диван Deco - Colleccion Alexandra",
        price: 606400,
        img: "../img/8.jpg",
      },
  
      {
        id: 9,
        title: "Белый диван в гостиную с цветной обивкой",
        price: 394899,
        img: "../img/9.jpg",
      },
  
      {
        id: 10,
        title: "Двухместный бархатный диван",
        price: 13240,
        img: "../img/10.jpg",
      },
    ],
  };
  
  const $site = document.querySelector("#site");
  
  API.products.forEach((element) => {
    let html = `
  
  <div class='cart'>
  <img class='img' src='${element.img}'/>
     
     <div class='info'>
     <div class='title'>${element.title}</div>
     <div class='price'>${element.price} руб.</div>
        </div>
    
     <div class='button'>
     <button id='${element.id}' class='order' >Заказать</button>
     <button id='${element.id}' class='push' >В корзину</button>
     </div>
  
     </div>
  
  
  `;
  
    $site.insertAdjacentHTML("beforeend", html);
  });
  
  const buttonElem = document.querySelectorAll(".order");
  
  const modalElem = document.querySelector(".modal");
  
  const modalTwo = document.querySelector(".modal__two");
  
  const btnElem = document.querySelectorAll(".push");
  
  const title = document.querySelector("#title");
  const shopTitle = document.querySelector("#shop__title");
  
  modalElem.style.cssText = `
  display:flex;
  visibility:hidden;
  opacity:0;
  transition:opacity 300ms ease-in-out;               
  `;
  modalTwo.style.cssText = `
  display:flex;
  visibility:hidden;
  opacity:0;
  transition:opacity 300ms ease-in-out;               
  `;
  
  const closeModal = (event) => {
    const target = event.target;
  
    if (target === modalElem || target.closest(".modal__close")) {
      setTimeout(() => {
        modalElem.style.visibility = "hidden";
        title.innerHTML = "";
      }, 200);
    }
  };
  
  const closeModalTwo = (event) => {
    const target = event.target;
  
    if (target === modalTwo || target.closest(".modalTwo__close")) {
      modalTwo.style.opacity = 0;
  
      setTimeout(() => {
        modalTwo.style.visibility = "hidden";
        shopTitle.innerHTML = "";
      }, 200);
    }
  };
  const openModal = (e) => {
    modalElem.style.visibility = "visible";
    modalElem.style.opacity = 1;
    const target = e.target;
  
    API.products.forEach((e) => {
      if (e.id == target.id) {
        let html = `
        <div id="modal__content">
        <h2 class="etitle">${e.title}</h2>
        <div class="rowImgInput">
          <div class="firstBlock">
            <img class="modalImg" src="${e.img}" />
            <div class='eprice'>${e.price} руб.</div>
            <div class='questNum'>Ваш телефон *:</div>
          </div>
          <div class="secondBlock">
            <div class="boxComInput">
              <div class='comOrder'>Комментарий<br>
              к заказу:</div>
              <input type="text" class="input" />
            </div>
            <div class="boxInput">
              <input type='number' class="inputNum" />
              <button class='butInput'>Oтправить</button>
            </div>
          </div>
        </div>
      </div>
      `;
  
        title.insertAdjacentHTML("beforeend", html);
      }
    });
  };
  
  const openModalTwo = (e) => {
    modalTwo.style.visibility = "visible";
    modalTwo.style.opacity = 1;
    const target = e.target;
  
    API.products.forEach((e) => {
      if (e.id == target.id) {
        let html2 = `
        <div class="shopBox">
        <div class="pushBask">Вы добавили в корзину:</div>
        <div class="triplet">
          <img class="modalImgTwo" src="${e.img}" />
          <div class="boxBask">
            <h2 class="etitleTwo">${e.title}</h2>
            <div class="epriceTwo">${e.price} руб.</div>
          </div>
      
          <div></div>
        </div>
        <button class="btnBask">Перейти в корзину</button>
      </div>
    `;
        shopTitle.insertAdjacentHTML("beforeend", html2);
      }
    });
  };
  buttonElem.forEach((buton) => {
    buton.addEventListener("click", openModal);
  });
  
  btnElem.forEach((buton) => {
    buton.addEventListener("click", openModalTwo);
  });
  
  modalElem.addEventListener("click", closeModal);
  modalTwo.addEventListener("click", closeModalTwo);
  
  
  