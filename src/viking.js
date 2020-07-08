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

  saxonAttack() {
    const saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    const damage = viking.receiveDamage(saxon.strength);
    if (viking.health <= 0) {
      this.vikingArmy.splice(viking, 1);
    }
    return damage;
  }

  showStatus() {
    if (!this.saxonArmy.length) {
      return `Vikings have won the war of the century!`;
    } else if (!this.vikingArmy.length) {
      return `Saxons have fought for their lives and survived another day...`;
    } else {
      return `Vikings and Saxons are still in the thick of battle.`;
    }
  }
}
