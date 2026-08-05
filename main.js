//Изменение цвета одной карточки
const productCard = document.querySelector('.products__card'); 
const changeColorCardButton = document.querySelector('.change-color-button');
const greenColorHash= '#00bbff';

changeColorCardButton.addEventListener('click', () => {
  productCard.style.backgroundColor = greenColorHash;
});

//Изменение цвета всех карточек
const productCards = document.querySelectorAll('.products__card');
const changeColorAllCardsButton = document.querySelector('.change-colors-button');
const blueColorHash = '#f5f098';

changeColorAllCardsButton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = blueColorHash)
});

//Открытие Google
const openGoogleButton = document.querySelector('.open-google-button');
openGoogleButton.addEventListener('click', openGoogle)

function openGoogle() {
  const question = confirm('Вы действительно хотите открыть Google?');
  if (question === true) {
    window.open('https://www.google.com');
  }else {
    return;
}
}

//Вывод консоль лог

const outputLogButton = document.querySelector('.output-console-log-button');

outputLogButton.addEventListener('click', () => outputConsoleLog('ДЗ №6'));

function outputConsoleLog(message) {
  alert(message)
  console.log(message)
}

//Выбери свой продукт
const titleButton = document.querySelector('.title');
{titleButton.addEventListener('mouseover', () => {
  console.log(titleButton.textContent);
})
}

const clickMeButton = document.querySelector('.click-me');
clickMeButton.addEventListener('click', () => {
  clickMeButton.classList.toggle('click-me--active');
  });
