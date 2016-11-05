function isPalindrome(s) {
  var noSpaces = s.replace(/ +?/g, "");   // created var noSpaces to replace the spaces in the input s
  var stringReverse = noSpaces.split("").reverse().join("");

  return noSpaces == stringReverse;       // modified the subjects of comparison
}

module.exports = isPalindrome;
