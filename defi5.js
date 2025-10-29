function tableauMiroir(tab) {
  let array = [];

  for (let i = 0; i < tab.length; i++) {
    array.push(tab[i]);
  }

  for (let i = tab.length - 1; i >= 0; i--) {
    array.push(tab[i]);
  }

  return array;
}

const array = tableauMiroir([1, 2, 3, 4, 5]);
console.log(array);