const app = document.querySelector('.product-listing-wrapper');

// Типы Событиый
const Events = {
	ORDER: 'order',
	CLOSE_ORDER: 'close_order',
	ADD_TO_CART: 'add_to_cart',
	DEL_FROM_CART: 'del_from_cart'
}

// Обработчики событий
document.addEventListener(Events.ORDER, (event) => {
	const {id, img, title, price} = event.detail;
	order.setGoods(id, img, title, price );
	state.showOrder();
});

document.addEventListener(Events.CLOSE_ORDER, (event) => {
	state.hideOrder();
});

document.addEventListener(Events.ADD_TO_CART, (event) => {
	state.addToCart(event.detail);
	state.showCart();
});

document.addEventListener(Events.DEL_FROM_CART, (event) => {
	state.delFromCart(event.detail.id);
});

// Инициализация компонентов
const goodsList = new GoodsList();
const skelet = new Skeleton();
const order = new Order();
const cart = new Cart();

// Добавление в корень

const cartElement = app.appendChild(cart.getHTML());
cart.setDOMElement(cartElement);

const orderElement = app.appendChild(order.getHTML());
order.setDOMElement(orderElement);

const skeletElement = app.appendChild(skelet.getHTML());

// Эмитация загрузки 
new Promise((resolve) => {
	setTimeout(() => {
		resolve(API.products)
	}, 2000);
}).then((data) => {
	app.removeChild(skeletElement);

	goodsList.setGoods(data);

	let goodsElement = app.appendChild(goodsList.getHTML());
	goodsList.setDOMElement(goodsElement);
}) 


//  Листенеры изменний состояния 
function renderCart() {
	cart.setGoods([...state.getCart()]);
	if (state.isShowCart()) {
		cart.update();
		cart.show();
	} else {
		cart.hide();
	}
}

function renderOrder() {
	if (state.isShowOrder()) {
		order.update();
		order.show();
	} else {
		order.hide();
	}
}

// Подписка на события изменения состояния
reactive.watchEffect(renderCart);
reactive.watchEffect(renderOrder);


