function sommeAvantNegatif(array) {
  let somme = 0;

  for (let nombre of array) {
    if (nombre < 0) {
        break;
    }
    somme = somme + nombre;
  }

  return somme;
}


let nombres = [5, 3, 6, -3, 5, 9];
console.log("La somme est :" ,sommeAvantNegatif(nombres));
