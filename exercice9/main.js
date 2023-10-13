class Pokemon {
    constructor(name, attack, defense, hp, luck) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.hp = hp;
        this.luck = luck;
    }

    isLucky(){
        return Math.floor(Math.random() * 100) <= this.luck;
        } 


    attackPokemon(pokemon){
        if (this.isLucky()) {
            let damage = this.attack - pokemon.defense;
            pokemon.hp -= damage;
            console.log(`${this.name} attaque et inflige ${damage} points de dégâts !`);
        }
        else{
            console.log(`${this.name} a raté son attaque`);
        }
    }

    while (condition) {
        
    }
}

let poke1 = new Pokemon("Charmander", 15, 7, 25, 80);
let poke2 = new Pokemon("Squirtle", 13, 8, 22, 70);

console.log(poke1.attackPokemon(poke2));