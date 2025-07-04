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