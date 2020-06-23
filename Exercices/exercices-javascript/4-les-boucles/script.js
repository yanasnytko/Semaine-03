// Exercice 1: A l'aide d'une boucle, affiche les chiffres de 0 à 100, place les chiffres dans un tableau que tu nommeras fizzBuzzArray, à l'aide de la méthode .push()
let boucle = 0;
let fizzBuzzArray = [];
while (boucle <= 100) {
  console.log(boucle);
  fizzBuzzArray.push(boucle++);
}
//console.log(fizzBuzzArray);

// Exercice 2: Toujours à l'aide d'une boucle, passe sur chaque élément du tableau que tu viens de créer (fizzBuzzArray), si l'élément est divisible par trois affiche "fizz" dans la console, si l'élément est divisible par cinq affiche "buzz", si il est divisible par trois et par cinq affiche "fizzBuzz"

// Test 1
/*
function modulo(n) {
  do {
    console.log('fizzBuzz');
    if (n % 3 === 0 && n % 5 === 1) {
      console.log('fizz');
    }
    if (n % 5 === 0 && n % 3 === 1) {
      console.log('buzz');
    }
  } while (n % 3 === 0 && n % 5 === 0);
}
fizzBuzzArray.forEach(element => {
  do {
    modulo(element);
    if (element >= 100) {
      break;
    }
  } while (element <= 100);
}); */

// Test 2
/*
fizzBuzzArray.forEach(element => {
  do {
    do {
      console.log('fizzBuzz');
      if (element % 3 === 0 && element % 5 === 1) {
        console.log('fizz');
      } else {
        break;
      }
    } while (element % 3 === 0 && element % 5 === 0);
  } while (element === 100);
}); */

// Test 3
/*
fizzBuzzArray.forEach(element => {
  if (element % 3 === 0 && element % 5 === 0) {
    console.log('fizzBuzz');
  } else {
    for (element = element; element % 3 === 0; console.log('fizz')) {
      if (element > 100) {
        break;
      }
    }
  }
}); */

// Test 4
/*
fizzBuzzArray.forEach(element => {
  if (element <= 100) {
    for (element == element; element % 3 === 0; console.log('fizzBuzz')) {}
  } else {
    break;
  }
}); */

// Test 5
/*
fizzBuzzArray.forEach(element => {
  for (element = element; element % 3 === 0; console.log('fizz')) {
    if (element >= 100) {
      break;
    }
  }
}); */

// Test 6

fizzBuzzArray.forEach(element => {
  if (element % 3 == 0 && element % 5 == 0) {
    console.log('fizzBuzz');
  } else {
    if (element % 3 == 0) {
      console.log('fizz');
    } else {
      if (element % 5 == 0) console.log('buzz');
      else console.log(element);
    }
  }
});

// Exercice 3: A l'aide de l'objet Date (voir: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date) affiche tous les vendredi 13 de l'année 2020
new Date(2020);

function don_date_format(d1) {
  var m = new Array(13);
  m[1] = 'Janvier';
  m[2] = 'Février';
  m[3] = 'Mars';
  m[4] = 'Avril';
  m[5] = 'Mai';
  m[6] = 'Juin';
  m[7] = 'Juillet';
  m[8] = 'Août';
  m[9] = 'Septembre';
  m[10] = 'Octobre';
  m[11] = 'Novembre';
  m[12] = 'Décembre';
  var d = new Array(8);
  d[1] = 'Dimanche';
  d[2] = 'Lundi';
  d[3] = 'Mardi';
  d[4] = 'Mercredi';
  d[5] = 'Jeudi';
  d[6] = 'Vendredi';
  d[7] = 'Samedi';
  var mois = m[d1.getMonth() + 1];
  var jour = d[d1.getDay() + 1];
  var date = d1.getDate();
  var an = d1.getYear();
  if (an < 200) an += 1900;
  date = jour + ' ' + date + ' ' + mois + ' ' + an;
  return date;
}
function prochain() {
  var dt_jour = new Date();
  var an = dt_jour.getYear();
  if (an < 200) an += 1900;
  var m = dt_jour.getMonth();
  var d = dt_jour.getDate();
  if (d > 13) m++;
  var ven = '';
  while (ven == '') {
    dt_jour.setDate(13);
    dt_jour.setMonth(m);
    dt_jour.setYear(an);
    if (dt_jour.getDay() == 5) {
      ven = don_date_format(dt_jour);
    }
    m++;
    if (m == 13) {
      m = 0;
      an++;
    }
  }
  return ven;
}
function getVendredi() {
  var an = document.forms[0].elements[0].value;
  var dt_jour = new Date();
  document.forms[0].elements[2].value = unescape(
    "Les vendredi 13 de l'année " + an + '%0D%0A'
  );
  for (var i = 0; i < 12; i++) {
    dt_jour.setMonth(i);
    dt_jour.setDate(13);
    dt_jour.setYear(an);
    if (dt_jour.getDay() == 5) {
      document.forms[0].elements[2].value +=
        ' ' + unescape(don_date_format(dt_jour) + '%0D%0A');
    }
  }
}
