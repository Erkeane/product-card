//Задание 4 с reduce

import { products } from './products-array.js';
const aboutProduct = products.reduce((acc, product) => {
  acc.push({ [product.productName]: product.description });
  return acc;
}, []);

console.log(aboutProduct);

// шаблон

const productcardsInfoTemplate = document.getElementById('productcardsInfo-template');
const productcardsList = document.getElementById('productcards-List');

const renderCards = (array) => {
  array.forEach(product => {
    const productDuplicate = productcardsInfoTemplate.content.cloneNode(true);
    productDuplicate.querySelector('.card__image').src = product.image
    productDuplicate.querySelector('.card__category').textContent = product.category
    productDuplicate.querySelector('.card__name').textContent = product.productName
    productDuplicate.querySelector('.card__description').textContent = product.description
    productDuplicate.querySelector('.li-1').textContent = product.li_1
    productDuplicate.querySelector('.li-2').textContent = product.li_2
    productDuplicate.querySelector('.li-3').textContent = product.li_3
    productDuplicate.querySelector('.card__price-value').textContent = product.price
    productcardsList.appendChild(productDuplicate)
    console.log(productcardsList)
  });
}


//Задание 5
const askNumber = () => {
  const answer = Number(prompt("Сколько карточек отобразить? От 1 до 5"));
  if (answer >= 1 && answer <= 5) {
    return answer;
  } else {
    alert ("Введите только число от 1 до 5");
  }
}

const cardsToShow = askNumber();
const limitedCards = products.slice(0, cardsToShow);
renderCards(limitedCards)