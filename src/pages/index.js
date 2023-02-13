// объявление переменных для работы с карточками
const cardsContainer = document.querySelector('.cards');
const cardTemplateSelector = '#product-card-template';

// объявление переменных для всплывающих окон
const popupOrder = document.querySelector('.popup-order'); // всплывающее окно с заказом
const popupOrderTitle = popupOrder.querySelector('.popup-order__title');
const popupOrderPhoto = popupOrder.querySelector('.popup-order__photo');
const popupOrderCost = popupOrder.querySelector('.popup-order__cost');
const popupOrderComment = popupOrder.querySelector('.popup-order__comment');
const popupOrderPhone = popupOrder.querySelector('.popup-order__input');
const popupBasket = document.querySelector('.popup-basket'); // всплывающее окно с корзиной
const popupBasketTitle = popupBasket.querySelector('.popup-basket__title');
const popupBasketPhoto = popupBasket.querySelector('.popup-basket__photo');
const popupBasketCost = popupBasket.querySelector('.popup-basket__cost');

const createCard = (info, cardSelector) => {
  const card = new ProductCard(
    info,
    cardSelector,
    () => { // открывать всплывающее окно с заказом при нажатие на кнопку "Заказать"
      openPopupOrder(info.title, info.cost, info.photo);
    },
    () => { // добавлять товар в корзину при нажатии на кнопку "В корзину"
      openPopupBasket(info.title, info.cost, info.photo);
    }
  );
  return card.createCard();
};

const addCard = (info, cardSelector) => { // функция создания и добавления карточки в разметку
  const cardElement = createCard(info, cardSelector);
  cardsContainer.prepend(cardElement);
};

const openPopupOrder = (titleValue, costValue, photoValue) => { // функция для открытия всплывающего окна
  popupOrder.classList.add('popup-order_opened');
  popupOrderTitle.textContent = titleValue;
  popupOrderCost.textContent = costValue;
  popupOrderPhoto.src = photoValue;
  popupOrderPhoto.alt = titleValue;
  document.addEventListener('keydown', closeByEscape);
};

const closePopup = () => {
  popupOrderComment.value = '';
  popupOrderPhone.value = '';
  popupOrder.classList.remove('popup-order_opened');
  document.removeEventListener('keydown', closeByEscape);
};

const closeByEscape = (evt) => { // закрытие всплывающего окна нажатием на клавишу "Escape"
  if (evt.key === 'Escape') {
    closePopup(popupOrder);
  };
};

const openPopupBasket = (titleValue, costValue, photoValue) => { // функция для открытия корзины
  if (!popupBasket.classList.contains("popup-basket_opened")) {
    popupBasket.classList.add('popup-basket_opened');
  };
  popupBasketTitle.textContent = titleValue;
  popupBasketCost.textContent = costValue;
  popupBasketPhoto.src = photoValue;
  popupBasketPhoto.alt = titleValue;
};

API.products.forEach((card) => { // заполнение начальными карточками
  let cost;
  if (card.price / 1000 > 1) {
    if (card.price % 1000 !== 0) {
      cost = `${(card.price - card.price % 1000) / 1000} ${card.price % 1000} руб.`;
    } else {
      cost = `${(card.price - card.price % 1000) / 1000} 000 руб.`;
    };
  } else {
    cost = `${card.price} руб.`;
  };
  const info = {title: card.title, cost: cost, photo: `../${card.img}`};
  addCard(info, cardTemplateSelector);
});

popupOrder.addEventListener('mousedown', (evt) => { // закрывать всплывающее окно с заказом при нажатии на крестик или тёмный фон
  if (evt.target.classList.contains('popup-order_opened')) {
    closePopup();
  };
  if (evt.target.classList.contains('popup-order__close')) {
    closePopup();
  };
});
