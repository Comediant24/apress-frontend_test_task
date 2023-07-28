const getCorrectPrice = (price) =>{
  return price.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
}

const searchIndexInAPI = (id, API)=>{
  for (let index in API){
    if (API[index].id === parseInt(id)) return index
  }
}

export {getCorrectPrice, searchIndexInAPI}