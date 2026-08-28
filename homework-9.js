//Задание 2 

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNumbers = numbers.filter(numbers => numbers > 4);
console.log(newNumbers);

//Задание 3

const footballClubs = ["PSG", "Manchester United", "Liverpool", "Barcelona", "Manchester City"];
function searchClub(club) {
if (typeof club === "string") {
  return footballClubs.includes(club);
} else {
  return "Название клуба должно быть строкой";
}
}

console.log(searchClub(123));

//Задание 4

function reverseArray(array) {
console.log(array.reverse())
}
reverseArray (newNumbers)
reverseArray (footballClubs)

//Уровень 2
// Задание 6 и 7

import { socialNetworkComments } from "./comments.js";
const comments = socialNetworkComments;
const commentsCom = comments.filter(comment => comment.email.includes('.com'))
console.log(commentsCom);

//Задание 8

const usersId = comments.map(comment => {
  if (comment.id <= 5) {
    comment.postId = 2;
  } else {
    comment.postId = 1;
  }
  return comment;
}); 
console.log(usersId);

//Задание 9

const usersIdandName = comments.map(({id, name })  => {
return {id, name };
})

console.log(usersIdandName);

//Задание 10

const usersBodyText = comments.map (comment => ({
...comment, isInvalid:comment.body.length > 180 ? true : false
}))

console.log (usersBodyText)

//Уровень 3
// Задание 11

const usersEmailsArray = comments.reduce ((emails, comment) =>{
  emails.push(comment.email);
  return emails;
},[])

console.log(usersEmailsArray)

const usersEmailsArrayNew = comments.map (comment => {
return comment.email;
})
console.log(usersEmailsArrayNew)

//Задание 12

const emailsByString = usersEmailsArrayNew.toString();
console.log(emailsByString)

const emailsByJoin = usersEmailsArrayNew.join("///");
console.log(emailsByJoin)