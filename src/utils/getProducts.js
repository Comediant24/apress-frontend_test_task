import { fetchData } from './fetchData.js'

export async function getProducts() {
  try {
    const data = await fetchData()
    return data
  } catch (error) {
    console.error(error)
  }
}
