const onCartClickHandler = (evt) => {
  if (Array.from(evt.target.classList).includes('cart-item__close-button')) {
    const cartModal = document.querySelector('.cart');
    cartModal.classList.remove('cart__wrapper--active');
    cartModal.removeEventListener('click', onCartClickHandler);
  }
}
