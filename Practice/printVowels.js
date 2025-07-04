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
  