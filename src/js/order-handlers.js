const onOrderClickHandler = (evt) => {
  if (Array.from(evt.target.classList).includes('order__close-button')) {
    const orderModal = document.querySelector('.order');
    orderModal.classList.remove('order__wrapper--active');
    orderModal.removeEventListener('click', onOrderClick);
  }
}
