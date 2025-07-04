function bubbleSort(arr) {
    let n = arr.length;
  
    // Outer loop for passing through the array
    for (let i = 0; i < n - 1; i++) {
      // Inner loop for comparing adjacent elements
      for (let j = 0; j < n - i - 1; j++) {
        // Swap elements if they are in the wrong order
        if (arr[j] > arr[j + 1]) {
          // Swap the elements
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
  
  // Example usage:
  let array = [64, 34, 25, 12, 22, 11, 90];
  console.log("Original Array:", array);
  console.log("Sorted Array:", bubbleSort(array) );
  



  function sortArray(arr) {
    return arr.sort((a, b) => a - b);
  }
  
  // Example
  console.log(sortArray([5, 3, 8, 1])); // Output: [1, 3, 5, 8]
 
  