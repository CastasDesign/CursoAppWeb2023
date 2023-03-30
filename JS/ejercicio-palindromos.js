function palindromeChecker(str) {
  const newStr = str.replace(/[\W_]/g, "").toLowerCase();
  const strReversed = newStr.split("").reverse().join("");

  return newStr === strReversed ? "es palindromo" : "no es palindromo";
}

console.log(palindromeChecker("anilina"));
console.log(palindromeChecker("hola"));
console.log(palindromeChecker("omo"));
console.log(palindromeChecker("dabale arroz a la zorra el abad"));
console.log(palindromeChecker("somos o no somos"));
console.log(palindromeChecker("anita lava la tina"));

