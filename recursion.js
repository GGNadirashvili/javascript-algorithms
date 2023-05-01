//recursive
const recursiveFibonacci = (n) => {
  if (n < 2) {
    return n;
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
};

console.log(recursiveFibonacci(0));
console.log(recursiveFibonacci(1));
console.log(recursiveFibonacci(6));

// Big-O = O(n)

const recursiveFactorial = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
};
console.log("---------------------");
console.log(recursiveFactorial(0));
console.log(recursiveFactorial(2));
console.log(recursiveFactorial(7));

// Big-O = O(n)