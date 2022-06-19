class Cart {
	constructor() {
		this.cart = [];
		this.timer = null;
		this.cartDOMElement = null;
	}

	setGoods(arr) {
		this.cart = [...arr];
	}

	getGoodsTemplate() {
		const goodsTemplates = this.cart.map(el => {
			return new CartItem(el.id, el.img, el.title, el.price, el.count).getTemplate();
		});
		
		return goodsTemplates.join("\n");
	}

	getCartTemplate() {
		const cartTemplate = `
			<div class="cart">
				<div class="cart__header">Вы добавили в корзину:</div>
				<div class="cart__list">
					${this.getGoodsTemplate()}
				</div>
				<button class="cart__go-to-cart">Перейти в корзину</button>
			</div>`
		
		return cartTemplate;
	}

	getHTML() {
		const cartTmp = new DOMParser().parseFromString(this.getCartTemplate(), 'text/html');
		const cart = cartTmp.getElementsByClassName('cart')[0];

		return cart;
	}

	getDOMElement() {
		return this.cartDOMElement;
	}

	setDOMElement(el) {
		this.cartDOMElement = el;
	}

	handleClick(e) {
		const parent = e.target.closest('.cart__item-delete');
		if (parent) {
			const goods = parent.closest('.cart__item');
			
			let event = new CustomEvent(Events.DEL_FROM_CART, {detail: {
				id: goods.dataset.id
			}});
			document.dispatchEvent(event);
		}
	}

	update() {
		if (this.cartDOMElement) {
			const cartList = this.cartDOMElement.getElementsByClassName('cart__list')[0];
			cartList.onclick = (e) => { this.handleClick(e) };
			cartList.onmouseover = (e) => { this.hoverHandle(e) };
			cartList.onmouseleave = (e) => { this.blurHandle(e) };

			if (cartList) {
				cartList.innerHTML = "";

				const goods = this.getHTML().getElementsByClassName('cart__list');
				for (let i = 0; i < goods.length; i++) {
					cartList.append(goods[i]);
				}
			}
		}
	}

	hoverHandle(e) {
		if (this.timer) {
			clearTimeout(this.timer);
		}
	}

	blurHandle(e) {
		if (this.timer) {
			clearTimeout(this.timer);
		}

		this.timer = setTimeout(() => {
			this.hide();
		}, 3000);
	}

	hide() {
		if (this.cartDOMElement) {
			this.cartDOMElement.classList.add('cart--hide');
		}
	}

	show() {
		if (this.cartDOMElement) {
			this.cartDOMElement.classList.remove('cart--hide');

			if (this.timer) {
				clearTimeout(this.timer);
			}

			this.timer = setTimeout(() => {
				this.hide();
			}, 3000);
		}
	}
}