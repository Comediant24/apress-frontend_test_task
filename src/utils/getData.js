function getData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data.products)
        }, 2000)
    })
}
export default getData