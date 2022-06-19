const state = (function() {
	const state = reactive.createState({
		cart: [],
		loading: true,
		showCart: false,
		showOrder: false,
	});

	function addToCart(goods) {
		const el = state.cart.find(el => el.id === goods.id);
		console.log(el);
		if (!el) {
			state.cart.push({...goods, count: 1});
			return;
		} 

		el.count = el.count + 1;
	}

	function delFromCart(id) {
		const tmp = state.cart.filter(el => el.id != id);
		state.cart = [...tmp];

		if (!state.cart.length) {
			state.showCart = false;
		}
	}

	function showCart() {
		state.showCart = true;
	}

	function hideCart() {
		state.showCart = false;
	}

	function showOrder() {
		state.showOrder = true;
	}

	function hideOrder() {
		state.showOrder = false;
	}

	function getCart() {
		return state.cart;
	}

	function isShowCart() {
		return state.showCart;
	}

	function isShowOrder() {
		return state.showOrder;
	}

	return {
		getCart,
		showCart,
		addToCart,
		delFromCart,
		isShowCart,
		isShowOrder,
		showOrder,
		hideOrder,
	}
})();

