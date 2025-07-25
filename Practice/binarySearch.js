
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
  
  
  