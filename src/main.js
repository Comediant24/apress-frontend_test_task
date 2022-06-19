function include(urls) {
	if (urls.length) {
		for (let i = 0; i < urls.length; i++) {
			let script = document.createElement('script');
			script.type = 'text/javascript';
			script.async = false;
			script.src = urls[i];
			document.getElementsByTagName('body')[0].appendChild(script);
		}
	}
}

include([
	//utils
	'./scripts/reactive.js',
	'./scripts/state.js',

	//components
	'./scripts/skeleton.js',
	'./scripts/cart.js',
	'./scripts/order.js',
	'./scripts/cartItem.js',
	'./scripts/goods.js',
	'./scripts/goodsList.js',

	// 
	'./scripts/app.js',
])