export function fetchData() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(API.products)
    }, 1000),
      (error) => {
        rej(error)
      }
  })
}
