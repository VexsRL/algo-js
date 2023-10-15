
let feuxRouges = 30;        //nombre de feux rouges
let changement = 0;         //nombre de changements

const Perso = { 
    prenom: "John",         //création du personnage
    santeMentale: 8,
};

const listeMusique = [
    "All About Eve - Steve Vai",
    "Color of Autumn - Nujabes",
    "Wtf U Mean - Haarper, Freddie Dredd",              //création de la liste de musique
    "Seven (Dimitri K edit) - E-Force, Dimitri K",
    "Anissa - Wejdene"
];


while (feuxRouges != 0) {
    const Random = Math.floor(Math.random() * listeMusique.length);                     //determine la musique aléatoire
    console.log(`Il reste ${feuxRouges} feux rouges avant d'arriver`);
    console.log(`La musique en cours de lecture est ${listeMusique[Random]}`);

    if (listeMusique[4] == listeMusique[Random] && Perso.santeMentale > 0) {
        Perso.santeMentale -= 1;
        
        if (Perso.santeMentale == 0) {                                                  //boucle si il entend Wejdene et atteint 0 de santé mentale
            console.log(Perso.prenom + " explose.");
            break;
        }

        else{
            console.log(Perso.prenom + " entend la musique Anissa de Wejdene.");
            console.log(`Il lui reste ${Perso.santeMentale} points de santé mentale`);
            console.log(Perso.prenom + " change de taxi");
            changement += 1;                                                                        //boucle s'il ne meurt pas
            feuxRouges -= 1;
            continue;
        }
    }
    else{
        console.log("Pas de Anissa dans ce taxi.");
        console.log(Perso.prenom + ` a ${Perso.santeMentale} points de santé mentale restants`);        //boucle s'il entend une autre musique que Wejdene
        feuxRouges -= 1;
    }
}

if (Perso.santeMentale > 0 && feuxRouges == 0) {
    console.log(Perso.prenom + ` est arrivé à destination avec ${Perso.santeMentale} points de santé mentale restants.`);       //boucle s'il arrive sain et sauf
    console.log(`Il a changé de taxi ${changement}`);
}