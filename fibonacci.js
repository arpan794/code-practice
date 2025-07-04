function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  // Example
  console.log(fibonacci(6)); // Output: 8 (0, 1, 1, 2, 3, 5, 8)
  

  
  
  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  // Example
  console.log(reverseString("hello")); // Output: "olleh"
  

  
  
  
  function isPalindrome(str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');
  }
  
  // Example
  console.log(isPalindrome("madam")); // Output: true
  console.log(isPalindrome("hello")); // Output: false
  



  function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
  }
  
  // Example
  console.log(factorial(5)); // Output: 120

  


  function findLargestNumber(arr) {
    return Math.max(...arr);
  }
  
  // Example
  console.log(findLargestNumber([3, 5, 7, 2, 8])); // Output: 8

  


  function countOccurrences(str, char) {
    return str.split(char).length - 1;
  }
  
  // Example
  console.log(countOccurrences("hello world", "l")); // Output: 3

  


  function removeDuplicates(arr) {
    return [...new Set(arr)];
  }
  
  // Example
  console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); // Output: [1, 2, 3, 4]

  

  function findCommonElements(arr1, arr2) {
    return arr1.filter(element => arr2.includes(element));
  }
  
  // Example
  console.log(findCommonElements([1, 2, 3], [2, 3, 4])); // Output: [2, 3]
  


  function sortArray(arr) {
    return arr.sort((a, b) => a - b);
  }
  
  // Example
  console.log(sortArray([5, 3, 8, 1])); // Output: [1, 3, 5, 8]
 
  


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
  



//   Binary Search
// Problem: Implement binary search to find the index of a target element in a sorted array.

// javascript
// Copy

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1; // Not found
}

// Example
console.log(binarySearch([1, 2, 3, 4, 5, 6], 4)); // Output: 3




function findSecondLargest(arr) {
    let largest = -Infinity;
    let secondLargest = -Infinity;
  
    for (let num of arr) {
      if (num > largest) {
        secondLargest = largest;
        largest = num;
      } else if (num > secondLargest && num < largest) {
        secondLargest = num;
      }
    }
  
    return secondLargest;
  }
  
  // Example
  console.log(findSecondLargest([1, 2, 3, 4, 5])); // Output: 4




  function findPosition(arr, target) {
    let position = -1; // Initialize the position to -1, indicating not found
  
    arr.forEach((element, index) => {
      if (element === target) {
        position = index;  // Update position when the target is found
      }
    });
  
    return position;
  }
  
  // Example usage:
  const arr = [10, 20, 30, 40, 50];
  const target = 30;
  const position = findPosition(arr, target);
  console.log("Position of the target is:", position);




  function moveZerosToEnd(nums) {
    let count = 0;
    const result = [];
  
    for (let i = 0; i < nums.length; i++) {
       if (nums[i] === 0) {
          count++;
       } else {
          result.push(nums[i]);
       }
    }
  
    while (count > 0) {
       result.push(0);
       count--;
    }
  
    return result;
 }
  
 // Example usage:
 const nums = [0, 1, 0, 3, 12];
 console.log(moveZerosToEnd(nums)); // output = [1,3,12,0,0]
  



 function findMissingNumber(arr, n) {
    // Calculate the expected sum of numbers from 1 to n
    const expectedSum = (n * (n + 1)) / 2;
    
    // Calculate the actual sum of the array
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
    
    // The missing number is the difference
    return expectedSum - actualSum;
  }
  
  // Example usage:
  const arr = [1, 2, 4, 5, 6];  // The array contains numbers from 1 to 6, but 3 is missing
  const n = 6;
  const missingNumber = findMissingNumber(arr, n);
  console.log("The missing number is:", missingNumber);

  


  function isArraySorted(arr) {
    // Loop through the array from the first to the second-to-last element
    for (let i = 0; i < arr.length - 1; i++) {
      // If the current element is greater than the next element, return false
      if (arr[i] > arr[i + 1]) {
        return false;
      }
    }
    // If no pair was found where arr[i] > arr[i + 1], the array is sorted
    return true;
  }
  
  // Example usage:
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [1, 3, 2, 4, 5];
  
  console.log(isArraySorted(arr1)); // Output: true
  console.log(isArraySorted(arr2)); // Output: false




  function removeDuplicates(arr) {
    // Convert array to Set and back to array to remove duplicates
    return [...new Set(arr)];
  }
  
  // Example usage:
  const arr = [1, 2, 2, 3, 4, 4, 5];
  const uniqueArr = removeDuplicates(arr);
  console.log("Array without duplicates:", uniqueArr);

 /* Explanation:
new Set(arr):

The Set object in JavaScript is a collection of unique values. When we pass the array arr to the Set constructor (new Set(arr)), it automatically removes any duplicate values because a Set can only contain unique values.
For example, if arr = [1, 2, 2, 3, 4, 4, 5], then new Set(arr) will give us a Set with the values {1, 2, 3, 4, 5}.
The Spread Operator (...):

The spread operator (...) is used to unpack or "spread" the values of an iterable (like an array, Set, or Map) into individual elements.
When you use the spread operator on a Set ([...new Set(arr)]), it takes each value from the Set and places it into a new array.
The spread operator is syntactic sugar to achieve something similar to Array.from() but in a more concise way.
Why This Works:

After converting the array to a Set (new Set(arr)), we get rid of duplicates.
The spread operator then converts the Set back into an array. The result is an array of unique values. */
  
  



function generateSubarrays(arr) {
    let subarrays = [];
  
    // Outer loop for the start of the subarray
    for (let start = 0; start < arr.length; start++) {
      // Inner loop for the end of the subarray
      for (let end = start + 1; end <= arr.length; end++) {
        // Slice the array from start to end (end is exclusive)
        subarrays.push(arr.slice(start, end));
      }
    }
  
    return subarrays;
  }
  
  // Example usage:
  const arr = [1, 2, 3];
  const result = generateSubarrays(arr);
  console.log(result);

  
  /* [
  [1],       // Subarrays starting at index 0
  [1, 2],
  [1, 2, 3],
  [2],       // Subarrays starting at index 1
  [2, 3],
  [3]        // Subarrays starting at index 2
]
 */





function reverseString(str) {
  // Convert string to array, reverse it, and then join it back to a string
  return str.split('').reverse().join('');
}

// Example usage:
const originalString = "Hello, World!";
const reversedString = reverseString(originalString);
console.log(reversedString); // Output: "!dlroW ,olleH"




function reverseString(str) {
  let reversed = '';

  // Loop through the string from the end to the beginning
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i]; // Add each character to the result
  }

  return reversed;
}

// Example usage:
const originalString = "Hello, World!";
const reversedString = reverseString(originalString);
console.log(reversedString); // Output: "!dlroW ,olleH"







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
  const numStr = num.toString();

  // Reverse the string
  const reversedStr = numStr.split('').reverse().join('');

  // Compare the original string with the reversed string
  return numStr === reversedStr;
}

// Example usage:
console.log(isPalindromeNumber(121)); // Output: true
console.log(isPalindromeNumber(-121)); // Output: false
console.log(isPalindromeNumber(10)); // Output: false
console.log(isPalindromeNumber(12321)); // Output: true






function countVowels(str) {
  // Initialize a counter for vowels
  let count = 0;

  // Convert the string to lowercase to handle both uppercase and lowercase vowels
  str = str.toLowerCase();

  // Loop through each character in the string
  for (let i = 0; i < str.length; i++) {
    // Check if the character is a vowel
    if ('aeiou'.includes(str[i])) {
      count++; // Increment the counter if it's a vowel
    }
  }

  return count; // Return the total number of vowels
}

// Example usage:
console.log(countVowels("Hello World!")); // Output: 3
console.log(countVowels("JavaScript is awesome!")); // Output: 7
console.log(countVowels("AEIOU")); // Output: 5




function countVowels(str) {
  // Use a regular expression to match vowels (case-insensitive)
  const vowels = str.match(/[aeiouAEIOU]/g); // 'g' for global match (all occurrences)

  // If vowels is null, return 0 (no vowels found)
  return vowels ? vowels.length : 0;
}

// Example usage:
console.log(countVowels("Hello World!")); // Output: 3
console.log(countVowels("JavaScript is awesome!")); // Output: 7
console.log(countVowels("AEIOU")); // Output: 5
console.log(countVowels("bcdfghjklmnpqrstvwxyz")); // Output: 0





function printVowels(str) {
  // Use a regular expression to match vowels (case-insensitive)
  const vowels = str.match(/[aeiouAEIOU]/g); // 'g' for global match (all occurrences)

  // If vowels are found, print them; otherwise, inform the user that no vowels are present
  if (vowels) {
    console.log(vowels.join('')); // Join the vowels array into a string and print it
  } else {
    console.log("No vowels found.");
  }
}

// Example usage:
printVowels("Hello World!"); // Output: "eoo"
printVowels("JavaScript is awesome!"); // Output: "aaAiiiaoe"
printVowels("BCDFGHJKLMNPQRSTVWXYZ"); // Output: "No vowels found."
