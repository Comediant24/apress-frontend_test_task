class Order {
	constructor() {
		this.id = 0;
		this.img = '';
		this.name = '';
		this.price = 0;
	}

	setGoods(id, img, title, price) {
		this.id = 0;
		this.img = img;
		this.name = title;
		this.price = price;
	}

	formatPrice(number) {
		return number.toLocaleString('ru') + ' руб.';
	}

	getTemplate() {
		const cartTemplate = `
			<div class="order">
				<div class="order__title">
					${this.name}
				</div>
				<div class="order__body">
					<div class="order__goods">
						<div class="order__img">
							<img src="${this.img}" width="170" height="170" alt="${this.name}">
						</div>
						<div class="order__price">
							${this.formatPrice(this.price)}
						</div>
					</div>
					<div class="order__comment">
						<label for="comment">Комментарий к <br/> заказу:</label>
						<textarea name="comment" id="comment"></textarea>
					</div>
				</div>
				<div class="order__phone">
					<label for="phone">Ваш телефон:</label>
					<input type="text" name="phone">
				</div>
				<button class="order__btn">
					Отправить
				</button>
				<div class="order__close">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#474747">
						<path
							d="M14.121,12,18,8.117A1.5,1.5,0,0,0,15.883,6L12,9.879,8.11,5.988A1.5,1.5,0,1,0,5.988,8.11L9.879,12,6,15.882A1.5,1.5,0,1,0,8.118,18L12,14.121,15.878,18A1.5,1.5,0,0,0,18,15.878Z">
					</svg>
				</div>
			</div>`;
		
		return cartTemplate;
	}

	handleClick(e) {
		const closeEvent = e.target.classList.contains('.order__close') || e.target.closest('.order__close');
		if (closeEvent) {

			let event = new CustomEvent(Events.CLOSE_ORDER);
			document.dispatchEvent(event);
		}
	}

	getHTML() {
		const orderDOM = new DOMParser().parseFromString(this.getTemplate(), 'text/html');
		const orderElement = orderDOM.getElementsByClassName('order')[0];
		orderElement.onclick = (e) => {this.handleClick(e)};

		return orderElement; 
	}

	getDOMElement() {
		return this.orderDOMElement;
	}

	setDOMElement(el) {
		this.orderDOMElement = el;
	}

	update() {
		console.dir(this.orderDOMElement);
		if (this.orderDOMElement) {
			this.orderDOMElement.innerHTML = '';
			this.orderDOMElement.append(...this.getHTML().childNodes)
		}
	}

	hide() {
		if (this.orderDOMElement) {
			this.orderDOMElement.classList.add('order--hide');
		}
	}

	show() {
		if (this.orderDOMElement) {
			this.orderDOMElement.classList.remove('order--hide');
		}
	}
}