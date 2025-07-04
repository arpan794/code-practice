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
  
  


//   if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
//     count++; // Increment the counter if it's a vowel
// }
