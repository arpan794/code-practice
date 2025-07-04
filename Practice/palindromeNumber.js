function isPalindromeNumber(num) {
    // If the number is negative or ends with 0 (but is not 0), it cannot be a palindrome
    if (num < 0 || (num % 10 === 0 && num !== 0)) {
      return false;
    }
  
    let reversed = 0;
    let original = num;
  
    while (num > 0) {
      // Get the last digit and build the reversed number
      let digit = num % 10;
      reversed = reversed * 10 + digit;
      num = Math.floor(num / 10); // Remove the last digit from num
    }
  
    return original === reversed; // Compare original and reversed numbers
  }
  
  // Example usage:
  console.log(isPalindromeNumber(121)); // Output: true
  console.log(isPalindromeNumber(-121)); // Output: false
  console.log(isPalindromeNumber(10)); // Output: false
  console.log(isPalindromeNumber(12321)); // Output: true
  





  function isPalindromeNumber(num) {
    // Convert the number to a string
    let str = num.toString();

    // Reverse the string using the reverse function
    let reversedStr = str.split('').reverse().join('');

    // Check if the original string is equal to the reversed string
    if (str === reversedStr) {
        console.log(`${num} is a palindrome number.`);
    } else {
        console.log(`${num} is not a palindrome number.`);
    }
}

// Example usage
let number = 121;
isPalindromeNumber(number); // Output: 121 is a palindrome number.

number = 123;
isPalindromeNumber(number); // Output: 123 is not a palindrome number.
