//Crée une fonction calculatrice: A l'aide des attributs name des éléments HTML input, récupère la valeur entrée par l'utilisateur dans ces inputs à l'aide de la méthode .value;  Ensuite, à l'aide des id des éléments button, effectue l'opération se rapportant au signe du bouton sur les valeurs récupérées des input. Pour terminer, affiche le résultat dans une boite de dialogue alert().
//Utilisez le bout de code suivant pour ajouter un évennement sur chaque bouton en remplacant le paramètre de getElementById par l'ID correspondant au bouton

// Test 0
/*
let firstNumber = document.getElementsByName('first-number').value;
let secondNumber = document.getElementsByName('second-number').value;

function additionOnClick() {
  document
    .getElementById('addition')
    .addEventListener('click', function addition() {
      console.log(firstNumber + secondNumber);
      // let resultAddition = firstNumber + secondNumber;
      // console.log(resultAddition);
    });
} */

// Test 1
/*
let firstNumber = document.getElementsByName('first-number').value;
let secondNumber = document.getElementsByName('second-number').value;
let parsedFirstNumber = parseInt(firstNumber, 10);
let parsedSecondNumber = parseInt(secondNumber, 10);

function additionOnClick() {
  document
    .getElementById('addition')
    .addEventListener('click', function addition() {
      //console.log(parsedFirstNumber + parsedSecondNumber);
      let resultAddition = parsedFirstNumber + parsedSecondNumber;
      console.log(resultAddition);
    });
} */

// Test 2
/*
let firstNumber = parseInt(
  document.getElementsByName('first-number').value,
  10
);
let secondNumber = parseInt(
  document.getElementsByName('second-number').value,
  10
);

function additionOnClick() {
  document
    .getElementById('addition')
    .addEventListener('click', function addition() {
      //console.log(firstNumber + secondNumber);
      let resultAddition = firstNumber + secondNumber;
      console.log(resultAddition);
    });
} */

// Test 3
/*
function additionOnClick() {
  document
    .getElementById('addition')
    .addEventListener('click', function addition() {
      let firstNumber = document.getElementsByName('first-number').value;
      let secondNumber = document.getElementsByName('second-number').value;
      let parsedFirstNumber = parseInt(firstNumber, 10);
      let parsedSecondNumber = parseInt(secondNumber, 10);
      let resultAddition = parsedFirstNumber + parsedSecondNumber;
      console.log(resultAddition);
    });
} */

// Test 4
/*
function additionOnClick() {
  document
    .getElementById('addition')
    .addEventListener('click', function addition() {
      let firstNumber = document.getElementsByName('first-number').value;
      let secondNumber = document.getElementsByName('second-number').value;
      let resultAddition = firstNumber + secondNumber;
      console.log(resultAddition);
    });
} */

// Suite

function substractionOnClick() {
  document
    .getElementById('soustraction')
    .addEventListener('click', function substract() {
      // Insérez ici le bout de code nécessaire à la réalisation de l'exercice
    });
}

function divisionOnClick() {
  document
    .getElementById('division')
    .addEventListener('click', function division() {
      // Insérez ici le bout de code nécessaire à la réalisation de l'exercice
    });
}

function multiplicationOnClick() {
  document
    .getElementById('multiplication')
    .addEventListener('click', function multiplication() {
      // Insérez ici le bout de code nécessaire à la réalisation de l'exercice
    });
}
