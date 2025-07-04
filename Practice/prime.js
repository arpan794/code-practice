function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
  
  // Example
  console.log(isPrime(7)); // Output: true
  console.log(isPrime(10)); // Output: false
  




  function isPrime(num) {
    if (num <= 1) {
      return false; // Numbers less than or equal to 1 are not prime
    }
  
    // Loop from 2 to num - 1 to check divisibility
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false; // num is divisible by i, so it's not prime
      }
    }
  
    return true; // If no divisors were found, num is prime
  }
  
  // Example usage
  const number = 29;
  if (isPrime(number)) {
    console.log(`${number} is a prime number.`);
  } else {
    console.log(`${number} is not a prime number.`);
  }
  