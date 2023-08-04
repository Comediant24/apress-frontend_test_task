// Мокап API для получения списка товаров
const mockAPI = {
  getProducts: () => {
    return new Promise((resolve, reject) => {
      // Здесь можно добавить имитацию асинхронного запроса
      const products = [
        { id: 1, name: "Product 1", price: 10, image: "./assets/images/1.jpg" },
        { id: 2, name: "Product 2", price: 20, image: "./assets/images/2.jpg" },
        { id: 3, name: "Product 3", price: 30, image: "./assets/images/3.jpg" },
        { id: 4, name: "Product 4", price: 40, image: "./assets/images/4.jpg" }
      ];
      
      resolve(products);
    });
  }
};

// Функция для отрисовки списка товаров
function renderProductListing(products) {
  const productListingElement = document.getElementById("product-listing");

  // Проходимся по каждому товару и создаем HTML элемент
  products.forEach(product => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");

    const imageElement = document.createElement("img");
    imageElement.src = product.image;
    productElement.appendChild(imageElement);

    const nameElement = document.createElement("div");
    nameElement.classList.add("name");
    nameElement.innerText = product.name;
    productElement.appendChild(nameElement);

    const priceElement = document.createElement("div");
    priceElement.classList.add("price");
    priceElement.innerText = `Price: $${product.price}`;
    productElement.appendChild(priceElement);

    // Добавляем кнопки заказа и добавления в корзину
    const orderButton = createOrderButton(product);
    productElement.appendChild(orderButton);

    const addToCartButton = createAddToCartButton(product);
    productElement.appendChild(addToCartButton);

    productListingElement.appendChild(productElement);
  });
}

// Функция для создания кнопки заказа
function createOrderButton(product) {
  const button = document.createElement("button");
  button.classList.add("order-button"); // Добавляем класс "order-button"
  button.innerText = "Order";
  button.addEventListener("click", () => {
    openOrderPopup(product);
  });

  return button;
}


// Функция для создания кнопки добавления в корзину
function createAddToCartButton(product) {
  const button = document.createElement("button");
  button.innerText = "Add to Cart";
  button.addEventListener("click", () => {
    showAddToCartPopup(product);
  });

  return button;
}

// Функция для открытия попапа заказа
function openOrderPopup(product) {
  const popupElement = document.createElement("div");
  popupElement.classList.add("order-popup");

  const titleElement = document.createElement("h3");
  titleElement.innerText = "Order";
  popupElement.appendChild(titleElement);

  const imageElement = document.createElement("img");
  imageElement.src = product.image;
  popupElement.appendChild(imageElement);

  const priceElement = document.createElement("div");
  priceElement.innerText = `Price: $${product.price}`;
  popupElement.appendChild(priceElement);

  const commentElement = document.createElement("textarea");
  commentElement.placeholder = "Comment";
  popupElement.appendChild(commentElement);

  const phoneElement = document.createElement("input");
  phoneElement.type = "text";
  phoneElement.placeholder = "Phone Number";
  popupElement.appendChild(phoneElement);

  const submitButton = document.createElement("button");
  submitButton.innerText = "Submit";
  popupElement.appendChild(submitButton);

  document.body.appendChild(popupElement);
}

// Функция для показа попапа с уведомлением об успешном добавлении в корзину
  function showAddToCartPopup(product) {
    const popupElement = document.createElement("div");
    popupElement.classList.add("popup");
  
    const messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.innerText = "The product has been successfully added to your cart.";
    popupElement.appendChild(messageElement);
  
    const productInfoElement = document.createElement("div");
    productInfoElement.classList.add("product-info");
  
    const imageElement = document.createElement("img");
    imageElement.src = product.image;
    productInfoElement.appendChild(imageElement);
  
    const nameAndPriceElement = document.createElement("div");
    nameAndPriceElement.classList.add("name-and-price");
  
    const nameElement = document.createElement("div");
    nameElement.classList.add("name");
    nameElement.innerText = product.name;
    nameAndPriceElement.appendChild(nameElement);
  
    const priceElement = document.createElement("div");
    priceElement.classList.add("price");
    priceElement.innerText = `Price: $${product.price}`;
    nameAndPriceElement.appendChild(priceElement);
  
    productInfoElement.appendChild(nameAndPriceElement);
  
    popupElement.appendChild(productInfoElement);
  
    const goToCartButton = document.createElement("button");
    goToCartButton.innerText = "Go to Cart";
    popupElement.appendChild(goToCartButton);
  
    document.body.appendChild(popupElement);
  
    // Добавляем обработчик события для кнопки "Go to Cart"
    goToCartButton.addEventListener("click", () => {
      goToCart();
    });
  }

// Функция для перехода на страницу корзины
function goToCart() {
  // Ну и ну...
  console.log("Go to Cart");
}

// Получаем список товаров через API и отрисовываем их
mockAPI.getProducts().then(products => {
  renderProductListing(products);
});
