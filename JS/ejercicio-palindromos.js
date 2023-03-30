function palindromeChecker(str) {
  const strReversed = str.split("").reverse().join("");

  return strReversed === str ? "es palindromo" : "no es palindromo";
}
console.log(palindromeChecker("anilina"));
console.log(palindromeChecker("hola"));
console.log(palindromeChecker("omo"));
