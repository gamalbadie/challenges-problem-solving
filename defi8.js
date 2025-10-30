const prompt = require("prompt-sync")();

function frequenceChaine(chaine) {
  let resultat = {};

  for (let i = 0; i < chaine.length; i++) {
    let caractere = chaine[i];
    if (resultat[caractere]) {
      resultat[caractere]++;
    } else {
      resultat[caractere] = 1;
    }
  }

  return resultat;
}

let string = prompt("Entrez un chaine : ");
let frequence = frequenceChaine(string);
console.log("La frequence de mot est :",frequence);