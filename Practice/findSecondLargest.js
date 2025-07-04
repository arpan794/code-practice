function findSecondLargest(arr) {
    let largest = -Infinity;
    let secondLargest = -Infinity;
  
    for (let num of arr) {
      if (num > largest) {
        secondLargest = largest;
        largest = num;
      } else if (num > secondLargest && num < largest) {
        secondLargest = num;
      }
    }
  
    return secondLargest;
  }
  
  // Example
  console.log(findSecondLargest([1, 2, 3, 4, 5])); // Output: 4


