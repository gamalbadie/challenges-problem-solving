function premierePlaceLibre(parking) {
  for (let i = 0; i < parking.length; i++) {
    if (parking[i] === 0) {
      return i;
    }
  }
  return -1;
}

// Exemple
const parking = [1, 1, 0, 1, 0];
console.log(premierePlaceLibre(parking));