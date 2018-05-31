// Recursive Functions Call themselves
function sayDownFrom(n) {
  console.log(n);
  if(n > 1) {
    sayDownFrom(n - 1); // Recursive call
  } else {
    return true; // base case
  }
}

sayDownFrom(5);

// Function called sumUpToFive that adds up all of the number up to five.