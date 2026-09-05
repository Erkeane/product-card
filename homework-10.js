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
    productDuplicate.querySelector('.card__price-value').textContent = product.price

    const compoundList = productDuplicate.querySelector('.compound__list');
    product.compound.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      li.classList.add('compound__item');
      compoundList.appendChild(li);
    });
    
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