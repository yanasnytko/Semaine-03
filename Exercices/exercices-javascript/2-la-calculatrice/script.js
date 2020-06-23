//Crée une fonction calculatrice: A l'aide des attributs name des éléments HTML input, récupère la valeur entrée par l'utilisateur dans ces inputs à l'aide de la méthode .value;  Ensuite, à l'aide des id des éléments button, effectue l'opération se rapportant au signe du bouton sur les valeurs récupérées des input. Pour terminer, affiche le résultat dans une boite de dialogue alert().
//Utilisez le bout de code suivant pour ajouter un évennement sur chaque bouton en remplacant le paramètre de getElementById par l'ID correspondant au bouton

// Test 1
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
      console.log(firstNumber + secondNumber);
    });
} */

// Test 2
/*
function additionOnClick() {
  document
    .getElementById('addition')
    .addEventListener('click', function addition() {
      let firstNumber = parseInt(document.getElementsByName('first-number').value, 10);
      let secondNumber = parseInt(document.getElementsByName('second-number').value, 10);
      console.log(firstNumber + secondNumber);
    });
} */

// Test 3
/*
function additionOnClick() {
  document
    .getElementById('addition')
    .addEventListener('click', function addition() {
      let firstNumber = parseInt(document.getElementsByName('first-number')[0].value, 10);
      let secondNumber = parseInt(document.getElementsByName('second-number')[0].value, 10);
      console.log(firstNumber + secondNumber);
    });
} */

// Test 4

function additionOnClick() {
  document
    .getElementById('addition')
    .addEventListener('click', function addition() {
      let firstNumber = parseInt(document.getElementById('first-number').value);
      let secondNumber = parseInt(
        document.getElementById('second-number').value
      );
      console.log(firstNumber + secondNumber);
    });
}

function substractionOnClick() {
  document
    .getElementById('soustraction')
    .addEventListener('click', function substract() {
      let firstNumber = parseInt(document.getElementById('first-number').value);
      let secondNumber = parseInt(
        document.getElementById('second-number').value
      );
      console.log(firstNumber - secondNumber);
    });
}

function divisionOnClick() {
  document
    .getElementById('division')
    .addEventListener('click', function division() {
      let firstNumber = parseInt(document.getElementById('first-number').value);
      let secondNumber = parseInt(
        document.getElementById('second-number').value
      );
      console.log(firstNumber / secondNumber);
    });
}

function multiplicationOnClick() {
  document
    .getElementById('multiplication')
    .addEventListener('click', function multiplication() {
      let firstNumber = parseInt(document.getElementById('first-number').value);
      let secondNumber = parseInt(
        document.getElementById('second-number').value
      );
      console.log(firstNumber * secondNumber);
    });
}
