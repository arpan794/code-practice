function findCommonElements(arr1, arr2) {
    return arr1.filter(element => arr2.includes(element));
  }
  
  // Example
  console.log(findCommonElements([1, 2, 3], [2, 3, 4])); // Output: [2, 3]
  






  function findCommonElements(arr1, arr2) {
    let commonElements = [];  // Array to store common elements
  
    // Loop through the first array
    for (let i = 0; i < arr1.length; i++) {
      // Loop through the second array
      for (let j = 0; j < arr2.length; j++) {
        // If a common element is found
        if (arr1[i] === arr2[j]) {
          // Check if the element is already added to commonElements
          let isDuplicate = false;
          for (let k = 0; k < commonElements.length; k++) {
            if (commonElements[k] === arr1[i]) {
              isDuplicate = true;
              break;
            }
          }
          if (!isDuplicate) {
            commonElements.push(arr1[i]);  // Add the common element to the result
          }
        }
      }
    }
  
    return commonElements;
  }
  
  // Example usage:
  let array1 = [1, 2, 3, 4, 5];
  let array2 = [4, 5, 6, 7, 8];
  
  let result = findCommonElements(array1, array2);
  console.log("Common Elements:", result);  // output [4,5]
  