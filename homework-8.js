// 1.Объект с инфо 
const userInfo = {
  name: "Erkin",
  surname: "Iskandarov",
  age: 32,
  gender: "male",
  country: "Kazakhstan",
  city: "Kostanay",
  job: "student",
  email: "er_is@inbox.ru"
}


//2.Инфо о машине марка, модель, год выпуска, цвет, вид коробки
const carInfo = {
car: "Skoda",
model: "Fabia 2",
year: 2014,
color: "Blue",
transmission: "automatic"
}

carInfo.owner = userInfo;


//3.Функция - максимальная скорость

function checkMaxSpeed(car) {
  if (!("maxSpeed" in car)) {
car.maxSpeed = 220
}
}

checkMaxSpeed(carInfo);
console.log(carInfo);


//4.Функция с двумя аргументами

function showInfo (myObject, person){
  console.log (myObject[person]);
}
//showInfo(userInfo, "name");


//5.Создать массив, который содержит названия продуктов (просто строки)

const lavash = ['salt', 'water', 'flour'];


//6. Массив с фильмами

const films = [
  { 
  name: "Kill Bill", 
  date: 2003, 
  director: "Q.Tarantino",
  genre: "Action / Drama"
},
  {
    name: "Interstellar", 
    date: 2014, 
    director: "C.Nolan", 
    genre: "Sci-Fi / Adventure"
  },
  {
    name: "Gladiator", 
    date: 2000, 
    director: "R.Scott", 
    genre: "Action / Adventure"}
]
films.push({name: "Fight Club", date: 1999, director: "D.Fincher", genre: "Drama / Thriller"})

console.log(films)


//7. Добавить и объединить массивы

const marvel = [
  {
    name: "Avengers: Age of Ultron", 
    date: 2015, 
    director: "J.Whedon", 
    genre: "Sci-Fi / Adventure"
  },
  {
    name: "Avengers: Infinity War", 
    date: 2018, 
    director: "A.Russo, J.Russo", 
    genre: "Sci-Fi / Action"
  },
  {
    name: "Avengers: Endgame", 
    date: 2019, 
    director: "A.Russo, J.Russo", 
    genre: "Drama / Action"
  }
]

const allFilms = [...films, ...marvel ];
console.log(allFilms);

//8. Метод массива - мар

function isMovieRare(films) {
  return films.map(function(film) {
let isRare;

if (film.date > 2000) {
  isRare = true;
} else {
  isRare = false;
}

return {
  ...film,
  isRare: isRare
};
  });
}

const rareFilms = isMovieRare(allFilms);
console.log(rareFilms);