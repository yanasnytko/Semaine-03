# Javascript

## Introduction

Cette semaine nous allons aborder un concept essentiel de Javascript: les boucles. La semaine dernière nous avons abordé les bases fondamentale dont l'incontournable console.log, cette semaine nous verrons également la box alert et le prompt. Nous verrons également quelques méthodes mathématiques telles que parseInt et parseFloat. Pour finir nous aborderons également les méthodes permettant la manipulation de base des tableaux: la méthode pop, la méthode shift, la méthode push, la méthode findIndex. Mais avant toute chose une première petite introduction au DOM vous attend.

## Table des matières

0. Avant propos: l'objet window, l'objet document, le dom
1. Prompt
2. Alert
3. Confirm
4. ParseInt, ParseFloat
6. Les boucles
7. Pop, shift, push, findIndex

## 0. Avant propos: l'objet window
L'objet Window permet de pointer vers le DOM, qu'est ce que le dom? Lorsque votre navigateur charge votre page web, il commence par lire les méthadonnées de votre fichier HTML.
Vous l'avez déjà peut être remarqué mais dans la construction des méthadonnées, il existe une balise insérée en premier dans votre page:
```html
<!DOCTYPE Html>
```
DocType tenant pour Document Type, en l'occurence il s'agit d'un **document** de type HTML.
Le DOM correspond à l'ensemble de l'arborescence du document HTML. En javascript grâce au mot clé désignant l'objet document nous pouvons de pointer vers un élément particulier du DOM et lui apporter des modifications.
Par exemple: afficher ou cacher au click un menu déroulant.
Pour pointer vers l'ensemble de ces éléments et performer une action sur la page HTML nous utilisons l'objet "window" (fenêtre).
Pour pointer vers un élément particulier il existe plusieurs méthodes utilisant l'objet "document" :

```js
document.getElementById("id")
```
Va pointer un élément du document en utilisant son id
```js
document.getElementByClassName("className");
```
Va pointer un élément du document en utilisant son nom de classe
```js
document.getElementByTagName("tag");
```
Va pointer tous les éléments du même tag (par exemple tous les p de la page)
```js
document.getElementByName("elementName");
```
Va pointer l'élément dont l'attribut de la balise HTML name correspond au paramètre entré. (Par exemple dans le cadre d'un formulaire auquel nous aurions passé l'attribut name)

Il est possible de récupérer les valeurs de ces éléments via l'objet value, nous aborderons ce concept dans les exercices de cette semaine.

## 1. Prompt

La méthode prompt est une méthode qui permet d'ouvrir une boite d'invite. 
Elle s'exécute avant le chargement du site, en priorité sur toute autre opération. Elle attend d'être résolue pour charger la page. De ce fait, si on l'utilise pour une vérification ou une fonction, la valeur du prompt sera toujours récupérée prioritairement sur le reste de l'exécution du code. Nous verrons dans le module avancé à quoi correspondent les cycles de vie.

Cette boîte contient un champs permettant à l'utilisateur de rentrer une valeur (un texte, des chiffres, un nom). Cette valeur peut alors être récupérée via le sélecteur du prompt et réutilisée pour les passer par exemple en paramètres de fonction.
Prenons un exemple d'utilisation et de syntaxe:

```js
 let whatsYourName = prompt("Comment t'appelles tu?", "ex: Jeremy");
 console.log(whatsYourName);
```

Décortiquons l'exemple ci dessus. 
On voit que j'ai assigné la méthode prompt en tant que **valeur** à ma **variable whatsYourName**; Il est en effet tout à fait possible de passer des méthodes ou des fonctions en tant que valeur de variable. La variable est alors de type objet, car une fonction ou une méthode sont des objets.
**prompt(message, défaut);** Dans le constructeur de ma méthode prompte il est possible de passer deux paramètres: le message que l'on veut afficher à l'utilisateur, et une valeur par défaut insérée dans l'input (le champs de saisie);
Ce ne sont toutefois pas des paramètres obligatoires, vous pouvez lancer un prompt sans texte ni valeur par défaut via la commande suivante:
```js
window.prompt();
``` 

Les valeurs retournées:
La valeur est directement enregistrée dans la variable contenant le prompt. Si je console.log cette variable j'aurais directement la valeur rentrée par l'utilisateur affichée dans la console.
**Les valeurs retournées sont automatiquement des chaînes de caractères. Si vous devez récupérer des nombres, il faudra les convertir avant de pouvoir les utiliser!**
Nous verrons dans le chapitre ParseInt et ParseFloat comment réaliser ces opérations.

## 2. Alert
Il s'agit de nouveau d'une méthode pré-établie par javascript.
Dans ce cadre ci elle peut s'exécuter à n'importe quel moment du cycle de vie de la page web (provoquée par un click par exemple, ou une redirection de page, ou en retour d'une fonction pour remplacer le console.log et obtenir un outil "graphique" à utiliser). 
Elle est cependant limitée, la box Alert ne peut contenir qu'un message, elle ne possède pas d'invite. Par contre elle empêche l'utilisateur d'accéder à d'autres contenus tant qu'elle n'a pas été lue et fermée. Elle se comporte comme une modale. Nous verrons plus loins dans le cours à quoi correspondent les modales, retenez simplement ce terme pour l'instant.
Elle se compose donc d'un message, d'un bouton de confirmation. Sans plus. Elle a donc un but parfaitement informatif.
Elle peut servir pour renvoyer le résultat d'une fonction sans avoir à passer par le console.log par exemple.

```js
window.alert("résultat de ma fonction");
```

## 3. Confirm

La méthode confirm est un peu plus élaborée. Elle se comporte également comme une modale et peut également être exécutée à n'importe quel moment du cycle de vie de la page, triggée par une action (au click sur un bouton par exemple).
Elle ouvre une boite de dialogue contenant un message, un bouton confirmer et un bouton annuler.
Le bouton confirmer renverra true, alors que le bouton annuler renverra false.
Cela vous permet de performer ou non une action en fonction de la réponse de l'utilisateur.

Exemple de la MDN:

```js
if(window.confirm("Une nouvelle fenêtre va s'ouvrir")){
    window.open("contact.html", "Vous êtes redirigé vers la page de contact");
}
```
Dans ce cas, la condition vérifie que la valeur renvoyée par la méthode confirm soit true, si c'est le cas elle exécute la redirection. 

## 4. ParseInt, ParseFloat

Ces méthodes permettent de convertir un chiffre de type "chaîne de caractère" en type "nombre" et de les rendre disponnible aux opérations mathématiques.

### parseInt();

Syntaxe:

```js
parseInt("valeur à convertir", base);
```
Permet de convertir un chiffre entier de type chaîne de caractère en un chiffre entier de type nombre
La méthode parseInt requiert deux paramètres. La valeur à convertir, et la base.
La base est un chiffre compris entre 2 et 36. La base peut par exemple convertir une image en chiffre afin de les stocker dans une base de donnée. Il s'agit d'un concept avancé que nous n'aborderons pas dans ce cours.
En ce qui nous concerne retenez que la base à utiliser est la base "décimale" correspondant au chiffre 10.
Votre code se présentera donc sous cette forme:

```js
parseInt("14", 10);
//output: 14
```

Pour aller plus loin: la doc mdn -> https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/parseInt

### parseFloat();

Permet de convertir un chiffre à virgule (décimale) de type chaîne de caractère, en un chiffre à virgule de type nombre.
Syntaxe:

```js
parseFloat("3.14", 10)
//output: 3.14
```
Il possède également deux paramètres, la valeur à convertir, et la base (toujours 10 dans notre cas)

Pour aller plus loin: la doc mdn -> https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/parseFloat

## 5. Les boucles

Le super guide de la MDN sur le concept des boucles:

https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Boucles_et_it%C3%A9ration

### La boucle for

Une boucle permet de performer une action tant que son cycle d'itérations n'est pas rempli par sa condition. 
On peut comparer les itérations comme le cycle de révolution de la terre autour du soleil.
Pour que la terre fasse le tour du soleil elle met 365 jours. Un jour correspond à un tour que la terre fait sur elle même, donc à une itération.
On peut imaginer la boucle de révolution de la terre autour du soleil telle que:

```js
function cycleSolaire(param){
      let iterations= param;
    for(interations = 0; iterations <= 365; iterations++){
        console.log("Une nouvelle journée s'achève");
        if(iterations === 365){
            console.log("Une révolution de la terre autour du soleil vient d'être accomplie")
        }
    }
};
cycleSolaire(0);
```
On peut lire cette fonction de telle manière:
Pour réaliser un cycle solaire, la terre doit réaliser 365 itérations (tour sur elle même). Elle débute ses itérations à 0 et tant qu'elle est inférieure ou égale à 365 elle augmente de 1. 
Pour chaque itération on peut dire qu'une nouvelle journée s'achève.
Si le nombre d'itération est égal à 365 alors la terre a accompli une révolution autour du soleil.

Vous pouvez tester ce bout de code dans la console et observer ce qu'il en sort.
La boucle utilisée ici est une boucle for:
"Pour la variable itérations attribuée à 0 et tant que la valeurs d'itérations est inférieure ou égale à 365, alors j'incrémente la valeur de mon itération et je réalise l'opération entre les accolades"


Il existe d'autre types de boucles, le do-while (fait, tant que), while (tant que), et le forEach (pour chaque élément).

### La boucle do...while

Celle ci exécute une action tant que sa condition n'est pas remplie. Elle ne s'auto incrémente pas cependant contrairement à la boucle for qui possède une auto incrémentation en paramètre de fonction.

Syntaxe :
```js
let iterations = 0
do {
    console.log("Une nouvelle journée s'achève");
    iterations++;
    if(iterations === 365){
        console.log("Une révolution de la terre autour du soleil vient d'être accomplie")
    } 
} while (iterations <= 365);
```

### La boucle while

Encore plus minimaliste, la boucle while part du principe que tant que sa condition n'est pas remplie elle exécute le bout de code donné. De la même façon que do...while, la boucle while n'auto incrémente pas sa condition, il faut le spécifier. L'utilité de ces boucles réside dans le fait que l'on peut leur passer comme condition true / false, contrairement à la boucle for qui ne vérifie que des valeurs numériques.
```js
let iterations = 0
while (iterations <= 365){
    console.log("Une nouvelle journée s'achève");
    iterations++;
    if(iterations === 365){
        console.log("Une révolution de la terre autour du soleil vient d'être accomplie")
    } 
}
```

### La méthode forEach

Contrairement à ses congénères ci dessus, la **méthode** forEach ne peut s'appliquer qu'aux tableaux.
Il s'agit ici de créer une boucle qui va exécuter une fonction pour chaque éléments du tableau donné. Il n'y a pas de condition à remplir contrairement aux précédentes versions. Elle est destinée uniquement à apporter une modification/ une opération pour chaque éléments du tableau.
Par exemple, dans le cas où vous voudriez créer des éléments HTML de manière dynamique, nous pourrions dire que pour tous les éléments titre d'un objet, contenu dans un tableau, je génère un titre h2 dans mon code HTML.

```js
let siriusTeamArray = ["Jeremy", "Christophe", "Julie", "David", "Laetitia", "Vincent", "Gregory"];
siriusTeamArray.forEach(element => 
                        console.log("Salut" + element)s
);
```
## 7. Pop, Shift, Push, FindIndex

Nous allons maintenant aborder, pour ce dernier chapitre de la semaine, quelques méthodes propres aux tableaux qui permettent de les modifier / manipuler simplement.
Nous venons de voir la boucle forEach, spécifique aux tableaux et uniquement aux tableaux.
Nous allons maintenant aborder pop, shift, findIndex, et push

### Pop

La méthode pop() permet de supprimer et retourner le dernier élément d'un tableau. Elle modifie donc la valeur de la propriété length (longueur) du tableau

```js
let siriusTeamArray = ["Jeremy", "Christophe", "Julie", "David", "Laetitia", "Vincent", "Gregory"];
console.log(siriusTeamArray.pop());
//output: "Gregory"
```

### Shift

La méthode shift permet de retirer le premier élément du tableau et de le renvoyer, de la même manière que se comporte la méthode pop.

```js
console.log(siriusTeamArray.shift());
//Output: "Jeremy"
```

### Push

La méthode push permet d'ajouter un ou plusieurs éléments à un tableau et de renvoyer la longueur de ce tableau.
Partons du principe que nous venons de supprimer Jeremy et Gregory du tableau siriusTeamArray et que je souhaite les ajouter à nouveau à la fin de mon tableau:

```js
console.log(siriusTeamArray.length);
// Output: 5
console.log(siriusTeamArray.push("Jeremy", "Gregory"));
//Output: 7
```

### findIndex

La méthode findIndex permet de trouver une correspondance entre un élément et son index dans le tableau.
Elle renvoit l'index du premier élément répondant à la condition.
Si il ne trouve aucune correspondance la valeur renvoyée sera de -1 (false);
Partons toujours de la siriusTeamArray

```js
const index= siriusTeamArray.findIndex(element => element === "Laetitia");
console.log(index);
console.log(siriusTeamArray[index]);
```

## Conclusion

Nous en avons terminé pour la théorie de cette semaine, passons aux exercices! 
Nous travaillerons de la même façon que les exercices de la semaine dernière, avec des dossiers par thématique, un fichier index.html dans lequel vous trouverez les consignes lié à un fichier script.js dans lequel vous les réaliserez.
Bon travail!