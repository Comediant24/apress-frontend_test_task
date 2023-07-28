import Api from "./components/Api.js";
import Section from "./components/Section.js";
import Card from "./components/Card.js";
import Popup from "./components/Popup.js";
import PopupOrder from "./components/PopupOrder.js";
import BasketCard from "./components/BasketCard.js";
import {
  cardsContainer,
  basketContainer,
  basketButton,
  basketPopupButton,
} from "./utils/constants.js";

export let baskerArr = [];

const api = new Api();

const popupBasket = new Popup(".popup__basket");

const cardsList = new Section(
  {
    renderer: (item, basketArr) =>
      cardsContainer.prepend(createCard(item, basketArr)),
  },
  baskerArr,
);

const basketList = new Section({
  renderer: (item, num, basketArr) =>
    basketContainer.append(createBasketCard(item, num, basketArr)),
});

const orderPopup = new PopupOrder(".popup__order");
orderPopup.setEventListeners();

const createCard = item => {
  const card = new Card(
    item,
    "#furniture",
    function openCard(link, name, price) {
      orderPopup.open(link, name, price);
    },
    function addCard(item) {
      basketContainer.innerHTML = "";
      baskerArr.push(item);
      basketList.rendererItemsAndNum(baskerArr);
    },
    function openBasket() {
      popupBasket.open();
    },
  );
  const cardElement = card.generate();
  return cardElement;
};

const createBasketCard = (item, num, basketArr) => {
  const basketCard = new BasketCard(
    item,
    "#basket-item",
    num,
    basketArr,
    function deleteItem(id) {
      basketContainer.innerHTML = "";
      baskerArr = baskerArr.filter(item => item.id !== id);
      basketList.rendererItemsAndNum(baskerArr);
    },
  );
  const basketCardElement = basketCard.generate();
  return basketCardElement;
};

api
  .getFakeData()
  .then(res => cardsList.rendererItems(res.products.reverse()))
  .catch(rej => console.log(rej));

basketButton.addEventListener("click", () => {
  if (!basketPopupButton.classList.contains("popup_opened")) {
    popupBasket.open();
  } else {
    popupBasket.close();
  }
});
