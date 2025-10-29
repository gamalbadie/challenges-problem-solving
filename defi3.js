function supprimerDoublons(array) {
  return [...new Set(array)];
}

let entree = [1, 2, 2, 3, 4, 4, 5, 5, 5];
let resultat = supprimerDoublons(entree);
console.log(resultat);