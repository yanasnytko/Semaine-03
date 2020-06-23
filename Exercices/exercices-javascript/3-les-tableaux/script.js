let castArray = ['Robin', 'Barney', 'Lily', 'Marshal'];

// Exercice 1: ajoute "Ted" au tableau suivant
console.log(castArray.push('Ted'));

// Exercice 2: Affiche l'index de "Ted" dans le tableau dans la console
console.log(castArray.indexOf('Ted'));

// Exercice 3: Affiche l'index de Robin dans le tableau dans la console
console.log(castArray.indexOf('Robin'));

// Exercice 4: retire "Robin" du tableau
console.log(castArray.shift());

// Exercice 5: retire "Ted" du tableau
console.log(castArray.pop());

// Exercice 6: ajoute "Ted" et "Robin" au tableau
console.log(castArray.push('Ted', 'Robin'));

// Exercice 7: Affiche le nouvel index de Ted et Robin dans le tableau dans la console
console.log(castArray.indexOf('Ted'));
console.log(castArray.indexOf('Robin'));

// Exercice 8: à l'aide d'une boucle, affiche chaque élément du tableau dans la console
castArray.forEach(showElement => console.log(showElement));

// Exercice 9: à l'aide de la méthode .findIndex(), trouve l'index de Lily, ensuite, affiche Lily dans la console
let indexLily = castArray.findIndex(indexLily => indexLily === 'Lily');
console.log(indexLily);
console.log(castArray[indexLily]);

// Exercice 10: à l'aide d'une boucle, multiplie par 2 chaque élément du tableau suivant, crée un nouveau tableau à l'aide de la méthode .push(), affiche le nouveau tableau dans la console
let multiplicationArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newMultiplicationArray = [];

function newArrayFunction() {
  multiplicationArray.forEach(multiplication => {
    newMultiplicationArray.push(multiplication * 2);
  });
  console.log(newMultiplicationArray);
}
newArrayFunction();
