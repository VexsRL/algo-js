let prenoms = ["Heddi", "Alexis", "Nicolas"]
console.log(prenoms);

prenoms.push("Marion");
console.log(prenoms);

prenoms.splice(0,1); //suppression d'Heddi
prenoms.splice(1,1); //suppression de Nicolas
console.log(prenoms);

//Alexis et Marion

prenoms.splice(1,0,"Jean")