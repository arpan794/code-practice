function removeDuplicates(arr) {
    let uniqueArray = [];  // Array to store unique elements
  
    // Loop through each element of the input array
    for (let i = 0; i < arr.length; i++) {
      let isDuplicate = false;
      
      // Check if the element is already in the uniqueArray
      for (let j = 0; j < uniqueArray.length; j++) {
        if (arr[i] === uniqueArray[j]) {
          isDuplicate = true;  // If found, mark it as duplicate
          break;
        }
      }
      
      // If the element is not a duplicate, add it to uniqueArray
      if (!isDuplicate) {
        uniqueArray.push(arr[i]);
      }
    }
  
    return uniqueArray;
  }
  
  // Example usage:
  let array = [1, 2, 2, 3, 4, 4, 5];
  let result = removeDuplicates(array);
  console.log("Array without duplicates:", result);
  







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
  
  




