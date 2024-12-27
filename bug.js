function foo(a, b) {
  if (a === 0 || b === 0) { 
    return 0; //Incorrect handling of 0 values
  }
  return a / b;
}

console.log(foo(10, 2)); // Output: 5
console.log(foo(0, 2)); // Output: 0
console.log(foo(10, 0)); // Output: Infinity //Bug: Should ideally throw an error or return NaN
console.log(foo(0,0)); //Output: 0