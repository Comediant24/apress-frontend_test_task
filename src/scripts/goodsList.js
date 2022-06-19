class GoodsList {
	constructor(goodsObjArr) {
		this.goodsArr = goodsObjArr ? this.parseGoodsObj(goodsObjArr) : null;
		this.goodsListDOMElement = null;
	}

	setGoods(goodsObjArr) {
		this.goodsArr = this.parseGoodsObj(goodsObjArr);
	}

	parseGoodsObj(goodsObjArr) {
		return goodsObjArr.map((el) => new Goods(el.id, el.img, el.title, el.price));
	}
	
	getDOMElement() {
		return this.goodsListDOMElement;
	}

	setDOMElement(el) {
		this.goodsListDOMElement = el;
	}

	getHTML() {
		const fragment = document.createDocumentFragment();
		
		const root = document.createElement('div');
		root.classList.add('goods-list');
		
		for (const goods of this.goodsArr) {
			root.append(goods.getElement());
		}

		fragment.append(root);

		return fragment;
	}
}
