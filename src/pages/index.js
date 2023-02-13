// объявление переменных для работы с карточками
const cardsContainer = document.querySelector('.cards');
const cardTemplate = document.querySelector('#product-card-template').content;

// объявление переменных для всплывающих окон
const popupOrder = document.querySelector('.popup-order'); // всплывающее окно с заказом
const popupOrderTitle = popupOrder.querySelector('.popup-order__title');
const popupOrderPhoto = popupOrder.querySelector('.popup-order__photo');
const popupOrderCost = popupOrder.querySelector('.popup-order__cost');
const popupOrderClose = popupOrder.querySelector('.popup-order__close');

// объявление функций для работы на странице
const createCard = (titleValue, costValue, photoValue) => {  // функция создания карточки
  const cardElement = cardTemplate.querySelector('.product-card').cloneNode(true);
  const cardPhoto = cardElement.querySelector('.product-card__photo');
  cardPhoto.src = photoValue;
  cardPhoto.alt = titleValue;
  cardElement.querySelector('.product-card__title').textContent = titleValue;
  const cost = `${costValue} руб.`;
  cardElement.querySelector('.product-card__cost').textContent = cost;
  cardElement.querySelector('.product-card__order-button').addEventListener('click', () => {   // открывать всплывающее окно с заказом при нажатие на кнопку
    openPopupOrder(titleValue, cost, photoValue);
  });
  return cardElement;
};

const addCard = (titleValue, costValue, photoValue) => { // функция создания и добавления карточки в разметку
  const cardElement = createCard(titleValue, costValue, photoValue);
  cardsContainer.prepend(cardElement);
};

const openPopupOrder = (titleValue, costValue, photoValue) => {  // функция для открытия всплывающего окна 
  popupOrder.classList.add('popup-order_opened');
  popupOrderTitle.textContent = titleValue;
  popupOrderCost.textContent = costValue;
  popupOrderPhoto.src = photoValue;
  popupOrderPhoto.alt = titleValue;
  document.addEventListener('keydown', closeByEscape);
};

const closePopup = () => {
  popupOrder.classList.remove('popup-order_opened');
  document.removeEventListener('keydown', closeByEscape);
};

const closeByEscape = (evt) => {   // закрытие всплывающего окна нажатием на "Escape"
  if (evt.key === 'Escape') {
    closePopup(popupOrder);
  };
};

API.products.forEach((card) => { // заполнение начальными карточками
  const img = `../${card.img}`;
  addCard(card.title, card.price, img);
});

popupOrderClose.addEventListener('click', () => { // закрывать всплывающее окно с заказом при нажатии на крестик
  closePopup();
});
