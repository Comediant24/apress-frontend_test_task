class CartItem {
	constructor(id, img, name, price, count) {
		this.id = id;
		this.img = img;
		this.name = name;
		this.price = price;
		this.count = count;
		// this.goods = this.createGoodsElement();
	}

	formatPrice(number) {
		return number.toLocaleString('ru') + ' руб.';
	}

	cartItemTemplate() {
		const cartItemTemplate = `
			<div class="cart__item" data-id="${this.id}">
				<div class="cart__img">
					<img src="${this.img}" width="170" height="170" alt="${this.name}">
				</div>
				<div class="cart__description">
					<div class="cart__title">
						${this.name}
					</div>
					<div class="cart__price">
						${this.count} x ${this.formatPrice(this.price)} </br>
						${this.formatPrice(this.count  * this.price)}
					</div>
				</div>
				<div class="cart__item-delete">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#CC2157">
						<path d="M14.121,12,18,8.117A1.5,1.5,0,0,0,15.883,6L12,9.879,8.11,5.988A1.5,1.5,0,1,0,5.988,8.11L9.879,12,6,15.882A1.5,1.5,0,1,0,8.118,18L12,14.121,15.878,18A1.5,1.5,0,0,0,18,15.878Z">
					</svg>
				</div>
			</div>`
		
		return cartItemTemplate;
	}

	getTemplate() {
		return this.cartItemTemplate();
	}

	getElement() {
		return this.goods;
	}
}