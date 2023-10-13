let student = {
    prenom : 'Paul',
    favoriteFood : 'Pastas',
    city : 'Paris',
};

let longueur = 0
console.log(longueur  = student.prenom.length + student.favoriteFood.length + student.city.length)

if (longueur%2 == 0) {
    console.log('pair');
}else 
{console.log('impair');
}

// Ternaire
console.log(`Le résultat est ${longueur % 2 ? 'impair' : 'pair'} }`)


/*
let result = 0;
let values = Object.valutes(student);

values.forEach(values) ==> {
    result += value.lengh
});

console.log(result)
*/
/*
result = 0
result = values.reduce(acc, value) ==> acc + value.length,0)
console.log(result);

ex
let tableau = [1, 2, 3]; pour savoir val totale
console.log(tableau.reduce(acc, value)==> acc + value, 0));
*/
