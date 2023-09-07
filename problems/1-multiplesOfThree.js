// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
// The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

let sumOfMultiples = 0;

const getSumOfMultiples = (n) => {
  for(i=0; i<n; i++) {
    if(i % 3 === 0 || i % 5 === 0) {
      sumOfMultiples += i;
    }
  }
  return sumOfMultiples
}

console.log(getSumOfMultiples(1000))



// Solution
// 1. loop over the numbers 1 to 999
// 2. if the number is a multiple of 3 or 5, continuously add it to the sumOfMultiples variable 
