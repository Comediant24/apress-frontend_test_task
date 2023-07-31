import { getProducts } from './getProducts.js'

export async function getProductById(id) {
  // запрос делаем еще раз, если вдруг список товаров измениться
  const products = await getProducts()
  return products.find((product) => product.id === id)
}
