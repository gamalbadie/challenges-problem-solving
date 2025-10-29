function compteurVoyelles(chaine) {
  let compteur = 0;

  for (let i = 0; i < chaine.length; i++) {
    let lettre = chaine[i];
    if (
      lettre === "a" || lettre === "e" || lettre === "i" || lettre === "o" || lettre === "u"
    ) {
      compteur++;
    }
  }

  return compteur;
}

console.log(compteurVoyelles("AGREGOUR"));
