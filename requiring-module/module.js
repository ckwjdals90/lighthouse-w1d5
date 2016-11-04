
module.exports = function requiredFunction() {
  return privateFunction();
}

function privateFunction() {
  var comeAndGetIt = console.log("Do you require my aid?");
  return comeAndGetIt;
}