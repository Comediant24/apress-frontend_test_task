import {onCardClickHandler} from './card-handlers.js'

const root = document.querySelector('.root');
const cardTemplate = document.querySelector('#card').content.querySelector('.card-item');

export const renderCards = (cardsValues) => {
  const cardFragment = document.createDocumentFragment();

  cardsValues.forEach((card) => {
    const cardItem = cardTemplate.cloneNode(true);
    const cardImage = cardItem.querySelector('.card-item__img');
    const cardName = cardItem.querySelector('.card-item__name');
    const cardPrice = cardItem.querySelector('.card-item__price');

    cardImage.src = `../${card.img}`;
    cardImage.alt = card.title;
    cardName.textContent = card.title;
    cardPrice.textContent = `${card.price} руб.`;

    cardItem.dataset.id = card.id;
    cardFragment.appendChild(cardItem);

    cardItem.addEventListener('click', onCardClickHandler);
  });

  let ul = document.createElement('ul');
  ul.classList.add('card-list', 'card-list__wrapper');
  ul.appendChild(cardFragment);
  root.appendChild(ul);
};
