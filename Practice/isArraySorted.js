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


