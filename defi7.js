function estPalindrome(mot) {
  mot = mot.toLowerCase();

  for (let i = 0; i < mot.length / 2; i++) {
    if (mot[i] !== mot[mot.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(estPalindrome("level"));
console.log(estPalindrome("hello"));
