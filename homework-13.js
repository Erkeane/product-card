class Drink {
  #temperature;
  constructor(name, size, price) {
    this.name = name;
    this.size = size;
    this.price = price;
  }

  getDrinkInfo() {
    return (`Ваш ${this.name} ${this.size} стоит ${this.price} $`);
  }

  getDrinkTemperature() {
    return this.#temperature;
  }

  setDrinkTemperature(ourTemperature) {
    if (typeof ourTemperature === 'number') {
      this.#temperature = ourTemperature;
    }
      else {
      console.log('Введите температуру в числовом виде!');
    }
  }

  #makeDrink() {
    if (this.#temperature > 85) {
      console.log(`Ваш напиток ${this.name} скоро приготовится!`);
    }
    else {
      console.log(`Напиток еще не готов`);
    }
    }

  serveDrink() {
    this.setDrinkTemperature(90);
    this.#makeDrink();
}
}

class Coffee extends Drink {
  constructor(name, size, price,beanType, milkType) {
    super(name, size, price);
    this.beanType = beanType;
    this.milkType = milkType;
  }

  getDrinkInfo() {
    return (`Ваш ${this.name} ${this.size} стоит ${this.price} $, зёрна: ${this.beanType}, на ослинном молоке: ${this.milkType}`);
  }
}

class Tea extends Drink {
  constructor(name, size, price, sugar, lemon) {
    super(name, size, price);
    this.sugar = sugar;
    this.lemon = lemon;
  }
  getDrinkInfo() {
    return (`Ваш ${this.name} ${this.size} стоит ${this.price} $, с ${this.sugar} и долькой: ${this.lemon}`);
  }
}

class Karak extends Drink {
  constructor(name, size, price, spices) {
    super(name, size, price);
    this.spices = spices;
  }
  getDrinkInfo() {
    return (`Держи ${this.name} ${this.size}, он стоит ${this.price} $, с ${this.spices}`)
  }
}

class Cafe {
  constructor(name, location) {
  this.name = name;
  this.location = location;
  }
  

  showCafeInfo () {
    console.log(`This cafe is ${this.name} on ${this.location}`);
  }

  orderDrink(drink) {
    console.log(`Ваш заказ принят - ${drink.name}`);
    drink.serveDrink();
  }
}

const cafe = new Cafe("Master Coffee", "Jandosova st.")
cafe.showCafeInfo();


const coffee = new Coffee("Раф", "M", 20, "Arabica", "3,2%");
console.log(coffee.getDrinkInfo());

const tea = new Tea("Ташкентский чай", "1000 мл", 15, "наватом", "лимона");
console.log(tea.getDrinkInfo());

const karak = new Karak("Карачок", "s", "7", "кардамоном");
console.log(karak.getDrinkInfo());


cafe.orderDrink(coffee);
console.log(coffee.getDrinkTemperature());

cafe.orderDrink(tea);
console.log(tea.getDrinkTemperature());

cafe.orderDrink(karak);
console.log(karak.getDrinkTemperature());
