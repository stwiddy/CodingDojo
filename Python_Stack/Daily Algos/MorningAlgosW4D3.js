/* 
  Return the fibonacci number at the nth position, recursively.
  fib(n) = fib(n - 1) + fib(n - 2)
  Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
  The next number is found by adding up the two numbers before it,
  starting with 0 and 1 as the first two numbers of the sequence.
*/

const num1 = 0;
const expected1 = 0;

const num2 = 1;
const expected2 = 1;

const num3 = 2;
const expected3 = 1;

const num4 = 3;
const expected4 = 2;

const num5 = 4;
const expected5 = 3;

const num6 = 8;
const expected6 = 21;

/**
 * Recursively finds the nth number in the fibonacci sequence.
 * - Time: O(?).
 * - Space: O(?).
//  * @param {number} num The position of the desired number in the fibonacci sequence.
//  * @returns {number} The fibonacci number at the given position.
 * memoization <------- 
 */

function fibonacci1(num) {
    if (num < 2) {
        return num
    }
    return fibonacci1(num-1)+fibonacci1(num-2)
}
console.log(fibonacci1(num1)) // Expected: 0
console.log(fibonacci1(num2)) // Expected: 1
console.log(fibonacci1(num3)) // Expected: 1
console.log(fibonacci1(num4)) // Expected: 2
console.log(fibonacci1(num5)) // Expected: 3
console.log(fibonacci1(num6)) // Expected: 21

function fibonacci(num) {
if (num < 2) {
    return num }
var fib = [0, 1]
for ( i = 1; i < num; i++) {
    fib.push(fib[i] + fib[i - 1])
}
    return fib
}
console.log(fibonacci(num1)) // Expected: 0
console.log(fibonacci(num2)) // Expected: 1
console.log(fibonacci(num3)) // Expected: 1
console.log(fibonacci(num4)) // Expected: 2
console.log(fibonacci(num5)) // Expected: 3
console.log(fibonacci(num6)) // Expected: 21
