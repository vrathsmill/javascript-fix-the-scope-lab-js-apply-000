var animal = 'dog'

function myAnimal() {
  var animal = "dog";
  return animal
}

function yourAnimal() {
  var animal = "cat";
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal
}

function add2(n) {
  var two = 2
  return n + two;

  // Feel free to move things around!

}

function funkyFunction() {
  return function() {
    return "FUNKY!";
  }
}

// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
var somethingElse = funkyFunction();
var theFunk = somethingElse();
