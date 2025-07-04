function findPosition(arr, target) {
    let position = -1; // Initialize the position to -1, indicating not found
  
    arr.forEach((element, index) => {
      if (element === target) {
        position = index;  // Update position when the target is found
      }
    });
  
    return position;
  }
  
  // Example usage:
  const arr = [10, 20, 30, 40, 50];
  const target = 30;
  const position = findPosition(arr, target);
  console.log("Position of the target is:", position);





  function findPosition(arr, num) {
    // Loop through the array to check each element
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === num) {
        return i;  // Return the index if the number is found
      }
    }
    return -1;  // Return -1 if the number is not found in the array
  }
  
  // Example usage
  const array = [10, 20, 30, 40, 50];
  const number = 30;
  
 // const position = findPosition(array, number);
  
  if (position !== -1) {
    console.log(`The number ${number} is found at index ${position}.`);
  } else {
    console.log(`The number ${number} is not found in the array.`);
  }
  