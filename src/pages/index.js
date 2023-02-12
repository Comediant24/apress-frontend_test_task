// объявление переменных для работы с карточками 
const cardsContainer = document.querySelector('.cards'); 

// объявление функций для работы на странице 
function createCard(titleValue, costValue, photoValue) {  // функция создания карточки 
  const cardTemplate = document.querySelector('#product-card-template').content;
  const cardElement = cardTemplate.querySelector('.product-card').cloneNode(true);
  const cardPhoto = cardElement.querySelector('.product-card__photo'); 
  cardPhoto.src = photoValue;
  cardPhoto.alt = titleValue;
  cardElement.querySelector('.product-card__title').textContent = titleValue;
  cardElement.querySelector('.product-card__cost').textContent = `${costValue} руб.`;
  return cardElement;
};

function addCard(titleValue, costValue, photoValue) { // функция добавления карточки
  const cardElement = createCard(titleValue, costValue, photoValue);
  cardsContainer.prepend(cardElement);
};

API.products.forEach(function(card) { // заполнение начальными карточками
  const img = `../${card.img}`;
  addCard(card.title, card.price, img);
});
