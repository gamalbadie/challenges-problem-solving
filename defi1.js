const prompt = require("prompt-sync")();

function nbFacons(n) {
  if (n <= 2) return n;
  let a = 1, b = 2;
  for (let i = 3; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

let n = parseInt(prompt("Entrez le nombre de marches : "));

if ( n <= 0 ) {
  console.log("Veuillez entrer un nombre entier positif.");
} else {
  let result = nbFacons(n);
  console.log(`Il existe ${result} façons de monter ${n} marches.`);
}