//Exemple prompt

/* let whatsYourName = prompt("Comment t'appelles tu?");
console.log("Hello" + " " + whatsYourName); */

//Exemple boucles
function cycleSolaire(param){
      let iterations= param;

      //Exemple for

/*     for(interations = 0; iterations <= 365; iterations++){
        console.log("Une nouvelle journée s'achève");
        if(iterations === 365){
            console.log("Une révolution de la terre autour du soleil vient d'être faite")
        }
    } */

    // Exemple do...while


/* do {
    console.log("Une nouvelle journée s'achève");
    iterations++;
    if(iterations === 365){
        console.log("Une révolution de la terre autour du soleil vient d'être accomplie")
    } 
} while (iterations <= 365); */

    //Exemple while

/*  while (iterations <= 365){
    console.log("Une nouvelle journée s'achève");
    iterations++;
    if(iterations === 365){
        console.log("Une révolution de la terre autour du soleil vient d'être accomplie")
    }}  */
}; 
//Lancer la fonction cycleSolaire:

/* cycleSolaire(0); */

//Exemple forEach

let siriusTeamArray = ["Jeremy", "Christophe", "Julie", "David", "Laetitia", "Vincent", "Gregory"];
let newTeamArray = [];
/* function newTeamFunction(){
    siriusTeamArray.forEach(element =>
                            //console.log("Salut " + `${element}`)
                            {
                             newTeamArray.push("salut"+ ' ' + element)
                            }
                            
    );
    console.log(newTeamArray)

}
newTeamFunction(); */

/* const myFunction = () => {
    console.log("salut");
}
myFunction(); */

//Exemple pop();

/* console.log(siriusTeamArray.pop());
 console.log(siriusTeamArray); */

//Exemple shift();

/* console.log(siriusTeamArray.shift()); 
console.log(siriusTeamArray); */

//Exemple push();

/* console.log(siriusTeamArray.push("Jeremy", "Gregory"));
console.log(siriusTeamArray); */

//Exemple findIndex();
/* const index= siriusTeamArray.findIndex(element => element === "Laetitia");
console.log(index);
console.log(siriusTeamArray[index]);  */