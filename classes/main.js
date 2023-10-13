class Guerrier {
    constructor(attack, defense) {
        this.attack = attack;
        this.defense = defense;
    }

    getAttack() {
        console.log(`Le guerrier attaque avec ${this.attack} points !`);
    }
}

let vexs = new Guerrier(10, 5);
vexs.getAttack();
