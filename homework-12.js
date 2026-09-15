//Задание 3 с структурами

class Warrior {
  constructor(name, weapon, role) {
    this.name = name;
    this.role = role;
    this.weapon = weapon;
  }

  showInfo() {
  console.log(`${this.name}, ${this.weapon}, ${this.role}`)
}
}

class Medic extends Warrior {
  constructor(name, weapon, role, rank) {
    super(name, weapon, role, rank);
    this.rank = rank;
  }

  showFullInfo() {
    console.log(`${this.name}, with ${this.weapon}, ${this.role} and his rank is ${this.rank}`)
  }
}

const combatMedic = new Medic(`Doc`, `Desert Eagle`, `Support`, `Captain`)
console.log(combatMedic.name)
console.log(combatMedic.weapon)
console.log(combatMedic.role)

combatMedic.showInfo()
combatMedic.showFullInfo()
