const reactive = (function() {
	let activeEffect;

	class Dependency {
		constructor() {
			this.subscribers = new Set();
		}
		
		depend() {
			if (activeEffect) {
				this.subscribers.add(activeEffect);			
			}
		}

		notify() {
			this.subscribers.forEach(sub => sub());
		}
	}

	function createState(obj) {
		Object.keys(obj).forEach(key => {
			const dep = new Dependency();
			let value = obj[key];

			Object.defineProperty(obj, key, {
				get() {
					dep.depend();
					return value;
				},
				set(newVal) {
					value = newVal;
					dep.notify();
				}
			})
		})

		return obj;
	}

	function watchEffect(fn){
		activeEffect = fn;
		fn();
		activeEffect = null;
	}

	return {
		createState,
		watchEffect,
	}
})();
