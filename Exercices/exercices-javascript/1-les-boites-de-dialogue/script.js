// Exercice 1: affiche Hello World dans une boite de dialogue alert();
// window.alert('Hello World');

// Exercice 2: Place ton code précédent en commentaire, dans un prompt, demande son prénom à l'utilisateur, ensuite, à l'aide d'un alert() affiche "Salut" + le prénom de l'utilisateur
/*
let whatsYourName = prompt("What's your name, man?", 'ex: Yana');
console.log(whatsYourName);
window.alert(`Salut ${whatsYourName}`);
*/

// Exercice 3: Place ton code précédent en commentaire. Dans un prompt, demande son âge à l'utilisateur, ensuite, à l'aide d'un .confirm() vérifie si l'âge de l'utilisateur est bien supérieur à 18 ans, si oui, demande à l'utilisateur de confirmer son âge et affiche "Bienvenue" dans une alert()

// simple
/*
window.prompt('How old are you?');
window.confirm('More than 18 yo?');
if (window.confirm == true) {
  window.alert('Bienvenue !');
} else {
  window.alert('Too young, dude!');
}
*/

// avec vérification
let whatsYourAge = window.prompt('How old are you?');
if (whatsYourAge >= 18) {
  let ageSecurity = window.confirm('More than 18 yo, sure?');
  if (ageSecurity == true) {
    window.alert('Bienvenue !');
  } else {
    window.alert('Too young, dude!');
  }
} else {
  window.alert('Too young, dude!');
}
