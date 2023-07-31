import { createProductEl } from '../components/product.js'
import { getProducts } from '../utils/getProducts.js'

const productsList = document.querySelector('.products')

export async function createProductsList() {
  const products = await getProducts()
  products.forEach((product) => {
    const productEl = createProductEl(product)
    productsList.appendChild(productEl)
  })
}
