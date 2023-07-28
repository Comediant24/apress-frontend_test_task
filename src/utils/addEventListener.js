const addEventListenerBtns = (orderFunc, cartFunc)=>{
  let orderButtons = document.querySelectorAll(".orderButton")
  let cartButtons = document.querySelectorAll(".cartButton")
  for (let i = 0; i<orderButtons.length;i++){
    orderButtons[i].addEventListener("click", orderFunc);
    cartButtons[i].addEventListener("click", cartFunc);
  }
}

export {addEventListenerBtns}