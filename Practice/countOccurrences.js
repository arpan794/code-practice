function countOccurrences(str, char) {
    return str.toLowerCase().split(char.toLowerCase()).length - 1;
  }
  
  // Example
  console.log(countOccurrences("hello world", "l")); // Output: 3

 
  



  function countCharacterOccurrences(str, char) {
    let count = 0;  // Initialize counter to 0
  
    // Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
      // If the character matches the current element, increment the count
      if (str[i] === char) {
        count++;
      }
    }
  
    return count;  // Return the count of occurrences
  }
  
  // Example usage:
  let string = "hello world";
  let character = "o";
  let result = countCharacterOccurrences(string, character);
  
  console.log(`The character '${character}' occurs ${result} time(s) in the string.`);
  