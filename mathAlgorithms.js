// ------ // რიცხცევის ჯამი

const sumFunction = (num) => {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    sum += i;
  }
  return sum;
};

console.log(sumFunction(10));

// ------ // რიცხვების ნამრავლი, ფაქტორიალი

const factorialFunction = (num) => {
  if (num === 1 || num === 0) {
    return 1;
  }

  for (let i = num - 1; i >= 1; i--) {
    num = num * i;
  }
  return num;
};

console.log(factorialFunction(5));

// ------ // ფიბონაჩი

const fibonacci = (n) => {
  const result = [0, 1];

  for (let i = 2; i <= n; i++) {
    let a = result[i - 1];
    let b = result[i - 2];

    result.push(a + b);
  }
  return result[n];
};

console.log("ფიბონაჩი ელემენტი" + " " + fibonacci(6));

// ------ // ფიბონაჩი

const fibonacciFunc = (n) => {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
};
console.log("ფიბონაჩი კოლექცია" + " " + fibonacciFunc(6));

// ------ // Linear Search

const linearSearch = (arr, item) => {
  for (const element of arr) {
    if (element === item) {
      return "Found";
    }
  }
  return "Not Found";
};

console.log(linearSearch([10, 15, 20, 30], 10));

// ------ // რიცხვების ნამრავლი, ფაქტორიალი

const fact = (n) => {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
};

console.log("fact" + fact(5));

// ------ // Prime Number მარტივი რიცხვი, რომელიც ერთზე და თავისთავზე იყოფა

const isPrime = (n) => {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  // for (let i = 2; i < n; i++) {
  //   if (n % i === 0) {
  //     return false;
  //   }
  // }
  return true;
};

console.log("isPrime?" + " " + isPrime(5));

// Big -O = 0(sqrt(n))

// ------ // Power of two - ორის ხარისხი თუ არის  ?

// let isPowerOfTwo = (n) => {
//   if (n < 1) {
//     return false;
//   }
//   while (n > 1) {
//     if (n % 2 !== 0) {
//       return false;
//     }
//     n = n / 2;
//   }
//   return true;
// };

// console.log("is power of two ? " + " " + isPowerOfTwo(1));
// console.log("is power of two ? " + " " + isPowerOfTwo(2));
// console.log("is power of two ? " + " " + isPowerOfTwo(5));

// Big-O = O(logn)

const isPowerOfTwoBitWise = (n) => {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
};
console.log("is power of two bitwise ? " + " " + isPowerOfTwoBitWise(5));


