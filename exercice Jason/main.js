let Caracteristiques = [        //tableaux des classes
  ["rapide",10,70,20],
  ["ingénieux(se)",75,5,20],
  ["athlète",40,20,40],
  ["robuste",65,15,20],
  ["concentré(e)",25,30,45],
  ["blond(e)",10,80,10]
];

let Prenoms = [     //tableaux des prénoms
  "Dwight", 
  "Jake", 
  "Claudette", 
  "Kate", 
  "Steve", 
  "Alex", 
  "Cheryl",
  "Wayne",
  "Inoue",
  "Boichi",
  "Alrick",
  "Ken",
  "Froggy",
  "Chris",
  "Sonie",
  "Adriana"
];

//création des fonctions pour nomer et créér des caractéristiques
const nameRandom = Math.floor(Math.random() * Prenoms.length); 
const caraRandom = Math.floor(Math.random() * Caracteristiques.length); 

class survivants {
  constructor (name, classe, probaDeath, probAttack, probaSuicide) {
  this.name = name
  this.classe = classe
  this.probaDeath = probaDeath                  //création des stats du survivants
  this.probAttack = probAttack
  this.probaSuicide = probaSuicide
  }

  isAction() {
    let random = Math.floor(Math.random() * 100);     //détermine si les survivants font un move ou pas
    return random;
  }

};

class tueur {
  constructor(nom, hp) {
    this.nom = "Jason";                         //création des stats du tueur
    this.hp = 100;
  }
};

//Détermination des prénoms et classes de chaque survivant + ajout de ce survivant dans la liste

for (let i = 0 ; i < 5 ; i++ ) {
  let RandomPrenoms = Prenoms[Math.floor(Math.random() * Prenoms.length)];
  let randomCaracteristiques = Math.floor(Math.random() * Caracteristiques.length)
  survivants.push (new survivants(RandomPrenoms,Caracteristiques[randomCaracteristiques][0],Caracteristiques[randomCaracteristiques][1],Caracteristiques[randomCaracteristiques][2],Caracteristiques[randomCaracteristiques][3]));
}
console.log(survivants); //display les survivants créés

