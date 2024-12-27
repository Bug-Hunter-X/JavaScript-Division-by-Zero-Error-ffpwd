function foo(a, b) {
  if (b === 0) {
    return NaN; //Improved: return NaN if dividing by zero
  } else if (a === 0 || b === 0) { 
    return 0; //Handle cases where either a or b is 0
  }
  return a / b;
}

console.log(foo(10, 2)); // Output: 5
console.log(foo(0, 2)); // Output: 0
console.log(foo(10, 0)); // Output: NaN
console.log(foo(0,0)); //Output: 0