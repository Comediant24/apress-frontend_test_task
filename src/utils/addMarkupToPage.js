function addMarkupToPage(item, orderHandler, cartHandler) {

    const {id, title, price, img: path} = item

    // Создаем новый элемент li с классом "item"
    const newItem = document.createElement('li');
    newItem.className = 'item';

    // Создаем div с классом "item__img-block"
    const imgBlockDiv = document.createElement('div');
    imgBlockDiv.className = 'item__img-block';

    // Создаем изображение с классом "item__img" и устанавливаем src и alt атрибуты
    const img = document.createElement('img');
    img.className = 'img-product';
    img.src = `../${path}`;
    img.alt = 'product';

    // Добавляем изображение в div "item__img-block"
    imgBlockDiv.appendChild(img);

    // Создаем div с классом "item__desc desc"
    const descDiv = document.createElement('div');
    descDiv.className = 'item__desc desc';

    // Создаем заголовок p с классом "desc__title" и текстом
    const titleP = document.createElement('p');
    titleP.className = 'desc__title title';
    titleP.textContent = `${title}`;

    // Создаем абзац p с классом "desc__price"
    const priceP = document.createElement('p');
    priceP.className = 'desc__price';
    priceP.textContent = `${price} руб.`;

    // Добавляем заголовок и цену в div "item__desc desc"
    descDiv.appendChild(titleP);
    descDiv.appendChild(priceP);

    // Создаем div с классом "item__btns"
    const btnsDiv = document.createElement('div');
    btnsDiv.className = 'item__btns';

    // Создаем кнопки "Заказать" и "В корзину"
    const orderBtn = document.createElement('button');
    orderBtn.className = 'btn-red';
    orderBtn.textContent = 'Заказать';
    orderBtn.addEventListener('click', () => {
        orderHandler(title, price, path)
    })


    const addToCartBtn = document.createElement('button');
    addToCartBtn.className = 'btn-grey';
    addToCartBtn.textContent = 'В корзину';
    addToCartBtn.addEventListener('click', () => {
        cartHandler(title, price, path)
    })
    // Добавляем кнопки в div "item__btns"
    btnsDiv.appendChild(orderBtn);
    btnsDiv.appendChild(addToCartBtn);

    // Добавляем div "item__img-block", div "item__desc desc" и div "item__btns" в элемент li "item"
    newItem.appendChild(imgBlockDiv);
    newItem.appendChild(descDiv);
    newItem.appendChild(btnsDiv);

    // Находим список "list" и добавляем новый элемент li в него
    const list = document.querySelector('.list');
    list.appendChild(newItem);
}

export default addMarkupToPage