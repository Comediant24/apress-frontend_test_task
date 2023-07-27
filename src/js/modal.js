class Modal {
  constructor(popupModalSelector, modalSelector, modalContentSelector, modalCrossSelector) {
    this.popupModal = document.querySelector(popupModalSelector);
    this.modal = document.querySelector(modalSelector);
    this.modalContent = document.querySelector(modalContentSelector);
    this.modalCross = document.querySelector(modalCrossSelector);

    this.closeModal = this.closeModal.bind(this);
    this.clickOnModal = this.clickOnModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  render(title, price, url) {
    this.openModal();

    const html = `<h2 class="modal__header">${title}</h2>
            <div class="modal__columns">
              <div class="modal__left">
                <img class="modal__img" src=../${url} alt=${title}>
                <span class="modal__price">${price}</span>
              </div>
              <div class="modal__right">
                <span class="modal__comment" >Комментарий <br> к заказу:</span>
                <textarea name="" id="" class="modal__textarea"></textarea>
              </div>
            </div>`;

    this.modalContent.innerHTML = html;
    this.#addListeners();
  }

  openModal() {
    this.popupModal.setAttribute("data-active", true);
  }

  clickOnModal(e) {
    e.stopPropagation();
  }

  #addListeners() {
    this.popupModal.addEventListener("click", this.closeModal);
    this.modalCross.addEventListener("click", this.closeModal);
    this.modal.addEventListener("click", this.clickOnModal);
  }

  #removeListeners() {
    this.popupModal.removeEventListener("click", this.closeModal);
    this.modalCross.removeEventListener("click", this.closeModal);
    this.modal.removeEventListener("click", this.clickOnModal);
  }

  closeModal() {
    this.popupModal.setAttribute("data-active", false);
    this.#removeListeners();
  }
}

export const modal = new Modal(".popup-modal", ".modal", ".modal__content", ".modal__cross");
