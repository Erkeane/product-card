import { Modal } from "./modal.js";
import { Form } from "./form.js";

// Уровень 1
const footerForm = new Form('.footer__form');
footerForm.form.addEventListener('submit', (event) => {
  event.preventDefault()
  const data = footerForm.getForms();
  console.log(data)
})

// Уровень 2
const registrationButton = document.querySelector('.registrationButton');
const registrationForm = new Form ('.modal__form');
const registrationModal = new Modal('.modal');
let user;

registrationButton.addEventListener('click', () => {
  registrationModal.open();
});

registrationForm.form.addEventListener('submit', (event) => {
  event.preventDefault();

const values = registrationForm.getForms();

  if (!registrationForm.checkValid() || values.password !== repeatPassword) {
    alert('Регистрация отклонена. Пароли не совпадают. Проверьте правильность заполнения формы.');
    return;
  }

  values.createdOn = new Date();
  user = values;
  console.log(user);

  registrationModal.close();
  registrationForm.resetFormValue();
});