import API from "../api/products.js";
import getData from "./utils/getData.js";
import addOrder from "./utils/addOrder.js";
import addToCart from "./utils/addToCart.js";
import addMarkupToPage from "./utils/addMarkupToPage.js";

const list = document.querySelector('.list')

let products = []

if (!products.length) {
    list.textContent = 'Loading'
}

products = await getData(API)

if (products.length) {
    list.textContent = ''
    products.forEach(p => addMarkupToPage(p,addOrder,addToCart))
}




