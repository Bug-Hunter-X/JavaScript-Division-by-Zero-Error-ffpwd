# JavaScript Division by Zero Bug

This repository demonstrates a common JavaScript error related to division by zero. The `foo` function in `bug.js` incorrectly handles cases where either the numerator or denominator is zero.  Instead of throwing an error or returning `NaN` (Not a Number), it returns `0` or `Infinity`, which can lead to unexpected behavior in your program. The `bugSolution.js` file provides a corrected version that addresses this issue.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js` and run the code. Observe the incorrect output when dividing by zero.
3. Open `bugSolution.js` and run the code. Note the improved handling of zero values.

## Solution

The solution involves adding explicit checks for zero values in the denominator. If the denominator is zero, the function should either return `NaN` or throw an error to clearly indicate the invalid operation.