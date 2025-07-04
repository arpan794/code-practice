
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
