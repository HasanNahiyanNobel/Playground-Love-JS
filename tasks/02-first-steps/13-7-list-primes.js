// Task: https://javascript.info/while-for#output-prime-numbers

/**
 * The upper limit (exclusive) to check for prime numbers.
 * @type {number}
 */
const N = 50;

/**
 * Checks if a number is prime.
 *
 * A prime number is a natural number greater than 1 that is not a product of
 * two smaller natural numbers. This function iterates from 2 to n-1 and checks
 * if n is divisible by any of these numbers.
 *
 * @param {number} n - The number to check for primality.
 * @returns {boolean} - Returns true if the number is prime, otherwise false.
 */
function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return n > 1;
}

/**
 * Displays all prime numbers up to a given number.
 *
 * This function iterates from 2 to n-1 and uses the isPrime function to check
 * if a number is prime. If a number is prime, it prints the number.
 *
 * @param {number} n - The upper limit (exclusive) to check for prime numbers.
 */
function showPrimes(n) {
  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;
    printOutput(`<p>${i}</p>`); // A prime
  }
}

printOutput(`<p>Prime numbers up to ${N} are:</p>`);  // A header
showPrimes(N); // Display prime numbers up to N
