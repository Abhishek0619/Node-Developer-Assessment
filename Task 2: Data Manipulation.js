function sumArray(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

// Example
const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers)); // Sum: 15
