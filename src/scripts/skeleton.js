class Skeleton {
	constructor(count = 3) {
		this.count = count;
		this.DOMElement = null;
		this.HTMLElement = this.createGoodsElement();
	}

	goodsTemplate = 
		`<div class="skelet">
			<div class="skelet__img"></div>
			<div class="skelet__description">
				<div class="skelet__name"></div>
				<div class="skelet_price"></div>
			</div>
			<div class="skelet__btns">
				<button class="skelet__btn"></button>
				<button class="skelet__btn"></button>
			</div>
		</div>`;


	goodsListTemplate(count) {
		const goods = new Array(count).fill(this.goodsTemplate).join('\n');
		const goodsListTemplate = `
			<div class="sekelet__list">
				${goods}
			</div>
		`
		return goodsListTemplate;
	}

	createGoodsElement() {
		const goodsDOMElement = new DOMParser().parseFromString(this.goodsListTemplate(this.count), 'text/html');
		const goods = goodsDOMElement.getElementsByClassName('sekelet__list')[0];

		return goods;
	}

	getHTML() {
		return this.HTMLElement;
	}
}
