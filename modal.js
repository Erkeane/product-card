export class Modal {
  constructor(modalId) {
    this.modal = document.querySelector(modalId);
    this.overlay = document.querySelector(`.overlay`);
    this.closeButton = document.querySelector(`.modal__close`);

this.closeModalButton();
  }

  open() {
    this.modal.classList.add('modal-showed');
    this.overlay.classList.add('modal-showed');
  }

  close() {
    this.modal.classList.remove('modal-showed');
    this.overlay.classList.remove('modal-showed');
  }

  checkOpening() {
    return this.modal.classList.contains('modal-showed');
  }

  closeModalButton() {
    this.closeButton.addEventListener('click', () => {
      this.close();
    });
  }
}
