
function message(city, temperature) {
  console.log(`Cейчас в городе ${city} температура - ${temperature} градусов по Цельсию`)
}
message(`Костанай`,35)



const LIGHT_SPEED = 299792458;
function testSpeed(speed) {
  if (speed > LIGHT_SPEED){
    console.log(`Сверхсветовая скорость`)
  }
  else if (speed < LIGHT_SPEED){
    console.log(`Субсветовая скорость`)
  }
  else{
    console.log(`Световая`)
  }
}
testSpeed(221)



const product = `Хлеб`;
let price = 20;

const buyProduct=(budget) => {
  if (budget >= price) {
    console.log(`${product} приобретён. Спасибо за покупку!"`)
  }
  else {
    console.log(`Вам не хватает ${price - budget}$, пополните баланс`)
  }
}

buyProduct(5)




const name = `Эркин`
const surname = `Искандаров`
const age = 32
const aboutStudent = ()=> {
  console.log(`Привет я ${name} ${surname} и мне ${age}`)
}

aboutStudent()
