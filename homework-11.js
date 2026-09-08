// Уровень 1
const footerForm = document.querySelector('.footer__form')
footerForm.addEventListener('submit', (event) => {
  event.preventDefault()
  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries())
  console.log(data)
})

// Уровень 2
const registrationButton = document.querySelector('.registration');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeButton = document.querySelector('.modal__close');
const registrationForm = document.querySelector('.modal__form');

let user;

registrationButton.addEventListener('click', () => {
  modal.classList.add('modal-showed');
  overlay.classList.add('modal-showed');
});

closeButton.addEventListener('click', () => {
  modal.classList.remove('modal-showed');
  overlay.classList.remove('modal-showed');
});

registrationForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const password = registrationForm.password.value;
  const repeatPassword = registrationForm.repeatPassword.value;

  if (!registrationForm.checkValidity() || password !== repeatPassword) {
    alert('Регистрация отклонена. Пароли не совпдают. Проверьте правильность заполнения формы.');
    return;
  }

  const formData = new FormData(registrationForm);
  const data = Object.fromEntries(formData.entries());
  data.createdOn = new Date();

  user = data;
  console.log(user);

  modal.classList.remove('modal-showed');
  overlay.classList.remove('modal-showed');
  registrationForm.reset();
});