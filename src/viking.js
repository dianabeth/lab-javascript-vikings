// Soldier
class Soldier {
  constructor(health, strength) {
    (this.health = health), (this.strength = strength);
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    if (damage) {
      this.health -= damage;
    }
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    if (damage) {
      this.health -= damage;
      return this.health > 0
        ? `${this.name} has received ${damage} points of damage`
        : `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    if (damage) {
      this.health -= damage;
      return this.health > 0
        ? `A Saxon has received ${damage} points of damage`
        : `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {
    if (viking) {
      this.vikingArmy.push(viking);
    }
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    const saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    const damage = saxon.receiveDamage(viking.strength);
    if (saxon.health <= 0) {
      this.saxonArmy.splice(saxon, 1);
    }
    return damage;
  }
}
