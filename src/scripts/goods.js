class Goods {
	constructor(id, imgSrc, name, price) {
		this.id = id;
		this.img = imgSrc;
		this.name = name;
		this.price = price;
		this.goods = this.createGoodsElement();
	}

	formatPrice(number) {
		return number.toLocaleString('ru') + ' руб.';
	}

	goodsTemplate() {
		const template = 
			`<div class="goods" data-id="${this.id}">
				<div class="goods__img">
					<img src="${this.img}" width="170" height="170" alt="${this.name}" >
				</div>
				<div class="goods__description">
					<div class="goods__name">
						${this.name}
					</div>
					<div class="goods_price">
						${this.formatPrice(this.price)}
					</div>
				</div>
				<div class="goods__btns">
					<button id="order" class="goods__btn goods__btn--order" data-btn="order">
						Заказать
					</button>
					<button id="addToCart" class="goods__btn goods__btn--cart" data-btn="to-cart">
						В коризину
					</button>
				</div>
			</div>`;
		
		return template;
	}

	clickHandler(e) {
		if (e.target.dataset.btn === 'order') {
			let event = new CustomEvent(Events.ORDER, {
				detail: {
					id: this.id,
					img: this.img,
					title: this.name,
					price: this.price
				}
			});
			document.dispatchEvent(event);
		}

		if (e.target.dataset.btn === 'to-cart') {
			let event = new CustomEvent(Events.ADD_TO_CART, {
				detail: {
					id: this.id,
					img: this.img,
					title: this.name,
					price: this.price
				}
			});
			document.dispatchEvent(event);
		}
	}

	// HTMLElement
	createGoodsElement() {
		const goodsTmp = new DOMParser().parseFromString(this.goodsTemplate(), 'text/html');
		const goods = goodsTmp.getElementsByClassName('goods')[0];
		goods.onclick = (e) => {this.clickHandler(e)};

		return goods;
	}

	// HTMLElement
	getElement() {
		return this.goods;
	}
}
